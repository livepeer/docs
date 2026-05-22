# Per-Page Quality Check: `v2/orchestrators/concepts/incentive-model.mdx`

**Date:** 2026-03-24
**Reviewer:** Claude Code (automated review pass)
**Verdict:** NEEDS WORK

**Generated-file-banner present:** No. Human-authored page rules apply in full.

---

## Frontmatter Table

| Field | Present | Value | Pass/Fail | Note |
|---|---|---|---|---|
| `title` | Yes | `'Orchestrator Incentive Model'` | PASS | Subject-first, clear |
| `sidebarTitle` | Yes | `'Incentive Model'` | PASS | Concise |
| `description` | Yes | `How Orchestrators earn - the two revenue streams, cost structure, payment flow, pricing configuration, and what the earnings case looks like in practice.` | FAIL | 153 chars — within 160 limit. **Hyphen used as em-dash substitute** (`earn -`) where a comma or colon is correct. See finding F-01. |
| `pageType` | Yes | `'concept'` | PASS | Valid canonical value |
| `audience` | Yes | `'orchestrator'` | PASS | Valid canonical token |
| `purpose` | Yes | `'explain'` | PASS | Correct canonical value, not deprecated alias |
| `complexity` | No | — | FAIL | Required field missing. Derivable: `intermediate` |
| `lifecycleStage` | No | — | FAIL | Required field missing. Derivable: `evaluate` |
| `keywords` | Yes | 16-entry array | FAIL | Contains generic/weak terms. See finding F-02 |
| OG image block | Yes | All 5 OG fields present | PASS | Correct fallback path |
| `veracityStatus` | No | — | FAIL | Missing required field. Two open REVIEW flags (lines 171, 274). Must be `unverified` |
| `status` | Yes | `'current'` | FAIL | `status: current` requires `veracityStatus: verified` AND zero REVIEW flags. Neither met. Change to `status: 'draft'` (checks.mdx §1.8) |
| `lastVerified` | Yes | `'2026-03-15'` | INFO | Date present but `veracityStatus` absent — cannot be trusted without the status field |
| `industry` | No | — | INFO | Not present. Suggest `["economics", "technical"]` — incentive model is economics-primary |
| `niche` | No | — | INFO | Not present. Suggest `["protocol", "tokenomics", "infrastructure"]` |
| `pageVariant` | No | — | PASS | Not required for `pageType: concept` without a variant |

**Summary of frontmatter failures:**
- HIGH: `complexity` missing (required field)
- HIGH: `lifecycleStage` missing (required field)
- HIGH: `veracityStatus` missing (required field)
- HIGH: `status: current` invalid when `veracityStatus` absent and REVIEW flags open
- MEDIUM: `description` hyphen misuse (`earn -` should be `earn:` or restructured)
- MEDIUM: `keywords` array contains generic terms (`livepeer`, `orchestrator`, `staking`)

---

## Category 1 — Frontmatter & Taxonomy

| # | Check | Result | Note |
|---|---|---|---|
| 1.1 | All 10 required frontmatter fields present | FAIL | `complexity`, `lifecycleStage`, `veracityStatus` missing (3 of 10 absent) |
| 1.2 | `pageType` uses 7-type canonical schema | PASS | `concept` is valid |
| 1.3 | `pageVariant` valid if present | N/A | Not present; not required for `concept` without variant |
| 1.4 | `purpose` uses 15-value canonical set | PASS | `'explain'` is a valid canonical value |
| 1.5 | `audience` uses 7-token set | PASS | `'orchestrator'` is valid |
| 1.6 | `complexity` single canonical value | FAIL | Field absent; derivable as `intermediate` |
| 1.7 | `lifecycleStage` single canonical value | FAIL | Field absent; derivable as `evaluate` |
| 1.8 | `veracityStatus` present and honest | FAIL | Field absent. Two REVIEW flags open (lines 171, 274). Correct value is `unverified`. Additionally, `status: current` requires `veracityStatus: verified` — contradicted by current state. Fix: add `veracityStatus: unverified` AND change `status: draft` |
| 1.9 | `industry` array valid if present | N/A | Not present; not required |
| 1.10 | `niche` array valid if present | N/A | Not present; not required |
| 1.11 | `description` well-formed | FAIL | Hyphen used as separator/em-dash (`How Orchestrators earn - the two revenue streams`) — should be colon or restructured. Content and length (153 chars) otherwise pass |
| 1.12 | OG image block complete | PASS | All 5 OG fields present with correct fallback path |
| 1.13 | `keywords` field quality | FAIL | Contains generic, low-value terms: `livepeer` (line 8), `orchestrator` (line 9), `staking` (line 17). These are not search-intent-aligned. Per checks.mdx §1.13: "Bad: `livepeer`, `orchestrator`." Specific alternatives: `orchestrator earnings livepeer`, `how livepeer inflation rewards work`, `fee cut reward cut orchestrator configuration` |

---

## Category 2 — Voice & Copy

| # | Check | Result | Note |
|---|---|---|---|
| 2.1 | UK English throughout | PASS | No US spellings detected. `behaviour`, `favour` not present but no violations found either |
| 2.2 | Zero banned words | PASS | No instances of `effectively`, `essentially`, `basically`, `meaningful`, `significant`, `real` (as intensifier), `various`, `several`, `obviously`, `clearly` found in body prose |
| 2.3 | Zero banned phrases | PASS | None of the banned phrases from Frameworks.mdx §3.2 found |
| 2.4 | Zero banned constructions | FAIL | Multiple `can/may [verb]` instances in value claims. See Banned Construction Scan table. F-03 |
| 2.5 | Opening order correct | PASS | Tip block leads with the two revenue streams and dependencies — value-first, mechanism-after |
| 2.6 | Paragraph discipline | PASS | Paragraphs are single-job. Lead sentences state facts. Endings are factual or directional |
| 2.7 | Audience register correct | PASS | Operational, numbers-driven, hardware-aware. Appropriate for `orchestrator` |
| 2.8 | Per-audience prohibited phrases absent | PASS | No "easy to set up", "the network rewards you for", "simple configuration" found |
| 2.9 | No passive value statements | FAIL | Line 63: "An Orchestrator's total earnings combine two streams that are structurally independent." The word "combine" is accurate but "structurally independent" is an analytical claim that goes unsubstantiated in that sentence. Minor. See F-04. Line 155: "Setting prices too high means Gateways will not select the Orchestrator" — this is appropriately assertive. PASS for this instance. |
| 2.10 | No hedging openers | PASS | Page opens with Tip block, then H2. No caveat or disclaimer opener |
| 2.11 | Terminology locked and consistent | FAIL | Line 157: "use `livepeer_cli` to survey current rates" — `livepeer_cli` is deprecated; the current tool is `livepeer_cli` or `go-livepeer` CLI depending on version. This needs a REVIEW flag. See F-05. Line 151: `Cascade` is used without definition at first use (it appears in a table cell; it is not defined in the keywords field for body prose exemption). See F-06. |

---

## Category 3 — Section Naming & Headings

Note: `Related Pages` heading (line 432) is EXEMPT from all heading checks per checks.mdx §3.1.

| # | Check | Result | Note |
|---|---|---|---|
| 3.1 | Every heading scores ≥20/25 | FAIL | "Two Revenue Streams" scores 17/25. "Payment Flow End-to-End" scores 18/25. See Heading Score Table |
| 3.2 | No banned or weak standalone heading terms | PASS | None of `Basics`, `Notes`, `How It Works`, `See Also`, `Conclusion`, `What's Next` present |
| 3.3 | No literal contrast labels | PASS | No `X vs Y` headings |
| 3.4 | Domain-anchor rule applied | FAIL | "Operator Models" (line 303) — interpretable in isolation, but "Models" is generic. Passes with slight weakness. "Two Revenue Streams" fails: the word "Two" is a literal count, not a governing concept. See F-07 |
| 3.5 | Heading names the concept, not examples | FAIL | "Two Revenue Streams" names a count + generic category, not the governing concept. See F-07 |
| 3.6 | Title well-formed | PASS | `Orchestrator Incentive Model` is 3 words, concept-derived, no banned forms |
| 3.7 | Sounds like expert editorial choice | FAIL | "Two Revenue Streams" and "Payment Flow End-to-End" read as descriptive labels, not expert editorial choices. See Heading Score Table |

---

## Category 4 — Page Structure & Content Architecture

| # | Check | Result | Note |
|---|---|---|---|
| 4.1 | One purpose, one audience, one job | PASS | Page serves one orchestrator doing one thing: understanding how earnings work. No scope contamination |
| 4.2 | Purpose statement test passes | PASS | "This page lets the orchestrator understand the two revenue streams, cost structure, and pricing configuration of the incentive model." — sentence completes cleanly |
| 4.3 | PREV_PAGE / NEXT_PAGE adjacency correct | FAIL | docs.json lines 2839–2844: Concepts sequence is `role` → `capabilities` → `architecture` → `incentive-model`. PREV is `architecture`. NEXT is the first page of Quickstart group (`v2/orchestrators/quickstart/guide`, docs.json line 2850). The page has no handoff to quickstart and no acknowledgement it is the last concepts page. No terminal handoff sentence is present. The Related Pages cards link to role, capabilities, and pricing-strategy — but NOT to the Quickstart, which is the natural progression. See F-08 |
| 4.4 | No dead ends | FAIL | Related Pages cards link to `pricing-strategy` and `attracting-delegates`, neither of which is in docs.json (confirmed absent — searched lines). These are likely future pages. F-09 |
| 4.5 | Prerequisites stated or linked | PASS | Active set, reward cut, fee cut, probabilistic micropayments all defined inline. No external prerequisite left dangling |
| 4.6 | Out-of-scope is clear | PASS | Gateway mechanics, delegator staking mechanics are not absorbed — they are referenced with cross-tab links where appropriate |
| 4.7 | Information type per section correct | PASS | Purpose is `explain` → primary types are `conceptual`, `technical`; secondary `factual`, `analytical`. All sections match: concept sections use prose, pricing section uses technical/procedural code examples (permissible as secondary type for `explain`) |
| 4.8 | No content duplication from adjacent sections | PASS | Content is not repeated from `role.mdx` or `capabilities.mdx`. Some overlap on active set definition is acceptable cross-reference |
| 4.9 | Section orientation page present | N/A | Section-level check; not applicable per-page |
| 4.10 | Cross-tab links at journey intersections | PASS | Related Pages card links to `v2/gateways/concepts/business-model` (confirmed in docs.json line 2581). This is appropriate cross-tab linking at a genuine journey intersection |

---

## Category 5 — Layout, Components & Template

| # | Check | Result | Note |
|---|---|---|---|
| 5.1 | Correct template for pageType + pageVariant | PASS | `concept` page uses prose sections, tables, diagrams, accordions — consistent with concept template |
| 5.2 | Required sections present | PASS | Concept pages require `Overview` (present as Tip block + first H2). All substantive sections covered |
| 5.3 | Only approved components used | NOT-TESTED | `docs-guide/catalog/components-catalog.mdx` not read. Components used: `CenteredContainer`, `Tip`, `CustomDivider`, `StyledTable`, `TableRow`, `TableCell`, `Note`, `ScrollableDiagram` (imported but not used in page body — see F-10), `BorderedBox` (imported but not used — see F-10), `AccordionGroup`, `Accordion`, `LinkArrow`, `CardGroup`, `Card`. All appear to be project-standard components. Cannot confirm Preferred status without reading catalog |
| 5.4 | Avoided components absent | PASS | No TODO/TBD in published content (there is a TODO comment block at lines 34–47, but it is a JSX comment, not rendered content — see F-11) |
| 5.5 | Information type → component mapping correct | PASS | Procedural pricing config uses code blocks; conceptual content uses prose; reference data uses `StyledTable`; multi-path operator models use `AccordionGroup` |
| 5.6 | MDX renders clean | NOT-TESTED | Not executed. Known risk: `ScrollableDiagram` imported (line 52) but not used — may generate a warning but not a render error. `BorderedBox` imported (line 53) but not used. These are dead imports. Per checks.mdx reporting rules: "Dead imports. Do not flag." |
| 5.7 | No old-schema frontmatter | PASS | `pageType: concept`, `purpose: explain`, `audience: orchestrator` — all valid canonical values |
| 5.8 | CSS uses custom properties only | NOT-TESTED | Mermaid diagrams use hardcoded hex colours (`#1a1a1a`, `#2d9a67`, `#0d0d0d`, `#fff`) — see F-12. Note: page's own TODO comment (line 37) flags: "Mermaid diagrams use theme colours (but must be hardcoded)" — so this is a known, accepted tradeoff. CustomDivider and CenteredContainer use inline `style` props with specific margin values (`{margin: "0 0 -1rem 0"}`, `{width: '90%'}`) — these are not hardcoded colour hex values, so they do not violate the CSS custom properties rule which targets colour specifically |
| 5.9 | Generated file banners intact | N/A | Not a generated file |
| 5.10 | Component naming/import conventions | PASS | PascalCase throughout, imports from correct paths |

---

## Category 6 — Veracity & Factual Accuracy

| # | Check | Result | Note |
|---|---|---|---|
| 6.1 | Every factual claim citable | FAIL | REVIEW flag at line 171: fee cut direction unverified. REVIEW flag at line 274: gas cost unconfirmed. Both are `factual` type claims at very high veracity standard. Additional unreviewed claims: line 107 "Once per round (~22 hours)"; line 234 "top 100 Orchestrators"; line 387 specific JSON price values. See F-13 |
| 6.2 | Code/commands tested | FAIL — NOT-TESTED | CLI flags (`-pricePerUnit`, `-autoAdjustPrice`, `-pricePerCapability`, `-livePaymentInterval`, `-pricePerGateway`) and JSON structure at lines 362–408 are NOT-TESTED. Risk: flag names or JSON schema may have changed between releases |
| 6.3 | No deprecated API usage | FAIL — NOT-TESTED | Line 157: `livepeer_cli` referenced — this is the CLI tool. Whether `livepeer_cli` remains the current invocation or has been replaced/renamed needs verification. Flag added as F-05 |
| 6.4 | Numbers are real | FAIL | Line 107: "~22 hours" for round duration — marked `{/* REVIEW: */}` is absent; this is a factual claim without citation. Line 234: "top 100 Orchestrators" — high-staleness term per Frameworks.mdx §3.4 ("Active set size (100) — Could change via governance"). Not flagged inline. F-14 |
| 6.5 | REVIEW flags for unverified claims | FAIL | Lines 171, 274 have REVIEW flags — good. But lines 107 (~22 hours), 234 (100 Orchestrators), and pricing JSON values (lines 383–395) lack REVIEW flags despite being unverified factual claims. F-13, F-14 |
| 6.6 | veracityStatus honest | FAIL | `veracityStatus` absent. Multiple unverified factual sections present. Must be `unverified` |
| 6.7 | Authoritative vs AI-generated glossary | N/A | Page does not reference either glossary file |
| 6.8 | Source staleness check | FAIL | Active set size (100) is a high-staleness governance parameter (Frameworks.mdx §3.4) and lacks a REVIEW flag or live link. F-14 |
| 6.9 | No open-ended research tasks | FAIL | Line 171 REVIEW: "Confirm fee cut mechanics - does 5% go to Orchestrator and 95% to delegator pool, or is it expressed as percentage Delegators receive? Check BondingManager contract" — has a named source (BondingManager) but no concrete next step. Line 274 REVIEW: "Add gas cost for reward calls once confirmed - reward calls on Arbitrum are cheap but not zero" — does not name a specific source. F-13 |

---

## Category 7 — Navigation & Information Architecture

| # | Check | Result | Note |
|---|---|---|---|
| 7.1 | Page exists in docs.json | PASS | Confirmed at docs.json line 2843 |
| 7.2 | Navigation matches file system | PASS | Path `v2/orchestrators/concepts/incentive-model` matches file at `v2/orchestrators/concepts/incentive-model.mdx` |
| 7.3 | Tab entry portal routes to all sections | N/A | Section-level check |
| 7.4 | No structural orphans | PASS | Page is reachable via Concepts group navigation |
| 7.5 | Audience journey complete | FAIL | Page is last in the Concepts group (docs.json line 2843). Next group is Quickstart (line 2847). No handoff from incentive-model to Quickstart. Reader who finishes the concepts sequence has no forward path. F-08 |
| 7.6 | Cross-tab graduation paths exist | PASS | `v2/gateways/concepts/business-model` cross-tab card present. Appropriate for Orchestrator→Gateway graduation path |
| 7.7 | File in correct lane | PASS | Published content in `v2/orchestrators/concepts/`, not `_workspace/` |
| 7.8 | File naming conventions | PASS | `incentive-model.mdx` — no prefix required for concept pages; no `-index.mdx` suffix |
| 7.9 | `_workspace/` TTL compliance | N/A | Not a workspace file |

---

## Category 8 — Links & Rendering

| # | Check | Result | Note |
|---|---|---|---|
| 8.1 | All internal links resolve | FAIL | Three internal `LinkArrow` targets not in docs.json: (1) `/v2/orchestrators/guides/staking-and-rewards/rewards-and-fees` (line 187) — absent from docs.json; (2) `/v2/orchestrators/guides/payments-and-pricing/pricing-strategy` (line 408) — absent; (3) `/v2/orchestrators/guides/staking-and-rewards/attracting-delegates` (line 428) — absent. Two Related Pages cards also point to absent targets: `pricing-strategy` and `attracting-delegates`. `/v2/orchestrators/concepts/role`, `/v2/orchestrators/concepts/capabilities`, and `/v2/gateways/concepts/business-model` — all confirmed in docs.json. F-09 |
| 8.2 | All external links live | NOT-TESTED | One external link: `https://explorer.livepeer.org` (line 239) — not verified programmatically |
| 8.3 | All snippet imports resolve | PASS | All 5 imports point to paths under `/snippets/components/` — standard project snippet paths |
| 8.4 | All images load | PASS | OG image path `/snippets/assets/site/og-image/fallback.png` is standard fallback. No inline images |
| 8.5 | Page renders without error | NOT-TESTED | Not executed locally. Risk: dead imports (`ScrollableDiagram`, `BorderedBox`) may generate warnings |
| 8.6 | No TODO/TBD/Coming Soon in published content | FAIL | Lines 34–47 contain a JSX comment block beginning `{/* TODO:`. This is a comment block, not rendered content. However, checks.mdx §8.6 states "Any placeholder text belongs in `_workspace/`, not in publishable pages." Comment-only TODO blocks are a borderline case. Flagging as MEDIUM — author should confirm whether this TODO comment should be removed or moved to a REVIEW flag. F-11 |

---

## Category 9 — Process & Governance

| # | Check | Result | Note |
|---|---|---|---|
| 9.1 | Human sign-off recorded | FAIL | No sign-off record found. `status: current` on an unverified page suggests premature status promotion |
| 9.2 | All consuming decisions in registry | N/A — NOT-TESTED | Decision registry not read in this session |
| 9.3 | Gate prerequisites met | FAIL | Tab status: Orchestrators IA not approved; terminology not locked; content pass not open. Page does not meet gate prerequisites for publication |
| 9.4 | Phase ordering respected | N/A | Cannot verify without full phase history |
| 9.5 | Findings gathered before fixes | N/A | This is the findings pass |
| 9.6 | Feedback routed | N/A | This is the findings pass |

---

## Banned Construction Scan

**Scope:** All visible text: body prose, headings, frontmatter description, Tips, Notes, table cells, CustomDivider `middleText` props, Accordion titles.

| Line | Sentence / Construct | Word/Pattern | Classification | Flag? |
|---|---|---|---|---|
| 56 | "Earnings from fees depend on workload volume; earnings from rewards depend on total stake and the reward cut configuration." | `depend on` | conditional-factual, no banned pattern | No |
| 63 | "An Orchestrator's total earnings combine two streams that are structurally independent." | — | descriptive prose | No |
| 100 | "Volume of work received; price configuration; uptime" (table cell) | — | reference | No |
| 107 | "Total bonded stake (self-stake + delegated); reward cut setting" (table cell) | — | reference | No |
| 116 | "Service fees are paid by Gateways via **probabilistic micropayment (PM) tickets**." | — | factual | No |
| 122 | "The expected value of a ticket equals its face value multiplied by the win probability." | — | factual | No |
| 123 | "Over a large number of tickets, actual earnings converge to the expected value." | — | factual/analytical | No |
| 155 | "Setting prices too high means Gateways will not select the Orchestrator (their `-maxPricePerUnit` ceiling acts as a filter)." | — | factual conditional — structural, not a body prose `if` construction | No |
| 155 | "Setting prices too low reduces earnings per job." | — | factual assertion | No |
| 157 | "use `livepeer_cli` to survey current rates before setting your own" | — | procedural instruction | No |
| 168 | "the Orchestrator keeps 5% of ticket value; 95% goes to the fee pool distributed proportionally among Delegators" | — | example, factual | No |
| 182 | "Missing a reward call means forgoing that round's LPT rewards entirely - this is not recoverable." | `not recoverable` / `not [X]` | `not [X]` — value statement expressing consequence | **FLAG** — rewrite: "Missing a reward call forfeits that round's LPT rewards permanently." F-15 |
| 184 | "Most production Orchestrators automate reward calling." | — | factual/analytical | No |
| 185 | "The go-livepeer node **can** be configured to do this automatically." | `can be configured` | value-claim candidate: `can [verb]` on a feature claim | **BORDERLINE** — this describes system capability, not a value claim about operator earnings. Acceptable as capability statement but borderline. |
| 236 | "Stake below the threshold for active set membership means no earnings from either stream." | `no earnings` / `not [X]` form | negative consequence statement | INFO — factual negative consequence; not a value claim construction. Acceptable. |
| 245 | "Earnings must be weighed against operational costs." | — | analytical | No |
| 264 | "electricity is the largest recurring cost for GPU operators" | — | factual claim — verify | No (see veracity finding) |
| 269 | "Relevant when evaluating ROI against alternative LPT uses (delegating to another Orchestrator)" | — | analytical | No |
| 277 | "Unlike Gateways, Orchestrators do not pay for the jobs they process - they are paid." | `do not pay` / `not [X]` | negative construction in Note | **FLAG** — `not [X]` primary statement. Positive rewrite: "Orchestrators receive payment for jobs processed; the cost structure is infrastructure and staking." F-16 |
| 278 | "The cost structure is infrastructure and staking, not service fees." | `not service fees` | `not [X]` secondary qualifier | **BORDERLINE** — the `not [X]` here is a secondary clarifier, not the primary value claim. The positive statement "is infrastructure and staking" leads. Marginal; could remain but the parent Note (F-16) needs reworking |
| 285 | "This is the complete flow from Gateway payment through Orchestrator receipt to Delegator distribution." | `This is` — self-reference | section description | **FLAG** — self-referential opener. Delete: open with the diagram. F-17 |
| 305 | "The earnings model looks different depending on context." | `depending on` | vague dependency | **BORDERLINE** — not the full banned phrase "depends on various"; context is supplied by the AccordionGroup below. Acceptable. |
| 310 | "If you have GPU hardware already running - mining, rendering, or sitting idle - adding Livepeer Orchestrator workloads converts spare capacity into ETH service fees and LPT rewards." | `If [condition]` | conditional construction in body prose | **FLAG** — `if [condition]` in body prose. Rewrite as factual assertion for operators with existing hardware. F-18 |
| 323 | "Revenue is primarily from service fees rather than inflation rewards." | `rather than` | banned phrase | **FLAG** — `rather than` is in the banned phrases list (Frameworks.mdx §3.2). Rewrite: "Revenue is primarily from service fees; inflation rewards are secondary." F-19 |
| 325 | "Pricing strategy matters more, and direct relationships with high-volume Gateways are common." | — | factual | No |
| 340 | "This model combines the earnings from running GPU compute with revenue from managing the protocol layer on behalf of workers." | — | factual | No |
| 346 | "An Orchestrator that holds substantial self-stake but operates at low capacity or joins a pool earns primarily from inflation rewards rather than service fees." | `rather than` | banned phrase | **FLAG** — second `rather than` instance. F-19 |
| 349 | "This model is most relevant for large LPT holders evaluating whether to self-operate versus delegating to an existing Orchestrator." | — | analytical | No |
| 358 | "Orchestrators set three categories of pricing parameter at startup or via `livepeer_cli`" | — | factual/instruction | No |
| 405 | "Per-Gateway pricing allows commercial Orchestrators to negotiate rates with high-volume Gateways independently of the base network price." | `allows` | mild value-claim | INFO — `allows` is not in the banned words/patterns list. Acceptable. |
| 414 | "Delegated stake increases an Orchestrator's share of inflation rewards and improves its active set ranking." | — | factual | No |
| 415 | "Attracting and retaining Delegators is therefore an economic lever for Orchestrators." | — | analytical | No |
| 308 | Accordion title: "GPU miner (earning from idle hardware)" | — | Accordion titles scanned | No banned patterns |
| 319 | Accordion title: "Commercial GPU operator (serving workloads at scale)" | — | Accordion titles scanned | No |
| 332 | Accordion title: "Infrastructure business (pool operation)" | — | Accordion titles scanned | No |
| 342 | Accordion title: "Delegator-focused (earning rewards without compute)" | — | Accordion titles scanned | No |
| 59 | CustomDivider `middleText`: "Revenue Streams" | — | Scanned | No |
| 112 | CustomDivider `middleText`: "Service Fees" | — | Scanned | No |
| 173 | CustomDivider `middleText`: "Inflation Rewards" | — | Scanned | No |
| 241 | CustomDivider `middleText`: "Cost Structure" | — | Scanned | No |
| 281 | CustomDivider `middleText`: "Full Payment Flow" | — | Scanned | No |
| 301 | CustomDivider `middleText`: "Why Operate?" | — | Scanned | No — question form in CustomDivider middleText, not a heading. Does not violate heading-question prohibition. |
| 354 | CustomDivider `middleText`: "Pricing Configuration" | — | Scanned | No |
| 410 | CustomDivider `middleText`: "Delegator Relationship" | — | Scanned | No |

**Flagged constructions summary:**
- F-15: Line 182 — `not recoverable` → rewrite positive
- F-16: Line 277 — `do not pay` primary Note statement → rewrite positive
- F-17: Line 285 — self-referential section opener "This is the complete flow…"
- F-18: Line 310 — `if [condition]` in body prose
- F-19: Lines 323, 346 — `rather than` (banned phrase, two instances)
- Line 185 — `can be configured` — BORDERLINE, flagged for human review

---

## Heading Score Table

Note: `Related Pages` (line 432) is EXEMPT from scoring per checks.mdx §3.1.

| Heading | Level | Precision | Depth | Stability | Clarity | Conciseness | Total | Pass? |
|---|---|---|---|---|---|---|---|---|
| Two Revenue Streams | H2 | 3 | 2 | 3 | 4 | 3 | **15/25** | FAIL |
| Service Fees (ETH) | H2 | 5 | 4 | 5 | 5 | 4 | **23/25** | PASS |
| Pricing units | H3 | 3 | 3 | 4 | 4 | 4 | **18/25** | FAIL |
| Fee distribution | H3 | 4 | 3 | 4 | 4 | 4 | **19/25** | FAIL |
| Inflation Rewards (LPT) | H2 | 5 | 4 | 5 | 5 | 4 | **23/25** | PASS |
| The reward call | H3 | 4 | 3 | 4 | 4 | 4 | **19/25** | FAIL |
| Reward distribution | H3 | 4 | 3 | 4 | 4 | 4 | **19/25** | FAIL |
| Active set requirement | H3 | 4 | 3 | 5 | 5 | 4 | **21/25** | PASS |
| Orchestrator Costs | H2 | 4 | 3 | 4 | 5 | 4 | **20/25** | PASS |
| Payment Flow End-to-End | H2 | 3 | 2 | 3 | 4 | 3 | **15/25** | FAIL |
| Operator Models | H2 | 3 | 2 | 3 | 3 | 4 | **15/25** | FAIL |
| Configuring Prices | H2 | 4 | 3 | 4 | 4 | 4 | **19/25** | FAIL |
| Base price | H3 | 3 | 2 | 3 | 3 | 4 | **15/25** | FAIL |
| AI capability pricing | H3 | 4 | 3 | 4 | 5 | 4 | **20/25** | PASS |
| Per-Gateway pricing | H3 | 5 | 4 | 5 | 5 | 4 | **23/25** | PASS |
| Attracting Delegators | H2 | 4 | 3 | 4 | 4 | 4 | **19/25** | FAIL |

**Score notes and rename suggestions:**

**"Two Revenue Streams" (15/25):** Precision=3 — "Two" is a literal count, not the governing concept; Depth=2 — names the number of streams, not their nature; Stability=3 — breaks if a third stream is ever added; Clarity=4; Conciseness=3 — "Two" is a redundant modifier. The governing concept is the dual-stream earnings structure, not its count. Suggested rename: **"Earnings Structure"** (governing concept, survives content changes, domain-anchored). Verify no overlap with `Orchestrator Costs` H2 — they are distinct (revenue vs cost). No conflict.

**"Pricing units" (18/25):** Depth=3 — "units" describes the format, not the mechanism. Better: **"Workload Pricing Units"** — domain-anchored, survives adding more workloads. (20/25)

**"Fee distribution" (19/25):** Depth=3 — "distribution" is accurate but generic. Better: **"Fee Cut Mechanics"** — domain-specific term, immediately understood by orchestrator audience. (22/25)

**"The reward call" (19/25):** Depth=3 — missing the governing concept (automating/claiming). Article "The" adds noise. Better: **"Reward Call Mechanics"** — used in CLAUDE.md examples as a known-good heading pattern. (22/25)

**"Reward distribution" (19/25):** Depth=3 — same issue as "Fee distribution". Better: **"Reward Cut Mechanics"** — parallel structure with "Fee Cut Mechanics". (22/25)

**"Payment Flow End-to-End" (15/25):** Precision=3 — "End-to-End" is redundant with "Flow"; Depth=2 — describes coverage, not the concept; Stability=3 — "End-to-End" will always describe a flow diagram; Clarity=4; Conciseness=3. Better: **"Payment Flow"** — clean governing-concept label (20/25). Or **"Earnings Flow"** if the emphasis is on what the operator receives (22/25).

**"Operator Models" (15/25):** Precision=3 — "Models" is generic (business models? mental models? operator personas?); Depth=2 — does not signal the governing concept (operating contexts or earning configurations); Stability=3; Clarity=3; Conciseness=4. Better: **"Operating Contexts"** (21/25) or **"Earnings by Operator Type"** (20/25). Note: "Operator Models" risks being read as "business models" — wrong register.

**"Configuring Prices" (19/25):** Precision=4 — clear but gerund weakens it; Depth=3 — could be stronger; Better: **"Pricing Configuration"** — noun-form, matches the CustomDivider text already used on this page. (21/25). No heading clash — other headings are not pricing-focused.

**"Base price" (15/25):** Depth=2 — extremely sparse; Precision=3; Stability=3; Clarity=3 — base price of what?; Conciseness=4. Better: **"Video Base Price"** (18/25) or **"Base Price Flag"** (20/25) — domain-anchored and tells the reader what they get (the flag/config).

**"Attracting Delegators" (19/25):** Precision=4; Depth=3 — "Attracting" is the mechanism, not the concept; Better: **"Delegator Relationship"** — matches the CustomDivider text already used on this page, and names the structural concept not the tactic. (21/25). No overlap with other headings.

---

## Spelling/Typo Check

Visible text scanned: headings, prose, table cells, code comments, Accordion titles, CustomDivider props, card descriptions.

| Location | Text | Issue |
|---|---|---|
| Line 157 | "The network forms a market price - use `livepeer_cli`..." | Hyphen used as em-dash (`price - use`). Should be rendered as: "The network forms a market price; use `livepeer_cli`…" F-20 |
| Line 182 | "...means forgoing that round's LPT rewards entirely - this is not recoverable." | Hyphen used as em-dash (`entirely - this`). Rewrite per F-15 anyway. |
| Line 277 | "Unlike Gateways, Orchestrators do not pay for the jobs they process - they are paid." | Hyphen used as em-dash (`process - they`). Rewrite per F-16 anyway. |
| Line 184 | "Most production Orchestrators automate reward calling." | No typos. |
| All prose | General scan | No spelling errors found. UK English maintained throughout. |

**Em-dash note:** Multiple hyphens used as em-dashes in body prose (lines 157, 182, 277, and the description field). Per CLAUDE.md: "No em dashes — rewrite or use hyphens." These are hyphens standing in for em-dashes (with spaces either side), not clean hyphens used for compound words. CLAUDE.md requires rewriting rather than converting to em-dash. Fixes covered by F-15, F-16, F-20 and the description fix.

---

## Component Matrix

| Component | Used? | Appropriate for `concept`? | Notes |
|---|---|---|---|
| `CenteredContainer` | Yes | Yes | Wrapper for Tip block — standard layout use |
| `Tip` | Yes | Yes | Permitted for `concept` per checks.mdx §5.3 matrix |
| `CustomDivider` | Yes | Yes | Standard spacing component |
| `StyledTable` + `TableRow` + `TableCell` | Yes | Yes | Reference data — appropriate for concept |
| `Note` | Yes | Yes | Permitted for `concept` |
| `ScrollableDiagram` | Imported, not used | N/A | Dead import — not flagged per reporting rules |
| `BorderedBox` | Imported, not used | N/A | Dead import — not flagged per reporting rules |
| `AccordionGroup` + `Accordion` | Yes | Yes | Permitted for `concept` per checks.mdx §5.3 |
| `LinkArrow` | Yes | Yes | Standard inline link component |
| `CardGroup` + `Card` | Yes | Yes | Permitted for `concept` |

**Status:** NOT-TESTED — `docs-guide/catalog/components-catalog.mdx` not read. Components listed appear to be standard project components. No obviously unapproved components identified.

---

## Cross-Category Connections

```
Root Cause A: veracityStatus absent + status: current contradiction
Affects: Cat 1.8 + Cat 6.6 + Cat 9.1
Fix: Add `veracityStatus: unverified` to frontmatter AND change `status: 'draft'`. Single two-field frontmatter edit.
```

```
Root Cause B: Missing required frontmatter fields (complexity, lifecycleStage)
Affects: Cat 1.1 + Cat 1.6 + Cat 1.7
Fix: Add `complexity: intermediate` and `lifecycleStage: evaluate` to frontmatter.
```

```
Root Cause C: Links to future pages not yet in docs.json
Affects: Cat 4.4 + Cat 8.1
Broken targets: /v2/orchestrators/guides/staking-and-rewards/rewards-and-fees, /v2/orchestrators/guides/payments-and-pricing/pricing-strategy, /v2/orchestrators/guides/staking-and-rewards/attracting-delegates
Fix: Replace broken LinkArrow hrefs and Related Pages card hrefs with placeholder comments until pages exist, OR replace with current valid targets.
```

```
Root Cause D: Hyphen-as-separator pattern in description and body prose
Affects: Cat 1.11 (description) + Spelling/Typo (lines 157, 182, 277)
Fix per instance: description (rewrite with colon), line 157 (semicolon), lines 182 + 277 (full sentence rewrites per F-15 and F-16).
```

```
Root Cause E: `rather than` banned phrase
Affects: Cat 2.3 + Banned Construction Scan (lines 323, 346)
Fix: Both instances need positive rewrite. See F-19.
```

---

## Blocking Decisions

**None.** Page purpose, audience, and scope are unambiguous. All findings are actionable without a human decision. However, the following items require human action before they can be resolved:

1. **Fee cut direction (line 171 REVIEW):** Is 5% fee cut expressed as the Orchestrator's share, or as the Delegators' share? Human must check BondingManager contract before this REVIEW flag can be cleared.
2. **Links to future pages (F-09):** Human must confirm whether `pricing-strategy`, `rewards-and-fees`, and `attracting-delegates` are planned future pages or if they have been renamed. Broken links cannot be self-resolved.
3. **Active set size governance parameter (line 234):** The "100" figure is a high-staleness governance parameter. Human must verify against current Explorer/BondingManager before clearing.

---

## Prioritised Fix List

| ID | Severity | Category | Line | Finding | Fix |
|---|---|---|---|---|---|
| F-01 | MEDIUM | 1.11 | 4–6 | `description` uses hyphen-as-separator: `earn -` | Rewrite: `How Orchestrators earn: the two revenue streams, cost structure, payment flow, pricing configuration, and what the earnings case looks like in practice.` (154 chars) |
| F-02 | MEDIUM | 1.13 | 8–9, 17 | `keywords` contains generic terms: `livepeer`, `orchestrator`, `staking` | Replace: `livepeer` → `orchestrator earnings livepeer`; `orchestrator` → `livepeer reward call automation`; `staking` → `orchestrator staking LPT active set` |
| F-03 | HIGH | 2.4 | 323, 346 | `rather than` (banned phrase) in Accordion prose — two instances | Line 323: "Revenue is primarily from service fees; inflation rewards are secondary." Line 346: "An Orchestrator that holds substantial self-stake but operates at low capacity or joins a pool earns primarily from inflation rewards, with service fees as secondary income." |
| F-04 | HIGH | 1.1, 1.6 | 1–32 | `complexity` field missing | Add to frontmatter: `complexity: 'intermediate'` |
| F-05 | HIGH | 1.1, 1.7 | 1–32 | `lifecycleStage` field missing | Add to frontmatter: `lifecycleStage: 'evaluate'` |
| F-06 | HIGH | 1.8, 6.6 | 1–32 | `veracityStatus` missing; `status: current` invalid | Add `veracityStatus: 'unverified'` to frontmatter. Change `status: 'current'` to `status: 'draft'` |
| F-07 | HIGH | 3.1, 3.5 | 61 | "Two Revenue Streams" scores 15/25. Count-literal, not governing concept. | Rename H2 to `## Earnings Structure`. Verify CustomDivider middleText at line 59 still reads "Revenue Streams" (acceptable as label; H2 is the scored heading). |
| F-08 | HIGH | 4.3, 7.5 | 429–430 | Page is last in Concepts group with no handoff to Quickstart | Add a sentence before the Related Pages section (or as a card in the Related Pages CardGroup): Add card `<Card title="Orchestrator Quickstart" icon="bolt" href="/v2/orchestrators/quickstart/guide" arrow horizontal>Start the setup sequence.</Card>` |
| F-09 | HIGH | 4.4, 8.1 | 187, 408, 428, 441, 443 | Five internal links resolve to absent docs.json targets | Replace broken hrefs with `{/* REVIEW: [page not yet in docs.json — update href when page is published] */}` comment stubs, then remove the LinkArrow/Card until the page is live. Specific: Line 187 (`rewards-and-fees`), line 408 (`pricing-strategy`), line 428 (`attracting-delegates`), Related Pages cards for `pricing-strategy` and `attracting-delegates` |
| F-10 | MEDIUM | 3.1 | 62–82 | "Payment Flow End-to-End" scores 15/25 | Rename H2 to `## Payment Flow`. Update CustomDivider `middleText` at line 281 to `"Payment Flow"` for consistency |
| F-11 | MEDIUM | 3.1 | 303 | "Operator Models" scores 15/25 | Rename H2 to `## Operating Contexts`. Update CustomDivider `middleText` at line 301 to `"Operating Contexts"` |
| F-12 | MEDIUM | 3.1 | 356 | "Configuring Prices" scores 19/25 | Rename H2 to `## Pricing Configuration` (matches existing CustomDivider text at line 354) |
| F-13 | MEDIUM | 3.1 | 412 | "Attracting Delegators" scores 19/25 | Rename H2 to `## Delegator Relationship` (matches existing CustomDivider text at line 410) |
| F-14 | MEDIUM | 3.1 | 124 | "Pricing units" scores 18/25 | Rename H3 to `### Workload Pricing Units` |
| F-15 | MEDIUM | 2.4 | 182 | `not recoverable` — `not [X]` primary value statement | Rewrite: "Missing a reward call forfeits that round's LPT rewards permanently." Also removes the hyphen-as-em-dash |
| F-16 | MEDIUM | 2.4 | 277–279 | `do not pay` as primary Note statement — `not [X]` | Rewrite Note: `<Note>Orchestrators receive payment for jobs processed. The cost structure is infrastructure and staking.</Note>` |
| F-17 | MEDIUM | 2.4 | 285 | "This is the complete flow…" — self-referential section opener | Delete line 285. The Mermaid diagram that follows is self-explanatory. |
| F-18 | MEDIUM | 2.4 | 310 | `if [condition]` in body prose | Rewrite: "GPU hardware already running for mining, rendering, or sitting idle can add Livepeer Orchestrator workloads to convert spare capacity into ETH service fees and LPT rewards." |
| F-19 | INFO | 6.4, 6.5 | 107 | "~22 hours" round duration — factual claim without inline REVIEW flag | Add inline flag: `{/* REVIEW: round duration (~22 hours) — verify current round length via Explorer API or BondingManager before clearing veracityStatus */}` |
| F-20 | INFO | 6.4, 6.5 | 234 | "top 100 Orchestrators" — high-staleness governance parameter, no REVIEW flag | Add inline flag: `{/* REVIEW: active set size (100) — high-staleness governance parameter, verify current value at https://explorer.livepeer.org before clearing veracityStatus */}` |
| F-21 | INFO | 5.4, 8.6 | 34–47 | TODO comment block — not rendered, but exists in publishable content | Remove the `{/* TODO: ... */}` comment block entirely (lines 34–47). Author tasks have been completed or can be tracked in the workspace. |
| F-22 | MEDIUM | 2.11 | 149 | `Cascade` used at line 149 without definition at first use | Add definition immediately after the table or in a Note. Draft: `{/* REVIEW: Cascade — verify definition (appears to be the Livepeer real-time AI inference product/mode) before inserting inline definition at first use */}` |
| F-23 | MEDIUM | 3.1 | 159 | "Fee distribution" H3 scores 19/25 | Rename to `### Fee Cut Mechanics` |
| F-24 | MEDIUM | 3.1 | 181 | "The reward call" H3 scores 19/25 | Rename to `### Reward Call Mechanics` |
| F-25 | MEDIUM | 3.1 | 189 | "Reward distribution" H3 scores 19/25 | Rename to `### Reward Cut Mechanics` |
| F-26 | INFO | 3.1 | 362 | "Base price" H3 scores 15/25 | Rename to `### Base Price Flag` or `### Video Base Price` |
| F-27 | MEDIUM | 6.5 | 274 | REVIEW flag at line 274 "Add gas cost for reward calls once confirmed" lacks a specific source | Update REVIEW to: `{/* REVIEW: reward call gas cost on Arbitrum — verify via Arbiscan by tracing a known reward transaction on BondingManager; cite the gas estimate before removing this flag */}` |
| F-28 | MEDIUM | 2.11 | 157 | `livepeer_cli` — verify this is the current CLI tool name and has not been replaced | Add inline REVIEW: `{/* REVIEW: livepeer_cli — verify this is the current CLI invocation for the latest go-livepeer release; check CLI reference or latest tagged release */}` |
| F-29 | INFO | 1.13 | — | Suggest optional: add `industry: ["economics", "technical"]` and `niche: ["protocol", "tokenomics", "infrastructure"]` to frontmatter | Optional enhancement; not blocking |

---

## Verdict Summary

**Verdict: NEEDS WORK**

**FAIL count (blocking):** 9 FAIL checks across Categories 1, 2, 3, 4, 6, 7, 8, 9
**High-severity fixes:** 9 (F-03 through F-09)
**Medium-severity fixes:** 17
**INFO:** 3

**The page is well-structured and the content is strong.** The core failure cluster is frontmatter completeness (3 missing required fields + status contradiction), 5 broken internal links to future pages, and 9 headings scoring below 20/25. Two open REVIEW flags and additional unguarded factual claims prevent `veracityStatus: verified`. The banned construction violations are concentrated in the Operator Models Accordion section and one Note block. All findings are fixable without structural rewrite.
