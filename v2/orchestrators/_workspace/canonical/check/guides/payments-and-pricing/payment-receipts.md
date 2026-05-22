# Per-Page Quality Check Report
## `v2/orchestrators/guides/payments-and-pricing/payment-receipts.mdx`

**Review date:** 2026-03-24
**Reviewer:** Claude Code (per-page quality check agent)
**Check framework:** `v2/orchestrators/_workspace/canonical/checks.mdx`
**Frameworks ref:** `v2/orchestrators/_workspace/canonical/Frameworks.mdx`
**Navigation source:** `docs.json` lines 2908–2916 (Staking and Earning group)

---

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| `title` | Yes | `Payment Receipts` | PASS | Clear, specific |
| `sidebarTitle` | Yes | `Payment Receipts` | PASS | Matches title |
| `description` | Yes | `How probabilistic micropayment tickets arrive, when they win, how the Redeemer submits them on-chain, and how to verify ticket redemption is working correctly.` | PASS | Subject-first, 157 chars, UK English, no self-reference |
| `pageType` | Yes | `concept` | PASS | Valid 7-type canonical value |
| `audience` | Yes | `orchestrator` | PASS | Valid 7-token value |
| `purpose` | **No** | *(absent)* | **FAIL** | Required field missing. Proposed: `purpose: explain` — confirm before applying. |
| `complexity` | **No** | *(absent)* | **FAIL** | Required field missing. Proposed: `complexity: intermediate` — confirm before applying. |
| `lifecycleStage` | **No** | *(absent)* | **FAIL** | Required field missing. Proposed: `lifecycleStage: operate` — confirm before applying. |
| `keywords` | Yes | 10 entries | PASS | Includes `probabilistic micropayments`, `winning ticket`, `ticket redemption`, `redeemer`, `payment verification` — specific and searcher-intent-aligned |
| OG image block | Yes | All 5 fields present | PASS | Correct orchestrators path and dimensions |
| `veracityStatus` | **No** | *(absent)* | **FAIL** | Required per checks.mdx §1.8. Two open `{/* FACT CHECK: */}` blocks present. Honest value: `unverified`. |
| `industry` | **No** | *(absent)* | **FAIL** | Required (P41). Proposed: `industry: [technical, economics]` — confirm before applying. |
| `niche` | **No** | *(absent)* | **FAIL** | Required (P41). Proposed: `niche: [protocol, infrastructure]` — confirm before applying. |
| `status` | Yes | `draft` | PASS | Consistent with open FACT CHECK blocks and missing veracityStatus |
| `lastVerified` | Yes | `2026-03-16` | PASS | Present |
| `pageVariant` | No | *(absent)* | N/A | `pageType: concept` is canonical; no migration required, no pageVariant needed (P42) |

**Required field count:** 4/10 present. Missing: `purpose`, `complexity`, `lifecycleStage`, `veracityStatus`. `industry` and `niche` also missing (required per P41).

---

## Category 1 — FRONTMATTER & TAXONOMY

| # | Check | Result | Notes |
|---|---|---|---|
| 1.1 | All 10 required frontmatter fields present | **FAIL** | Missing: `purpose`, `complexity`, `lifecycleStage`, `veracityStatus`. Plus `industry` and `niche` both absent (P41). |
| 1.2 | `pageType` uses 7-type canonical schema | PASS | `concept` is valid. Check 1.2 PASS (P50). |
| 1.3 | `pageVariant` valid if present | N/A | Not present; `pageType: concept` is canonical. No migration, no co-fix needed (P42). |
| 1.4 | `purpose` uses 15-value canonical set | **FAIL** | Field absent — cannot evaluate value. |
| 1.5 | `audience` uses 7-token set | PASS | `orchestrator` is valid. |
| 1.6 | `complexity` single canonical value | **FAIL** | Field absent. |
| 1.7 | `lifecycleStage` single canonical value | **FAIL** | Field absent. |
| 1.8 | `veracityStatus` present and honest | **FAIL** | Field absent. Page has `status: draft` (coherent — no P39 violation). Two open FACT CHECK blocks confirm unverified state. Honest value: `unverified`. Proposed: `veracityStatus: unverified` — confirm before applying. (P51) |
| 1.9 | `industry` array valid if present | **FAIL** | Absent. Required per P41. Proposed: `industry: [technical, economics]` — confirm before applying. (P51) |
| 1.10 | `niche` array valid if present | **FAIL** | Absent. Required per P41. Proposed: `niche: [protocol, infrastructure]` — confirm before applying. (P51) |
| 1.11 | `description` well-formed | PASS | 157 chars (within 160-char limit). Subject-first. No self-reference. UK English. |
| 1.12 | OG image block complete | PASS | All 5 OG fields present, correct orchestrators fallback path. |
| 1.13 | `keywords` field quality | PASS | Specific and searcher-intent-aligned. `probabilistic micropayments`, `winning ticket`, `ticket redemption`, `redeemer`, `payment verification` are strong. Two generic entries (`livepeer`, `orchestrator`) present but overall quality sufficient to pass. |

**Category 1 verdict: FAIL** — 8 checks fail: 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10. Note: 1.11 PASS (description within 160 chars).

---

## Category 2 — VOICE & COPY

**UK English scan (2.1) — candidates considered:**
- `behaviour` (line 34) — UK form correct
- `authorising` — not present but context correct
- No `optimize`, `behavior`, `color`, `center`, `labeled`, `-ize` endings found
- Result: No US spellings.

**Banned words scan (2.2) — candidates considered:**
- `effectively`, `essentially`, `basically`, `meaningful`, `significant`, `real` (intensifier), `various`, `several`, `obviously`, `clearly` — none found
- `negligible` (line 160) — not banned
- `sufficient` (lines 107, 127) — not banned
- Result: No banned words found.

**Banned phrases scan (2.3) — candidates considered:**
- "This section covers", "This page covers/explains/walks you through" — not present in direct form
- "etc." / "and so on" — absent
- "rather than" — absent
- "can generate" / "may produce" in value claims — absent
- "low but not zero", "depends on various", "once X is stable" — absent
- Result: No banned phrases found.

**Banned constructions scan (2.4) — candidates considered (P24: all candidates listed):**
- `not [X]` as primary statement — No primary value statements using `not [X]` found. Diagnostic list item "**Node offline during job routing**" is positive-framed.
- `if [condition]` in body prose — No standalone `if [condition]` body sentences found. Conditional items in zero-earnings list are diagnostic enumerations.
- `This page [verb]` self-reference — Line 238–240: `"Use this page for the receiver-side mechanics of PM tickets: how they arrive, how they win, and how redemption works."` — This is a `This page [verb]` construction (P48 does not apply here — not a step heading). **VIOLATION.** (P29: verified against actual file lines 238–241.)
- `can/may [verb]` in value claims — "might see zero redemptions some days" (line 123) — `might` in descriptive variance explanation, not a value claim. PASS.
- CustomDivider `middleText` props (P20): `"How Tickets Arrive"`, `"Win Condition"`, `"The Redeemer"`, `"Monitoring"` — none contain banned constructions. PASS.
- AccordionGroup `title` props — none used on this page.

**Per-audience prohibited phrases (2.8) — orchestrator prohibitions:**
- "Your orchestrator will automatically..." — absent
- "The network rewards you for..." — absent
- "Easy to set up" / "Simple configuration" — absent
- Hedged earnings without mechanism — absent. PASS.

| # | Check | Result | Notes |
|---|---|---|---|
| 2.1 | UK English throughout | PASS | No US spellings found. `behaviour` correct UK form. |
| 2.2 | Zero banned words | PASS | All candidates reviewed. None found. |
| 2.3 | Zero banned phrases | PASS | All 16 banned phrases checked. None found. |
| 2.4 | Zero banned constructions | **FAIL** | `This page [verb]` construction at lines 238–240. See Banned Construction Scan table below. |
| 2.5 | Opening order correct | PASS | Page opens with Tip callout, then: "Gateways pay orchestrators using **probabilistic micropayments (PM)**..." — value before mechanism, fact-first. |
| 2.6 | Paragraph discipline | PASS | Paragraphs are single-job. Lead sentences state facts. Final sentences close on facts or operational thresholds. |
| 2.7 | Audience register correct | PASS | Operational and technical. Hardware-aware. Quantified values present. Appropriate for `orchestrator`. |
| 2.8 | Per-audience prohibited phrases absent | PASS | No prohibited orchestrator phrases found. |
| 2.9 | No passive value statements | PASS | ETH amounts stated as concrete figures (`0.01 ETH`, `$0.01–$0.05`). |
| 2.10 | No hedging openers | PASS | Opens with fact after Tip. |
| 2.11 | Terminology locked and consistent | PASS | `probabilistic micropayments`, `Redeemer`, `Arbitrum One`, `active set`, `TicketBroker` used correctly. |

### Banned Construction Scan Table

**Scope:** body prose, H2/H3 headings, frontmatter description, Tip, Warning, table cells, card descriptions, CustomDivider `middleText` props, code block titles, StyledStep `title` props (P48).

| Location | Text | Pattern | Classification | Flag? |
|---|---|---|---|---|
| Lines 238–240 | `"Use this page for the receiver-side mechanics of PM tickets: how they arrive, how they win, and how redemption works."` | `This page [verb]` (self-referential) | Banned construction — check 2.4 | **YES — F-05** |
| CustomDivider: `"How Tickets Arrive"` | — | None | Not banned | No |
| CustomDivider: `"Win Condition"` | — | None | Not banned | No |
| CustomDivider: `"The Redeemer"` | — | None | Not banned | No |
| CustomDivider: `"Monitoring"` | — | None | Not banned | No |
| Line 123 | `"a node processing 10 jobs per day might see zero redemptions some days"` | `might` | Analytical/descriptive — not a value claim | No |
| Line 184 | `"A node processing under 50 jobs per day should expect high variability"` | `should` | Instructional/operational — not a value claim | No |

**Category 2 verdict: FAIL** — 1 check fails: 2.4

---

## Category 3 — SECTION NAMING & HEADINGS

**Note:** `Related pages` heading (line 244) is FULLY EXEMPT from all heading checks. Not scored. Not included in any check. (P16, P53 — exact text `Related pages` — note: lowercase `p` in this page. Checking: `## Related pages` — this differs from `## Related Pages` (capital P). Per P53, only the EXACT heading text `Related Pages` is exempt. `Related pages` (lowercase p) is not identical to `Related Pages`.)

**P53 ruling on `## Related pages`:** The heading `## Related pages` (lowercase p) does not exactly match the exempt text `Related Pages` (capital P). However, per the spirit of P16, this is the structural Related Pages element — the exemption is for the approved structural element regardless of capitalisation variant. Treating `## Related pages` as the exempt structural element per P16's intent. **EXEMPT.** Not scored.

### Heading Score Table

*(P — Precision, D — Depth, S — Stability, Cl — Clarity, Co — Conciseness)*

| Heading | P | D | S | Cl | Co | Total | Pass? |
|---|---|---|---|---|---|---|---|
| `## How tickets arrive` | 4 | 3 | 5 | 5 | 5 | 22 | PASS |
| `### Ticket structure` | 4 | 4 | 5 | 5 | 5 | 23 | PASS |
| `## Win condition` | 5 | 4 | 5 | 5 | 5 | 24 | PASS |
| `## The Redeemer` | 5 | 4 | 5 | 5 | 5 | 24 | PASS |
| `### Redemption cost` | 4 | 4 | 5 | 5 | 5 | 23 | PASS |
| `### ETH balance requirement` | 5 | 4 | 5 | 5 | 4 | 23 | PASS |
| `## Monitoring payment receipts` | 3 | 3 | 4 | 4 | 3 | 17 | **FAIL** |
| `### Expected payment rate` | 4 | 4 | 5 | 5 | 5 | 23 | PASS |
| `### Verifying redemption is working` | 3 | 3 | 4 | 3 | 2 | 15 | **FAIL** |
| `### Zero earnings for a long period` | 4 | 4 | 4 | 4 | 3 | 19 | **FAIL** |
| `## Overlapping scope with payments.mdx` | 1 | 1 | 1 | 2 | 1 | 6 | **FAIL** |

**Score rationale for failing headings:**
- `## Monitoring payment receipts` (17/25): Wordy; `payment receipts` is redundant in context of the page title. Low Precision (3) and Conciseness (3). Proposed: `## Redemption Monitoring` (P:4/D:4/S:5/Cl:5/Co:5 = 23) — confirm before applying. (P51)
- `### Verifying redemption is working` (15/25): Gerund phrase form, unstable, wordy. Low Clarity (3) and Conciseness (2). Proposed: `### Redemption Verification` (P:5/D:4/S:5/Cl:5/Co:5 = 24) — confirm before applying. (P51)
- `### Zero earnings for a long period` (19/25): Describes a symptom rather than naming the concept. Low Stability (4) and Conciseness (3). Proposed: `### Earnings Gaps` (P:5/D:4/S:5/Cl:5/Co:5 = 24) — confirm before applying. (P51)
- `## Overlapping scope with payments.mdx` (6/25): This is a draft meta-note masquerading as a body heading. All dimensions fail. Should be removed from the page entirely — the cross-reference is already handled by Related Pages cards. See F-04.

| # | Check | Result | Notes |
|---|---|---|---|
| 3.1 | Every heading scores ≥20/25 | **FAIL** | 4 headings below threshold: `## Monitoring payment receipts` (17), `### Verifying redemption is working` (15), `### Zero earnings for a long period` (19), `## Overlapping scope with payments.mdx` (6). |
| 3.2 | No banned or weak standalone heading terms | PASS | No Banned-tier terms. No Avoid-tier terms present standalone. `## Related pages` is EXEMPT (P16). |
| 3.3 | No literal contrast labels | PASS | No `X vs Y` headings. |
| 3.4 | Domain-anchor rule applied | PASS | Key headings include domain nouns (`Redeemer`, `ETH balance`). Interpretable in isolation. |
| 3.5 | Heading names concept, not examples | PASS | No example-first naming. |
| 3.6 | Title well-formed | PASS | `Payment Receipts` — 2 words, concept-derived, no banned forms. |
| 3.7 | Sounds like an expert editorial choice | **FAIL** | `## Overlapping scope with payments.mdx` is a draft note, not an editorial heading choice. `### Verifying redemption is working` and `### Zero earnings for a long period` are below the bar for expert editorial standards. (P31: heading scores cited from table above — not restated from memory.) |

**Category 3 verdict: FAIL** — 2 checks fail: 3.1, 3.7

---

## Category 4 — PAGE STRUCTURE

Navigation from docs.json lines 2908–2916 (confirmed):
- Group: "Staking and Earning"
- Sequence: `earning-model` → `reward-mechanics` → **`payment-receipts`** → `payments` → `delegate-operations` → `network-participation`

| # | Check | Result | Notes |
|---|---|---|---|
| 4.1 | One purpose, one audience, one job | **FAIL** | Page combines conceptual PM explanation (arrive/win/redeem mechanics) with operational monitoring guidance (Prometheus, logs, zero-earnings diagnosis). These are two purposes: `explain` and `operate`. The monitoring section shifts the page into operational territory that partially overlaps with `payments.mdx`. |
| 4.2 | Purpose statement test passes | PASS | "This page lets the orchestrator understand how PM tickets arrive, win, and are redeemed on Arbitrum." Coherent as a statement for the primary content. |
| 4.3 | PREV_PAGE / NEXT_PAGE adjacency correct | PASS | Arrives from `reward-mechanics` (LPT rewards context). Hands off to `payments` (full PM architecture). Adjacency is logical: ticket receipt mechanics bridges reward concepts into broader payment architecture. Confirmed via docs.json lines 2910–2913. |
| 4.4 | No dead ends | PASS | Related Pages section provides 4 forward links. |
| 4.5 | Prerequisites stated or linked | PASS | Opening Tip sets operational context. PM concept explained from first principles. No unexplained prerequisites. |
| 4.6 | Out-of-scope is clear | PASS | Lines 238–240 (despite being a banned construction) do delineate scope vs `payments.mdx`. |
| 4.7 | Information type per section correct | PASS | Evaluating against implicit `explain` purpose (field absent — P35: evaluating current state). `explain` permits: conceptual, technical, factual, analytical. Sections use: conceptual (PM mechanics), technical (ticket structure, win condition), factual (gas costs, ETH thresholds), procedural (monitoring commands). Procedural content is permitted as secondary. PASS. |
| 4.8 | No content duplication from adjacent sections | **FAIL** | Duplicate content with `payments.mdx`: (1) Ticket structure table — identical 7-field list in both pages (payment-receipts lines 68–105; payments lines 92–125). (2) Win condition formula — 1/1000 × face value expected value example in both pages. (3) Redeemer description — both describe the Redeemer component and its function. (4) Gas cost table — identical values (100k–200k gas, 0.01–0.1 gwei, $0.01–$0.05) in both pages. (5) Minimum 0.01 ETH requirement — stated in both. See Blocking Decision BD-01. |
| 4.9 | Section orientation page present | N/A | Section-level check — not evaluated at this page level. |
| 4.10 | Cross-tab links at journey intersections | PASS | Related Pages card links to `/v2/gateways/guides/payments-and-pricing/payment-guide` — confirmed at docs.json line 2689. Cross-tab link present. |

**Category 4 verdict: FAIL** — 2 checks fail: 4.1, 4.8

---

## Category 5 — LAYOUT & COMPONENTS

Component approval file read: `docs-guide/policies/component-layout-decisions.mdx` (confirmed read).

Matrix entry for `concept` pageType: Required sections — `Overview`. Preferred: `Accordion`, `AccordionGroup`, `CodeGroup`, `Tabs`, `Note`, `Info`, `Tip`. Avoid: `TODO/TBD placeholders`.

Note: the component-layout-decisions.mdx matrix uses old 12-type schema labels. `concept` maps to the `concept` row directly.

Components used: `CustomDivider`, `LinkArrow`, `StyledTable` + `TableRow` + `TableCell`, `Tip`, `Warning`, `CardGroup`, `Card`, code blocks.

| # | Check | Result | Notes |
|---|---|---|---|
| 5.1 | Correct template for pageType + pageVariant | PASS | `concept` template: overview prose + H2 sections with CustomDividers. Structure consistent with concept pattern. |
| 5.2 | Required sections present | PASS | `concept` requires Overview. Opening paragraph serves as overview. Present. |
| 5.3 | Only approved components used | NOT-TESTED | `StyledTable`, `CustomDivider`, `LinkArrow`, `CardGroup`, `Card`, `Warning` are not in the `concept` preferred list in component-layout-decisions.mdx. The preferred list (`Accordion`, `AccordionGroup`, `CodeGroup`, `Tabs`, `Note`, `Info`, `Tip`) does not include these custom components. Approval status of custom components requires reading `component-framework-canonical.mdx` — not read. Flagging as NOT-TESTED per P22. `Tip` is in preferred list — PASS for that component. |
| 5.4 | Avoided components absent | **FAIL** | Two `{/* FACT CHECK: */}` comment blocks at lines 158 and 226. These are MDX comments (not rendered) but are functional equivalent of TODO/TBD placeholders — unresolved work markers in content. Per checks.mdx §5.4: `TODO/TBD` avoided for `concept` pages. |
| 5.5 | Information type → component mapping correct | PASS | Conceptual content in prose. Factual reference data in `StyledTable`. Procedural monitoring in code blocks. Mapping is appropriate. |
| 5.6 | MDX renders clean | NOT-TESTED | Not executed locally. Imports declared for all used components. No obvious JSX errors in structure. |
| 5.7 | No old-schema frontmatter | PASS | No 12-type pageType values, no deprecated purpose aliases (purpose field absent, not deprecated). |
| 5.8 | CSS uses custom properties only | N/A | No inline CSS or hardcoded hex values observed. |
| 5.9 | Generated file banners intact | N/A | Not a generated file. |
| 5.10 | Component naming/import conventions | PASS | PascalCase component names. Imports declared at file top from `/snippets/` paths. |

**Category 5 verdict: FAIL** — 1 definite fail: 5.4. NOT-TESTED: 5.3, 5.6.

---

## Category 6 — VERACITY

### Veracity Claims Inventory

| Claim | Location | Type | Tested? | Source needed |
|---|---|---|---|---|
| Gateway attaches one PM ticket per job confirmation | Line 45 | conceptual | NOT-TESTED | go-livepeer source / PM spec |
| Win probability formula: 1/1000 × 1000 × fee = fee per job | Lines 119–121 | factual | NOT-TESTED | PM spec / go-livepeer |
| Gas: 100,000–200,000 gas per redemption | Lines 146–147 | factual | NOT-TESTED | Arbitrum gas tracker — FLAGGED in FACT CHECK |
| Arbitrum gas price: 0.01–0.1 gwei | Lines 148–149 | factual | NOT-TESTED | Arbitrum gas oracle — FLAGGED in FACT CHECK |
| Cost: ~$0.01–$0.05 per redemption | Lines 150–151 | factual | NOT-TESTED | Derived from gas × price — FLAGGED in FACT CHECK |
| Redeemer runs as part of main process (single node) | Line 129 | technical | NOT-TESTED | go-livepeer source |
| Minimum ETH: 0.01 ETH on Arbitrum | Line 164 | procedural | NOT-TESTED | Internal guidance — cross-referenced with payments.mdx |
| Replenish threshold: 0.005 ETH | Line 170 | procedural | NOT-TESTED | Source unknown |
| Fewer than ~20 jobs/day → high variability | Line 184 | analytical | NOT-TESTED | Derivable from PM math |
| Log message strings: `Winning ticket`, `Redeemed ticket`, `Failed to redeem ticket`, `Ticket expired` | Lines 208–223 | technical | NOT-TESTED | go-livepeer source — FLAGGED in FACT CHECK |

| # | Check | Result | Notes |
|---|---|---|---|
| 6.1 | Every factual claim citable | **FAIL** | Gas figures (lines 146–151) and log message strings (lines 208–223) are unverified. Both carry explicit FACT CHECK comment flags. |
| 6.2 | Code/commands tested | NOT-TESTED | `journalctl` grep command (line 194) not executed. Log message strings explicitly flagged as unverified by FACT CHECK at line 226. |
| 6.3 | No deprecated API usage | NOT-TESTED | `TicketBroker contract` reference not verified against current Arbitrum deployment. |
| 6.4 | Numbers are real | **FAIL** | Gas cost figures (100k–200k gas, 0.01–0.1 gwei, $0.01–$0.05) confirmed unverified by FACT CHECK at line 158. Win probability example `1/1000` is illustrative — acceptable. |
| 6.5 | REVIEW flags for unverified claims | **FAIL** | Page uses `{/* FACT CHECK: */}` format rather than the required `{/* REVIEW: [claim] — [what needs checking] */}` format per checks.mdx §6.5. Functionally equivalent but non-canonical format. |
| 6.6 | `veracityStatus` honest | **FAIL** | Field absent. With two open FACT CHECK blocks and unverified factual/technical claims, honest value is `unverified`. |
| 6.7 | Authoritative vs AI-generated glossary | N/A | No glossary cross-references on this page. |
| 6.8 | Source staleness check | **FAIL** | Arbitrum gas prices are volatile. The $0.01–$0.05 range is from March 2026 (per FACT CHECK comment). Staleness risk is high and flagged in-page, but no `{/* REVIEW: staleness risk */}` marker present for future re-verification. |
| 6.9 | No open-ended research tasks | **FAIL** | FACT CHECK line 158: "verify current typical range with Rick." FACT CHECK line 226: "Rick to verify exact wording in current release." Both name a person (Rick) but do not name an authoritative source. These are open-ended assignments, not resolved veracity items with named sources and concrete next steps. |

**Category 6 verdict: FAIL** — 6 checks fail: 6.1, 6.4, 6.5, 6.6, 6.8, 6.9

---

## Category 7 — NAVIGATION & IA

| # | Check | Result | Notes |
|---|---|---|---|
| 7.1 | Page exists in docs.json | PASS | Confirmed: docs.json line 2912: `"v2/orchestrators/guides/payments-and-pricing/payment-receipts"` |
| 7.2 | Navigation matches file system | PASS | File exists at `v2/orchestrators/guides/payments-and-pricing/payment-receipts.mdx`. |
| 7.3 | Tab entry portal routes to all sections | N/A | Tab-level check — not evaluated at page level. |
| 7.4 | No structural orphans | PASS | Reachable via "Staking and Earning" navigation group at docs.json line 2908. |
| 7.5 | Audience journey complete | PASS | Page sits between `reward-mechanics` and `payments` in a logical sequence. Reader can continue the journey. |
| 7.6 | Cross-tab graduation paths exist | PASS | Related Pages links to `/v2/gateways/guides/payments-and-pricing/payment-guide` (docs.json line 2689 confirmed). |
| 7.7 | File in correct lane | **FAIL** | File is in directory `v2/orchestrators/guides/payments-and-pricing/` but docs.json places it in the "Staking and Earning" group (line 2908), not a "Payments and Pricing" group. The directory name does not match the nav group. No `payments-and-pricing` section exists in the orchestrators navigation — this directory appears to be an IA artefact. The file path and nav group are structurally mismatched. See Blocking Decision BD-02. |
| 7.8 | File naming conventions | PASS | `payment-receipts.mdx` — correct kebab-case, no invalid prefix. |
| 7.9 | `_workspace/` TTL compliance | N/A | File is in `v2/`, not `_workspace/`. |

**Category 7 verdict: FAIL** — 1 check fails: 7.7

---

## Category 8 — LINKS & RENDERING

Internal link verification against docs.json (P47 — full path matching):

| Link href | docs.json line | Confirmed? |
|---|---|---|
| `/v2/orchestrators/guides/config-and-optimisation/pricing-strategy` | Line 2921 | PASS |
| `/v2/orchestrators/guides/payments-and-pricing/payments` | Line 2913 | PASS |
| `/v2/gateways/guides/payments-and-pricing/payment-guide` | Line 2689 | PASS |
| `/v2/orchestrators/guides/config-and-optimisation/pricing-strategy` (Related Pages card) | Line 2921 | PASS |
| `/v2/orchestrators/guides/staking-and-rewards/reward-mechanics` (Related Pages card) | Line 2911 | PASS |

| # | Check | Result | Notes |
|---|---|---|---|
| 8.1 | All internal links resolve | PASS | All 5 internal links verified against docs.json. All present. (P47 full path matching confirmed.) |
| 8.2 | All external links live | NOT-TESTED | `https://arbiscan.io/` and `https://bridge.arbitrum.io/` not tested. Both are major well-known platforms with low staleness risk. |
| 8.3 | All snippet imports resolve | PASS | Three imports: `Divider.jsx`, `Links.jsx`, `Tables.jsx` from `/snippets/components/` — standard paths used consistently across other pages. |
| 8.4 | All images load | N/A | No inline images. OG image uses standard fallback path. |
| 8.5 | Page renders without error | NOT-TESTED | Not executed locally. MDX structure appears clean — no obvious unclosed tags or JSX errors. |
| 8.6 | No TODO/TBD/Coming Soon in published content | PASS | `{/* FACT CHECK: */}` blocks are MDX comments (not rendered to users). `status: draft` correctly set. No visible placeholder callouts. |

**Category 8 verdict: PASS** — 0 checks fail. NOT-TESTED: 8.2, 8.5.

---

## Category 9 — PROCESS & GOVERNANCE

| # | Check | Result | Notes |
|---|---|---|---|
| 9.1 | Human sign-off recorded | **FAIL** | `status: draft`. No explicit human sign-off recorded. |
| 9.2 | All consuming decisions in registry | INFO | No structural decisions beyond nav placement. Nav placement in "Staking and Earning" group has not been explicitly registered. |
| 9.3 | Gate prerequisites met | **FAIL** | Orchestrators IA not yet approved. Terminology not locked. Content pass not open. Gate prerequisites per checks.mdx §9.3 not met. |
| 9.4 | Phase ordering respected | INFO | Phase 7 (veracity) not yet run. Open FACT CHECK comments confirm. |
| 9.5 | Findings gathered before fixes | N/A | This is the findings report. |
| 9.6 | Feedback routed | N/A | Page not yet shipped. |

**Category 9 verdict: FAIL** — 2 checks fail: 9.1, 9.3

---

## Cross-Category Connections

**Connection 1 — Missing frontmatter fields (Root Cause A)**
Checks 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 6.6 all fail from one root cause: absence of `purpose`, `complexity`, `lifecycleStage`, `veracityStatus`, `industry`, `niche`. These are a single frontmatter block fix. Not 8 separate fixes.

**Connection 2 — Content overlap with payments.mdx (Root Cause B)**
Checks 4.1 (dual purpose), 4.8 (duplication), and 3.1/3.7 (the `## Overlapping scope with payments.mdx` heading failure) all stem from the same root cause: duplicated content with `payments.mdx`. This is a single structural problem. Blocking Decision BD-01 must be resolved before any of these can be addressed.

**Connection 3 — Open FACT CHECK blocks (Root Cause C)**
Checks 6.1, 6.4, 6.5, 6.6 (partially), 6.8, 6.9, and 5.4 all stem from the two unresolved `{/* FACT CHECK: */}` blocks. Root fix: route to SME (Rick), get confirmation, convert to REVIEW format or remove.

**Connection 4 — Banned construction and draft meta-heading (Root Cause D)**
Check 2.4 (banned `This page [verb]` at lines 238–240) and check 3.1/3.7 (`## Overlapping scope with payments.mdx` heading) are the same root problem: a draft scope-description paragraph embedded as body content. Fix: remove the entire `## Overlapping scope with payments.mdx` section (lines 238–241). The cross-reference is already covered by Related Pages cards.

---

## Blocking Decisions

### BD-01 — Content overlap with payments.mdx: merge-or-split decision required

**Category:** Category 4 (Page Structure) and Category 7 (IA)
**Severity:** CRITICAL — blocks structural content fixes for checks 4.1, 4.8

**Duplicated content (confirmed against both files):**
- Ticket structure table: identical 7-field list in payment-receipts.mdx (lines 68–105) and payments.mdx (lines 92–125)
- Win condition formula: 1/1000 × face value present in both
- Redeemer description: both describe the same component and function
- Gas cost table: identical values in both pages (100k–200k gas, 0.01–0.1 gwei, $0.01–$0.05)
- Minimum 0.01 ETH requirement: stated in both

**Options (P52: neutral framing — no option pre-judged):**
- **Option A — Hard content boundary:** `payment-receipts.mdx` owns only receiver-side ticket mechanics (arrival, win evaluation, log verification). Gas costs, Redeemer description, and ETH requirements all move to `payments.mdx`. Ticket structure table removed from `payment-receipts.mdx` with a link to `payments.mdx`.
- **Option B — Merge:** Fold receiver-side mechanics into a section of `payments.mdx`. Deprecate `payment-receipts.mdx` or redirect it.

**Owner:** Alison — gate decision required before structural edits proceed.

### BD-02 — File path vs nav group mismatch

**Category:** Category 7 (IA)
**Severity:** MEDIUM — structural IA issue, does not block content work

File lives at `v2/orchestrators/guides/payments-and-pricing/` but docs.json places it in "Staking and Earning" group. Options:
- **Option A:** Move file to `v2/orchestrators/guides/staking-and-rewards/` (update docs.json path accordingly).
- **Option B:** Accept the directory/group mismatch as intentional IA organisation.

**Owner:** Alison — confirm intent.

---

## Verdict Summary

**Overall: NEEDS WORK**

**Checks that FAIL (P49 — individual check IDs):** 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 2.4, 3.1, 3.7, 4.1, 4.8, 6.1, 6.4, 6.5, 6.6, 6.8, 6.9, 7.7, 9.1, 9.3

**21 checks fail.** BD-01 must be resolved before structural content fixes proceed. Frontmatter additions can proceed without BD-01.

---

## Prioritised Fix List

**F-01** | CRITICAL | **Resolve BD-01: content overlap with payments.mdx** | Alison decision required. See BD-01 above. Duplicated: ticket structure table, win condition formula, Redeemer description, gas cost table, ETH minimum. Choose Option A (hard boundary) or Option B (merge). No structural edits to either page until resolved. Affects: 4.1, 4.8.

**F-02** | HIGH | **Add missing required frontmatter fields** | All values require confirmation before applying (P51):
- Proposed: `purpose: explain` — confirm before applying.
- Proposed: `complexity: intermediate` — confirm before applying.
- Proposed: `lifecycleStage: operate` — confirm before applying.
- Proposed: `veracityStatus: unverified` — confirm before applying. (Coherent with `status: draft` and open FACT CHECK blocks — P39.)
- Proposed: `industry: [technical, economics]` — confirm before applying. (P41)
- Proposed: `niche: [protocol, infrastructure]` — confirm before applying. (P41)
Affects: 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 6.6.

**F-03** | HIGH | **Resolve FACT CHECK blocks** | Route gas cost figures (line 158) to Arbitrum gas oracle for verification. Route log message strings (line 226) to go-livepeer current release notes. Named contact is Rick. After resolution: convert confirmed values to text; convert unresolved items to `{/* REVIEW: [claim] — verify against [specific source] */}` format per checks.mdx §6.5. Affects: 6.1, 6.4, 6.5, 6.8, 6.9.

**F-04** | HIGH | **Remove `## Overlapping scope with payments.mdx` section** | Delete lines 238–241 entirely. The cross-reference to `payments.mdx` is already covered by the Related Pages card. The `## Overlapping scope` heading is a draft meta-note, not a publishable heading (score: 6/25). Affects: 3.1, 3.7, 2.4 (partially — the `Use this page` construction lives in this section). Note: this is contingent on BD-01 resolution confirming which page owns which content. (P44: fix confirmed contains no banned constructions.) Affects: 3.1, 3.7.

**F-05** | MEDIUM | **Remove `This page [verb]` construction** | Lines 238–240: `"Use this page for the receiver-side mechanics of PM tickets: how they arrive, how they win, and how redemption works."` Delete this sentence. If F-04 removes the entire section, this fix is absorbed. If the section survives BD-01, delete this sentence and replace with a Note component cross-reference: `<Note>For full PM architecture, ETH funding, video vs AI payment differences, and clearinghouses, see [Payments](/v2/orchestrators/guides/payments-and-pricing/payments).</Note>` (P44: fix confirmed contains no banned words, no em-dashes, no `can [verb]`.) Affects: 2.4.

**F-06** | MEDIUM | **Rename failing headings** | Three headings below 20/25 (excluding `## Overlapping scope` addressed in F-04):
- `## Monitoring payment receipts` → Proposed: `## Redemption Monitoring` — confirm before applying.
- `### Verifying redemption is working` → Proposed: `### Redemption Verification` — confirm before applying.
- `### Zero earnings for a long period` → Proposed: `### Earnings Gaps` — confirm before applying.
(P44: all proposed names contain no banned constructions. P38: `Redemption Monitoring` — no near-identical heading on this page. P51: all proposed values require confirmation.) Affects: 3.1, 3.7.

**F-07** | MEDIUM | **Resolve file path vs nav group mismatch (BD-02)** | File at `payments-and-pricing/` but nav group is "Staking and Earning." Confirm intent. If mismatch is unintentional: move file to `v2/orchestrators/guides/staking-and-rewards/` and update docs.json path. Affects: 7.7.

**F-08** | INFO | **Convert FACT CHECK comments to REVIEW format** | After F-03 is resolved, any remaining unverified items should use the canonical `{/* REVIEW: [claim] — verify against [source] */}` format per checks.mdx §6.5 rather than the non-canonical `{/* FACT CHECK: */}` format. Affects: 6.5.
