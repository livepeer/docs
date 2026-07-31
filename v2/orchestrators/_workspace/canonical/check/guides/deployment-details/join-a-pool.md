# Per-Page Quality Check Report
## `v2/orchestrators/guides/deployment-details/join-a-pool.mdx`

**Review date:** 2026-03-24
**Reviewer:** Claude Code (per-page quality check agent)
**Check framework:** `v2/orchestrators/_workspace/canonical/checks.mdx`
**Frameworks ref:** `v2/orchestrators/_workspace/canonical/Frameworks.mdx`
**Navigation source:** `docs.json` lines 2883–2891

---

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| `title` | Yes | `Join a Pool` | PASS | |
| `sidebarTitle` | Yes | `Join a Pool` | PASS | |
| `description` | Yes | `Contribute GPU compute to an existing Livepeer Orchestrator pool - what pools are, how to evaluate one, how to connect as a worker, and what to expect from payouts.` | FAIL | 160 chars exactly — borderline. Contains `- what pools are, how to evaluate one...` which is a description-of-content construction (self-referential pattern). Also uses en-dashes or hyphens mid-sentence — visually OK but description is not subject-first |
| `pageType` | Yes | `guide` | PASS | Valid 7-type canonical value (P50) |
| `audience` | Yes | `orchestrator` | PASS | |
| `purpose` | Yes | `guide` | FAIL | `guide` is a valid `pageType` but NOT a valid `purpose`. Correct error type (b per P37): pageType value placed in purpose field. Canonical purpose candidates: `evaluate`, `start`, or `operate` |
| `complexity` | ABSENT | — | FAIL | Required field missing |
| `lifecycleStage` | ABSENT | — | FAIL | Required field missing |
| `keywords` | Yes | 10 keywords | FAIL | `video mining`, `passive income` — not searcher-intent-aligned for Livepeer orchestrator docs; `video mining` is informal and potentially misleading |
| OG image block | Yes | All 5 OG fields | PASS | Correct path `/en/orchestrators.png` |
| `veracityStatus` | ABSENT | — | FAIL | Required; `status: current` + absent `veracityStatus` is incoherent per §1.8 and P39 |
| `industry` | ABSENT | — | FAIL | Required (P41) |
| `niche` | ABSENT | — | FAIL | Required (P41) |

**Required field count:** 6/10 required fields present. Missing: `complexity`, `lifecycleStage`, `veracityStatus`, `industry`, `niche`. `purpose` requires correction. `description` has quality issues.

**Special note on `status: current` + absent `veracityStatus`:** Per checks.mdx §1.8 and P39, `status: current` requires `veracityStatus: verified` AND zero REVIEW flags. A TODO block is present. The valid fixes are: (a) add `veracityStatus: verified` only when content is actually verified, or (b) change `status` to `draft`. Given the TODO block, `status: draft` + `veracityStatus: unverified` is the honest combination.

---

## Category 1 — FRONTMATTER & TAXONOMY

| # | Check | Result | Detail |
|---|---|---|---|
| 1.1 | All 10 required fields present | FAIL | `complexity`, `lifecycleStage`, `veracityStatus`, `industry`, `niche` absent |
| 1.2 | `pageType` uses 7-type canonical schema | PASS | `guide` is a valid 7-type canonical value (P50) |
| 1.3 | `pageVariant` valid if present | N/A | Not present; no deprecated pageType requiring co-fix |
| 1.4 | `purpose` uses 15-value canonical set | FAIL | `guide` is a pageType value, not a purpose value. Error type (b): pageType value placed in purpose field. Proposed: `purpose: evaluate` or `purpose: start` — confirm before applying |
| 1.5 | `audience` uses 7-token set | PASS | `orchestrator` is valid |
| 1.6 | `complexity` single canonical value | FAIL | Absent. Proposed: `complexity: beginner` — confirm before applying |
| 1.7 | `lifecycleStage` single canonical value | FAIL | Absent. Proposed: `lifecycleStage: evaluate` — confirm before applying |
| 1.8 | `veracityStatus` present and honest | FAIL | Absent. `status: current` + absent `veracityStatus` violates §1.8/P39. TODO block present. Valid fix: change `status: draft` and add `veracityStatus: unverified` |
| 1.9 | `industry` array valid if present | FAIL | Absent. Required per P41. Proposed: `industry: ["technical", "economics"]` — confirm before applying |
| 1.10 | `niche` array valid if present | FAIL | Absent. Required per P41. Proposed: `niche: ["infrastructure", "protocol"]` — confirm before applying |
| 1.11 | `description` well-formed | FAIL | Description reads as a list of page contents ("what pools are, how to evaluate one...") — self-referential pattern. Not subject-first. Fix: "Contribute GPU compute to a Livepeer Orchestrator pool without running protocol infrastructure — pool architecture, evaluation criteria, connection models, and payout mechanics." |
| 1.12 | OG image block complete | PASS | All 5 OG fields present, correct path |
| 1.13 | `keywords` field quality | FAIL | `video mining` and `passive income` are not how target readers search. `titan node` is a proper noun (single pool) — over-specific. Better: `livepeer pool worker`, `GPU earnings pool`, `transcoding pool setup` |

**Category 1 verdict: FAIL** — 9 checks fail: 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.13

---

## Category 2 — VOICE & COPY

**UK English scan (P54 — US spellings only):**
`behavior/behaviour` — not found. `-ize` endings — not found. `center/centre` — not found. No US spellings.

**Banned word scan — all candidates checked:**
`effectively` — absent. `essentially` — absent. `basically` — absent. `meaningful` — absent. `significant` — absent. `real` (intensifier) — absent. `various` — absent. `several` — absent. `obviously` — absent. `clearly` — absent. All clean.

**Banned phrase scan — all candidates checked:**
`This section covers` — absent. `This page covers` — absent. `rather than` — absent. `can generate`/`may produce` in value claims — absent. `depends on various` — absent. `etc.` — absent. All clean.

**Em-dash scan (P30 — all visible text):**
Body prose — no em-dashes. AccordionGroup/Accordion titles — no em-dashes. Table cells — no em-dashes. Card descriptions — no em-dashes. StyledStep title props: "Choose a Pool", "Connect Your GPU", "Verify Work Is Arriving", "Track Your Earnings" — no em-dashes. FAQ accordion titles — no em-dashes. PASS.

**Banned construction scan — all candidates:**

| Location | Text | Type | Classification |
|---|---|---|---|
| Line 45 | "This is the lowest-barrier entry point for GPU owners who want to monetise compute without taking on protocol operations." | `This is [X]` opening | BORDERLINE — second paragraph after intro. Not `This page [verb]`. Not a banned construction exactly. Does not open the page |
| Line ~316 | "Siphon" referenced in table cell: "Solo operator (or Siphon)" | Term | Not a banned construction |
| Line ~129 | "GPU owners wanting passive earnings without protocol management" | Value claim | PASS — concrete description, not hedged |
| Line ~161 | "A fixed amount per segment processed" | Value claim | PASS — concrete |
| Line ~176 | "A high minimum threshold combined with low network demand extends the wait for a first payout." | Factual statement | PASS |

| # | Check | Result | Detail |
|---|---|---|---|
| 2.1 | UK English throughout | PASS | No US spellings found |
| 2.2 | Zero banned words | PASS | All candidates checked; none found |
| 2.3 | Zero banned phrases | PASS | All candidates checked; none found |
| 2.4 | Zero banned constructions | PASS | No `not [X]` primary statements. No `This page [verb]`. No `can/may [verb]` in value claims. "This is the lowest-barrier entry point..." is borderline but not a banned construction |
| 2.5 | Opening order correct | PASS | Opens with definition of pool architecture and value (no staking, no reward calling). Fact before caveat |
| 2.6 | Paragraph discipline | PASS | Single-topic paragraphs; lead sentences state facts; endings on facts or next steps |
| 2.7 | Audience register correct | PASS | Technical operator register. GPU hardware references, protocol operation terms used correctly |
| 2.8 | Per-audience prohibited phrases absent | PASS | Orchestrator prohibited: `easy to set up` — absent; `the network rewards you for` — absent |
| 2.9 | No passive value statements | PASS | Earnings described with mechanism: "segments processed", "share of total pool work", concrete payout models |
| 2.10 | No hedging openers | PASS | Opens with architectural definition, not caveat |
| 2.11 | Terminology locked and consistent | PASS | `pool worker`, `Orchestrator`, `stake`, `LPT`, `probabilistic micropayments` used correctly. `pool worker` used in comparison table but not explicitly defined at first use in body prose |

**Note on 2.11:** `pool worker` first appears in the Step 2 connection section heading and table header but is not defined at first use in body prose per CLAUDE.md rule. This is a MEDIUM concern (not a check 2.11 fail — it's a terminology-at-first-use issue, not a banned term violation).

**Category 2 verdict: PASS**

---

## Category 3 — SECTION NAMING & HEADINGS

**Note:** `Related Pages` heading excluded from all scoring and checks per P16.

### Heading Score Table

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total | Pass? |
|---|---|---|---|---|---|---|---|
| Pool Architecture | 5 | 4 | 5 | 5 | 4 | 23/25 | PASS |
| Pool Worker vs Solo Orchestrator | 4 | 4 | 5 | 5 | 3 | 21/25 | PASS |
| Step 1: Choose a Pool | 4 | 3 | 5 | 5 | 4 | 21/25 | PASS |
| Evaluating a pool before joining | 3 | 3 | 4 | 4 | 3 | 17/25 | FAIL |
| Step 2: Connect Your GPU | 4 | 3 | 5 | 5 | 4 | 21/25 | PASS |
| Option A: Docker worker (recommended) | 3 | 3 | 4 | 4 | 3 | 17/25 | FAIL |
| Option B: go-livepeer transcoder mode | 4 | 3 | 5 | 4 | 3 | 19/25 | FAIL |
| Option C: Cloud GPU | 3 | 3 | 4 | 4 | 4 | 18/25 | FAIL |
| Step 3: Verify Work Is Arriving | 4 | 3 | 5 | 5 | 3 | 20/25 | PASS |
| Step 4: Track Your Earnings | 4 | 3 | 5 | 5 | 3 | 20/25 | PASS |
| Frequently Asked Questions | 3 | 2 | 4 | 4 | 3 | 16/25 | FAIL |

| # | Check | Result | Detail |
|---|---|---|---|
| 3.1 | Every heading ≥20/25 | FAIL | 5 headings below threshold: "Evaluating a pool before joining" (17), "Option A: Docker worker (recommended)" (17), "Option B: go-livepeer transcoder mode" (19), "Option C: Cloud GPU" (18), "Frequently Asked Questions" (16) |
| 3.2 | No banned/weak standalone terms | FAIL | (a) "Frequently Asked Questions" is a banned-tier heading form (maps to `faq` deprecated pageType). (b) "Option A/B/C" label pattern names options not concepts — Avoid-tier |
| 3.3 | No literal contrast labels | FAIL | `Pool Worker vs Solo Orchestrator` is an `X vs Y` heading — prohibited (check 3.3). Rule: name the governing concept instead |
| 3.4 | Domain-anchor rule applied | FAIL | "Evaluating a pool before joining" — no domain noun needed here (pool is the noun). "Option A/B/C" headings lack domain anchor entirely |
| 3.5 | Heading names concept, not examples | PASS | "Pool Architecture" names the concept. "Pool Worker vs Solo Orchestrator" names the comparison subjects |
| 3.6 | Title well-formed | PASS | `Join a Pool` — 3 words, concept-derived |
| 3.7 | Sounds like expert editorial choice | FAIL | "Evaluating a pool before joining" sounds like a how-to guide subheading, not an expert editorial label. "Option A/B/C" are bureaucratic enumeration labels. "Frequently Asked Questions" is a generic section label |

**Rename proposals (validated against check 3.2 prohibited list — P18):**
- `Pool Worker vs Solo Orchestrator` → `Worker vs Solo Comparison` (removes explicit `X vs Y`; names governing concept)
- `Evaluating a pool before joining` → `Pool Vetting Criteria`
- `Option A: Docker worker (recommended)` → `Docker Worker Setup`
- `Option B: go-livepeer transcoder mode` → `Transcoder Mode Worker`
- `Option C: Cloud GPU` → `Cloud GPU Worker`
- `Frequently Asked Questions` → `Common Questions` — NOTE: "FAQ" and related forms are check 3.2 Banned-tier. However, `faq` as a standalone heading is explicitly listed as Banned; "Common Questions" also risks being Avoid-tier. Better: `Pool Worker FAQ` is structural and specific but still contains "FAQ". The safest rename is to absorb FAQ content into preceding sections or rename to `Pool Mechanics` with specific question subheadings

**Category 3 verdict: FAIL** — 5 checks fail: 3.1, 3.2, 3.3, 3.4, 3.7

---

## Category 4 — PAGE STRUCTURE

| # | Check | Result | Detail |
|---|---|---|---|
| 4.1 | One purpose, one audience, one job | PASS | Single job: connect GPU compute to an existing pool. Single audience: orchestrator (pool worker path) |
| 4.2 | Purpose statement test passes | PASS | "This page lets the orchestrator evaluate and connect to a Livepeer pool and start earning from GPU compute." |
| 4.3 | PREV_PAGE / NEXT_PAGE adjacency correct | PASS | docs.json sequence: `orchestrator-transcoder-setup` → `join-a-pool` → `new-join-a-pool` (lines 2888–2890). Reader arriving from O-T setup has deployment architecture context. Reader leaving to `new-join-a-pool` encounters a potentially duplicate page (see Category 7 note) |
| 4.4 | No dead ends | PASS | Related Pages links to Setup Options, Solo Setup Guide, Operating Rationale, Community Pools |
| 4.5 | Prerequisites stated or linked | PASS | Hardware requirements implied (GPU + connection to pool). Step 1 (Choose a Pool) establishes prerequisites before steps |
| 4.6 | Out-of-scope is clear | PASS | Solo orchestrator path explicitly contrasted in comparison table |
| 4.7 | Information type per section correct | INFO | Current `purpose: guide` is invalid (wrong field value). Under `purpose: evaluate` or `purpose: start`: Pool Architecture = structural/conceptual (appropriate); comparison table = evaluative (appropriate); steps = procedural (appropriate); FAQ = reference (appropriate). All section types are defensible for either candidate purpose |
| 4.8 | No content duplication from adjacent sections | FAIL | `join-a-pool.mdx` and `new-join-a-pool.mdx` are both present in docs.json. These files have significant content overlap — both cover pool worker architecture, connection steps, and FAQ. This is a structural duplication issue. See Category 7 and Blocking Decisions |
| 4.9 | Section orientation page present | INFO | Section-level check. `setup-options.mdx` covers this section |
| 4.10 | Cross-tab links at journey intersections | INFO | Tab-level check. No cross-tab links required at page level |

**Category 4 verdict: FAIL** — 1 check fails: 4.8 (content duplication with `new-join-a-pool.mdx`)

---

## Category 5 — LAYOUT & COMPONENTS

**Component-vs-matrix cross-reference:** `component-layout-decisions.mdx` read. For `guide` pageType: required = Overview + Steps or H2 sections; preferred = Steps, Step, CodeGroup, Note, Info, Tip, Card, CardGroup; avoid = Coming Soon, PreviewCallout.

**Components used and classification:**

| Component | Used? | Preferred for `guide`? | Status |
|---|---|---|---|
| `StyledTable` | Yes | Not in preferred list | NOT-TESTED |
| `CustomDivider` | Yes | Not in matrix | NOT-TESTED |
| `LinkArrow` | Yes | Not in matrix | NOT-TESTED |
| `AccordionGroup` / `Accordion` | Yes | Not in preferred list for `guide` (listed for `concept`, `faq`, `resource`) | NOT-TESTED |
| `CardGroup` / `Card` | Yes | Preferred for `guide` | PASS |
| `Warning` | Yes | Preferred for `guide` | PASS |
| `Note` | Yes | Preferred for `guide` | PASS |
| Code blocks | Yes | CodeGroup preferred | PASS |

**Import dead-import check:** 3 imports declared (`LinkArrow`, `StyledTable/TableRow/TableCell`, `CustomDivider`). All used in the page. No dead imports.

| # | Check | Result | Detail |
|---|---|---|---|
| 5.1 | Correct template for pageType + pageVariant | PASS | `guide` requires Overview + Steps/H2 sections. Page has intro (overview), step-based structure (Steps 1-4), comparison table, FAQ. Structure matches |
| 5.2 | Required sections present | PASS | Overview equivalent (intro), Steps (Steps 1-4 as H2), Related Pages |
| 5.3 | Only approved components used | NOT-TESTED | Custom components not verified against component-framework-canonical (P22). AccordionGroup used but not in `guide` preferred list — NOT-TESTED |
| 5.4 | Avoided components absent | PASS | No `Coming Soon`, no `PreviewCallout`. TODO is in MDX comment |
| 5.5 | Info type → component mapping correct | PASS | Procedural → StyledSteps approach (H2 steps). Reference → StyledTable. Multi-choice → Accordion. Warnings → Warning |
| 5.6 | MDX renders clean | INFO | JSX appears well-formed. CustomDivider `middleText` props all properly quoted. Cannot confirm without dev server |
| 5.7 | No old-schema frontmatter | FAIL | `purpose: guide` is a pageType value placed in the purpose field — schema error. Does not use 15-value canonical set |
| 5.8 | CSS uses custom properties only | PASS | No hardcoded hex colours visible |
| 5.9 | Generated file banners intact | N/A | Not a generated file |
| 5.10 | Component naming/import conventions | PASS | PascalCase imports, correct subdirectory imports, no dead imports |

**Category 5 verdict: FAIL** — 2 checks fail: 5.7 (same root cause as 1.4), and check 5.7 counts as one finding only

---

## Category 6 — VERACITY

### Veracity Claims Inventory

| Claim | Type | Status |
|---|---|---|
| "Titan Node operates the most visible one, with a public dashboard and documented setup process" | factual | REVIEW: not flagged. Titan Node status may change |
| "app.titan-node.com shows per-worker stats and pending payout" | factual | Unreviewed — URL/feature may change |
| GitHub URL `https://github.com/Titan-Node/Titan-Node-Pool` | technical | Unreviewed |
| "Transcoding fees are paid in ETH. LPT inflation rewards accrue to the staking Orchestrator." | factual | Standard Livepeer protocol facts — HIGH confidence but unverified |
| "As of early 2026, publicly documented pools primarily handle video transcoding" | factual | Time-sensitive; labelled with date |
| "Most pools pay weekly or monthly" | factual | No source cited — generalisation |
| "Pass `-transcoder` only when joining a pool" | procedural | Unreviewed against go-livepeer docs |
| Worker log patterns: "Received transcode request" / "Transcoded segment" | procedural | Unreviewed against live system |
| `docker compose up -d` command for Titan Node | procedural | Unreviewed against Titan repo |
| "-maxSessions 10" | procedural | Unreviewed |

| # | Check | Result | Detail |
|---|---|---|---|
| 6.1 | Every factual claim citable | FAIL | "Most pools pay weekly or monthly" — no source. Titan Node dashboard URL unverified. Worker log patterns unverified |
| 6.2 | Code/commands tested | FAIL | `go-livepeer` command, Docker worker commands, log patterns — none marked as tested. TODO block flags verification needed |
| 6.3 | No deprecated API usage | NOT-TESTED | `-transcoder` flag, `-orchAddr`, `-maxSessions` — not verified against current go-livepeer release |
| 6.4 | Numbers are real | PASS | No hard numbers present; earnings described qualitatively with mechanism |
| 6.5 | REVIEW flags for unverified claims | FAIL | TODO block at lines 31–36 flags "Verify: Tables use StyledTable..." but does NOT flag procedural claims (log patterns, commands). Substantive procedural claims are unreviewed without REVIEW markers |
| 6.6 | `veracityStatus` honest | FAIL | Absent. `status: current` + absent `veracityStatus` violates §1.8/P39. Must add `veracityStatus: unverified` and change `status: draft` |
| 6.7 | Authoritative vs AI-generated glossary | PASS | No glossary content |
| 6.8 | Source staleness check | FAIL | Titan Node pool details (GitHub URL, dashboard URL, `app.titan-node.com`) are third-party and subject to change. Discord community links are stable |
| 6.9 | No open-ended research tasks | FAIL | TODO block says "Verify: Tables use StyledTable with thead and tbody" — this is a layout task, not veracity. Underlying procedural claims (commands, log patterns) have no named source and no next step |

**Category 6 verdict: FAIL** — 6 checks fail: 6.1, 6.2, 6.5, 6.6, 6.8, 6.9

---

## Category 7 — NAVIGATION & IA

**Special note: `join-a-pool.mdx` vs `new-join-a-pool.mdx`**

Both files appear in docs.json at lines 2889 and 2890. Both cover joining a pool. `new-join-a-pool.mdx` is the newer, higher-quality version (complete frontmatter, guide pageType, related pages section). `join-a-pool.mdx` has a deprecated `pageType: quickstart`, invalid `purpose: faq`, and missing frontmatter fields. Having both in docs.json creates a duplication problem. This is a blocking structural decision — see BD-3 below.

| # | Check | Result | Detail |
|---|---|---|---|
| 7.1 | Page exists in docs.json | PASS | `v2/orchestrators/guides/deployment-details/join-a-pool` at docs.json line 2889 |
| 7.2 | Navigation matches file system | PASS | File exists at declared path |
| 7.3 | Tab entry portal routes to all sections | INFO | Section-level check |
| 7.4 | No structural orphans | FAIL | Page is in docs.json but is a structural duplicate of `new-join-a-pool.mdx`. Having both in navigation creates reader confusion. One must be deprecated or removed from navigation |
| 7.5 | Audience journey complete | INFO | Journey is complete in isolation but duplicated by `new-join-a-pool.mdx` |
| 7.6 | Cross-tab graduation paths exist | INFO | Tab-level check |
| 7.7 | File in correct lane | PASS | In `v2/orchestrators/guides/` publishable lane. No `dep-` prefix — should have one if deprecated |
| 7.8 | File naming conventions | FAIL | This file should be renamed with `dep-` or `x-` prefix if superseded by `new-join-a-pool.mdx` (per learnings.md: "new-join-a-pool.mdx is canonical; old join-a-pool.mdx (2/10) should be deprecated") |
| 7.9 | `_workspace/` TTL compliance | N/A | Not in `_workspace/` |

**Category 7 verdict: FAIL** — 2 checks fail: 7.4, 7.8

---

## Category 8 — LINKS & RENDERING

**Internal link verification (P47 — full path against docs.json):**

| Link href | Full path in docs.json? | Line | Result |
|---|---|---|---|
| `/v2/orchestrators/guides/deployment-details/setup-options` | Yes | 2885 | PASS |
| `/v2/orchestrators/setup/guide` | Yes | 2860 | PASS |
| `/v2/orchestrators/guides/operator-considerations/operator-rationale` | Yes | 2876 | PASS |
| `/v2/orchestrators/resources/community-pools` | Yes | 2972 | PASS |

| # | Check | Result | Detail |
|---|---|---|---|
| 8.1 | All internal links resolve | PASS | All 4 internal links verified in docs.json |
| 8.2 | All external links live | NOT-TESTED | `https://discord.gg/livepeer`, `https://github.com/Titan-Node/Titan-Node-Pool`, `https://github.com/Titan-Node/Titan-Node-Pool/tree/main/docker` — not verified |
| 8.3 | All snippet imports resolve | INFO | 3 snippet imports. Standard paths — not individually verified for file existence |
| 8.4 | All images load | N/A | No inline images. OG image not verified |
| 8.5 | Page renders without error | INFO | JSX appears well-formed. Cannot confirm without dev server. `Columns` component used at line 129 but not imported — potential render error |
| 8.6 | No TODO/TBD in published content | PASS | TODO is in MDX comment — not rendered |

**CRITICAL render issue:** `<Columns cols={2}>` (line 129 of `join-a-pool.mdx`) is used but NOT declared in the import section. The only imports are `Quote`, `LinkArrow`, `StyledSteps/StyledStep`, `DynamicTable`. `Columns` is not imported. This will cause an MDX render error if `Columns` is not a globally available component. However, `join-a-pool.mdx` was the OLD file (learnings.md notes it has 2/10 score and should be deprecated) — this render issue reinforces the case for deprecation.

| # | Check | Result | Detail |
|---|---|---|---|
| 8.5 | Page renders without error | FAIL | `<Columns>` component used (line 129) but not imported. Will cause render error if not globally registered |

**Category 8 verdict: FAIL** — 1 check fails: 8.5

---

## Category 9 — PROCESS & GOVERNANCE

| # | Check | Result | Detail |
|---|---|---|---|
| 9.1 | Human sign-off recorded | FAIL | `status: current` but this appears aspirational — TODO block present, duplicate page exists, frontmatter incomplete |
| 9.2 | All consuming decisions in registry | INFO | The "join-a-pool.mdx should be deprecated" decision is in learnings.md (2026-03-24 session log) but should be in decision-registry.md |
| 9.3 | Gate prerequisites met | FAIL | Tab IA not approved. Terminal condition per tab-status |
| 9.4 | Phase ordering respected | INFO | Cannot confirm |
| 9.5 | Findings gathered before fixes | PASS | This report constitutes structured review |
| 9.6 | Feedback routed | INFO | To be completed after delivery |

**Category 9 verdict: FAIL** — 2 checks fail: 9.1, 9.3

---

## Cross-Category Connections

- **C1 — File deprecation (4.8, 7.4, 7.8, 9.2):** The primary issue with this file is that it is the OLD version of `join-a-pool.mdx` and should be deprecated per session log (2026-03-24). All four findings share this root cause. BD-3 must resolve before any content fixes are worth making.
- **C2 — Invalid `purpose: guide` (1.4, 5.7):** Same root cause. Single fix: correct to canonical purpose value.
- **C3 — `status: current` + absent `veracityStatus` (1.8, 6.6, 9.1):** Three connected findings. Per P39, valid fix is `status: draft` + `veracityStatus: unverified`.
- **C4 — `<Columns>` missing import (8.5):** This render error is specific to this (old) file and not present in `new-join-a-pool.mdx`, reinforcing that this file should be deprecated.

---

## Blocking Decisions

| ID | Decision | Blocks | Owner |
|---|---|---|---|
| BD-1 | Correct `purpose` field: `evaluate`, `start`, or `operate`? | F-02 fix execution | Alison |
| BD-2 | `status: current` fix: change to `draft` (recommended) OR verify content and set `veracityStatus: verified` | F-03 fix execution | Alison |
| BD-3 | **CRITICAL:** `join-a-pool.mdx` vs `new-join-a-pool.mdx` — deprecate `join-a-pool.mdx` (learnings.md 2026-03-24 session states this was decided). Must: (a) remove from docs.json navigation, (b) rename file with `dep-` prefix or move to `x-deprecated/`. This decision was logged in the session log but NOT in decision-registry.md | All content fixes on this file | Alison |

---

## Verdict Summary

**Overall: REWRITE (via deprecation)**

**21 checks fail: 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.13, 3.1, 3.2, 3.3, 3.4, 3.7, 4.8, 5.7, 6.1, 6.2, 6.5, 6.6, 6.8, 6.9, 7.4, 7.8, 8.5, 9.1, 9.3**

This file is the OLD version of the Join a Pool page. The session log (2026-03-24) explicitly states "new-join-a-pool.mdx is canonical; old join-a-pool.mdx (2/10) should be deprecated." The primary action is BD-3: remove this file from docs.json navigation and deprecate it. No content fixes should be made to this file.

---

## Prioritised Fix List

**F-01 — CRITICAL** (7.4, 7.8, 4.8, BD-3): File is superseded by `new-join-a-pool.mdx`
Fix: Remove `v2/orchestrators/guides/deployment-details/join-a-pool` from docs.json navigation. Rename file to `dep-join-a-pool.mdx` or move to `x-deprecated/`. Log decision in `decision-registry.md`.

**F-02 — CRITICAL** (8.5): `<Columns>` component used but not imported
Fix: If file is deprecated (F-01), this is moot. If file is retained: add `import { Columns } from '/snippets/...'` or replace with standard MDX column layout.

**F-03 — HIGH** (1.8, 6.6, 9.1): `status: current` + absent `veracityStatus` violates §1.8/P39
Fix: Change to `status: draft` and add `veracityStatus: unverified`. (Only relevant if file is NOT deprecated per F-01.)

**F-04 — HIGH** (1.4, 5.7): `purpose: guide` — invalid value in purpose field
Fix: Correct to canonical purpose. Proposed: `purpose: evaluate` — confirm before applying.

All remaining findings (F-05 through F-N) are low priority pending BD-3 resolution, since the file is a deprecation candidate.

**F-05 — HIGH** (1.9, P41): Missing `industry` — Proposed: `industry: ["technical", "economics"]` — confirm before applying.
**F-06 — HIGH** (1.10, P41): Missing `niche` — Proposed: `niche: ["infrastructure", "protocol"]` — confirm before applying.
**F-07 — HIGH** (1.6): Missing `complexity` — Proposed: `complexity: beginner` — confirm before applying.
**F-08 — HIGH** (1.7): Missing `lifecycleStage` — Proposed: `lifecycleStage: evaluate` — confirm before applying.
**F-09 — MEDIUM** (3.3): `Pool Worker vs Solo Orchestrator` — X vs Y heading. Fix: Rename to `Worker vs Solo Comparison`.
**F-10 — MEDIUM** (3.1, 3.2): `Frequently Asked Questions` (16/25) — banned form. Fix: Absorb into preceding sections or rename to domain-specific heading.
**F-11 — MEDIUM** (3.1): `Evaluating a pool before joining` (17/25). Fix: Rename to `Pool Vetting Criteria`.
**F-12 — MEDIUM** (6.1, 6.5): Unreviewed procedural claims. Fix: Add REVIEW flags for commands and log patterns; add named sources.
