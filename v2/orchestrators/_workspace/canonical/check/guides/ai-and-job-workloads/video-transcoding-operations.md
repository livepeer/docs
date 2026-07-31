# Per-Page Quality Check Report
## `v2/orchestrators/guides/ai-and-job-workloads/video-transcoding-operations.mdx`

**Review date:** 2026-03-24
**Reviewer:** Claude Code (per-page quality check agent)
**Check framework:** `v2/orchestrators/_workspace/canonical/checks.mdx`
**Frameworks ref:** `v2/orchestrators/_workspace/canonical/Frameworks.mdx`
**Navigation source:** `docs.json` lines 2894–2905

---

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|-------|----------|-------|-----------|-------|
| `title` | Yes | `Video Transcoding Operations` | PASS | |
| `sidebarTitle` | Yes | `Video Transcoding` | PASS | |
| `description` | Yes | `Configure video transcoding on your Livepeer orchestrator — wei and USD pricing, automatic price adjustment, session limits, bandwidth calculation, NVENC session caps, and output rendition profiles.` | FAIL | Em-dash (`—`) present — prohibited (P30) |
| `pageType` | Yes | `guide` | PASS | Valid 7-type canonical value (P50) |
| `audience` | Yes | `orchestrator` | PASS | |
| `purpose` | Yes | `guide` | FAIL | `guide` is a valid `pageType` but not a valid `purpose` value. This is a wrong-field error (P37: pageType value placed in purpose field). Valid purpose values are from 15-value set. Proposed: `purpose: configure` — confirm before applying |
| `complexity` | No | — | FAIL | Required field absent |
| `lifecycleStage` | No | — | FAIL | Required field absent |
| `keywords` | Yes | 14 entries | PASS | Specific and searcher-intent-aligned (`pricePerUnit`, `NVENC`, `autoAdjustPrice`) |
| OG image block | Yes | All 5 fields present | PASS | |
| `industry` | No | — | FAIL | Required field absent (P41) |
| `niche` | No | — | FAIL | Required field absent (P41) |
| `veracityStatus` | No | — | FAIL | Required. Open REVIEW JSX flags present; minimum `veracityStatus: unverified` |
| `status` | Yes | `published` | INFO | `status: published` with `veracityStatus` absent and REVIEW flags open is incoherent per checks.mdx §1.8 (P39). Set `status: draft` until veracity pass complete, OR add `veracityStatus: unverified` |

**Required field count:** 5/10. Missing: `purpose` (wrong value), `complexity`, `lifecycleStage`, `veracityStatus`. Additionally: absent `industry`, absent `niche`.

---

## Category 1 — FRONTMATTER & TAXONOMY

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 1.1 | All 10 required frontmatter fields present | FAIL | Missing: `complexity`, `lifecycleStage`, `veracityStatus`. `purpose` present but invalid value |
| 1.2 | `pageType` uses 7-type canonical schema | PASS | `guide` is a valid 7-type canonical value (P50) |
| 1.3 | `pageVariant` valid if present | N/A | Not present; not required for `guide` |
| 1.4 | `purpose` uses 15-value canonical set | FAIL | `purpose: guide` — `guide` is a pageType value, not a purpose value. Wrong-field error (P37). Proposed: `purpose: configure` — confirm before applying (P51) |
| 1.5 | `audience` uses 7-token set | PASS | `orchestrator` is canonical |
| 1.6 | `complexity` single canonical value | FAIL | Field absent. Proposed: `complexity: intermediate` — confirm before applying (P51) |
| 1.7 | `lifecycleStage` single canonical value | FAIL | Field absent. Proposed: `lifecycleStage: operate` — confirm before applying (P51). (Page covers operational configuration of a running node) |
| 1.8 | `veracityStatus` present and honest | FAIL | Field absent. `status: published` + absent `veracityStatus` + open REVIEW flags is incoherent (P39). Add `veracityStatus: unverified` and change `status` to `draft` |
| 1.9 | `industry` array valid if present | FAIL | Field absent. Required (P41). Proposed: `industry: [technical, broadcast]` — confirm before applying |
| 1.10 | `niche` array valid if present | FAIL | Field absent. Required (P41). Proposed: `niche: [video, infrastructure]` — confirm before applying |
| 1.11 | `description` well-formed | FAIL | Em-dash (`—`) in description: "Configure video transcoding on your Livepeer orchestrator — wei and USD pricing…". Em-dashes are prohibited in all visible text including description (P30) |
| 1.12 | OG image block complete | PASS | All 5 OG fields present with correct path |
| 1.13 | `keywords` field quality | PASS | `pricePerUnit`, `NVENC`, `autoAdjustPrice`, `Chainlink` — strong domain-specific searcher-intent terms |

**Category 1 verdict: FAIL** — Failing checks: 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11

---

## Category 2 — VOICE & COPY

### Banned Construction Scan

Scope: all visible text — body prose, headings, Tips, Notes, Warnings, table cells, card descriptions, CustomDivider `middleText` props, AccordionGroup `title` props, StyledStep `title` props.

Every `can`, `may`, `could`, `might`, `should` sentence; every `if [condition]`; every `not [X]` statement:

| Line | Sentence | Word/Pattern | Classification | Flag? |
|------|----------|--------------|----------------|-------|
| 42 | "For hardware benchmarking, see the dedicated [Benchmarking Guide]…" | — | Structural | No |
| 64 | "CPU transcoding is possible but rarely competitive on the open market" | `possible` | Evaluative — not a value claim hedge | No |
| 85 | "This charges 500 wei per output pixel." | — | Factual | No |
| 91 | "Large diffusion models often take a few minutes…" | — | N/A — not on this page | — |
| 94 | "`-pixelsPerUnit` is the denominator. Setting it higher makes your effective per-pixel price lower." | — | Factual | No |
| 141 | "By default, go-livepeer automatically adjusts your advertised price upward to account for ticket redemption overhead." | — | Factual | No |
| 166 | "This mechanism keeps your effective earnings stable when Arbitrum gas spikes." | — | Value claim — factual assertion, not hedged | No |
| 210 | "Any orchestrator with a price above that maximum receives zero work from that gateway." | — | Factual | No |
| 212 | "Within the pool, gateways weigh price, stake, and performance score." | — | Factual | No |
| 234 | "Set it too high and you degrade transcoding quality and get penalised by gateway performance scoring; set it too low and you leave money on the table." | `if` (implicit conditional as balanced consequence) | Body prose conditional consequence | BORDERLINE — check 2.4 applies. "Set it too high" is a bounded imperative with consequence, not an unresolved `if [condition]`. Acceptable |
| 264 | "Multi-GPU: Benchmark one GPU, then multiply by the number of identical GPUs." | — | Procedural instruction | No |
| 304 | "In practice, session peaks usually stagger, so a node often sustains roughly 20% more than the straight-line formula suggests." | `usually`, `often`, `roughly` | Multiple hedges in one sentence | MEDIUM — `often sustains roughly 20% more` is evaluative with layered hedging |
| 312 | "Monitor your Duration Ratio in production (via Prometheus metrics) and back off once it exceeds 0.8 under load." | — | Procedural — no banned construction | No |
| 344 | "A GPU capped at 3 concurrent NVENC sessions has a hardware limit of 3, regardless of what the Duration Ratio benchmarks suggest at higher concurrency." | — | Factual | No |
| 396 | "Nodes operating near GPU capacity lower that load by reducing the output ladder in `transcodingOptions.json`, at the cost of covering fewer gateway requests." | `can` (implied: they can lower) | Not a value claim — operational description | No |
| **Accordion title:** | "Always use GPU transcoding" | — | Title prop — instructional | No |
| **Accordion title:** | "Derive maxSessions from benchmarks" | — | Title prop — instructional | No |
| **Accordion title:** | "Monitor Duration Ratio in production" | — | Title prop — instructional | No |
| **Accordion title:** | "Use a domain name for serviceAddr" | — | Title prop — instructional | No |
| **Accordion title:** | "USD pricing for long-term stability" | — | Title prop — no `can/may` | No |
| **Accordion title:** | "Leave autoAdjustPrice on during gas price spikes" | — | Title prop — imperative | No |
| **StyledStep titles:** | "Run livepeer_cli", "Select Set orchestrator config", "Set pixelsPerUnit", "Set pricePerUnit", "Verify" | — | No em-dashes, no banned constructions | PASS |

**Checking for `not [X]` as primary statement (check 2.4):**
- Line 212: "Within the pool, gateways weigh price, stake, and performance score. Lower prices increase your selection probability. Being above the ceiling guarantees no work." — `guarantees no work` is a positive factual statement, not a `not [X]` construction. PASS.

**Checking for `can/may` in value claims:**
- Line 413: "Nodes running without `-nvidia` fit short test scenarios, while GPU-backed nodes carry production earnings." — PASS (no `can/may`).
- Line 421: "Lower `-maxSessions` once it climbs above 0.8 during peak periods." — PASS.
- Line 429: "Wei pricing fits shorter operating windows or teams actively managing ETH exposure." — PASS.
- Line 433: "Teams without active gas monitoring are usually better served by leaving it on." — `usually` is a hedge but not a banned construction. BORDERLINE.

**Banned word scan:**
Candidates: `effectively`, `essentially`, `basically`, `meaningful`, `significant`, `real` (intensifier), `various`, `several`, `obviously`, `clearly`

- Line 64: "GPU-accelerated transcoding via NVENC/NVDEC is strongly recommended" — `strongly` not banned. PASS.
- Full scan: no instances of banned words found.

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 2.1 | UK English throughout | PASS | `penalised` (line 234), no -ize/-ise errors, no -or vs -our errors detected. No US spelling violations |
| 2.2 | Zero banned words | PASS | No instances of banned words found across all visible text |
| 2.3 | Zero banned phrases | PASS | No "This page", "This section", "rather than", "etc.", "and so on". Draft note in JSX comment is not visible |
| 2.4 | Zero banned constructions | PASS | No unresolved `if [condition]` in body prose; no `This page [verb]`; no `can/may` in value claims; no `not [X]` as primary value statement |
| 2.5 | Opening order correct | PASS | "Video transcoding configuration turns on three operator decisions: price, safe concurrency, and output profile coverage." — subject-first, value-first |
| 2.6 | Paragraph discipline | PASS | Single-job paragraphs; lead sentences state facts; endings are concrete |
| 2.7 | Audience register correct | PASS | Hardware-specific, operational, numbers-driven — correct for `orchestrator` |
| 2.8 | Per-audience prohibited phrases absent | PASS | No "the network rewards you", "easy to set up", "your orchestrator will automatically" |
| 2.9 | No passive value statements | PASS | Value claims are concrete: "price competitive while staying above your cost floor"; "standard 4-rendition ladder is roughly 4× the GPU load" |
| 2.10 | No hedging openers | PASS | Opens with factual statement, not caveat |
| 2.11 | Terminology locked and consistent | PASS | `wei`, `NVENC/NVDEC`, `pricePerUnit`, `pixelsPerUnit`, `maxSessions`, `livepeer_bench` used consistently |

**Category 2 verdict: PASS** — No failing checks.

---

## Category 3 — SECTION NAMING & HEADINGS

`Related pages` / section without title (CardGroup at end) — no `Related Pages` heading present, so no exemption needed.

**StyledStep titles included in scan per P48:** "Run livepeer_cli", "Select Set orchestrator config", "Set pixelsPerUnit", "Set pricePerUnit", "Verify" — no em-dashes.

| Heading | Level | Precision | Depth | Stability | Clarity | Conciseness | Total |
|---------|-------|-----------|-------|-----------|---------|-------------|-------|
| How transcoding works | H2 | 3 | 3 | 4 | 4 | 4 | **18/25 FAIL** |
| Pricing | H2 | 4 | 3 | 5 | 5 | 5 | 22/25 |
| Option A: Wei pricing | H3 | 5 | 4 | 5 | 5 | 4 | 23/25 |
| Option B: USD pricing (go-livepeer 0.8.0+) | H3 | 5 | 5 | 4 | 4 | 3 | 21/25 |
| Automatic price adjustment | H3 | 5 | 4 | 5 | 5 | 5 | 24/25 |
| Updating price via livepeer_cli | H3 | 5 | 4 | 5 | 5 | 4 | 23/25 |
| What gateways pay — and what you need to know | H3 | 3 | 3 | 3 | 3 | 2 | **14/25 FAIL** |
| Session limits | H2 | 4 | 3 | 5 | 5 | 5 | 22/25 |
| Calculating hardware capacity | H3 | 5 | 4 | 5 | 5 | 5 | 24/25 |
| Calculating bandwidth capacity | H3 | 5 | 4 | 5 | 5 | 5 | 24/25 |
| Deriving your limit | H3 | 3 | 3 | 4 | 4 | 5 | **19/25 FAIL** |
| NVENC session caps on consumer GPUs | H2 | 5 | 5 | 5 | 5 | 4 | 24/25 |
| Output rendition profiles | H2 | 5 | 4 | 5 | 5 | 5 | 24/25 |
| Optimisation tips | H2 | 3 | 2 | 4 | 4 | 5 | **18/25 FAIL** |

**Em-dash check on headings:** "What gateways pay — and what you need to know" contains an em-dash. Prohibited in all visible text per P30/CLAUDE.md.

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 3.1 | Every heading scores ≥20/25 | FAIL | Four headings below threshold: "How transcoding works" (18/25), "What gateways pay — and what you need to know" (14/25), "Deriving your limit" (19/25), "Optimisation tips" (18/25) |
| 3.2 | No banned or weak standalone heading terms | PASS | No `Basics`, `Notes`, `Overview`, `How It Works` (exact), `See Also`, `Conclusion`, `What's Next`. "How transcoding works" is close to "How It Works" but is domain-anchored — borderline; scored in 3.1 |
| 3.3 | No literal contrast labels | PASS | No X vs Y headings. "Option A" / "Option B" are enumerated options, not contrast labels |
| 3.4 | Domain-anchor rule applied | FAIL | "Deriving your limit" — "your limit" is generic; lacks domain anchor. "maxSessions Derivation" or "Session Limit Formula" would be domain-anchored. "Optimisation tips" — "tips" is a weak structural word; "Transcoding Optimisation" or "Performance Tuning" would be stronger |
| 3.5 | Heading names the concept, not examples | PASS | |
| 3.6 | Title well-formed | PASS | "Video Transcoding Operations" — concept-derived, no banned forms |
| 3.7 | Sounds like an expert editorial choice | FAIL | "What gateways pay — and what you need to know" is a question-style, marketing-leaning phrase. "Gateway Pricing Thresholds" would be more expert. "Optimisation tips" is a soft editorial choice for this audience |

**Category 3 verdict: FAIL** — Failing checks: 3.1, 3.4, 3.7

---

## Category 4 — PAGE STRUCTURE

Nav sequence confirmed from docs.json lines 2894–2905:
`workload-options` → **`video-transcoding-operations`** → `ai-inference-operations` → `diffusion-pipeline-setup` → `llm-pipeline-setup` → `realtime-ai-setup` → `audio-and-vision-pipelines` → `model-demand-reference` → `model-hosting`

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 4.1 | One purpose, one audience, one job | PASS | Page is focused on configuring video transcoding for orchestrators |
| 4.2 | Purpose statement test passes | PASS | "This page lets the orchestrator configure pricing, session limits, and output profiles for video transcoding." — passes |
| 4.3 | PREV_PAGE / NEXT_PAGE adjacency correct | PASS | `workload-options` (what jobs exist) → `video-transcoding-operations` (how to configure transcoding) is a logical sequence. Exits to `ai-inference-operations` (how to configure AI) — coherent |
| 4.4 | No dead ends | PASS | CardGroup at end links to Benchmarking, Session Limits, Job Types Overview, Troubleshooting |
| 4.5 | Prerequisites stated or linked | INFO | No explicit prerequisites section. Assumes node is running with `-orchestrator -transcoder` flags. No link to setup guide |
| 4.6 | Out-of-scope is clear | PASS | Opening paragraph explicitly defers benchmarking to the Benchmarking Guide |
| 4.7 | Information type per section is correct | PASS | `purpose: configure` (proposed) permits `procedural, technical, factual` — content is predominantly procedural and factual |
| 4.8 | No content duplication from adjacent sections | INFO | Session limits content may overlap with `capacity-planning`. Both the "Session Limits" H2 and the Capacity Planning card reference identical calculations |
| 4.9 | Section orientation page present | N/A | Section-level check |
| 4.10 | Cross-tab links at journey intersections | N/A | Tab-level check |

**Category 4 verdict: PASS** — No failing checks. Two INFO items.

---

## Category 5 — LAYOUT & COMPONENTS

**Matrix applied:** `component-layout-decisions.mdx` for `guide`:
- Required: `Overview`, `Steps` or `H2 sections`
- Preferred: `Steps`, `Step`, `CodeGroup`, `Note`, `Info`, `Tip`, `Card`, `CardGroup`
- Avoid: `Coming Soon`, `PreviewCallout`

**Components used:** `StyledSteps`, `StyledStep`, `StyledTable`, `TableRow`, `TableCell`, `CustomDivider`, `AccordionGroup`, `Accordion`, `CardGroup`, `Card`, `Note`

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 5.1 | Correct template for pageType + pageVariant | PASS | `guide` template: H2 sections present; procedural sections use steps; structural overview in opening paragraph |
| 5.2 | Required sections present | PASS | `Overview` (opening paragraph), H2 sections throughout. `guide` does not require explicit Prerequisites section |
| 5.3 | Only approved components used | PASS | `StyledSteps`/`StyledStep` map to Steps/Step in preferred list; `StyledTable`/`TableRow`/`TableCell` are standard; `AccordionGroup`/`Accordion`, `Card`/`CardGroup`, `Note` all in preferred set |
| 5.4 | Avoided components absent | PASS | No `Coming Soon`, no `PreviewCallout`, no TODO/TBD visible text. REVIEW flags are JSX comments |
| 5.5 | Information type → component mapping correct | PASS | Procedural steps use `StyledSteps`; reference data uses `StyledTable`; optional tuning uses `Accordion`; callouts use `Note` |
| 5.6 | MDX renders clean | PASS | All imports used; `StyledSteps`, `StyledStep`, `StyledTable`, `TableRow`, `TableCell`, `CustomDivider` all imported at top; no unclosed tags visible |
| 5.7 | No old-schema frontmatter | FAIL | `purpose: guide` is a wrong-field error (pageType value in purpose field) — same root as check 1.4 |
| 5.8 | CSS uses custom properties only | N/A | No inline styles present |
| 5.9 | Generated file banners intact | N/A | Not a generated file |
| 5.10 | Component naming/import conventions | PASS | PascalCase imports; correct subdirectories |

**Category 5 verdict: FAIL** — Failing check: 5.7 (same root as 1.4)

---

## Category 6 — VERACITY

### Veracity Claims Inventory

| Claim | Type | Status |
|-------|------|--------|
| Gateway segments stream into ~2-second chunks | technical | REVIEW flag — unverified |
| Minimum NVIDIA driver recommendation for current go-livepeer | technical | REVIEW flag — unverified |
| Consumer GPU NVENC session cap: 3–8 sessions (GTX/RTX) | technical | REVIEW flag — RTX 40xx behaviour unconfirmed |
| Standard ABR ladder: 1080p source, 4 profiles | technical | REVIEW flag — whether 1080p removed from default transcodingOptions.json is unconfirmed |
| Per-session bandwidth: ~6 Mbps down, ~5.6 Mbps up | evaluative | "v1 guidance is still a reasonable approximation" — explicitly flagged as approximation |
| Chainlink ETH/USD on Arbitrum auto-configured | technical | REVIEW flag — not confirmed |
| `tools.livepeer.cloud` as market-rate reference | structural | REVIEW flag — currency uncertain |
| USD pricing pegs via Chainlink ETH/USD | technical | REVIEW flag — unverified |
| Auto-adjustment mechanism compensates for gas overhead | technical | REVIEW flag — unverified |
| 0.8 Duration Ratio threshold as safe benchmark ceiling | evaluative | Empirical — community-validated but not formally cited |
| RTX 3060 typical sessions ~8; RTX 4090 often above 30 | evaluative | Presented in Accordion as operational guidance — approximate |

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 6.1 | Every factual claim citable | FAIL | Multiple technical and procedural claims have open REVIEW JSX flags indicating they are unverified |
| 6.2 | Code/commands tested | FAIL | `livepeer_bench` loop script and `livepeer_cli` steps have REVIEW flags; RTX 40xx NVENC cap unconfirmed |
| 6.3 | No deprecated API usage | PASS | No deprecated flags or endpoints cited |
| 6.4 | Numbers are real | FAIL | NVENC session cap range (3–8 sessions) for RTX 40xx series has open REVIEW flag; USD pricing Chainlink address unconfirmed |
| 6.5 | REVIEW flags for unverified claims | PASS | REVIEW JSX comment block at end lists 4 specific unresolved items with concrete questions |
| 6.6 | `veracityStatus` honest | FAIL | `veracityStatus` absent; `status: published` with open REVIEW flags is incoherent (P39). Fix: add `veracityStatus: unverified`, change `status` to `draft` |
| 6.7 | Authoritative vs AI-generated glossary | N/A | No glossary references |
| 6.8 | Source staleness check | FAIL | `tools.livepeer.cloud` market-rate reference flagged as current uncertainty in REVIEW block. Arbitrum gas mechanics change frequently |
| 6.9 | No open-ended research tasks | FAIL | REVIEW block items include: "Confirm minimum NVIDIA driver recommendation" — no named source or concrete next step given |

**Category 6 verdict: FAIL** — Failing checks: 6.1, 6.2, 6.4, 6.6, 6.8, 6.9

---

## Category 7 — NAVIGATION & IA

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 7.1 | Page exists in docs.json | PASS | `v2/orchestrators/guides/ai-and-job-workloads/video-transcoding-operations` confirmed at docs.json line 2897 |
| 7.2 | Navigation matches file system | PASS | File path matches nav entry |
| 7.3 | Tab entry portal routes to all sections | N/A | Section-level check |
| 7.4 | No structural orphans | PASS | Linked in docs.json; incoming link from `workload-options` |
| 7.5 | Audience journey complete | PASS | Logical step after `workload-options` introduces transcoding as a job type |
| 7.6 | Cross-tab graduation paths exist | N/A | Tab-level check |
| 7.7 | File in correct lane | PASS | Published content in `v2/orchestrators/` |
| 7.8 | File naming conventions | PASS | `video-transcoding-operations.mdx` — no incorrect prefix |
| 7.9 | `_workspace/` TTL compliance | N/A | Not a workspace file |

**Category 7 verdict: PASS** — No failing checks.

---

## Category 8 — LINKS & RENDERING

**Internal links to verify against docs.json:**
- `/v2/orchestrators/guides/config-and-optimisation/capacity-planning` → docs.json line 2922: CONFIRMED (appears twice in CardGroup — "Benchmarking Guide" and "Session Limits" both point to capacity-planning)
- `/v2/orchestrators/guides/ai-and-job-workloads/workload-options` → docs.json line 2896: CONFIRMED
- `/v2/orchestrators/guides/monitoring-and-tooling/troubleshooting` → docs.json line 2933: CONFIRMED

**Note:** The two CardGroup cards "Benchmarking Guide" and "Session Limits" both link to the same page (`/v2/orchestrators/guides/config-and-optimisation/capacity-planning`). This is not a broken link but is a content duplication concern (two cards with different titles pointing to the same destination).

**External links:**
- `https://explorer.livepeer.org/orchestrators` — live site
- `https://tools.livepeer.cloud` — REVIEW flagged as volatile
- `https://github.com/livepeer/go-livepeer/blob/master/cmd/livepeer_bench/transcodingOptions.json` — GitHub link, potentially stale at that blob path
- `https://developer.nvidia.com/video-encode-and-decode-gpu-support-matrix-new` — NVIDIA reference page

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 8.1 | All internal links resolve | PASS | All 3 internal link paths confirmed in docs.json |
| 8.2 | All external links live | INFO | External links not auto-tested. GitHub `blob/master` path is version-pinned to master and may drift. NVIDIA link format may change |
| 8.3 | All snippet imports resolve | PASS | `StyledSteps`, `StyledStep`, `StyledTable`, `TableRow`, `TableCell`, `CustomDivider` — standard confirmed paths |
| 8.4 | All images load | N/A | No inline images beyond OG block |
| 8.5 | Page renders without error | PASS | No unclosed tags, missing imports, or JSX errors visible |
| 8.6 | No TODO/TBD/Coming Soon in published content | PASS | REVIEW flags are JSX comments (invisible); no visible placeholder text |

**Category 8 verdict: PASS** — No failing checks. One INFO on external links.

---

## Category 9 — PROCESS & GOVERNANCE

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 9.1 | Human sign-off recorded | FAIL | `status: published` is inconsistent — page has `veracityStatus` absent and open REVIEW flags. No explicit sign-off record |
| 9.2 | All consuming decisions in registry | INFO | Page references pricing mechanics, Chainlink feed, NVENC driver patches — no structural decisions requiring registry entry identified |
| 9.3 | Gate prerequisites met | FAIL | Per tab-status.md: Orchestrators IA not approved, terminology not locked. `status: published` with active REVIEW flags suggests gates were not formally passed |
| 9.4 | Phase ordering respected | INFO | Cannot confirm without session history |
| 9.5 | Findings gathered before fixes | N/A | Review only |
| 9.6 | Feedback routed | N/A | Review only |

**Category 9 verdict: FAIL** — Failing checks: 9.1, 9.3

---

## Cross-Category Connections

- **C1:** `purpose: guide` wrong-field error (1.4) → 5.7 (old-schema frontmatter FAIL). Single root cause, two symptoms. Fix 1.4 to fix both.
- **C2:** `status: published` + absent `veracityStatus` + open REVIEW flags (1.8, 6.6) = same root: page has not completed veracity pass. Fix as one: add `veracityStatus: unverified`, change `status` to `draft`.
- **C3:** Missing `complexity`, `lifecycleStage`, `industry`, `niche` (1.1, 1.6, 1.7, 1.9, 1.10) are co-located in frontmatter. Resolve as one batch edit.
- **C4:** "What gateways pay — and what you need to know" em-dash (3.1/3.7) also violates the description em-dash (1.11) — both are the same policy (P30: em-dashes prohibited in all visible text including description).
- **C5:** Two CardGroup cards ("Benchmarking Guide" and "Session Limits") point to the same `capacity-planning` page (8.1 INFO). The session limits card content is partly duplicated from this page's "Session limits" section (4.8 INFO). Consider whether one card is sufficient.

---

## Blocking Decisions

**BD-1:** `purpose` field value — `configure` is proposed but the page covers both configuration and operational tuning. `operate` is also plausible. Requires Alison sign-off.

**BD-2:** Em-dash in `description` field — replace with comma or dash (`-`) or restructure sentence. No em-dashes permitted anywhere.

---

## Verdict Summary

**Overall: NEEDS WORK**

**20 checks fail: 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 3.1, 3.4, 3.7, 5.7, 6.1, 6.2, 6.4, 6.6, 6.8, 6.9, 9.1, 9.3**

---

## Prioritised Fix List

**F-01** — CRITICAL — `status: published` + absent `veracityStatus` + open REVIEW flags (incoherent state, P39)
Change `status: published` to `status: draft`. Add `veracityStatus: unverified`. Do not mark `status: current` until veracity pass is complete and all REVIEW flags resolved.

**F-02** — CRITICAL — `purpose: guide` wrong-field error
Replace `purpose: guide` with a valid purpose value.
Proposed: `purpose: configure` — confirm before applying. Co-fixes 5.7.

**F-03** — CRITICAL — Missing required frontmatter fields
Add to frontmatter block:
- Proposed: `complexity: intermediate` — confirm before applying
- Proposed: `lifecycleStage: operate` — confirm before applying

**F-04** — CRITICAL — Missing required `industry` and `niche` fields
Proposed:
- `industry: [technical, broadcast]` — confirm before applying
- `niche: [video, infrastructure]` — confirm before applying

**F-05** — HIGH — Em-dash in `description` field (P30)
Replace: "Configure video transcoding on your Livepeer orchestrator — wei and USD pricing, automatic price adjustment, session limits, bandwidth calculation, NVENC session caps, and output rendition profiles."
With: "Configure video transcoding on your Livepeer orchestrator: wei and USD pricing, automatic price adjustment, session limits, bandwidth calculation, NVENC session caps, and output rendition profiles."

**F-06** — HIGH — Heading "What gateways pay — and what you need to know" (em-dash + score 14/25)
Remove em-dash. Rename to domain-anchored concept.
Proposed: `Gateway Pricing Thresholds`

**F-07** — HIGH — Heading "How transcoding works" scores 18/25
Rename to more specific, domain-anchored heading.
Proposed: `Transcoding Pipeline` or `Segment Processing Model`

**F-08** — HIGH — Heading "Optimisation tips" scores 18/25
Rename to domain-anchored heading.
Proposed: `Performance Tuning`

**F-09** — HIGH — Heading "Deriving your limit" scores 19/25 (just below threshold)
Rename to domain-anchored heading.
Proposed: `maxSessions Formula` or `Session Limit Derivation`

**F-10** — HIGH — Veracity pass required
Resolve all REVIEW JSX comment items against primary sources: minimum NVIDIA driver (go-livepeer release notes), RTX 40xx NVENC cap (NVIDIA encode/decode matrix), default transcodingOptions.json (go-livepeer GitHub), market-rate reference tool (Livepeer team confirmation). Each needs a named source.

**F-11** — MEDIUM — Two CardGroup cards link to same page (`capacity-planning`)
"Session Limits" card duplicates the "Benchmarking Guide" card destination. Consider removing one or linking to a more specific anchor if available.

**F-12** — MEDIUM — GitHub blob link at line 403 may drift
`https://github.com/livepeer/go-livepeer/blob/master/cmd/livepeer_bench/transcodingOptions.json` — `blob/master` is version-pinned to current master. Consider linking to the file at a tagged release or stating the version explicitly.
