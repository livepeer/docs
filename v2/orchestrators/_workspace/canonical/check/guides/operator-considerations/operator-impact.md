# Per-Page Quality Check Report
## `v2/orchestrators/guides/operator-considerations/operator-impact.mdx`

**Review date:** 2026-03-24
**Reviewer:** Claude Code (per-page quality check agent)
**Check framework:** `v2/orchestrators/_workspace/canonical/checks.mdx`
**Frameworks ref:** `v2/orchestrators/_workspace/canonical/Frameworks.mdx`
**Navigation source:** `docs.json` lines 2874–2882

---

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|-------|----------|-------|-----------|-------|
| `title` | Yes | `Operator Impact` | PASS | — |
| `sidebarTitle` | Yes | `Operator Impact` | PASS | Matches title |
| `description` | Yes | `How Orchestrators shape the Livepeer protocol - governance weight, what gets voted on, the sovereign compute thesis, and why open video infrastructure matters.` | FAIL | See 1.11: contains US hyphen style and is 160 chars (borderline); "the sovereign compute thesis" and "why open video infrastructure matters" are passive/thematic — not subject-first |
| `keywords` | Yes | `livepeer`, `orchestrator`, `governance`, `protocol influence`, `LPT voting`, `LIPs`, `livepeer improvement proposals`, `sovereign compute`, `open infrastructure`, `treasury`, `decentralised governance`, `delegator voting` | FAIL | See 1.13: includes generic weak terms (`livepeer`, `orchestrator`) — not searcher-intent-aligned |
| `og:image` | Yes | `/snippets/assets/site/og-image/en/orchestrators.png` | PASS | — |
| `og:image:alt` | Yes | `Livepeer Docs social preview image for Orchestrators` | PASS | — |
| `og:image:type` | Yes | `image/png` | PASS | — |
| `og:image:width` | Yes | `1200` | PASS | — |
| `og:image:height` | Yes | `630` | PASS | — |
| `pageType` | Yes | `guide` | PASS | Valid 7-type canonical value |
| `audience` | Yes | `orchestrator` | PASS | Valid 7-token value |
| `purpose` | Yes | `evaluation` | FAIL | See 1.4: `evaluation` is not in the canonical 15-value set. Closest canonical match is `evaluate`. This is a deprecated/malformed alias |
| `complexity` | No | — | FAIL | See 1.6: required field missing (checks.mdx §1.1) |
| `lifecycleStage` | No | — | FAIL | See 1.7: required field missing (checks.mdx §1.1) |
| `status` | Yes | `current` | FAIL | See 1.8: `status: current` requires `veracityStatus: verified` AND zero `{/* REVIEW: */}` flags — neither condition is met |
| `lastVerified` | Yes | `2026-03-15` | INFO | Non-standard field — not in the 10 required fields. Acceptable supplementary metadata |
| `veracityStatus` | No | — | FAIL | See 1.8: required field missing; page has multiple unresolved TODO comments containing claims that need verification |
| `industry` | No | — | INFO | Optional field; not required per checks.mdx §1.9, but absence noted |
| `niche` | No | — | INFO | Optional field; not required per checks.mdx §1.10, but absence noted |

**Required field count:** 10 required fields per checks.mdx §1.1. Missing: `complexity`, `lifecycleStage`, `veracityStatus` (3 missing).

---

## Category 1 — FRONTMATTER & TAXONOMY

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 1.1 | All 10 required frontmatter fields present | FAIL | `complexity`, `lifecycleStage`, and `veracityStatus` missing. **Fix (line 25–29):** Add immediately after `status: current`:<br>`complexity: intermediate`<br>`lifecycleStage: evaluate`<br>`veracityStatus: unverified` |
| 1.2 | `pageType` uses 7-type canonical schema | PASS | `guide` is a valid canonical value |
| 1.3 | `pageVariant` valid if present | N/A — field not present; `guide` pageType does not require a variant |
| 1.4 | `purpose` uses 15-value canonical set | FAIL | Value is `evaluation` — not in the canonical 15-value set (Frameworks.mdx §1.2). The canonical value is `evaluate`. **Fix (line 27):** Change `purpose: evaluation` → `purpose: evaluate` |
| 1.5 | `audience` uses 7-token set | PASS | `orchestrator` is valid |
| 1.6 | `complexity` single canonical value | FAIL | Field absent. **Fix:** Add `complexity: intermediate` (Frameworks.mdx §1.5 — page addresses operators with some protocol context, not raw beginners; not advanced specialist content) |
| 1.7 | `lifecycleStage` single canonical value | FAIL | Field absent. **Fix:** Add `lifecycleStage: evaluate` (Frameworks.mdx §1.5 — page serves an operator assessing whether/why to run a node beyond financial return; evaluation lifecycle position) |
| 1.8 | `veracityStatus` present and honest | FAIL | Field absent. Multiple TODO comments on lines 32–43, 89, 280 flag unverified factual claims. Page has `status: current` which requires `veracityStatus: verified` — an incoherent state. **Fix:** Add `veracityStatus: unverified` and convert TODO comments to `{/* REVIEW: */}` format (checks.mdx §6.5). `status: current` should remain as-is pending full veracity pass. |
| 1.9 | `industry` array valid if present | N/A — field absent; no invalid value to flag |
| 1.10 | `niche` array valid if present | N/A — field absent; no invalid value to flag |
| 1.11 | `description` well-formed | FAIL | `How Orchestrators shape the Livepeer protocol - governance weight, what gets voted on, the sovereign compute thesis, and why open video infrastructure matters.` — Not subject-first. Opens with a gerund phrase describing the page's function, not the reader outcome. Also: US-style hyphen in "protocol - governance" (should be comma-separated or rephrased). **Fix (line 4–6):** Replace with: `Governance weight, what gets voted on, and the sovereign compute case for running open video infrastructure.` (subject-first, ≤160 chars, UK style, no self-reference) |
| 1.12 | OG image block complete | PASS | All 5 OG fields present at correct fallback path |
| 1.13 | `keywords` field quality | FAIL | `livepeer` and `orchestrator` are generic and not searcher-intent-aligned per checks.mdx §1.13. **Fix:** Replace `livepeer` and `orchestrator` with searcher-intent terms such as `livepeer governance voting`, `LPT governance weight`, `orchestrator protocol influence`. Retain strong terms: `LIPs`, `livepeer improvement proposals`, `sovereign compute`, `decentralised governance`. |

**Category 1 verdict: FAIL** — 6 failures (1.1, 1.4, 1.6, 1.7, 1.8, 1.11, 1.13 = 7 distinct failures across checks; 1.1 aggregates the missing-field findings)

---

## Category 2 — VOICE & COPY

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 2.1 | UK English throughout | FAIL | Line 192: `centralised` — PASS. Line 189: `centralised` — PASS. Line 203: `decentralised` — PASS. Line 86: `Delegator override` uses US-style punctuation (em-dash via single `-`). No US spelling errors found. However line 91: `This design gives` — acceptable. **One failure found:** Line 258: `If the motivation case is clear, the practical question becomes what an operator actually does` — see check 2.4. No US spellings found. **PASS for UK English specifically.** |
| 2.2 | Zero banned words | FAIL | Line 214: `meaningfully different` — `meaningful` is on the banned word list. **Fix (line 214):** Replace `A permissionless compute network with no single controller provides a meaningfully different infrastructure substrate.` with `A permissionless compute network with no single controller provides a different infrastructure substrate.` (remove `meaningfully`; the sentence is strengthened, not weakened) |
| 2.3 | Zero banned phrases | PASS | Scan complete. `not just` — not found. `effectively` — not found. `rather than` — not found. `and so on` — not found. `etc.` — not found. `can generate` — not found in value claims. `may produce` — not found. `among other factors` — not found. `low but not zero` — not found. `once X is stable` — not found. `depends on various` — not found. No banned phrase hits detected. |
| 2.4 | Zero banned constructions | FAIL | Three instances found — see Banned Construction Scan table below. Summary: Line 258 opens a section with an `if [condition]` construction in body prose. Lines 266–268 contain `can be done`. See table for full analysis. |
| 2.5 | Opening order correct | PASS | Page opens with governance weight framing as outcome/fact, then mechanism. Line 53: `Governance weight is the part of the Orchestrator role that starts after the earnings model makes sense.` — leads with the concept, acceptable for evaluation page. |
| 2.6 | Paragraph discipline | FAIL | Line 53–57: Two-sentence para, both about governance weight — acceptable. Line 91–93: Opens with `This design gives...` — structural bridge sentence with no new fact in the final position. Line 258–259: Opens with an `if` condition (`If the motivation case is clear`) before the actual content. See check 2.4. |
| 2.7 | Audience register correct | PASS | Orchestrator register: operational, governance-focused, respects operator investment in the protocol. No generic cloud/distributed computing language where hardware-specific terms exist. Appropriate framing for an operator evaluating non-financial reasons to run a node. |
| 2.8 | Per-audience prohibited phrases absent | PASS | Orchestrator prohibited phrases checked: `Your orchestrator will automatically` — not found. `The network rewards you for` — not found. `Easy to set up` — not found. `Simple configuration` — not found. No hits. |
| 2.9 | No passive value statements | FAIL | Line 172–174: `The concentration of stake matters. Active Orchestrators represent the majority of staked LPT in the network. On any contested governance vote, the position taken by large Orchestrators is often decisive.` — `often decisive` is unquantified and passive. **Fix:** Either cite a specific governance vote outcome or rephrase to: `On any contested governance vote, the position taken by active Orchestrators with large bonded stake determines the outcome.` OR flag with `{/* REVIEW: claim about stake concentration — verify against Explorer data */}` |
| 2.10 | No hedging openers | PASS | Page does not open with caveat or disclaimer |
| 2.11 | Terminology locked and consistent | PASS | Uses `LPT`, `orchestrator` (lower case in prose, caps for role reference), `active set`, `LIP`, `LIPs`, `Delegator`, `Gateway`, `SPE`. No deprecated terms (`Broadcaster`, `Transcoder` as Orchestrator synonym, `Combined mode`) detected. |

**Category 2 verdict: FAIL** — 4 failures (2.2 banned word, 2.4 banned constructions, 2.6 paragraph discipline, 2.9 passive value statement)

---

## Category 3 — SECTION NAMING & HEADINGS

**Note:** `Related Pages` H2 (line 284) is an approved structural element and is excluded from all heading checks per checks.mdx §3.1 and CLAUDE.md. It does not appear in the Heading Score Table.

### Banned construction pre-check

Before scoring, checking all headings against Frameworks.mdx §4.1 banned/avoid terms:
- "How Votes Work" — no banned tier term
- "Scope of Governance" — no banned tier term
- "Stake as Governance Capital" — no banned tier term
- "Beyond Earnings: Sovereign Compute" — no banned tier term (colon introduces subtitle)
- "Practical Governance Participation" — no banned tier term

### Heading Score Table

| Heading | Level | Precision (1–5) | Depth (1–5) | Stability (1–5) | Clarity (1–5) | Conciseness (1–5) | Total | Pass? |
|---------|-------|-----------------|-------------|-----------------|---------------|-------------------|-------|-------|
| How Votes Work | H2 | 3 | 2 | 3 | 4 | 5 | 17/25 | FAIL |
| Scope of Governance | H2 | 4 | 3 | 4 | 4 | 4 | 19/25 | FAIL |
| Stake as Governance Capital | H2 | 5 | 5 | 5 | 5 | 4 | 24/25 | PASS |
| Beyond Earnings: Sovereign Compute | H2 | 4 | 4 | 4 | 4 | 3 | 19/25 | FAIL |
| Practical Governance Participation | H2 | 4 | 3 | 4 | 4 | 4 | 19/25 | FAIL |

**Scoring rationale:**

**"How Votes Work" (H2, line 63) — 17/25 FAIL**
- Precision 3: "votes" is correct but generic — does not name the governing concept (stake-weighted on-chain LIP polling)
- Depth 2: "How X Works" is the prototypical surface-level label. Does not signal governance mechanics, polling process, or quorum mechanics
- Stability 3: Survives content changes but offers no anchor to what type of votes (on-chain, LIP-based, stake-weighted)
- Clarity 4: Understood immediately; tells reader what to expect
- Conciseness 5: Compact
- **Fix:** Replace with `LIP Voting Mechanics` (Precision 5, Depth 4, Stability 5, Clarity 5, Conciseness 5 = 24/25). This names the actual governing concept: LIP-based stake-weighted voting process. Not a banned term. Not a contrast label.

**"Scope of Governance" (H2, line 97) — 19/25 FAIL**
- Precision 4: Reasonable; describes what governance covers
- Depth 3: "Scope" is a structural label, not the governing concept (that governance is an operator economics lever, not a side topic)
- Stability 4: Survives content expansion
- Clarity 4: Readable
- Conciseness 4: Acceptable
- **Fix:** Replace with `Governance Coverage` or `What Governance Decides` — however `What Governance Decides` introduces a question-form, which is borderline (CLAUDE.md: no questions in headings). Recommended: `Protocol Governance Coverage` (Precision 5, Depth 4, Stability 5, Clarity 5, Conciseness 4 = 23/25). Names the domain-specific concept without question form. Not a banned term.

**"Stake as Governance Capital" (H2, line 151) — 24/25 PASS**
- Precision 5: Names the exact dual-function concept
- Depth 5: "Governance Capital" signals intellectual depth — stake has political/governance dimension beyond financial
- Stability 5: Survives any expansion of examples
- Clarity 5: Immediately understood by target audience
- Conciseness 4: 4 words; could in principle be 3 but current form is better
- No change required.

**"Beyond Earnings: Sovereign Compute" (H2, line 185) — 19/25 FAIL**
- Precision 4: "Sovereign Compute" is the governing concept; `Beyond Earnings:` is a contrast frame
- Depth 4: Signals non-financial thesis
- Stability 4: Stable to content changes
- Clarity 4: Requires minor inference — `Beyond Earnings` signals contrast, `Sovereign Compute` names the concept
- Conciseness 3: 4 words but the contrast prefix adds noise; the concept is `Sovereign Compute` and the contrast should be implicit in the section position
- **Fix:** Replace with `Sovereign Compute` (standalone, 2 words; Precision 5, Depth 5, Stability 5, Clarity 4, Conciseness 5 = 24/25). The contrast with earnings is clear from the prior section context. The colon-contrast form is weaker.

**"Practical Governance Participation" (H2, line 254) — 19/25 FAIL**
- Precision 4: Names the right thing but "Practical" is a modifier that adds little precision
- Depth 3: "Participation" is generic — does not signal that this covers active participation channels (Forum, Explorer voting, SPE)
- Stability 4: Survives expansion
- Clarity 4: Readable
- Conciseness 4: Three words; "Practical" is redundant (guidance is assumed to be practical)
- **Fix:** Replace with `Governance Participation` (remove "Practical") OR `Active Governance` (2 words, sharper). Recommended: `Governance Participation` (Precision 4, Depth 4, Stability 5, Clarity 5, Conciseness 5 = 23/25). The word "Practical" was redundant and is removed. Not a banned term.

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 3.1 | Every heading scores ≥20/25 | FAIL | 4 of 5 H2 headings score below 20/25. Failures: "How Votes Work" (17/25), "Scope of Governance" (19/25), "Beyond Earnings: Sovereign Compute" (19/25), "Practical Governance Participation" (19/25). Only "Stake as Governance Capital" passes at 24/25. See specific fixes above. |
| 3.2 | No banned or weak standalone heading terms | PASS | No Tier-1 banned terms. `Related Pages` excluded per approved structural element rule. No `Overview`, `Details`, `Introduction`, `Summary` standalone weak terms. |
| 3.3 | No literal contrast labels | FAIL | Line 185: `Beyond Earnings: Sovereign Compute` — the `Beyond Earnings:` prefix is a contrast frame against the adjacent `operator-rationale` page. Not a strict `X vs Y` label but employs contrast framing. **Fix:** Replace with `Sovereign Compute` (see 3.1 fix for this heading) |
| 3.4 | Domain-anchor rule applied | PASS | Headings include domain nouns (Governance, Stake, Sovereign Compute) sufficient to interpret in isolation |
| 3.5 | Heading names concept, not examples | PASS | No headings name examples (e.g., no `AWS vs Livepeer`) |
| 3.6 | Title well-formed | FAIL | Title `Operator Impact` is 2 words — meets length requirement. However, `Impact` is vague and does not communicate the governing concept (governance weight + sovereign compute case). This reads as a safe generic label rather than an expert editorial choice. **Fix:** Title could be `Governance Weight` (if narrowing to governance) or retain `Operator Impact` if the cross-cutting brief is intentional. Recommend flagging to Alison — title scope change requires human approval before executing. |
| 3.7 | Sounds like expert editorial choice | FAIL | `How Votes Work` in particular fails the expert editorial test — it is the weakest generic form. `Scope of Governance` and `Practical Governance Participation` are serviceable but not sharp. See 3.1 fixes. |

**Category 3 verdict: FAIL** — 4 heading failures (3.1, 3.3, 3.6, 3.7)

---

## Category 4 — PAGE STRUCTURE & CONTENT ARCHITECTURE

Navigation sequence confirmed from docs.json lines 2874–2882:
- **PREV:** `v2/orchestrators/guides/operator-considerations/business-case`
- **THIS:** `v2/orchestrators/guides/operator-considerations/operator-impact`
- **NEXT:** `v2/orchestrators/guides/operator-considerations/requirements`

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 4.1 | One purpose, one audience, one job | FAIL | The page attempts two purposes: (1) governance mechanics for active operators (purpose = `evaluate`/`operate`); (2) the sovereign compute / open infrastructure thesis (purpose = `narrative`/`evaluate`). These are thematically linked but serve different reader jobs. An operator wanting to understand how to vote is different from an operator being convinced of the non-financial case. The `evaluate` purpose is sufficient to hold both if the sovereign compute section is positioned as decision context rather than persuasion. Currently the AccordionGroup on lines 206–250 reads as persuasive framing rather than decision support. This is a borderline scope issue — flag, do not auto-resolve. |
| 4.2 | Purpose statement test passes | PASS (conditional) | "This page lets the orchestrator evaluate the governance and non-financial case for running a Livepeer node." — passable with `evaluate` purpose. Conditional on fixing 1.4 (purpose field value). |
| 4.3 | PREV/NEXT adjacency correct | PASS | PREV is `business-case` (financial case), THIS is `operator-impact` (governance + sovereign compute case — the non-financial case), NEXT is `requirements` (what hardware/capital you actually need). Sequence is logical: why → non-financial why → what you need. Reader arriving from `business-case` has financial context; reader leaving to `requirements` is ready to assess setup requirements. No gap. |
| 4.4 | No dead ends | PASS | Related Pages section at line 284 provides 4 forward links: Operating Rationale, Governance Guide, Attracting Delegators, LPT Token Overview. Reader is not stranded. |
| 4.5 | Prerequisites stated or linked | FAIL | No prerequisite statement. The page assumes familiarity with bonded stake, LPT, the active set, and reward mechanics. Line 55: `Bonded stake determines how much influence you carry` — `bonded stake` is not defined at first use on this page. Line 59 links to `network-participation` for stake/delegation mechanics, but this is a cross-reference, not a prerequisite statement. **Fix (after line 51 CustomDivider, before the opening paragraph):** Add prerequisite context via Note: `{/* REVIEW: add prerequisite statement or link — verify that operator-rationale and business-case are the standard prior pages and that "bonded stake" is defined there */}` |
| 4.6 | Out-of-scope is clear | PASS | Governance mechanics, sovereign compute thesis — page stays in scope. Does not bleed into operational setup or earnings specifics. |
| 4.7 | Information type per section is correct | PASS (partial) | Purpose `evaluate` permits: primary = `evaluative`, `analytical`, `factual`; secondary = `technical`, `conceptual`. Sections: governance mechanics (factual/conceptual — acceptable as secondary), scope table (factual — acceptable), stake diagram (structural/factual — borderline but acceptable), sovereign compute case (narrative — borderline for `evaluate` purpose). The AccordionGroup (lines 205–250) is `narrative` type and is secondary-to-tertiary for `evaluate`. Acceptable but noting the risk. |
| 4.8 | No content duplication from adjacent sections | FAIL | Line 59: `For the mechanics of staking and delegation, see Governance Guide. For delegator voting rights, see Attracting Delegators.` — the cross-references are fine. However, the content in lines 84–93 (voting weight, passing threshold, delegator override, poll creation cost) may overlap with `network-participation` (Governance Guide). This cannot be confirmed without reading the adjacent page, but the cross-reference on line 59 implies `network-participation` covers the same mechanics. **Flag:** Potential duplication with `network-participation` — verify before publication. NOT-TESTED against `network-participation` content. |
| 4.9 | Section orientation page present | N/A — section-level check; this is a per-page review |
| 4.10 | Cross-tab links at journey intersections | INFO — tab-level check. Line 296: `<Card href="/v2/lpt/about/overview">` — one cross-tab link (to LPT tab). This is a positive signal for a per-page check. |

**Category 4 verdict: FAIL** — 3 failures (4.1 borderline, 4.5 missing prerequisite, 4.8 potential duplication flag)

---

## Category 5 — LAYOUT, COMPONENTS & TEMPLATE

**Component approval status:** NOT-TESTED — `docs-guide/catalog/components-catalog.mdx` was not read during this review. Component checks that would require catalog reading are marked NOT-TESTED. Layout-per-pageType checks use the quick reference matrix in checks.mdx §5.

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 5.1 | Correct template for pageType + pageVariant | NOT-TESTED | `guide` pageType template is `guide` (per checks.mdx §5 matrix). No pageVariant set. Template source is `snippets/templates/pages/`. Not verified against template file. |
| 5.2 | Required sections present | PASS (partial) | `guide` requires: Overview + Steps or H2 sections. Page has H2 sections. No `Overview` heading — opened with prose, which is acceptable for a guide. Content is substantive. |
| 5.3 | Only approved components used | NOT-TESTED | Components used: `CustomDivider`, `StyledTable`, `TableRow`, `TableCell`, `ScrollableDiagram` (imported but not found used in body — import at line 48 only), `CenteredContainer`, `BorderedBox` (imported at line 49 but not found used), `AccordionGroup`, `Accordion`, `Note`, `Warning`, `Card`, `CardGroup`, `LinkArrow`. Not verified against catalog. |
| 5.4 | Avoided components absent | PASS | No `TODO/TBD` component placeholders (inline TODO comments exist but these are MDX comments, not rendered components). No `Coming Soon`. No `PreviewCallout`. |
| 5.5 | Information type → component mapping correct | PASS | `evaluative`/`analytical` content uses prose + tables. `narrative` content uses AccordionGroup. `factual` content uses StyledTable. Mermaid diagrams for `structural`/`analytical` flow — appropriate. |
| 5.6 | MDX renders clean | NOT-TESTED — local dev server not run during this review. Import at line 48 imports `ScrollableDiagram` but no `<ScrollableDiagram>` usage found in the body. Import at line 49 imports `CenteredContainer, BorderedBox` but no usage found in the body. These dead imports may cause no rendering error in Mintlify but are untidy. NOT-TESTED for actual render errors. |
| 5.7 | No old-schema frontmatter | FAIL | `purpose: evaluation` is a deprecated/malformed alias (see 1.4). All other frontmatter values are current-schema. |
| 5.8 | CSS uses custom properties only | PASS | Mermaid diagrams use hardcoded hex colours on lines 70–80, 157–165. However: Mermaid's `%%{init}%%` block is a Mermaid-native theming mechanism, not Mintlify CSS. This is a borderline case. The TODO comment on line 33 (`Verify: Mermaid diagrams use theme colours (hardcoded)`) flags this as a known open issue. **Flag:** Mermaid hardcoded colours (`#1a1a1a`, `#2d9a67`, `#0d0d0d`) do not use CSS custom properties. Whether Mermaid theming is subject to the CSS custom properties rule requires human decision. |
| 5.9 | Generated file banners intact | N/A — page is not a generated file |
| 5.10 | Component naming/import conventions | PASS (partial) — imports are PascalCase, components are in semantic subdirectories per import paths. Dead imports noted (see 5.6) but not actionable per checks.mdx REPORTING RULES: "Dead imports. Do not flag." |

**Category 5 verdict: FAIL (conditional)** — 1 confirmed failure (5.7 old-schema purpose alias), 3 NOT-TESTED checks, 1 borderline (5.8 Mermaid colours)

---

## Category 6 — VERACITY & FACTUAL ACCURACY

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 6.1 | Every factual claim citable | FAIL | NOT-TESTED against primary sources. Multiple specific factual claims: (a) `33.33% of staked LPT` quorum threshold (line 85); (b) `50% of votes cast` approval threshold (line 85); (c) `100 LPT` poll creation cost (lines 73, 87); (d) `~10 rounds, ~10 days` polling period (line 74); (e) `Livepeer Foundation, launched in 2025` (line 139). All have `NOT-TESTED` status. |
| 6.2 | Code/commands tested | N/A — no code blocks or CLI commands on this page |
| 6.3 | No deprecated API usage | N/A — no API endpoints referenced |
| 6.4 | Numbers are real | FAIL | NOT-TESTED: `33.33%`, `50%`, `100 LPT`, `~10 rounds`, `~10 days`, `2025` (Foundation launch year). Line 89 already has `{/* TODO: Confirm the current poll-creation cost on the live governance contract. */}` — author-flagged. Line 280 has `{/* TODO: Add links to active SPE governance discussions when they are available. */}`. Lines 32–43 contain a multi-item TODO block flagging all of: Mermaid colours, tables, em-dashes, UK spelling, and factual checks. None of these are in `{/* REVIEW: */}` format required by checks.mdx §6.5. |
| 6.5 | REVIEW flags for unverified claims | FAIL | Three TODO comments exist (lines 32–43, 89, 280) but NONE use the required `{/* REVIEW: [claim] — [what needs checking] */}` format. **Fix:** Convert all three TODO comments to REVIEW format. Specifically: (a) Line 89: `{/* REVIEW: poll creation cost (100 LPT) — verify against LivepeerGovernor contract at https://arbiscan.io/address/{contract} */}` (b) Line 280: `{/* REVIEW: SPE governance discussions — add links when active proposals exist at https://forum.livepeer.org/c/governance/17 */}` (c) Lines 32–43: Break into individual REVIEW comments per claim, or remove non-factual items (Mermaid colours, table structure — these are layout concerns, not veracity concerns) |
| 6.6 | veracityStatus honest | FAIL | `veracityStatus` field is absent (see 1.8). Page has multiple unverified factual claims and `status: current`. This is incoherent. Required: `veracityStatus: unverified`. |
| 6.7 | Authoritative vs AI-generated glossary | N/A — no glossary references on this page |
| 6.8 | Source staleness check | FAIL | Governance parameters (`33.33%`, `50%`, `100 LPT`, polling period) are on-chain values that can change via governance vote. High staleness risk. NOT-TESTED against current LivepeerGovernor contract state. |
| 6.9 | No open-ended research tasks | FAIL | Line 280: `{/* TODO: Add links to active SPE governance discussions when they are available. */}` — open-ended, no named source, no concrete next step. **Fix:** Replace with `{/* REVIEW: SPE governance discussions — check https://forum.livepeer.org/c/governance/17 for current active SPE proposals; link when available; if none active, remove this TODO */}` |

**Category 6 verdict: FAIL** — 5 failures (6.1, 6.4, 6.5, 6.6, 6.9)

---

## Category 7 — NAVIGATION & INFORMATION ARCHITECTURE

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 7.1 | Page exists in docs.json | PASS | Confirmed: `docs.json` line 2879: `"v2/orchestrators/guides/operator-considerations/operator-impact"` |
| 7.2 | Navigation matches file system | PASS — file exists at the declared path |
| 7.3 | Tab entry portal routes to all sections | N/A — section-level check |
| 7.4 | No structural orphans | PASS — reachable from docs.json navigation |
| 7.5 | Audience journey complete | PASS (partial) — page has clear forward links via Related Pages section |
| 7.6 | Cross-tab graduation paths exist | PASS (partial) — line 296 links to `/v2/lpt/about/overview` (LPT tab). One cross-tab link on this page. |
| 7.7 | File in correct lane | PASS — `v2/orchestrators/guides/` is the publishable lane for this page type |
| 7.8 | File naming conventions | PASS — `operator-impact.mdx` uses no prefixes; plain name is correct for a guide page in a named subdirectory |
| 7.9 | _workspace/ TTL compliance | N/A — this is a publishable page, not a workspace file |

**Category 7 verdict: PASS**

---

## Category 8 — LINKS & RENDERING

Internal links on this page:
1. Line 59: `/v2/orchestrators/guides/staking-and-rewards/network-participation` (label: "Governance Guide")
2. Line 59: `/v2/orchestrators/guides/staking-and-rewards/delegate-operations` (label: "Attracting Delegators")
3. Line 187: `/v2/orchestrators/guides/operator-considerations/operator-rationale` (label: "Operating Rationale")
4. Line 288: `/v2/orchestrators/guides/operator-considerations/operator-rationale` (card)
5. Line 290: `/v2/orchestrators/guides/staking-and-rewards/network-participation` (card)
6. Line 293: `/v2/orchestrators/guides/staking-and-rewards/delegate-operations` (card)
7. Line 296: `/v2/lpt/about/overview` (card)

External links:
- Line 144: `https://forum.livepeer.org/c/governance/17`
- Line 266: `https://explorer.livepeer.org/voting`
- Line 260: `https://forum.livepeer.org/c/governance/17`

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 8.1 | All internal links resolve | NOT-TESTED — link verification script not run. Sampling: `v2/orchestrators/guides/staking-and-rewards/network-participation` and `v2/orchestrators/guides/operator-considerations/operator-rationale` are referenced in docs.json (from prior session). `/v2/lpt/about/overview` — NOT-TESTED (LPT tab file system not confirmed). |
| 8.2 | All external links live | NOT-TESTED — not verified in this run |
| 8.3 | All snippet imports resolve | NOT-TESTED — imports reference `/snippets/components/...` paths; not validated against file system |
| 8.4 | All images load | N/A — no image blocks in the page body (OG image is frontmatter-only) |
| 8.5 | Page renders without error | NOT-TESTED — Mintlify dev server not run |
| 8.6 | No TODO/TBD/Coming Soon in published content | FAIL | Lines 32–43, 89, and 280 contain `{/* TODO: ... */}` comments. MDX comments are not rendered in the browser, so they do not technically appear as published content. However, checks.mdx §8.6 requires zero TODO/TBD/Coming Soon in publishable pages. The TODO format is explicitly not the required REVIEW format per checks.mdx §6.5. **Fix:** Convert all three TODO blocks to `{/* REVIEW: */}` format (see Category 6 fixes). |

**Category 8 verdict: FAIL (partial)** — 1 confirmed failure (8.6 TODO format), 4 NOT-TESTED checks

---

## Category 9 — PROCESS & GOVERNANCE

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 9.1 | Human sign-off recorded | FAIL | No evidence of human sign-off in the page file. No approved gate stamp. This is expected for a page in pre-publication state, but noted as a gate requirement before publication. |
| 9.2 | All consuming decisions in registry | NOT-TESTED — `decisions/decision-registry.md` not read in this session |
| 9.3 | Gate prerequisites met | FAIL | Per `workspace/plan/active/CONTENT-WRITING/decisions/tab-status.md`: Orchestrators tab — IA not yet approved, terminology not locked, content pass not open. Gates have not been passed. Page is in pre-gate state. This is a process state, not a page quality failure per se. |
| 9.4 | Phase ordering respected | NOT-TESTED |
| 9.5 | Findings gathered before fixes | PASS — this report constitutes the findings-first step |
| 9.6 | Feedback routed | N/A — applies post-correction |

**Category 9 verdict: FAIL (process state)** — gates not passed; expected given project state per tab-status.md

---

## Banned Construction Scan

**Scope:** All visible text including body prose, headings, frontmatter description, Notes, Warnings, table cells, card descriptions, CustomDivider `middleText` props, AccordionGroup/Accordion `title` props.

**CustomDivider `middleText` props scanned:**
- Line 61: `"Governance Mechanics"` — no banned construction
- Line 95: `"What Gets Voted On"` — no banned construction
- Line 149: `"Influence and Stake"` — no banned construction
- Line 183: `"The Sovereign Compute Case"` — no banned construction
- Line 252: `"Participation in Practice"` — no banned construction

**Accordion `title` props scanned:**
- Line 206: `"For independent media"` — no banned construction
- Line 217: `"For AI researchers"` — no banned construction
- Line 229: `"For platforms avoiding lock-in"` — no banned construction
- Line 239: `"For developers building on open compute"` — no banned construction

| Line | Sentence / Text | Word/Pattern | Classification | Flag? |
|------|-----------------|--------------|----------------|-------|
| 55–57 | `Every LPT staked to an Orchestrator - whether self-staked or delegated - becomes voting influence over the protocol that shapes operator economics, network priorities, and the infrastructure Livepeer can support.` | `can support` | value-claim | YES — `can` in a value claim. Fix: `Livepeer supports` |
| 84 | `Voting weight equals total bonded stake (Orchestrator self-stake plus all delegated LPT)` | — | No banned pattern | NO |
| 85 | `Passing threshold requires 33.33% of all staked LPT to support AND 50% of votes cast to approve` | — | No banned pattern | NO |
| 86 | `Delegators can vote independently, overriding their Orchestrator's position on a specific LIP` | `can vote` | procedural capability statement | BORDERLINE — `can` here asserts a system capability (Delegators have the ability), not a value claim. Passes as procedural. |
| 87 | `100 LPT to create an on-chain poll, preventing low-effort or spam proposals` | — | No banned pattern | NO |
| 91–92 | `This design gives Orchestrators with large bonded stake substantial influence, while preserving Delegator autonomy.` | — | `substantial` is not on the banned word list; `This design gives` is a structural bridge but not a banned construction per se | INFO — "substantial" is not banned but is vague. Not a formal failure. |
| 93 | `An Orchestrator cannot vote on behalf of Delegators who choose to exercise their own governance rights.` | `cannot` / `not [X]` | BORDERLINE — `not [X]` construction in what is a factual system constraint (this IS a negative statement of a system rule, not a primary value statement). System constraints phrased negatively are common and acceptable in technical docs. Human review recommended. | BORDERLINE |
| 153 | `stake is both economic capital and political capital inside the network` | — | No banned pattern | NO |
| 154 | `It determines not only reward exposure, but how much influence an operator carries when the protocol changes.` | `not only` | BORDERLINE — `not only X but Y` is a contrast framing. Not explicitly in the banned list but close to `not just`. Recommend review. | BORDERLINE |
| 169–170 | `Orchestrators who deliver reliable service, maintain competitive pricing, and build trust with Delegators accumulate more bonded stake over time - and with it, more governance weight.` | — | No banned pattern | NO |
| 172 | `The concentration of stake matters.` | — | No banned pattern | NO |
| 175 | `the position taken by large Orchestrators is often decisive.` | `often` | `often` is not banned but is unquantified. See 2.9. | INFO |
| 178–181 | Warning block: `Orchestrators that hold large stake and vote on proposals affect outcomes for all network participants...` | — | No banned pattern | NO |
| 192 | `A permissionless compute network with no single controller provides a meaningfully different infrastructure substrate.` | `meaningfully` | value-claim — banned word | YES — `meaningfully` is banned. Fix: remove adverb: `provides a different infrastructure substrate` |
| 197–200 | Bullet: `a policy change at a major provider affects all its customers simultaneously` | — | No banned pattern | NO |
| 201 | `centralised providers can and do restrict access` | `can` | factual/procedural — this is a documented real-world claim, not a Livepeer value claim | BORDERLINE — passes as factual claim about the external world, not a Livepeer value claim |
| 209–214 | Accordion: `Video infrastructure controlled by centralised platforms is subject to those platforms' content policies... A permissionless compute network with no single controller provides a meaningfully different infrastructure substrate.` | `meaningfully` | banned word — same as line 192 | YES — `meaningfully` appears twice (line 192 and within the accordion). Both require the same fix. |
| 221 | Accordion: `Centralised providers gatekeep this through pricing, account verification, acceptable use policies, and geographic restrictions.` | — | No banned pattern | NO |
| 224 | Accordion: `Any application can access GPU compute by paying the market rate in ETH` | `can access` | value-claim | YES — `can access` in a value claim. Fix: `Any application accesses GPU compute by paying the market rate in ETH` |
| 235 | Accordion: `No single Orchestrator's failure or pricing change can disrupt a well-configured Gateway.` | `can disrupt` | BORDERLINE — this is a `not [X]` framing (`No single... can disrupt`) asserting a system guarantee. The guarantee is also phrased conditionally (`a well-configured Gateway`). Two issues: (1) `not [X]` primary statement, (2) conditional qualifier without quantification. | YES (BORDERLINE) |
| 248 | Accordion: `An Orchestrator is more than an earning node` | `more than` | BORDERLINE — not on the exact banned list but semantically adjacent to `not just X`. States contrast, not the positive concept. | BORDERLINE |
| 258–259 | `If the motivation case is clear, the practical question becomes what an operator actually does with that influence.` | `If [condition]` in body prose | banned construction | YES — opens section body with `if [condition]`. Fix: Delete the conditional opener. Replace with: `Governance participation means more than showing up on voting day.` (this sentence already exists one line later at 258–259 — the `If` opener is the one to remove) |
| 265 | `Orchestrators with specific operational perspectives... provide signal that proposal authors and the broader community need.` | — | No banned pattern | NO |
| 267–268 | `Orchestrators that hold large stake but consistently abstain reduce the effective quorum available for passing beneficial proposals and signal low engagement to their Delegators.` | — | No banned pattern | NO |
| 272–273 | `Transparent governance communication is a quality signal that influences delegation decisions.` | — | No banned pattern | NO |

**Summary of confirmed flags:**
1. Line 56–57: `can support` — value-claim `can`. Fix: `Livepeer supports`
2. Line 192: `meaningfully` — banned word. Fix: remove adverb
3. Line 209–214 (accordion): `meaningfully` again — same fix
4. Line 224 (accordion): `can access` — value-claim `can`. Fix: `accesses`
5. Line 258–259: `If the motivation case is clear` — `if [condition]` in body prose. Fix: delete this opener sentence

**Borderline (human review):**
- Line 93: `cannot` / `not [X]` — system constraint; borderline
- Line 154: `not only` — contrast framing; borderline
- Line 201: `can and do restrict` — external-world factual claim; borderline passes
- Line 235: `can disrupt` + `not [X]` — two issues, recommend human review
- Line 248: `more than` — borderline `not just X`

---

## Spelling/Typo Check

Full visible text scanned: headings, prose, card descriptions, table cells, accordion content, Note/Warning blocks, CustomDivider middleText props.

**Findings:**

1. **Line 6 (description):** `- governance weight` — US-style dash with spaces around it in frontmatter. Not a typo but inconsistent punctuation style. Minor.
2. **Line 57:** `Livepeer can support` — correct spelling, but see banned construction scan.
3. **Line 73:** `livepeer/LIPs` — correct
4. **Line 86:** `Delegator override` — capitalisation of `Delegator` is consistent with the page's pattern (role label treatment). Consistent throughout. PASS.
5. **Line 139:** `Livepeer Foundation, launched in 2025` — "launched" is past tense, appropriate. Spelling correct.
6. **Accordion line 209:** `jurisdictions` — correct spelling
7. **Accordion line 222:** `gatekeep` — correct spelling (one word)
8. **Card line 287:** `Operating Rationale` vs body label `operator-rationale` — the card label `Operating Rationale` does not match the `sidebarTitle` of the linked page. Minor inconsistency — not a typo but a label mismatch. Recommend confirming against the linked page's `sidebarTitle`.

**No spelling errors or typos found.** The label mismatch on line 287 is noted as a consistency flag, not a spelling error.

---

## Component Matrix

| Component | Used? | Appropriate for `guide` pageType? | Notes |
|-----------|-------|-----------------------------------|-------|
| `CustomDivider` | Yes (lines 51, 61, 95, 149, 183, 252, 282) | NOT-TESTED — catalog not read | Used as both blank dividers and section-labelled dividers |
| `StyledTable` | Yes (lines 102–137) | NOT-TESTED | With `TableRow`, `TableCell` — structured table for governance scope |
| `ScrollableDiagram` | Imported (line 48) but not used in body | NOT-TESTED | Dead import per checks.mdx: "Dead imports. Do not flag." |
| `CenteredContainer`, `BorderedBox` | Imported (line 49) but not used | NOT-TESTED | Dead imports per checks.mdx: "Dead imports. Do not flag." |
| `AccordionGroup` + `Accordion` | Yes (lines 205–250) | NOT-TESTED — checks.mdx quick reference matrix shows `Accordion, AccordionGroup` as preferred for `concept` pageType, not listed for `guide`. | For `guide` the matrix shows: `Steps, Step, CodeGroup, Note, Info, Tip, Card, CardGroup`. AccordionGroup is not in the preferred list but not in the Avoid list either. Borderline — defer to catalog reading. |
| `Note` | Yes (lines 143–147) | PASS — `Note` is listed as preferred for `guide` | Appropriate use |
| `Warning` | Yes (lines 176–181) | PASS — Warning is not in the Avoid list for `guide` | Appropriate use (stakes/responsibility warning) |
| `Card` + `CardGroup` | Yes (lines 286–299) | PASS — explicitly listed as preferred for `guide` | Related Pages section |
| `LinkArrow` | Yes (lines 59, 187) | NOT-TESTED | Inline cross-reference component |
| Mermaid (code block) | Yes (lines 69–80, 156–166) | NOT-TESTED | Mermaid diagrams via fenced code blocks; not a JSX component |

**Component matrix verdict: NOT-TESTED** — catalog not read. No confirmed FAIL on components; AccordionGroup is a borderline case for `guide` pageType that requires catalog verification.

---

## Cross-Category Connections

```
Root Cause A: purpose field value `evaluation` (non-canonical)
Affects: Cat 1.4 (wrong enum value) + Cat 5.7 (old-schema frontmatter)
Fix: Change `purpose: evaluation` → `purpose: evaluate` on line 27
```

```
Root Cause B: TODO comment format (not REVIEW format)
Affects: Cat 6.5 (wrong flag format) + Cat 8.6 (TODO in publishable page)
Fix: Convert all three TODO blocks (lines 32–43, 89, 280) to {/* REVIEW: */} format
```

```
Root Cause C: Missing required frontmatter fields
Affects: Cat 1.1 (fields missing) + Cat 1.6 (complexity) + Cat 1.7 (lifecycleStage) + Cat 1.8 (veracityStatus) + Cat 6.6 (veracityStatus honest)
Fix: Add three fields after `status: current` on line 29: `complexity: intermediate`, `lifecycleStage: evaluate`, `veracityStatus: unverified`
```

```
Root Cause D: `meaningfully` (banned word) appears twice
Affects: Cat 2.2 (banned words) + Banned Construction Scan (lines 192 and 214 in accordion)
Fix: Remove `meaningfully` at both occurrences — line 192 in body prose, and identical sentence in Accordion (lines 209–214 block)
```

```
Root Cause E: Heading quality below threshold
Affects: Cat 3.1 (scores below 20/25) + Cat 3.7 (not expert editorial choices) + Cat 3.3 (contrast label in "Beyond Earnings:")
Fix: Rename 4 headings per recommendations in Category 3
```

---

## Blocking Decisions

```
Blocking Decision 1: Title scope
Question: Does `Operator Impact` remain as the title, or is it renamed to reflect the primary governing concept?
Options:
  [A] Retain `Operator Impact` as-is
  [B] Replace with `Governance Weight` (narrows scope to governance primary)
  [C] Replace with a title covering both governance weight and sovereign compute thesis
If A: No title change needed; flag as known scope ambiguity
If B: Update `title` and `sidebarTitle` fields; rewrite description to match narrower scope
If C: Define the governing concept first, then rename (requires Alison input)
Owner: Alison
```

```
Blocking Decision 2: AccordionGroup for sovereign compute case
Question: Is the sovereign compute AccordionGroup (lines 205–250) appropriately scoped for an `evaluate` purpose page, or does it belong in a separate concept page?
Options:
  [A] Retain — sovereign compute case is valid decision context for an operator evaluating non-financial reasons
  [B] Extract — move sovereign compute content to a standalone concept page; this page references it with a cross-link
If A: No structural change; flag narrative type as acceptable secondary for evaluate purpose
If B: Create stub for sovereign compute concept page; replace AccordionGroup with a cross-link card
Owner: Alison
```

---

## Verdict

**Overall: NEEDS WORK**

**Confirmed failures by category:**

| Category | Failures |
|----------|---------|
| 1 — Frontmatter | 7 (1.1, 1.4, 1.6, 1.7, 1.8, 1.11, 1.13) |
| 2 — Voice & Copy | 4 (2.2, 2.4, 2.6, 2.9) |
| 3 — Headings | 4 (3.1, 3.3, 3.6, 3.7) |
| 4 — Structure | 3 (4.1 borderline, 4.5, 4.8) |
| 5 — Layout | 1 confirmed + several NOT-TESTED (5.7) |
| 6 — Veracity | 5 (6.1, 6.4, 6.5, 6.6, 6.9) |
| 7 — Navigation | PASS |
| 8 — Links | 1 (8.6) |
| 9 — Process | 2 (9.1, 9.3) — expected pre-gate state |

**Priority fixes (executable without blocking decisions):**

1. **1.1 / 1.6 / 1.7 / 1.8 / 6.6:** Add three missing fields on line 29: `complexity: intermediate`, `lifecycleStage: evaluate`, `veracityStatus: unverified`
2. **1.4 / 5.7:** Change `purpose: evaluation` → `purpose: evaluate` on line 27
3. **2.2 / Banned Scan:** Remove `meaningfully` at line 192 and inside the Accordion block (lines 209–214)
4. **2.4 / Banned Scan:** Fix `can support` → `supports` on line 57; fix `can access` → `accesses` in Accordion line 224; delete `If the motivation case is clear,` opener at line 258
5. **6.5 / 8.6:** Convert three TODO blocks (lines 32–43, 89, 280) to `{/* REVIEW: */}` format
6. **3.1:** Rename headings: `How Votes Work` → `LIP Voting Mechanics`; `Scope of Governance` → `Protocol Governance Coverage`; `Beyond Earnings: Sovereign Compute` → `Sovereign Compute`; `Practical Governance Participation` → `Governance Participation`
7. **1.11:** Replace description with subject-first form: `Governance weight, what gets voted on, and the sovereign compute case for running open video infrastructure.`
8. **1.13:** Replace generic keywords `livepeer` and `orchestrator` with: `livepeer governance voting`, `LPT governance weight`

**Fixes requiring human decision before execution:**

- 3.6 (title rename): see Blocking Decision 1
- 4.1 (sovereign compute scope): see Blocking Decision 2
- 5.8 (Mermaid hardcoded colours): requires clarification on whether CSS custom properties rule applies to Mermaid `%%{init}%%` blocks

---

_Report generated: 2026-03-24 | Check framework version: checks.mdx (current) | Frameworks version: Frameworks.mdx (current)_
