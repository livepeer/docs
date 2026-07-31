# Check Report — network-participation.mdx

**File:** `v2/orchestrators/guides/staking-and-rewards/network-participation.mdx`
**Date:** 2026-03-24
**Batch:** 6
**Checks applied:** P1–P54

---

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|-------|----------|-------|-----------|-------|
| `title` | Yes | `Network Participation` | PASS | Present |
| `sidebarTitle` | Yes | `Network Participation` | PASS | Matches title |
| `description` | Yes | `How Livepeer protocol governance works and how orchestrators vote on Livepeer Improvement Proposals (LIPs) — finding polls, voting via livepeer_cli, verifying your vote on Explorer, and where to follow active proposals.` | FAIL | 192 chars — exceeds 160-char limit (check 1.11). See F-01 |
| `pageType` | Yes | `guide` | PASS | 7-type canonical schema; valid |
| `audience` | Yes | `orchestrator` | PASS | 7-token set |
| `purpose` | Yes | `guide` | FAIL | `guide` is a valid canonical `pageType` value but is NOT a valid `purpose` value. The 15-value purpose set does not include `guide`. This is a wrong-field error (P37 type b): a valid pageType value placed in the purpose field. Proposed: `purpose: operate` — confirm before applying. See F-02 |
| `complexity` | No | — | FAIL | Required field missing. Proposed: `complexity: beginner` — confirm before applying |
| `lifecycleStage` | No | — | FAIL | Required field missing. Proposed: `lifecycleStage: operate` — confirm before applying |
| `keywords` | Yes | 9 keywords listed | PASS | Specific, searcher-intent-aligned |
| OG image block | Yes | All 5 fields present | PASS | Correct fallback path |
| `veracityStatus` | No | — | FAIL | Required. Content includes FACT CHECK-adjacent claims (LIP numbers, gas costs, vote mechanics). Proposed: `veracityStatus: unverified` — confirm before applying |
| `industry` | No | — | FAIL | Required per P41. Proposed: `industry: ["governance", "economics"]` — confirm before applying |
| `niche` | No | — | FAIL | Required per P41. Proposed: `niche: ["protocol", "tokenomics"]` — confirm before applying |
| `status` | Yes | `published` | PASS | Present |
| `lastVerified` | Yes | `2026-03-13` | PASS | Present |
| `pageVariant` | No | — | PASS | N/A — pageType `guide` is canonical, not deprecated; check 1.3 does not fire (P42) |

**Cross-Category Connection CC-1:** `purpose: guide` (wrong-field error), plus `complexity`, `lifecycleStage`, `veracityStatus`, `industry`, `niche` all absent. Six findings share root cause: frontmatter not completed and one field has wrong value.

---

## Categories 1–9

### Category 1 — Frontmatter & Taxonomy

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 1.1 | All 10 required fields present | FAIL | `complexity`, `lifecycleStage`, `veracityStatus` absent (CC-1) |
| 1.2 | `pageType` uses 7-type canonical schema | PASS | `guide` is canonical |
| 1.3 | `pageVariant` valid if present | N/A | Field absent; pageType not deprecated so no co-fix required (P42) |
| 1.4 | `purpose` uses 15-value canonical set | FAIL | `guide` is NOT in the 15-value purpose set. Error type (P37): wrong field — `guide` is a valid pageType value placed in the purpose field. Proposed: `purpose: operate` — confirm before applying |
| 1.5 | `audience` uses 7-token set | PASS | `orchestrator` is canonical |
| 1.6 | `complexity` single canonical value | FAIL | Field absent. Proposed: `complexity: beginner` — confirm before applying |
| 1.7 | `lifecycleStage` single canonical value | FAIL | Field absent. Proposed: `lifecycleStage: operate` — confirm before applying |
| 1.8 | `veracityStatus` present and honest | FAIL | Field absent. `status: published` without `veracityStatus` is incoherent per checks.mdx §1.8. Proposed: `veracityStatus: unverified` — confirm before applying |
| 1.9 | `industry` array valid if present | FAIL | Field absent. Required per P41. Proposed: `industry: ["governance", "economics"]` — confirm before applying |
| 1.10 | `niche` array valid if present | FAIL | Field absent. Required per P41. Proposed: `niche: ["protocol", "tokenomics"]` — confirm before applying |
| 1.11 | `description` well-formed | FAIL | 192 chars — exceeds 160-char limit. Subject-first, UK English, no self-reference — those pass. Length fails (F-01) |
| 1.12 | OG image block complete | PASS | All 5 fields present |
| 1.13 | `keywords` quality | PASS | Terms: `lip`, `livepeer improvement proposal`, `voting`, `livepeer_cli`, `orchestrator vote` — specific and searcher-aligned |

**Category 1 FAIL checks: 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11 (8 failures)**

---

### Category 2 — Voice & Copy

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 2.1 | UK English throughout | PASS | No US spelling patterns. Checked: `recognised`, `organisations`, no `-ize` endings present. `stabilised`, `favourable` — not used; check is clean |
| 2.2 | Zero banned words | PASS | Candidates scanned: `effectively` — absent. `essentially` — absent. `basically` — absent. `meaningful` — absent. `significant` — absent. `various` — absent. `several` — absent. `obviously` — absent. `clearly` — absent. No banned words found |
| 2.3 | Zero banned phrases | FAIL | Line 37: "Use this page to follow active proposals, cast a vote with `livepeer_cli`, and verify the result on Explorer." — self-referential opener. "Use this page" is a banned construction (check 2.4) and a This-page self-reference. See F-03 |
| 2.4 | Zero banned constructions | FAIL | Line 37: "Use this page to follow..." — `This page [verb]` construction variant. Line 92: "Proposals change economic conditions — voting without context is a governance risk." — em-dash (CLAUDE.md). See F-03, F-04 |
| 2.5 | Opening order correct | FAIL | Lines 35–37 open with background framing ("Livepeer is a protocol governed by its token holders") then "Use this page to..." — both are self-referential/meta patterns before the substantive content. Should lead with the operational fact (how to vote and what voting does). See F-05 |
| 2.6 | Paragraph discipline | PASS | Single-job paragraphs; lead sentences state facts; final sentences end on actions or facts |
| 2.7 | Audience register correct | PASS | Operational register for orchestrators; procedural steps, CLI commands, governance mechanics. Appropriate |
| 2.8 | Per-audience prohibited phrases absent | PASS | `orchestrator` prohibitions scanned: "Your orchestrator will automatically" — absent. "The network rewards you for" — absent. "Easy to set up" — absent. No hedged earnings claims |
| 2.9 | No passive value statements | PASS | Gas cost table quantified ($0.01–$0.05). Governance weight described mechanically |
| 2.10 | No hedging openers | FAIL | Line 35 is a background statement; line 37 is self-referential. Opening does not lead with the operational outcome. See F-05 |
| 2.11 | Terminology locked and consistent | PASS | `LIP`, `livepeer_cli`, `poll contract address`, `stake-weighted`, `active set` — correct. No deprecated terms |

**Category 2 FAIL checks: 2.3, 2.4, 2.5, 2.10 (4 failures)**

Note: 2.3 and 2.4 share the same root violation at line 37; 2.5 and 2.10 share the same root violation at lines 35–37. See CC-2.

---

### Category 3 — Section Naming & Headings

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 3.1 | Every heading ≥20/25 | FAIL | See Heading Score Table — three headings below threshold |
| 3.2 | No banned/weak standalone heading terms | FAIL | Line 262: `## Summary` — `Summary` is in the Avoid tier (check 3.2). See F-06 |
| 3.3 | No literal contrast labels | PASS | No `X vs Y` headings |
| 3.4 | Domain-anchor rule applied | PASS | Headings interpretable in isolation |
| 3.5 | Heading names the concept, not examples | PASS | Headings name governing concepts |
| 3.6 | Title well-formed | PASS | `Network Participation` — 2 words, concept-derived |
| 3.7 | Sounds like editorial choice | FAIL | `## Summary` and `## Related` are generic structural labels. See F-06, F-07 |

**Category 3 FAIL checks: 3.1, 3.2, 3.7 (3 failures)**

---

### Category 4 — Page Structure & Content Architecture

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 4.1 | One purpose, one audience, one job | PASS | One job: vote on a governance proposal. One audience: orchestrator |
| 4.2 | Purpose statement test | PASS | "This page lets the orchestrator vote on a Livepeer governance proposal using livepeer_cli and verify the result on Explorer." Passes |
| 4.3 | PREV_PAGE / NEXT_PAGE adjacency correct | PASS | docs.json confirms: network-participation is position 6 in "Staking and Earning" (line 2915). Previous page: delegate-operations (line 2914). Next page: no next page within the section. Reader arrives from delegate-operations knowing delegation and governance relationships. Page is a terminal reference on governance voting — dead-end is acceptable for the last page in a section, but see check 4.4 |
| 4.4 | No dead ends | FAIL | Page is the last page in "Staking and Earning" (docs.json line 2915). Footer `## Related` CardGroup routes to: `/v2/lpt/governance/overview` — cross-tab link; `/v2/orchestrators/guides/staking-and-rewards/delegate-operations` — backward link; external Explorer and GitHub links. Cross-tab link to LPT tab is valuable, but `/v2/lpt/governance/overview` must be verified in docs.json. See F-08 |
| 4.5 | Prerequisites stated or linked | PASS | Line 112: "Voting requires your orchestrator node to be running. `livepeer_cli` signs through your local node." Prerequisites stated |
| 4.6 | Out-of-scope is clear | PASS | Governance is scoped to voting mechanics. Protocol influence motivation is noted as a separate page. |
| 4.7 | Information type per section correct | FAIL | `purpose: guide` in the file is wrong-field error (see check 1.4). Evaluating against proposed `purpose: operate` — permitted types are `procedural`, `factual`, `technical`. Sections: how governance works (conceptual — secondary type, acceptable), voting steps (procedural — primary type, correct), gas costs (factual — primary type, correct), governance weight (analytical — secondary, acceptable for guide). The "Recent LIPs" table (change information type) is present — for `operate` purpose, `change` is not in the permitted types. BORDERLINE: the LIP table provides context for voting but the content type may not fit `operate`. Flag for human review |
| 4.8 | No content duplication | PASS | Governance mechanics are not duplicated from adjacent pages. LIP-89 is mentioned in earning-model as a fact; here it appears in a table as context |
| 4.9 | Section orientation page present | N/A — page-level check |
| 4.10 | Cross-tab links at journey intersections | PASS | Line 301: cross-tab link to `/v2/lpt/governance/overview`. This is an appropriate cross-tab graduation path (Orchestrator→Delegator/LPT) |

**Category 4 FAIL checks: 4.4, 4.7 (2 failures — 4.7 is BORDERLINE)**

---

### Category 5 — Layout, Components & Template

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 5.1 | Correct template for pageType | PASS | `guide` template: Overview + Steps/H2 sections. Page has opening + sectioned content with numbered steps in StyledSteps. Correct |
| 5.2 | Required sections present | PASS | `guide` requires: Overview, Steps or H2. Both present |
| 5.3 | Only approved components used | NOT-TESTED | `component-layout-decisions.mdx` not read. Components: `StyledSteps`, `StyledStep`, `StyledTable`, `TableRow`, `TableCell`, `CustomDivider`, `CardGroup`, `Card`, `AccordionGroup`, `Accordion`, `Frame`. Standard set for a guide. No obvious unapproved candidates |
| 5.4 | Avoided components absent | PASS | No TODO/TBD/Coming Soon placeholders |
| 5.5 | Information type → component mapping | PASS | Procedural steps → StyledSteps (correct). Tabular cost data → StyledTable (correct). Summary checklist → AccordionGroup (appropriate). Navigation → CardGroup (correct) |
| 5.6 | MDX renders clean | NOT-TESTED | Not executed |
| 5.7 | No old-schema frontmatter | FAIL | `purpose: guide` is a wrong-field error — valid pageType value in purpose field (CC-1). See F-02 |
| 5.8 | CSS uses custom properties only | N/A | No inline styles |
| 5.9 | Generated file banners | N/A | Not a generated file |
| 5.10 | Component naming/import conventions | PASS | PascalCase imports, correct paths |

**Category 5 FAIL checks: 5.7 (1 failure — same root as 1.4, see CC-1)**

---

### Category 6 — Veracity & Factual Accuracy

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 6.1 | Every factual claim citable | FAIL | LIP table at lines 72–84: LIP-89, LIP-73, LIP-91/LIP-92 with stated effects — NOT-TESTED: not verified against github.com/livepeer/LIPs. Gas cost table at lines 248–256: "~150,000–250,000 gas units", "~$0.01–$0.05" — NOT-TESTED: not verified against live Arbitrum data |
| 6.2 | Code/commands tested | FAIL | NOT-TESTED: All CLI commands in StyledSteps (livepeer_cli, docker ps, systemctl status livepeer) not executed. Vote option identifiers (0=Yes, 1=No) not verified against current livepeer_cli menu. Transaction hash in log example is a sample hash — acceptable placeholder |
| 6.3 | No deprecated API usage | PASS | `livepeer_cli` voting flow appears current. No deprecated commands referenced |
| 6.4 | Numbers are real | FAIL | NOT-TESTED: "~150,000–250,000 gas units" for voting — not verified against live system. "$0.01–$0.05" ETH cost — at ETH price not stated (unlike reward-mechanics which cites ETH=$2,500). Gas estimate is volatile |
| 6.5 | REVIEW flags for unverified claims | FAIL | No inline `{/* REVIEW: */}` flags on any of the factual claims above. LIP effects in table, gas estimates, vote option identifiers all unverified with no flags |
| 6.6 | `veracityStatus` honest | FAIL | Field absent. Content contains procedural claims (very high standard) and factual claims (very high standard) both unverified. When added: `veracityStatus: unverified` |
| 6.7 | Authoritative vs AI-generated glossary | N/A | No glossary references |
| 6.8 | Source staleness check | FAIL | Gas cost table (lines 248–256): gas prices on Arbitrum are highly volatile — staleness risk HIGH. LIP-91/LIP-92 effects: these are recent LIPs — staleness risk MEDIUM |
| 6.9 | No open-ended research tasks | FAIL | Hidden comment block at lines 315–333 references quorum mechanics ("33.33% staked LPT + 50% votes cast") not present in the body — if these facts were intentionally excluded, the comment should clarify. If they belong in the body, the exclusion creates a knowledge gap |

**Category 6 FAIL checks: 6.1, 6.2, 6.4, 6.5, 6.6, 6.8, 6.9 (7 failures)**

---

### Category 7 — Navigation & Information Architecture

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 7.1 | Page exists in docs.json | PASS | Confirmed at docs.json line 2915: `"v2/orchestrators/guides/staking-and-rewards/network-participation"` |
| 7.2 | Navigation matches file system | PASS | File exists at expected path |
| 7.3 | Tab entry portal routes to all sections | N/A — tab-level check |
| 7.4 | No structural orphans | PASS | Reachable from "Staking and Earning" group |
| 7.5 | Audience journey complete | PASS | Terminal page in the staking section; cross-tab route to LPT governance provided |
| 7.6 | Cross-tab graduation paths | PASS | `/v2/lpt/governance/overview` cross-tab link present at line 301 |
| 7.7 | File in correct lane | PASS | In `v2/orchestrators/guides/` — publishable lane |
| 7.8 | File naming conventions | PASS | `network-participation.mdx` — no problematic prefix |
| 7.9 | `_workspace/` TTL compliance | N/A — not a workspace file |

**Category 7 FAIL checks: none**

---

### Category 8 — Links & Rendering

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 8.1 | All internal links resolve | PASS | `/v2/lpt/governance/overview` (line 301) — confirmed in docs.json line 3029. `/v2/orchestrators/guides/staking-and-rewards/delegate-operations` — confirmed docs.json line 2914. All other internal links are same-tab orchestrators paths and confirmed present in docs.json |
| 8.2 | All external links live | NOT-TESTED | External: `https://explorer.livepeer.org/voting` (multiple), `https://forum.livepeer.org`, `https://github.com/livepeer/LIPs`, `https://discord.gg/livepeer` — not verified |
| 8.3 | All snippet imports resolve | PASS | `StyledSteps/Steps.jsx`, `Tables.jsx`, `Divider.jsx` — standard snippets |
| 8.4 | All images load | FAIL | Static image references at lines 121, 126, 131: `/v1/images/poll.png`, `/v1/images/vote-livepeer-cli.png`, `/v1/images/vote-livepeer-cli-instructions.png` — these are v1 image paths. NOT-TESTED: not verified that these files exist. If v1 images are not served in v2 context, these will 404. Risk: HIGH. See F-09 |
| 8.5 | Page renders without error | NOT-TESTED | Not executed |
| 8.6 | No TODO/TBD in published content | PASS | Comment blocks are `{/* */}` and not rendered |

**Category 8 FAIL checks: 8.4 (1 failure — HIGH risk on v1 image paths)**

---

### Category 9 — Process & Governance

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 9.1 | Human sign-off recorded | FAIL | No sign-off evidence |
| 9.2 | All consuming decisions in registry | INFO | LIP-89 references are in earning-model as well — consistent. No structural decisions that aren't shared. Not blocking |
| 9.3 | Gate prerequisites met | INFO | Tab-status: Orchestrators IA Draft only, no gate open |
| 9.4 | Phase ordering respected | N/A |
| 9.5 | Findings gathered before fixes | N/A — this is the check report |
| 9.6 | Feedback routed | N/A |

**Category 9 FAIL checks: 9.1 (1 failure)**

---

## Banned Construction Scan

**Scope:** All visible text including headings, frontmatter description, body prose, step titles, table cells, card descriptions, Accordion titles, component props.

| Line | Text | Pattern | Classification | Flag? |
|------|------|---------|----------------|-------|
| 35 | "Livepeer is a protocol governed by its token holders." | — | Factual statement | No |
| 35 | "As an orchestrator, your vote carries weight proportional to your total stake — including the delegated LPT entrusted to you by your delegators." | em-dash | Em-dash prohibited (CLAUDE.md) | **FLAG F-04** |
| 37 | "Use this page to follow active proposals, cast a vote with `livepeer_cli`, and verify the result on Explorer." | `This page [verb]` / `Use this page` | banned construction 2.4 | **FLAG F-03** |
| 61 | "Governance is **stake-weighted**." | — | Positive assertion | No |
| 92 | "Proposals change economic conditions — voting without context is a governance risk." | em-dash | Em-dash prohibited | **FLAG F-04** |
| 112 | "Voting requires your orchestrator node to be running." | `requires` | Procedural requirement | No |
| 113 | "`livepeer_cli` connects to your running node to sign the transaction." | — | Factual statement | No |
| 113 | "Your orchestrator must be active before running the CLI." | must | Procedural requirement | No |
| 215 | "Nodes using a remote signer or keystore on a separate machine point `livepeer_cli` at the remote HTTP address:" | — | Procedural instruction | No |
| 221 | "The CLI connects to the node over HTTP and the node signs the transaction locally using its loaded keystore." | — | Factual | No |
| 221 | "Private keys stay on the node." | — | Positive assertion | No |
| 227 | "Your vote weight is your **total stake** — self-bonded LPT plus all delegated LPT." | em-dash | Em-dash prohibited | **FLAG F-04** |
| 229 | "Delegators bonded to you are represented by your vote in the current governance model." | — | Factual | No |
| 233 | "Abstaining carries no protocol penalty." | — | Positive assertion | No |
| 233 | "It removes your stake weight from governance decisions that affect the protocol you operate, including parameters that directly affect your earnings." | — | Factual | No |
| 258 | "Ensure your orchestrator wallet has ETH on Arbitrum before voting." | — | Procedural requirement | No |
| 258 | "The same ETH balance you maintain for reward calls and ticket redemption covers voting transactions." | — | Factual | No |
| 265 (Accordion title) | `title="Quick reference — voting checklist"` | em-dash in component prop | Em-dash prohibited; P20 scope includes AccordionGroup title props | **FLAG F-04** |
| 278 (Accordion title) | `title="Missed votes"` | — | Clean | No |
| 285 (Accordion title) | `title="Delegator override"` | — | Clean | No |
| 289 | "Independent voting requires bonding to their own orchestrator address or unbonding first." | — | Procedural/factual | No |
| 290 | "This is by design: delegating LPT to an orchestrator is a delegation of governance participation as well as stake." | — | Factual | No |

**Summary of flagged violations:**
- **F-03:** Line 37 — `Use this page to...` banned construction
- **F-04:** Lines 35, 92, 227 (body prose) + line 265 (Accordion title prop) — em-dashes in visible text

---

## Heading Score Table

*Note: "Related" heading at line 298 — per P53, "Related" is NOT exempt from scoring. Exempt heading is `Related Pages` (exact match only). "Related" is a different heading and must be scored.*

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total |
|---------|-----------|-------|-----------|---------|-------------|-------|
| How Livepeer governance works | 4 | 3 | 5 | 5 | 3 | **20/25** |
| Recent LIPs affecting orchestrators | 4 | 4 | 3 | 5 | 3 | **19/25** — FAIL |
| Where to follow governance | 3 | 3 | 5 | 4 | 4 | **19/25** — FAIL |
| How to vote | 4 | 3 | 5 | 5 | 5 | **22/25** |
| Voting with a remote key | 4 | 4 | 5 | 5 | 4 | **22/25** |
| Governance weight and your delegators | 4 | 4 | 5 | 4 | 2 | **19/25** — FAIL |
| Gas costs for voting | 5 | 4 | 5 | 5 | 4 | **23/25** |
| Summary | 1 | 1 | 3 | 3 | 5 | **13/25** — FAIL |
| Related | 1 | 1 | 2 | 2 | 5 | **11/25** — FAIL |

**Headings below 20/25:** 5 failures — see F-06, F-07, F-10, F-11, F-12.

**Notes:**
- "Recent LIPs affecting orchestrators" (19/25): `affecting orchestrators` weakens it (stability drops if audience widens). Proposed: `LIP Reference Table` or `Recent Protocol Changes` — confirm before applying
- "Where to follow governance" (19/25): `Where to` is vague; could name the venues instead. Proposed: `Governance Channels` — confirm before applying
- "Governance weight and your delegators" (19/25): verbose; `and your delegators` is implicit on an orchestrator page. Proposed: `Governance Weight` — confirm before applying
- "Summary" (13/25): Avoid-tier term. Must rename. Proposed: `Voting Checklist` — confirm before applying. Note: content is an AccordionGroup with checklists and notes — the heading should reflect the format and content
- "Related" (11/25): `See Also` / `Related` variants without "Pages" suffix are not exempt from check 3.2 (P53). `Related` alone does not appear in check 3.2's OK tier explicitly, but it is weaker than `Related Pages` which is the approved structural element. Proposed: rename to `Related Pages` — confirm before applying

---

## Spelling/Typo Check

Scan of all visible text: headings, prose, table cells, step titles, card descriptions, accordion titles.

- Line 37: "proposals" — correct
- LIP table: "LIP-89", "LIP-73", "LIP-91 / LIP-92" — consistent
- Step titles: "Find the poll on Explorer", "Make sure livepeer is running", "Run livepeer_cli", "Select Vote on a poll", "Enter the poll contract address", "Choose your vote", "Wait for transaction confirmation", "Verify your vote on Explorer" — all correct
- Gas table: "~150,000 – 250,000" — correct formatting
- Accordion titles: "Quick reference — voting checklist", "Missed votes", "Delegator override" — no spelling errors
- Card descriptions scanned: no typos

**No typos found.**

---

## Component Matrix

| Component | Used? | Appropriate for `guide`? | Notes |
|-----------|-------|--------------------------|-------|
| `StyledSteps` / `StyledStep` | Yes | PASS — guide pages support Steps | Correct for procedural voting sequence |
| `StyledTable` / `TableRow` / `TableCell` | Yes | PASS | Used for LIP reference, gas costs. Appropriate |
| `CustomDivider` | Yes | PASS | No `middleText` props — no banned construction risk |
| `CardGroup` / `Card` | Yes | PASS | Used for "Where to follow governance" and "Related" footer. Appropriate |
| `AccordionGroup` / `Accordion` | Yes | NOT-TESTED | `component-layout-decisions.mdx` not read. AccordionGroup is listed as approved for `concept` in the quick matrix; for `guide` it is not explicitly listed in the MANDATORY REPORT FORMAT matrix. Not marking FAIL — NOT-TESTED per P22 |
| `Frame` | Yes | NOT-TESTED | Used for `<Frame>![image](/v1/images/poll.png)</Frame>`. Not in approved list but a standard Mintlify component. NOT-TESTED |

---

## Cross-Category Connections

```
Root Cause CC-1: Frontmatter fields not completed; purpose field has wrong-field error
Affects: Cat 1.1 + Cat 1.4 + Cat 1.6 + Cat 1.7 + Cat 1.8 + Cat 1.9 + Cat 1.10 + Cat 5.7 + Cat 9.1
Fix:
  (a) Correct purpose field: purpose: operate (confirm before applying)
  (b) Add missing fields:
      complexity: beginner
      lifecycleStage: operate
      veracityStatus: unverified
      industry: ["governance", "economics"]
      niche: ["protocol", "tokenomics"]
  All values proposed — confirm before applying
```

```
Root Cause CC-2: Opening lines 35–37 use meta/self-referential framing before operational content
Affects: Cat 2.3 + Cat 2.4 + Cat 2.5 + Cat 2.10
Fix: Delete line 37 ("Use this page to follow active proposals..."). Rewrite lines 35–36
to lead with the operational fact:
Proposed: "As an orchestrator, your vote weight equals your total stake. When you vote on a
proposal, all delegated LPT counts with your own. Use this process to cast your vote on
any active poll."
(Confirm before applying — and check em-dash in line 35 separately)
```

```
Root Cause CC-3: Em-dashes used throughout body prose and component props
Affects: Cat 2.4 + Banned Construction Scan (lines 35, 92, 227, Accordion title line 265)
Fix:
  Line 35: "your vote carries weight proportional to your total stake — including the delegated LPT" →
    "your vote carries weight proportional to your total stake, including the delegated LPT"
  Line 92: "voting without context is a governance risk" — rephrase sentence to remove dash:
    "Proposals change economic conditions. Vote without reading the LIP and the governance carries uninformed risk."
  Line 227: "your **total stake** — self-bonded LPT" → "your **total stake**: self-bonded LPT"
  Accordion title line 265: remove em-dash from title prop:
    title="Quick reference: voting checklist"
```

```
Root Cause CC-4: v1 image paths used in v2 page
Affects: Cat 8.4
Fix: Verify existence of /v1/images/poll.png, /v1/images/vote-livepeer-cli.png,
/v1/images/vote-livepeer-cli-instructions.png before publication. If not served in v2
context, replace with updated screenshots at v2-compatible paths or remove with alt text only.
```

---

## Fix List

| ID | Location | Finding | Fix |
|----|----------|---------|-----|
| F-01 | Frontmatter `description` | 192 chars, exceeds 160-char limit | Shorten to ≤160 chars. Proposed: `How orchestrators vote on Livepeer Improvement Proposals — finding polls, voting via livepeer_cli, verifying your vote, and tracking active governance.` (149 chars) — confirm before applying |
| F-02 | Frontmatter `purpose` | `guide` is wrong-field error (valid pageType in purpose field) | Change to `purpose: operate` — confirm before applying |
| F-03 | Line 37 | `Use this page to...` — banned construction 2.4 | Delete line 37. Move operational framing into a single revised opening per CC-2 — confirm before applying |
| F-04 | Lines 35, 92, 227 + Accordion title line 265 | Em-dashes in body prose and component prop | Apply replacements per CC-3 — confirm before applying |
| F-05 | Lines 35–37 opening | Fails opening order (value before mechanism); meta framing | Rewrite per CC-2 — confirm before applying |
| F-06 | Line 262 (heading) | `## Summary` — Avoid tier, 13/25 | Rename to `## Voting Checklist` — confirm before applying |
| F-07 | Line 298 (heading) | `## Related` — 11/25, not the approved `Related Pages` structural element | Rename to `## Related Pages` — confirm before applying |
| F-08 | Line 301 (link) | `/v2/lpt/governance/overview` — verified in docs.json line 3029 | No action required — link is valid |
| F-09 | Lines 121, 126, 131 (images) | v1 image paths: `/v1/images/poll.png` etc. — may not resolve in v2 | Verify existence. Replace with v2-compatible paths or provide text-only alternatives |
| F-10 | `## Recent LIPs affecting orchestrators` | 19/25 | Rename to `## Recent Protocol Changes` — confirm before applying |
| F-11 | `## Where to follow governance` | 19/25 | Rename to `## Governance Channels` — confirm before applying |
| F-12 | `## Governance weight and your delegators` | 19/25 | Rename to `## Governance Weight` — confirm before applying |
| F-13 | CC-1: frontmatter | Missing complexity, lifecycleStage, veracityStatus, industry, niche | Add to frontmatter per CC-1 values — confirm before applying |
| F-14 | Category 6 | Unverified LIP effects, gas costs, CLI vote options | Add REVIEW flags: `{/* REVIEW: LIP-89/73/91/92 effects — verify against github.com/livepeer/LIPs before publication */}` and `{/* REVIEW: gas cost range — verify against arbiscan.io at time of publication */}` and `{/* REVIEW: vote option identifiers 0=Yes/1=No — verify against current livepeer_cli menu */}` |
| F-15 | Line 248 | Gas cost table missing ETH price basis | Proposed: add footnote row or Note: "At ETH = $X,XXX — verify current price at time of publication" — confirm before applying |

---

## Blocking Decisions

```
Blocking Decision: purpose field value
Current value: guide (wrong-field error)
Proposed: operate
Note: If operate is confirmed, check 4.7 information type mapping shifts accordingly.
The "Recent LIPs" table section (change information type) is a secondary type for operate
(not listed as permitted). If the table is retained, it must be framed as context for
operating decisions, not as a changelog. Confirm purpose value before executing 4.7 fixes.
```

---

**Verdict: NEEDS WORK**

**Failing checks (individual IDs):** 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 2.3, 2.4, 2.5, 2.10, 3.1, 3.2, 3.7, 4.4, 4.7 (BORDERLINE), 5.7, 6.1, 6.2, 6.4, 6.5, 6.6, 6.8, 6.9, 8.4, 9.1 — **26 checks fail (1 BORDERLINE)**

Primary issues: frontmatter `purpose` wrong-field error + five missing fields (CC-1); `Use this page` banned construction and em-dashes (CC-2, CC-3); five headings below 20/25; v1 image paths (CC-4); extensive unverified procedural and factual claims (Category 6).
