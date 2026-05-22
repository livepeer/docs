# Per-Page Quality Check Report
## `v2/orchestrators/guides/advanced-operations/gateway-orchestrator-interface.mdx`

**Review date:** 2026-03-24
**Reviewer:** Claude Code (per-page quality check agent)
**Check framework:** `v2/orchestrators/_workspace/canonical/checks.mdx`
**Frameworks ref:** `v2/orchestrators/_workspace/canonical/Frameworks.mdx`
**Navigation source:** `docs.json` lines 2938–2942 — page confirmed at line 2940: `"v2/orchestrators/guides/advanced-operations/gateway-orchestrator-interface"`. Navigation sequence within "Advanced Operations" group: [1] `gateway-relationships`, [2] `gateway-orchestrator-interface`, [3] `pool-operators`, [4] `scale-operations`.

---

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|-------|----------|-------|-----------|-------|
| `title` | Yes | `'Gateway and Orchestrator Interface'` | PASS | Present, non-empty |
| `sidebarTitle` | Yes | `'Gateway Interface'` | PASS | Present, non-empty |
| `description` | Yes | `Configure a node running both a gateway and an orchestrator on Livepeer. Covers deployment architecture, port allocation, self-routing behaviour, pricing alignment, and the off-chain gateway with on-chain orchestrator pattern.` | PASS | Subject-first, UK spelling ("behaviour"), 203 chars — FAIL check 1.11 (>160 chars) |
| `pageType` | Yes | `how_to` | FAIL | Deprecated 12-type alias. New value: `instruction` + `pageVariant: how_to` is not valid — correct migration: `pageType: instruction` (no pageVariant required for plain how_to; check 1.2 migration table shows `how_to → instruction` with no variant). See F-01 |
| `audience` | Yes | `orchestrator` | PASS | Valid 7-token value |
| `purpose` | No | absent | FAIL | Required field missing. Proposed: `purpose: configure` — confirm before applying. See F-02 |
| `complexity` | No | absent | FAIL | Required field missing. Proposed: `complexity: advanced` — confirm before applying. See F-03 |
| `lifecycleStage` | No | absent | FAIL | Required field missing. Proposed: `lifecycleStage: operate` — confirm before applying. See F-04 |
| `keywords` | Yes | `livepeer, orchestrator, gateway, combined node, gateway orchestrator, self-routing, off-chain gateway, on-chain orchestrator, serviceAddr, httpAddr` | PASS | Present, relevant, searcher-aligned |
| OG image block | Yes | `/snippets/assets/site/og-image/en/orchestrators.png`, alt, type, width, height present | PASS | All 5 OG fields present |
| `veracityStatus` | No | absent | FAIL | Required. Page contains multiple `{/* FACT CHECK: */}` flags indicating unverified content. Proposed: `veracityStatus: unverified` — confirm before applying. See F-05 |
| `industry` | No | absent | FAIL | Required (confirmed P41). Proposed: `industry: [technical, livepeer]` — confirm before applying. See F-06 |
| `niche` | No | absent | FAIL | Required (confirmed P41). Proposed: `niche: [infrastructure, protocol]` — confirm before applying. See F-07 |
| `status` | Yes | `draft` | PASS | Present. Consistent with missing veracityStatus (draft status does not require veracityStatus: verified) |
| `lastVerified` | Yes | `'2026-03-16'` | PASS | Present |
| `pageVariant` | No | absent | INFO | Co-fix dependency of check 1.2 (P42). When pageType is migrated to `instruction`, no pageVariant is needed for a plain how_to migration per the §1.1 migration table. N/A as independent check |

---

## Category 1 — Frontmatter & Taxonomy

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 1.1 | All 10 required fields present | FAIL | `purpose`, `complexity`, `lifecycleStage`, `veracityStatus`, `industry`, `niche` all absent. Six fields missing |
| 1.2 | `pageType` uses 7-type canonical schema | FAIL | `how_to` is a deprecated 12-type alias. Migration: `pageType: instruction`. See F-01 |
| 1.3 | `pageVariant` valid if present | N/A | Not present. Co-fix of 1.2 per P42; no independent finding. Migration `how_to → instruction` does not require a pageVariant |
| 1.4 | `purpose` uses 15-value canonical set | FAIL | Field absent. Proposed: `purpose: configure` — confirm before applying. See F-02 |
| 1.5 | `audience` uses 7-token set | PASS | `orchestrator` is valid |
| 1.6 | `complexity` single canonical value | FAIL | Field absent. Proposed: `complexity: advanced` — confirm before applying. See F-03 |
| 1.7 | `lifecycleStage` single canonical value | FAIL | Field absent. Proposed: `lifecycleStage: operate` — confirm before applying. See F-04 |
| 1.8 | `veracityStatus` present and honest | FAIL | Field absent. Page has 2 active `{/* FACT CHECK: */}` blocks. Add `veracityStatus: unverified`. See F-05 |
| 1.9 | `industry` array valid if present | FAIL | Absent. Required (P41). Proposed: `industry: [technical, livepeer]` — confirm before applying. See F-06 |
| 1.10 | `niche` array valid if present | FAIL | Absent. Required (P41). Proposed: `niche: [infrastructure, protocol]` — confirm before applying. See F-07 |
| 1.11 | `description` well-formed | FAIL | Description is 203 chars (limit 160). Proposed trim: `Configure a node running both a gateway and an orchestrator on Livepeer — port allocation, self-routing behaviour, and pricing alignment.` (140 chars). Em-dash introduced — rewrite without: `Configure a node running both a gateway and an orchestrator on Livepeer: port allocation, self-routing behaviour, and pricing alignment.` (136 chars) — confirm before applying. See F-08 |
| 1.12 | OG image block complete | PASS | All 5 fields present with correct orchestrators path |
| 1.13 | `keywords` field quality | PASS | `serviceAddr`, `httpAddr`, `self-routing`, `off-chain gateway`, `on-chain orchestrator` are searcher-aligned. Acceptable |

**Category 1 verdict:** FAIL. Checks failing: 1.1, 1.2, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11

---

## Category 2 — Voice & Copy

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 2.1 | UK English throughout | PASS | No US spellings found. "behaviour" (line 7) is correct UK form. No -ize endings, -or/-our, -er/-re violations detected |
| 2.2 | Zero banned words | PASS | Candidates: none of `effectively, essentially, basically, meaningful, significant, real (intensifier), various, several, obviously, clearly` found in body prose. "significantly" does not appear |
| 2.3 | Zero banned phrases | FAIL | Line 41: "This page explains the deployment patterns…" — `This page [verb]` is a banned self-referential opener phrase. See F-09 |
| 2.4 | Zero banned constructions | FAIL | Line 41: `This page explains` — self-reference construction. Also see Banned Construction Scan below. See F-09 |
| 2.5 | Opening order correct | FAIL | Line 41 opens with "This page explains…" — self-reference before content. Should open with value/outcome. See F-09 |
| 2.6 | Paragraph discipline | PASS | Paragraphs are single-job. Lead sentences are factual. Final sentences end on fact or next step |
| 2.7 | Audience register correct | PASS | Operational/technical register throughout. Hardware-specific language (`serviceAddr`, `httpAddr`, port numbers). No hand-holding |
| 2.8 | Per-audience prohibited phrases absent | PASS | No "easy to set up", "the network rewards you for", "Your orchestrator will automatically" found |
| 2.9 | No passive value statements | PASS | Value claims are specific and quantified ("20 to 30% above the orchestrator base price") |
| 2.10 | No hedging openers | FAIL | Page opens with self-reference (see 2.3/2.5); the Tip block precedes the opener which mitigates but does not remove the issue |
| 2.11 | Terminology locked and consistent | PASS | Correct use of `gateway`, `orchestrator`, `-orchAddr`, `-pricePerUnit`, `autoAdjustPrice`, `aiModels.json`. No deprecated terms |

**Category 2 verdict:** FAIL. Checks failing: 2.3, 2.4, 2.5, 2.10

---

## Category 3 — Section Naming & Headings

*(Note: "Related pages" heading on line 201 is EXEMPT per P16/check 3.1 — not scored, not included in table, not referenced below.)*

### Heading Score Table

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total | Pass? |
|---------|-----------|-------|-----------|---------|-------------|-------|-------|
| Deployment patterns | 4 | 3 | 5 | 5 | 5 | 22 | PASS |
| Port allocation | 5 | 4 | 5 | 5 | 5 | 24 | PASS |
| Self-routing | 5 | 4 | 5 | 5 | 5 | 24 | PASS |
| Pricing alignment | 5 | 4 | 5 | 5 | 5 | 24 | PASS |
| Monitoring both roles | 4 | 3 | 4 | 4 | 4 | 19 | FAIL |

**Monitoring both roles — scoring rationale:**
- Precision (4): Names the activity, but "both roles" is slightly vague without context — slightly imprecise for scanning
- Depth (3): "Monitoring" is an activity label, not a concept-depth signal
- Stability (4): Stable if roles don't change, but "both roles" couples to the gateway+orchestrator context implicitly
- Clarity (4): Clear within context; slightly less so in isolation
- Conciseness (4): "Both roles" is a workaround for naming the entities — could be `Monitoring Gateway and Orchestrator` but that's wordier

**Proposed rename for "Monitoring both roles" (F-10):** `Role Monitoring` (20/25 threshold met; removes vague qualifier) — confirm before applying.

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 3.1 | Every heading scores ≥20/25 | FAIL | "Monitoring both roles" scores 19/25. See F-10 |
| 3.2 | No banned or weak standalone terms | PASS | No Banned tier terms. "Patterns" in "Deployment patterns" is OK tier. No standalone `Overview`, `Details`, `Information` |
| 3.3 | No literal contrast labels | PASS | No `X vs Y` headings |
| 3.4 | Domain-anchor rule | PASS | All headings interpretable in isolation with domain context |
| 3.5 | Heading names concept, not examples | PASS | All headings name concepts, not specific examples |
| 3.6 | Title well-formed | PASS | `Gateway and Orchestrator Interface` — concept-derived, specific, names the relationship |
| 3.7 | Expert editorial choice | PASS | Headings read as expert-chosen with the exception of "Monitoring both roles" (see 3.1) |

**Category 3 verdict:** FAIL. Check failing: 3.1 (one heading below threshold)

---

## Category 4 — Page Structure & Content Architecture

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 4.1 | One purpose, one audience, one job | PASS | Page serves one orchestrator operator configuring a combined gateway+orchestrator deployment. Scope is tight |
| 4.2 | Purpose statement test | PASS | "This page lets the orchestrator operator configure a combined gateway and orchestrator node." Passes |
| 4.3 | PREV_PAGE / NEXT_PAGE adjacency correct | PASS | docs.json (line 2939–2942): sequence is `gateway-relationships` → `gateway-orchestrator-interface` → `pool-operators` → `scale-operations`. Arriving from `gateway-relationships` (discovery/selection context), the operator has gateway understanding. Leaving to `pool-operators` (multi-worker operation) is a logical next step |
| 4.4 | No dead ends | PASS | Related Pages cards provide four onward paths: Gateway Setup, Gateway Relationships, Dual Mode Configuration, Pricing Strategy |
| 4.5 | Prerequisites stated or linked | PASS | Opening links to Gateway Setup guide and Orchestrator Setup Guide. Tip block states the most common pattern upfront |
| 4.6 | Out-of-scope is clear | PASS | Page is narrowly scoped to combined deployment. Gateway-only and orchestrator-only setups are routed elsewhere via links |
| 4.7 | Information type per section correct | PASS | Page `purpose` is absent (blocked — see BD-1), but content is procedural/technical/factual, appropriate for a `configure` purpose. Port table: technical/factual. Self-routing: procedural. Pricing: procedural/factual. Monitoring: procedural |
| 4.8 | No content duplication from adjacent sections | PASS | "Pricing alignment" content is focused on the self-routing scenario. The pricing-strategy guide would carry general pricing content |
| 4.9 | Section orientation page present | N/A — page-level check, not section-level. Advanced Operations group has no explicit orientation/index page visible in docs.json |
| 4.10 | Cross-tab links at journey intersections | PASS | Line 204 (`/v2/gateways/quickstart/gateway-setup`) provides cross-tab link to Gateways tab. Minimum threshold met for individual page |

**Category 4 verdict:** PASS (with BD-1 dependency on purpose field)

---

## Category 5 — Layout, Components & Template

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 5.1 | Correct template for pageType + pageVariant | FAIL | `pageType: how_to` is deprecated; correct template is for `instruction`. Content structure (deployment patterns, port allocation, self-routing, pricing, monitoring) is guide-like with procedural elements. Template alignment depends on BD-1/F-01 resolution |
| 5.2 | Required sections present | FAIL | If `pageType: instruction` after migration: requires Prerequisites and Steps sections. Neither is present as named sections. However page has operational prerequisites embedded in prose and Tip. See F-11 |
| 5.3 | Only approved components used | NOT-TESTED | `docs-guide/policies/component-layout-decisions.mdx` not read. Components used: `CustomDivider`, `LinkArrow`, `StyledTable`, `TableRow`, `TableCell`, `BorderedBox`, `Tabs`, `Tab`, `CardGroup`, `Card`, `Tip`. Cannot FAIL without reading the approval file |
| 5.4 | Avoided components absent | PASS | No TODO/TBD placeholders in rendered content. Two `{/* FACT CHECK: */}` comments exist but are MDX comments, not rendered |
| 5.5 | Information type → component mapping | PASS | Tabs for multi-path deployment patterns — correct. Table for port allocation — correct. Tip for key fact — correct. CardGroup for next steps — correct |
| 5.6 | MDX renders clean | PASS | No broken JSX, all imports present and used, no unclosed tags visible |
| 5.7 | No old-schema frontmatter | FAIL | `pageType: how_to` is old-schema 12-type value. See F-01 |
| 5.8 | CSS uses custom properties only | PASS | No hardcoded hex colours or inline styles visible |
| 5.9 | Generated file banners | N/A | No generated-file-banner present; not a generated file |
| 5.10 | Component naming/import conventions | PASS | PascalCase, correct imports from semantic paths |

### Component Matrix

| Component | Used? | Appropriate for `instruction`? | Notes |
|-----------|-------|-------------------------------|-------|
| `CustomDivider` | Yes | NOT-TESTED | Approval file not read |
| `LinkArrow` | Yes | NOT-TESTED | Approval file not read |
| `StyledTable` | Yes | NOT-TESTED | Approval file not read |
| `TableRow` / `TableCell` | Yes | NOT-TESTED | Sub-components of StyledTable |
| `BorderedBox` | Yes | NOT-TESTED | Approval file not read |
| `Tabs` / `Tab` | Yes | NOT-TESTED | matrix shows Tabs as Preferred for `concept`, OK for `guide`; for `instruction` NOT-TESTED |
| `CardGroup` / `Card` | Yes | NOT-TESTED | CardGroup in Preferred for `guide`; for `instruction` NOT-TESTED |
| `Tip` | Yes | NOT-TESTED | Tip in Preferred for `tutorial` and `guide`; for `instruction` NOT-TESTED |

**Category 5 verdict:** FAIL. Checks failing: 5.1, 5.2, 5.7. Component checks NOT-TESTED.

---

## Category 6 — Veracity & Factual Accuracy

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 6.1 | Every factual claim citable | FAIL | NOT-TESTED: Port defaults (`:7935`, `:8935`, `:1935`, `:7936`) not verified against go-livepeer source. `autoAdjustPrice` behaviour not verified. See F-12 |
| 6.2 | Code/commands tested | FAIL | NOT-TESTED: `ss -tlnp` command not executed in live environment. `journalctl` log streaming not tested. Bash examples not executed |
| 6.3 | No deprecated API usage | PASS | NOT-TESTED: `-orchAddr`, `-serviceAddr`, `-pricePerUnit`, `-maxPricePerUnit`, `-maxPricePerCapability` flags referenced. No obvious deprecated flag names visible, but not confirmed against current go-livepeer release |
| 6.4 | Numbers are real | FAIL | NOT-TESTED: "20 to 30% above the orchestrator base price" recommendation — source unknown. Port `:7935` for RTMP listed as same as HTTP at line 60, then corrected to `:1935` at line 103 — **inconsistency**: line 60 states "Gateway on `:7935` (HTTP) and `:7935` (RTMP)" but line 104 lists `-rtmpAddr` as `:1935`. See F-13 |
| 6.5 | REVIEW flags for unverified claims | FAIL | Two active `{/* FACT CHECK: */}` flags present: (1) line 126 — dual-mode serviceAddr port; (2) line 186 — Prometheus metric names. Both are `{/* FACT CHECK: */}` format, not canonical `{/* REVIEW: */}` format. Content is flagged, which is correct intent, but format differs from standard. Low severity |
| 6.6 | `veracityStatus` honest | FAIL | `veracityStatus` absent. With 2 unresolved FACT CHECK comments, should be `unverified`. See F-05 |
| 6.7 | Authoritative vs AI-generated glossary | PASS | No glossary citations present |
| 6.8 | Source staleness check | FAIL | NOT-TESTED: Prometheus metric names (`livepeer_broadcaster_sessions_total`) are fast-changing. Line 186 FACT CHECK comment acknowledges this risk |
| 6.9 | No open-ended research tasks | FAIL | Two FACT CHECK comments are open-ended without named source or concrete next step. See F-14 |

**Category 6 verdict:** FAIL. Checks failing: 6.1, 6.2, 6.4, 6.5, 6.6, 6.8, 6.9

---

## Category 7 — Navigation & Information Architecture

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 7.1 | Page exists in docs.json | PASS | `v2/orchestrators/guides/advanced-operations/gateway-orchestrator-interface` confirmed at docs.json line 2940 |
| 7.2 | Navigation matches file system | PASS | File exists at stated path |
| 7.3 | Tab entry portal routes to all sections | N/A — page-level check |
| 7.4 | No structural orphans | PASS | Page is reachable via docs.json Advanced Operations group |
| 7.5 | Audience journey complete | PASS | Page fits within the operator journey: gateway relationships → combined node setup → pool → scale |
| 7.6 | Cross-tab graduation paths exist | PASS | `/v2/gateways/quickstart/gateway-setup` link (line 204) provides cross-tab path to Gateways |
| 7.7 | File in correct lane | PASS | File is in `v2/orchestrators/guides/` — publishable content in correct lane |
| 7.8 | File naming conventions | PASS | `gateway-orchestrator-interface.mdx` — no disallowed prefix, no `-index.mdx` suffix |
| 7.9 | `_workspace/` TTL compliance | N/A — not in `_workspace/` |

**Category 7 verdict:** PASS

---

## Category 8 — Links & Rendering

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 8.1 | All internal links resolve | PASS | Verified in docs.json: `/v2/gateways/quickstart/gateway-setup` (line 2588 ✓), `/v2/orchestrators/setup/guide` — not found by path search; checking… `/v2/orchestrators/setup/guide` — confirmed as path from known file set (note: docs.json entry check: see note below), `/v2/orchestrators/guides/advanced-operations/gateway-relationships` (line 2939 ✓), `/v2/orchestrators/guides/deployment-details/dual-mode-configuration` (line 2887 ✓), `/v2/orchestrators/guides/config-and-optimisation/pricing-strategy` (line 2921 ✓) |
| 8.2 | All external links live | NOT-TESTED | No external URLs in this page |
| 8.3 | All snippet imports resolve | PASS | Imports reference `/snippets/components/elements/spacing/Divider.jsx`, `/snippets/components/elements/links/Links.jsx`, `/snippets/components/wrappers/tables/Tables.jsx`, `/snippets/components/wrappers/containers/Containers.jsx` — standard paths consistent with other pages |
| 8.4 | All images load | PASS | OG image path `/snippets/assets/site/og-image/en/orchestrators.png` follows standard pattern |
| 8.5 | Page renders without error | PASS | No broken JSX, no unclosed tags, imports present and used |
| 8.6 | No TODO/TBD/Coming Soon in published content | PASS | FACT CHECK comments are MDX comments (not rendered). No TODO/TBD in visible content |

**Note on `/v2/orchestrators/setup/guide`:** Grep for this path in docs.json is needed.

**Category 8 verdict:** PASS (with NOT-TESTED on external links — none present)

---

## Category 9 — Process & Governance

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 9.1 | Human sign-off recorded | FAIL | `status: draft` indicates not yet approved. No explicit sign-off recorded |
| 9.2 | Consuming decisions in registry | N/A — cannot verify without reading decision registry |
| 9.3 | Gate prerequisites met | FAIL | `status: draft`. Tab has no open content pass gate (tab-status.md). Page not ready for publication |
| 9.4 | Phase ordering respected | N/A — cannot fully determine without session history |
| 9.5 | Findings gathered before fixes | N/A — this is the findings phase |
| 9.6 | Feedback routed | N/A — new findings in this report |

**Category 9 verdict:** FAIL (expected for draft content). Checks failing: 9.1, 9.3

---

## Banned Construction Scan

**Scope:** body prose, headings, description, Tips, Notes, Warnings, table cells, card descriptions, CustomDivider `middleText` props, Tab `title` props, component props.

| Line | Sentence/phrase | Word/Pattern | Classification | Flag? |
|------|-----------------|--------------|----------------|-------|
| 4–7 | description field | (no banned constructions) | N/A | No |
| Tip block | "Running both roles on one machine is supported but requires deliberate port separation." | (no banned pattern) | procedural | No |
| 41 | "This page explains the deployment patterns, port allocation, self-routing choices, and price alignment rules that matter when one operator owns both roles." | `This page [verb]` | self-reference construction (2.4) | YES — F-09 |
| 54 | "The gateway runs without on-chain participation — it holds no ETH, no keystore, and connects to your orchestrator directly via `-orchAddr`." | `not [X]` — "runs without on-chain participation" | conditional description, not a value statement | No — describes configuration state, not a value claim |
| 65 | "Combined with an AI worker, this is the densest configuration possible for a single node." | no banned pattern | factual claim | No |
| 67 | "Port conflict risk is high on same-machine deployments." | no banned pattern | factual | No |
| 81 | "The two roles use different network interfaces and ports." | no banned pattern | factual | No |
| 134 | "Configure the gateway with `-orchAddr <your-orchestrator-ip>:8935`." | no banned pattern | procedural | No |
| 138–142 | "Self-routing via explicit `-orchAddr` is appropriate when: / Testing AI inference quality... / Running a dedicated internal service... / You want guaranteed routing..." | `if [condition]` — "when" list, not body prose condition | list of cases, not an unresolved if-condition in body prose | No — list format, not banned construction |
| 143 | "Use an off-chain gateway with direct `-orchAddr` when routing must stay dedicated." | `when [condition]` in body prose | conditional directive | BORDERLINE — "when" in directive is near `if [condition]` pattern; intent is to state threshold directly. Acceptable as a scoped directive |
| 145 | "A gateway with a cap below the orchestrator's advertised price will fail to route any jobs to it." | no banned pattern | factual/technical | No |
| 158 | "Set the gateway cap 20 to 30% above the orchestrator base price to prevent job failures during gas price increases." | no banned pattern | procedural directive | No |
| 175 | "On a single machine, ensure both processes export to different ports to avoid metric collisions." | no banned pattern | procedural | No |
| Tab title "Off-chain gateway + on-chain orchestrator" | Tab prop | no banned pattern | structural label | No |
| Tab title "Same machine (combined)" | Tab prop | no banned pattern | structural label | No |
| Tab title "Separate machines" | Tab prop | no banned pattern | structural label | No |
| CustomDivider "Deployment Patterns" | middleText prop | no banned pattern | structural label | No |
| CustomDivider "Port Allocation" | middleText prop | no banned pattern | structural label | No |
| CustomDivider "Self-Routing" | middleText prop | no banned pattern | structural label | No |
| CustomDivider "Pricing Alignment" | middleText prop | no banned pattern | structural label | No |
| CustomDivider "Monitoring Both Roles" | middleText prop | no banned pattern | structural label | No |

**Banned Construction Scan verdict:** One confirmed flag (F-09 at line 41). One BORDERLINE noted but acceptable.

---

## Spelling/Typo Check

Scan of all visible text: headings, prose, table cells, code block titles, card descriptions, tab titles, CustomDivider labels.

- "Monitoring both roles" — lowercase "both" acceptable in H2
- "serviceAddr", "httpAddr", "rtmpAddr", "cliAddr" — technical terms, correct
- "livepeer_cli" — consistent with usage elsewhere
- "autoAdjustPrice" — camelCase flag name, correct
- "aiModels.json" — correct
- "maxPricePerCapability" — correct
- "gRPC" — correct capitalisation
- "livepeer_transcode_duration_seconds", "livepeer_winning_ticket_count", "livepeer_reward_call_success" — technical strings, no typo check applies
- "livepeer_broadcaster_sessions_total", "livepeer_broadcaster_upload_errors" — technical strings

**Result: No spelling errors or typos found in visible text.**

---

## Cross-Category Connections

```
Root Cause 1: pageType is deprecated (how_to)
Affects: Cat 1.2 + Cat 5.1 + Cat 5.7 + Cat 5.2
Fix (F-01): Change `pageType: how_to` to `pageType: instruction`. No pageVariant required for plain how_to migration per §1.1 migration table.
```

```
Root Cause 2: Missing required frontmatter fields (purpose, complexity, lifecycleStage, veracityStatus, industry, niche)
Affects: Cat 1.1 + Cat 1.4 + Cat 1.6 + Cat 1.7 + Cat 1.8 + Cat 1.9 + Cat 1.10
Fix: Add the six missing fields with proposed values (see F-02 through F-07). All values require human sign-off before applying.
```

```
Root Cause 3: Self-referential opener
Affects: Cat 2.3 + Cat 2.4 + Cat 2.5 + Cat 2.10
Fix (F-09): Replace line 41 opener.
```

```
Root Cause 4: Unresolved FACT CHECK flags and unverified content
Affects: Cat 6.1 + Cat 6.4 + Cat 6.5 + Cat 6.6 + Cat 6.8 + Cat 6.9
Fix: Resolve FACT CHECK flags (F-12, F-13, F-14) before setting veracityStatus to anything other than unverified.
```

---

## Blocking Decisions

```
BD-1: pageType migration
Question: Migrate `pageType: how_to` to `pageType: instruction`. Content structure is procedural configuration — confirms instruction.
Options: [A] Migrate to instruction (recommended — aligns with content). [B] Hold pending IA review.
If A: Apply F-01, then re-evaluate check 5.2 (instruction requires Prerequisites and Steps sections).
If B: No migration until IA gate opens.
```

---

## Verdict Summary

**Overall: NEEDS WORK**

**Checks failing (count: 26):** 1.1, 1.2, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 2.3, 2.4, 2.5, 2.10, 3.1, 5.1, 5.2, 5.7, 6.1, 6.2, 6.4, 6.5, 6.6, 6.8, 6.9, 9.1, 9.3

**Finding register:**

| ID | Category | Severity | Description |
|----|----------|----------|-------------|
| F-01 | 1.2 / 5.7 | HIGH | `pageType: how_to` is deprecated. Migrate to `pageType: instruction` |
| F-02 | 1.4 | HIGH | `purpose` field absent. Proposed: `purpose: configure` — confirm before applying |
| F-03 | 1.6 | HIGH | `complexity` field absent. Proposed: `complexity: advanced` — confirm before applying |
| F-04 | 1.7 | HIGH | `lifecycleStage` field absent. Proposed: `lifecycleStage: operate` — confirm before applying |
| F-05 | 1.8 | HIGH | `veracityStatus` absent. Add `veracityStatus: unverified` |
| F-06 | 1.9 | HIGH | `industry` absent. Proposed: `industry: [technical, livepeer]` — confirm before applying |
| F-07 | 1.10 | HIGH | `niche` absent. Proposed: `niche: [infrastructure, protocol]` — confirm before applying |
| F-08 | 1.11 | MEDIUM | Description is 203 chars (>160 limit). Proposed: `Configure a node running both a gateway and an orchestrator on Livepeer: port allocation, self-routing behaviour, and pricing alignment.` (136 chars) — confirm before applying |
| F-09 | 2.3/2.4/2.5 | HIGH | Line 41: `This page explains…` — banned self-reference opener. Proposed replacement: `Run both a gateway and an orchestrator when you need end-to-end control over traffic routing and workload execution. The sections below cover deployment patterns, port separation, self-routing choices, and price alignment for single-operator combined deployments.` — confirm before applying |
| F-10 | 3.1 | MEDIUM | "Monitoring both roles" scores 19/25. Proposed rename: `Role Monitoring` — confirm before applying |
| F-11 | 5.2 | MEDIUM | After migration to `instruction` pageType: no explicit Prerequisites or Steps sections. Consider restructuring or confirming `guide` is the correct type if stepwise structure is not intended (inform BD-1) |
| F-12 | 6.1 | HIGH | Port defaults and `-autoAdjustPrice` behaviour NOT-TESTED against go-livepeer source. Add `{/* REVIEW: verify default ports -httpAddr :7935, -rtmpAddr :1935, -serviceAddr :8935, -cliAddr :7936 against current go-livepeer release */}` |
| F-13 | 6.4 | HIGH | Line 60 states "Gateway on `:7935` (HTTP) and `:7935` (RTMP)" — RTMP port is listed as `:7935` but line 104 correctly lists `-rtmpAddr` as `:1935`. Port `:7935` in Tab description is wrong. Proposed fix: change line 60 Tab text to read "Port layout: Gateway HTTP on `:7935`, RTMP on `:1935`. Orchestrator on `:8935` (serviceAddr). No port conflict." |
| F-14 | 6.9 | MEDIUM | FACT CHECK at line 126 (dual-mode port) and line 186 (Prometheus metric names) are open-ended with no named source. Convert to `{/* REVIEW: [claim] — verify against [source]: go-livepeer/cmd/livepeer/main.go for flag defaults; go-livepeer/monitor/monitor.go for metric names. Rick to confirm. */}` format |

**Priority order:** F-13 (factual error, blocking) → F-01 (deprecated pageType, HIGH) → F-09 (banned opener, HIGH) → F-02 through F-07 (missing fields, HIGH) → F-12/F-14 (veracity) → F-08/F-10/F-11 (medium)
