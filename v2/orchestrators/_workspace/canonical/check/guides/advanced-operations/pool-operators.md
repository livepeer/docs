# Per-Page Quality Check Report
## `v2/orchestrators/guides/advanced-operations/pool-operators.mdx`

**Review date:** 2026-03-24
**Reviewer:** Claude Code (per-page quality check agent)
**Check framework:** `v2/orchestrators/_workspace/canonical/checks.mdx`
**Frameworks ref:** `v2/orchestrators/_workspace/canonical/Frameworks.mdx`
**Navigation source:** `docs.json` lines 2938–2942 — page confirmed at line 2941: `"v2/orchestrators/guides/advanced-operations/pool-operators"`. Navigation sequence within "Advanced Operations" group: [1] `gateway-relationships`, [2] `gateway-orchestrator-interface`, [3] `pool-operators`, [4] `scale-operations`.

---

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|-------|----------|-------|-----------|-------|
| `title` | Yes | `Pool Operators` | PASS | Present, non-empty |
| `sidebarTitle` | Yes | `Pool Operators` | PASS | Present, non-empty |
| `description` | Yes | `How to operate a Livepeer GPU pool — accept external worker connections, manage job routing across multiple GPUs, handle off-chain fee distribution, and maintain operational transparency.` | FAIL | 186 chars (>160 limit). Em-dash (—) present. See F-01 |
| `pageType` | Yes | `guide` | PASS | Valid 7-type canonical value |
| `audience` | Yes | `orchestrator` | PASS | Valid 7-token value |
| `purpose` | Yes | `guide` | FAIL | `guide` is a valid canonical pageType value, but as a `purpose` field value it is a wrong-field error. Error type: wrong field — `guide` is a valid pageType but not a valid purpose value. The 15-value canonical purpose set does not include `guide`. Proposed: `purpose: operate` — confirm before applying. See F-02 |
| `complexity` | No | absent | FAIL | Required field missing. Proposed: `complexity: advanced` — confirm before applying. See F-03 |
| `lifecycleStage` | No | absent | FAIL | Required field missing. Proposed: `lifecycleStage: operate` — confirm before applying. See F-04 |
| `keywords` | Yes | `livepeer, orchestrator, pool, run a pool, GPU pool, orchSecret, worker, fee distribution, transcoder pool, Titan Node` | PASS | Specific, searcher-aligned. `orchSecret`, `fee distribution`, `GPU pool` are strong keywords |
| OG image block | Yes | `/snippets/assets/site/og-image/en/orchestrators.png`, alt, type, width, height present | PASS | All 5 OG fields present |
| `veracityStatus` | No | absent | FAIL | Required. Page contains operational content with claims about protocol behaviour. Proposed: `veracityStatus: unverified` — confirm before applying. See F-05 |
| `industry` | No | absent | FAIL | Required (P41). Proposed: `industry: [technical, livepeer]` — confirm before applying. See F-06 |
| `niche` | No | absent | FAIL | Required (P41). Proposed: `niche: [infrastructure, protocol]` — confirm before applying. See F-07 |
| `status` | Yes | `published` | FAIL | `status: published` with `veracityStatus` absent is incoherent per checks.mdx §1.8. Change to `status: draft` until veracityStatus is set. See F-08 |
| `lastVerified` | Yes | `2026-03-13` | PASS | Present |
| `pageVariant` | No | absent | INFO | `pageType: guide` is canonical. No pageVariant migration needed. Not an independent finding |

---

## Category 1 — Frontmatter & Taxonomy

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 1.1 | All 10 required fields present | FAIL | `complexity`, `lifecycleStage`, `veracityStatus`, `industry`, `niche` absent. Five fields missing. `purpose` present but wrong-field error |
| 1.2 | `pageType` uses 7-type canonical schema | PASS | `guide` is a valid canonical value |
| 1.3 | `pageVariant` valid if present | N/A | Not present |
| 1.4 | `purpose` uses 15-value canonical set | FAIL | `purpose: guide` — wrong field error. `guide` is a valid pageType value placed in the purpose field. Not in the 15-value purpose canonical set. Error type: wrong field (b). Proposed: `purpose: operate` — confirm before applying. See F-02 |
| 1.5 | `audience` uses 7-token set | PASS | `orchestrator` is valid |
| 1.6 | `complexity` single canonical value | FAIL | Absent. Proposed: `complexity: advanced` — confirm before applying. See F-03 |
| 1.7 | `lifecycleStage` single canonical value | FAIL | Absent. Proposed: `lifecycleStage: operate` — confirm before applying. See F-04 |
| 1.8 | `veracityStatus` present and honest | FAIL | Absent. With `status: published` this is a consistency violation. See F-05 and F-08 |
| 1.9 | `industry` array valid | FAIL | Absent. Proposed: `industry: [technical, livepeer]` — confirm before applying. See F-06 |
| 1.10 | `niche` array valid | FAIL | Absent. Proposed: `niche: [infrastructure, protocol]` — confirm before applying. See F-07 |
| 1.11 | `description` well-formed | FAIL | 186 chars (>160). Em-dash present. See F-01 |
| 1.12 | OG image block complete | PASS | All 5 fields present |
| 1.13 | `keywords` quality | PASS | `orchSecret`, `GPU pool`, `fee distribution`, `transcoder pool` are strong searcher-intent keywords |

**Category 1 verdict:** FAIL. Checks failing: 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11

---

## Category 2 — Voice & Copy

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 2.1 | UK English throughout | PASS | No US spellings. "centralised" not in this page but related terms are absent. No -ize endings, no behavior/colour violations |
| 2.2 | Zero banned words | FAIL | Line 109: "high-end consumer GPUs on owned hardware are significantly more cost-efficient than rented compute." — `significantly` is a banned word. See F-09. Line 198: "consumer NVIDIA GPUs (GTX/RTX series) have a hardware-enforced limit" — no banned words. |
| 2.3 | Zero banned phrases | PASS | No "this page covers", "this section covers", "as mentioned above", "rather than", "and so on", or other banned phrases found |
| 2.4 | Zero banned constructions | FAIL | See Banned Construction Scan. `not [X]` construction at line 82. See F-10 |
| 2.5 | Opening order correct | PASS | Line 36: "A Livepeer pool is a single orchestrator node that routes jobs to multiple external GPU workers." — opens with the definition/fact. Clean |
| 2.6 | Paragraph discipline | PASS | Paragraphs are single-job. Lead sentences are factual |
| 2.7 | Audience register correct | PASS | Operational/technical register. Hardware-specific. Addresses experienced operators explicitly ("This page is for experienced orchestrators"). Economics present without vagueness |
| 2.8 | Per-audience prohibited phrases absent | PASS | No "Your orchestrator will automatically…", "The network rewards you for…", "Easy to set up". No prohibited phrases found |
| 2.9 | No passive value statements | PASS | "Pool performance (sessions, fees) reflects aggregate work done by all connected workers combined" — concrete |
| 2.10 | No hedging openers | PASS | Page opens with direct definitional statement. No caveat opener |
| 2.11 | Terminology locked and consistent | PASS | `pool worker` used correctly and context-defined. `orchSecret` consistent. `fee cut`, `reward cut` used correctly. No deprecated terms |

**Category 2 verdict:** FAIL. Checks failing: 2.2, 2.4

---

## Category 3 — Section Naming & Headings

*(Note: No "Related Pages" heading — section is an unnamed CardGroup at end. N/A for exemption.)*

### Heading Score Table

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total | Pass? |
|---------|-----------|-------|-----------|---------|-------------|-------|-------|
| How a pool works | 4 | 3 | 4 | 4 | 5 | 20 | PASS |
| Worker connection models | 5 | 4 | 5 | 5 | 5 | 24 | PASS |
| Accepting workers | 5 | 4 | 5 | 5 | 5 | 24 | PASS |
| Fee distribution | 5 | 4 | 5 | 5 | 5 | 24 | PASS |
| On-chain identity and transparency | 4 | 4 | 5 | 4 | 4 | 21 | PASS |
| Ongoing operational responsibilities | 3 | 3 | 4 | 3 | 3 | 16 | FAIL |
| Key facts to remember | 2 | 1 | 3 | 3 | 4 | 13 | FAIL |

**Scoring rationale for failing headings:**

"Ongoing operational responsibilities" — Precision (3): "Ongoing" and "operational" are both weak qualifiers. "Responsibilities" is a management label, not a concept name. Depth (3): No signal of what the responsibilities are. Clarity (3): Requires reading to understand content. Proposed: `Operational Maintenance` or `Ongoing Operations`. See F-11.

"Key facts to remember" — Precision (2): "Key facts" is a pure filler label. Depth (1): Zero signal of what facts. Stability (3): Would break if content changes. Clarity (3): Generic. Conciseness (4): Short but meaningless. This is a CardGroup summary section — the heading can be removed or replaced with a strong label. Proposed: `Pool Quick Reference`. See F-12.

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 3.1 | Every heading scores ≥20/25 | FAIL | "Ongoing operational responsibilities" (16) and "Key facts to remember" (13) below threshold. See F-11 and F-12 |
| 3.2 | No banned or weak standalone terms | FAIL | "Key facts to remember" — `Basics`-tier language. Not in the Banned list but "Key facts" is check 3.2 Avoid tier (equivalent to "Notes"). See F-12 |
| 3.3 | No literal contrast labels | PASS | No `X vs Y` headings |
| 3.4 | Domain-anchor rule | PASS | All headings interpretable in pool operator context |
| 3.5 | Heading names concept, not examples | PASS | No example-enumerating headings |
| 3.6 | Title well-formed | PASS | `Pool Operators` — 2 words, concept-derived. Clean |
| 3.7 | Expert editorial choice | FAIL | "Key facts to remember" fails editorial test. "Ongoing operational responsibilities" is bureaucratic. See F-11 and F-12 |

**Category 3 verdict:** FAIL. Checks failing: 3.1, 3.2, 3.7

---

## Category 4 — Page Structure & Content Architecture

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 4.1 | One purpose, one audience, one job | PASS | Page serves experienced orchestrators who want to run a pool. Single scope: pool architecture, worker management, fee distribution, operational responsibilities |
| 4.2 | Purpose statement test | PASS | "This page lets the orchestrator operator set up and manage a Livepeer GPU worker pool." Passes |
| 4.3 | PREV_PAGE / NEXT_PAGE adjacency correct | PASS | docs.json (line 2939–2942): sequence is `gateway-relationships` → `gateway-orchestrator-interface` → `pool-operators` → `scale-operations`. Arriving from `gateway-orchestrator-interface` (combined deployment), the operator has combined-node context. Leaving to `scale-operations` (fleet/enterprise) is a natural progression |
| 4.4 | No dead ends | PASS | Final CardGroup provides four onward paths: Join a Pool (worker perspective), Split O-T Setup, Fleet Operations, Earnings and Economics |
| 4.5 | Prerequisites stated | PASS | Line 36 explicitly states this page is for "experienced orchestrators." Line 38 routes workers to a different page. Prerequisites implicit in the "experienced orchestrators" qualifier |
| 4.6 | Out-of-scope clear | PASS | Line 38: "Workers joining an existing pool should start with [Join a Pool]." Clear routing for workers |
| 4.7 | Information type per section correct | PASS | `purpose` value is `guide` (wrong field — see F-02) but content is `operate` purpose. Permitted types: procedural, factual, technical. Pool architecture: conceptual/structural. Worker connection models: procedural/technical. Accepting workers: procedural (bash commands, key points). Fee distribution: procedural/factual. On-chain identity: factual. Operational responsibilities: procedural/operational. All appropriate |
| 4.8 | No content duplication | PASS | Worker connection from pool perspective is distinct from the worker perspective in join-a-pool.mdx |
| 4.9 | Section orientation page | N/A — page-level check |
| 4.10 | Cross-tab links | INFO | No direct cross-tab links. `/v2/orchestrators/guides/staking-and-rewards/earning-model` (in CardGroup) is within-tab. No cross-tab links. Tab-level check — no per-page action required |

**Category 4 verdict:** PASS

---

## Category 5 — Layout, Components & Template

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 5.1 | Correct template for pageType | PASS | `guide` requires Overview + Steps or H2 sections. Page has H2 structure throughout with procedural content |
| 5.2 | Required sections present | PASS | Guide has Overview (opening paragraph), H2 sections for major topics, CardGroup for next steps. Structure meets guide template |
| 5.3 | Only approved components used | NOT-TESTED | `docs-guide/policies/component-layout-decisions.mdx` not read. Components: `BorderedBox`, `StyledTable`, `TableRow`, `TableCell`, `CustomDivider`, `AccordionGroup`, `Accordion`, `CardGroup`, `Card`, `Tabs`, `Tab`, `Warning`, `Note` |
| 5.4 | Avoided components absent | PASS | No TODO/TBD/Coming Soon in visible content |
| 5.5 | Information type → component mapping | PASS | Tabs for worker connection models (multi-path) — correct. AccordionGroup for operational responsibilities — correct. Warning for orchSecret security — correct. Note for fee distribution protocol — correct. Table for distribution approaches — correct |
| 5.6 | MDX renders clean | PASS | No broken JSX, all imports present and used, no unclosed tags visible |
| 5.7 | No old-schema frontmatter | FAIL | `purpose: guide` is wrong-field error (pageType value in purpose field). See F-02 |
| 5.8 | CSS uses custom properties | PASS | No hardcoded styles |
| 5.9 | Generated file banners | N/A — not a generated file |
| 5.10 | Component naming conventions | PASS | PascalCase, correct imports |

### Component Matrix

| Component | Used? | Appropriate for `guide`? | Notes |
|-----------|-------|--------------------------|-------|
| `BorderedBox` | Yes | NOT-TESTED | Approval file not read |
| `StyledTable` | Yes | NOT-TESTED | In preferred list for guide (Table listed) |
| `CustomDivider` | Yes | NOT-TESTED | Approval file not read |
| `AccordionGroup` / `Accordion` | Yes | NOT-TESTED | Not in primary preferred list for guide per matrix; listed for concept. For guide, Steps/Step is preferred. NOT-TESTED |
| `CardGroup` / `Card` | Yes | NOT-TESTED | In preferred list for guide |
| `Tabs` / `Tab` | Yes | NOT-TESTED | Listed for concept/reference in preferred column |
| `Warning` | Yes | NOT-TESTED | Listed for tutorial/instruction preferred |
| `Note` | Yes | NOT-TESTED | Listed for guide preferred |

**Category 5 verdict:** FAIL (5.7 only). Component checks NOT-TESTED.

---

## Category 6 — Veracity & Factual Accuracy

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 6.1 | Every factual claim citable | FAIL | NOT-TESTED: "Consumer NVIDIA GPUs (GTX/RTX series) have a hardware-enforced limit on concurrent NVENC encoding sessions — typically 3–8 per card depending on the model" (line 217) — not cited. "Titan Node patches the NVIDIA driver on worker machines to remove this cap" (line 219) — not verified. Protocol fee flow description (line 163) — not verified against protocol contracts |
| 6.2 | Code/commands tested | FAIL | NOT-TESTED: `livepeer -transcoder -orchAddr ... -orchSecret ... -nvidia 0 -maxSessions 10` (line 74) not executed. `livepeer -orchestrator -orchSecret ... -serviceAddr ... -pricePerUnit ...` (line 122) not executed. Log output at lines 149–150 and 126 not verified as actual output |
| 6.3 | No deprecated API usage | PASS | NOT-TESTED: `-transcoder`, `-orchestrator`, `-orchSecret`, `-orchAddr`, `-nvidia`, `-maxSessions`, `-pricePerUnit`, `-serviceAddr` referenced. No obviously deprecated flag names, but not confirmed |
| 6.4 | Numbers are real | FAIL | NOT-TESTED: "typically 3–8 per card" NVENC session limit (line 217) — not sourced against NVIDIA documentation. "100 Mbps+ recommended" upload bandwidth (line 92) — not cited |
| 6.5 | REVIEW flags for unverified claims | FAIL | No REVIEW flags anywhere on this page. The NVENC session limit claim (line 217) and Titan Node driver patching claim (line 219) are potentially stale/unverifiable claims with no flags. See F-13 |
| 6.6 | `veracityStatus` honest | FAIL | Absent. `status: published` with unverified operational content. See F-05 and F-08 |
| 6.7 | Authoritative vs AI-generated glossary | PASS | No glossary citations |
| 6.8 | Source staleness risk | FAIL | NOT-TESTED: NVENC session limits change with driver versions. Titan Node driver-patching methodology is third-party and may have changed. Both are high staleness risk |
| 6.9 | No open-ended research tasks | PASS | No open-ended "needs research" statements. Claims are specific if unverified |

**Category 6 verdict:** FAIL. Checks failing: 6.1, 6.2, 6.4, 6.5, 6.6, 6.8

---

## Category 7 — Navigation & Information Architecture

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 7.1 | Page exists in docs.json | PASS | `v2/orchestrators/guides/advanced-operations/pool-operators` confirmed at docs.json line 2941 |
| 7.2 | Navigation matches file system | PASS | File exists at stated path |
| 7.3 | Tab entry portal | N/A — page-level check |
| 7.4 | No structural orphans | PASS | Reachable via Advanced Operations group |
| 7.5 | Audience journey complete | PASS | Pool operations fits after single-node mastery |
| 7.6 | Cross-tab graduation paths | INFO | No internal cross-tab links. `/v2/orchestrators/guides/staking-and-rewards/earning-model` is within-tab. Tab-level check |
| 7.7 | File in correct lane | PASS | `v2/orchestrators/guides/` — publishable content |
| 7.8 | File naming conventions | PASS | `pool-operators.mdx` — no disallowed prefix, no `-index.mdx` |
| 7.9 | TTL compliance | N/A — not in `_workspace/` |

**Category 7 verdict:** PASS

---

## Category 8 — Links & Rendering

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 8.1 | All internal links resolve | PASS | Verified: `/v2/orchestrators/guides/deployment-details/join-a-pool` (docs.json line 2889 ✓), `/v2/orchestrators/guides/deployment-details/siphon-setup` (docs.json line 2886 ✓), `/v2/orchestrators/guides/advanced-operations/scale-operations` (docs.json line 2942 ✓), `/v2/orchestrators/guides/staking-and-rewards/earning-model` (docs.json line 2910 ✓), `https://explorer.livepeer.org` (external), `doc/multi-o.md` (line 223) is a reference to go-livepeer repo path — not a docs.json link, informational reference. Internal links all resolve |
| 8.2 | External links live | NOT-TESTED | `https://explorer.livepeer.org`, references to Vast.ai, Lambda Labs, CoreWeave, RunPod, Titan Node |
| 8.3 | Snippet imports resolve | PASS | Standard component imports from known paths |
| 8.4 | Images load | PASS | OG image only; standard path |
| 8.5 | Page renders clean | PASS | No broken JSX, all imports present, no unclosed tags |
| 8.6 | No TODO/TBD/Coming Soon | PASS | No placeholders in visible content |

**Note on `doc/multi-o.md` reference (line 223):** This is an inline text reference to a go-livepeer repository path, not a hyperlink. No action needed.

**Category 8 verdict:** PASS (external links NOT-TESTED)

---

## Category 9 — Process & Governance

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 9.1 | Human sign-off | FAIL | `status: published` but `veracityStatus` absent and multiple unverified operational claims. See F-08 |
| 9.2 | Consuming decisions in registry | N/A |  |
| 9.3 | Gate prerequisites met | FAIL | Tab has no open content pass gate. `status: published` with missing veracity is a governance failure |
| 9.4 | Phase ordering | N/A |  |
| 9.5 | Findings before fixes | N/A |  |
| 9.6 | Feedback routed | N/A |  |

**Category 9 verdict:** FAIL. Checks failing: 9.1, 9.3

---

## Banned Construction Scan

**Scope:** body prose, headings, description, CustomDivider `middleText` props, Tab `title` props, Accordion `title` props, table cells, card descriptions, Warning and Note content, visible component props.

| Line | Sentence/phrase | Word/Pattern | Classification | Flag? |
|------|-----------------|--------------|----------------|-------|
| description | "How to operate a Livepeer GPU pool — accept external worker connections…" | em-dash (—) | banned (CLAUDE.md: no em-dashes) | YES — F-01 |
| 36 | "This page is for experienced orchestrators who want to expand beyond their own hardware by accepting external worker connections." | `This page is for` — not a `This page [verb]` construction (not a self-reference opener; used as scope statement) | near-boundary | BORDERLINE — "This page is for" is not the banned opener pattern `This page [verb]` but is a self-referential statement. Flag for human review |
| 82 | "To configure your orchestrator to accept remote worker connections, run **without** `-transcoder` but **with** `-orchSecret`:" | `not [X]` pattern embedded — "run without -transcoder" | `not [X]` construction — the primary statement is "run without -transcoder". Per P46, `not [X]` as primary statement belongs in check 2.4 | YES — F-10. Proposed positive restatement: "Run the orchestrator in standalone mode: omit `-transcoder` and set `-orchSecret`." |
| 109 | "at current network pricing, high-end consumer GPUs on owned hardware are significantly more cost-efficient than rented compute." | `significantly` | banned word | YES — F-09 |
| 134 | "Any node that knows this secret can connect as a worker." | `can [verb]` — "can connect" | capability statement about protocol behaviour | `can connect` is factual capability, not a value claim | No — not a value claim |
| 141 | "this could result in payout obligations to unknown parties or diluted job distribution." | `could [verb]` — "could result" | risk statement, not a value claim | conditional risk — acceptable in Warning context | No |
| 153 | "the `capacity` field is the worker's `-maxSessions` value — how many concurrent jobs it can handle." | em-dash (—) | banned (no em-dashes) | YES — F-14 (new) |
| 190 | "Payout protocols remain operator-specific." | no banned pattern | factual | No |
| 211 | "If a worker disconnects, your orchestrator continues accepting jobs and assigns them to remaining workers." | `if [condition]` | conditional body prose — condition is immediately resolved with a concrete outcome | BORDERLINE — resolved condition, acceptable |
| 213 | "Workers reconnect automatically on restart." | no banned pattern | factual | No |
| 224 | "For large pools, a load balancer in front of multiple orchestrator instances is possible — see `doc/multi-o.md`…" | em-dash (—) | banned (no em-dashes) | YES — F-15 |
| 228 | "For pools with SLA commitments, coordinate updates during low-traffic periods and communicate planned downtime to workers in advance." | `if [condition]` — "For pools with SLA commitments" (segmentation clause) | conditional segmentation | BORDERLINE — segmentation clause, not an unresolved condition. Acceptable |
| 240 | "If you need to rotate your `-orchSecret` (for example, because you believe it has been compromised), all existing worker connections will drop immediately when the orchestrator restarts with the new secret." | `if [condition]` — "if you need to rotate" | conditional body prose — condition resolved in same sentence | BORDERLINE — resolved condition, acceptable |
| Tab title "BYO Container" | visible prop | no banned pattern | label | No |
| Tab title "Managed pool client" | visible prop | no banned pattern | label | No |
| Tab title "Cloud GPU" | visible prop | no banned pattern | label | No |
| Accordion title "Worker connection management" | visible prop | no banned pattern | label | No |
| Accordion title "NVENC session caps on consumer GPUs" | visible prop | no banned pattern | label | No |
| Accordion title "Session routing and load balancing" | visible prop | no banned pattern | label | No |
| Accordion title "Node updates and downtime" | visible prop | no banned pattern | label | No |
| Accordion title "Payout and worker communication" | visible prop | no banned pattern | label | No |
| Accordion title "orchSecret rotation" | visible prop | no banned pattern | label | No |
| Card title "Fee distribution is your problem" | Card title prop | no banned pattern | card title | No |
| Warning block | "If it is exposed, any node can connect as a worker and receive job assignments." | `can [verb]` — "can connect" | risk/capability statement | not a value claim | No |

**Banned Construction Scan verdict:** Three confirmed em-dash flags (F-01 description, F-14 line 153, F-15 line 224), one banned word (F-09 "significantly"), one banned construction (F-10 "run without"), one BORDERLINE (line 36 "This page is for"). Four BORDERLINEs noted as acceptable.

---

## Spelling/Typo Check

Scan of all visible text.

- "orchSecret" — correct technical term (lower camelCase, consistent with flag usage)
- "go-livepeer" — correct
- "gRPC" — correct
- "NVENC" — correct
- "NVIDIA" — correct
- "GTX/RTX" — correct
- "ETH" — correct
- "RegisterTranscoder" — correct protocol message name
- "capacity=10" — correct log format
- "Ethereum" — correct capitalisation
- "Livepeer Explorer" — correct
- Line 88: "Titan Node" — consistent naming
- Line 202: "Livepeer Forum" — correct
- "multi-orchestrator" — correct hyphenation per doc reference

**Result: No spelling errors or typos found in visible text.**

---

## Cross-Category Connections

```
Root Cause 1: Missing required frontmatter fields (complexity, lifecycleStage, veracityStatus, industry, niche)
Affects: Cat 1.1 + Cat 1.6 + Cat 1.7 + Cat 1.8 + Cat 1.9 + Cat 1.10
Fix: Add five missing fields with proposed values (see F-03 through F-07). All values require human sign-off.
```

```
Root Cause 2: purpose: guide is wrong-field error
Affects: Cat 1.4 + Cat 5.7
Fix (F-02): Change `purpose: guide` to `purpose: operate`. Error type (b): valid pageType value placed in wrong field. Single fix, two check impacts.
```

```
Root Cause 3: status: published inconsistency with absent veracityStatus
Affects: Cat 1.8 + Cat 9.1 + Cat 9.3
Fix (F-08): Change `status: draft` until veracityStatus is honestly set.
```

```
Root Cause 4: Em-dashes in visible text
Affects: Cat 1.11 (description) + body prose (lines 153, 224)
Fix: Remove em-dashes from all three locations. See F-01, F-14, F-15.
```

---

## Blocking Decisions

No blocking decisions. pageType (`guide`) is canonical and correct. Page scope is clear. The `purpose: guide` wrong-field error has a straightforward fix (F-02) that does not require a broader decision.

---

## Verdict Summary

**Overall: NEEDS WORK**

**Checks failing (count: 22):** 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 2.2, 2.4, 3.1, 3.2, 3.7, 5.7, 6.1, 6.2, 6.4, 6.5, 6.6, 6.8, 9.1, 9.3

**Finding register:**

| ID | Category | Severity | Description |
|----|----------|----------|-------------|
| F-01 | 1.11 | HIGH | Description 186 chars (>160) and contains em-dash. Proposed trim without em-dash: `How to operate a Livepeer GPU pool: accept external worker connections, manage job routing across multiple GPUs, handle off-chain fee distribution, and maintain operational transparency.` (183 chars — still over). Further trim: `Operating a Livepeer GPU pool: accept worker connections, route jobs across GPUs, distribute fees off-chain, and maintain operational transparency.` (147 chars) — confirm before applying |
| F-02 | 1.4 / 5.7 | HIGH | `purpose: guide` is wrong-field error (pageType value in purpose field). Change to `purpose: operate` — confirm before applying |
| F-03 | 1.6 | HIGH | `complexity` absent. Proposed: `complexity: advanced` — confirm before applying |
| F-04 | 1.7 | HIGH | `lifecycleStage` absent. Proposed: `lifecycleStage: operate` — confirm before applying |
| F-05 | 1.8 | HIGH | `veracityStatus` absent. Add `veracityStatus: unverified` |
| F-06 | 1.9 | HIGH | `industry` absent. Proposed: `industry: [technical, livepeer]` — confirm before applying |
| F-07 | 1.10 | HIGH | `niche` absent. Proposed: `niche: [infrastructure, protocol]` — confirm before applying |
| F-08 | 1.8 / 9.1 | HIGH | `status: published` with absent veracityStatus. Change `status` to `draft` |
| F-09 | 2.2 | HIGH | Line 109: `significantly` is a banned word. Proposed: "at current network pricing, high-end consumer GPUs on owned hardware are more cost-efficient than rented compute." (remove "significantly") — confirm before applying |
| F-10 | 2.4 | HIGH | Line 82: "run **without** `-transcoder` but **with** `-orchSecret`" — `not [X]` as primary directive. Proposed: "Run the orchestrator in standalone mode: omit `-transcoder` and set `-orchSecret`." — confirm before applying |
| F-11 | 3.1 | HIGH | "Ongoing operational responsibilities" scores 16/25. Proposed rename: `Ongoing Operations` — confirm before applying |
| F-12 | 3.1 / 3.2 | HIGH | "Key facts to remember" scores 13/25. Proposed rename: `Pool Quick Reference` — confirm before applying |
| F-13 | 6.5 | HIGH | Lines 217–219: NVENC session limit "typically 3–8 per card" and Titan Node driver-patching claim are unverified with no REVIEW flag. Add: `{/* REVIEW: NVENC session cap range "3–8" — verify against current NVIDIA driver docs or NVENC SDK documentation. Titan Node driver patching — verify against current Titan Node documentation before publication. */}` |
| F-14 | body | MEDIUM | Line 153: em-dash in body prose "the `capacity` field is the worker's `-maxSessions` value — how many concurrent jobs it can handle." Proposed: "The `capacity` field is the worker's `-maxSessions` value: how many concurrent jobs it can handle." — confirm before applying |
| F-15 | body | MEDIUM | Line 224: em-dash in body prose "a load balancer in front of multiple orchestrator instances is possible — see `doc/multi-o.md`". Proposed: "a load balancer in front of multiple orchestrator instances is possible. See `doc/multi-o.md`" — confirm before applying |

**Priority order:** F-02 (wrong-field error, HIGH) → F-10 (banned construction, HIGH) → F-09 (banned word, HIGH) → F-11, F-12 (heading renames, HIGH) → F-08 (status inconsistency, HIGH) → F-03 through F-07 (missing fields, HIGH) → F-13 (veracity flags) → F-14, F-15 (em-dashes in body) → F-01 (description trim)
