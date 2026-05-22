# Per-Page Quality Check Report
## `v2/orchestrators/guides/payments-and-pricing/payments.mdx`

**Review date:** 2026-03-24
**Reviewer:** Claude Code (per-page quality check agent)
**Check framework:** `v2/orchestrators/_workspace/canonical/checks.mdx`
**Frameworks ref:** `v2/orchestrators/_workspace/canonical/Frameworks.mdx`
**Navigation source:** `docs.json` lines 2908–2916 (Staking and Earning group)

---

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| `title` | Yes | `Payments` | PASS | Clear, direct |
| `sidebarTitle` | Yes | `Payments` | PASS | Matches title |
| `description` | Yes | `How ETH moves from gateway to your orchestrator wallet — probabilistic micropayments, winning ticket mechanics, the Redeemer, on-chain redemption on Arbitrum, and keeping your node funded for transactions.` | **FAIL** | Two violations: (1) Contains em-dash (`—`) — prohibited by CLAUDE.md. (2) 192 characters — exceeds 160-char limit. |
| `pageType` | Yes | `concept` | PASS | Valid 7-type canonical value (P50) |
| `audience` | Yes | `orchestrator` | PASS | Valid 7-token value |
| `purpose` | Yes | `explain` | PASS | Read directly from frontmatter (P15). Valid 15-value canonical. |
| `complexity` | **No** | *(absent)* | **FAIL** | Required field missing. Proposed: `complexity: intermediate` — confirm before applying. (P51) |
| `lifecycleStage` | **No** | *(absent)* | **FAIL** | Required field missing. Proposed: `lifecycleStage: operate` — confirm before applying. (P51) |
| `keywords` | Yes | 10 entries | PASS | `clearinghouse`, `ticket redemption`, `probabilistic micropayments` are specific and intent-aligned. Two generic entries (`livepeer`, `orchestrator`) present. Sufficient overall. |
| OG image block | Yes | All 5 fields present | PASS | Correct orchestrators fallback path |
| `veracityStatus` | **No** | *(absent)* | **FAIL** | Required per checks.mdx §1.8. `status: published` without `veracityStatus: verified` is incoherent. Page contains unverified factual claims and a draft comment on line 30. (P39: cannot recommend `status: current/published` + `veracityStatus: unverified` — fix is to change `status` to `draft`.) |
| `industry` | **No** | *(absent)* | **FAIL** | Required (P41). Proposed: `industry: [technical, economics]` — confirm before applying. (P51) |
| `niche` | **No** | *(absent)* | **FAIL** | Required (P41). Proposed: `niche: [protocol, infrastructure]` — confirm before applying. (P51) |
| `status` | Yes | `published` | **FAIL** | `status: published` requires `veracityStatus: verified` AND zero REVIEW flags (checks.mdx §1.8). Unverified claims exist. Draft comment on line 30 signals unfinished state. Fix: change to `status: draft` until veracity pass completes — confirm before applying. (P39, P51) |
| `lastVerified` | Yes | `2026-03-13` | PASS | Present. 11 days before review date. Gas price data staleness risk noted in Category 6. |
| `pageVariant` | No | *(absent)* | N/A | `pageType: concept` is canonical; no migration required (P42). |

**Required field count:** 5/10 present. Missing: `complexity`, `lifecycleStage`, `veracityStatus`. `industry` and `niche` also missing (P41). `status` and `description` present but failing on value/content.

---

## Category 1 — FRONTMATTER & TAXONOMY

| # | Check | Result | Notes |
|---|---|---|---|
| 1.1 | All 10 required frontmatter fields present | **FAIL** | Missing: `complexity`, `lifecycleStage`, `veracityStatus`. `industry` and `niche` also absent (P41). |
| 1.2 | `pageType` uses 7-type canonical schema | PASS | `concept` is valid. (P50) |
| 1.3 | `pageVariant` valid if present | N/A | Not present; no migration needed. (P42) |
| 1.4 | `purpose` uses 15-value canonical set | PASS | `explain` is canonical. Read directly from frontmatter (P15). |
| 1.5 | `audience` uses 7-token set | PASS | `orchestrator` is valid. |
| 1.6 | `complexity` single canonical value | **FAIL** | Field absent. |
| 1.7 | `lifecycleStage` single canonical value | **FAIL** | Field absent. |
| 1.8 | `veracityStatus` present and honest | **FAIL** | Field absent. `status: published` without `veracityStatus: verified` is incoherent per checks.mdx §1.8. Draft comment on line 30 and unverified gas/ETH figures confirm the honest value would be `unverified`. Fix per P39: change `status: published` → `status: draft`, then add `veracityStatus: unverified`. |
| 1.9 | `industry` array valid if present | **FAIL** | Absent. Required per P41. |
| 1.10 | `niche` array valid if present | **FAIL** | Absent. Required per P41. |
| 1.11 | `description` well-formed | **FAIL** | Two violations: (1) em-dash (`—`) prohibited by CLAUDE.md; (2) 192 chars exceeds 160-char limit. Proposed replacement (P51): `How ETH moves from gateway to orchestrator wallet via probabilistic micropayments, the Redeemer, on-chain Arbitrum redemption, and node funding requirements.` (157 chars, no em-dash) — confirm before applying. |
| 1.12 | OG image block complete | PASS | All 5 fields present with correct orchestrators path. |
| 1.13 | `keywords` field quality | PASS | Sufficient quality. `clearinghouse`, `ticket redemption`, `probabilistic micropayments`, `redeemer` are specific. Two generic entries do not fail the check. |

**Category 1 verdict: FAIL** — 7 checks fail: 1.1, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11

---

## Category 2 — VOICE & COPY

**UK English scan (2.1) — candidates considered (P24):**
- `behaviour` (line 85) — UK form correct
- `centralise` (line 135) — UK form correct
- `authorising` — not present but no US equivalents found
- No `-ize` endings, no `-or` vs `-our` violations, no `color`/`center`/`labeled` found
- Result: No US spellings.

**Banned words scan (2.2) — candidates considered (P24):**
- `effectively`, `essentially`, `basically`, `meaningful`, `significant`, `real` (intensifier), `various`, `several`, `obviously`, `clearly` — none found
- `negligible` (line 82) — not banned
- `sufficient` (line 127) — not banned
- `approximately` (line 296) — not banned
- `usually` (line 332) — not banned
- Result: No banned words found.

**Banned phrases scan (2.3) — candidates considered (P24):**
- All 16 banned phrases checked
- "This page covers / explains / walks you through" — not in direct form in body prose
- "etc." / "and so on" — absent
- "rather than" — absent
- "can generate" / "may produce" in value claims — absent
- "low but not zero", "depends on various", "once X is stable" — absent
- Result: No standalone banned phrases found (the `Use this page` opener at line 38 is a banned construction — check 2.4, not 2.3; per P46).

**Banned constructions scan (2.4) — candidates considered (P24):**
- `not [X]` as primary statement — No primary value statements using `not [X]`. PASS. (P46: any `not [X]` violations belong in 2.4, not 2.2.)
- `if [condition]` in body prose — No standalone `if [condition]` sentences found. PASS.
- `This page [verb]` self-reference — Line 38: `"Use this page to understand how tickets flow, what makes one a winner, how the Redeemer submits them on-chain, and how to keep your node funded and earning."` — **VIOLATION** (P29: verified against actual line 38). (P54: this is check 2.4, not 2.1.)
- `can/may [verb]` in value claims — `"Multi-node or high-volume setups often run the Redeemer as a separate service"` (line 135) — `often` is descriptive, not a value claim. PASS. No `can/may` value claim violations found.
- Em-dashes (CLAUDE.md prohibition — all visible text, P30):
  - `description` field: `—` present. **VIOLATION** (also flagged in 1.11).
  - Line 175 Warning: `"A depleted wallet means winning tickets expire unsubmitted — that ETH is permanently lost."` — em-dash. **VIOLATION.**
  - Line 241 body prose: `"…redeem them — the clearinghouse arrangement is transparent to you."` — em-dash. **VIOLATION.**
- CustomDivider `middleText` props (P20): All CustomDividers on this page used without `middleText` (empty dividers). No text to scan.
- AccordionGroup `title` props (P20): `"Video transcoding payments"`, `"AI inference payments"`, `"Live AI (Cascade) payments"` — none contain banned constructions. PASS.
- StyledStep `title` props (P48): `"Use the Arbitrum official bridge"`, `"Bridge ETH from L1 to Arbitrum One"`, `"Verify receipt on Arbitrum"`, `"Set up balance monitoring"` — none contain em-dashes or banned constructions. PASS.

| # | Check | Result | Notes |
|---|---|---|---|
| 2.1 | UK English throughout | PASS | No US spellings found. (P54: check 2.1 is only UK English spelling — em-dash violations belong in 2.4.) |
| 2.2 | Zero banned words | PASS | All candidates reviewed. None found. (P46: `not [X]` pattern belongs in 2.4, not 2.2.) |
| 2.3 | Zero banned phrases | PASS | All 16 banned phrases checked. None found. (Per P46: the `Use this page` opener is a banned construction in check 2.4, not a banned phrase in 2.3.) |
| 2.4 | Zero banned constructions | **FAIL** | Three violations: (1) `This page [verb]` at line 38; (2) em-dash at line 175 in Warning text; (3) em-dash at line 241 in body prose. Description em-dash also flagged here per P30 (all visible text). See Banned Construction Scan table. |
| 2.5 | Opening order correct | PASS | Line 36: "Gateways pay orchestrators in ETH for every job completed through **probabilistic micropayments (PM)**." — opens with the fact. PASS. (Line 38 self-referential sentence follows but the first sentence is correct.) |
| 2.6 | Paragraph discipline | PASS | Paragraphs are focused. Lead sentences state facts. Final sentences close on facts or next steps. |
| 2.7 | Audience register correct | PASS | Operational, numbers-driven, hardware-aware. Appropriate for `orchestrator`. |
| 2.8 | Per-audience prohibited phrases absent | PASS | No `easy to set up`, `the network rewards you for`, `automatically`. |
| 2.9 | No passive value statements | PASS | ETH values stated as concrete figures. Gas ranges stated with specific numbers. |
| 2.10 | No hedging openers | PASS | Opens with fact at line 36. |
| 2.11 | Terminology locked and consistent | PASS | `probabilistic micropayments`, `Redeemer`, `Arbitrum One`, `feeShare`, `reward cut` — all locked domain terms used correctly. |

### Banned Construction Scan Table

**Scope:** body prose, H2/H3 headings (P30), frontmatter description, Note, Warning, table cells, card descriptions, AccordionGroup `title` props, CustomDivider `middleText` props, StyledStep `title` props (P48).

| Location | Text | Pattern | Classification | Flag? |
|---|---|---|---|---|
| `description` field | `"…to your orchestrator wallet — probabilistic micropayments…"` | em-dash `—` | Banned (CLAUDE.md, P30 — all visible text) | **YES — F-02** |
| Line 38 | `"Use this page to understand how tickets flow, what makes one a winner, how the Redeemer submits them on-chain, and how to keep your node funded and earning."` | `This page [verb]` | Banned construction — check 2.4 | **YES — F-03** |
| Line 175 Warning | `"A depleted wallet means winning tickets expire unsubmitted — that ETH is permanently lost."` | em-dash `—` | Banned (CLAUDE.md, P30) | **YES — F-04** |
| Line 241 body prose | `"…redeem them — the clearinghouse arrangement is transparent to you."` | em-dash `—` | Banned (CLAUDE.md, P30) | **YES — F-05** |
| AccordionGroup titles | `"Video transcoding payments"`, `"AI inference payments"`, `"Live AI (Cascade) payments"` | None | Not banned | No |
| StyledStep titles | All 4 bridge steps | None | Not banned | No |
| Line 82 | `"Gas overhead stays negligible relative to earnings."` | None | — | No |
| Line 135 | `"Multi-node or high-volume setups often run the Redeemer as a separate service"` | `often` | Descriptive — not a value claim | No |
| Line 332 | `"Persistent errors…usually indicate a depleted ETH balance"` | `usually` | Probabilistic descriptor — not a value claim | No |

**Category 2 verdict: FAIL** — 1 check fails: 2.4 (4 instances)

---

## Category 3 — SECTION NAMING & HEADINGS

**P53 and P16 ruling:** No heading with exact text `Related Pages` exists on this page. The page has `## Related` — this is NOT identical to `Related Pages` and is NOT exempt per P53. `## Related` is subject to normal scoring and check 3.2.

### Heading Score Table

*(P — Precision, D — Depth, S — Stability, Cl — Clarity, Co — Conciseness)*

| Heading | P | D | S | Cl | Co | Total | Pass? |
|---|---|---|---|---|---|---|---|
| `## Payment flow overview` | 3 | 3 | 4 | 4 | 3 | 17 | **FAIL** |
| `## Probabilistic micropayments explained` | 2 | 2 | 4 | 3 | 2 | 13 | **FAIL** |
| `### Ticket structure` | 4 | 4 | 5 | 5 | 5 | 23 | PASS |
| `## The Redeemer` | 5 | 4 | 5 | 5 | 5 | 24 | PASS |
| `### What the Redeemer does` | 3 | 3 | 4 | 4 | 3 | 17 | **FAIL** |
| `### Gas requirements for redemption` | 4 | 4 | 5 | 5 | 4 | 22 | PASS |
| `## Video vs AI payment differences` | 3 | 3 | 4 | 4 | 3 | 17 | **FAIL** |
| `## Clearinghouses` | 5 | 4 | 5 | 5 | 5 | 24 | PASS |
| `## Funding your node` | 4 | 3 | 5 | 5 | 5 | 22 | PASS |
| `### Bridging ETH to Arbitrum` | 5 | 4 | 5 | 5 | 4 | 23 | PASS |
| `## Checking payment health` | 3 | 3 | 4 | 4 | 4 | 18 | **FAIL** |
| `## Related` | 1 | 1 | 3 | 3 | 5 | 13 | **FAIL** |

**Score rationale for failing headings (P31 — scores cited from table above):**
- `## Payment flow overview` (17/25): `overview` is Avoid-tier per Frameworks.mdx §4.1. Low Precision (3), low Conciseness (3). Proposed: `## Payment Flow` (P:5/D:4/S:5/Cl:5/Co:5 = 24) — confirm before applying. (P51)
- `## Probabilistic micropayments explained` (13/25): `explained` suffix is weak; heading describes format not concept. Proposed: `## Probabilistic Micropayments` (P:5/D:4/S:5/Cl:5/Co:4 = 23) — confirm before applying. (P51)
- `### What the Redeemer does` (17/25): Verb-phrase form, unstable, generic. Proposed: `### Redeemer Process` (P:5/D:4/S:5/Cl:5/Co:5 = 24) — confirm before applying. (P51) (P38: no near-identical heading on this page — `## The Redeemer` is different enough.)
- `## Video vs AI payment differences` (17/25): Literal contrast label — check 3.3 violation. `differences` is weak Conciseness. Proposed: `## Workload Payment Model` (P:4/D:4/S:5/Cl:5/Co:4 = 22) — confirm before applying. (P51)
- `## Checking payment health` (18/25): Action-framing (`Checking`) instead of concept-naming. Proposed: `## Payment Health` (P:5/D:4/S:5/Cl:5/Co:5 = 24) — confirm before applying. (P51)
- `## Related` (13/25): Avoid-tier standalone term per Frameworks.mdx §4.1. Not Banned but must be strengthened. Proposed: `## Related Pages` (which would then qualify for the structural exemption per P16/P53) — confirm before applying. (P51)

| # | Check | Result | Notes |
|---|---|---|---|
| 3.1 | Every heading scores ≥20/25 | **FAIL** | 6 headings below threshold: `## Payment flow overview` (17), `## Probabilistic micropayments explained` (13), `### What the Redeemer does` (17), `## Video vs AI payment differences` (17), `## Checking payment health` (18), `## Related` (13). |
| 3.2 | No banned or weak standalone heading terms | **FAIL** | `## Related` — standalone `Related` is Avoid-tier per Frameworks.mdx §4.1. `## Payment flow overview` contains `overview` which is also Avoid-tier. Two Avoid-tier violations. |
| 3.3 | No literal contrast labels | **FAIL** | `## Video vs AI payment differences` — literal contrast label (`X vs Y` form). Proposed fix in score table above. |
| 3.4 | Domain-anchor rule applied | PASS | Most headings include domain nouns. Interpretable in isolation. |
| 3.5 | Heading names concept, not examples | PASS | No example-first naming. |
| 3.6 | Title well-formed | PASS | `Payments` — 1 word, concept-derived. Borderline generic but correct for scope. |
| 3.7 | Sounds like an expert editorial choice | **FAIL** | `## Probabilistic micropayments explained`, `### What the Redeemer does`, `## Related` do not read as expert editorial choices. (P31: scores cited from Heading Score Table.) |

**Category 3 verdict: FAIL** — 4 checks fail: 3.1, 3.2, 3.3, 3.7

---

## Category 4 — PAGE STRUCTURE

Navigation from docs.json lines 2908–2916 (confirmed):
- Group: "Staking and Earning"
- Sequence: `earning-model` → `reward-mechanics` → `payment-receipts` → **`payments`** → `delegate-operations` → `network-participation`

| # | Check | Result | Notes |
|---|---|---|---|
| 4.1 | One purpose, one audience, one job | PASS | Page covers the full payment model from gateway to orchestrator wallet. Scope is coherent with `purpose: explain`. The `## Funding your node` section is procedural but scoped within the payment context. PASS. |
| 4.2 | Purpose statement test passes | PASS | "This page lets the orchestrator understand how ETH moves from gateway to wallet via the PM system, how to keep the node funded, and how to monitor payment health." |
| 4.3 | PREV_PAGE / NEXT_PAGE adjacency correct | PASS | Arrives from `payment-receipts` (receiver-side ticket mechanics). Hands off to `delegate-operations`. Payments adds broader PM architecture, funding, and health monitoring context. Logical adjacency. (docs.json lines 2912–2914 confirmed.) |
| 4.4 | No dead ends | PASS | Related cards and inline links provide onward navigation. |
| 4.5 | Prerequisites stated or linked | PASS | Opening prose assumes familiarity with orchestrator role — appropriate for `operate` lifecycle stage. |
| 4.6 | Out-of-scope is clear | PASS | Clearinghouse section explicitly marks it as gateway-side with a link to the gateway tab. |
| 4.7 | Information type per section correct | PASS | `purpose: explain` permits: conceptual, technical, factual, analytical. Sections use: conceptual (PM mechanics), technical (Redeemer), factual (gas/ETH costs), procedural (bridging steps — secondary permitted type for `explain`). PASS. |
| 4.8 | No content duplication from adjacent sections | **FAIL** | Ticket structure table (lines 92–125) is identical to `payment-receipts.mdx` (lines 68–105). Same 7 fields, same descriptions, verbatim match. This is the same BD-01 from the payment-receipts check. See Blocking Decision BD-01. |
| 4.9 | Section orientation page present | N/A | Page-level check only. |
| 4.10 | Cross-tab links at journey intersections | PASS | Cards link to `/v2/gateways/guides/payments-and-pricing/clearinghouse-guide` (docs.json line 2693 confirmed) and `/v2/gateways/guides/payments-and-pricing/remote-signers` (docs.json line 2692 confirmed). |

**Category 4 verdict: FAIL** — 1 check fails: 4.8

---

## Category 5 — LAYOUT & COMPONENTS

Component approval file read: `docs-guide/policies/component-layout-decisions.mdx` (confirmed read).

Matrix entry for `concept` pageType: Required sections — `Overview`. Preferred: `Accordion`, `AccordionGroup`, `CodeGroup`, `Tabs`, `Note`, `Info`, `Tip`. Avoid: `TODO/TBD placeholders`.

Components used: `StyledSteps` + `StyledStep`, `StyledTable` + `TableRow` + `TableCell`, `CustomDivider`, `AccordionGroup` + `Accordion`, `CardGroup` + `Card`, `Note`, `Warning`.

| # | Check | Result | Notes |
|---|---|---|---|
| 5.1 | Correct template for pageType + pageVariant | PASS | `concept` template: overview prose + H2 sections with CustomDividers. Structure consistent. |
| 5.2 | Required sections present | PASS | `concept` requires Overview. Opening prose paragraph serves as overview. Present. |
| 5.3 | Only approved components used | NOT-TESTED | `StyledSteps`, `StyledTable`, `CustomDivider`, `CardGroup`, `Card`, `Warning` are not in the `concept` preferred list in component-layout-decisions.mdx. `AccordionGroup`, `Accordion`, `Note` are in the preferred list (PASS for those). Custom component approval status requires reading `component-framework-canonical.mdx` — not read. Flagging as NOT-TESTED per P22. `StyledSteps` in a concept page is unusual — procedural content (`## Funding your node`) embedded in a concept page is noted but not a definitive fail without reading the framework. |
| 5.4 | Avoided components absent | PASS | No TODO/TBD callouts, no Coming Soon, no PreviewCallout. Draft comment at line 30 is an MDX comment (not rendered). Note and Warning are not avoided. |
| 5.5 | Information type → component mapping correct | PASS | Procedural bridge steps in `StyledSteps`. Reference data in `StyledTable`. Multi-path (video vs AI vs Live AI) in `AccordionGroup`. Operational warning in `Warning`. Mapping appropriate. |
| 5.6 | MDX renders clean | NOT-TESTED | Not executed locally. Imports declared for all used components. No obvious JSX errors in structure. |
| 5.7 | No old-schema frontmatter | PASS | No deprecated values in present fields. `purpose: explain` is canonical. |
| 5.8 | CSS uses custom properties only | N/A | No inline CSS or hardcoded values. |
| 5.9 | Generated file banners intact | N/A | Not a generated file. |
| 5.10 | Component naming/import conventions | PASS | PascalCase component names. Imports at file top from `/snippets/` paths. |

**Category 5 verdict: PASS** — 0 definite fails. NOT-TESTED: 5.3, 5.6.

---

## Category 6 — VERACITY

### Veracity Claims Inventory

| Claim | Location | Type | Tested? | Source needed |
|---|---|---|---|---|
| PM ticket win probability formula: 1/1000 × face value = fee per segment | Lines 71–75 | factual | NOT-TESTED | PM spec / go-livepeer |
| Gas: ~100,000–200,000 gas per redemption transaction | Lines 160–163 | factual | NOT-TESTED | Arbitrum gas tracker |
| Typical Arbitrum gas price: 0.01–0.1 gwei | Lines 164–167 | factual | NOT-TESTED | Arbitrum gas oracle |
| Cost: ~$0.01–$0.05 USD per redemption | Lines 168–171 | factual | NOT-TESTED | Derived — needs current Arbitrum gas data |
| Reward() call gas: ~0.000005–0.00005 ETH per round | Lines 258–261 | factual | NOT-TESTED | Source unknown |
| Ticket redemption gas: ~0.00002–0.0001 ETH per batch | Lines 262–265 | factual | NOT-TESTED | Source unknown |
| Activation cost: ~0.0001 ETH one-time | Lines 266–269 | factual | NOT-TESTED | Source unknown |
| Round duration: ~22h | Line 261 | factual | NOT-TESTED | go-livepeer / Livepeer protocol |
| Minimum ETH: 0.01 ETH on Arbitrum | Line 174 | procedural | NOT-TESTED | Internal guidance |
| Replenish threshold: 0.005 ETH | Line 275 | procedural | NOT-TESTED | Source unknown |
| Bridging time: ~15 minutes | Line 296 | factual | NOT-TESTED | Arbitrum official docs |
| Prometheus metric names (4 metrics) | Lines 314–329 | technical | NOT-TESTED | go-livepeer source |
| Live AI payment state managed by remote signer (PRs #3791 and #3822) | Lines 221–223 | technical | NOT-TESTED | go-livepeer GitHub PRs |

| # | Check | Result | Notes |
|---|---|---|---|
| 6.1 | Every factual claim citable | **FAIL** | Gas cost table (lines 160–171), ETH transaction cost table (lines 258–272), round duration (~22h), Prometheus metric names — none verified against authoritative sources. No REVIEW flags present for any of these. |
| 6.2 | Code/commands tested | NOT-TESTED | Bridging steps (lines 283–298) not executed. Prometheus metric names not verified against go-livepeer source. PR numbers (#3791, #3822) not verified. |
| 6.3 | No deprecated API usage | NOT-TESTED | `Arbitrum PM contract` reference not verified against current deployment. |
| 6.4 | Numbers are real | **FAIL** | All ETH/gas figures unverified and carry no REVIEW flags. Round duration `~22h` is not flagged for verification. Win probability example `1/1000` is illustrative — acceptable. |
| 6.5 | REVIEW flags for unverified claims | **FAIL** | No `{/* REVIEW: */}` flags present anywhere on the page. Multiple unverified factual claims exist without any flags. |
| 6.6 | `veracityStatus` honest | **FAIL** | Field absent. `status: published` + absent `veracityStatus` is incoherent per checks.mdx §1.8. Draft comment on line 30 confirms page is not in published state. (P39: fix is `status: draft` + `veracityStatus: unverified`.) |
| 6.7 | Authoritative vs AI-generated glossary | N/A | No glossary cross-references on this page. |
| 6.8 | Source staleness check | **FAIL** | Arbitrum gas prices are volatile. `lastVerified: 2026-03-13` is 11 days before this review. Gas cost table, ETH transaction costs will shift with Arbitrum fee adjustments. Not flagged for staleness. |
| 6.9 | No open-ended research tasks | **FAIL** | Gas cost table (no named source). ETH per-transaction table (no named source). Prometheus metrics (no named source). Each of these is an open-ended unresolved item — no named source and no concrete next step. Per checks.mdx §6.9, each needs a named source and a concrete next step. |

**Category 6 verdict: FAIL** — 5 checks fail: 6.1, 6.4, 6.5, 6.6, 6.8, 6.9

---

## Category 7 — NAVIGATION & IA

| # | Check | Result | Notes |
|---|---|---|---|
| 7.1 | Page exists in docs.json | PASS | Confirmed: docs.json line 2913: `"v2/orchestrators/guides/payments-and-pricing/payments"` |
| 7.2 | Navigation matches file system | PASS | File exists at expected path. |
| 7.3 | Tab entry portal routes to all sections | N/A | Tab-level check. |
| 7.4 | No structural orphans | PASS | Reachable via "Staking and Earning" group (docs.json line 2908). |
| 7.5 | Audience journey complete | PASS | Page in correct position in Staking and Earning sequence. |
| 7.6 | Cross-tab graduation paths exist | PASS | Cards link to gateway clearinghouse and remote signers (docs.json lines 2693, 2692 confirmed). |
| 7.7 | File in correct lane | **FAIL** | File is in directory `v2/orchestrators/guides/payments-and-pricing/` but docs.json places it in "Staking and Earning" group. Same directory/group mismatch as `payment-receipts.mdx`. No `payments-and-pricing` nav group exists in the orchestrators navigation. The directory is an IA artefact mismatched to the actual nav group. See Blocking Decision BD-02. |
| 7.8 | File naming conventions | PASS | `payments.mdx` — correct kebab-case, no invalid prefix. |
| 7.9 | `_workspace/` TTL compliance | N/A | File is in `v2/`. |

**Category 7 verdict: FAIL** — 1 check fails: 7.7

---

## Category 8 — LINKS & RENDERING

Internal link verification against docs.json (P47 — full path matching):

| Link href | docs.json line | Confirmed? |
|---|---|---|
| `/v2/orchestrators/guides/ai-and-job-workloads/model-demand-reference` | Line 2903 | PASS |
| `/v2/orchestrators/guides/monitoring-and-tooling/metrics-and-alerting` | Line 2932 | PASS |
| `/v2/gateways/guides/payments-and-pricing/clearinghouse-guide` | Line 2693 | PASS |
| `/v2/gateways/guides/payments-and-pricing/remote-signers` | Line 2692 | PASS |
| `/v2/orchestrators/guides/staking-and-rewards/earning-model` | Line 2910 | PASS |
| `/v2/orchestrators/guides/staking-and-rewards/reward-mechanics` | Line 2911 | PASS |

| # | Check | Result | Notes |
|---|---|---|---|
| 8.1 | All internal links resolve | PASS | All 6 sampled internal links verified against docs.json. All present. (P47 full path matching confirmed.) |
| 8.2 | All external links live | NOT-TESTED | `https://bridge.arbitrum.io` and `https://arbiscan.io` not tested. Both major well-known platforms. |
| 8.3 | All snippet imports resolve | PASS | `Steps.jsx`, `Tables.jsx`, `Divider.jsx` from `/snippets/components/` — standard paths. |
| 8.4 | All images load | N/A | No inline images. |
| 8.5 | Page renders without error | NOT-TESTED | Not executed locally. MDX structure appears clean. |
| 8.6 | No TODO/TBD/Coming Soon in published content | PASS | Draft comment at line 30 is an MDX comment (not rendered). No visible placeholder callouts. `status: published` is set but is incorrect — noted in Category 1. |

**Category 8 verdict: PASS** — 0 checks fail. NOT-TESTED: 8.2, 8.5.

---

## Category 9 — PROCESS & GOVERNANCE

| # | Check | Result | Notes |
|---|---|---|---|
| 9.1 | Human sign-off recorded | **FAIL** | `status: published` is set but draft comment on line 30 reads: "keep copy direct, retain receiver-side mechanics in payment-receipts, and route unresolved factual checks to internal comments only" — this is an unresolved authoring note, not a signed-off state. No veracity pass has run. |
| 9.2 | All consuming decisions in registry | INFO | Nav group placement ("Staking and Earning" for a `payments-and-pricing` directory) not in registry. No blocking decisions identified as registered. |
| 9.3 | Gate prerequisites met | **FAIL** | Orchestrators IA not yet approved. Terminology not locked. Content pass not open. `status: published` is premature. |
| 9.4 | Phase ordering respected | INFO | Phase 7 (veracity) not yet run. Gas figures and Prometheus metrics are unverified with no REVIEW flags — confirms veracity pass has not run. |
| 9.5 | Findings gathered before fixes | N/A | This is the findings report. |
| 9.6 | Feedback routed | N/A | Not yet shipped. |

**Category 9 verdict: FAIL** — 2 checks fail: 9.1, 9.3

---

## Cross-Category Connections

**Connection 1 — `status: published` incoherence (Root Cause A)**
Checks 1.8, 6.6, 9.1, 9.3 all share the root cause: `status: published` is set on a page with unverified claims, a draft comment, and no completed veracity pass. Single fix: change `status: published` → `status: draft` and add `veracityStatus: unverified`. This also resolves the P39 incoherence.

**Connection 2 — Missing frontmatter fields (Root Cause B)**
Checks 1.1, 1.6, 1.7, 1.9, 1.10 (and 6.6 partially) all fail from the same root cause: absence of `complexity`, `lifecycleStage`, `industry`, `niche`. Single frontmatter block fix.

**Connection 3 — Em-dashes in multiple locations (Root Cause C)**
Check 2.4 violations at three locations (description, line 175, line 241) and check 1.11 (description). All share one root cause: em-dashes used instead of periods or alternative punctuation. Three separate edits but one root cause.

**Connection 4 — Unverified claims without REVIEW flags (Root Cause D)**
Checks 6.1, 6.4, 6.5, 6.8, 6.9 all fail because no REVIEW flags exist for multiple unverified factual claims. Root fix: add `{/* REVIEW: [claim] — verify against [source] */}` markers and resolve each before publication.

**Connection 5 — Content duplication with payment-receipts.mdx (Root Cause E)**
Check 4.8 and the blocking decision BD-01 are the same root cause as in the payment-receipts.mdx report. Requires the same BD-01 decision.

**Connection 6 — Heading failures (Root Cause F)**
Checks 3.1, 3.2, 3.3, 3.7 all fail from the same root cause: weak headings not upgraded at writing stage. Six renames needed.

---

## Blocking Decisions

### BD-01 — Content overlap with payment-receipts.mdx: merge-or-split decision required

**Category:** Category 4 (Page Structure) — shared with payment-receipts.mdx check
**Severity:** CRITICAL — blocks structural content fixes for check 4.8

Ticket structure table is duplicated verbatim in both this page (lines 92–125) and `payment-receipts.mdx` (lines 68–105). Same BD-01 as logged in the payment-receipts report. Options and owner are identical — see that report for full detail. Resolve once; apply to both pages.

### BD-02 — File path vs nav group mismatch (shared with payment-receipts)

**Category:** Category 7 (IA)
**Severity:** MEDIUM

Both `payments.mdx` and `payment-receipts.mdx` live in the `payments-and-pricing/` directory but are placed in the "Staking and Earning" nav group in docs.json. No `payments-and-pricing` nav section exists for orchestrators. Shared structural IA question — resolve once for both files. Options:
- **Option A:** Move both files to `v2/orchestrators/guides/staking-and-rewards/` and update docs.json paths.
- **Option B:** Accept the directory/group mismatch as intentional IA organisation.

**Owner:** Alison.

---

## Verdict Summary

**Overall: NEEDS WORK**

**Checks that FAIL (P49 — individual check IDs):** 1.1, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 2.4, 3.1, 3.2, 3.3, 3.7, 4.8, 6.1, 6.4, 6.5, 6.6, 6.8, 6.9, 7.7, 9.1, 9.3

**22 checks fail.**

---

## Prioritised Fix List

**F-01** | CRITICAL | **Fix `status: published` → `status: draft` and add `veracityStatus: unverified`** | `status: published` without `veracityStatus: verified` is incoherent (checks.mdx §1.8, P39). Draft comment on line 30 confirms unfinished state. Change `status: published` → `status: draft`. Add `veracityStatus: unverified`. Proposed frontmatter values — confirm before applying. Affects: 1.8, 6.6, 9.1, 9.3.

**F-02** | CRITICAL | **Resolve BD-01: content overlap with payment-receipts.mdx** | Alison decision required. See BD-01 above and payment-receipts check report. Ticket structure table is verbatim in both pages. Affects: 4.8.

**F-03** | HIGH | **Add missing required frontmatter fields** | All values require confirmation before applying (P51):
- Proposed: `complexity: intermediate` — confirm before applying.
- Proposed: `lifecycleStage: operate` — confirm before applying.
- Proposed: `industry: [technical, economics]` — confirm before applying. (P41)
- Proposed: `niche: [protocol, infrastructure]` — confirm before applying. (P41)
Affects: 1.1, 1.6, 1.7, 1.9, 1.10.

**F-04** | HIGH | **Fix description: remove em-dash and trim to ≤160 chars** | Current description has em-dash and is 192 chars. Proposed replacement: `How ETH moves from gateway to orchestrator wallet via probabilistic micropayments, the Redeemer, on-chain Arbitrum redemption, and node funding requirements.` (157 chars, no em-dash) — confirm before applying. (P44: proposed fix contains no banned constructions. P51.) Affects: 1.11, 2.4 (description em-dash).

**F-05** | HIGH | **Remove self-referential opener at line 38** | `"Use this page to understand how tickets flow…"` is a `This page [verb]` banned construction. Fix: delete line 38 entirely. The preceding lines 36–37 open with the fact: "Gateways pay orchestrators in ETH for every job completed through probabilistic micropayments (PM). Gateways send lightweight signed tickets…" — this is a correct opener and requires no modification. (P44: no new banned constructions introduced by deletion.) Affects: 2.4.

**F-06** | HIGH | **Add REVIEW flags to unverified claims** | No REVIEW flags exist anywhere on the page. Add `{/* REVIEW: [specific claim] — verify against [specific source] before publishing */}` to: (1) gas cost table (after line 172) — source: Arbitrum gas oracle; (2) ETH transaction cost table (after line 272) — source: go-livepeer gas measurement; (3) Prometheus metric names (after line 329) — source: go-livepeer current release; (4) round duration `~22h` (line 261) — source: Livepeer protocol spec. Affects: 6.1, 6.4, 6.5, 6.8, 6.9.

**F-07** | HIGH | **Fix em-dashes in body prose** | Two em-dash violations in body:
- Line 175 Warning: `"…winning tickets expire unsubmitted — that ETH is permanently lost."` → Fix: `"…winning tickets expire before submission. The ETH is permanently lost."` (P44: no em-dash, no banned words.)
- Line 241 body prose: `"…redeem them — the clearinghouse arrangement is transparent to you."` → Fix: `"…redeem them. The clearinghouse arrangement is transparent to you."` (P44: no em-dash, no banned words.)
Affects: 2.4.

**F-08** | MEDIUM | **Rename 6 failing headings** | All proposed names require confirmation before applying (P51). Check proposed names against each other for near-identical overlap (P38):
- `## Payment flow overview` → Proposed: `## Payment Flow` — confirm before applying. (No near-identical heading on page.)
- `## Probabilistic micropayments explained` → Proposed: `## Probabilistic Micropayments` — confirm before applying.
- `### What the Redeemer does` → Proposed: `### Redeemer Process` — confirm before applying. (Distinct from `## The Redeemer`.)
- `## Video vs AI payment differences` → Proposed: `## Workload Payment Model` — confirm before applying.
- `## Checking payment health` → Proposed: `## Payment Health` — confirm before applying.
- `## Related` → Proposed: `## Related Pages` — confirm before applying. (If renamed to exact `Related Pages`, structural exemption applies going forward.)
Affects: 3.1, 3.2, 3.3, 3.7.

**F-09** | MEDIUM | **Resolve file path vs nav group mismatch (BD-02)** | Both `payments.mdx` and `payment-receipts.mdx` in `payments-and-pricing/` directory but placed in "Staking and Earning" nav group. Confirm intent with Alison. Resolve together for both files. Affects: 7.7.

**F-10** | INFO | **Remove draft comment at line 30** | `{/* Draft note: keep copy direct, retain receiver-side mechanics in payment-receipts, and route unresolved factual checks to internal comments only. */}` is an authoring note that should not remain in the published file. Remove after the authoring decisions it tracks are resolved. Affects: 9.1 (signals unfinished state).
