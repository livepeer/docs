# Per-Page Quality Check Report
## `v2/orchestrators/guides/operator-considerations/business-case.mdx`

**Review date:** 2026-03-24
**Reviewer:** Claude Code (per-page quality check agent)
**Check framework:** `v2/orchestrators/_workspace/canonical/checks.mdx`
**Frameworks ref:** `v2/orchestrators/_workspace/canonical/Frameworks.mdx`
**Navigation source:** `docs.json` lines 2874–2880

---

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|-------|----------|-------|-----------|-------|
| `title` | Yes | `'The Commercial Case'` | PASS | — |
| `sidebarTitle` | Yes | `'Commercial Case'` | PASS | — |
| `description` | Yes | ~165 chars, subject-first | BORDERLINE | Marginally over 160-char limit; no self-reference |
| `pageType` | Yes | `guide` | PASS | Valid 7-type canonical value |
| `audience` | Yes | `orchestrator` | PASS | Valid token |
| `purpose` | Yes | `evaluation` | FAIL | Not in 15-value canonical set. Canonical value is `evaluate`. Error type (c): invalid value. |
| `complexity` | No | — | FAIL | Required field missing |
| `lifecycleStage` | No | — | FAIL | Required field missing |
| `keywords` | Yes | 11 entries | PASS | Specific and searcher-intent-aligned |
| `og:image` block | Yes | All 5 OG fields present | PASS | — |
| `industry` | No | — | FAIL | Required field per P41 |
| `niche` | No | — | FAIL | Required field per P41 |
| `veracityStatus` | No | — | FAIL | Required; page has 3 REVIEW flags + 1 TODO block |
| `status` | Yes | `current` | FAIL | `status: current` requires `veracityStatus: verified` AND zero REVIEW flags (checks.mdx §1.8). Neither condition met. |
| `lastVerified` | Yes | `'2026-03-15'` | INFO | Not a required field; present |

**Required field count:** 6/10. Missing: `complexity`, `lifecycleStage`, `veracityStatus`, `industry`, `niche`.

---

## Category 1 — FRONTMATTER & TAXONOMY

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 1.1 | All 10 required fields present | FAIL | Missing: `complexity`, `lifecycleStage`, `veracityStatus`, `industry`, `niche` |
| 1.2 | `pageType` uses 7-type canonical schema | PASS | `guide` is a valid 7-type value |
| 1.3 | `pageVariant` valid if present | N/A | Field absent; not required unless migrating from deprecated pageType |
| 1.4 | `purpose` uses 15-value canonical set | FAIL | `evaluation` is not canonical. Canonical value is `evaluate`. Error type (c): invalid value. Proposed: `purpose: evaluate` — confirm before applying. |
| 1.5 | `audience` uses 7-token set | PASS | `orchestrator` valid |
| 1.6 | `complexity` single canonical value | FAIL | Field absent. Proposed: `complexity: advanced` — confirm before applying. |
| 1.7 | `lifecycleStage` single canonical value | FAIL | Field absent. Proposed: `lifecycleStage: evaluate` — confirm before applying. |
| 1.8 | `veracityStatus` present and honest | FAIL | Absent. Page has 3 REVIEW flags and 1 TODO block. Must be `veracityStatus: unverified`. `status: current` is incoherent without `veracityStatus: verified` (checks.mdx §1.8, P39). Change `status` to `draft`. |
| 1.9 | `industry` array valid | FAIL | Absent. Required per P41. Proposed: `industry: [business, technical]` — confirm before applying. |
| 1.10 | `niche` array valid | FAIL | Absent. Required per P41. Proposed: `niche: [infrastructure, web3]` — confirm before applying. |
| 1.11 | `description` well-formed | PASS | Subject-first, no self-reference, UK English. Marginally over 160 chars (~165) — borderline. |
| 1.12 | OG image block complete | PASS | All 5 fields present |
| 1.13 | `keywords` quality | PASS | `pricePerGateway`, `SLA`, `commercial GPU`, `gateway relationship` are strong, searcher-intent-aligned |

**Category 1 verdict: FAIL** — 8 checks fail: 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10 (status incoherence logged under 1.8).

---

## Category 2 — VOICE & COPY

**Banned word scan (P24 — show the work):**
- `effectively` — line 351: "Pool operators are **effectively** GPU infrastructure businesses" — FOUND.
- `essentially` — not found.
- `basically` — not found.
- `meaningful` — not found.
- `significant` — not found in body prose on this page.
- `real` (intensifier) — line 277: "has **real** negotiating leverage" — FOUND.
- `various` — not found.
- `several` — line 347: "**Several** types of operator run commercial-grade Orchestrators" — FOUND.
- `obviously` / `clearly` — not found.

**Banned phrase scan:**
- "This page covers" — line 57: "This page covers what professional-grade Orchestrator operation looks like in practice." — FOUND.
- "The reason is straightforward" — line 151: "The reason is straightforward:" — FOUND.
- "among other factors" — line 218: "Gateways rank Orchestrators by response latency among other factors." — FOUND.

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 2.1 | UK English throughout | PASS | No US spellings found. No -ize endings. Hyphens used (not em-dashes). |
| 2.2 | Zero banned words | FAIL | Three violations: (1) "effectively" line 351; (2) "real" as intensifier line 277; (3) "several" line 347 |
| 2.3 | Zero banned phrases | FAIL | Three violations: (1) "This page covers" line 57; (2) "The reason is straightforward" line 151; (3) "among other factors" line 218 |
| 2.4 | Zero banned constructions | FAIL | See Banned Construction Scan below |
| 2.5 | Opening order correct | FAIL | Lines 54–57: opens with what "most operators" think, then self-reference. Should open with the commercial vs hobbyist distinction directly. Line 57 "This page covers" violates check 2.4. |
| 2.6 | Paragraph discipline | PASS | Most paragraphs one-job. Lead sentences state facts. Note callout appropriately closes on caveat (acceptable in a Note component). |
| 2.7 | Audience register correct | PASS | Orchestrator register: operational, economics-focused, hardware-aware. Direct and practical. |
| 2.8 | Per-audience prohibited phrases absent | PASS | No "easy to set up", "the network rewards you for", "simple configuration" found. |
| 2.9 | No passive value statements | PASS | Claims concrete: 99%+ uptime, per-Gateway pricing mechanics, VRAM sum logic stated directly. |
| 2.10 | No hedging openers | FAIL | Line 54: "Most Orchestrator operators start by thinking about LPT inflation rewards." — generalisation about others before the subject. Violates opening-order rule. |
| 2.11 | Terminology consistent | PASS | `pool worker`, `active set`, `Cascade`, `probabilistic micropayment tickets` used consistently with locked set. `pool worker` not defined at first use on this page — flagged under 4.5. |

### Banned Construction Scan

**Scope:** body prose, headings, frontmatter `description`, Notes, table cells, card descriptions, CustomDivider `middleText` props, Accordion `title` props.

| Line | Sentence / Text | Pattern | Classification | Flag? |
|------|-----------------|---------|----------------|-------|
| 57 | "This page covers what professional-grade…" | `This page [verb]` | self-reference | YES — check 2.4 |
| 142 | "Neither model is superior" | `not [X]` (implicit) | BORDERLINE | "Neither" as negation of a comparison — not a primary value statement. PASS. |
| 174 | "monthly ETH fee income…**can** exceed LPT inflation income by a substantial margin" | `can [verb]` in value claim | value-claim | YES — check 2.4 |
| 218 | "…by response latency among other factors" | `among other factors` | banned phrase | YES — check 2.3 (already logged) |
| 305 | "competitive but **not floor-level**" | `not [X]` as primary descriptor | value-claim | YES — check 2.4. State positive. |
| 307 | "automatic adjustment **can** undercut commercial relationships" | `can [verb]` in value claim | value-claim | YES — check 2.4 |
| 351 | "Pool operators are **effectively** GPU…" | banned word | — | Already logged under 2.2 |
| 277 | "has **real** negotiating leverage" | banned word | — | Already logged under 2.2 |

**CustomDivider `middleText` props (P20 scan):**
- "Two Operating Models", "Service Fee Economics", "Operational Standards", "Gateway Relationships", "Positioning for Work", "Who Operates Commercially" — no em-dashes, no banned terms. All PASS.

**Accordion `title` props (P20 scan):**
- "Capability selection", "Pricing discipline", "Infrastructure investment", "Monitoring and alerting" — all PASS.

**Em-dash scan (P30 — all visible text):**
Page uses ` - ` (spaced hyphen) not em-dashes. No `—` characters found in body prose, headings, component props, or frontmatter description. PASS.

**Category 2 verdict: FAIL** — Fails 2.2, 2.3, 2.4, 2.5, 2.10.

---

## Category 3 — SECTION NAMING & HEADINGS

`Related Pages` heading is fully exempt from all heading checks (P16).

### Heading Score Table

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total | Pass? |
|---------|-----------|-------|-----------|---------|-------------|-------|-------|
| Hobbyist vs Commercial | 3 | 3 | 3 | 4 | 4 | 17/25 | FAIL |
| Why Service Fees Scale | 3 | 3 | 4 | 4 | 4 | 18/25 | FAIL |
| What Commercial Operation Requires | 2 | 2 | 3 | 3 | 2 | 12/25 | FAIL |
| Uptime and reliability (H3) | 4 | 3 | 4 | 5 | 4 | 20/25 | PASS |
| Model warm-up management (H3) | 4 | 3 | 4 | 4 | 4 | 19/25 | FAIL |
| Latency targets (H3) | 4 | 3 | 5 | 5 | 5 | 22/25 | PASS |
| Working with Gateways | 3 | 3 | 4 | 4 | 4 | 18/25 | FAIL |
| Per-Gateway pricing (H3) | 5 | 4 | 5 | 5 | 4 | 23/25 | PASS |
| Capability signalling (H3) | 4 | 4 | 5 | 4 | 5 | 22/25 | PASS |
| Building Gateway relationships (H3) | 3 | 2 | 3 | 3 | 3 | 14/25 | FAIL |
| How to Position for Commercial Workloads | 2 | 2 | 3 | 2 | 1 | 10/25 | FAIL |
| The Commercial Operator Landscape | 3 | 2 | 3 | 3 | 2 | 13/25 | FAIL |

**Score rationale notes:**
- "Hobbyist vs Commercial": literal X vs Y contrast label (check 3.3 violation). Better: "Operating Models".
- "Why Service Fees Scale": weak — names the reasoning not the concept. Better: "Fee Income Mechanics".
- "What Commercial Operation Requires": "What [X] Requires" follows question structure; verbose. Better: "Commercial Operation Standards".
- "Working with Gateways": process label. Better: "Gateway Relationship Model".
- "Building Gateway relationships": process verb label, mixed-case inconsistency. Better: "Gateway Outreach".
- "How to Position for Commercial Workloads": "How to" opener. Better: "Commercial Positioning".
- "The Commercial Operator Landscape": generic "Landscape" pattern. Better: "Operator Archetypes".

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 3.1 | Every heading ≥20/25 | FAIL | 8 of 12 scored headings fail the 20/25 threshold |
| 3.2 | No banned/weak standalone heading terms | PASS | No Banned-tier terms found ("Basics", "Notes", "How It Works", "See Also", etc.) |
| 3.3 | No literal contrast labels | FAIL | "Hobbyist vs Commercial" is an X vs Y heading |
| 3.4 | Domain-anchor rule applied | PASS | All headings interpretable in context |
| 3.5 | Heading names concept, not examples | PASS | No example-list headings |
| 3.6 | Title well-formed | PASS | "The Commercial Case" — concept-derived, 3 words |
| 3.7 | Sounds like expert editorial choice | FAIL | "What Commercial Operation Requires", "How to Position for Commercial Workloads", "The Commercial Operator Landscape" are safe bureaucratic labels |

**Category 3 verdict: FAIL** — Fails 3.1, 3.3, 3.7.

---

## Category 4 — PAGE STRUCTURE

Navigation context (docs.json lines 2876–2879):
Sequence: `operator-rationale` → `business-case` → `operator-impact` → `requirements`

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 4.1 | One purpose, one audience, one job | PASS | Serves a commercial orchestrator evaluating the commercial operating model. One job. |
| 4.2 | Purpose statement test passes | PASS | "This page lets the orchestrator evaluate whether commercial-grade operation fits their goals and what it requires." |
| 4.3 | PREV/NEXT adjacency correct | PASS | Arriving from `operator-rationale` (decision matrix) → `business-case` (commercial deep-dive) is logical. Nav confirmed from docs.json lines 2876–2877. |
| 4.4 | No dead ends | FAIL | 2 Related Pages links are broken (F-08, F-09). Dead links are dead ends. |
| 4.5 | Prerequisites stated or linked | FAIL | `pool worker` used at line 349 without definition (first use on this page). `Cascade` at line 297 has parenthetical "(real-time AI)" — borderline acceptable but inconsistent with per-page definition rule. |
| 4.6 | Out-of-scope clear | PASS | Stays within commercial orchestrator scope. Does not drift into gateway setup. |
| 4.7 | Information type per section correct | PASS | `purpose: evaluate` (once corrected). Primary types — evaluative, analytical, factual — are all present per Frameworks.mdx §1.6. |
| 4.8 | No content duplication | INFO | "Two Operating Models" table overlaps thematically with operator-rationale path decision table but takes a different angle (commercial framing vs decision matrix). Acceptable. |
| 4.9 | Section orientation page present | N/A — section-level check |
| 4.10 | Cross-tab links at journey intersections | N/A — tab-level check |

**Category 4 verdict: FAIL** — Fails 4.4, 4.5.

---

## Category 5 — LAYOUT & COMPONENTS

**Component matrix for `guide`** (component-layout-decisions.mdx):
- Required sections: Overview, Steps or H2 sections
- Preferred: Steps, Step, CodeGroup, Note, Info, Tip, Card, CardGroup
- Avoid: Coming Soon, PreviewCallout

| Component | Used? | Appropriate for `guide`? | Notes |
|-----------|-------|--------------------------|-------|
| `CustomDivider` | Yes | NOT-TESTED | Not listed in component-layout-decisions.mdx. P22 applies. |
| `LinkArrow` | Yes | NOT-TESTED | Not listed in component-layout-decisions.mdx. P22 applies. |
| `StyledTable` / `TableRow` / `TableCell` | Yes | NOT-TESTED | Enhanced table pattern. Not in matrix explicitly. P22 applies. |
| `CenteredContainer`, `BorderedBox` | Imported, not used | FAIL | Dead imports. Present in import statement (line 50) but not used in body. |
| `ScrollableDiagram` | Imported, not used | INFO | Line 49 import; not used in body. Confirm if needed. |
| `AccordionGroup` / `Accordion` | Yes | BORDERLINE | Not in preferred list for `guide` explicitly; listed for `concept`. Functionally appropriate here. |
| `Note` | Yes | PASS | Listed as preferred for `guide` |
| `Card` / `CardGroup` | Yes | PASS | Listed as preferred for `guide` |
| Mermaid (code blocks) | Yes | PASS | CodeGroup/code blocks preferred for `guide` |
| TODO block (lines 32–44) | Yes | FAIL | Explicitly avoided for `guide` type (check 5.4) |

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 5.1 | Correct template for pageType | PASS | H2-section structure with intro-equivalent opening fits `guide` template |
| 5.2 | Required sections present | PASS | Overview-equivalent intro, multiple H2 topic sections |
| 5.3 | Only approved components used | NOT-TESTED | `CustomDivider`, `LinkArrow`, `StyledTable` not in the matrix. P22: cannot mark FAIL without reading full component framework. |
| 5.4 | Avoided components absent | FAIL | TODO block (lines 32–44) present. Explicitly avoided for `guide`. Inline TODO at line 226 also present. |
| 5.5 | Information type → component mapping correct | PASS | Evaluative/analytical content uses tables and prose; Mermaid for flow comparisons. |
| 5.6 | MDX renders clean | NOT-TESTED | Cannot run dev server. Dead imports (CenteredContainer, BorderedBox, ScrollableDiagram) may not cause render error but are maintenance debt. |
| 5.7 | No old-schema frontmatter | FAIL | `purpose: evaluation` is an invalid value (not old-schema exactly, but invalid). See check 1.4. |
| 5.8 | CSS uses custom properties only | PASS | CustomDivider `style` props use margin values only, no hardcoded hex colours. |
| 5.9 | Generated file banners | N/A — not a generated file |
| 5.10 | Component naming/import conventions | PASS | PascalCase, correct import paths from `/snippets/components/` |

**Category 5 verdict: FAIL** — Fails 5.4, 5.7.

---

## Category 6 — VERACITY

### Veracity Claims Inventory

| Claim | Line | Info type | Status |
|-------|------|-----------|--------|
| "Commercial Orchestrators target 99%+ uptime" | 199 | factual | UNVERIFIED — no source |
| Prometheus metrics endpoint port 7935 | 329 | technical | UNVERIFIED — needs go-livepeer docs confirmation |
| `-pricePerGateway` flag exists and works as described | 239 | technical | UNVERIFIED — needs go-livepeer CLI docs |
| `-autoAdjustPrice` flag exists | 307 | technical | UNVERIFIED — needs go-livepeer CLI docs |
| `-aiModels` flag exists | 261 | technical | UNVERIFIED — needs go-livepeer CLI docs |
| Capability manifest returned during session negotiation | 252 | technical | UNVERIFIED — needs protocol docs |
| "tools.livepeer.cloud/ai/network-capabilities" URL | 291 | structural | UNVERIFIED — live URL not tested |
| Gateways rank by response latency (among other factors) | 218 | technical | UNVERIFIED — ranking algorithm not sourced |

**REVIEW flags present:**
1. Line 177: suppress missing revenue data
2. Line 266: suppress unverified Gateway operator contacts
3. Line 354: suppress unverified pool operator names

**TODO blocks:**
1. Lines 32–44: pre-publish verification checklist
2. Line 226: screenshot placeholder

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 6.1 | Every factual claim citable | FAIL | CLI flags, port 7935, capability manifest behaviour, Gateway ranking algorithm — none sourced |
| 6.2 | Code/commands tested | NOT-TESTED | Code block at line 241 shows flag syntax — not confirmed against current go-livepeer CLI |
| 6.3 | No deprecated API usage | NOT-TESTED | Cannot verify current flag names without go-livepeer build |
| 6.4 | Numbers are real | FAIL | "99%+ uptime" (line 199) stated as commercial standard without source |
| 6.5 | REVIEW flags for unverified claims | PASS | Three REVIEW flags placed inline |
| 6.6 | `veracityStatus` honest | FAIL | Field absent; must be `unverified` given REVIEW flags and unverified technical claims |
| 6.7 | Authoritative vs AI-generated glossary | N/A — no glossary references |
| 6.8 | Source staleness check | FAIL | CLI flags and port numbers subject to go-livepeer release changes; no staleness flag |

**Category 6 verdict: FAIL** — Fails 6.1, 6.4, 6.6, 6.8.

---

## Category 7 — NAVIGATION & IA

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 7.1 | Page exists in docs.json | PASS | `v2/orchestrators/guides/operator-considerations/business-case` confirmed at docs.json line 2877 |
| 7.2 | Navigation matches file system | PASS | File path matches docs.json entry |
| 7.3 | Tab entry portal routes to all sections | N/A — tab-level check |
| 7.4 | No structural orphans | PASS | Reachable from Operator Considerations group |
| 7.5 | Audience journey complete | PASS | Logical escalation: rationale → commercial case → impact → requirements |
| 7.6 | Cross-tab graduation paths | INFO | Links to `operator-rationale`, `pricing-strategy`, `gateways-orchestrators`, `protocol-influence`. Two are broken (see Category 8). |
| 7.7 | File in correct lane | PASS | In `v2/orchestrators/guides/`, not in `_workspace/` |
| 7.8 | File naming conventions | PASS | `business-case.mdx` — no deprecated prefix |
| 7.9 | `_workspace/` TTL | N/A — not a workspace file |

**Category 7 verdict: PASS**

---

## Category 8 — LINKS & RENDERING

**Link verification (P47 — full path against docs.json):**

| href | Full path in docs.json? | docs.json line | Status |
|------|------------------------|----------------|--------|
| `/v2/orchestrators/concepts/incentive-model` | Yes | 2843 | PASS |
| `/v2/orchestrators/guides/payments-and-pricing/pricing-strategy` (lines 59, 378) | No — docs.json uses `config-and-optimisation/pricing-strategy` | 2921 | FAIL |
| `/v2/orchestrators/guides/monitoring-and-tools/metrics-monitoring` (line 338) | No — docs.json uses `monitoring-and-tooling/metrics-and-alerting` | 2932 | FAIL |
| `/v2/orchestrators/guides/operator-considerations/operator-rationale` (line 376) | Yes | 2876 | PASS |
| `/v2/orchestrators/guides/advanced-operations/gateways-orchestrators` (line 382) | No — docs.json has `gateway-relationships` (2939) and `gateway-orchestrator-interface` (2940) | — | FAIL |
| `/v2/orchestrators/guides/operator-considerations/protocol-influence` (line 384) | No — not found in docs.json | — | FAIL |
| External URLs (Discord, Forum, livepeer.cloud) | External | — | NOT-TESTED |

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 8.1 | All internal links resolve | FAIL | 4 broken: `pricing-strategy` (wrong folder), `metrics-monitoring` (wrong folder + slug), `gateways-orchestrators` (not in docs.json), `protocol-influence` (not in docs.json) |
| 8.2 | All external links live | NOT-TESTED | External links not verified |
| 8.3 | All snippet imports resolve | NOT-TESTED | Import paths use correct `/snippets/` convention; cannot verify without build |
| 8.4 | All images load | N/A — no inline images |
| 8.5 | Page renders without error | NOT-TESTED | Dead imports present; unlikely to cause render errors but not confirmed |
| 8.6 | No TODO/TBD/Coming Soon in published content | FAIL | TODO block lines 32–44 and inline TODO line 226 present in publishable file |

**Category 8 verdict: FAIL** — Fails 8.1, 8.6.

---

## Category 9 — PROCESS & GOVERNANCE

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 9.1 | Human sign-off recorded | FAIL | TODO block (lines 42–44) explicitly lists items pending human review: "Review flags — particularly commercial operator names and revenue figures. Review page layout for Persona D/C journey fit." No sign-off recorded. |
| 9.2 | Consuming decisions in registry | NOT-TESTED | Cannot verify without reading decision registry against this page's dependencies |
| 9.3 | Gate prerequisites met | FAIL | Orchestrators IA not approved, terminology not locked, content pass not open (tab-status.md). Page not eligible for publication. |
| 9.4 | Phase ordering respected | INFO | Content writing (Phase 6) appears complete; veracity (Phase 7) not yet run |
| 9.5 | Findings gathered before fixes | INFO | TODO block indicates page is in-progress, not post-review |
| 9.6 | Feedback routed | INFO | No routing evidence; not a current blocker |

**Category 9 verdict: FAIL** — Fails 9.1, 9.3.

---

## Spelling/Typo Check

Visible text scanned. No typos found in headings, body prose, table cells, card descriptions, or component props. "Prometheus", "PagerDuty", "hobbyist" all correctly spelled.

---

## Cross-Category Connections

```
Root Cause A: Missing frontmatter fields + invalid purpose value
Affects: 1.1 + 1.4 + 1.6 + 1.7 + 1.8 + 1.9 + 1.10 + 5.7
Fix: Add complexity, lifecycleStage, veracityStatus, industry, niche; correct purpose to `evaluate`.
All proposed values require human confirmation before applying.
```

```
Root Cause B: status: current + absent veracityStatus + REVIEW flags
Affects: 1.8 + 6.6 + 9.3
Fix: Set `status: draft` AND `veracityStatus: unverified`. Do not move to `status: current` until all REVIEW flags are resolved and CLI claims are verified.
```

```
Root Cause C: Broken internal links
Affects: 8.1 + 4.4
Fix: F-04, F-05, F-08, F-09 — four links need correction or removal.
```

```
Root Cause D: TODO block in published content
Affects: 5.4 + 8.6 + 9.1
Fix: Move or resolve TODO block (lines 32–44) and inline TODO at line 226.
```

---

## Blocking Decisions

**BD-1:** `protocol-influence` link (Related Pages, line 384) — target not in docs.json. Options: (A) remove card; (B) correct path once page is confirmed to exist. Alison to decide.

**BD-2:** `gateways-orchestrators` link (Related Pages, line 382) — not in docs.json. Closest matches: `gateway-relationships` (docs.json line 2939) or `gateway-orchestrator-interface` (docs.json line 2940). Alison to decide which is the correct target.

---

## Verdict Summary

**Overall: NEEDS WORK**

**27 checks fail:** 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 2.2, 2.3, 2.4, 2.5, 2.10, 3.1, 3.3, 3.7, 4.4, 4.5, 5.4, 5.7, 6.1, 6.4, 6.6, 6.8, 8.1, 8.6, 9.1, 9.3.

Content quality is good. All issues are mechanical fixes: missing frontmatter, broken links, banned words/constructions, heading renames, and TODO/REVIEW cleanup. Not a REWRITE.

---

## Prioritised Fix List

**CRITICAL**

**F-01** — `purpose: evaluation` is invalid
Location: frontmatter line 27
Fix: Change to `purpose: evaluate`. Proposed: `purpose: evaluate` — confirm before applying.

**F-02** — `status: current` with REVIEW flags and absent `veracityStatus`
Location: frontmatter line 28
Fix: Change `status: current` to `status: draft`. Do not revert to `current` until all REVIEW flags are resolved and all unverified technical claims are confirmed.

**F-03** — Add `veracityStatus: unverified`
Location: frontmatter (add after `status`)
Fix: Add `veracityStatus: unverified`. Required field per check 1.8.

**F-04** — Broken link: `pricing-strategy` uses wrong folder path
Location: line 59 (LinkArrow) and line 378 (Related Pages Card)
Fix: Change `/v2/orchestrators/guides/payments-and-pricing/pricing-strategy` to `/v2/orchestrators/guides/config-and-optimisation/pricing-strategy` (confirmed at docs.json line 2921). Apply to both occurrences.

**F-05** — Broken link: `metrics-monitoring` wrong folder and slug
Location: line 338 (Accordion "Monitoring and alerting", LinkArrow)
Fix: Change `/v2/orchestrators/guides/monitoring-and-tools/metrics-monitoring` to `/v2/orchestrators/guides/monitoring-and-tooling/metrics-and-alerting` (confirmed at docs.json line 2932).

**HIGH**

**F-06** — Add 5 missing required frontmatter fields
Location: frontmatter
Fix (confirm all values before applying):
- Proposed: `complexity: advanced` — confirm before applying.
- Proposed: `lifecycleStage: evaluate` — confirm before applying.
- Proposed: `industry: [business, technical]` — confirm before applying.
- Proposed: `niche: [infrastructure, web3]` — confirm before applying.
- `veracityStatus: unverified` — also covered by F-03.

**F-07** — Self-referential opener
Location: line 57
Fix: Delete the sentence "This page covers what professional-grade Orchestrator operation looks like in practice." The preceding two sentences (lines 54–56) already orient the reader.

**F-08** — Broken link: `gateways-orchestrators` not in docs.json (BD-2)
Location: line 382 (Related Pages Card)
Fix: Awaiting BD-2 decision. Likely fix: change href to `/v2/orchestrators/guides/advanced-operations/gateway-relationships`.

**F-09** — Broken link: `protocol-influence` not in docs.json (BD-1)
Location: line 384 (Related Pages Card)
Fix: Awaiting BD-1 decision. Likely fix: remove card, or confirm path once page is verified.

**MEDIUM**

**F-10** — Banned word: "effectively"
Location: line 351
Fix: "Pool operators are effectively GPU infrastructure businesses" → "Pool operators run as GPU infrastructure businesses,"

**F-11** — Banned word: "real" (intensifier)
Location: line 277
Fix: "has real negotiating leverage" → "has leverage worth acting on"

**F-12** — Banned word: "several"
Location: line 347
Fix: "Several types of operator run commercial-grade Orchestrators" → "Three types of operator run commercial-grade Orchestrators on the Livepeer network." (Three types are named in the paragraphs that follow: pool operators, enterprise GPU operators, dual-workload operators.)

**F-13** — Banned phrase: "The reason is straightforward"
Location: line 151
Fix: Delete "The reason is straightforward:". Open directly with: "Fee income scales with workload volume, while inflation rewards scale with stake."

**F-14** — Banned phrase: "among other factors"
Location: line 218
Fix: "Gateways rank Orchestrators by response latency among other factors." Enumerate the factors if verifiable. If not: `{/* REVIEW: confirm Gateway ranking criteria (latency + capability score + pricing history?) before enumerating */}` and replace with: "Gateways rank Orchestrators by response latency, historical performance, and pricing."

**F-15** — Banned construction: `can exceed` in value claim
Location: line 174
Fix: "monthly ETH fee income from job processing can exceed LPT inflation income by a substantial margin" → "For Orchestrators with sustained high-volume Gateway relationships, monthly ETH fee income from job processing exceeds LPT inflation income."
Add: `{/* REVIEW: confirm this claim against active commercial operator data before asserting directly */}`

**F-16** — Banned construction: `not floor-level` as primary descriptor
Location: line 305
Fix: "competitive but not floor-level (under-pricing signals low quality to some Gateway operators)" → "competitive and above the floor — floor pricing signals low quality to some Gateway operators"
Note: Use parenthesis, not a dash, to avoid punctuation issues.

**F-17** — Banned construction: `can undercut` in value claim
Location: line 307
Fix: "automatic adjustment can undercut commercial relationships" → "automatic adjustment races to the floor price, undermining commercial relationships"

**F-18** — Undefined jargon: `pool worker` not defined at first use
Location: line 349 (first use of "pool worker" on this page as a standalone term in a heading paragraph)
Fix: Add parenthetical on first use: "Pool operators (where worker GPUs operate under a shared Orchestrator address)"
Note: `{/* REVIEW: confirm "pool worker" definition against protocol docs before inserting */}`

**F-19** — Dead imports
Location: line 50
Fix: Remove `CenteredContainer, BorderedBox` from line 50 import — neither is used in the page body. Also confirm whether `ScrollableDiagram` (line 49) is used; if not, remove that import too.

**F-20** — TODO block in published content
Location: lines 32–44
Fix: Move the block to a `_workspace/` notes file, or delete once all items are resolved. Do not publish with this block in place.

**INFO**

**F-21** — Description marginally over 160 chars
Location: frontmatter lines 4–6
Proposed trim (confirm before applying): "How commercial Orchestrators earn from service fees, build Gateway relationships, and position for application workloads." (119 chars)

**F-22** — Heading: "Hobbyist vs Commercial" (X vs Y contrast label)
Location: H2 heading, line 63
Fix: Rename to "Operating Models"

**F-23** — Heading: "What Commercial Operation Requires"
Location: H2 heading, line 187
Fix: Rename to "Commercial Operation Standards"

**F-24** — Heading: "How to Position for Commercial Workloads"
Location: H2 heading, line 281
Fix: Rename to "Commercial Positioning"

**F-25** — Heading: "The Commercial Operator Landscape"
Location: H2 heading, line 345
Fix: Rename to "Operator Archetypes"

**F-26** — Heading: "Building Gateway relationships"
Location: H3 heading, line 264
Fix: Rename to "Gateway Outreach"
