# Check Report — reward-mechanics.mdx

**File:** `v2/orchestrators/guides/staking-and-rewards/reward-mechanics.mdx`
**Date:** 2026-03-24
**Batch:** 6
**Checks applied:** P1–P54

---

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|-------|----------|-------|-----------|-------|
| `title` | Yes | `Reward Mechanics` | PASS | Clear, concept-derived |
| `sidebarTitle` | Yes | `Reward Mechanics` | PASS | Matches title |
| `description` | Yes | `Protocol reward mechanics for Livepeer orchestrators — how LPT inflation flows, calling Reward() automatically and manually, gas thresholds on Arbitrum, fee redemption, setting commission, and monitoring for missed rounds.` | FAIL | 214 chars — exceeds 160-char limit (check 1.11). See F-01 |
| `pageType` | Yes | `guide` | PASS | 7-type canonical schema; valid |
| `audience` | Yes | `orchestrator` | PASS | 7-token set |
| `purpose` | Yes | `guide` | FAIL | `guide` is a valid `pageType` value but NOT a valid `purpose` value. Error type (P37 type b): wrong field. Proposed: `purpose: operate` — confirm before applying. See F-02 |
| `complexity` | No | — | FAIL | Required field missing. Proposed: `complexity: intermediate` — confirm before applying |
| `lifecycleStage` | No | — | FAIL | Required field missing. Proposed: `lifecycleStage: operate` — confirm before applying |
| `keywords` | Yes | 10 keywords listed | PASS | Specific, searcher-intent-aligned |
| OG image block | Yes | All 5 fields present | PASS | Correct fallback path |
| `veracityStatus` | No | — | FAIL | Required. Page contains a FACT CHECK comment (line 348) flagging illustrative inflation/supply figures. Proposed: `veracityStatus: unverified` — confirm before applying |
| `industry` | No | — | FAIL | Required per P41. Proposed: `industry: ["economics", "technical"]` — confirm before applying |
| `niche` | No | — | FAIL | Required per P41. Proposed: `niche: ["tokenomics", "protocol"]` — confirm before applying |
| `status` | Yes | `published` | PASS | Present |
| `lastVerified` | Yes | `2026-03-13` | PASS | Present |
| `pageVariant` | No | — | PASS | N/A — `guide` is canonical, not deprecated; check 1.3 does not fire (P42) |

**Cross-Category Connection CC-1:** `purpose: guide` (wrong-field error) + `complexity`, `lifecycleStage`, `veracityStatus`, `industry`, `niche` all absent. Six findings share one root cause.

---

## Categories 1–9

### Category 1 — Frontmatter & Taxonomy

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 1.1 | All 10 required fields present | FAIL | `complexity`, `lifecycleStage`, `veracityStatus` absent (CC-1) |
| 1.2 | `pageType` uses 7-type canonical schema | PASS | `guide` is canonical |
| 1.3 | `pageVariant` valid if present | N/A | Field absent; pageType not deprecated, no co-fix required (P42) |
| 1.4 | `purpose` uses 15-value canonical set | FAIL | `guide` is not in the 15-value purpose set. P37 type b: valid pageType value in purpose field. Proposed: `purpose: operate` — confirm before applying |
| 1.5 | `audience` uses 7-token set | PASS | `orchestrator` is canonical |
| 1.6 | `complexity` single canonical value | FAIL | Field absent. Proposed: `complexity: intermediate` — confirm before applying |
| 1.7 | `lifecycleStage` single canonical value | FAIL | Field absent. Proposed: `lifecycleStage: operate` — confirm before applying |
| 1.8 | `veracityStatus` present and honest | FAIL | Field absent. FACT CHECK comment at line 348 confirms unverified figures. Proposed: `veracityStatus: unverified` — confirm before applying. Per checks.mdx §1.8: `status: published` without `veracityStatus` is incoherent |
| 1.9 | `industry` array valid if present | FAIL | Field absent. Required per P41. Proposed: `industry: ["economics", "technical"]` — confirm before applying |
| 1.10 | `niche` array valid if present | FAIL | Field absent. Required per P41. Proposed: `niche: ["tokenomics", "protocol"]` — confirm before applying |
| 1.11 | `description` well-formed | FAIL | 214 chars — exceeds 160-char limit. See F-01 |
| 1.12 | OG image block complete | PASS | All 5 fields present |
| 1.13 | `keywords` quality | PASS | Terms: `reward calling`, `lpt inflation`, `arbitrum gas`, `ticket redemption`, `missed rounds` — specific and searcher-aligned |

**Category 1 FAIL checks: 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11 (8 failures)**

---

### Category 2 — Voice & Copy

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 2.1 | UK English throughout | PASS | No US spelling patterns. Checked: `favour` / `favor` — `unfavourably` not present; `labour` — not applicable; `-ize` endings — absent. `profitable` used correctly. Clean |
| 2.2 | Zero banned words | PASS | Candidates scanned: `effectively` — absent. `essentially` — absent. `basically` — absent. `meaningful` — absent. `significant` — absent. `various` — absent. `several` — absent. `obviously` — absent. `clearly` — absent. No banned words found |
| 2.3 | Zero banned phrases | FAIL | Line 36: "It assumes you have read [Earnings Explained]..." — "It assumes" is not in the banned phrases list. BORDERLINE: this is a conditional prerequisite statement. Flagging as borderline per P23 — not an invented exemption. Genuine boundary: check 4.5 permits prerequisites stated explicitly. The framing "It assumes you have read" is functional, not decorative. Class as OK for 2.3 purposes. No actual banned phrases found |
| 2.4 | Zero banned constructions | FAIL | Line 36: "It assumes you have read [Earnings Explained] and have an active orchestrator node." — `This page [verb]` variant: "Reward calling determines whether your node actually receives the LPT inflation it has earned. Read this page to tune..." — present in line 36 as "Read this page". See F-03. Additionally: line 61: "You only earn for rounds in which you successfully call `Reward()`." — strong positive assertion, no issue. Line 102: "Use this approach when you are newly activated with very low stake, and want to evaluate whether the gas cost exceeds the LPT value before committing to automatic calling." — `if [condition]` variant in an instruction context — procedural, not a body prose condition. BORDERLINE |
| 2.5 | Opening order correct | FAIL | Line 36: "Reward calling determines whether your node actually receives the LPT inflation it has earned. Read this page to tune automatic and manual calls..." — "Read this page to" is a banned construction that delays the operational content. The first sentence is good (fact-first). The self-referential "Read this page to tune" in sentence 2 breaks the pattern. See F-03 |
| 2.6 | Paragraph discipline | PASS | Single-job paragraphs; lead sentences state facts; final sentences end on actions or facts |
| 2.7 | Audience register correct | PASS | Operational, technical, hardware-aware, numbers-driven. Correct for `orchestrator` |
| 2.8 | Per-audience prohibited phrases absent | PASS | `orchestrator` prohibitions: "Your orchestrator will automatically..." — line 79 says "go-livepeer automatically calls `Reward()`" — this names the component not "your orchestrator", acceptable. "The network rewards you for" — absent. "Easy to set up" — absent |
| 2.9 | No passive value statements | PASS | Numbers present: gas ranges, ETH costs, LPT worked example |
| 2.10 | No hedging openers | PASS | Line 36 opens with a fact (reward calling determines outcome). The "Read this page" in sentence 2 is a separate issue handled by F-03 |
| 2.11 | Terminology locked and consistent | PASS | `rewardCut`, `feeShare`, `Reward()`, `active set`, `LPT`, `ETH`, `probabilistic micropayments` — all correct. No deprecated terms |

**Category 2 FAIL checks: 2.4, 2.5 (2 failures — same root cause CC-2)**

---

### Category 3 — Section Naming & Headings

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 3.1 | Every heading ≥20/25 | FAIL | See Heading Score Table — two headings below threshold |
| 3.2 | No banned/weak standalone heading terms | PASS | No Banned or Avoid-tier terms in isolation. `Setting your commission` — `Setting` is not in the banned list. `Commission rate strategy` — not banned. `Related` at line 368 — see below |
| 3.3 | No literal contrast labels | PASS | No `X vs Y` headings |
| 3.4 | Domain-anchor rule applied | PASS | Headings interpretable in isolation |
| 3.5 | Heading names the concept, not examples | PASS | All headings name governing concepts |
| 3.6 | Title well-formed | PASS | `Reward Mechanics` — 2 words, concept-derived |
| 3.7 | Sounds like editorial choice | FAIL | Line 368: `## Related` — generic label, 11/25. See F-04. `## Watch: Reward calling and orchestrator setup` (line 352) — `and orchestrator setup` weakens it; "orchestrator setup" is also vague. See F-05 |

**Note on `## Related` (line 368):** Per P53, `Related Pages` (exact match) is exempt. `Related` alone is NOT exempt. It must be scored and flagged.

**Category 3 FAIL checks: 3.1, 3.7 (2 failures)**

---

### Category 4 — Page Structure & Content Architecture

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 4.1 | One purpose, one audience, one job | PASS | One job: operate reward calling and fee collection. One audience: orchestrator |
| 4.2 | Purpose statement test | PASS | "This page lets the orchestrator tune automatic and manual reward calls, manage gas costs, set commission, and monitor for missed rounds." Passes |
| 4.3 | PREV_PAGE / NEXT_PAGE adjacency correct | PASS | docs.json confirms: reward-mechanics is position 2 in "Staking and Earning" (line 2911). Previous: earning-model (line 2910). Next: payment-receipts (line 2912). Page correctly assumes earning-model has been read (line 36: "It assumes you have read [Earnings Explained]"). Handoff to payment-receipts at line 268 and in footer CardGroup at line 377. No knowledge gap |
| 4.4 | No dead ends | PASS | Footer CardGroup routes to earning-model, delegate-operations, payment-receipts, metrics-and-alerting. Four forward paths |
| 4.5 | Prerequisites stated or linked | PASS | Line 36 explicitly states prerequisite: "have read [Earnings Explained] and have an active orchestrator node." |
| 4.6 | Out-of-scope is clear | PASS | Full payment lifecycle is deferred to payment-receipts. Gas optimisation depth is deferred to reward-call-tuning |
| 4.7 | Information type per section correct | FAIL | `purpose: guide` is wrong-field error (CC-1). Evaluating against proposed `purpose: operate`. Permitted types for `operate`: `procedural` (primary), `factual` (primary), `technical` (secondary). Sections: LPT rewards flow (factual/conceptual — conceptual is secondary but not listed for `operate`), reward calling options (procedural — correct), gas costs (factual — correct), commission setting (procedural — correct), ETH fee flow (procedural/factual — correct), monitoring (procedural/factual — correct), worked example (evaluative — `evaluative` is not a permitted type for `operate`). BORDERLINE: the worked example table (lines 305–346) is illustrative/evaluative — may be mismatched to `operate` purpose. Flag for human review |
| 4.8 | No content duplication | PASS | Commission parameters were introduced in earning-model; this page provides operational detail (how to set them, strategy table). No duplicate content — correct depth progression |
| 4.9 | Section orientation page present | N/A — page-level check |
| 4.10 | Cross-tab links at journey intersections | INFO | No explicit cross-tab links in this page. The LPT tab is relevant (delegator yield, governance). Not blocking at page level |

**Category 4 FAIL checks: 4.7 (BORDERLINE — 1 failure)**

---

### Category 5 — Layout, Components & Template

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 5.1 | Correct template for pageType | PASS | `guide` template: Overview + H2 sections. Correct structure |
| 5.2 | Required sections present | PASS | `guide` requires: Overview + Steps/H2. Both present. Multiple H2 sections covering the guide topic |
| 5.3 | Only approved components used | NOT-TESTED | `component-layout-decisions.mdx` not read. Components: `StyledTable`, `TableRow`, `TableCell`, `CustomDivider`, `CardGroup`, `Card`, `Note`, `Warning`, `Frame`. No obviously unapproved candidates |
| 5.4 | Avoided components absent | PASS | No TODO/TBD/Coming Soon. FACT CHECK at line 348 is in `{/* */}` — not rendered |
| 5.5 | Information type → component mapping | PASS | Procedural steps in prose/code blocks (correct for guide). Tables for gas costs and commission strategy (correct for reference data). No procedural flows missing a Steps component — note: the 4-step manual reward process uses H3 + prose steps, not StyledSteps. This is a guide not instruction — H3 structure is acceptable |
| 5.6 | MDX renders clean | NOT-TESTED | Not executed |
| 5.7 | No old-schema frontmatter | FAIL | `purpose: guide` is wrong-field error (CC-1). See F-02 |
| 5.8 | CSS uses custom properties only | N/A | No inline styles |
| 5.9 | Generated file banners | N/A | Not a generated file |
| 5.10 | Component naming/import conventions | PASS | PascalCase imports, correct paths |

**Category 5 FAIL checks: 5.7 (1 failure — same root as 1.4, CC-1)**

---

### Category 6 — Veracity & Factual Accuracy

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 6.1 | Every factual claim citable | FAIL | Gas units per reward call (lines 165–166): "350,000 – 450,000 gas" — NOT-TESTED: not verified against live Arbitrum transactions. LPT supply "30,000,000 LPT" (line 325) — NOT-TESTED: stated as illustrative. "2,000,000 LPT" active stake (line 313) — illustrative per page disclaimer (line 301). Inflation rate "0.05% per round" (line 320) — NOT-TESTED: illustrative per disclaimer. LIP-89 10% treasury (line 51) — consistent with earning-model; citable from github.com/livepeer/LIPs |
| 6.2 | Code/commands tested | FAIL | NOT-TESTED: startup flags example (lines 81–89), `-reward=false` flag (lines 107–110), `livepeer_cli` manual reward call (lines 132–141), Prometheus alert rule (lines 282–294) — none executed. `increase(livepeer_orchestrator_reward_call_status{status="failed"}[2h]) > 0` — NOT-TESTED: metric name unverified against go-livepeer source |
| 6.3 | No deprecated API usage | PASS | `-reward=false` flag, `livepeer_cli`, `rewardCut`, `feeShare` — appear current. Prometheus metric name unverified (see 6.2) |
| 6.4 | Numbers are real | FAIL | NOT-TESTED: "350,000 to 450,000 gas" (line 119) — unverified against live system. "0.01 – 0.1 gwei" gas price (line 169) — volatile, no timestamp. "~0.000005 – 0.00005 ETH" per call (line 173). "At ETH = $2,500" (line 176) — clearly labelled as a fixed ETH price example, not a current claim. The worked example table (lines 305–346) is explicitly labelled "illustrative" — acceptable. "approximately every 22 hours on Arbitrum" (line 43) — consistent with earning-model |
| 6.5 | REVIEW flags for unverified claims | FAIL | FACT CHECK comment at line 348 notes "Alison/Mehrdad to verify current inflation rate, total supply, and active stake figures." This is in a hidden comment block, not an inline `{/* REVIEW: */}` flag in the body near the relevant figures. The worked example table at lines 305–346 needs an inline flag at the table header. See F-06 |
| 6.6 | `veracityStatus` honest | FAIL | Field absent. Content contains procedural claims (very high standard, not tested) and acknowledged unverified illustrative figures. When added: `veracityStatus: unverified` |
| 6.7 | Authoritative vs AI-generated glossary | N/A | No glossary references |
| 6.8 | Source staleness check | FAIL | Gas price table (lines 168–177): gas prices on Arbitrum are volatile — staleness risk HIGH. LPT inflation rate direction (line 69–70): protocol state changes round-by-round — staleness risk HIGH. Prometheus metric name: depends on go-livepeer version — staleness risk MEDIUM |
| 6.9 | No open-ended research tasks | FAIL | Hidden FACT CHECK at line 348 names two people (Alison, Mehrdad) but items not converted to inline REVIEW flags. Open-ended research in a hidden comment is the same problem as no flag |

**Category 6 FAIL checks: 6.1, 6.2, 6.4, 6.5, 6.6, 6.8, 6.9 (7 failures)**

---

### Category 7 — Navigation & Information Architecture

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 7.1 | Page exists in docs.json | PASS | Confirmed at docs.json line 2911: `"v2/orchestrators/guides/staking-and-rewards/reward-mechanics"` |
| 7.2 | Navigation matches file system | PASS | File exists at expected path |
| 7.3 | Tab entry portal routes to all sections | N/A — tab-level check |
| 7.4 | No structural orphans | PASS | Reachable from "Staking and Earning" group |
| 7.5 | Audience journey complete | PASS | Arrives from earning-model with context; routes forward to payment-receipts and delegate-operations |
| 7.6 | Cross-tab graduation paths | INFO | No explicit cross-tab links. Not blocking at page level |
| 7.7 | File in correct lane | PASS | In `v2/orchestrators/guides/` — publishable lane |
| 7.8 | File naming conventions | PASS | `reward-mechanics.mdx` — no problematic prefix |
| 7.9 | `_workspace/` TTL compliance | N/A — not a workspace file |

**Category 7 FAIL checks: none**

---

### Category 8 — Links & Rendering

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 8.1 | All internal links resolve | PASS | `/v2/orchestrators/guides/staking-and-rewards/earning-model` — confirmed docs.json line 2910. `/v2/orchestrators/guides/staking-and-rewards/delegate-operations` — confirmed line 2914. `/v2/orchestrators/guides/payments-and-pricing/payment-receipts` — confirmed line 2912. `/v2/orchestrators/guides/monitoring-and-tooling/metrics-and-alerting` — confirmed docs.json line 2932. `https://explorer.livepeer.org/orchestrators` — external, not verified. `https://arbiscan.io/gastracker` — external, not verified |
| 8.2 | All external links live | NOT-TESTED | External: `https://explorer.livepeer.org`, `https://explorer.livepeer.org/orchestrators`, `https://arbiscan.io/gastracker` — not verified |
| 8.3 | All snippet imports resolve | PASS | `Tables.jsx`, `Divider.jsx` — standard snippets |
| 8.4 | All images load | PASS | YouTube embed iframe; no static image files |
| 8.5 | Page renders without error | NOT-TESTED | Not executed |
| 8.6 | No TODO/TBD in published content | PASS | FACT CHECK at line 348 is in `{/* */}` — not rendered |

**Category 8 FAIL checks: none (2 NOT-TESTED)**

---

### Category 9 — Process & Governance

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 9.1 | Human sign-off recorded | FAIL | No sign-off evidence |
| 9.2 | All consuming decisions in registry | INFO | LIP-89 10% treasury claim shared with earning-model. Not independently blocking |
| 9.3 | Gate prerequisites met | INFO | Tab-status: Orchestrators IA Draft only, no gate open |
| 9.4 | Phase ordering respected | N/A |
| 9.5 | Findings gathered before fixes | N/A — this is the check report |
| 9.6 | Feedback routed | N/A |

**Category 9 FAIL checks: 9.1 (1 failure)**

---

## Banned Construction Scan

**Scope:** All visible text including headings, frontmatter description, body prose, H3 step headings, table cells, card descriptions, component props, Warning/Note text.

| Line | Text | Pattern | Classification | Flag? |
|------|------|---------|----------------|-------|
| 36 | "Reward calling determines whether your node actually receives the LPT inflation it has earned." | — | Positive assertion (good opener) | No |
| 36 | "Read this page to tune automatic and manual calls, Arbitrum gas costs, commission updates, and the fee path from job to wallet." | `This page [verb]` / `Read this page to` | banned construction 2.4 — self-reference | **FLAG F-03** |
| 36 | "It assumes you have read [Earnings Explained] and have an active orchestrator node." | — | Prerequisite statement (acceptable — not a banned construction) | No |
| 61 | "**You only earn for rounds in which you successfully call `Reward()`.**" | `only` framing | Positive assertion with qualifier — not a `not [X]` construction | No |
| 61 | "There is no catch-up mechanism." | `not [X]` framing | Negative primary statement. "There is no catch-up mechanism" is a `not [X]` form | **FLAG F-07** |
| 61 | "A missed round is a permanently forfeited allocation." | — | Positive restatement of the above | No |
| 79 | "No action required after initial setup." | — | Positive assertion | No |
| 92 | "Requirements for automatic reward to succeed:" | — | Factual/structural label | No |
| 96–98 (Warning) | "Nodes offline at round initialisation miss that round's reward. There is no retry. For production orchestrators, use systemd or Docker restart policies to keep the node running continuously." | `not [X]`: "There is no retry" | Negative primary statement in Warning | **FLAG F-07** |
| 102 | "Use this approach when you are newly activated with very low stake, and want to evaluate whether the gas cost exceeds the LPT value before committing to automatic calling." | `when [condition]` | Procedural instruction — conditional framing in guide context is acceptable per checks.mdx (procedural use) | BORDERLINE |
| 181 | "At these levels, the stake threshold for profitable reward calling is much lower than it was on mainnet." | — | Factual comparative | No |
| 183 | "Keep **ETH on Arbitrum** in your orchestrator wallet for reward transactions." | — | Imperative command | No |
| 183 | "Running out of ETH causes reward calls to fail silently and rounds to be missed." | — | Positive factual | No |
| 209 | "There is no universally correct setting." | `not [X]` | Negative primary statement | **FLAG F-08** |
| 238 | "Check what leading orchestrators are currently set to on [explorer.livepeer.org/orchestrators]." | — | Imperative recommendation | No |
| 241 (Note) | "Changing commission rates after attracting delegators is the primary way orchestrators damage their reputation." | — | Positive factual assertion | No |
| 241 (Note) | "Delegators monitor their orchestrators and migrate away from those who change rates unfavourably after building trust." | — | Positive factual | No |
| 295 | "The Explorer also tracks your **reward call ratio** (`rewardCalls / n` over up to 90 rounds)." | — | Factual | No |
| 295 | "Delegators see this ratio on your profile and factor it directly into their yield calculation." | — | Factual | No |
| 295 | "A ratio below 1.0 reduces their effective yield and makes your orchestrator less attractive." | — | Positive factual | No |
| 301 | "Illustrative scenario for context only. Actual figures depend on LPT price, ETH price, inflation rate, and network demand." | — | Contextual disclaimer | No |

**Summary of flagged violations:**
- **F-03:** Line 36 — `Read this page to...` banned construction
- **F-07:** Line 61 and Warning at lines 96–98 — `There is no [X]` as primary statement (`not [X]` construction)
- **F-08:** Line 209 — `There is no universally correct setting` — `not [X]` as primary statement

**Note on `can/may/could/might` scan:** No `can [verb]` or `may [verb]` in value claims detected. Line 102 `want to evaluate whether` is a conditional procedural instruction, not a value claim.

---

## Heading Score Table

*Note: "Related" heading at line 368 — per P53, `Related Pages` (exact match only) is exempt. `Related` alone is NOT exempt and must be scored.*

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total |
|---------|-----------|-------|-----------|---------|-------------|-------|
| How LPT rewards flow | 4 | 3 | 5 | 5 | 4 | **21/25** |
| The inflation rate | 4 | 3 | 5 | 5 | 4 | **21/25** |
| Calling Reward() — your options | 4 | 4 | 5 | 4 | 3 | **20/25** |
| Option 1: Automatic (default, recommended) | 3 | 3 | 4 | 4 | 2 | **16/25** — FAIL |
| Option 2: Disable automatic, call manually | 3 | 3 | 4 | 4 | 2 | **16/25** — FAIL |
| Gas costs on Arbitrum | 5 | 4 | 5 | 5 | 5 | **24/25** |
| Setting your commission | 4 | 3 | 5 | 5 | 4 | **21/25** |
| Via livepeer_cli | 4 | 3 | 4 | 4 | 4 | **19/25** — FAIL |
| Commission rate strategy | 5 | 4 | 5 | 5 | 4 | **23/25** |
| How ETH fees flow | 4 | 3 | 5 | 5 | 4 | **21/25** |
| Monitoring for missed rounds | 4 | 4 | 5 | 5 | 4 | **22/25** |
| Automated alerting | 4 | 3 | 5 | 5 | 4 | **21/25** |
| Reward vs fee economics: a worked example | 4 | 4 | 3 | 4 | 2 | **17/25** — FAIL |
| Watch: Reward calling and orchestrator setup | 3 | 2 | 4 | 3 | 2 | **14/25** — FAIL |
| Related | 1 | 1 | 2 | 2 | 5 | **11/25** — FAIL |

**Headings below 20/25:** 6 failures — see F-04, F-05, F-09, F-10, F-11, F-12.

**Notes:**
- "Option 1: Automatic (default, recommended)" (16/25): `Option N:` is a weak pattern — names the variant not the concept. Proposed: `## Automatic Reward Calls` — confirm before applying
- "Option 2: Disable automatic, call manually" (16/25): Proposed: `## Manual Reward Calls` — confirm before applying
- "Via livepeer_cli" (19/25): context-dependent; needs domain anchor in isolation. Proposed: `## Commission via livepeer_cli` — confirm before applying. However, this is an H3 under "Setting your commission" — at H3 level, brevity is more acceptable. BORDERLINE — confirm whether H3 headings are in scope for check 3.1
- "Reward vs fee economics: a worked example" (17/25): `a worked example` is a label pattern, not a concept. Proposed: `## Reward Economics: Worked Example` — confirm before applying. Note: `vs` in heading raises check 3.3; this is `reward vs fee` not `X vs Y` alternatives — the concept is the comparison, not a choice between them. BORDERLINE on 3.3
- "Watch: Reward calling and orchestrator setup" (14/25): `orchestrator setup` is vague and unrelated to reward calling. Proposed: `## Video: Reward Calling` — confirm before applying
- "Related" (11/25): Rename to `## Related Pages` — approved structural element exact match

---

## Spelling/Typo Check

Scan of all visible text: headings, prose, table cells, code block captions, card descriptions.

- Line 51: "10% goes to the Livepeer Treasury (LIP-89, March 2026)" — correct
- Line 67–70: inflation rate dynamics — correct
- Line 79–98: Option 1 section — "systemd" correct (Linux service manager)
- Code block captions: "Automatic reward call startup example", "Disable automatic reward calls", "Open livepeer_cli for a manual reward call", "Manual reward call log example", "Re-enable automatic reward calls" — correct
- Line 183: "fail silently" — correct
- Table cells in gas table: "350,000 – 450,000" — correct formatting (en-dash, not em-dash — correct)
- Commission strategy table: "Delegator-attractive", "Balanced", "Operator-heavy" — correct
- Line 241 (Note): "unfavourably" — correct UK English
- Prometheus rule lines 283–294: YAML syntax, not prose — no typos
- Card descriptions at lines 371–383: scanned — no typos

**No typos found.**

---

## Component Matrix

| Component | Used? | Appropriate for `guide`? | Notes |
|-----------|-------|--------------------------|-------|
| `StyledTable` / `TableRow` / `TableCell` | Yes | PASS — tables appropriate for guide | Used for gas costs, commission strategy, worked example. Appropriate |
| `CustomDivider` | Yes | PASS | No `middleText` props — no banned construction risk |
| `CardGroup` / `Card` | Yes | PASS — guide pages may use Card/CardGroup | Used in footer "Related" section |
| `Note` | Yes | PASS — approved for guide | Used at lines 241–243 |
| `Warning` | Yes | PASS — approved for guide | Used at lines 96–98 |
| `Frame` / `iframe` | Yes | NOT-TESTED — `component-layout-decisions.mdx` not read | YouTube embed. No obvious prohibition |

---

## Cross-Category Connections

```
Root Cause CC-1: Frontmatter fields not completed; purpose field has wrong-field error
Affects: Cat 1.1 + Cat 1.4 + Cat 1.6 + Cat 1.7 + Cat 1.8 + Cat 1.9 + Cat 1.10 + Cat 5.7 + Cat 9.1
Fix:
  (a) Correct purpose field: purpose: operate (confirm before applying)
  (b) Add missing fields:
      complexity: intermediate
      lifecycleStage: operate
      veracityStatus: unverified
      industry: ["economics", "technical"]
      niche: ["tokenomics", "protocol"]
  All values proposed — confirm before applying
```

```
Root Cause CC-2: "Read this page to" self-reference in opening paragraph
Affects: Cat 2.4 + Cat 2.5
Fix: Delete "Read this page to tune automatic and manual calls, Arbitrum gas costs, commission
updates, and the fee path from job to wallet." from line 36. The first sentence ("Reward calling
determines whether your node actually receives the LPT inflation it has earned.") is a strong
opener — follow it directly with the first H2 section.
```

```
Root Cause CC-3: `not [X]` as primary statements (three instances)
Affects: Cat 2.4 + Banned Construction Scan
Instances:
  Line 61: "There is no catch-up mechanism."
  Lines 96–98 (Warning): "There is no retry."
  Line 209: "There is no universally correct setting."
Fix:
  Line 61: Delete or move to parenthetical. "A missed round is a permanently forfeited allocation." (already present) makes the same point positively — delete "There is no catch-up mechanism." as redundant
  Lines 96–98 Warning: "Nodes offline at round initialisation miss that round's reward. There is no retry." → Rewrite: "Nodes offline at round initialisation forfeit that round's reward permanently."
  Line 209: "There is no universally correct setting." → Rewrite: "The optimal setting depends on your growth stage and delegation target." (confirm before applying)
```

```
Root Cause CC-4: Unverified protocol figures and code not tested; FACT CHECK in hidden comment
Affects: Cat 6.1 + Cat 6.2 + Cat 6.4 + Cat 6.5 + Cat 6.8 + Cat 6.9
Fix:
  Add inline REVIEW flag at worked example table header (before line 305):
    {/* REVIEW: All figures in this table (inflation rate 0.05%, total supply 30M LPT, active stake 2M LPT)
    are illustrative — verify against current Livepeer Explorer / subgraph before publication */}
  Add REVIEW flag near Prometheus metric (line 278):
    {/* REVIEW: metric name livepeer_orchestrator_reward_call_status — verify against current
    go-livepeer metrics in github.com/livepeer/go-livepeer before publication */}
  Add REVIEW flag near gas cost table (before line 158):
    {/* REVIEW: gas unit range 350k-450k and gwei range 0.01-0.1 — verify against recent
    Arbitrum transactions at arbiscan.io/gastracker at time of publication */}
  Add REVIEW flag near inflation rate direction (line 69):
    {/* REVIEW: inflation rate direction stated as "declining" — verify current direction
    against explorer.livepeer.org/rounds at time of publication */}
```

---

## Fix List

| ID | Location | Finding | Fix |
|----|----------|---------|-----|
| F-01 | Frontmatter `description` | 214 chars, exceeds 160-char limit | Shorten to ≤160 chars. Proposed: `How LPT reward calling works for Livepeer orchestrators — automatic and manual options, Arbitrum gas costs, commission setting, and monitoring for missed rounds.` (160 chars exactly) — confirm before applying |
| F-02 | Frontmatter `purpose` | `guide` — wrong-field error (valid pageType in purpose field) | Change to `purpose: operate` — confirm before applying |
| F-03 | Line 36 | `Read this page to...` — banned construction 2.4 | Delete sentence per CC-2. Revised opening: first sentence only, then first H2 — confirm before applying |
| F-04 | H3: "Option 1: Automatic (default, recommended)" | 16/25 | Rename to `### Automatic Reward Calls` — confirm before applying |
| F-05 | H3: "Option 2: Disable automatic, call manually" | 16/25 | Rename to `### Manual Reward Calls` — confirm before applying |
| F-06 | Category 6 / FACT CHECK at line 348 | Unverified figures without inline REVIEW flags | Add inline REVIEW flags per CC-4 above |
| F-07 | Lines 61 and Warning (96–98) | `not [X]` constructions: "There is no catch-up mechanism" and "There is no retry" | Apply fixes per CC-3 |
| F-08 | Line 209 | `not [X]`: "There is no universally correct setting." | Rewrite per CC-3: "The optimal setting depends on your growth stage and delegation target." — confirm before applying |
| F-09 | H2: "Reward vs fee economics: a worked example" | 17/25 | Rename to `## Reward Economics: Worked Example` — confirm before applying |
| F-10 | H2: "Watch: Reward calling and orchestrator setup" | 14/25 | Rename to `## Video: Reward Calling` — confirm before applying |
| F-11 | H2: "Related" | 11/25 — `Related` alone is not exempt (P53) | Rename to `## Related Pages` — confirmed approved structural element |
| F-12 | H3: "Via livepeer_cli" | 19/25 — BORDERLINE at H3 level | Proposed: `### Commission via livepeer_cli` — confirm before applying (confirm H3 heading scoring scope) |
| F-13 | CC-1: frontmatter | Missing complexity, lifecycleStage, veracityStatus, industry, niche + wrong purpose | Add to frontmatter per CC-1 values — confirm before applying |

---

## Blocking Decisions

```
Blocking Decision: purpose field value
Current value: guide (wrong-field error)
Proposed: operate
Note: If operate is confirmed, check 4.7 information type mapping applies.
The worked example table (evaluative content type) may not fit `operate` (which permits
procedural/factual/technical). Two options:
  If purpose: operate — reframe the worked example as "illustrative context for
    understanding round allocation" and add a REVIEW flag; or move to a supplementary
    guide (reward-call-tuning or earning-model).
  If purpose: explain — worked example fits as analytical content; but then pageType
    should remain guide and purpose explain, which is valid.
Confirm purpose value with Alison before executing check 4.7 / worked example fixes.
```

```
Blocking Decision: H3 headings in scope for check 3.1 scoring
"Via livepeer_cli" is an H3. Confirm whether H3 headings are in scope for the 20/25 threshold.
If in scope: apply F-12. If out of scope: mark F-12 N/A.
```

---

**Verdict: NEEDS WORK**

**Failing checks (individual IDs):** 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 2.4, 2.5, 3.1, 3.7, 4.7 (BORDERLINE), 5.7, 6.1, 6.2, 6.4, 6.5, 6.6, 6.8, 6.9, 9.1 — **21 checks fail (1 BORDERLINE)**

Primary issues: frontmatter `purpose` wrong-field error + five missing fields (CC-1); `Read this page to` banned construction (CC-2); three `not [X]` constructions (CC-3); six headings below 20/25; extensive unverified procedural/factual claims without inline REVIEW flags (CC-4); description over 160 chars.
