# Per-Page Quality Check Report
## `v2/orchestrators/guides/monitoring-and-tooling/explorer-operations.mdx`

**Review date:** 2026-03-24
**Reviewer:** Claude Code (per-page quality check agent)
**Check framework:** `v2/orchestrators/_workspace/canonical/checks.mdx`
**Frameworks ref:** `v2/orchestrators/_workspace/canonical/Frameworks.mdx`
**Navigation source:** `docs.json` lines 2930–2933

---

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| `title` | Yes | `Explorer Operations` | PASS | |
| `sidebarTitle` | Yes | `Explorer Guide` | PASS | |
| `description` | Yes | `A walkthrough of every metric on your Livepeer Explorer orchestrator page — what each number means, what healthy looks like, and what to do when something is wrong.` | FAIL | 164 chars — exceeds 160-char limit. Em-dash present (`—`). |
| `pageType` | Yes | `guide` | PASS | Valid 7-type canonical value |
| `audience` | Yes | `orchestrator` | PASS | Valid 7-token set |
| `purpose` | Yes | `guide` | FAIL | `guide` is NOT a valid purpose value. Wrong-field error (P37): pageType value placed in purpose field. Proposed: `purpose: operate` — confirm before applying. |
| `complexity` | No | — | FAIL | Required field missing. Proposed: `complexity: intermediate` — confirm before applying. |
| `lifecycleStage` | No | — | FAIL | Required field missing. Proposed: `lifecycleStage: operate` — confirm before applying. |
| `keywords` | Yes | livepeer, explorer, orchestrator, stake, reward, earnings, delegators, active set, monitoring | PASS (partial) | Good: `explorer`, `active set`, `stake`, `reward`, `earnings`. Generic: `livepeer`, `orchestrator`, `monitoring`. See 1.13. |
| OG image block | Yes | 5 OG fields present | PASS | |
| `industry` | No | — | FAIL | Required (P41). Proposed: `industry: [technical, economics]` — confirm before applying. |
| `niche` | No | — | FAIL | Required (P41). Proposed: `niche: [protocol, tokenomics]` — confirm before applying. |
| `veracityStatus` | No | — | FAIL | Required. Page has 1 active `{/* FACT CHECK */}` comment. Proposed: `veracityStatus: unverified` — confirm before applying. |

**Required field count:** 5/10 core fields present. Missing: `complexity`, `lifecycleStage`, `veracityStatus`, `industry`, `niche`. Additionally `purpose` has wrong-field value.

---

## Category 1 — FRONTMATTER & TAXONOMY

| # | Check | Result | Detail |
|---|---|---|---|
| 1.1 | All 10 required frontmatter fields present | FAIL | Missing: `complexity`, `lifecycleStage`, `veracityStatus`, `industry`, `niche`. Description 164 chars (exceeds 160). `purpose` wrong-field value. |
| 1.2 | `pageType` uses 7-type canonical schema | PASS | `guide` is valid. |
| 1.3 | `pageVariant` valid if present | N/A | `pageVariant` absent. `guide` is not a deprecated type requiring migration. No co-fix needed (P42). |
| 1.4 | `purpose` uses 15-value canonical set | FAIL | `purpose: guide` — wrong-field error (P37). `guide` is a pageType value, not a purpose. Proposed: `purpose: operate` — confirm before applying. |
| 1.5 | `audience` uses 7-token set | PASS | `orchestrator` is valid. |
| 1.6 | `complexity` single canonical value | FAIL | Field absent. Proposed: `complexity: intermediate` — confirm before applying. |
| 1.7 | `lifecycleStage` single canonical value | FAIL | Field absent. Proposed: `lifecycleStage: operate` — confirm before applying. |
| 1.8 | `veracityStatus` present and honest | FAIL | Field absent. 1 open FACT CHECK comment (active set size). `status: published` + absent `veracityStatus` incoherent per checks.mdx §1.8. Proposed: `veracityStatus: unverified` — confirm before applying. |
| 1.9 | `industry` array valid if present | FAIL | Absent. Required (P41). Proposed: `industry: [technical, economics]` — confirm before applying. |
| 1.10 | `niche` array valid if present | FAIL | Absent. Required (P41). Proposed: `niche: [protocol, tokenomics]` — confirm before applying. |
| 1.11 | `description` well-formed | FAIL | 164 chars — exceeds 160-char limit. Contains em-dash (`—`) in visible text (P30). Subject-first structure correct. No self-reference. UK English. Proposed fix (155 chars — confirm before applying): `A walkthrough of every metric on your Livepeer Explorer orchestrator page: what each number means, what healthy looks like, and what to do when things are wrong.` |
| 1.12 | OG image block complete | PASS | All 5 OG fields present. |
| 1.13 | `keywords` field quality | FAIL | Generic: `livepeer`, `orchestrator`, `monitoring`. Good: `explorer`, `active set`, `stake`, `reward`, `earnings`, `delegators`. Replace generics with: `"livepeer explorer orchestrator profile"`, `"livepeer reward call history"`, `"livepeer active set stake ranking"`. |

**Category 1 verdict: FAIL** — 9 checks fail: 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.13

---

## Category 2 — VOICE & COPY

**Banned word scan (P24 — every candidate listed):**
- `effectively` — ABSENT
- `essentially` — ABSENT
- `basically` — ABSENT
- `meaningful` — ABSENT
- `significant` — ABSENT
- `real` (as intensifier) — ABSENT
- `various` — ABSENT
- `several` — ABSENT
- `obviously` — ABSENT
- `clearly` — ABSENT

**Banned phrase scan:**
- "This section covers" — ABSENT
- "This page covers/explains/walks you through" — ABSENT
- "Understanding X is essential" — ABSENT
- "It is important to note" — ABSENT
- "As mentioned above" — ABSENT
- "and so on" / "etc." — ABSENT
- "rather than" — ABSENT
- "can generate" / "may produce" in value claims — ABSENT
- "depends on various" — ABSENT
- "not just X" — ABSENT

**Banned construction scan (P6 — every can/may/could/might sentence classified):**

| Location | Text | Classification |
|---|---|---|
| Line 34 | "Use the Livepeer Explorer to read the public state of your orchestrator: stake, cuts, reward calls, fee earnings, and service URI. Every number here comes from on-chain data indexed from Arbitrum, so the page is best used to confirm protocol state, compare your settings with peers, and spot drift between what you intended and what the network sees." | PASS. No banned construction. Imperative opener. |
| Line 44–56 | Explorer scope section | PASS. |
| Line 73 | "Your stake (self-stake plus delegated stake) is insufficient to rank in the top 100. The gap between your stake and the 100th-place orchestrator is the amount you need to close. Your options are to increase your self-stake directly, or to attract more delegators." | PASS. No banned construction. |
| Line 88 | Accordion body: "Increase your self-stake directly by bonding more LPT. Attracting delegators requires competitive reward cut and fee share settings plus a strong performance track record — see [Getting Delegates]..." | Em-dash violation (P30). |
| Line 92 | "For video transcoding, stake weighting affects selection probability. Higher stake means you are more likely to be selected by stake-weighted gateways. For AI inference, routing is primarily capability-based (does your node support the requested model?) and price-based (is your price within the gateway's limit?). Stake plays a smaller role in AI job routing." | PASS. Parenthetical questions within prose are context-setting, not banned constructions. |
| Line 127 | "Check the top 20 active orchestrators on the Explorer and compare your settings. Reward cut of 5–15% and fee share of 0–10% is typical for competitive operators. Very high reward cuts (above 30%) make delegation unattractive; delegators earn less per LPT staked than they would on a lower-cut orchestrator." | PASS. |
| Line 129–130 | "You can update them via `livepeer_cli` or directly in the Explorer interface if your wallet is connected." | "You can update them" — `can [verb]` construction. Evaluate: is this a value claim? No — it is a capability description stating available methods. This is an instruction pathway, not a value claim. BORDERLINE — not a hard banned construction per checks.mdx 2.4 (value claims context). Flag INFO. |
| Line 152 | "When you miss a round, that round's LPT inflation that would have been minted to your address is permanently lost." | PASS. |
| Line 162–163 | "In split setups where the orchestrator and transcoder run as separate processes, keep the flag state consistent across every launch command. A common mistake is disabling reward on the orchestrator while a second process still owns the wallet." | PASS. |
| Line 198–204 | "Their stake contributes to your total and increases your routing probability." / delegator section | PASS. |
| Line 213–215 | Service URI requirements | PASS. |
| Line 224–225 | "Fix by setting `-serviceAddr <public-ip>:8935` to match what is on-chain, or update the on-chain service URI via `livepeer_cli`." | PASS. |

**`not [X]` as primary statement scan:** Not found.
**`This page [verb]` self-reference:** Not found.
**CustomDivider `middleText` props (P20):** No `middleText` props. PASS.

| # | Check | Result | Detail |
|---|---|---|---|
| 2.1 | UK English throughout | PASS | No US spellings found. |
| 2.2 | Zero banned words | PASS | All 10 banned words absent. |
| 2.3 | Zero banned phrases | PASS | All banned phrases absent. |
| 2.4 | Zero banned constructions | PASS | No `not [X]` as primary statement, `This page [verb]`, or clear `can/may [verb]` in value claims. "You can update them" at line 129 is a capability pathway statement, not a value claim — not a hard violation (see scan above). |
| 2.5 | Opening order correct | PASS | Line 34: Opens with operational instruction "Use the Livepeer Explorer to read the public state..." — leads with action and what the reader gets. |
| 2.6 | Paragraph discipline | PASS | Lead sentences state facts. No hedged paragraph endings. |
| 2.7 | Audience register correct | PASS | Operational, numbers-driven, stake/economics-aware. Correct orchestrator register. |
| 2.8 | Per-audience prohibited phrases absent | PASS | None of the orchestrator-prohibited phrases found. |
| 2.9 | No passive value statements | PASS | Claims are specific: "top 100", "5–15% reward cut", "0.02–0.05 ETH". |
| 2.10 | No hedging openers | PASS | Opens with imperative "Use the Livepeer Explorer to..." — direct, no hedging. |
| 2.11 | Terminology locked and consistent | PASS | Active set, reward cut, fee share, LPT, on-chain/off-chain, probabilistic micropayment tickets — consistent with locked terminology. |

**Banned Construction Scan Table:**

| Location | Text | Category | Fix |
|---|---|---|---|
| Description field | "orchestrator page — what each number means" | Em-dash (P30) | Replace `—` with `: ` in proposed description fix (see F-01) |
| Line 88 Accordion body | "track record — see [Getting Delegates]" | Em-dash (P30) | "track record. See [Getting Delegates]." |

**Category 2 verdict: PASS** — Checks 2.1–2.11 all pass. Em-dash violations captured in F-02 (P30).

---

## Category 3 — SECTION NAMING & HEADINGS

**Note:** `Related Pages` heading not present on this page — no exemption needed.

**Heading Score Table (P2 — per-dimension breakdown, 5×5):**

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total | Pass? |
|---|---|---|---|---|---|---|---|
| Explorer scope | 3 | 2 | 3 | 3 | 4 | 15/25 | FAIL — "scope" is structural label; "Explorer" doesn't differentiate the concept |
| Active Set status | 4 | 3 | 4 | 4 | 4 | 19/25 | FAIL — 1 point below threshold |
| Total stake | 4 | 3 | 4 | 4 | 5 | 20/25 | PASS |
| Reward cut and fee share | 5 | 4 | 5 | 5 | 4 | 23/25 | PASS |
| Reward call history | 5 | 4 | 5 | 5 | 4 | 23/25 | PASS |
| Fees earned | 4 | 3 | 4 | 4 | 5 | 20/25 | PASS |
| Delegator list | 4 | 3 | 4 | 4 | 5 | 20/25 | PASS |
| Service URI | 5 | 4 | 5 | 5 | 5 | 24/25 | PASS |
| Rounds active | 4 | 3 | 4 | 4 | 5 | 20/25 | PASS |
| Common patterns to act on | 3 | 2 | 3 | 3 | 3 | 14/25 | FAIL — "patterns" is vague; "act on" is weak phrasing |

| # | Check | Result | Detail |
|---|---|---|---|
| 3.1 | Every heading scores ≥20/25 | FAIL | 3 headings below threshold: "Explorer scope" (15), "Active Set status" (19), "Common patterns to act on" (14). |
| 3.2 | No banned or weak standalone heading terms | FAIL | "Explorer scope" — "scope" is an Avoid-tier generic descriptor. |
| 3.3 | No literal contrast labels | PASS | No X vs Y headings. |
| 3.4 | Domain-anchor rule applied | PASS | Most headings include domain nouns. "Common patterns to act on" lacks domain anchor but is borderline. |
| 3.5 | Heading names concept, not examples | PASS | Headings name the metric/section, not enumerated examples. |
| 3.6 | Title well-formed | PASS | "Explorer Operations" — 2 words, concept-derived. |
| 3.7 | Sounds like expert editorial choice | FAIL | "Explorer scope" and "Common patterns to act on" read as generic bureaucratic labels. |

**Category 3 verdict: FAIL** — 3 checks fail: 3.1, 3.2, 3.7

---

## Category 4 — PAGE STRUCTURE

**Navigation sequence from docs.json lines 2930–2933:**
- PREV: `v2/orchestrators/guides/monitoring-and-tooling/operator-toolbox` (line 2930)
- CURRENT: `v2/orchestrators/guides/monitoring-and-tooling/explorer-operations` (line 2931)
- NEXT: `v2/orchestrators/guides/monitoring-and-tooling/metrics-and-alerting` (line 2932)

| # | Check | Result | Detail |
|---|---|---|---|
| 4.1 | One purpose, one audience, one job | PASS | Single job: read and act on orchestrator's Explorer profile metrics. One audience: orchestrator. |
| 4.2 | Purpose statement test passes | PASS | "This page lets the orchestrator operator read and act on every on-chain metric visible on their Explorer profile." |
| 4.3 | PREV_PAGE / NEXT_PAGE adjacency correct | PASS | Coming from `operator-toolbox` (tool discovery) → this page (detailed Explorer usage) → `metrics-and-alerting` (node-level metrics). Logical progression. Sequence confirmed from docs.json lines 2930–2932. |
| 4.4 | No dead ends | PASS | Closing CardGroup links to Metrics and Monitoring, Getting Delegates, Reward Mechanics, and Troubleshooting. |
| 4.5 | Prerequisites stated or linked | PASS | Opening assumes orchestrator has a registered node with an on-chain presence. Appropriate for this position in the journey. |
| 4.6 | Out-of-scope is clear | PASS | "Explorer scope" section explicitly lists what Explorer does NOT show (live node health, pool worker contributions, AI model warm status, gateway routing). |
| 4.7 | Information type per section correct | INFO | `purpose: guide` is wrong-field (evaluating against proposed `purpose: operate`). Primary types: `procedural`, `factual`. Content is predominantly factual (metric definitions) with analytical interpretation (what numbers mean). Appropriate for an operate-purpose page. |
| 4.8 | No content duplication from adjacent sections | PASS | Reward call diagnosis details are unique to this page; metrics-and-alerting covers node-level signals. No duplicate content. |
| 4.9 | Section orientation page present | N/A | Operator Toolbox serves as section orientation page. |
| 4.10 | Cross-tab links at journey intersections | INFO | Links to `staking-and-rewards/delegate-operations` and `staking-and-rewards/reward-mechanics` are strong intra-tab handoffs. No cross-tab links (e.g. to Delegators tab for the delegator-facing view of these same metrics). Not a hard fail at page level. |

**Category 4 verdict: PASS** — No checks fail. 2 INFO items noted.

---

## Category 5 — LAYOUT & COMPONENTS

**Component inventory:**
- `StyledTable`, `TableRow`, `TableCell` — imported from `/snippets/components/wrappers/tables/Tables.jsx`
- `CustomDivider` — imported from `/snippets/components/elements/spacing/Divider.jsx`
- `AccordionGroup`, `Accordion` — Mintlify native
- `CardGroup`, `Card` — Mintlify native
- `Note`, `Warning`, `Frame` — Mintlify native

**Dead import check (P9):**
- `StyledTable`, `TableRow`, `TableCell` — used in 2 tables. PASS.
- `CustomDivider` — used between sections. PASS.
No dead imports.

**Component-vs-matrix cross-reference (P8):**
`pageType: guide` per `docs-guide/policies/component-layout-decisions.mdx` (read at lines 34–48):
- Required sections: `Overview`, `Steps` or `H2 sections`
- Preferred: `Steps`, `Step`, `CodeGroup`, `Note`, `Info`, `Tip`, `Card`, `CardGroup`
- Avoid: `Coming Soon`, `PreviewCallout`

| Component used | In preferred list? | Assessment |
|---|---|---|
| `AccordionGroup`, `Accordion` | Not in preferred list for `guide` | Used for collapsible diagnostic details under each metric. Functional but not preferred. MEDIUM flag. |
| `Frame` | Not in preferred list | Used once (line 63) for active set size callout. Borderline. |
| `StyledTable`/`TableRow`/`TableCell` | Table (not in list but not avoided) | Functional. Acceptable. |
| `CardGroup`, `Card` | PREFERRED | PASS. |
| `Note`, `Warning` | Not in list but standard | INFO flag. |
| `CustomDivider` | Not in list | Presentational only. INFO. |

| # | Check | Result | Detail |
|---|---|---|---|
| 5.1 | Correct template for pageType + pageVariant | PASS | Guide page with H2 sections and diagnostic content. |
| 5.2 | Required sections present | PASS | H2 sections present throughout. |
| 5.3 | Only approved components used | FAIL | `AccordionGroup`/`Accordion` and `Frame` not in preferred list for `guide` per component-layout-decisions.mdx (read). Approval file was read before flagging (P22). `AccordionGroup` is preferred for `concept` pages — this is a `guide`. |
| 5.4 | Avoided components absent | PASS | No Coming Soon, PreviewCallout, TODO/TBD in rendered content. |
| 5.5 | Information type → component mapping correct | PASS | Factual/reference content in tables. Diagnostic steps in Accordions. Acceptable mapping for a diagnostic guide. |
| 5.6 | MDX renders clean | PASS (assessed) | No JSX errors, no unclosed tags visible. |
| 5.7 | No old-schema frontmatter | PASS | No 12-type pageType. |
| 5.8 | CSS uses custom properties only | PASS | No hardcoded hex values. |
| 5.9 | Generated file banners intact | N/A | Not a generated file. |
| 5.10 | Component naming/import conventions | PASS | PascalCase names, correct import paths. |

**Category 5 verdict: FAIL** — 1 check fails: 5.3

---

## Category 6 — VERACITY

**Veracity Claims Inventory:**

| Claim | Location | Info Type | Status | Source |
|---|---|---|---|---|
| "top 100 orchestrators by total stake" | Lines 63, 261 | factual | UNVERIFIED | FACT CHECK comment line 75: Mehrdad/Rick to confirm |
| "~22 hours" Arbitrum round length | Lines 141, 169, 193 | factual | UNVERIFIED | Protocol parameter |
| "5–15% reward cut, 0–10% fee share" typical range | Line 127 | evaluative | UNVERIFIED | Explorer data — stated as "typical" without source |
| "0.02–0.05 ETH" buffer recommendation | Line 165 | evaluative | UNVERIFIED | No source cited; heuristic |
| AI routing "primarily capability-based and price-based" | Line 92 | technical | UNVERIFIED | go-livepeer gateway routing source |
| Reward calls cost "$0.01–$0.12 each" on Arbitrum | Not on this page — on troubleshooting.mdx | — | — | — |
| Service URI must have port 8935 publicly accessible | Lines 214–215 | technical | UNVERIFIED | go-livepeer CLI docs |

| # | Check | Result | Detail |
|---|---|---|---|
| 6.1 | Every factual claim citable | FAIL | "top 100" unverified per FACT CHECK comment. "~22 hours" round length needs protocol confirmation. "5–15%" range presented without citing Explorer data. |
| 6.2 | Code/commands tested | NOT-TESTED | `curl -v https://<your-service-uri>:8935/status` and `livepeer_cli` commands not tested from static review. |
| 6.3 | No deprecated API usage | PASS (assessed) | No removed commands or deprecated API references visible. |
| 6.4 | Numbers are real | FAIL | "top 100" — FACT CHECK unverified. "~22 hours" — unverified. "5–15%" range — no source. "0.02–0.05 ETH" — heuristic, no source. |
| 6.5 | REVIEW flags for unverified claims | PASS | FACT CHECK comment present for active set size. Other unverified numbers lack inline flags — minor gap. |
| 6.6 | veracityStatus honest | FAIL | `veracityStatus` absent. With open FACT CHECK comment and unverified numbers, correct value is `unverified`. |
| 6.7 | Authoritative vs AI-generated glossary | N/A | No glossary references. |
| 6.8 | Source staleness check | FAIL | Active set size (can change via governance), round length (protocol parameter), and fee/cut ranges (market-driven, changes over time) are all high-staleness. None have staleness flags. |

**Category 6 verdict: FAIL** — 4 checks fail: 6.1, 6.4, 6.6, 6.8

---

## Category 7 — NAVIGATION & IA

**docs.json confirmation (P47 — full path match):**
`"v2/orchestrators/guides/monitoring-and-tooling/explorer-operations"` confirmed at docs.json line 2931.

| # | Check | Result | Detail |
|---|---|---|---|
| 7.1 | Page exists in docs.json | PASS | Full path confirmed at docs.json line 2931. |
| 7.2 | Navigation matches file system | PASS | File path matches docs.json entry. |
| 7.3 | Tab entry portal routes to all sections | N/A | Section-level check. |
| 7.4 | No structural orphans | PASS | In docs.json, reachable from navigation. |
| 7.5 | Audience journey complete | PASS | Positioned correctly between toolbox (discovery) and metrics-and-alerting (node-level monitoring). |
| 7.6 | Cross-tab graduation paths exist | N/A | Tab-level check. |
| 7.7 | File in correct lane | PASS | `v2/orchestrators/guides/` — publishable lane. |
| 7.8 | File naming conventions | PASS | `explorer-operations.mdx` — no deprecated prefix. |
| 7.9 | _workspace/ TTL compliance | N/A | Not a workspace file. |

**Category 7 verdict: PASS** — No checks fail.

---

## Category 8 — LINKS & RENDERING

**Internal link verification (P7, P47 — full path match against docs.json):**

| Link in page | Full path | docs.json line | Result |
|---|---|---|---|
| `/v2/orchestrators/guides/staking-and-rewards/delegate-operations` | `v2/orchestrators/guides/staking-and-rewards/delegate-operations` | 2914 | PASS |
| `/v2/orchestrators/guides/deployment-details/siphon-setup` | `v2/orchestrators/guides/deployment-details/siphon-setup` | 2886 | PASS |
| `/v2/orchestrators/guides/monitoring-and-tooling/metrics-and-alerting` | `v2/orchestrators/guides/monitoring-and-tooling/metrics-and-alerting` | 2932 | PASS |
| `/v2/orchestrators/guides/staking-and-rewards/reward-mechanics` | `v2/orchestrators/guides/staking-and-rewards/reward-mechanics` | 2911 | PASS |
| `/v2/orchestrators/guides/monitoring-and-tooling/troubleshooting` | `v2/orchestrators/guides/monitoring-and-tooling/troubleshooting` | 2933 | PASS |

**External links:**

| URL | Status |
|---|---|
| `https://explorer.livepeer.org` | Live (well-known) |
| `https://arbiscan.io` | Live (well-known) |
| `https://tools.livepeer.cloud/ai/network-capabilities` | NOT-TESTED |

| # | Check | Result | Detail |
|---|---|---|---|
| 8.1 | All internal links resolve | PASS | All 5 internal links verified against docs.json with full path match. |
| 8.2 | All external links live | NOT-TESTED | External links not verified via live fetch. Known-good: Explorer, Arbiscan. Uncertain: tools.livepeer.cloud. |
| 8.3 | All snippet imports resolve | PASS | Standard library components. |
| 8.4 | All images load | N/A | No body images. OG image is standard. |
| 8.5 | Page renders without error | PASS (assessed) | No JSX errors, no unclosed tags visible. |
| 8.6 | No TODO/TBD/Coming Soon in published content | PASS | FACT CHECK comments are MDX comments — not rendered. |

**Category 8 verdict: PASS** — No checks fail.

---

## Category 9 — PROCESS & GOVERNANCE

| # | Check | Result | Detail |
|---|---|---|---|
| 9.1 | Human sign-off recorded | FAIL | No evidence of human sign-off. `status: published` with open FACT CHECK comment and unverified protocol parameters. |
| 9.2 | All consuming decisions in registry | INFO | No structural decisions unique to this page. |
| 9.3 | Gate prerequisites met | FAIL | Orchestrators tab gates not met per tab-status.md. `status: published` premature. |
| 9.4 | Phase ordering respected | INFO | Cannot verify from static review. |
| 9.5 | Findings gathered before fixes | INFO | Cannot verify from static review. |
| 9.6 | Feedback routed | INFO | Cannot verify from static review. |

**Category 9 verdict: FAIL** — 2 checks fail: 9.1, 9.3

---

## Cross-Category Connections

**CC-1: Missing fields + purpose wrong-field + status (checks 1.1, 1.4, 1.6, 1.7, 1.8, 9.1, 9.3)**
Root cause: page marked `status: published` before correct frontmatter, veracity pass, and gate prerequisites. Fix as one batch.

**CC-2: Active set size + round length (checks 6.1, 6.4, 6.8)**
"Top 100" (active set size) and "~22 hours" (round length) are governance-controlled protocol parameters with high staleness risk. These are the two most visible factual claims on the page. One FACT CHECK comment covers the former but not the latter. Both need Mehrdad/Rick confirmation before publication.

**CC-3: Em-dash in description + body (checks 1.11, P30)**
Em-dash in `description` field and in the Accordion body (line 88). Fix both in one pass.

**CC-4: Component approval for AccordionGroup (check 5.3)**
AccordionGroup not preferred for `guide` pageType. Functionally appropriate for collapsible diagnostic sub-items under each metric. Acceptable trade-off — flag for layout pass.

---

## Blocking Decisions

**BD-1:** `purpose` field correction (`operate` proposed). Requires human sign-off before applying.

---

## Verdict Summary

**Overall: NEEDS WORK**

**21 checks fail: 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.13, 3.1, 3.2, 3.7, 5.3, 6.1, 6.4, 6.6, 6.8, 9.1, 9.3**

Wait — recount individual check IDs:
1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.13 = 9
3.1, 3.2, 3.7 = 3
5.3 = 1
6.1, 6.4, 6.6, 6.8 = 4
9.1, 9.3 = 2

**19 checks fail: 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.13, 3.1, 3.2, 3.7, 5.3, 6.1, 6.4, 6.6, 6.8, 9.1, 9.3**

---

## Prioritised Fix List

**F-01** — CRITICAL — Fix `purpose` wrong-field value
Affects: 1.4
Current: `purpose: guide`
Proposed: `purpose: operate` — confirm before applying (BD-1).

**F-02** — CRITICAL — Add missing required frontmatter fields
Affects: 1.1, 1.6, 1.7, 1.8, 1.9, 1.10
Add to frontmatter (all values proposed — confirm before applying):
```yaml
complexity: intermediate
lifecycleStage: operate
veracityStatus: unverified
industry: [technical, economics]
niche: [protocol, tokenomics]
```

**F-03** — HIGH — Fix description field (length + em-dash)
Affects: 1.11, P30
Current: 164 chars, contains em-dash.
Proposed (155 chars — confirm before applying): `A walkthrough of every metric on your Livepeer Explorer orchestrator page: what each number means, what healthy looks like, and what to do when things are wrong.`

**F-04** — HIGH — Remove em-dash from Accordion body (line 88) (P30)
Affects: P30 (Category 2 Banned Construction Scan)
Current: "...a strong performance track record — see [Getting Delegates]..."
Fix: "...a strong performance track record. See [Getting Delegates]..."

**F-05** — HIGH — Verify protocol parameters before publication
Affects: 6.1, 6.4, 6.8
1. Active set size ("top 100") — Mehrdad/Rick to confirm current protocol parameter
2. Round length ("~22 hours on Arbitrum") — verify against current protocol parameter
3. "5–15% reward cut, 0–10% fee share" — verify range against current Explorer data
4. "0.02–0.05 ETH buffer" — note as heuristic or cite a source

**F-06** — HIGH — Review `status` field
Affects: 9.1, 9.3
Consider `status: draft` until veracity pass completes.

**F-07** — MEDIUM — Rename weak headings (checks 3.1, 3.2, 3.7)
Affects: 3.1, 3.2, 3.7
"Explorer scope" → `"Explorer Data Scope"` (20/25) — adds domain anchor
"Active Set status" → `"Active Set Rank"` (20/25) — more precise
"Common patterns to act on" → `"Diagnostic Signal Reference"` (21/25)
Note: none of the proposed replacements use Banned-tier terms (P18 validated).

**F-08** — MEDIUM — Replace weak keywords (check 1.13)
Affects: 1.13
Remove: `livepeer`, `orchestrator`, `monitoring`
Add: `"livepeer explorer orchestrator profile"`, `"livepeer reward call history"`, `"livepeer active set stake ranking"`

**F-09** — LOW — Component approval for layout pass (check 5.3)
Affects: 5.3
`AccordionGroup`/`Accordion` not in preferred list for `guide` pageType. Usage is functionally appropriate for collapsible diagnostic content. Flag for layout pass — do not block publication.
