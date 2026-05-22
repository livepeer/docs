# Review: streamplace-byoc-integration.mdx

**Page**: `v2/developers/build/tutorials/streamplace-byoc-integration.mdx`
**Review date**: 2026-05-11
**Reviewer**: agent A9
**pageType (from frontmatter)**: `tutorial`
**Audience (from frontmatter)**: `developer`
**Purpose (from frontmatter)**: `build` (mismatched — see 1.4)
**Bytes**: 6,398
**Checks reference**: `v2/developers1/_workspace/canonical/checks.mdx`

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | 10 required fields | MIXED | All required present; legacy `status: current` (line 26) |
| 1. Frontmatter | 1.2 | pageType canonical | MIXED | `tutorial` declared (line 16) but page is a router/navigation page in disguise — has no walkthrough, no Steps, no Verification. Canonical pageType should be `navigation` or `resource`. **FAIL semantic** |
| 1. Frontmatter | 1.3 | pageVariant | N/A | optional |
| 1. Frontmatter | 1.4 | purpose canonical | FAIL | `purpose: build` (line 18) but page builds nothing — it routes to Solutions tab. Should be `orient` |
| 1. Frontmatter | 1.5 | audience canonical | PASS | `developer` (line 17) |
| 1. Frontmatter | 1.6 | complexity | PASS | `intermediate` (line 19) |
| 1. Frontmatter | 1.7 | lifecycleStage | PASS | `build` (line 20) — questionable; `discover` or `evaluate` more accurate for routing-out page |
| 1. Frontmatter | 1.8 | veracityStatus | PASS | `verified` (line 28) — but see 6.6 |
| 1. Frontmatter | 1.9–1.10 | industry / niche | N/A | |
| 1. Frontmatter | 1.11 | description well-formed | MIXED | "Integrate Streamplace's decentralised video layer into your AT Protocol..." subject-first, 132 chars |
| 1. Frontmatter | 1.12 | OG block complete | PASS | |
| 1. Frontmatter | 1.13 | keywords | PASS | specific (streamplace, at protocol, bluesky, c2pa, byoc) |
| 1. Frontmatter | 1.14 | audience match | MIXED | `developer` audience but content is high-level router for both `developer` + `builder`; the routing-out nature makes audience-match weak |
| 2. Voice | 2.1 | UK English | PASS | only CenteredContainer false-positive |
| 2. Voice | 2.2 | Banned words | PASS | 0 |
| 2. Voice | 2.3 | Banned phrases | PASS | 0 |
| 2. Voice | 2.4 | Banned constructions | MIXED | line 43: "This page exists to route you to the canonical Streamplace documentation" — self-reference. Acceptable for an explicit routing page but flag |
| 2. Voice | 2.5 | Opening order | PASS | line 41: "Streamplace is a Livepeer Special Purpose Entity..." subject-first |
| 2. Voice | 2.6 | Paragraph discipline | PASS | |
| 2. Voice | 2.7 | Audience register | MIXED | router content reads more `builder` (integration scenarios, value layer) than `developer` (code, API) |
| 2. Voice | 2.8 | Per-audience prohibited | PASS | |
| 2. Voice | 2.9 | Passive value | PASS | |
| 2. Voice | 2.10 | Hedging openers | PASS | |
| 2. Voice | 2.11 | Terminology lock | PASS | SPE, BYOC, AT Protocol, C2PA all canonical |
| 2. Voice | 2.12 | Zero em-dashes | PASS | 0 |
| 2. Voice | 2.13 | Entity-led voice | PASS | "Streamplace runs production BYOC workloads...", "The Streamplace node is the boundary..." |
| 2. Voice | 2.14 | Hedging verbs | PASS | |
| 2. Voice | 2.15–2.22 | terminology / glossary | PASS | |
| 2. Voice | 2.D1 | Code-first opening | N/A | no code in this page |
| 2. Voice | 2.D2 | API methods linked | N/A | no code |
| 2. Voice | 2.D3 | Versions explicit | N/A | |
| 2. Voice | 2.D4 | Errors in main | N/A | router content, no error states |
| 2. Voice | 2.D5–D6 | self-evident / marketing | MIXED | line 41-42: "censorship-resistant streaming", "C2PA and Ethereum provenance" — straddles marketing/factual line. Sourceable but presentational |
| 2. Voice | 2.D7 | Note for primary | PASS | |
| 3. Headings | 3.1 | Score ≥20/25 | PASS | "Integration Scenarios" (24), "Streamplace and Livepeer" (22), "Canonical Setup Path" (22), "External Resources" (22), **"Next Steps" FAIL banned (3.2)** |
| 3. Headings | 3.2 | Banned/weak | FAIL | line 116 "## Next Steps" — banned |
| 3. Headings | 3.3 | Contrast labels | PASS | |
| 3. Headings | 3.4 | Domain-anchor | PASS | |
| 3. Headings | 3.5 | Concept not examples | PASS | |
| 3. Headings | 3.6 | Title well-formed | MIXED | "Streamplace BYOC Integration" — 3 words; sidebarTitle "Streamplace Integration" — 2 words |
| 3. Headings | 3.7–3.10 | register / per-pageType | MIXED | naming style fits navigation/orient pages more than tutorial |
| 4. Structure | 4.1 | One purpose | MIXED | Page declares pageType tutorial but functions as router. Mismatch is structural |
| 4. Structure | 4.2 | Purpose test | FAIL | "This page lets the developer [build] Streamplace integration" — page does NOT let them build; it tells them where the build instructions live |
| 4. Structure | 4.3 | PREV/NEXT | PASS | Related routes back to Streamplace overview, BYOC overview, sibling tutorials |
| 4. Structure | 4.4 | No dead ends | PASS | |
| 4. Structure | 4.5 | Prerequisites stated | N/A | router page — no walk-through requires prereqs |
| 4. Structure | 4.6 | Out-of-scope | MIXED | Implicitly out-of-scope: anything that's in `/v2/solutions/streamplace/`. Could be more explicit |
| 4. Structure | 4.7 | Info type | PASS | analytical/routing |
| 4. Structure | 4.8 | No duplication | PASS | content distinct (no overlap with `/v2/solutions/streamplace/`) |
| 4. Structure | 4.9 | Orientation | PASS | |
| 4. Structure | 4.10 | ≥3 cross-tab | PASS | Related Pages has 4 cards: `/v2/solutions/streamplace/overview` (cross-tab), `/v2/developers/build/compute/byoc/overview` (internal), `/v2/developers/build/tutorials/low-latency-live-streaming-app` (internal), `/v2/developers/build/tutorials/vod-upload-and-playback` (internal). Plus inline LinkArrow to Solutions tab (43). 1 cross-tab card in CardGroup + 1 inline LinkArrow — borderline ≥3 |
| 4. Structure | 4.11 | Discord test | MIXED | "How do I integrate Streamplace?" — answer is "see Solutions tab". Page does its job as a router but contributes no original content |
| 4. Structure | 4.12 | Page size | MIXED | 6.4 KB — at lower bound for substantive (≥5 KB) but light for a `tutorial` page |
| 4. Structure | 4.13 | Zero TODO | PASS | |
| 4. Structure | 4.14 | Flat layout | PASS | |
| 4. Structure | 4.15 | Trade-offs named | PASS | line 73-74: "Operators self-host the node for full control; managed deployments use the Streamplace-operated node infrastructure" — trade-off framed |
| 4. Structure | 4.17 | Every code block has lang tag | N/A | no code blocks |
| 4. Structure | 4.18 | Code-first opening | N/A | |
| 4. Structure | 4.19 | Errors in main | N/A | |
| 4. Structure | 4.20 | API methods linked | N/A | |
| 5. Layout | 5.1 | Correct template | FAIL | Declared `tutorial` but uses `navigation`/`resource` template (no Steps, no Code, no Verification) |
| 5. Layout | 5.2 | Required sections | FAIL | tutorial requires Prerequisites + Steps + Verification + Related. Page has Related only |
| 5. Layout | 5.3–5.4 | components | PASS | |
| 5. Layout | 5.5 | Info-type → component | MIXED | 2 raw markdown tables (51-55, 64-71) should be `<StyledTable>`; CardGroup for Canonical Setup is appropriate router pattern |
| 5. Layout | 5.6 | Renders | PASS (presumed) | |
| 5. Layout | 5.7 | Old-schema | FAIL | line 26 `status: current` |
| 5. Layout | 5.8 | CSS custom props | N/A | |
| 5. Layout | 5.9–5.10 | banners / imports | PASS | |
| 5. Layout | 5.11 | Gold-standard template | FAIL | should use `navigation` template (CardGroup-first); currently a half-built tutorial |
| 5. Layout | 5.12 | Section blocks | MIXED | template mismatch |
| 5. Layout | 5.13 | Section ordering | MIXED | template mismatch |
| 5. Layout | 5.14 | Multi-view rules | N/A | |
| 5. Layout | 5.15 | Data imports | PASS | |
| 5. Layout | 5.16 | Related Pages OR Next Step | MIXED | "Next Steps" H2 (116) with `<CardGroup>` |
| 5. Layout | 5.17 | Related Pages format | FAIL | `<CardGroup cols={2}>` (118); cards lack `<CustomCardTitle>` |
| 5. Layout | 5.18 | Tab icon | N/A | |
| 5. Layout | 5.19 | Accordion icon | N/A | no Accordions |
| 5. Layout | 5.20 | Code icon+title | N/A | no code |
| 5. Layout | 5.21 | StyledSteps used | FAIL | declared tutorial but no Steps. Either change pageType or add Steps |
| 5. Layout | 5.22 | Nav cards CustomCardTitle | FAIL | both CardGroups (83 + 118) use direct `title=` on Cards instead of `<CustomCardTitle>` |
| 5. Layout | 5.23 | StyledTable | FAIL | 2 raw markdown tables (51-55, 64-71) |
| 5. Layout | 5.24 | Max 1-2 tables | PASS | 2 tables |
| 5. Layout | 5.25 | Max 1 major element | PASS | |
| 5. Layout | 5.26 | CustomDivider | PASS | dividers placed; `---` at line 39 should be `<CustomDivider />` |
| 5. Layout | 5.27 | Mermaid | MIXED | No diagram. A Mermaid showing Application → SDK → Node → Network → Compute would clarify the routing |
| 5. Layout | 5.28 | Import order | PASS | |
| 5. Layout | 5.29–5.34 | media / styles / drafts | MIXED | `status: current` legacy contradicts |
| 6. Veracity | 6.1 | Claims citable | MIXED | "production BYOC workloads on the Livepeer network" (63) — needs source; "Time to first stream is under fifteen minutes" (96) — uncited |
| 6. Veracity | 6.2 | Code TESTED | N/A | |
| 6. Veracity | 6.3 | Deprecated API | N/A | |
| 6. Veracity | 6.4 | Numbers real | MIXED | "fifteen minutes" claim uncited |
| 6. Veracity | 6.5 | REVIEW flags | PASS | |
| 6. Veracity | 6.6 | veracityStatus honest | MIXED | declares `verified` for a routing page that depends entirely on external SPE docs. Honest position would be `verified` for the routing claims + `unverified` placeholder for any wrapped technical claims (production status, fifteen-minute claim) |
| 6. Veracity | 6.7 | Glossary | PASS | |
| 6. Veracity | 6.8 | Source staleness | PASS | no installed/pinned dependencies on this page |
| 6. Veracity | 6.9 | Open-ended | PASS | |
| 6. Veracity | 6.10 | Source authority | PASS | links to stream.place, docs.stream.place, git.stream.place, github.com/streamplace/streamplace are T1 |
| 6. Veracity | 6.11-6.12 | glossary terms | PASS | |
| 7. Nav | 7.1 | docs.json | PASS | |
| 7. Nav | 7.2 | mirrors filesystem | PASS | |
| 7. Nav | 7.3–7.5 | portals / orphans / journey | PASS | |
| 7. Nav | 7.6 | ≥3 cross-tab | MIXED | 1 explicit cross-tab card (Solutions); inline LinkArrow to Solutions; the other Related cards stay inside developers/ |
| 7. Nav | 7.7 | Correct lane | MIXED | pageType `tutorial` mis-classifies the page; published location correct |
| 7. Nav | 7.8–7.12 | naming / TTL / structure | PASS | |
| 8. Links | 8.1 | Internal | PASS | LinkArrow paths resolve |
| 8. Links | 8.2 | External | NOT-TESTED | stream.place, docs.stream.place, git.stream.place, github.com/streamplace/streamplace — verify all live |
| 8. Links | 8.3 | Snippet imports | PASS | |
| 8. Links | 8.4 | Images | N/A | |
| 8. Links | 8.5 | Renders | PASS (presumed) | |
| 8. Links | 8.6 | No TODO | PASS | |
| 9. Process | 9.1–9.6 | governance | NOT-TESTED | |
| 10. Completeness | 10.1–10.7 | coverage | MIXED | routing role complete; tutorial role unfulfilled |

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| title | Yes | "Streamplace BYOC Integration" | PASS | 3 words |
| sidebarTitle | Yes | "Streamplace Integration" | PASS | 2 words |
| description | Yes | "Integrate Streamplace's decentralised video layer..." | PASS | 132 chars |
| pageType | Yes | tutorial | FAIL | semantic mismatch — page is a router, not a tutorial |
| audience | Yes | developer | PASS | |
| purpose | Yes | build | FAIL | router page; should be `orient` |
| complexity | Yes | intermediate | PASS | |
| lifecycleStage | Yes | build | MIXED | router page; `discover` or `evaluate` more accurate |
| keywords | Yes | array | PASS | |
| og:image (5) | Yes | — | PASS | |
| veracityStatus | Yes | verified | MIXED | router-claims yes; wrapped technical claims unverified |
| lastVerified | Yes | 2026-05-12 | PASS | |
| status | Yes | current | FAIL | legacy field |
| pageVariant | No | — | INFO | |

## Component Audit

| Component | Used? | Required for tutorial? | Notes |
|---|---|---|---|
| `<CustomDivider />` | Yes (6×) | Required | PASS placement |
| `<Tip>` (header CTA) | Yes (36) | Required for tutorial | PASS |
| `<CenteredContainer>` | Yes (35) | — | |
| `<Steps>` / `<StyledSteps>` | No | Required for tutorial | FAIL 5.21 (tutorial pageType requires Steps) |
| `<Tabs>` / `<Tab icon>` | No | — | |
| `<AccordionGroup>` / `<Accordion icon>` | No | — | |
| `<StyledTable>` | No | Required where tables | FAIL 5.23 — 2 raw markdown tables |
| Fenced code with icon+title | No | Required if code (N/A) | |
| `<CardGroup>` / `<Card>` | Yes (83, 118) | — | FAIL 5.17 — both CardGroups, cards lack `<CustomCardTitle>` |
| `<CustomCardTitle>` | No | Required | FAIL |
| `<LinkArrow>` | Yes (43, 75, 104, 105, 106, 107) | — | PASS pattern |

## Cross-page duplication and link gaps

- **OVERLAP**: This page intentionally overlaps with `/v2/solutions/streamplace/overview.mdx`; the page's stated job is to route there. The overlap is by design but means the page contributes ~6 KB of summary content rather than original substance.
- **LINK GAPS**: §"Integration Scenarios" table (51-55) names "AT Protocol app", "Decentralised social platform", "Web3 app" — none linked to AT Protocol spec / Bluesky docs / Web3 framing pages. C2PA (line 41, 54) named without link to C2PA spec.
- **STRANDED**: Reader actively wants to integrate Streamplace; this page tells them to go elsewhere. The page is doing its job, but it could surface the most-likely first-stop within the Solutions content (node install vs SDK quickstart) by linking the specific sub-page rather than just the overview.

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
| Self-reference | 2 | line 36 (in Tip): "this page routes developers there with context"; line 43: "This page exists to route you to the canonical Streamplace documentation" — acceptable for explicit routing page but flag |
| Banned heading | 1 | line 116 "## Next Steps" |
| Deprecated terms | 0 | |

## Heading Score Table

| Heading | Total |
|---|---|
| Integration Scenarios | 24 |
| Streamplace and Livepeer | 22 |
| Canonical Setup Path | 22 |
| External Resources | 22 |
| **Next Steps** | **banned (3.2)** |

## Code Block Audit

N/A — no code blocks. Final closing paragraph (line 114) makes a "Your Streamplace BYOC container is running on the network. The same container pattern works for any Python model; swap the inference logic inside `process_frame()` and redeploy." claim — odd given the page contains no walkthrough and no `process_frame()` reference. This sentence reads like residual content from a different draft.

## Depth analysis (5 layers)

### Layer 1 — Reader outcome
- **Gap:** Reader's outcome is "I want to integrate Streamplace into my AT Protocol app". This page tells them where to go but doesn't help them decide if they should make the trip. No decision matrix ("Use Streamplace if X / use direct Livepeer if Y"). Reader scrolls 6 KB and lands on the Solutions overview with the same questions they started with.
- **Fix step:** Add a §"Should you use Streamplace?" `<Tip>` or `<AccordionGroup>` before §"Canonical Setup Path". 3 bullets: "Use Streamplace if you have an AT Protocol app, need C2PA provenance, or want Bluesky-compatible video metadata. Use direct Livepeer if you want pure video transcoding without provenance/AT layer. Use generic BYOC if you have a non-video container."
- **Source/exemplar:** `huggingface-to-livepeer-advanced.mdx` decision-flow Mermaid + §"Path differences at a glance" — same pattern at smaller scale.

### Layer 2 — Composition
- **Gap:**
  1. pageType `tutorial` mismatches content (5.1, 5.2). Should be `navigation` or `resource`.
  2. 2 raw markdown tables (51-55, 64-71) should be `<StyledTable>`.
  3. CardGroups (83, 118) should be `<Columns>` with `<CustomCardTitle>`.
  4. "Next Steps" banned heading (3.2).
  5. No Mermaid diagram showing the layer stack (Application → SDK → Node → Network → Compute).
  6. Orphan closing paragraph (114) referencing `process_frame()` doesn't fit page scope.
- **Fix step:**
  1. Change `pageType: tutorial` → `pageType: navigation` and `purpose: build` → `purpose: orient`. Adjust template: drop Required Tools framing, lead with Card grid + decision block + routing rationale.
  2. Convert both raw tables to `<StyledTable variant="bordered">`.
  3. Convert both CardGroups to `<Columns cols={X}>` + `<CustomCardTitle icon title horizontal />`.
  4. Rename "Next Steps" → "Related Pages".
  5. Add Mermaid `flowchart TD` showing the 5-layer Application → SDK → Node → Network → Compute stack (already enumerated in the raw markdown table at line 64-71).
  6. Remove orphan paragraph at line 114 OR replace with a genuine "Why this page exists" closer that ties back to the routing intent.
- **Source/exemplar:** `huggingface-to-livepeer-advanced.mdx` §"Path summary" StyledTable for the layer-stack table; `learn/` pages in v2/developers for navigation template.

### Layer 3 — Cross-page integration
- **Gap:** Strong cross-tab presence (Solutions card, BYOC overview card). Where it could go further: links to AT Protocol spec, Bluesky docs, C2PA spec, Streamplace SDK reference are missing. The Card at line 83 points to `/v2/solutions/streamplace/overview` but the reader's most-likely first stop is the SDK Quickstart — should link the sub-page directly if it exists.
- **Fix step:**
  1. Add inline links at first mention: AT Protocol → `https://atproto.com/specs`, Bluesky → `https://bsky.app`, C2PA → `https://c2pa.org/specifications/`, Ethereum provenance → ENS or attestation reference.
  2. Replace single Solutions card at line 83 with a 3-card row pointing to Streamplace overview + Streamplace SDK + Streamplace node install (if those sub-pages exist; otherwise keep single card + add a "Sub-pages of interest:" list).
  3. Add to Related Pages: `/v2/orchestrators/setup/connect` for the orchestrator side that runs Streamplace BYOC workloads.
- **Source/exemplar:** `huggingface-to-livepeer.mdx` Related Pages 4-card pattern.

### Layer 4 — Veracity and source authority
- **Gap:**
  1. "Streamplace runs production BYOC workloads on the Livepeer network" (63) — strong claim, uncited.
  2. "Time to first stream is under fifteen minutes following the canonical guide" (96) — uncited; if it's true, the Solutions overview should be the citation.
  3. "Streamplace Special Purpose Entity (SPE)" (41) — uncited; the term SPE is Livepeer-specific governance language; should link to the SPE definition or registry.
  4. `veracityStatus: verified` for a router page that wraps un-cited external claims.
- **Fix step:**
  1. Add `{/* REVIEW: confirm production-BYOC status + source */}` at line 63 or replace with sourced wording.
  2. Move "fifteen minutes" claim into Solutions tab or remove from this page.
  3. Link "Special Purpose Entity" (41) to the SPE registry or governance page if one exists in `/v2/about/`.
  4. Either downgrade `veracityStatus` to `unverified` or scope-limit the verified claim ("verified as a router page — wrapped technical claims sourced from docs.stream.place").
- **Source/exemplar:** sibling navigation pages in `/v2/developers/learn/` that handle the "router + wrapped claims" pattern.

### Layer 5 — Product-forward depth
- **Gap:**
  1. No maturity signal. Streamplace is Livepeer-SPE-built; is it production? Beta? Active development?
  2. No cost/scope framing. Streamplace adds a node + SDK; what's the ops cost?
  3. No "when not to use" section.
  4. Page closes with orphan paragraph (114) that doesn't fit. Either remove or replace with a "Why route here" close that reinforces the routing decision.
  5. Self-reference at line 36 + 43 is acceptable for a router but the page's role as router should be even more explicit at the top — a `<Tip>` or `<Info>` callout: "This is a router page. The full integration content lives at [Solutions › Streamplace](/v2/solutions/streamplace/overview)."
- **Fix step:**
  1. Add `<Badge>` near header: `<Badge>Production — Livepeer SPE, active development</Badge>` (verify status).
  2. Add §"Trade-offs" or "Operations cost" mini-section with 2 bullets — Streamplace adds: a node binary you run or pay for + SDK dependency. In exchange: AT Protocol metadata + C2PA out of the box.
  3. Add §"When not to use Streamplace" 2 bullets — generic Livepeer streaming (no AT/C2PA needed); generic BYOC (non-video container).
  4. Replace orphan closing paragraph (114) with explicit routing-purpose close: "Continue at [Solutions › Streamplace](/v2/solutions/streamplace/overview) for the canonical setup."
  5. Promote the routing intent to a `<Tip>` at very top (already in Tip line 36 but could be tightened).
- **Source/exemplar:** `learn/where-to-find/studio-paths.mdx` is the in-repo canonical router pattern — emulate.

## Summary

**Verdict**: MODERATE
**Severity counts**: CRITICAL 0 / HIGH 7 / MEDIUM 5 / INFO 4
**Critical findings (1–5)**:
1. `pageType: tutorial` mismatches content — page is a router, not a tutorial (1.2, 5.1, 5.2). Should be `navigation` or `resource`.
2. `purpose: build` mismatches role (1.4). Should be `orient`.
3. H2 "Next Steps" (line 116) banned per 3.2.
4. 2 raw markdown tables (51-55, 64-71) — should be `<StyledTable>` (5.23).
5. Orphan closing paragraph at line 114 references `process_frame()` that's not in the page — residual content from a different draft.

## Prioritised remediation

| # | Step | Lines affected | Severity | Effort | Source/exemplar |
|---|---|---|---|---|---|
| 1 | Reclassify: change `pageType: tutorial` → `pageType: navigation`; `purpose: build` → `purpose: orient`; `lifecycleStage: build` → `lifecycleStage: discover` | 16, 18, 20 | HIGH | S | check 1.2+1.4+5.1 |
| 2 | Remove orphan closing paragraph at line 114 (referencing `process_frame()` not present); replace with explicit routing close pointing back to Solutions overview | 114 | HIGH | S | layer 5 |
| 3 | Rename H2 "Next Steps" (116) → "Related Pages" | 116 | HIGH | S | check 3.2 |
| 4 | Convert 2 raw markdown tables (51-55, 64-71) to `<StyledTable variant="bordered">`; add Tables.jsx import | 31-33, 51-55, 64-71 | HIGH | M | check 5.23 |
| 5 | Convert both `<CardGroup>` (83, 118) to `<Columns cols={X}>` with `<CustomCardTitle icon title horizontal />` | 83-87, 118-131 | HIGH | M | check 5.16+5.17+5.22 |
| 6 | Remove legacy `status: current` field | 26 | HIGH | S | check 5.7 |
| 7 | Resolve veracityStatus: either downgrade to `unverified` for unsourced wrapped claims OR add `{/* REVIEW: */}` markers and keep `verified` | 28, 63, 96 | HIGH | S | check 1.8+6.6 |
| 8 | Add §"Should you use Streamplace?" decision Tip/Accordion before §"Canonical Setup Path" | after 77 | MEDIUM | M | layer 1 |
| 9 | Add Mermaid `flowchart TD` showing the 5-layer Application → SDK → Node → Network → Compute stack; use `MermaidColours.jsx` | after §"Streamplace and Livepeer" intro | MEDIUM | M | check 5.27 |
| 10 | Add inline links at first mention: AT Protocol spec, Bluesky, C2PA spec, SPE definition | 41, 47, 54 | MEDIUM | S | check 6.10 |
| 11 | Replace `---` at line 39 with `<CustomDivider />` | 39 | MEDIUM | S | check 5.26 |
| 12 | Strengthen routing intent: tighten Tip wording at line 36 to make the "this is a router" job explicit | 36 | MEDIUM | S | layer 5 |
| 13 | Add `<Badge>` near header signalling Streamplace maturity (Production/Beta/Active development) | after Tip | INFO | S | layer 5 |
| 14 | Add §"When not to use Streamplace" 2-bullet block | new section before Related | INFO | M | layer 5 |
| 15 | If Solutions tab has sub-pages (SDK Quickstart, Node Install), replace the single Solutions card at line 83 with 3 specific routing cards | 83-87 | INFO | M | layer 3 |
| 16 | Source the "production BYOC workloads" (63) and "fifteen minutes" (96) claims | 63, 96 | INFO | S | check 6.1 |
