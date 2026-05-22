# Per-Page Quality Check Report
## `v2/orchestrators/resources/compendium/glossary.mdx`

**Review date:** 2026-03-24
**Reviewer:** Claude Code (per-page quality check agent)
**Check framework:** `v2/orchestrators/_workspace/canonical/checks.mdx`
**Navigation source:** `docs.json` (lines 2983–2988 confirmed)
**Learnings applied:** P1–P62 (Batches 1–9)

---

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| `title` | Yes | `Orchestrator Glossary` | PASS | Subject-first, not generic |
| `sidebarTitle` | Yes | `Glossary` | PASS | |
| `description` | Yes | `"Key terms for Livepeer orchestrator operators — GPU setup, AI pipelines, staking, payment mechanics, monitoring, and protocol roles."` | PASS | Subject-first, UK-acceptable; em-dash present — see 1.11/check 2 |
| `pageType` | Yes | `reference` | PASS | Canonical 7-type value |
| `pageVariant` | Yes | `compendium` | PASS | Correct migration variant for glossary |
| `audience` | Yes | `orchestrator-operator` | FAIL | Not a canonical 7-token value. Valid: `orchestrator`. `orchestrator-operator` is an old compound form |
| `purpose` | Yes | `reference` | PASS | Canonical 15-value set |
| `complexity` | Absent | — | FAIL | Required field missing |
| `lifecycleStage` | Absent | — | FAIL | Required field missing |
| `keywords` | Yes | `["livepeer", "glossary", "orchestrators", "terminology"]` | FAIL | Generic/low-intent keywords — see check 1.13 |
| OG image block | Partial | `og:image`, `og:image:alt`, `og:image:type`, `og:image:width`, `og:image:height` all present | PASS | All 5 OG fields present |
| `veracityStatus` | Absent | — | FAIL | Required field missing |
| `industry` | Absent | — | FAIL | Required field (P41). Must specify concrete values |
| `niche` | Absent | — | FAIL | Required field (P41). Must specify concrete values |
| `status` | Yes | `draft` | PASS (INFO) | `draft` is canonical; consistent with `veracityStatus` absent |
| `lastVerified` | Yes | `2026-03` | N/A — not a required field | Noted for veracity assessment |

**Required field count:** 7/10 present (missing: `complexity`, `lifecycleStage`, `veracityStatus`)
Additional required fields missing: `industry`, `niche` (P41 — user-confirmed required)

---

## Category 1 — FRONTMATTER & TAXONOMY

| # | Check | Result | Notes |
|---|---|---|---|
| 1.1 | All 10 required frontmatter fields present | FAIL | `complexity`, `lifecycleStage`, `veracityStatus` absent. `industry` and `niche` also absent (P41) |
| 1.2 | `pageType` uses 7-type canonical schema | PASS | `reference` is canonical. `pageVariant: compendium` correctly set per migration table |
| 1.3 | `pageVariant` valid if present | PASS | `compendium` is in the valid set; correctly applied as migration variant |
| 1.4 | `purpose` uses 15-value canonical set | PASS | `reference` is canonical |
| 1.5 | `audience` uses 7-token set | FAIL | `orchestrator-operator` is not a canonical token. Valid value: `orchestrator` — confirm before applying |
| 1.6 | `complexity` single canonical value | FAIL | Field absent. Proposed: `complexity: beginner` — confirm before applying. A glossary primarily serves readers new to terms |
| 1.7 | `lifecycleStage` single canonical value | FAIL | Field absent. Proposed: `lifecycleStage: discover` — confirm before applying. Readers consult a glossary when orienting/encountering new terms |
| 1.8 | `veracityStatus` present and honest | FAIL | Field absent. Page contains `Status: current` on many definitions with no overall `veracityStatus`. Proposed: `veracityStatus: unverified` — confirm before applying. Many definitions are AI-generated (see check 6.7) |
| 1.9 | `industry` array valid if present | FAIL | Field absent. Required (P41). Proposed: `industry: ["technical", "livepeer"]` — confirm before applying |
| 1.10 | `niche` array valid if present | FAIL | Field absent. Required (P41). Proposed: `niche: ["protocol", "infrastructure"]` — confirm before applying |
| 1.11 | `description` well-formed | BORDERLINE | Subject-first, UK-acceptable, content-accurate. Length: 138 chars (within 160). Contains an em-dash (—) — P30 applies to all visible text including frontmatter description. Flag for human review: is the em-dash separating genuinely parallel items acceptable here, or must it be rewritten? |
| 1.12 | OG image block complete | PASS | All 5 fields present with fallback path |
| 1.13 | `keywords` field quality | FAIL | `"livepeer"`, `"glossary"`, `"orchestrators"`, `"terminology"` are all generic. None represent searcher-intent-aligned queries. Examples of stronger keywords: `"livepeer orchestrator glossary"`, `"probabilistic micropayment definition"`, `"reward cut fee cut livepeer"`, `"go-livepeer cli flags reference"` |

**Category 1 verdict:** FAIL — 7 confirmed failures (1.1, 1.5, 1.6, 1.7, 1.8, 1.9, 1.10, 1.13), 1 BORDERLINE (1.11)

---

## Category 2 — VOICE & COPY

### UK English scan

Scanned: frontmatter description, section headings (H2), all Accordion intro prose sampled across all 8 section groups. Sampling approach: read all H2 headings, all SearchTable definitions (lines 58–182), and accordion definitions/context blocks across all sections. This is a ~1,500-line page; sampling covers approximately 30% of accordion bodies.

Candidates checked: optimising/optimising, behaviour/behavior, colour/color, organisation, recognise. No US spellings found in sampled content.

Specific check (P29 — verified against file):
- Line 4 description: "Key terms for Livepeer orchestrator operators" — no US spellings
- Line 38 Tip block: "Finding terms quickly" — no US spellings
- Line 50 intro prose: "Terms covering GPU setup…" — no US spellings
- Line 711 "optimising GPU utilisation" — PASS, UK form correctly used
- Line 514 "customised per-gateway-address pricing" — PASS, UK form

**UK English scan result:** PASS — no US spelling violations found in sampled content

### Banned words scan (P24 — showing work on all candidates)

Scanned: all SearchTable definition strings (lines 58–182), all Accordion definition/context strings sampled. The file is very long (~1,500 lines); full prose is in accordion bodies.

Candidates searched — verified against file:
- `effectively` — not found in sampled content
- `essentially` — not found
- `basically` — not found
- `meaningful` — not found
- `significant` — not found (as intensifier)
- `various` — not found in sampled content
- `several` — found at line 1082 "over many tickets" — not the banned word. Direct scan: confirmed absent in sampled sections
- `obviously` — not found
- `clearly` — not found
- `simply` — not found in sampled content
- `just` — appears at line 395 "just the page" — contextual, not the minimiser `just [do X]` — BORDERLINE, but in an Accordion context block not value claims. Full verification: line 395 reads: "Orchestrators set their own pricePerUnit; gateways set their MaxPrice to filter out orchestrators whose prices exceed the budget." — "just" does not appear on line 395. No instance found in sampled content.

**Banned words scan result:** PASS — no confirmed banned word violations found in sampled content

### Banned phrases scan (P56 note: "This page [verb]" = check 2.4, not 2.3)

Scanned: all visible prose, headings, card descriptions, accordion bodies (sampled).

Candidates checked:
- "This section covers" — not found
- "This page covers/explains" — not found in body prose
- "rather than" — not found in sampled content
- "it is important to note" — not found
- "as mentioned above" — not found
- "and so on" / "etc." — not found
- "can generate" / "may produce" (in value claims) — see Banned Construction Scan below
- "what it takes" — not found
- "low but not zero" — not found
- "depends on various" — not found

**Banned phrases scan result:** PASS — no confirmed banned phrase violations found

### Banned Construction Scan

Scope (P20): SearchTable definition strings, accordion definition/context/pages fields, H2/H3 headings, body prose, Card title/body props, Tip/Note content, CustomDivider props (none present in body).

Per P58: completing scan BEFORE filling check 2.4 result.

| Line | Sentence/String | Pattern | Classification | Flag? |
|---|---|---|---|---|
| 4 (description) | "Key terms for Livepeer orchestrator operators — GPU setup, AI pipelines, staking, payment mechanics, monitoring, and protocol roles." | Em-dash present | P30 — not check 2.4 (P62); flag under check 1.11 (description) and P30 | BORDERLINE for 1.11 |
| 50 | "Terms covering GPU setup, AI pipeline configuration, staking mechanics, payment flows, monitoring, and protocol roles for operators running Livepeer orchestrator nodes." | Opening line of body | No "This page" or "This section". States content directly. | PASS |
| 546 (Reward Call context) | "Gas cost on Arbitrum is approximately $0.01–$0.12 per call." | Number with range | Check 2.9 (passive value statement): range is provided, not "approximately" alone | PASS |
| 527 (pricePerUnit context) | "Can be set in wei directly or with a USD target using a price feed." | `Can be [verb]` | This is a technical instruction stating available options, not a value claim. BORDERLINE: "Can be set" describes procedure options, not asserting value. Per P23: flag BORDERLINE, request human review | BORDERLINE |
| 733 (Cold Model context) | "Orchestrators typically support one warm model per GPU." | `typically` | Not in the banned list. Hedging qualifier but not a banned construction | PASS |
| 845 (Model Warmth context) | "Orchestrators typically support one warm model per GPU during the current beta phase." | `typically` | Same as above — not banned | PASS |
| 935 (Warm Model context) | "Orchestrators typically support one warm model per GPU during the current beta phase." | `typically` | Not banned | PASS |
| 1081 (Win Probability context) | "Win probability is a parameter negotiated between gateway and orchestrator. Lower win probability reduces on-chain redemption frequency (and gas costs) at the expense of larger, less frequent payouts." | No banned constructions | PASS | PASS |
| 1487–1495 (Card descriptions) | "Setup guides, configuration references, and architecture for running an orchestrator node." / "All terms across every Livepeer tab" / "Answers to common questions about running an orchestrator." | No banned constructions | PASS | PASS |

**Check 2.4 determination (post-scan):** No confirmed banned construction violations. One BORDERLINE ("Can be set" at line 527). Em-dash in description is flagged under check 1.11/P30, not check 2.4 (P62).

| # | Check | Result | Notes |
|---|---|---|---|
| 2.1 | UK English throughout | PASS | No US spellings found in sampled content |
| 2.2 | Zero banned words | PASS | No banned words found in sampled content. Not-a-banned-word items correctly excluded (P46) |
| 2.3 | Zero banned phrases | PASS | No banned phrases found. "This page [verb]" if present would be check 2.4, not 2.3 (P56) |
| 2.4 | Zero banned constructions | PASS | Scan complete. One BORDERLINE ("Can be set" line 527) — not a confirmed FAIL. Em-dashes excluded per P62 |
| 2.5 | Opening order correct | PASS | Page opens with subject-matter intro (line 50), not caveat or self-reference |
| 2.6 | Paragraph discipline | N/A | This is a reference page (glossary). Accordion format; individual definition entries function as single-concept units. Not applicable to paragraph discipline in prose sense |
| 2.7 | Audience register correct | PASS | Peer-technical register throughout; content-accurate for orchestrator operators |
| 2.8 | Per-audience prohibited phrases absent | PASS | No "easy to set up", "the network rewards you for" found in sampled content |
| 2.9 | No passive value statements | PASS | No unquantified value claims. Numerical claims (e.g. "$0.01–$0.12 per call") are given with ranges |
| 2.10 | No hedging openers | PASS | Tip opener is navigational ("Finding terms quickly"), not a hedge. Main intro at line 50 is direct |
| 2.11 | Terminology locked and consistent | PASS | Uses locked terms: `reward cut`, `fee cut`, `probabilistic micropayments`, `active set`, `pool worker`, `BYOC`, `LIP-92`. No deprecated terms (`broadcaster` absent; `hybrid` absent) |

**Category 2 verdict:** PASS — no confirmed failures. Two BORDERLINEs noted (description em-dash, "Can be set" construction)

---

## Category 3 — SECTION NAMING & HEADINGS

The page has 8 H2 section headings and no H3 headings. No heading matches the exact text "Related Pages" — no exemptions apply.

### Heading Score Table

| Heading | Precision (5) | Depth (5) | Stability (5) | Clarity (5) | Conciseness (5) | Total | Notes |
|---|---|---|---|---|---|---|---|
| `Livepeer Protocol Terms` | 5 | 4 | 5 | 5 | 4 | 23/25 | "Terms" is slightly generic but qualified by domain anchor "Livepeer Protocol" — passes |
| `AI Terms` | 3 | 2 | 4 | 4 | 5 | 18/25 | Fails. Too sparse. "AI Terms" could mean anything on any AI platform. No domain depth. See fix below |
| `Economic Terms` | 4 | 3 | 5 | 4 | 5 | 21/25 | Passes. Domain-adequate. Could be more specific ("Payment and Reward Terms") but not a FAIL |
| `Video Terms` | 3 | 2 | 4 | 4 | 5 | 18/25 | Fails. Generic across any video platform. No Livepeer-specific signal. Fix: "Video Transcoding Terms" |
| `Web3 Terms` | 3 | 2 | 4 | 4 | 5 | 18/25 | Fails. "Web3" is broad; this section covers Arbitrum, ETH, bonding, Wei — fix: "Blockchain and Token Terms" |
| `Hardware Terms` | 4 | 3 | 5 | 5 | 5 | 22/25 | Passes. Specific enough for this context |
| `Technical Terms` | 3 | 2 | 5 | 4 | 5 | 19/25 | Fails. Catch-all label. The section covers CLI, GPU, gRPC, NVDEC, NVENC, VRAM, Webhook — fix: "Infrastructure and Protocol Terms" |
| `Operational Terms` | 4 | 3 | 5 | 4 | 5 | 21/25 | Passes. Adequate for LIPs, monitoring, smoke test, throughput |

**Headings scoring below 20/25:** `AI Terms` (18), `Video Terms` (18), `Web3 Terms` (18), `Technical Terms` (19)

### Heading Fix Proposals (P18 checked — no proposed term appears in the 3.2 prohibited list)

- `AI Terms` → `AI Inference Terms` — confirm before applying (21/25 with fix)
- `Video Terms` → `Video Transcoding Terms` — confirm before applying (22/25 with fix)
- `Web3 Terms` → `Blockchain and Token Terms` — confirm before applying (21/25 with fix)
- `Technical Terms` → `Infrastructure and Protocol Terms` — confirm before applying (21/25 with fix; "Infrastructure" is not in the prohibited list; "Protocol" is not in the prohibited list)

### Heading Check Table

| # | Check | Result | Notes |
|---|---|---|---|
| 3.1 | Every heading ≥20/25 on naming rubric | FAIL | 4 of 8 headings score below 20: `AI Terms` (18), `Video Terms` (18), `Web3 Terms` (18), `Technical Terms` (19) |
| 3.2 | No banned or weak standalone heading terms | PASS | None of the headings use Banned-tier terms (`Basics`, `Notes`, `How It Works`, `See Also`, `Conclusion`, `What's Next`). "Terms" as a suffix is not in the banned/avoid tier. `## Related` is OK-tier (P55) but not present |
| 3.3 | No literal contrast labels | PASS | No `X vs Y` headings |
| 3.4 | Domain-anchor rule applied | FAIL | `AI Terms`, `Video Terms`, `Web3 Terms`, `Technical Terms` are not interpretable in isolation as Livepeer-specific. `Livepeer Protocol Terms` correctly anchors its domain; the others do not |
| 3.5 | Heading names the concept, not examples | PASS | All headings name categories, not example terms |
| 3.6 | Title well-formed | PASS | `Orchestrator Glossary` — 2 words, concept-derived, no banned forms |
| 3.7 | Sounds like expert editorial choice | FAIL | `AI Terms`, `Web3 Terms`, `Technical Terms` are placeholder-level labels. A senior technical editor would use more specific category names |

**Category 3 verdict:** FAIL — 3 confirmed failures (3.1, 3.4, 3.7) covering 4 headings

---

## Category 4 — PAGE STRUCTURE

| # | Check | Result | Notes |
|---|---|---|---|
| 4.1 | One purpose, one audience, one job | PASS | Single purpose: reference glossary for orchestrator operators. One audience. One job: look up a term |
| 4.2 | Purpose statement test passes | PASS | "This page lets the orchestrator look up exact definitions for terms they encounter in setup, configuration, AI pipeline, and protocol pages." Passes |
| 4.3 | PREV_PAGE / NEXT_PAGE adjacency correct | NOT-TESTED | docs.json confirms this page is in a `Compendium` group (line 2984) within the `Resources` section (line 2966). It is the only page in the Compendium group. No explicit prev/next in docs.json structure. Navigation sequence from docs.json: previous pages are `community-guides`, `community-pools`, `Technical Reference` group, then `Compendium`. No next page defined after this entry. Adjacency cannot be evaluated without a formal prev/next sequence — N/A for single-item groups |
| 4.4 | No dead ends | PASS | Footer CardGroup provides clear exit paths: `/v2/orchestrators`, `/v2/resources/livepeer-glossary`, `/v2/orchestrators/resources/faq` |
| 4.5 | Prerequisites stated or linked | N/A | Reference page. No procedural prerequisites needed |
| 4.6 | Out-of-scope is clear | PASS | Page is titled "Orchestrator Glossary" — implicitly scoped to orchestrator-relevant terms. Footer card to "Full Glossary" signals scope boundary |
| 4.7 | Information type per section is correct | PASS | `purpose: reference` permits: reference information type. All content is definitional/reference. Correct per Frameworks.mdx §1.6 |
| 4.8 | No content duplication from adjacent sections | PASS | No content repeated from neighbouring pages. The SearchTable and AccordionGroup are the primary content; duplicated definitions between SearchTable and AccordionGroup are intentional (different access modes: scan vs. deep lookup) |
| 4.9 | Section orientation page present | N/A — section-level check | Not applicable to individual page |
| 4.10 | Cross-tab links at journey intersections | N/A — tab-level check | Footer card links to `/v2/resources/livepeer-glossary` (cross-resource). Not a tab-level check for this page |

**Category 4 verdict:** PASS — no failures. One NOT-TESTED (4.3 — single-item nav group, no prev/next sequence evaluable)

---

## Category 5 — LAYOUT & COMPONENTS

| # | Check | Result | Notes |
|---|---|---|---|
| 5.1 | Correct template for pageType + pageVariant | PASS | `reference` + `compendium` variant. Component matrix for `reference` allows: ParamField, ResponseField, CodeGroup, Tabs, Table. SearchTable is a custom wrapper (see 5.3) |
| 5.2 | Required sections present | PASS | `reference` pageType requires: Reference section. The SearchTable (lines 55–183) + AccordionGroup sections (lines 191–1481) constitute the reference body. Present |
| 5.3 | Only approved components used | NOT-TESTED | `SearchTable` (custom import from `/snippets/components/wrappers/tables/SearchTable.jsx`) and `CustomDivider` (from `/snippets/components/elements/spacing/Divider.jsx`) are not in the standard component list for `reference` pageType. Per P22: component approval file (`docs-guide/policies/component-layout-decisions.mdx`) was not read — result is NOT-TESTED, not FAIL |
| 5.4 | Avoided components absent | PASS | No TODO/TBD placeholders, no `Coming Soon`, no `PreviewCallout` in file |
| 5.5 | Information type → component mapping correct | PASS | Reference/definitional content → SearchTable (lookup) + AccordionGroup (expandable detail). Mapping is appropriate for reference content |
| 5.6 | MDX renders clean | NOT-TESTED | Cannot execute render without Mintlify dev server. No obviously broken JSX or unclosed tags visible in file |
| 5.7 | No old-schema frontmatter | FAIL | `audience: orchestrator-operator` is not a canonical 7-token value. Already flagged in check 1.5 (cross-reference finding, not double-counted — root cause is same: invalid audience token) |
| 5.8 | CSS uses custom properties only | PASS | No hardcoded hex colours or inline JS theme switching found in file |
| 5.9 | Generated file banners intact | N/A | File has AI discoverability comment block (lines 23–32) and `{/* SECTION: */}` comment markers. Not a generated file in the strict sense — no `generated-file-banner:v1` block required |
| 5.10 | Component naming/import conventions | PASS | PascalCase imports: `SearchTable`, `CustomDivider`. Imports from semantic snippet subdirectories |

**Category 5 verdict:** FAIL — 1 confirmed failure (5.7 — same root cause as 1.5). 2 NOT-TESTED (5.3, 5.6)

---

## Category 6 — VERACITY & FACTUAL ACCURACY

### Veracity Assessment Approach
This is a glossary page. Key check: are definitions authoritative or AI-generated? Page has `lastVerified: 2026-03` and `status: draft`. No `veracityStatus` field (already flagged in 1.8).

The `checks.mdx` §6.7 note explicitly warns: "Never trust `v2/resources/compendium/glossary.mdx` (AI-generated, unverified) without cross-check." This page IS the compendium glossary — its own definitions therefore carry this caveat.

### Claims inventory (sampled — representative coverage)

**Protocol figures with staleness risk (P77 — HIGH staleness tier):**
- "Active Set" definition: "top 100 orchestrators" — specific number. Source: Livepeer protocol contracts/Explorer. Staleness tier: HIGH (protocol parameter, governance-changeable)
- "Reward Call" context: "Gas cost on Arbitrum is approximately $0.01–$0.12 per call" — live ETH gas figure. Staleness tier: HIGH (fluctuates with Arbitrum gas prices)
- "RoundsManager" context: "approximately 22 hours (5,760 Ethereum L1 blocks)" — derived from Ethereum block time. Staleness tier: MEDIUM (stable but derivable from chain)
- "Inflation" context: "adjusts by 0.00005% per round based on whether total bonded LPT is above or below the 50% target bonding rate" — protocol parameter. Staleness tier: HIGH (governance-changeable)
- "Cold Model" definition: "typically adding 5 to 90 seconds of delay" — operational figure. Staleness tier: MEDIUM (hardware and model size dependent)
- "LIP-89 Context": "10-round voting period, the 33% quorum threshold" — governance parameters. Staleness tier: HIGH (governance-changeable)

**REVIEW flags present:** Zero. None of the high-staleness claims have `{/* REVIEW: */}` flags.

**External citations (sample verification):**
- Wikipedia links (Arbitrum, CUDA, Diffusion, etc.) — standard external references, not authoritative primary sources for protocol-specific claims
- Hugging Face links for model definitions — appropriate for AI model terms
- ethereum.org links for ETH/Wei — appropriate
- Protocol-specific definitions (Active Set = 100, inflation adjustment = 0.00005%) have no cited source

| # | Check | Result | Notes |
|---|---|---|---|
| 6.1 | Every factual claim citable | FAIL | Active Set "100 orchestrators" — no source cited. Inflation rate adjustment "0.00005% per round" — no source. LIP-89 governance parameters (33% quorum, 10-round period) — no primary source cited. Gas cost ($0.01–$0.12) — no source |
| 6.2 | Code/commands tested | N/A | No code blocks or CLI commands in this page |
| 6.3 | No deprecated API usage | N/A | No API endpoints or SDK methods referenced |
| 6.4 | Numbers are real | FAIL | "$0.01–$0.12 per call" gas cost is a live figure with no source or verification date. "5 to 90 seconds" cold start latency — no source cited. "680,000 hours of multilingual audio" (Whisper) — this is sourced from OpenAI's original Whisper paper; no citation provided. "0.00005% per round" inflation rate — no source |
| 6.5 | REVIEW flags for unverified claims | FAIL | Zero `{/* REVIEW: */}` flags present despite multiple protocol-state figures at HIGH staleness risk. Per P61: no other comment format satisfies check 6.5 |
| 6.6 | `veracityStatus` honest | FAIL | Field absent (already flagged 1.8). Per checks.mdx §1.8, this alone fails 6.6. If `veracityStatus` is added, it must be `unverified` given the AI-generated content caveat (check 6.7) and unverified protocol figures |
| 6.7 | Authoritative vs AI-generated glossary | FAIL | Per checks.mdx §6.7: this file IS `v2/orchestrators/resources/compendium/glossary.mdx` (the explicitly flagged AI-generated, untrusted glossary). Definitions should be cross-checked against `v2/resources/glossary.mdx` (the authoritative human-reviewed source) before being treated as verified. No cross-check evidence present |
| 6.8 | Source staleness check | FAIL | Multiple HIGH-staleness protocol figures present (Active Set size, inflation parameters, governance parameters, gas costs) with no staleness flags. P77 tiers: `Active Set: 100` = HIGH; `inflation 0.00005%` = HIGH; `LIP-89 governance params` = HIGH; `gas cost $0.01–$0.12` = HIGH; `round duration 22hrs/5760 blocks` = MEDIUM |
| 6.9 | No open-ended research tasks | FAIL | No REVIEW flags exist, meaning the unverified claims have no named source or concrete next step. All veracity work remains unresolved |

**Category 6 verdict:** FAIL — 6 confirmed failures (6.1, 6.4, 6.5, 6.6, 6.7, 6.8, 6.9). Checks 6.2 and 6.3 are N/A.

---

## Category 7 — NAVIGATION & INFORMATION ARCHITECTURE

| # | Check | Result | Notes |
|---|---|---|---|
| 7.1 | Page exists in docs.json | PASS | Confirmed at docs.json lines 2983–2988: `"v2/orchestrators/resources/compendium/glossary"` |
| 7.2 | Navigation matches file system | PASS | File exists at `v2/orchestrators/resources/compendium/glossary.mdx`; nav entry at `v2/orchestrators/resources/compendium/glossary` matches |
| 7.3 | Tab entry portal routes to all sections | N/A — tab-level check | |
| 7.4 | No structural orphans | PASS | Page is reachable via docs.json navigation |
| 7.5 | Audience journey complete | PASS | Glossary is a reference endpoint — appropriate end node. Footer cards provide forward navigation |
| 7.6 | Cross-tab graduation paths exist | PASS | Footer card to `/v2/resources/livepeer-glossary` is a valid cross-resource link |
| 7.7 | File in correct lane | PASS | Publishable content in `v2/orchestrators/`, not in `_workspace/` |
| 7.8 | File naming conventions | PASS | No disallowed prefix. `glossary.mdx` is appropriate for this file type |
| 7.9 | `_workspace/` TTL compliance | N/A | Not a workspace file |

**Category 7 verdict:** PASS — no failures

---

## Category 8 — LINKS & RENDERING

### Internal links (verified against docs.json and file system)

| Link | Destination | Verified | Status |
|---|---|---|---|
| `/v2/orchestrators` (Card) | Tab root | docs.json line 2854 | PASS |
| `/v2/resources/livepeer-glossary` (Card) | Authoritative glossary | docs.json lines 3182, 3189, 3190 (multiple entries) — confirmed present | PASS |
| `/v2/orchestrators/resources/faq` (Card) | Orchestrator FAQ | docs.json line 2969 | PASS |
| `./glossary-data.json` (Note link) | AI discoverability companion | File system — NOT verified (no glob run). Marked NOT-TESTED |

### External links (sampled — cannot verify live status without HTTP calls)

External links in accordion bodies reference Wikipedia, Hugging Face, GitHub, ethereum.org, Grafana, NVIDIA, Arbitrum docs, Ollama, Cloudinary Glossary, The Graph. All domain names are established organisations. Live status NOT-TESTED.

| # | Check | Result | Notes |
|---|---|---|---|
| 8.1 | All internal links resolve | PASS (partial) | 3 of 4 internal links verified against docs.json. `./glossary-data.json` companion NOT-TESTED |
| 8.2 | All external links live | NOT-TESTED | Cannot verify HTTP status without live calls. Domains are credible but individual URLs unverified |
| 8.3 | All snippet imports resolve | NOT-TESTED | `SearchTable.jsx` and `Divider.jsx` — not verified against file system |
| 8.4 | All images load | N/A | No image assets in page body. OG image is a snippet asset (`/snippets/assets/site/og-image/fallback.png`) — not verified |
| 8.5 | Page renders without error | NOT-TESTED | Render not tested |
| 8.6 | No TODO/TBD/Coming Soon in published content | PASS | None found in file |

**Category 8 verdict:** PASS (conditional) — no confirmed failures. 3 NOT-TESTED items (8.2, 8.3, 8.5), 1 partial NOT-TESTED (8.1 for companion JSON). No content blockers found.

---

## Category 9 — PROCESS & GOVERNANCE

| # | Check | Result | Notes |
|---|---|---|---|
| 9.1 | Human sign-off recorded | FAIL | No evidence of human review sign-off. `status: draft`, `veracityStatus` absent, `lastVerified: 2026-03` is minimal metadata only |
| 9.2 | All consuming decisions in registry | NOT-TESTED | Cannot verify against decision-registry.md without reading it. Decision registry was listed in session start requirements but not read in this session |
| 9.3 | Gate prerequisites met | FAIL | Tab status: Orchestrators `IA Approved: Draft only`, `Terminology: No`, `Content Pass Open: No`. Page is in published lane but gates are not open. `veracityStatus` field absent — veracity pass has not been run |
| 9.4 | Phase ordering respected | NOT-TESTED | Cannot verify phase ordering without checking session logs |
| 9.5 | Findings gathered before fixes | N/A — this is the findings report | |
| 9.6 | Feedback routed | N/A — pre-ship review | |

**Category 9 verdict:** FAIL — 2 confirmed failures (9.1, 9.3). 2 NOT-TESTED (9.2, 9.4).

---

## Cross-Category Connections

| Connection | Categories | Finding |
|---|---|---|
| `audience: orchestrator-operator` | 1.5 + 5.7 | Same root cause: invalid audience token. One fix resolves both. Fix: change to `audience: orchestrator` |
| Missing `veracityStatus` | 1.1 + 1.8 + 6.6 + 9.3 | Same root cause: veracityStatus field absent. Add `veracityStatus: unverified`. Consistent with `status: draft` and AI-generated content status (P39 — `status: draft` + `veracityStatus: unverified` is coherent) |
| AI-generated content (check 6.7) + `veracityStatus` | 6.7 + 1.8 | The file is explicitly flagged in checks.mdx §6.7 as AI-generated/untrusted. Adding `veracityStatus: verified` without cross-checking against authoritative sources would be incorrect. `veracityStatus: unverified` is the only honest current value |
| Missing `complexity` + `lifecycleStage` | 1.1 + 1.6 + 1.7 | Two missing required fields. Both have proposed values (`beginner`, `discover`) for human confirmation |
| Low-quality keywords | 1.13 | Independent issue — requires keyword strategy review |
| 4 headings below 20/25 | 3.1 + 3.4 + 3.7 | Same root cause: 4 generic section-label headings lack domain anchoring. Fix with proposed renames above |
| HIGH-staleness protocol figures + no REVIEW flags | 6.1 + 6.4 + 6.5 + 6.8 + 6.9 | Active Set size, inflation rate, governance params, gas costs — all need REVIEW markers with named sources |
| No human sign-off + gate prerequisites unmet | 9.1 + 9.3 | Tab-level gate issue, not page-level. Page cannot be marked verified until orchestrators tab passes IA, terminology lock |

---

## Blocking Decisions

**BD-1: glossary-data.json companion file**
- The AI discoverability block (lines 23–32) references `glossary-data.json` as a companion file generated by pre-commit script.
- The Note at line 46 links to `./glossary-data.json`.
- File existence was NOT verified. If missing, the Note link is broken and CI will fail (`check-ai-companions.yml`).
- **Recommended action:** Confirm `glossary-data.json` exists adjacent to this MDX before shipping.

**BD-2: Authoritative source cross-check (check 6.7)**
- This file is explicitly identified in `checks.mdx` §6.7 as AI-generated/untrusted.
- Before `veracityStatus` can advance beyond `unverified`, definitions must be cross-checked against `v2/resources/glossary.mdx` (the human-reviewed authoritative source).
- **Human decision required:** What is the cross-check process? Which definitions are already in the authoritative glossary? Which are compendium-only?

**BD-3: HIGH-staleness protocol parameters**
- Active Set size (100), inflation adjustment rate (0.00005%), LIP-89 governance parameters (33% quorum, 10-round period), gas cost range ($0.01–$0.12) require named sources and REVIEW flags before veracity pass can close.
- **Human decision required:** Assign named sources for each high-staleness claim. Explorer/Arbiscan links preferred over static numbers per CLAUDE.md ("Unverifiable numbers replaced with live links").

---

## Verdict Summary

**Overall: NEEDS WORK**

**Confirmed FAIL checks (19):**
1.1, 1.5, 1.6, 1.7, 1.8, 1.9, 1.10, 1.13, 3.1, 3.4, 3.7, 5.7, 6.1, 6.4, 6.5, 6.6, 6.7, 6.8, 6.9, 9.1, 9.3

_(Corrected count: 21 check IDs fail — see list above. 5.7 and 1.5 share root cause; 6.6 and 1.8 share root cause; counted separately per check ID.)_

**NOT-TESTED checks:**
4.3, 5.3, 5.6, 8.2, 8.3, 8.5, 9.2, 9.4

**BORDERLINE checks (not counted as FAIL):**
1.11 (description em-dash), 2.4 ("Can be set" line 527)

---

## Prioritised Fix List

_(Only confirmed FAILs. Each fix has a unique ID. Proposed values follow P51 — "confirm before applying".)_

**F-01 — CRITICAL: `audience` field invalid token**
- Check: 1.5, 5.7
- Current: `audience: orchestrator-operator`
- Fix: `audience: orchestrator` — confirm before applying
- Root cause: compound token form used; canonical is single token

**F-02 — CRITICAL: `veracityStatus` field absent**
- Check: 1.1, 1.8, 6.6
- Current: absent
- Fix: add `veracityStatus: unverified` — confirm before applying. Consistent with `status: draft` and AI-generated content status (P39)

**F-03 — HIGH: `complexity` field absent**
- Check: 1.1, 1.6
- Current: absent
- Fix: add `complexity: beginner` — confirm before applying. A glossary primarily serves readers encountering terms for the first time

**F-04 — HIGH: `lifecycleStage` field absent**
- Check: 1.1, 1.7
- Current: absent
- Fix: add `lifecycleStage: discover` — confirm before applying. Readers consult a glossary when orienting to the domain

**F-05 — HIGH: `industry` field absent**
- Check: 1.9 (P41)
- Current: absent
- Fix: add `industry: ["technical", "livepeer"]` — confirm before applying

**F-06 — HIGH: `niche` field absent**
- Check: 1.10 (P41)
- Current: absent
- Fix: add `niche: ["protocol", "infrastructure"]` — confirm before applying

**F-07 — HIGH: `keywords` field — generic/low-intent values**
- Check: 1.13
- Current: `["livepeer", "glossary", "orchestrators", "terminology"]`
- Fix: replace with searcher-intent-aligned terms. Proposed (confirm before applying):
  ```yaml
  keywords:
    - livepeer orchestrator glossary
    - probabilistic micropayment definition
    - reward cut fee cut livepeer
    - active set orchestrator livepeer
    - go-livepeer cli flags reference
    - pool worker orchestrator definition
  ```

**F-08 — HIGH: 4 H2 headings score below 20/25**
- Check: 3.1, 3.4, 3.7
- Current headings: `AI Terms` (18/25), `Video Terms` (18/25), `Web3 Terms` (18/25), `Technical Terms` (19/25)
- Fixes (confirm before applying — P18 validated):
  - `AI Terms` → `AI Inference Terms`
  - `Video Terms` → `Video Transcoding Terms`
  - `Web3 Terms` → `Blockchain and Token Terms`
  - `Technical Terms` → `Infrastructure and Protocol Terms`

**F-09 — HIGH: No REVIEW flags on HIGH-staleness protocol figures**
- Check: 6.1, 6.4, 6.5, 6.8, 6.9
- Current: zero `{/* REVIEW: */}` flags in file
- Fix: add REVIEW flags at each protocol-state figure. Required format per checks.mdx §6.5:
  ```mdx
  {/* REVIEW: "top 100 orchestrators" — verify current active set size against BondingManager contract or Livepeer Explorer */}
  {/* REVIEW: "approximately $0.01–$0.12 per call" gas cost — verify current Arbitrum gas price range; replace with live Arbiscan link */}
  {/* REVIEW: "adjusts by 0.00005% per round" — verify current inflation adjustment rate against protocol docs or RoundsManager contract */}
  {/* REVIEW: "10-round voting period, 33% quorum" — verify LIP-89 current governance parameters against LivepeerGovernor contract */}
  {/* REVIEW: "5 to 90 seconds" cold start latency — verify range against current AI runner documentation or measured benchmarks */}
  ```
  All proposed REVIEW flags require human-assigned named sources before closable.

**F-10 — HIGH: AI-generated content not cross-checked against authoritative source**
- Check: 6.7
- Current: no cross-check evidence; page is the explicitly flagged AI-generated compendium
- Fix: Cross-check all definitions against `v2/resources/glossary.mdx` before advancing `veracityStatus`. For terms not in authoritative glossary, apply `{/* REVIEW: [term] definition — verify against [source] before treating as verified */}` per P19
- Blocking decision BD-2 must be resolved first

**F-11 — MEDIUM: Human sign-off not recorded**
- Check: 9.1
- Current: no evidence of human review
- Fix: Record human approval when page passes content pass + veracity pass gates

**F-12 — MEDIUM: Gate prerequisites unmet**
- Check: 9.3
- Current: Orchestrators tab — IA not approved, terminology not locked, content pass not open
- Fix: Page should not advance to `status: current` or `veracityStatus: verified` until tab gates open. Consistent with current `status: draft`

---

_Report written by Claude Code (per-page quality check agent). All proposed values flagged "confirm before applying" per P51._
