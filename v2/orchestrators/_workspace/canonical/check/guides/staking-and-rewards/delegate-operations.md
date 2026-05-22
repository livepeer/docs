# Per-Page Quality Check — delegate-operations.mdx

**File:** `v2/orchestrators/guides/staking-and-rewards/delegate-operations.mdx`
**Check date:** 2026-03-24
**Reviewer:** Claude Code (per-page check agent)
**Verdict:** NEEDS WORK

---

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|-------|----------|-------|-----------|-------|
| `title` | Yes | `Delegate Operations` | PASS | Well-formed |
| `sidebarTitle` | Yes | `Delegate Operations` | PASS | Matches title |
| `description` | Yes | "How to attract and retain LPT delegators as a Livepeer orchestrator — what delegators evaluate, the Explorer ROI formulas explained, commission strategy, reputation, and the compounding stake flywheel." | FAIL | 203 chars — exceeds 160-char limit (check 1.11) |
| `pageType` | Yes | `guide` | PASS | Valid 7-type enum value |
| `audience` | Yes | `orchestrator` | PASS | Valid 7-token value |
| `purpose` | Yes | `guide` | FAIL | `guide` is not a canonical purpose value. Must be one of the 15 intent-based values (check 1.4). See finding F-1.4 |
| `complexity` | No | — | FAIL | Required field missing (check 1.1) |
| `lifecycleStage` | No | — | FAIL | Required field missing (check 1.1) |
| `veracityStatus` | No | — | FAIL | Required field missing (check 1.8) |
| `keywords` | Yes | 9 entries: livepeer, orchestrator, delegators, lpt delegation, stake, reward cut, fee share, orchestrator reputation, yield calculation, roi | FAIL | Generic entries: `livepeer`, `orchestrator` are too broad. See finding F-1.13 |
| OG image block | Yes | All 5 OG fields present (og:image, og:image:alt, og:image:type, og:image:width, og:image:height) | PASS | Complete and correct |
| `status` | Yes | `published` | PASS | Valid |
| `lastVerified` | Yes | `2026-03-13` | PASS | Present |
| `industry` | No | — | N/A — optional field, not required by check 1.1 |
| `niche` | No | — | N/A — optional field, not required by check 1.1 |
| `pageVariant` | No | — | N/A — `guide` pageType does not require a variant |

---

## Categories 1–9

### Category 1: Frontmatter & Taxonomy

| # | Check | Result | Notes |
|---|-------|--------|-------|
| 1.1 | All 10 required frontmatter fields present | FAIL | Missing: `complexity`, `lifecycleStage`, `veracityStatus` |
| 1.2 | `pageType` uses 7-type canonical schema | PASS | `guide` is a valid value |
| 1.3 | `pageVariant` valid if present | N/A | Not present; not required for `guide` pageType |
| 1.4 | `purpose` uses 15-value canonical set | FAIL | Value is `guide` — not a canonical purpose. The canonical value for a page that helps an operator manage delegation economics is `operate` or `optimise`. See finding F-1.4 |
| 1.5 | `audience` uses 7-token set | PASS | `orchestrator` is canonical |
| 1.6 | `complexity` single canonical value | FAIL | Field absent. Correct value: `intermediate` (assumes working orchestrator, economics literacy, familiarity with Explorer) |
| 1.7 | `lifecycleStage` single canonical value | FAIL | Field absent. Correct value: `operate` (managing a live node's delegation relationships) |
| 1.8 | `veracityStatus` present and honest | FAIL | Field absent. Content includes unverified factual claims (Explorer formula, historical data assertion at line 56, commission range table at lines 124–143). Default for unreviewed content: `unverified` |
| 1.9 | `industry` array valid if present | N/A | Not present; optional |
| 1.10 | `niche` array valid if present | N/A | Not present; optional |
| 1.11 | `description` well-formed | FAIL | 203 chars — limit is 160. Trim to: "How to attract and retain LPT delegators: Explorer ROI formula breakdown, commission strategy, reputation building, and the compounding stake flywheel." (152 chars) |
| 1.12 | OG image block complete | PASS | All 5 fields present with correct path |
| 1.13 | `keywords` field quality | FAIL | `livepeer` (line 9) and `orchestrator` (line 10) are too generic. Replace with searcher-intent terms. Suggested replacements: `"attract delegators livepeer"`, `"livepeer orchestrator reward cut strategy"`. Retain: `lpt delegation`, `reward cut`, `fee share`, `orchestrator reputation`, `yield calculation`, `roi` |

**Finding F-1.4 — purpose field invalid**
- Severity: HIGH (blocks taxonomy pipeline)
- Line: 26
- Found: `purpose: guide`
- `guide` is a `pageType` value, not a purpose value. The 15-value purpose schema contains no `guide` entry.
- Fix: Replace `purpose: guide` with `purpose: operate` (the reader is managing a live orchestrator's delegation relationships) or `purpose: optimise` (the reader is improving their delegation rate). Based on the page's content — it covers what delegators evaluate, reputation building, and commission strategy for a running operator — `operate` is the closer fit. Cite check 1.4.

---

### Category 2: Voice & Copy

| # | Check | Result | Notes |
|---|-------|--------|-------|
| 2.1 | UK English throughout | PASS | No US spellings found. `realised` (line 223) correct UK form |
| 2.2 | Zero banned words | FAIL | `significantly` at line 149. See finding F-2.2 |
| 2.3 | Zero banned phrases | PASS | No banned phrases found |
| 2.4 | Zero banned constructions | FAIL | `Use this page to understand` at line 36 — self-reference construction (`Use this page [verb]`). See finding F-2.4a. `should be` at line 145 — borderline conditional (flagged in banned construction scan). See F-2.4b |
| 2.5 | Opening order correct | PASS | Line 36 opens with subject and fact ("Delegated LPT lets third-party token holders increase your orchestrator's total stake") before the self-referential sentence. The factual opener is correct; only the trailing self-reference fails |
| 2.6 | Paragraph discipline | PASS | Paragraphs are focused. Most lead sentences state the fact. Final sentences end on fact or next step |
| 2.7 | Audience register correct | PASS | Operational tone, economics-focused, hardware-aware context. Correct for `orchestrator` audience |
| 2.8 | Per-audience prohibited phrases absent | PASS | None of the orchestrator-prohibited phrases found: no "easy to set up", no "the network rewards you for", no hedging of earnings mechanism |
| 2.9 | No passive value statements | PASS | Value claims are quantified or mechanistic: formula variables are defined, fee volume is described with mechanism |
| 2.10 | No hedging openers | PASS | Page opens with a concrete statement |
| 2.11 | Terminology locked and consistent | FAIL | `rewardShare` used as a formula variable at line 91 without explaining it is a derived quantity, not a protocol parameter. This could confuse readers who search for a `rewardShare` parameter in go-livepeer and find nothing. The protocol parameter is `rewardCut`; `rewardShare = 1 − rewardCut`. See finding F-2.11. Also: `active set` used at lines 47 and 56 without definition at first use. See finding F-2.11b |

**Finding F-2.2 — banned word `significantly`**
- Severity: MEDIUM
- Line: 149
- Found: "raising the ETH yield component significantly"
- Fix: Delete `significantly` and replace with a mechanism or quantified effect. Suggested: "raising the ETH yield component in direct proportion to increased fee volume." (Frames the relationship mechanically without the vague intensifier.)

**Finding F-2.4a — banned construction: self-reference `Use this page`**
- Severity: MEDIUM
- Line: 36
- Found: "Use this page to understand why delegation matters, what delegators evaluate, how the Explorer yield calculation works, and what persuades delegators to stay."
- Fix: Delete the sentence entirely. The preceding sentence ("Delegated LPT lets third-party token holders increase your orchestrator's total stake. More stake means a larger share of protocol inflation, stronger positioning in the transcoding queue, and greater credibility in the network.") already functions as a complete, factual introduction. The self-reference sentence adds nothing.

**Finding F-2.4b — conditional prose: `should be`**
- Severity: LOW (borderline)
- Line: 145
- Found: "New orchestrators building their initial delegation base should be at the competitive end."
- Classification: Borderline procedural advisory. `should` here is an operational recommendation, not a value claim. However, per the banned constructions table, resolve the condition: state the threshold directly.
- Fix: "New orchestrators need a `rewardCut` of 0–10% and a `feeShare` of 75–100% to build initial delegation."

**Finding F-2.11 — term consistency: `rewardShare` not defined**
- Severity: MEDIUM
- Line: 91
- Found: `s_{rewards}` = your `rewardShare` rate (1 − rewardCut)
- Issue: `rewardShare` appears as a backtick-formatted parameter name, which implies it is a protocol parameter. It is not — it is a formula variable defined inline. The protocol parameter is `rewardCut`. A reader unfamiliar with the Explorer source may search for `rewardShare` and find no such parameter.
- Fix: Change to: `` `s_{rewards}` = reward share = `1 - rewardCut` (the fraction of inflation rewards passed to delegators) ``

**Finding F-2.11b — undefined jargon: `active set` not defined at first use**
- Severity: MEDIUM
- Line: 47 (first appearance, in code block)
- Found: `└── Higher position in the active set → more transcoding jobs`
- Issue: `active set` is listed in CLAUDE.md as jargon that must be defined at first use on every page. First use is inside the code block at line 47; first prose use is line 56.
- Fix (two-part per checks.mdx dead-imports / first-use-in-diagram rule): Add a Note immediately after the code block (after line 54) and an inline definition at line 56.
- Note component content: `{/* REVIEW: active set — verify definition against Explorer + BondingManager before inserting */}`
- Suggested prose definition at line 56: "The **active set** — the top 100 orchestrators by total stake eligible for work each round — is visible in every historical reporting period."

---

### Category 3: Section Naming & Headings

#### Heading Score Table

H2 and H3 headings scored on 5 dimensions × 5 points (max 25). `Related` heading is EXEMPT per critical rules.

| Heading | Level | Precision | Depth | Stability | Clarity | Conciseness | Total | Pass? |
|---------|-------|-----------|-------|-----------|---------|-------------|-------|-------|
| Why delegators matter | H2 | 3 | 2 | 3 | 4 | 4 | 16 | FAIL |
| What delegators actually evaluate | H2 | 3 | 3 | 3 | 3 | 2 | 14 | FAIL |
| The Explorer ROI calculation | H3 | 4 | 4 | 4 | 5 | 4 | 21 | PASS |
| ETH (fee) yield | H4 | 4 | 3 | 4 | 5 | 5 | 21 | PASS* |
| LPT (inflation) yield | H4 | 4 | 3 | 4 | 5 | 5 | 21 | PASS* |
| Combined yield | H4 | 4 | 3 | 5 | 5 | 5 | 22 | PASS* |
| The four things delegators look at | H2 | 2 | 1 | 2 | 3 | 2 | 10 | FAIL |
| 1. Reward call ratio | H3 | 5 | 4 | 5 | 5 | 5 | 24 | PASS |
| 2. Fee share and reward share | H3 | 4 | 4 | 4 | 4 | 4 | 20 | PASS |
| 3. Daily fee volume (v_daily) | H3 | 5 | 4 | 5 | 5 | 4 | 23 | PASS |
| 4. Active stake dilution | H3 | 5 | 4 | 5 | 5 | 5 | 24 | PASS |
| Building reputation | H2 | 3 | 2 | 3 | 4 | 4 | 16 | FAIL |
| Transparency | H3 | 3 | 2 | 3 | 4 | 5 | 17 | FAIL |
| Commission stability | H3 | 4 | 4 | 4 | 5 | 5 | 22 | PASS |
| Running AI capabilities | H3 | 4 | 3 | 3 | 4 | 4 | 18 | FAIL |
| The delegation mechanics (what delegators actually do) | H2 | 3 | 2 | 3 | 3 | 1 | 12 | FAIL |
| Common pitfalls for delegators (and what they mean for you) | H2 | 3 | 2 | 3 | 3 | 1 | 12 | FAIL |
| Variable commission rates | H3 | 4 | 3 | 4 | 5 | 4 | 20 | PASS |
| Inflation rate changes | H3 | 4 | 3 | 4 | 5 | 4 | 20 | PASS |
| Missed reward rounds | H3 | 4 | 3 | 4 | 5 | 4 | 20 | PASS |
| Resources to share | H2 | 3 | 2 | 3 | 4 | 4 | 16 | FAIL |

*H4 headings: rubric specifies H2 and H3. H4s scored for completeness; not counted in verdict.

**Failing headings — per-finding detail:**

**Finding F-3.1a — H2: `Why delegators matter` (score 16/25)**
- Precision (3): Names the topic area but not the exact concept ("why" is a question frame, not a concept name)
- Depth (2): Surface-level label; does not signal the intellectual level (stake mechanics, compounding flywheel)
- Stability (3): Survives content changes but doesn't anchor
- Clarity (4): Understood but generic
- Conciseness (4): Short but imprecise
- Fix: Rename to `Delegation Mechanics` (the section explains the compounding flywheel between stake, jobs, fees, and further delegation). Score after fix: P5 D4 St4 Cl5 Co5 = 23. Does not introduce a banned term.

**Finding F-3.1b — H2: `What delegators actually evaluate` (score 14/25)**
- Precision (3): "actually" is a weak emphasis word; the concept is delegator evaluation criteria
- Depth (3): Names the right domain but not the governing concept
- Stability (3): Changes if evaluation criteria change
- Clarity (3): Requires reading to understand scope
- Conciseness (2): Wordy — "actually" adds nothing
- Fix: Rename to `Delegator Evaluation Criteria`. Score after fix: P5 D4 St4 Cl5 Co5 = 23. Does not introduce a banned term.

**Finding F-3.1c — H2: `The four things delegators look at` (score 10/25)**
- Precision (2): "four things" is a numbered-list frame, not a concept name; could mean anything
- Depth (1): Purely enumerative — no conceptual depth
- Stability (2): Breaks if the list changes from 4 to 5 items
- Clarity (3): Reader must read section to know what "four things" are
- Conciseness (2): Padded with "The" and "look at"
- Fix: Rename to `Yield Signal Factors`. The section covers the four factors that appear in the delegator's yield calculation: reward call ratio, fee/reward share, daily fee volume, active stake dilution. Score after fix: P5 D4 St5 Cl4 Co5 = 23. Does not introduce a banned term. (Alternative: `Delegation Yield Drivers` — also scores 23+.)

**Finding F-3.1d — H2: `Building reputation` (score 16/25)**
- Precision (3): "reputation" is broad; the section covers specific reputation levers (Forum presence, commission stability, AI capabilities)
- Depth (2): Label-level, not concept-level
- Stability (3): Would survive content changes
- Clarity (4): Understood
- Conciseness (4): Concise but imprecise
- Fix: Rename to `Reputation Signals`. The section presents specific observable signals delegators use to assess trustworthiness. Score after fix: P4 D4 St4 Cl5 Co5 = 22. Does not introduce a banned term.

**Finding F-3.1e — H3: `Transparency` (score 17/25)**
- Precision (3): Standalone `Transparency` is a value word, not a section descriptor; does not tell reader what to do
- Depth (2): Generic — could appear on any page about any topic
- Stability (3): Survives content changes
- Clarity (4): Understood
- Conciseness (5): One word
- Check against Frameworks.mdx §4.1 banned/avoid terms: `Transparency` is not in the banned list but functions as an abstract noun heading with no domain anchor — fails the "names the concept" test
- Fix: Rename to `Forum and Discord Presence`. The section covers exactly this: Forum posts introducing the orchestrator, Discord announcements, on-chain commission notice timing. Score after fix: P5 D3 St4 Cl5 Co4 = 21. Does not introduce a banned term.

**Finding F-3.1f — H3: `Running AI capabilities` (score 18/25)**
- Precision (4): Reasonably precise about the subject
- Depth (3): Descriptive but not governing-concept level; could be stronger
- Stability (3): Breaks if AI capabilities are not the primary differentiator in future
- Clarity (4): Understood
- Conciseness (4): Slightly verbose
- Fix: Rename to `AI Pipeline Differentiation`. The section's actual claim is that AI pipelines produce higher v_daily, which improves yield attractiveness to delegators — the governing concept is differentiation through AI, not the mere fact of running AI. Score after fix: P5 D4 St4 Cl5 Co5 = 23. Does not introduce a banned term.

**Finding F-3.1g — H2: `The delegation mechanics (what delegators actually do)` (score 12/25)**
- Precision (3): Parenthetical is redundant; "mechanics" is right
- Depth (2): Process description, not concept
- Stability (3): Would survive
- Clarity (3): Parenthetical weakens
- Conciseness (1): Very wordy — longest H2 on page
- Fix: Rename to `Delegation Process`. Score after fix: P4 D3 St5 Cl5 Co5 = 22. Does not introduce a banned term.

**Finding F-3.1h — H2: `Common pitfalls for delegators (and what they mean for you)` (score 12/25)**
- Precision (3): "pitfalls" is a content descriptor but "common" is vague
- Depth (2): Descriptive label
- Stability (3): Would survive
- Clarity (3): Parenthetical is weak
- Conciseness (1): Longest heading on page
- Fix: Rename to `Delegation Risk Factors`. The section covers the three protocol-level risks delegators face: commission rate changes, inflation rate changes, missed reward rounds — each framed as the orchestrator's response obligation. Score after fix: P5 D4 St4 Cl5 Co5 = 23. Does not introduce a banned term.

**Finding F-3.1i — H2: `Resources to share` (score 16/25)**
- Precision (3): "Resources to share" implies the reader will forward them — but a reader scanning navigation would expect a list of useful links, which is the actual content
- Depth (2): Action-framing over concept-naming
- Stability (3): Survives
- Clarity (4): Understood
- Conciseness (4): Short but imprecise governing concept
- Fix: Rename to `Delegator Education Resources`. Score after fix: P5 D3 St4 Cl5 Co4 = 21. Does not introduce a banned term.

| # | Check | Result | Notes |
|---|-------|--------|-------|
| 3.1 | Every heading scores ≥20/25 | FAIL | 8 headings below threshold: Why delegators matter (16), What delegators actually evaluate (14), The four things delegators look at (10), Building reputation (16), Transparency (17), Running AI capabilities (18), The delegation mechanics... (12), Common pitfalls... (12), Resources to share (16) |
| 3.2 | No banned or weak standalone heading terms | PASS | No Banned-tier terms. `Transparency` is a standalone abstract noun — borderline, flagged in 3.1e. Not in the Banned or Avoid lists in Frameworks.mdx §4.1 |
| 3.3 | No literal contrast labels | PASS | No X vs Y headings |
| 3.4 | Domain-anchor rule applied | FAIL | `Transparency` (H3, line 167) and `Building reputation` (H2, line 162) are interpretable without domain anchor only because of surrounding context. If read in isolation from a sitemap, they give no signal about delegation or orchestrator operations |
| 3.5 | Heading names the concept, not examples | PASS | Headings name concepts |
| 3.6 | Title well-formed | PASS | `Delegate Operations` is 2 words, concept-derived, no banned forms |
| 3.7 | Sounds like expert editorial choice | FAIL | `The four things delegators look at` (line 108) and `Common pitfalls for delegators (and what they mean for you)` (line 217) read as blog-post headers, not technical documentation |

---

### Category 4: Page Structure & Content Architecture

| # | Check | Result | Notes |
|---|-------|--------|-------|
| 4.1 | One purpose, one audience, one job | PASS | Page serves one reader (orchestrator) managing one thing (delegation relationships). Scope is appropriately bounded |
| 4.2 | Purpose statement test passes | PASS | "This page lets the orchestrator understand what delegators evaluate and how to optimise commission and reputation for delegation growth." Sentence works |
| 4.3 | PREV/NEXT adjacency correct | PASS | PREV is `v2/orchestrators/guides/payments-and-pricing/payments` (docs.json lines 2908–2916). That page covers payment mechanics — a natural precursor to understanding how earnings affect delegation attractiveness. NEXT is `v2/orchestrators/guides/staking-and-rewards/network-participation`. Progression is coherent: understand payments → manage delegation → understand network participation |
| 4.4 | No dead ends | PASS | Related section (lines 251–266) provides 4 cross-links. No dead end |
| 4.5 | Prerequisites stated or linked | FAIL | Page assumes reader has an active orchestrator and understands basic staking mechanics. Neither is stated nor linked. PREV page (`payments`) covers payments but not staking basics. See finding F-4.5 |
| 4.6 | Out-of-scope is clear | PASS | Page is focused on operator-side decisions. Delegator-side process is described as context (lines 187–213) not as instructions, and is clearly framed as "what delegators actually do" |
| 4.7 | Information type per section correct | PASS | `purpose: operate` (corrected from `guide`). Permitted types: `procedural, factual` (primary), `technical` (secondary). Sections mix conceptual, evaluative, and procedural — all defensible as secondary types for `operate` purpose |
| 4.8 | No content duplication from adjacent sections | PASS | The Explorer ROI formula explanation at lines 67–100 is specific to the delegator yield view; it is not duplicated from earning-model.mdx (which covers the orchestrator's own earnings). No duplication detected |
| 4.9 | Section orientation page present | N/A — section-level check, not page-level |
| 4.10 | Cross-tab links at journey intersections | PASS | `/v2/lpt/about/purpose` (line 261) and `/v2/lpt/delegation` (line 246) provide cross-tab links to the delegator tab. Note: `/v2/lpt/delegation` link has a resolution issue — see finding F-8.1 |

**Finding F-4.5 — missing prerequisites**
- Severity: MEDIUM
- The page dives directly into total stake mechanics without stating that the reader must have an active orchestrator already running. A reader in the setup phase would find this page without context.
- Fix: Add a brief prerequisite note after line 38 (the first CustomDivider): `{/* REVIEW: prerequisites — confirm correct cross-reference before publishing */}` and proposed text: "Your orchestrator must be active and in the active set before delegation targeting is relevant. See [Setup Guide](/v2/orchestrators/setup/guide) if you are not yet active."

---

### Category 5: Layout, Components & Template

| # | Check | Result | Notes |
|---|-------|--------|-------|
| 5.1 | Correct template for pageType + pageVariant | NOT-TESTED | Component layout catalog not read (`docs-guide/catalog/components-catalog.mdx` was not accessed). Cannot confirm template compliance without reading the catalog |
| 5.2 | Required sections present | PASS | `guide` pageType requires: Overview (H2 sections present), Steps or H2 content structure (present via multiple H2 sections). Page has clear structural skeleton |
| 5.3 | Only approved components used | NOT-TESTED | Cannot verify without reading `docs-guide/catalog/components-catalog.mdx`. Components present: `StyledSteps`, `StyledStep`, `StyledTable`, `TableRow`, `TableCell`, `CustomDivider`, `MathInline`, `MathBlock`, `Note`, `CardGroup`, `Card`. All appear consistent with guide pageType requirements but formal approval status not confirmed |
| 5.4 | Avoided components absent | PASS | No TODO/TBD placeholders, no `Coming Soon`, no `PreviewCallout` in published content. (Draft note at line 30 is inside a comment block and will not render) |
| 5.5 | Information type → component mapping correct | PASS | Procedural steps use `StyledSteps` (lines 191–213). Math formulas use `MathBlock`/`MathInline`. Tables use `StyledTable`. Note component wraps a caveat (lines 102–104) |
| 5.6 | MDX renders clean | NOT-TESTED | Not run through Mintlify dev server |
| 5.7 | No old-schema frontmatter | FAIL | `purpose: guide` is a 12-type pageType value used as a purpose value. See finding F-1.4 |
| 5.8 | CSS uses custom properties only | PASS | No hardcoded hex colours found |
| 5.9 | Generated file banners intact | N/A — not a generated file |
| 5.10 | Component naming/import conventions | PASS | PascalCase component names, imports from semantic snippet subdirectories |

---

### Category 6: Veracity & Factual Accuracy

| # | Check | Result | Notes |
|---|-------|--------|-------|
| 6.1 | Every factual claim citable | FAIL | Multiple unverified claims. See findings F-6.1a through F-6.1d |
| 6.2 | Code/commands tested | N/A — no CLI commands. Formula variables defined but not executable procedures |
| 6.3 | No deprecated API usage | PASS | No API endpoints referenced |
| 6.4 | Numbers are real | FAIL | Commission range table (lines 124–143) is not sourced. "Approximately 7 days" unbonding period (line 210) needs verification. "417 rounds per year" (line 92) needs verification. "Q3 2024" AI observation (line 183) needs verification. See findings F-6.4a through F-6.4d |
| 6.5 | REVIEW flags for unverified claims | FAIL | Multiple claims have no `{/* REVIEW: ... */}` flags |
| 6.6 | `veracityStatus` honest | FAIL | `veracityStatus` field is absent. Content contains multiple unverified factual and evaluative claims |
| 6.7 | Authoritative vs AI-generated glossary | N/A — no glossary references |
| 6.8 | Source staleness check | FAIL | `rewardCut` competitive ranges (lines 124–143) are stated as "as of early 2026" without a source. These are volatile figures subject to market change |
| 6.9 | No open-ended research tasks | FAIL | Several veracity items have no named source — see findings below |

**Finding F-6.1a — unverified factual claim: historical data assertion**
- Severity: HIGH (factual type, very high veracity standard)
- Line: 56
- Found: "The compounding dynamic is visible in every historical reporting period. The orchestrators near the top of the active set by stake captured disproportionately more of both inflation rewards and job volume."
- NOT-TESTED: No source cited. This is a factual claim about network history.
- Fix: Add `{/* REVIEW: historical stake concentration claim — verify against Explorer historical data or Livepeer subgraph before publishing */}` immediately after line 56.

**Finding F-6.1b — unverified factual claim: Explorer ROI formula**
- Severity: HIGH (technical type, very high veracity standard)
- Lines: 68–100
- Found: Full Explorer ROI formula with specific variable definitions
- NOT-TESTED: The formula is attributed to [Explorer's roi.ts](https://github.com/livepeer/explorer/blob/main/lib/roi.ts) at line 100. The attribution is correct. However, the formula representation has not been tested against the current codebase version.
- Fix: `{/* REVIEW: ROI formula — verify against current Explorer repo main branch roi.ts before publishing. Link at line 100 points to /main, which changes. Consider pinning to a tagged release. */}`

**Finding F-6.1c — unverified evaluative claim: "most common delegator complaint"**
- Severity: MEDIUM (evaluative type, high veracity standard)
- Line: 177
- Found: "The most common delegator complaint (visible throughout the Livepeer Forum history) is orchestrators who set attractive rates to attract initial delegation and then change them."
- NOT-TESTED: Asserted as fact. Source is "Livepeer Forum history" — not a specific link, thread, or data point.
- Fix: `{/* REVIEW: delegator complaint claim — link to a specific Forum post or thread confirming this as the documented pattern, or rephrase to evaluative: "A recurring delegator concern in the Livepeer Forum is..." */}`

**Finding F-6.4a — number not sourced: commission range table**
- Severity: HIGH (evaluative type, high veracity standard)
- Lines: 124–143
- Found: `rewardCut` 0–10% / 10–25% / 25–100% and `feeShare` 75–100% / 30–75% / 0–30% labelled "as of early 2026"
- NOT-TESTED: No source cited. These ranges are market-derived approximations.
- Fix: `{/* REVIEW: commission range table — verify current orchestrator distribution against Explorer active set data or Livepeer subgraph before publishing. Add Explorer link as live reference. */}`

**Finding F-6.4b — number not sourced: 417 rounds per year**
- Severity: HIGH (technical type, very high veracity standard)
- Line: 92
- Found: `417` = approximate rounds per year at Arbitrum block times
- NOT-TESTED: Stated as comment in formula. Verify against current Arbitrum block time and go-livepeer round duration.
- Fix: `{/* REVIEW: 417 rounds/year — verify against current Arbitrum block time (~0.25s) and go-livepeer round duration (6646 blocks). Formula: 365 × 24 × 3600 / (6646 × 0.25) ≈ 417. Confirm 6646-block round duration is current. */}`

**Finding F-6.4c — number not sourced: 7-day unbonding period**
- Severity: HIGH (factual type, very high veracity standard — listed as high-staleness term in Frameworks.mdx §3.4)
- Line: 210
- Found: "an unbonding period of approximately 7 days"
- Per Frameworks.mdx §3.4: "Unbonding period — Set by governance — Explorer (BondingManager)"
- NOT-TESTED: Must verify current value against Explorer BondingManager.
- Fix: `{/* REVIEW: unbonding period — verify current value against Explorer > Protocol > BondingManager. Currently believed to be 7 rounds (~7 days) but is governance-settable. */}`

**Finding F-6.4d — claim not sourced: AI pipeline fee volume advantage**
- Severity: MEDIUM (evaluative type, high veracity standard)
- Line: 183
- Found: "Since Q3 2024, orchestrators running AI inference pipelines have seen higher v_daily values than transcoding-only nodes."
- NOT-TESTED: No source cited. This is a comparative claim about historical network data.
- Fix: `{/* REVIEW: AI pipeline v_daily advantage claim — verify against Explorer historical data or Livepeer network analytics. If no direct source, rephrase to: "Orchestrators running popular AI models have reported higher fee volumes in network discussions." */}`

---

### Category 7: Navigation & Information Architecture

| # | Check | Result | Notes |
|---|-------|--------|-------|
| 7.1 | Page exists in docs.json | PASS | Confirmed at docs.json line 2915: `"v2/orchestrators/guides/staking-and-rewards/delegate-operations"` |
| 7.2 | Navigation matches file system | PASS | File exists at `v2/orchestrators/guides/staking-and-rewards/delegate-operations.mdx` |
| 7.3 | Tab entry portal routes to all sections | N/A — section-level check |
| 7.4 | No structural orphans | PASS | Page is reachable from the Staking and Earning nav group |
| 7.5 | Audience journey complete | PASS | Page sits within a coherent sequence: earning-model → reward-mechanics → payments → delegate-operations → network-participation |
| 7.6 | Cross-tab graduation paths exist | PASS | Cross-tab links to `/v2/lpt/about/purpose` and `/v2/lpt/delegation` present (link resolution issue for the latter — see F-8.1) |
| 7.7 | File in correct lane | PASS | Published content in `v2/orchestrators/` not `_workspace/` |
| 7.8 | File naming conventions | PASS | No special prefix required for this file type; `delegate-operations.mdx` follows kebab-case convention |
| 7.9 | _workspace/ TTL compliance | N/A — not a workspace file |

---

### Category 8: Links & Rendering

| # | Check | Result | Notes |
|---|-------|--------|-------|
| 8.1 | All internal links resolve | FAIL | `/v2/lpt/delegation` (line 246) does not resolve to a file. The `v2/lpt/delegation/` directory exists but contains no `index.mdx`. Files present: `about-delegators.mdx`, `delegation-economics.mdx`, `delegation-guide.mdx`, `getting-started.mdx`, `overview.mdx`. See finding F-8.1 |
| 8.2 | All external links live | NOT-TESTED | External links present: `https://explorer.livepeer.org/orchestrators`, `https://explorer.livepeer.org`, `https://github.com/livepeer/explorer/blob/main/lib/roi.ts`, `https://livepeer.org/primer`. Not tested against live server |
| 8.3 | All snippet imports resolve | PASS | Imports verified: `'/snippets/components/wrappers/steps/Steps.jsx'`, `'/snippets/components/wrappers/tables/Tables.jsx'`, `'/snippets/components/elements/spacing/Divider.jsx'`, `'/snippets/components/elements/math/Math.jsx'` — all located in the snippets directory |
| 8.4 | All images load | N/A — no inline images. OG image path `'/snippets/assets/site/og-image/en/orchestrators.png'` uses a standard path |
| 8.5 | Page renders without error | NOT-TESTED — Mintlify dev server not run |
| 8.6 | No TODO/TBD/Coming Soon in published content | PASS | Draft note at line 30 is inside `{/* ... */}` comment block, not rendered. No TODO/TBD in published text |

**Finding F-8.1 — broken internal link: `/v2/lpt/delegation`**
- Severity: HIGH
- Line: 246
- Found: `[v2/lpt/delegation](/v2/lpt/delegation)`
- The path `/v2/lpt/delegation` points to a directory. No `index.mdx` exists in that directory. In Mintlify, this will 404 unless Mintlify resolves directory paths to the first alphabetical file (behaviour untested here).
- Files in directory: `about-delegators.mdx`, `delegation-economics.mdx`, `delegation-guide.mdx`, `getting-started.mdx`, `overview.mdx`
- Fix: Replace link target with the most appropriate specific file. Likely candidates: `/v2/lpt/delegation/delegation-guide` or `/v2/lpt/delegation/getting-started`. `{/* REVIEW: cross-tab link — confirm which delegation page is the correct target for delegators new to the process */}`
- Also fix the link text: `[v2/lpt/delegation]` displays a path, not readable text. Replace with: `[LPT Delegation Guide](/v2/lpt/delegation/delegation-guide)`.

---

### Category 9: Process & Governance

| # | Check | Result | Notes |
|---|-------|--------|-------|
| 9.1 | Human sign-off recorded | FAIL | No evidence of human sign-off in the file or associated workspace documents |
| 9.2 | All consuming decisions in registry | N/A — no structural decisions in this page that require registry entries |
| 9.3 | Gate prerequisites met | FAIL | Per tab-status.md: Orchestrators tab has no IA approval, no terminology lock, content pass not open. Page is in pre-gate state |
| 9.4 | Phase ordering respected | N/A — veracity pass not yet run per project state |
| 9.5 | Findings gathered before fixes | PASS — this report is the findings-first pass |
| 9.6 | Feedback routed | N/A — no corrections applied yet |

---

## Banned Construction Scan

**Scope:** all visible body prose, headings, frontmatter description, Notes, table cells, card descriptions, CustomDivider middleText props (none present), AccordionGroup title props (none present), Tabs title props (none present).

| Line | Sentence / Clause | Word/Pattern | Classification | Flag? |
|------|-------------------|--------------|----------------|-------|
| 36 | "Use this page to understand why delegation matters..." | `this page` | banned construction — self-reference | YES — F-2.4a |
| 36 | "Delegated LPT lets third-party token holders increase your orchestrator's total stake." | (no banned pattern) | n/a | No |
| 42 | "An orchestrator's total stake is the sum of its own self-bonded LPT and all LPT delegated to it by third parties." | (no banned pattern) | n/a | No |
| 56 | "The compounding dynamic is visible in every historical reporting period." | (no banned pattern) | factual assertion | No |
| 58 | "They trust you to keep commission stable, call reward every round, and keep the node performant." | (no banned pattern) | n/a | No |
| 64 | "Understanding exactly how that calculation works puts you in the position of knowing what levers you control." | (no banned pattern) | n/a | No |
| 103 | "Treat the headline rate as directional and use stability over time as the stronger trust signal." | (no banned pattern) | procedural advisory | No |
| 112 | "Every missed round reduces this ratio, which reduces every delegator's projected yield..." | (no banned pattern) | n/a | No |
| 114 | "A ratio below 1.0 is a signal of either unreliability or low-stake economics." | (no banned pattern) | n/a | No |
| 116 | "A value of r_rewards = 1.0 (100%) is achievable and expected." | (no banned pattern) | n/a | No |
| 145 | "New orchestrators building their initial delegation base should be at the competitive end." | `should` | conditional advisory | BORDERLINE — F-2.4b |
| 145 | "...modest increases in `rewardCut` are less disruptive — but they should still be telegraphed to delegators in advance." | `should still` | conditional advisory | BORDERLINE — F-2.4b |
| 149 | "A high v_daily means more ETH flowing through the fee share calculation, raising the ETH yield component significantly." | (banned word, not banned construction) | see F-2.2 | No (construction), YES (word) |
| 151 | "Improve it by: Keep your transcoding session limits competitive..." | (no banned pattern) | procedural | No |
| 163 | "The yield formula explains the maths, but reputation is what keeps delegators when market conditions change." | (no banned pattern) | n/a | No |
| 168 | "Some high-performing orchestrators publish their operational setup, uptime history, and commission change notices publicly via:..." | (no banned pattern) | n/a | No |
| 177 | "The most common delegator complaint... is orchestrators who set attractive rates..." | (no banned pattern) | factual assertion | No |
| 189 | "It's useful to understand the delegator's side of the process to anticipate their questions." | `It's useful to` | borderline — reads like throat-clearing before content | BORDERLINE — see F-2.4c |
| 229 | "This is outside your control, but some delegators interpret reduced yields as your fault." | (no banned pattern) | factual | No |
| 237 | "This is fully within your control." | (no banned pattern) | n/a | No |

**Finding F-2.4c — borderline opener: `It's useful to understand`**
- Severity: LOW (borderline)
- Line: 189
- Found: "It's useful to understand the delegator's side of the process to anticipate their questions."
- This is a meta-framing sentence — it describes what the section is instead of starting with the content. Same class as the self-referential openers.
- Fix: Delete the sentence. Start directly with the first StyledStep and let the H2 `The delegation mechanics (what delegators actually do)` carry the framing — or better, the renamed `Delegation Process` after F-3.1g is applied.

---

## Spelling/Typo Check

Scan of all visible text, headings, prose, table cells, card descriptions, step titles:

- Line 47: `transcoding queue` — correct
- Line 56: `disproportionately` — correct
- Line 91: `rewardShare` — correct (formula variable; see F-2.11 for terminology concern)
- Line 92: `Arbitrum block times` — correct
- Line 98: `Uniswap price` — correct; verify Uniswap is still the pricing oracle used in Explorer roi.ts `{/* REVIEW */}`
- Line 163: `maths` — correct UK English (not "math")
- Line 171: `orchestrators channel` — correct
- Line 210: `stickiness` — correct
- Line 223: `realised` — correct UK English

**No typos found.** The page uses correct UK English throughout.

---

## Component Matrix

| Component | Used? | Appropriate for `guide` pageType? | Notes |
|-----------|-------|-----------------------------------|-------|
| `StyledSteps` / `StyledStep` | Yes | Likely yes (custom wrappers for Steps) | NOT-TESTED — catalog not read. Procedural steps content is appropriate use |
| `StyledTable` / `TableRow` / `TableCell` | Yes | Likely yes (custom table wrappers) | NOT-TESTED — catalog not read. Reference/comparison data is appropriate use |
| `CustomDivider` | Yes | Likely yes (spacing element) | NOT-TESTED — catalog not read. Used as section separator |
| `MathInline` / `MathBlock` | Yes | Likely yes (formula rendering) | NOT-TESTED — catalog not read. Formula-heavy content appropriate use |
| `Note` | Yes | Yes — explicitly in `guide` preferred components | Used appropriately for a formula projection caveat at lines 102–104 |
| `CardGroup` / `Card` | Yes | Yes — explicitly in `guide` preferred components | Used in Related section |

**NOT-TESTED note:** Component approval status cannot be confirmed without reading `docs-guide/catalog/components-catalog.mdx`. All component uses appear structurally appropriate but formal PASS/FAIL requires catalog cross-reference.

---

## Cross-Category Connections

```
Root Cause A: purpose field uses pageType enum value
Affects: Cat 1.4 + Cat 5.7
Fix: Replace `purpose: guide` with `purpose: operate` on line 26. One change fixes both findings.
```

```
Root Cause B: veracityStatus field absent; multiple unverified factual claims
Affects: Cat 1.1 + Cat 1.8 + Cat 6.1 + Cat 6.4 + Cat 6.5 + Cat 6.6 + Cat 6.8 + Cat 6.9
Fix: (1) Add `veracityStatus: unverified` to frontmatter. (2) Insert REVIEW flags at lines 56, 68–100, 177, 124–143, 92, 210, 183. These are two operations but share a single root cause: content has not been through a veracity pass.
```

```
Root Cause C: three required frontmatter fields absent
Affects: Cat 1.1 + Cat 1.6 + Cat 1.7 + Cat 1.8
Fix: Add to frontmatter:
  complexity: intermediate
  lifecycleStage: operate
  veracityStatus: unverified
(veracityStatus is also Root Cause B's fix — add once, resolves both.)
```

```
Root Cause D: description exceeds 160-char limit
Affects: Cat 1.11 only
Fix: Trim to: "How to attract and retain LPT delegators: Explorer ROI formula breakdown, commission strategy, reputation building, and the compounding stake flywheel." (152 chars)
```

---

## Blocking Decisions

No blocking decisions. The page's purpose, audience, and scope are clear. All findings are actionable without human input on scope, except:

**Deferred to human:**
1. F-8.1: Which specific delegation page (`delegation-guide` or `getting-started`) is the correct cross-tab link target — requires Alison to confirm the delegators tab's intended entry point for "new to delegation" content.
2. F-6.1b: Whether to pin the Explorer roi.ts link to a tagged release — requires Alison to decide on link stability policy.
3. F-1.4: Confirmation that `purpose: operate` (rather than `purpose: optimise`) is the right canonical choice. The page is majority `operate` content (understanding the system, managing relationships) with one optimisation section.

---

## Verdict Summary

**Verdict: NEEDS WORK**

**FAIL count: 14** (Categories 1.1, 1.4, 1.6, 1.7, 1.8, 1.11, 1.13, 2.2, 2.4, 2.11, 3.1, 3.4, 3.7, 4.5, 5.7, 6.1, 6.4, 6.5, 6.6, 6.8, 6.9, 7.1\*, 8.1, 9.1, 9.3)

*7.1 PASS — clarified in category table*

**Prioritised fix order:**

| Priority | Finding | Change | Blocker? |
|----------|---------|--------|----------|
| 1 | F-1.4 | `purpose: guide` → `purpose: operate` | Blocks taxonomy |
| 2 | Root Cause C | Add `complexity`, `lifecycleStage`, `veracityStatus` to frontmatter | Blocks pipeline |
| 3 | Root Cause B | Insert 6 REVIEW flags at unverified claims | Blocks veracity pass |
| 4 | F-8.1 | Fix broken `/v2/lpt/delegation` link (requires human to confirm target) | Breaks cross-tab link |
| 5 | F-1.11 | Trim description to ≤160 chars | Breaks SEO metadata |
| 6 | F-2.4a | Delete "Use this page to understand..." sentence (line 36) | Voice |
| 7 | F-2.4c | Delete "It's useful to understand..." sentence (line 189) | Voice |
| 8 | F-2.2 | Replace `significantly` (line 149) with mechanism description | Voice |
| 9 | F-2.11 | Clarify `rewardShare` as formula variable, not protocol parameter | Terminology |
| 10 | F-2.11b | Define `active set` at first use (after code block, line 54) | Terminology |
| 11 | F-3.1a–i | Rename 8 failing headings per suggestions above | Quality bar |
| 12 | F-4.5 | Add prerequisite note (requires human to confirm correct link) | Completeness |
| 13 | F-1.13 | Replace generic keywords | SEO |

The page is substantively strong — the ROI formula explanation is precise, the commission strategy is concrete, and the voice is correctly operational. The failures are structural (missing frontmatter fields), veracity (unverified claims without flags), and heading quality (8 below threshold). None require a rewrite.
