# Check Report — earning-model.mdx

**File:** `v2/orchestrators/guides/staking-and-rewards/earning-model.mdx`
**Date:** 2026-03-24
**Batch:** 6
**Checks applied:** P1–P54

---

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|-------|----------|-------|-----------|-------|
| `title` | Yes | `Earning Model` | PASS | Clear, concept-derived |
| `sidebarTitle` | Yes | `Earning Model` | PASS | Matches title |
| `description` | Yes | `How orchestrators earn on Livepeer — ETH service fees, LPT inflationary rewards, commission parameters, what wins jobs, and how AI changes the fee landscape.` | PASS | Subject-first, 154 chars, no self-reference, UK English |
| `pageType` | Yes | `concept` | PASS | 7-type canonical schema; valid |
| `audience` | Yes | `orchestrator` | PASS | 7-token set |
| `purpose` | Yes | `explain` | PASS | 15-value canonical set; matches a concept page explaining earnings |
| `complexity` | No | — | FAIL | Required field missing (check 1.1) — Proposed: `complexity: intermediate` — confirm before applying |
| `lifecycleStage` | No | — | FAIL | Required field missing (check 1.1) — Proposed: `lifecycleStage: operate` — confirm before applying |
| `keywords` | Yes | 10 keywords listed | PASS | Specific, searcher-intent-aligned |
| OG image block | Yes | All 5 fields present | PASS | Correct fallback path |
| `veracityStatus` | No | — | FAIL | Required field missing (check 1.8) — `status: published` + missing `veracityStatus` is incoherent per checks.mdx §1.8; FACT CHECK comment at line 113+ indicates unverified claims. Proposed: `veracityStatus: unverified` — confirm before applying |
| `industry` | No | — | FAIL | Required field (P41) — Proposed: `industry: ["economics", "technical"]` — confirm before applying |
| `niche` | No | — | FAIL | Required field (P41) — Proposed: `niche: ["tokenomics", "protocol"]` — confirm before applying |
| `status` | Yes | `published` | PASS | Present |
| `lastVerified` | Yes | `2026-03-13` | PASS | Present |
| `pageVariant` | No | — | PASS | N/A — pageType is canonical, not deprecated; check 1.3 does not fire (P42) |

**Cross-Category Connection CC-1:** `complexity`, `lifecycleStage`, `veracityStatus`, `industry`, `niche` all missing. Root cause: frontmatter fields not completed during content pass. Five findings share one root cause. See Cross-Category Connections below.

---

## Categories 1–9

### Category 1 — Frontmatter & Taxonomy

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 1.1 | All 10 required fields present | FAIL | `complexity` and `lifecycleStage` absent. `veracityStatus` also absent. (CC-1) |
| 1.2 | `pageType` uses 7-type canonical schema | PASS | `concept` is canonical |
| 1.3 | `pageVariant` valid if present | N/A | Field absent; pageType not deprecated so no co-fix required |
| 1.4 | `purpose` uses 15-value canonical set | PASS | `explain` is canonical |
| 1.5 | `audience` uses 7-token set | PASS | `orchestrator` is canonical |
| 1.6 | `complexity` single canonical value | FAIL | Field absent. Proposed: `complexity: intermediate` — confirm before applying |
| 1.7 | `lifecycleStage` single canonical value | FAIL | Field absent. Proposed: `lifecycleStage: operate` — confirm before applying |
| 1.8 | `veracityStatus` present and honest | FAIL | Field absent. Content contains FACT CHECK comments (lines 113–115, inline note). Proposed: `veracityStatus: unverified` — confirm before applying. Per checks.mdx §1.8: `status: published` with missing veracityStatus is incoherent |
| 1.9 | `industry` array valid if present | FAIL | Field absent. Required per P41. Proposed: `industry: ["economics", "technical"]` — confirm before applying |
| 1.10 | `niche` array valid if present | FAIL | Field absent. Required per P41. Proposed: `niche: ["tokenomics", "protocol"]` — confirm before applying |
| 1.11 | `description` well-formed | PASS | 154 chars, subject-first, UK English, no self-reference |
| 1.12 | OG image block complete | PASS | All 5 fields present |
| 1.13 | `keywords` quality | PASS | Specific terms: `lpt rewards`, `eth fees`, `reward cut`, `fee share`, `ai inference fees` — good search alignment |

**Category 1 FAIL checks: 1.1, 1.6, 1.7, 1.8, 1.9, 1.10 (6 failures)**

---

### Category 2 — Voice & Copy

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 2.1 | UK English throughout | PASS | No US spelling patterns found. Checked: `prioritised`, `recognised`, no `-ize`, `-or`/`-our` no issues. No US spellings present |
| 2.2 | Zero banned words | PASS | Candidates scanned: `effectively` — absent. `essentially` — absent. `basically` — absent. `meaningful` — absent. `significant` — absent. `various` — absent. `several` — absent. `obviously` — absent. `clearly` — absent. No banned words found |
| 2.3 | Zero banned phrases | PASS | Scanned for all listed banned phrases. `rather than` — absent. `etc.` — absent. All clear |
| 2.4 | Zero banned constructions | FAIL | See Banned Construction Scan. `not [X]`: "None of these factors alone is decisive" (line 99) — borderline (negative framing). `can/may` value claims: "A high-stake orchestrator with uncompetitive pricing wins fewer jobs than a moderate-stake node priced correctly" — assertion form (PASS). One violation found — see F-01 |
| 2.5 | Opening order correct | PASS | Opens with "Running a Livepeer orchestrator pays through two distinct revenue streams with different mechanics." — fact-first, no caveat, no self-reference |
| 2.6 | Paragraph discipline | PASS | Single-job paragraphs; lead sentences state facts; final sentences end on actions or facts. No hedging closers |
| 2.7 | Audience register correct | PASS | Operational and technical register; earnings and performance focused; hardware-aware. Correct for `orchestrator` |
| 2.8 | Per-audience prohibited phrases absent | PASS | `orchestrator` prohibitions scanned: "Your orchestrator will automatically" — absent. "The network rewards you for" — absent. "Easy to set up" — absent. No hedged earnings without mechanism |
| 2.9 | No passive value statements | PASS | Numbers present: 22-hour round, 50% inflation target, 10% treasury. Claims are direct |
| 2.10 | No hedging openers | PASS | Opens directly with earnings statement |
| 2.11 | Terminology locked and consistent | PASS | `reward cut`, `fee cut`, `probabilistic micropayments`, `active set`, `LPT`, `ETH` used correctly. No deprecated terms |

**Category 2 FAIL checks: 2.4 (1 failure)**

---

### Category 3 — Section Naming & Headings

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 3.1 | Every heading ≥20/25 | PASS | See Heading Score Table |
| 3.2 | No banned/weak standalone heading terms | PASS | All headings scanned — no Banned or Avoid tier terms |
| 3.3 | No literal contrast labels | FAIL | `## Transcoding vs AI fees in practice` (line 159) — uses `X vs Y` pattern. See F-02 |
| 3.4 | Domain-anchor rule applied | PASS | Headings interpretable in isolation |
| 3.5 | Heading names the concept, not examples | PASS | All headings name governing concepts |
| 3.6 | Title well-formed | PASS | `Earning Model` — 2 words, concept-derived, no banned forms |
| 3.7 | Sounds like editorial choice | PASS | `Commission parameters`, `Payment flow summary`, `Monitoring your earnings` — all editorial and specific |

**Category 3 FAIL checks: 3.3 (1 failure)**

---

### Category 4 — Page Structure & Content Architecture

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 4.1 | One purpose, one audience, one job | PASS | One page: explain how orchestrators earn. One audience: orchestrator |
| 4.2 | Purpose statement test | PASS | "This page lets the orchestrator understand how both revenue streams work, how commission parameters split earnings, and what positions them for more work." Passes |
| 4.3 | PREV_PAGE / NEXT_PAGE adjacency correct | PASS | docs.json confirms: earning-model is position 1 in "Staking and Earning" (lines 2910–2916). No defined prev page within the section. Next page: reward-mechanics (line 2911). The page correctly routes to reward-mechanics at line 38 and line 271. Reader arrives with orchestrator context from setup section; leaves to reward-mechanics with full earnings model understood |
| 4.4 | No dead ends | PASS | Footer CardGroup at lines 270–283 routes to reward-mechanics, delegate-operations, payment-receipts, network-participation. Four forward paths |
| 4.5 | Prerequisites stated or linked | PASS | Opening Note at line 37–39 routes new readers to operator-rationale for context; assumes active orchestrator knowledge |
| 4.6 | Out-of-scope is clear | PASS | Page scope is revenue mechanics. Commission strategy depth is routed to delegate-operations. Payment mechanics routed to payment-receipts |
| 4.7 | Information type per section correct | PASS | `pageType: concept` / `purpose: explain` permits `conceptual`, `technical`, `factual`, `analytical`. All sections fit: Two revenue streams (conceptual), ETH fees (factual/technical), LPT rewards (factual/technical), Commission parameters (factual), Transcoding vs AI (analytical), Payment flow (structural), Monitoring (structural) |
| 4.8 | No content duplication from adjacent sections | PASS | Payment flow summary is brief and routes to payment-receipts for full mechanics. Commission examples route to delegate-operations. No overlap detected |
| 4.9 | Section orientation page present | N/A — page-level check only; section-level check is outside scope of a single-page report |
| 4.10 | Cross-tab links at journey intersections | INFO | Cross-tab link to `/v2/lpt/governance/overview` at line 154 (Comment mentions LPT tab). The Explorer links (explorer.livepeer.org) are external but not cross-tab. The direct cross-tab link to `/v2/lpt/` in the delegator governance note exists but is embedded in a comment (line 154). On the live page, the Note at line 153–155 links to `/v2/orchestrators/guides/staking-and-rewards/delegate-operations` (same tab). No explicit cross-tab link to About or Delegators tab visible in body. Not blocking at page level — tab-level check |

**Category 4 FAIL checks: none**

---

### Category 5 — Layout, Components & Template

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 5.1 | Correct template for pageType | PASS | `concept` template: Overview + content sections. Page has opening statement + sectioned content with H2s. Correct |
| 5.2 | Required sections present | PASS | `concept` requires: Overview. Present (opening statement + CardGroup). |
| 5.3 | Only approved components used | NOT-TESTED | `component-layout-decisions.mdx` not read. Components in use: `StyledTable`, `TableRow`, `TableCell`, `CustomDivider`, `CardGroup`, `Card`, `Note`, `Warning`, `Frame/iframe`. These are standard Mintlify + custom table components. No obvious unapproved candidates visible |
| 5.4 | Avoided components absent | PASS | No TODO/TBD placeholders in rendered content. Draft comment at line 30 is inside `{/* */}` and not rendered |
| 5.5 | Information type → component mapping correct | PASS | Tables for comparative data (WorkloadType, commission strategy). Prose for conceptual. Code blocks for flow diagrams. Appropriate mappings |
| 5.6 | MDX renders clean | NOT-TESTED | Not executed. All JSX appears closed and properly formed. No unclosed tags visible |
| 5.7 | No old-schema frontmatter | PASS | `pageType: concept`, `purpose: explain`, `audience: orchestrator` — all canonical |
| 5.8 | CSS uses custom properties only | N/A | No inline styles present in this file |
| 5.9 | Generated file banners | N/A | Not a generated file |
| 5.10 | Component naming/import conventions | PASS | PascalCase imports, correct import paths |

**Category 5 FAIL checks: none (2 NOT-TESTED)**

---

### Category 6 — Veracity & Factual Accuracy

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 6.1 | Every factual claim citable | FAIL | Lines 113–115: inflation rate (~50% target), "approximately 61% of LPT supply was bonded", "inflation rate was gradually declining towards its floor" — NOT-TESTED: unverified against Explorer or protocol contracts. LIP-89 reference (line 115) requires citation |
| 6.2 | Code/commands tested | N/A | No executable commands; code blocks are flow diagrams (conceptual) |
| 6.3 | No deprecated API usage | PASS | References `Reward()`, `rewardCut`, `feeShare` — current protocol parameters |
| 6.4 | Numbers are real | FAIL | NOT-TESTED: "approximately every 22 hours" (line 105), "~50% of total LPT supply" (line 113), "approximately 61%" (line 113), "10% treasury" (line 115, LIP-89). The 22-hour round duration and 50% target are documentable from protocol; the 61% figure is a stated point-in-time claim that changes — needs REVIEW flag. The $ETH cost figures in Monitoring section link to live tools — ok |
| 6.5 | REVIEW flags for unverified claims | FAIL | Line 113 has inflation rate and bonding percentage stated as fact but only the FACT CHECK comment at lines 285–304 (in the hidden comment block) signals intent. No inline `{/* REVIEW: */}` flags on the unverified numbers in the body |
| 6.6 | `veracityStatus` honest | FAIL | Field absent. Content contains unverified protocol-state claims. When added, must be `unverified` (CC-1) |
| 6.7 | Authoritative vs AI-generated glossary | N/A | No glossary references |
| 6.8 | Source staleness check | FAIL | NOT-TESTED: "As of early 2026, approximately 61% of LPT supply was bonded" (line 113) — staleness risk HIGH. This figure changes every round. "As of LIP-89 (March 2026)" (line 115) — less volatile, citable from GitHub |
| 6.9 | No open-ended research tasks | FAIL | Hidden comment block at lines 285–304 contains research notes but no `{/* REVIEW: */}` inline flags on the specific claims in the body. The inflation/bonding percentage at line 113 needs `{/* REVIEW: current bonding percentage — verify against explorer.livepeer.org or Livepeer subgraph */}` |

**Category 6 FAIL checks: 6.1, 6.4, 6.5, 6.6, 6.8, 6.9 (6 failures)**

---

### Category 7 — Navigation & Information Architecture

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 7.1 | Page exists in docs.json | PASS | Confirmed at docs.json line 2910: `"v2/orchestrators/guides/staking-and-rewards/earning-model"` |
| 7.2 | Navigation matches file system | PASS | File exists at expected path |
| 7.3 | Tab entry portal routes to all sections | N/A — tab-level check; not applicable to a single page report |
| 7.4 | No structural orphans | PASS | Reachable from "Staking and Earning" group in docs.json |
| 7.5 | Audience journey complete | PASS | Entry point to staking section. Routes forward to reward-mechanics, delegate-operations, payment-receipts |
| 7.6 | Cross-tab graduation paths | INFO | No explicit cross-tab link in body prose. Comment block mentions LPT tab. Tab-level check — not page-level blocking |
| 7.7 | File in correct lane | PASS | In `v2/orchestrators/guides/` — publishable lane, not `_workspace/` |
| 7.8 | File naming conventions | PASS | `earning-model.mdx` — no problematic prefix |
| 7.9 | `_workspace/` TTL compliance | N/A — not a workspace file |

**Category 7 FAIL checks: none**

---

### Category 8 — Links & Rendering

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 8.1 | All internal links resolve | PASS (partial) | Links verified in docs.json: `/v2/orchestrators/guides/operator-considerations/operator-rationale` — docs.json line search confirmed present in guides/operator-considerations group. `/v2/orchestrators/guides/staking-and-rewards/reward-mechanics` — confirmed line 2911. `/v2/orchestrators/guides/staking-and-rewards/delegate-operations` — confirmed line 2914. `/v2/orchestrators/guides/payments-and-pricing/payment-receipts` — confirmed line 2912. `/v2/orchestrators/guides/monitoring-and-tooling/metrics-and-alerting` — docs.json line 2932 confirmed. `/v2/orchestrators/guides/staking-and-rewards/network-participation` — confirmed line 2915 |
| 8.2 | All external links live | NOT-TESTED | External: `https://explorer.livepeer.org`, `https://tools.livepeer.cloud`, `https://arbiscan.io` — not verified. Risk: MEDIUM |
| 8.3 | All snippet imports resolve | PASS | Imports: `'/snippets/components/wrappers/tables/Tables.jsx'`, `'/snippets/components/elements/spacing/Divider.jsx'` — standard snippets. Not individually verified but standard pattern |
| 8.4 | All images load | PASS | YouTube embed iframe, no static image assets |
| 8.5 | Page renders without error | NOT-TESTED | Not executed |
| 8.6 | No TODO/TBD in published content | PASS | FACT CHECK and draft notes are in `{/* */}` comment blocks — not rendered |

**Category 8 FAIL checks: none (2 NOT-TESTED)**

---

### Category 9 — Process & Governance

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 9.1 | Human sign-off recorded | FAIL | No sign-off evidence in frontmatter or file. `status: published` without `veracityStatus` |
| 9.2 | All consuming decisions in registry | INFO | Page depends on: `rewardCut`/`feeShare` terminology (in CLAUDE.md locked terms). LIP-89 as source of 10% treasury. Registry not read in this session — not blocking |
| 9.3 | Gate prerequisites met | INFO | Tab-status shows Orchestrators: IA Draft only, Terminology not locked, Content Pass not open. This page is in content-writing pipeline phase; checks are advisory |
| 9.4 | Phase ordering respected | N/A | Cannot determine from page content alone |
| 9.5 | Findings gathered before fixes | N/A | This is the check report |
| 9.6 | Feedback routed | N/A | Routing follows after this report |

**Category 9 FAIL checks: 9.1 (1 failure)**

---

## Banned Construction Scan

**Scope:** All visible text including headings, frontmatter description, body prose, table cells, card descriptions, component props, Note/Warning/Tip text.

| Line | Text | Pattern | Classification | Flag? |
|------|------|---------|----------------|-------|
| 35 | "Running a Livepeer orchestrator pays through two distinct revenue streams with different mechanics." | — | Positive assertion | No |
| 47 | "Gateways pay you in ETH for every transcoding or AI inference job you complete." | — | Positive assertion | No |
| 50 | "You must call `Reward()` each round to claim your share." | must | Procedural requirement | No |
| 54 | "Both matter for total income." | — | Positive assertion | No |
| 54 | "ETH fees depend on market demand and your competitiveness." | — | Factual statement | No |
| 54 | "LPT rewards depend on your stake, the current inflation rate, and whether you call `Reward()` every round without missing one." | — | Factual statement | No |
| 91–97 | Code block: "Stake weight → higher stake = larger active set position = more segments" | — | Structural/procedural in code block | No |
| 99 | "None of these factors alone is decisive." | `not [X]` — negative framing | value-claim (negative primary statement) | **FLAG F-01** |
| 99 | "A high-stake orchestrator with uncompetitive pricing wins fewer jobs than a moderate-stake node priced correctly." | — | Positive assertion (comparative) | No |
| 99 | "A well-priced node without warm models loses AI jobs to one that has them." | — | Positive assertion | No |
| 107 | "Three things must be true for you to receive that round's rewards:" | must | Procedural requirement | No |
| 118 | "Missing a round's `Reward()` call means that round's inflation allocation is permanently lost." | — | Positive assertion | No |
| 118 | "Automate this." | — | Imperative command | No |
| 125 | "When you register as an orchestrator, you set two commission parameters that determine how you split earnings with delegators." | — | Factual statement | No |
| 125 | "Both update on-chain immediately, and frequent changes damage delegator trust." | — | Factual statement | No |
| 154 | "Setting competitive rates attracts more stake, which increases your inflation share and job routing weight — a compounding dynamic." | — | Positive assertion; note: em-dash used | **FLAG F-03 (em-dash)** |
| 201 | "A key distinction: for video transcoding, stake weight directly determines your position in the routing queue." | — | Positive assertion | No |
| 201 | "For AI inference, the gateway first filters by capability and price — your stake matters less than having the right pipeline running at a competitive price." | — | Positive assertion; em-dash used | **FLAG F-03 (em-dash)** |
| 248 | "A gap in the reward history means missed rounds and lost LPT." | — | Positive assertion | No |

**Summary:** Two candidate violations found:
- **F-01:** Line 99 — `not [X]` construction as primary statement
- **F-03:** Em-dashes in body prose at lines 154 and 201 (per P30/CLAUDE.md prohibition)

---

## Heading Score Table

*Exempt: "Related Pages" heading — not applicable here (heading is "Continue in this section").*

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total |
|---------|-----------|-------|-----------|---------|-------------|-------|
| The two revenue streams | 4 | 3 | 5 | 5 | 4 | **21/25** |
| ETH service fees | 5 | 4 | 5 | 5 | 5 | **24/25** |
| What determines how much work you win | 3 | 4 | 4 | 4 | 2 | **17/25** — FAIL |
| LPT inflationary rewards | 5 | 4 | 5 | 5 | 4 | **23/25** |
| Commission parameters | 5 | 4 | 5 | 5 | 5 | **24/25** |
| Reward cut | 5 | 4 | 5 | 5 | 5 | **24/25** |
| Fee share | 5 | 4 | 5 | 5 | 5 | **24/25** |
| Transcoding vs AI fees in practice | 3 | 3 | 4 | 3 | 3 | **16/25** — FAIL |
| Payment flow summary | 4 | 3 | 5 | 5 | 4 | **21/25** |
| Monitoring your earnings | 4 | 3 | 5 | 5 | 4 | **21/25** |
| Watch: Orchestrator economics overview | 3 | 2 | 4 | 4 | 2 | **15/25** — FAIL |
| Continue in this section | 2 | 1 | 3 | 3 | 3 | **12/25** — FAIL |

**Headings below 20/25:** 4 failures — see F-02, F-04, F-05, F-06.

**Notes:**
- "What determines how much work you win" (17/25): question-style phrasing, verbose. Proposed: `Job Routing Factors` — Proposed: confirm before applying
- "Transcoding vs AI fees in practice" (16/25): fails check 3.3 (X vs Y). Proposed: `Fee Profile by Workload` — confirm before applying
- "Watch: Orchestrator economics overview" (15/25): `Overview` is Avoid-tier (check 3.2). Proposed: `Video: Orchestrator Economics` — confirm before applying
- "Continue in this section" (12/25): generic navigation label. Standard footer card pattern — if this is a structural template element, treat as INFO. Proposed: `Related Pages` (approved structural element) or retain as-is if template-mandated — confirm before applying

---

## Spelling/Typo Check

Scan of all visible text: headings, prose, table cells, card descriptions, component labels.

- Line 47: "Gateways pay you in ETH" — correct
- Line 105: "approximately every 22 hours on Arbitrum" — correct
- Line 113: "approximately 61% of LPT supply was bonded" — correct spelling
- Line 159: "The fee landscape is shifting." — correct
- All table cells scanned: no typos detected
- Card descriptions at lines 271–283: scanned, no typos

**No typos found.**

---

## Component Matrix

| Component | Used? | Appropriate for `concept`? | Notes |
|-----------|-------|---------------------------|-------|
| `StyledTable` / `TableRow` / `TableCell` | Yes | PASS — tables for comparative data are approved for concept | Used appropriately for workload comparison, commission strategy, monitoring tools |
| `CustomDivider` | Yes | PASS — spacing element, not content | No `middleText` props found — no banned construction risk |
| `CardGroup` / `Card` | Yes | PASS — concept pages may use Card/CardGroup | Used in revenue streams intro and footer navigation |
| `Note` | Yes | PASS — approved for concept | Used at lines 37–39 and 153–155 |
| `Warning` | Yes | PASS — approved for concept | Used at line 117–119 |
| `Frame` / `iframe` | Yes | NOT-TESTED — `component-layout-decisions.mdx` not read | YouTube embed. No obvious prohibition — INFO |

---

## Cross-Category Connections

```
Root Cause CC-1: Frontmatter fields not completed during content pass
Affects: Cat 1.1 + Cat 1.6 + Cat 1.7 + Cat 1.8 + Cat 1.9 + Cat 1.10 + Cat 6.6 + Cat 9.1
Fix: Add five fields to frontmatter:
  complexity: intermediate
  lifecycleStage: operate
  veracityStatus: unverified
  industry: ["economics", "technical"]
  niche: ["tokenomics", "protocol"]
  (All values proposed — confirm before applying)
```

```
Root Cause CC-2: Unverified protocol-state figures stated as facts in body without REVIEW flags
Affects: Cat 6.1 + Cat 6.4 + Cat 6.5 + Cat 6.8 + Cat 6.9
Fix: Add inline REVIEW comment at line 113:
  {/* REVIEW: "approximately 61% of LPT supply was bonded" — verify current bonding percentage against explorer.livepeer.org or Livepeer subgraph before publication */}
  {/* REVIEW: inflation rate direction (declining) — verify current direction against explorer.livepeer.org/rounds */}
```

---

## Fix List

| ID | Location | Finding | Fix |
|----|----------|---------|-----|
| F-01 | Line 99 | `not [X]` as primary statement: "None of these factors alone is decisive." | Rewrite positively. Proposed: "All five factors operate simultaneously — no single factor determines the outcome." — confirm before applying |
| F-02 | Line 159 (heading) | Check 3.3 X vs Y heading: `## Transcoding vs AI fees in practice` | Rename to `## Fee Profile by Workload` — confirm before applying |
| F-03 | Lines 154, 201 | Em-dash in body prose. CLAUDE.md prohibits em-dashes | Line 154: replace `— a compounding dynamic` with `: a compounding dynamic`. Line 201: replace `— your stake matters less` with `. Stake matters less` |
| F-04 | Line 87 (heading) | `## What determines how much work you win` scores 17/25, verbose | Rename to `## Job Routing Factors` — confirm before applying |
| F-05 | Line 252 (heading) | `## Watch: Orchestrator economics overview` contains Avoid-tier `overview` | Rename to `## Video: Orchestrator Economics` — confirm before applying |
| F-06 | Line 268 (heading) | `## Continue in this section` scores 12/25 | Rename to `## Related Pages` (approved structural element) or remove if template-mandated — confirm before applying |
| F-07 | CC-1: frontmatter | Missing complexity, lifecycleStage, veracityStatus, industry, niche | Add to frontmatter block — all values proposed, confirm before applying |
| F-08 | Line 113 | Unverified bonding % stated as fact; line 115 LIP-89 treasury % | Add REVIEW flags per CC-2 fix above |

---

## Blocking Decisions

None required. Page purpose, audience, and scope are unambiguous. All findings above are executable once CC-1 proposed values are confirmed.

---

**Verdict: NEEDS WORK**

**Failing checks (individual IDs):** 1.1, 1.6, 1.7, 1.8, 1.9, 1.10, 2.4, 3.3, 6.1, 6.4, 6.5, 6.6, 6.8, 6.9, 9.1 — **15 checks fail**

Primary issues: five missing frontmatter fields (CC-1), unverified protocol-state figures without REVIEW flags (CC-2), one heading fails check 3.3 (X vs Y), one `not [X]` construction, em-dashes in prose, three headings below 20/25.
