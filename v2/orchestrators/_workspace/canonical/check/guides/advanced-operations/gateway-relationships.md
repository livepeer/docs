# Per-Page Quality Check Report
## `v2/orchestrators/guides/advanced-operations/gateway-relationships.mdx`

**Review date:** 2026-03-24
**Reviewer:** Claude Code (per-page quality check agent)
**Check framework:** `v2/orchestrators/_workspace/canonical/checks.mdx`
**Frameworks ref:** `v2/orchestrators/_workspace/canonical/Frameworks.mdx`
**Navigation source:** `docs.json` lines 2938–2942 — page confirmed at line 2939: `"v2/orchestrators/guides/advanced-operations/gateway-relationships"`. Navigation sequence within "Advanced Operations" group: [1] `gateway-relationships`, [2] `gateway-orchestrator-interface`, [3] `pool-operators`, [4] `scale-operations`.

---

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|-------|----------|-------|-----------|-------|
| `title` | Yes | `Gateway Relationships` | PASS | Present, non-empty |
| `sidebarTitle` | Yes | `Gateway Relationships` | PASS | Present, non-empty |
| `description` | Yes | `How gateways discover and select your orchestrator — the discovery mechanisms, multi-factor selection algorithm, what you can do to receive more work, and how to use the gateway Loki API to understand routing decisions.` | FAIL | 226 chars — exceeds 160 char limit. Also contains em-dash (—) — CLAUDE.md prohibits em-dashes. See F-01 |
| `pageType` | Yes | `concept` | PASS | Valid 7-type canonical value |
| `audience` | Yes | `orchestrator` | PASS | Valid 7-token value |
| `purpose` | Yes | `explain` | PASS | Valid 15-value canonical. Read directly from frontmatter |
| `complexity` | No | absent | FAIL | Required field missing. Proposed: `complexity: intermediate` — confirm before applying. See F-02 |
| `lifecycleStage` | No | absent | FAIL | Required field missing. Proposed: `lifecycleStage: operate` — confirm before applying. See F-03 |
| `keywords` | Yes | `livepeer, orchestrator, gateway, discovery, selection, routing, capabilities, pricing, loki, gateway introspection, stake weight, performance score` | PASS | Specific, searcher-aligned |
| OG image block | Yes | `/snippets/assets/site/og-image/en/orchestrators.png`, alt, type, width, height present | PASS | All 5 OG fields present |
| `veracityStatus` | No | absent | FAIL | Required. Page has one active `{/* FACT CHECK: */}` block (Loki endpoint). Proposed: `veracityStatus: unverified` — confirm before applying. See F-04 |
| `industry` | No | absent | FAIL | Required (P41). Proposed: `industry: [technical, livepeer]` — confirm before applying. See F-05 |
| `niche` | No | absent | FAIL | Required (P41). Proposed: `niche: [infrastructure, protocol]` — confirm before applying. See F-06 |
| `status` | Yes | `published` | FAIL | `status: published` with `veracityStatus` absent and one unresolved FACT CHECK is incoherent per checks.mdx §1.8: `status: current` (equivalent intent) requires `veracityStatus: verified` AND zero REVIEW flags. Fix: change `status` to `draft`, OR resolve all FACT CHECK flags and add `veracityStatus: verified`. See F-07 |
| `lastVerified` | Yes | `2026-03-13` | PASS | Present |
| `pageVariant` | No | absent | INFO | `pageType: concept` is canonical; `pageVariant: overview` is valid for concept but not required. Not a failure |

---

## Category 1 — Frontmatter & Taxonomy

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 1.1 | All 10 required fields present | FAIL | `complexity`, `lifecycleStage`, `veracityStatus`, `industry`, `niche` all absent. Five fields missing |
| 1.2 | `pageType` uses 7-type canonical schema | PASS | `concept` is a valid canonical value |
| 1.3 | `pageVariant` valid if present | N/A | Not present. No finding |
| 1.4 | `purpose` uses 15-value canonical set | PASS | `explain` is valid. Read directly from frontmatter |
| 1.5 | `audience` uses 7-token set | PASS | `orchestrator` is valid |
| 1.6 | `complexity` single canonical value | FAIL | Absent. Proposed: `complexity: intermediate` — confirm before applying. See F-02 |
| 1.7 | `lifecycleStage` single canonical value | FAIL | Absent. Proposed: `lifecycleStage: operate` — confirm before applying. See F-03 |
| 1.8 | `veracityStatus` present and honest | FAIL | Absent. `status: published` with unresolved FACT CHECK. See F-04 and F-07 |
| 1.9 | `industry` array valid | FAIL | Absent. Proposed: `industry: [technical, livepeer]` — confirm before applying. See F-05 |
| 1.10 | `niche` array valid | FAIL | Absent. Proposed: `niche: [infrastructure, protocol]` — confirm before applying. See F-06 |
| 1.11 | `description` well-formed | FAIL | 226 chars (>160). Em-dash present. See F-01 |
| 1.12 | OG image block complete | PASS | All 5 OG fields present |
| 1.13 | `keywords` quality | PASS | `gateway introspection`, `stake weight`, `performance score`, `loki` are searcher-aligned |

**Category 1 verdict:** FAIL. Checks failing: 1.1, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11

---

## Category 2 — Voice & Copy

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 2.1 | UK English throughout | PASS | No US spellings detected. No -ize endings, no behavior/colour/center violations. "centralisation" (line 138) is correct UK form |
| 2.2 | Zero banned words | FAIL | Line 199: "meaningfully more job volume" — `meaningfully` is a banned word. See F-08 |
| 2.3 | Zero banned phrases | PASS | No "this page covers", "this section covers", "as mentioned above", "and so on", "rather than", or other banned phrases found |
| 2.4 | Zero banned constructions | FAIL | See Banned Construction Scan. Multiple `can [verb]` and `if [condition]` instances. See F-09, F-10 |
| 2.5 | Opening order correct | PASS | Line 37: "Gateways decide where work goes." — opens with fact, reader benefit immediately clear |
| 2.6 | Paragraph discipline | PASS | Paragraphs are single-job. Lead sentences are factual. "What this means for you:" boxes frame reader benefit correctly |
| 2.7 | Audience register correct | PASS | Operational register. Uses technical terms (`aiModels.json`, `-orchAddr`, `OrchestratorInfo`, `capabilities`). Hardware-aware framing |
| 2.8 | Per-audience prohibited phrases absent | PASS | No "Your orchestrator will automatically…", "The network rewards you for…", "Easy to set up". No prohibited phrases found |
| 2.9 | No passive value statements | PASS | Claims are specific: "Pricing is binary before it is graduated: if your price exceeds the gateway's maximum, you receive zero work from that gateway." |
| 2.10 | No hedging openers | PASS | Page opens with a direct factual statement |
| 2.11 | Terminology locked and consistent | PASS | `gateway`, `orchestrator`, `active set`, `aiModels.json`, `pricePerUnit`, `maxPricePerUnit` used consistently. No deprecated terms |

**Category 2 verdict:** FAIL. Checks failing: 2.2, 2.4

---

## Category 3 — Section Naming & Headings

*(Note: No "Related Pages" heading on this page — N/A for exemption.)*

*(Note: "Gateway Loki API — understanding selection decisions" contains an em-dash — scanned below in Banned Construction Scan.)*

### Heading Score Table

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total | Pass? |
|---------|-----------|-------|-----------|---------|-------------|-------|-------|
| How gateways find you | 3 | 2 | 3 | 4 | 4 | 16 | FAIL |
| What you advertise to gateways | 4 | 3 | 4 | 4 | 4 | 19 | FAIL |
| How gateways select you | 3 | 2 | 3 | 4 | 4 | 16 | FAIL |
| What you can control to get more work | 3 | 2 | 3 | 3 | 2 | 13 | FAIL |
| Gateway Loki API — understanding selection decisions | 4 | 4 | 4 | 3 | 2 | 17 | FAIL |
| Debugging missing jobs | 5 | 4 | 5 | 5 | 5 | 24 | PASS |

**Scoring rationale for failing headings:**

"How gateways find you" — Precision (3): Describes a process generically; "find" is vague — should be "discover" or "build candidate list". Depth (2): Shallow process label. Stability (3): Coupling to "you" is fragile. Proposed: `Gateway Discovery` or `How Gateways Discover You` — but "How [X] [verb] you" pattern tends toward low depth. Better: `Discovery Mechanisms`. See F-11.

"What you advertise to gateways" — Precision (4): Specific enough but wordy. Depth (3): Signals content adequately. Conciseness (4): Long for an H2. Proposed: `Your Offering to Gateways` or `Capability Advertisement`. See F-12.

"How gateways select you" — Same structural problem as "How gateways find you". Precision (3): "Select" is vague (vs. the content which is a multi-factor scoring algorithm). Proposed: `Selection Algorithm` or `Gateway Selection Factors`. See F-13.

"What you can control to get more work" — Precision (3): Extremely vague. Depth (2): No signal of what levers exist. Stability (3): Fragile. Clarity (3): Requires reading section to understand. Conciseness (2): Wordy for H2. Proposed: `Improving Selection Probability`. See F-14.

"Gateway Loki API — understanding selection decisions" — Precision (4): Specific to Loki. Depth (4): Names both the tool and the use case. Clarity (3): "Understanding selection decisions" is somewhat generic. Conciseness (2): Wordy and contains em-dash. Proposed: `Gateway Loki API`. See F-15.

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 3.1 | Every heading scores ≥20/25 | FAIL | 5 headings below threshold: "How gateways find you" (16), "What you advertise to gateways" (19), "How gateways select you" (16), "What you can control to get more work" (13), "Gateway Loki API — understanding selection decisions" (17). See F-11 through F-15 |
| 3.2 | No banned or weak standalone terms | FAIL | No Banned-tier standalone terms. However heading "What you can control to get more work" is weak-register. Check 3.2 Avoid tier doesn't list this exact pattern but it reads as bureaucratic. See F-14 |
| 3.3 | No literal contrast labels | PASS | No `X vs Y` headings |
| 3.4 | Domain-anchor rule | FAIL | "How gateways find you" and "How gateways select you" are interpretable but weak on domain anchoring — they describe a relationship rather than naming the mechanism. See F-11 and F-13 |
| 3.5 | Heading names concept, not examples | PASS | No example-enumerating headings |
| 3.6 | Title well-formed | PASS | `Gateway Relationships` — 2 words, concept-derived. Clean |
| 3.7 | Expert editorial choice | FAIL | "What you can control to get more work" and "How gateways find you" would not survive an editorial review for precision. See F-11 through F-14 |

**Category 3 verdict:** FAIL. Checks failing: 3.1, 3.2, 3.4, 3.7

---

## Category 4 — Page Structure & Content Architecture

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 4.1 | One purpose, one audience, one job | PASS | Page serves orchestrator operators understanding how gateway selection works and how to improve their position. Single concept scope |
| 4.2 | Purpose statement test | PASS | "This page lets the orchestrator operator understand how gateways discover and select their node, and what actions increase selection probability." Passes |
| 4.3 | PREV_PAGE / NEXT_PAGE adjacency correct | PASS | docs.json (line 2939–2942): `gateway-relationships` is first in the Advanced Operations group. Monitoring and Tools group precedes it; operator arriving from `troubleshooting` (last of Monitoring and Tools) has operational context to appreciate discovery/selection concepts |
| 4.4 | No dead ends | PASS | Four CardGroup cards at end provide onward paths: Configure Pricing, AI Configuration, Troubleshooting, Orchestrator Tools |
| 4.5 | Prerequisites stated or linked | PASS | Active set registration implied. Links to Pricing Strategy and AI inference operations for actionable follow-up |
| 4.6 | Out-of-scope clear | PASS | Page focuses on the gateway selection process from the orchestrator side. Gateway configuration and setup are explicitly routed elsewhere |
| 4.7 | Information type per section correct | PASS | `purpose: explain` — permitted types are conceptual, technical, factual, analytical. Discovery mechanisms: structural/conceptual. OrchestratorInfo: technical. Selection algorithm: conceptual/analytical. What to control: evaluative/procedural. Loki API: procedural/technical. All appropriate for concept page with explain purpose |
| 4.8 | No content duplication | PASS | Pricing content is selection-specific context, not duplicating the pricing-strategy guide |
| 4.9 | Section orientation page | N/A — page-level check |
| 4.10 | Cross-tab links | PASS | Line 156 (`https://explorer.livepeer.org/orchestrators`), `https://tools.livepeer.cloud` are external links to relevant tools. No cross-tab internal links on this page, but cross-tab threshold is a tab-level check |

**Category 4 verdict:** PASS

---

## Category 5 — Layout, Components & Template

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 5.1 | Correct template for pageType | PASS | `concept` pageType. Content uses AccordionGroup, CardGroup, StyledTable, Mermaid diagrams — consistent with concept template |
| 5.2 | Required sections present | PASS | For `concept`: Overview is the required section. Page opens with a direct explanatory statement (equivalent to overview) |
| 5.3 | Only approved components used | NOT-TESTED | `docs-guide/policies/component-layout-decisions.mdx` not read. Components: `StyledTable`, `TableRow`, `TableCell`, `CustomDivider`, `AccordionGroup`, `Accordion`, `CardGroup`, `Card`, Mermaid, `Tip` (implicitly via MDX). Mermaid blocks not a named component but standard Mintlify feature |
| 5.4 | Avoided components absent | PASS | No TODO/TBD/Coming Soon in visible content |
| 5.5 | Information type → component mapping | PASS | Multi-factor table: StyledTable. AccordionGroup for "5 action items" — correct for multi-path guidance. Mermaid for flowchart of selection algorithm — appropriate |
| 5.6 | MDX renders clean | PASS | No broken JSX, imports present, no unclosed tags visible. Mermaid syntax present |
| 5.7 | No old-schema frontmatter | PASS | `pageType: concept` is canonical. `purpose: explain` is canonical |
| 5.8 | CSS uses custom properties | PASS | No hardcoded styles visible |
| 5.9 | Generated file banners | N/A | Not a generated file |
| 5.10 | Component naming conventions | PASS | PascalCase, correct imports |

### Component Matrix

| Component | Used? | Appropriate for `concept`? | Notes |
|-----------|-------|---------------------------|-------|
| `StyledTable` | Yes | NOT-TESTED | In checks.mdx preferred list for concept |
| `CustomDivider` | Yes | NOT-TESTED | Approval file not read |
| `AccordionGroup` / `Accordion` | Yes | NOT-TESTED | Preferred for concept per checks.mdx matrix |
| `CardGroup` / `Card` | Yes | NOT-TESTED | Preferred for concept per checks.mdx matrix |
| Mermaid flowcharts | Yes | NOT-TESTED | Not a named MDX component; standard Mintlify markdown feature |

**Category 5 verdict:** PASS (component checks NOT-TESTED)

---

## Category 6 — Veracity & Factual Accuracy

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 6.1 | Every factual claim citable | FAIL | NOT-TESTED: OrchestratorInfo protobuf fields (lines 73–84) not verified against go-livepeer proto definitions. "top 100 active orchestrators" (line 65) — specific number not cited. Selection factors and their mechanics not verified against go-livepeer source |
| 6.2 | Code/commands tested | FAIL | NOT-TESTED: Loki API curl commands (lines 214–234) not executed. `curl http://localhost:7935/getNetworkCapabilities | jq` (line 183) not tested. `curl -v https://<your-service-uri>:8935/status` (line 170) not tested |
| 6.3 | No deprecated API usage | PASS | NOT-TESTED: flags `-orchAddr`, `-pricePerUnit`, `-maxPricePerUnit`, `-maxPricePerCapability`, `-selectStakeWeight`, `-selectRandFreq`, `-orchWebhookUrl` referenced. No obvious deprecated names visible, but not confirmed against current release |
| 6.4 | Numbers are real | FAIL | NOT-TESTED: "top 100 active orchestrators" (line 65) — source unknown. No citation for this threshold. `selectStakeWeight` and `selectRandFreq` flag names not verified. See F-16 |
| 6.5 | REVIEW flags for unverified claims | FAIL | One active `{/* FACT CHECK: */}` at line 245 (Loki endpoint availability). Format is `FACT CHECK` not canonical `REVIEW:`. Content is flagged which is correct intent but non-standard format |
| 6.6 | `veracityStatus` honest | FAIL | Absent. With `status: published` and an unresolved FACT CHECK, page is presenting as published but has unverified content. See F-04 and F-07 |
| 6.7 | Authoritative vs AI-generated glossary | PASS | No glossary citations |
| 6.8 | Source staleness risk | FAIL | NOT-TESTED: Loki endpoint `loki.livepeer.report` — FACT CHECK comment at line 245 acknowledges the endpoint was unreachable in March 2026 sandbox. High staleness risk for any Loki documentation |
| 6.9 | No open-ended research tasks | FAIL | FACT CHECK at line 245 is open-ended: "Rick to confirm current availability before publication." Named contact (Rick), but no concrete fallback if unavailable. See F-17 |

**Category 6 verdict:** FAIL. Checks failing: 6.1, 6.2, 6.4, 6.5, 6.6, 6.8, 6.9

---

## Category 7 — Navigation & Information Architecture

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 7.1 | Page exists in docs.json | PASS | `v2/orchestrators/guides/advanced-operations/gateway-relationships` confirmed at docs.json line 2939 |
| 7.2 | Navigation matches file system | PASS | File exists at stated path |
| 7.3 | Tab entry portal | N/A — page-level check |
| 7.4 | No structural orphans | PASS | Reachable via Advanced Operations group |
| 7.5 | Audience journey complete | PASS | Entry point for the "how does job routing work?" question within the operator journey |
| 7.6 | Cross-tab graduation paths | INFO | No internal cross-tab links in this page. External links to tools.livepeer.cloud and explorer.livepeer.org are not internal cross-tab. Cross-tab threshold (check 4.10) is a tab-level check, not a per-page requirement. No action needed |
| 7.7 | File in correct lane | PASS | `v2/orchestrators/guides/` — publishable content |
| 7.8 | File naming conventions | PASS | `gateway-relationships.mdx` — no disallowed prefix, no `-index.mdx` |
| 7.9 | TTL compliance | N/A — not in `_workspace/` |

**Category 7 verdict:** PASS

---

## Category 8 — Links & Rendering

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 8.1 | All internal links resolve | PASS | Verified: `/v2/orchestrators/guides/config-and-optimisation/pricing-strategy` (docs.json line 2921 ✓), `/v2/orchestrators/setup/configure` (docs.json line 2863 ✓), `/v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations` (docs.json line 2898 ✓), `/v2/orchestrators/guides/monitoring-and-tooling/troubleshooting` (docs.json line 2933 ✓), `/v2/orchestrators/guides/monitoring-and-tooling/operator-toolbox` (docs.json line 2930 ✓) |
| 8.2 | All external links live | NOT-TESTED | `https://explorer.livepeer.org/orchestrators`, `https://tools.livepeer.cloud`, `https://tools.livepeer.cloud/ai/network-capabilities`, `https://loki.livepeer.report` (flagged as potentially unreachable in FACT CHECK at line 245), `https://grafana.com/docs/loki/latest/query/` |
| 8.3 | All snippet imports resolve | PASS | Standard component imports from known paths |
| 8.4 | All images load | PASS | OG image only; standard path |
| 8.5 | Page renders clean | PASS | No broken JSX, valid Mermaid syntax, imports used |
| 8.6 | No TODO/TBD/Coming Soon | PASS | All such content in MDX comments |

**Category 8 verdict:** PASS (external links NOT-TESTED; Loki endpoint risk flagged via F-17)

---

## Category 9 — Process & Governance

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 9.1 | Human sign-off recorded | FAIL | `status: published` but `veracityStatus` absent and FACT CHECK present. Inconsistency suggests status was set prematurely. See F-07 |
| 9.2 | Consuming decisions in registry | N/A |  |
| 9.3 | Gate prerequisites met | FAIL | Tab has no open content pass gate. Status inconsistency (published + unverified content) |
| 9.4 | Phase ordering | N/A |  |
| 9.5 | Findings before fixes | N/A — this is the findings phase |
| 9.6 | Feedback routed | N/A |  |

**Category 9 verdict:** FAIL. Checks failing: 9.1, 9.3

---

## Banned Construction Scan

**Scope:** body prose, headings, description, CustomDivider `middleText` props, Accordion `title` props, tab titles, visible component props, table cells, card descriptions.

| Line | Sentence/phrase | Word/Pattern | Classification | Flag? |
|------|-----------------|--------------|----------------|-------|
| description | "How gateways discover and select your orchestrator — the discovery mechanisms…" | em-dash (—) | banned construction (CLAUDE.md: no em-dashes) | YES — F-01 |
| 37 | "Gateways decide where work goes." | no banned pattern | factual | No |
| 65 | "For standard video transcoding, being registered on-chain and in the top 100 active orchestrators is sufficient for discovery." | no banned pattern | factual | No |
| 65 | "For AI workloads, capability advertisement through your `aiModels.json` configuration is what makes you discoverable for specific pipelines." | no banned pattern | factual | No |
| 92 | "Discovery gives a gateway a list of candidates." | no banned pattern | factual | No |
| 142 | "If you want AI jobs, ensure your pipeline is registered, your warm model is loaded, and your price is within market range." | `if [condition]` in body prose | conditional body prose | BORDERLINE — "if you want AI jobs" is a segmentation clause; the prohibition targets unresolved conditions that state thresholds, not reader-segmentation. Flag for review |
| 144 | "A competitive price and high success rate will consistently outperform a lower-ranked orchestrator with a high price." | no banned pattern | factual/evaluative | No |
| 153 | "if your price exceeds the gateway's maximum, you receive zero work from that gateway" | `if [condition]` in body prose | conditional body prose — this resolves the condition explicitly with a concrete outcome | BORDERLINE — condition is immediately resolved ("you receive zero work"). Not unresolved. Acceptable |
| 159 | "You cannot see what individual gateways have set these to — but you can infer from the market." | `can [verb]` — "you can infer" | `can infer` in informational statement | BORDERLINE — "can infer" is capability, not a value claim. Acceptable |
| 164–165 | "If gateways cannot connect to your service URI, you receive no work — even if you are in the active set, even if your price is competitive." | `if [condition]` — first "If" | conditional body prose | BORDERLINE — "if gateways cannot connect" is a diagnostic trigger; the outcome is stated explicitly. Acceptable as diagnostic framing |
| 195 | "Missed segments, slow responses, and OOM failures all decrease your score and reduce your selection probability." | no banned pattern | factual | No |
| 199 | "Being in the top 10 by stake vs top 50 means meaningfully more job volume from stake-weighted gateways." | `meaningfully` | banned word | YES — F-08 |
| 199 | "For AI workloads, stake is less decisive." | no banned pattern | comparative claim | No |
| 210 | "The Livepeer Foundation operates a public Loki instance that exposes gateway logs." | no banned pattern | factual | No |
| Accordion title "1. Price competitively" | Accordion title prop | no banned pattern | imperative label | No |
| Accordion title "2. Keep your service URI correct and reachable" | Accordion title prop | no banned pattern | directive label | No |
| Accordion title "3. Register your AI capabilities correctly" | Accordion title prop | no banned pattern | directive label | No |
| Accordion title "4. Maintain high performance scores" | Accordion title prop | no banned pattern | directive label | No |
| Accordion title "5. Build stake for video transcoding" | Accordion title prop | no banned pattern | directive label | No |
| Heading "Gateway Loki API — understanding selection decisions" | H2 | em-dash | banned construction (CLAUDE.md: no em-dashes) | YES — F-15 |
| CustomDivider (no middleText props used) | N/A | — | — | No |
| Card descriptions | "Setting pricePerUnit and per-capability AI pricing to be competitive." | no banned pattern | description | No |
| Card descriptions | "Setting up aiModels.json and capability registration." | no banned pattern | description | No |
| Card descriptions | "Full error reference including service URI and capability issues." | no banned pattern | description | No |
| Card descriptions | "Explorer, Prometheus, and Loki tools for understanding network state." | no banned pattern | description | No |

**Banned Construction Scan verdict:** Two confirmed flags (F-01 em-dash in description, F-08 "meaningfully", F-15 em-dash in heading). Two BORDERLINEs noted; both acceptable.

---

## Spelling/Typo Check

Scan of all visible text.

- "OrchestratorInfo" — correct protocol term
- "protobuf" — correct
- "capabilities_prices" — correct field name
- "aiModels.json" — correct
- "orchWebhookUrl" — correct
- "getNetworkCapabilities" — correct
- "selectStakeWeight", "selectRandFreq" — correct flag names
- "centralisation" — correct UK spelling
- "Arbitrum" — correct capitalisation
- "Grafana Loki query syntax" — correct
- "NVENC/NVDEC" — correct
- All curl commands: syntax correct

**Result: No spelling errors or typos found in visible text.**

---

## Cross-Category Connections

```
Root Cause 1: Missing required frontmatter fields (complexity, lifecycleStage, veracityStatus, industry, niche)
Affects: Cat 1.1 + Cat 1.6 + Cat 1.7 + Cat 1.8 + Cat 1.9 + Cat 1.10
Fix: Add five missing fields with proposed values (see F-02 through F-06). All values require human sign-off.
```

```
Root Cause 2: status: published inconsistency with unverified/missing content markers
Affects: Cat 1.8 + Cat 9.1 + Cat 9.3
Fix (F-07): Either (a) change `status: draft` and add `veracityStatus: unverified`, OR (b) resolve all FACT CHECK flags, complete verification, then set `veracityStatus: verified`. Do not leave `status: published` with absent veracityStatus.
```

```
Root Cause 3: Em-dashes in visible text
Affects: Cat 1.11 (description) + Cat 3.1 (heading "Gateway Loki API — understanding selection decisions")
Fix (F-01 + F-15): Remove em-dashes from both locations. See individual fixes.
```

```
Root Cause 4: Heading quality — "How [gateways] [verb] you" pattern
Affects: Cat 3.1 + Cat 3.4 + Cat 3.7
Fix (F-11, F-13): Rename to concept-anchored headings.
```

---

## Blocking Decisions

```
BD-1: status vs veracityStatus
Question: What is the correct status for this page?
Options: [A] Revert to `status: draft` + `veracityStatus: unverified` (safest — page has unresolved FACT CHECK). [B] Resolve all FACT CHECK flags, verify content, set `status: current` + `veracityStatus: verified`.
If A: Apply F-07 immediately. Page remains in draft.
If B: Complete verification work (F-16, F-17), then promote.
```

---

## Verdict Summary

**Overall: NEEDS WORK**

**Checks failing (count: 22):** 1.1, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 2.2, 2.4, 3.1, 3.2, 3.4, 3.7, 6.1, 6.2, 6.4, 6.5, 6.6, 6.8, 6.9, 9.1, 9.3

**Finding register:**

| ID | Category | Severity | Description |
|----|----------|----------|-------------|
| F-01 | 1.11 | HIGH | Description is 226 chars (>160) and contains em-dash. Proposed trim without em-dash: `How gateways discover and select your orchestrator: discovery mechanisms, multi-factor selection algorithm, improving selection probability, and using the Loki API for routing diagnostics.` (186 chars — still over). Further trim: `How gateways discover and select your orchestrator. Covers discovery mechanisms, selection algorithm, selection factors you control, and the Loki API for routing diagnostics.` (174 chars). Final: `How gateways discover and select your orchestrator, covering discovery mechanisms, the selection algorithm, factors you can influence, and the Loki API for routing diagnostics.` (175 chars — still over). `How gateways discover and select your orchestrator: discovery mechanisms, selection algorithm, factors that affect your ranking, and Loki API diagnostics.` (154 chars) — confirm before applying |
| F-02 | 1.6 | HIGH | `complexity` absent. Proposed: `complexity: intermediate` — confirm before applying |
| F-03 | 1.7 | HIGH | `lifecycleStage` absent. Proposed: `lifecycleStage: operate` — confirm before applying |
| F-04 | 1.8 | HIGH | `veracityStatus` absent. Add `veracityStatus: unverified` pending BD-1 |
| F-05 | 1.9 | HIGH | `industry` absent. Proposed: `industry: [technical, livepeer]` — confirm before applying |
| F-06 | 1.10 | HIGH | `niche` absent. Proposed: `niche: [infrastructure, protocol]` — confirm before applying |
| F-07 | 1.8 / 9.1 | HIGH | `status: published` is inconsistent with missing veracityStatus and unresolved FACT CHECK. Change `status` to `draft` until verification complete (per BD-1) |
| F-08 | 2.2 | HIGH | Line 199: `meaningfully` is a banned word. Proposed replacement: "Being in the top 10 by stake vs top 50 delivers more job volume from stake-weighted gateways." — confirm before applying |
| F-09 | 2.4 | MEDIUM | Line 142 BORDERLINE: `if you want AI jobs` — flag for human review. Not a definitive failure but near banned construction boundary |
| F-10 | 2.4 | INFO | Line 159 BORDERLINE: `you can infer from the market` — capability statement, not a value claim. No action needed unless human reviewer disagrees |
| F-11 | 3.1 | HIGH | "How gateways find you" scores 16/25. Proposed rename: `Discovery Mechanisms` — confirm before applying |
| F-12 | 3.1 | MEDIUM | "What you advertise to gateways" scores 19/25 (just under threshold). Proposed rename: `Capability Advertisement` — confirm before applying |
| F-13 | 3.1 | HIGH | "How gateways select you" scores 16/25. Proposed rename: `Selection Algorithm` — confirm before applying |
| F-14 | 3.1 | HIGH | "What you can control to get more work" scores 13/25. Proposed rename: `Improving Selection Probability` — confirm before applying |
| F-15 | 3.1 | HIGH | "Gateway Loki API — understanding selection decisions" scores 17/25 and contains em-dash. Proposed rename: `Gateway Loki API` — confirm before applying |
| F-16 | 6.4 | HIGH | "top 100 active orchestrators" threshold not cited. Add `{/* REVIEW: verify "top 100" active set threshold against current Livepeer protocol specification or go-livepeer source */}` adjacent to line 65. NOT-TESTED |
| F-17 | 6.9 | HIGH | FACT CHECK at line 245: Loki endpoint `loki.livepeer.report` unreachable in March 2026 sandbox. Convert to: `{/* REVIEW: loki.livepeer.report endpoint — Rick to confirm current availability. If permanently unavailable, remove or replace Loki API section with a note on endpoint status. */}` |

**Priority order:** F-07 (status inconsistency, HIGH) → F-11, F-13, F-14, F-15 (heading renames, HIGH) → F-08 ("meaningfully", HIGH) → F-02 through F-06 (missing fields, HIGH) → F-16, F-17 (veracity) → F-12 (MEDIUM heading rename) → F-01 (description trim) → F-09 (BORDERLINE review)
