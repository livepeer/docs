# Per-Page Quality Check Report
## `v2/orchestrators/guides/operator-considerations/operator-rationale.mdx`

**Review date:** 2026-03-24
**Reviewer:** Claude Code (per-page quality check agent)
**Check framework:** `v2/orchestrators/_workspace/canonical/checks.mdx`
**Frameworks ref:** `v2/orchestrators/_workspace/canonical/Frameworks.mdx`
**Navigation source:** `docs.json` lines 2874–2880

---

## CRITICAL PARSING ISSUE — Category 9 Pre-flag

The file begins with two lines of apparent garbage characters before the frontmatter fence:

```
glrw
pwrfs
---
title: 'Operating Rationale'
```

Lines 1–2 contain `glrw` and `pwrfs` — these are not valid MDX, YAML, or comment syntax. They appear before the `---` frontmatter delimiter and will be treated as body content by the MDX parser (rendered as text before the frontmatter block). This is a **CRITICAL parsing issue**. See F-01 below and Category 9.

---

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|-------|----------|-------|-----------|-------|
| `title` | Yes | `'Operating Rationale'` | PASS | — |
| `sidebarTitle` | Yes | `Operator Rationale` | PASS | — |
| `description` | Yes | ~158 chars, subject-first | PASS | Within 160 chars; no self-reference |
| `pageType` | Yes | `guide` | PASS | Valid 7-type canonical value |
| `audience` | Yes | `orchestrator` | PASS | Valid token |
| `purpose` | Yes | `evaluation` | FAIL | Not in 15-value canonical set. Canonical value is `evaluate`. Error type (c): invalid value. |
| `complexity` | No | — | FAIL | Required field missing |
| `lifecycleStage` | No | — | FAIL | Required field missing |
| `keywords` | Yes | 12 entries | PASS | Specific, searcher-intent-aligned |
| `og:image` block | Yes | All 5 OG fields present | PASS | — |
| `industry` | No | — | FAIL | Required field per P41 |
| `niche` | No | — | FAIL | Required field per P41 |
| `veracityStatus` | No | — | FAIL | Required; page has TODO block and multiple REVIEW-flagged claims |
| `status` | Yes | `current` | FAIL | `status: current` requires `veracityStatus: verified` AND zero REVIEW flags (checks.mdx §1.8, P39). Page has TODO block with explicit "Recheck factual TODO comments before publishing." |
| `lastVerified` | Yes | `'2026-03-15'` | INFO | Not a required field; present |

**Required field count:** 6/10. Missing: `complexity`, `lifecycleStage`, `veracityStatus`, `industry`, `niche`.

---

## Category 1 — FRONTMATTER & TAXONOMY

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 1.1 | All 10 required fields present | FAIL | Missing: `complexity`, `lifecycleStage`, `veracityStatus`, `industry`, `niche` |
| 1.2 | `pageType` uses 7-type canonical schema | PASS | `guide` is valid |
| 1.3 | `pageVariant` valid if present | N/A | Field absent; not required unless migrating from deprecated pageType |
| 1.4 | `purpose` uses 15-value canonical set | FAIL | `evaluation` is not canonical. Canonical value is `evaluate`. Error type (c): invalid value. Proposed: `purpose: evaluate` — confirm before applying. |
| 1.5 | `audience` uses 7-token set | PASS | `orchestrator` valid |
| 1.6 | `complexity` single canonical value | FAIL | Field absent. Proposed: `complexity: intermediate` — confirm before applying. (Page covers decision-making for operators who are evaluating, not purely advanced operation.) |
| 1.7 | `lifecycleStage` single canonical value | FAIL | Field absent. Proposed: `lifecycleStage: evaluate` — confirm before applying. |
| 1.8 | `veracityStatus` present and honest | FAIL | Absent. Page has a TODO block (lines 34–48) with items pending human verification plus inline TODO flags at lines 167, 191, 205, 249, 318, 365. Must be `veracityStatus: unverified`. `status: current` is incoherent per checks.mdx §1.8 and P39. Change `status` to `draft`. |
| 1.9 | `industry` array valid | FAIL | Absent. Required per P41. Proposed: `industry: [business, economics]` — confirm before applying. |
| 1.10 | `niche` array valid | FAIL | Absent. Required per P41. Proposed: `niche: [infrastructure, web3]` — confirm before applying. |
| 1.11 | `description` well-formed | PASS | Subject-first, ~158 chars, no self-reference, UK English. |
| 1.12 | OG image block complete | PASS | All 5 fields present |
| 1.13 | `keywords` quality | PASS | `pool worker`, `solo orchestrator`, `ai inference`, `cost analysis`, `earnings potential` are strong |

**Category 1 verdict: FAIL** — 8 checks fail: 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10 (status incoherence under 1.8).

---

## Category 2 — VOICE & COPY

**Banned word scan (P24 — show the work):**
- `effectively` — not found in body prose.
- `essentially` — not found.
- `basically` — not found.
- `meaningful` — not found.
- `significant` — line 149: "CPU transcoding is possible at **significantly** lower throughput." — FOUND. Banned word.
- `real` (intensifier) — not found as intensifier.
- `various` — not found.
- `several` — not found in body prose.
- `obviously` / `clearly` — not found.

**Banned phrase scan:**
- "This page covers" — not present as such.
- Line 60: "Use this page to choose that path." — not an exact banned phrase, but "Use this page" is a self-referential opener. Check 2.4 (`This page [verb]`) — "Use this page" matches the spirit of the banned construction. See check 2.4.
- "The reason is straightforward" — not found.
- "among other factors" — not found.
- "depends on various" — not found.

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 2.1 | UK English throughout | PASS | No US spellings found. No -ize endings. |
| 2.2 | Zero banned words | FAIL | One violation: "significantly" — line 149 |
| 2.3 | Zero banned phrases | PASS | No banned phrases from the canonical list found. |
| 2.4 | Zero banned constructions | FAIL | See Banned Construction Scan below |
| 2.5 | Opening order correct | PASS | Lines 58–60 open directly with the operator decision context and value ("Run a Livepeer Orchestrator when the earning path matches your hardware…"). |
| 2.6 | Paragraph discipline | PASS | Most paragraphs one-job. Lead sentences state facts. |
| 2.7 | Audience register correct | PASS | Operational, economics-focused, hardware-aware. Respects operator investment. |
| 2.8 | Per-audience prohibited phrases absent | PASS | No "easy to set up", "the network rewards you for" found. |
| 2.9 | No passive value statements | PASS | Costs quantified (£800 RTX 4090, £30/month), setup hours given (4–16 hours), gas cost ranges stated. |
| 2.10 | No hedging openers | PASS | Page opens directly with the operator decision condition. |
| 2.11 | Terminology consistent | PASS | `pool worker`, `active set`, `probabilistic micropayment tickets`, `Reward()`, `Cascade` — all consistent with locked terminology set. `pool worker` defined implicitly in the BorderedBox summary table. |

### Banned Construction Scan

**Scope:** body prose, headings, frontmatter `description`, Notes, BorderedBox content, table cells, card descriptions, Accordion `title` props, CustomDivider `middleText` props.

| Line | Sentence / Text | Pattern | Classification | Flag? |
|------|-----------------|---------|----------------|-------|
| 60 | "Use this page to choose that path." | `This page [verb]` (indirect: "use this page") | self-reference | YES — check 2.4 |
| 60 | "It breaks the decision into costs, revenue streams, viability checks, and workload trade-offs so you can stop early…" | `can [verb]` | procedural/conditional | BORDERLINE — "so you can stop early" is describing reader capability, not a value claim. PASS. |
| 174 | "…can grow faster, but only after the node proves it can stay available" | `can [verb]` | conditional | BORDERLINE — "can grow faster" is a conditional value claim describing a probable trajectory. FLAG for human review. |
| 288 | "A well-configured AI node with warm models loaded **can** compete from day one without active set membership." | `can [verb]` in value claim | value-claim | YES — check 2.4. Fix: "A well-configured AI node with warm models loaded **competes** from day one without active set membership." |
| 300 | "Missing reward rounds results in permanent LPT loss — that round's rewards are not recoverable." | `not [X]` as primary statement | value-claim | YES — "are not recoverable" is a negative primary statement. Check 2.4. Fix: "Missing reward rounds results in permanent LPT loss; those rewards are forfeited." |
| 304 | "When sustained ~95%+ uptime is unrealistic, the pool worker path is more appropriate than solo Orchestrator operation." | `if [condition]` in body prose (temporal form) | conditional | YES — check 2.4. "When [condition]" is equivalent to `if [condition]`. Fix: State the threshold directly: "Setups unable to sustain ~95%+ uptime belong in the pool worker path." |
| 376 | "The pool worker path has a **significantly** lower barrier than solo Orchestrator operation." | banned word | — | Already logged under 2.2. |
| 385 | "Migration to solo operation is possible once stake is acquired." | `once [X]` / conditional | conditional | BORDERLINE — "once X is stable" is not the exact banned phrase; "once stake is acquired" is a concrete threshold, not undefined. PASS. |

**CustomDivider `middleText` props (P20 scan):**
- "Cost Categories", "Viability Check", "Path Decision", "Video vs AI", "Before You Commit" — no em-dashes, no banned terms. All PASS.

**Accordion `title` props (P20 scan):**
- "Hardware", "LPT Stake", "ETH for Gas", "Bandwidth", "Electricity", "Ongoing Time" — all PASS.

**Em-dash scan (P30 — all visible text):**
- Line 300: "Missing reward rounds results in permanent LPT loss — that round's rewards are not recoverable." — FOUND. Em-dash character `—` present. This violates the em-dash prohibition. CLAUDE.md: "No em dashes — rewrite or use hyphens." Fix: replace em-dash with semicolon: "Missing reward rounds results in permanent LPT loss; that round's rewards are forfeited."
- Lines 282, 289, 291: Check these lines for em-dashes.
  - Line 282: No em-dash (uses parenthetical).
  - Line 289: "...regardless of hardware." No em-dash.
  - Line 291: "...regardless of hardware." No em-dash.
- Scanning full body: only line 300 found. FAIL (one violation).

**Category 2 verdict: FAIL** — Fails 2.2, 2.4. (Em-dash also flagged under 2.4 scope via P30.)

---

## Category 3 — SECTION NAMING & HEADINGS

`Related Pages` heading is fully exempt from all heading checks (P16).

### Heading Score Table

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total | Pass? |
|---------|-----------|-------|-----------|---------|-------------|-------|-------|
| What Orchestrators Earn | 3 | 3 | 4 | 4 | 4 | 18/25 | FAIL |
| Cost Categories | 4 | 3 | 5 | 5 | 5 | 22/25 | PASS |
| Three Viability Questions | 3 | 3 | 3 | 3 | 4 | 16/25 | FAIL |
| 1. Is reward calling profitable? (H3) | 2 | 3 | 3 | 3 | 3 | 14/25 | FAIL |
| 2. Can the node compete on pricing and capability? (H3) | 2 | 3 | 3 | 3 | 2 | 13/25 | FAIL |
| 3. Is the setup stable enough? (H3) | 2 | 2 | 3 | 3 | 3 | 13/25 | FAIL |
| Decision Matrix | 5 | 4 | 5 | 5 | 5 | 24/25 | PASS |
| Video vs AI: Starting Workload | 3 | 3 | 3 | 3 | 3 | 15/25 | FAIL |
| Research Tools | 4 | 3 | 5 | 5 | 5 | 22/25 | PASS |

**Score rationale notes:**
- "What Orchestrators Earn": CLAUDE.md: "BAD: 'What Orchestrators Earn' -> GOOD: 'Revenue Streams'". Direct cite from CLAUDE.md. Must rename.
- "Three Viability Questions": check 3.2 AVOID tier: "Summary" not present but "Viability Questions" is a label, not a concept. CLAUDE.md: "BAD: 'Three Viability Questions' -> GOOD: 'Viability Check'". Direct cite. Must rename.
- H3 viability questions (H3s 1–3): all phrased as questions — CLAUDE.md explicitly prohibits "No questions in headings." Three violations.
- "Video vs AI: Starting Workload": check 3.3 — "Video vs AI" is an X vs Y contrast label. Also verbose with ": Starting Workload" appended.

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 3.1 | Every heading ≥20/25 | FAIL | 6 of 9 scored headings fail (all three H3 viability questions + three H2s). `Related Pages` exempt. |
| 3.2 | No banned/weak standalone heading terms | PASS | No Banned-tier terms. "Three Viability Questions" is Avoid-tier label ("Questions" implies weak). |
| 3.3 | No literal contrast labels | FAIL | "Video vs AI: Starting Workload" contains X vs Y contrast |
| 3.4 | Domain-anchor rule applied | PASS | Headings interpretable in context |
| 3.5 | Heading names concept, not examples | PASS | No example-list headings |
| 3.6 | Title well-formed | PASS | "Operating Rationale" — 2 words, concept-derived |
| 3.7 | Sounds like expert editorial choice | FAIL | Three question-form H3s, "What Orchestrators Earn", "Three Viability Questions" all fail this test. CLAUDE.md provides explicit corrections for two of them. |

**Category 3 verdict: FAIL** — Fails 3.1, 3.3, 3.7.

---

## Category 4 — PAGE STRUCTURE

Navigation context (docs.json lines 2874–2880):
Sequence in "Operator Considerations" group: `operator-rationale` → `business-case` → `operator-impact` → `requirements`
This is the first page in the group (the entry point).

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 4.1 | One purpose, one audience, one job | PASS | Serves an orchestrator evaluating whether to run Livepeer. One job: choose the right operating path. |
| 4.2 | Purpose statement test passes | PASS | "This page lets the orchestrator evaluate which operating path fits their hardware, stake, and risk tolerance." |
| 4.3 | PREV/NEXT adjacency correct | PASS | First page in the group — arrives from portal/navigator. Leaves to `business-case` (commercial operations). Nav confirmed from docs.json lines 2876–2877. |
| 4.4 | No dead ends | PASS | Related Pages section links to 4 destinations (all verified below in Category 8). |
| 4.5 | Prerequisites stated or linked | PASS | Page explicitly defines what a pool worker is, what active set means in context, and what paths require. `probabilistic micropayment tickets` mentioned in table cell (line 121) — adequately explained in context ("redeemed on Arbitrum"). |
| 4.6 | Out-of-scope clear | PASS | Page explicitly routes readers to Incentive Model for mechanics and Navigator for setup — does not try to cover those. |
| 4.7 | Information type per section correct | PASS | `purpose: evaluate` (once corrected). Primary types — evaluative, analytical, factual — present throughout. Decision matrix is evaluative. Cost categories are factual. Viability questions are analytical. |
| 4.8 | No content duplication | INFO | "What Orchestrators Earn" table overlaps with incentive-model page, but this page frames it as "you need to understand both before judging" — an evaluative lens, not a duplicate. Acceptable. |
| 4.9 | Section orientation page present | N/A — section-level check |
| 4.10 | Cross-tab links at journey intersections | N/A — tab-level check |

**Category 4 verdict: PASS**

---

## Category 5 — LAYOUT & COMPONENTS

**Component matrix for `guide`** (component-layout-decisions.mdx):
- Required sections: Overview, Steps or H2 sections
- Preferred: Steps, Step, CodeGroup, Note, Info, Tip, Card, CardGroup
- Avoid: Coming Soon, PreviewCallout

| Component | Used? | Appropriate for `guide`? | Notes |
|-----------|-------|--------------------------|-------|
| `CustomDivider` | Yes | NOT-TESTED | Not in component-layout-decisions.mdx. P22 applies. |
| `LinkArrow` | Yes | NOT-TESTED | Not in matrix. P22 applies. |
| `StyledTable` / `TableRow` / `TableCell` | Yes | NOT-TESTED | Enhanced table pattern. P22 applies. |
| `CenteredContainer` / `BorderedBox` | Yes (BorderedBox used at line 64) | NOT-TESTED | Not in matrix. P22 applies. |
| `ScrollableDiagram` | Yes (line 312) | NOT-TESTED | Not in matrix. P22 applies. |
| `AccordionGroup` / `Accordion` | Yes | BORDERLINE | Not in preferred list for `guide`; listed for `concept`. Functionally appropriate. |
| `Card` / `CardGroup` | Yes | PASS | Listed as preferred for `guide` |
| TODO block (lines 34–48) | Yes | FAIL | Explicitly avoided for `guide` (check 5.4) |

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 5.1 | Correct template for pageType | PASS | H2-section structure with intro opening fits `guide` template |
| 5.2 | Required sections present | PASS | Overview-equivalent intro, multiple H2 sections, Related Pages for exit |
| 5.3 | Only approved components used | NOT-TESTED | Several components not in the matrix. P22: cannot mark FAIL without full component framework review. |
| 5.4 | Avoided components absent | FAIL | TODO block (lines 34–48) present. Multiple inline TODO comments at lines 167, 191, 205, 249, 318, 365. Explicitly avoided for `guide`. |
| 5.5 | Information type → component mapping correct | PASS | Evaluative/analytical content uses tables, decision matrix uses Mermaid, procedural costs use Accordion sections. |
| 5.6 | MDX renders clean | NOT-TESTED | Garbage characters on lines 1–2 (`glrw`, `pwrfs`) will be rendered as text before the frontmatter block — may cause unexpected output. Critical parsing issue. |
| 5.7 | No old-schema frontmatter | FAIL | `purpose: evaluation` is an invalid value. See check 1.4. |
| 5.8 | CSS uses custom properties only | PASS | No hardcoded hex colours found. Margin values in CustomDivider style props are acceptable. |
| 5.9 | Generated file banners | N/A — not a generated file |
| 5.10 | Component naming/import conventions | PASS | PascalCase, correct import paths from `/snippets/` |

**Category 5 verdict: FAIL** — Fails 5.4, 5.7.

---

## Category 6 — VERACITY

### Veracity Claims Inventory

| Claim | Line | Info type | Status |
|-------|------|-----------|--------|
| "active set — the top Orchestrators by total bonded stake" | 165 | factual | UNVERIFIED — active-set size not confirmed; TODO at line 167 |
| "~22 hours" per round (Reward() call) | 127 | factual | UNVERIFIED — round duration needs source |
| Gas cost "approximately $0.01-0.12 per call" | 185 | factual | UNVERIFIED — TODO at line 191 |
| Gas cost "approximately $0.01-0.05 per redemption batch" | 187 | factual | UNVERIFIED — TODO at line 191 |
| "Budget approximately $5-15/month in ETH" | 193 | factual | UNVERIFIED — TODO at line 191 |
| "~6 Mbps download" bandwidth per stream | 201 | technical | UNVERIFIED — TODO at line 205 |
| "~5.6 Mbps upload" per stream | 202 | technical | UNVERIFIED — TODO at line 205 |
| "1 Gbps supports ~100+ concurrent streams" | 207 | technical | UNVERIFIED — derived from bandwidth claim |
| RTX 3060 ~150-170W, RTX 3090 ~300-350W, RTX 4090 ~350-450W, A100 80GB ~250-400W | 228–243 | technical | UNVERIFIED — general GPU specs, no source |
| "£800 for an RTX 4090" | 157 | factual | UNVERIFIED — price changes with market |
| "£30-60/month at UK residential electricity rates" | 247 | factual | UNVERIFIED — TODO at line 249 |
| "0.00005 ETH" reward-call gas cost threshold | 283 | technical | UNVERIFIED — derived threshold |
| Current active-set threshold (Explorer reference) | 355 | structural | UNVERIFIED — deferred to Explorer |
| "8-24 GB VRAM depending on pipelines" for batch AI | 151 | technical | UNVERIFIED — pipeline-specific, needs Model Reference cross-check |
| "24 GB VRAM minimum. These pipelines are substantially more demanding" | 152 | factual | UNVERIFIED |

**TODO blocks/flags:**
1. Lines 34–48: Pre-publish checklist with 4 human-verification items
2. Line 167: "Confirm the current active-set size on Explorer before publishing a fixed number."
3. Line 191: "Confirm the current Arbitrum gas ranges before publishing these example figures."
4. Line 205: "Confirm the ABR ladder bandwidth figure against the current rendition set."
5. Line 249: "Recheck the illustrative electricity-cost figures before publishing."
6. Line 318: "Verify this test-stream URL before publishing." (operator-rationale inherits from requirements page context — note: line 318 in requirements.mdx, not this page)

Note: The operator-rationale page does not contain the test-stream URL TODO; that belongs to requirements.mdx. Re-checking line 318 of operator-rationale: this is within the Mermaid decision flowchart. No TODO at line 318 of this file. Correction: line 318 here is the scrollable diagram. Inline TODOs are at lines 167, 191, 205, 249 only.

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 6.1 | Every factual claim citable | FAIL | Multiple unverified factual claims (gas costs, bandwidth figures, electricity costs, RTX 4090 price) — all flagged with TODOs but not yet resolved |
| 6.2 | Code/commands tested | N/A — no code blocks on this page |
| 6.3 | No deprecated API usage | N/A — no API references |
| 6.4 | Numbers are real | FAIL | All cost figures have explicit TODO flags confirming they are unverified (lines 191, 205, 249). RTX 4090 price (line 157) is a spot price with no staleness acknowledgment. |
| 6.5 | REVIEW flags for unverified claims | PASS | TODO flags inline at each unverified claim. However, using TODO (not REVIEW:) format is inconsistent with the `{/* REVIEW: */}` convention — flag as INFO. |
| 6.6 | `veracityStatus` honest | FAIL | Field absent. Must be `unverified` given multiple unverified factual claims and TODO flags. |
| 6.7 | Authoritative vs AI-generated glossary | N/A — no glossary references |
| 6.8 | Source staleness check | FAIL | Gas costs (Arbitrum), RTX 4090 price, active-set size, ABR ladder bandwidth — all fast-changing data with no staleness flag beyond the TODO placeholders |

**Category 6 verdict: FAIL** — Fails 6.1, 6.4, 6.6, 6.8.

---

## Category 7 — NAVIGATION & IA

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 7.1 | Page exists in docs.json | PASS | `v2/orchestrators/guides/operator-considerations/operator-rationale` confirmed at docs.json line 2876 |
| 7.2 | Navigation matches file system | PASS | File path matches docs.json entry |
| 7.3 | Tab entry portal routes to all sections | N/A — tab-level check |
| 7.4 | No structural orphans | PASS | Reachable from Operator Considerations group |
| 7.5 | Audience journey complete | PASS | Entry point for the section. Links forward to: business-case (related pages), requirements (related pages), earning-model (related pages), navigator (related pages). |
| 7.6 | Cross-tab graduation paths | PASS | Links to incentive-model (concepts), earning-model (guides), requirements, navigator — good cross-section routing. |
| 7.7 | File in correct lane | PASS | In `v2/orchestrators/guides/`, not in `_workspace/` |
| 7.8 | File naming conventions | PASS | `operator-rationale.mdx` — no deprecated prefix |
| 7.9 | `_workspace/` TTL | N/A — not a workspace file |

**Category 7 verdict: PASS**

---

## Category 8 — LINKS & RENDERING

**Link verification (P47 — full path against docs.json):**

| href | Full path in docs.json? | docs.json line | Status |
|------|------------------------|----------------|--------|
| `/v2/orchestrators/concepts/incentive-model` | Yes | 2843 | PASS |
| `/v2/orchestrators/navigator` | Yes | 2833 | PASS |
| `/v2/orchestrators/guides/operator-considerations/requirements` | Yes | 2879 | PASS |
| `/v2/orchestrators/guides/staking-and-rewards/reward-mechanics` | Yes | 2911 | PASS |
| `/v2/orchestrators/guides/operator-considerations/business-case` | Yes | 2877 | PASS |
| `/v2/orchestrators/guides/staking-and-rewards/earning-model` | Yes | 2910 | PASS |
| `https://explorer.livepeer.org/orchestrators` | External | — | NOT-TESTED |
| `https://tools.livepeer.cloud/ai/network-capabilities` | External | — | NOT-TESTED |
| `https://discord.gg/livepeer` | External | — | NOT-TESTED |
| `https://forum.livepeer.org` | External | — | NOT-TESTED |

All internal links verified. No broken internal links found.

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 8.1 | All internal links resolve | PASS | All 6 internal links confirmed in docs.json |
| 8.2 | All external links live | NOT-TESTED | External links not verified |
| 8.3 | All snippet imports resolve | NOT-TESTED | Import paths use correct `/snippets/` convention |
| 8.4 | All images load | N/A — no inline images |
| 8.5 | Page renders without error | FAIL | Garbage characters on lines 1–2 (`glrw`, `pwrfs`) will be output as rendered text before the page content. This is a rendering defect. |
| 8.6 | No TODO/TBD/Coming Soon in published content | FAIL | TODO block (lines 34–48) and 4 inline TODO comments (lines 167, 191, 205, 249) present in publishable content. Also the large comment block at lines 470–488. |

**Category 8 verdict: FAIL** — Fails 8.5, 8.6.

---

## Category 9 — PROCESS & GOVERNANCE

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 9.1 | Human sign-off recorded | FAIL | TODO block (lines 34–48) explicitly requires human verification on 4 items before publishing. Comment block at lines 470–488 retains original draft planning notes — should be in `_workspace/`. |
| 9.2 | Consuming decisions in registry | NOT-TESTED | Cannot verify without reading decision registry |
| 9.3 | Gate prerequisites met | FAIL | Orchestrators IA not approved, terminology not locked, content pass not open. Page not eligible for publication. |
| 9.4 | Phase ordering respected | INFO | Veracity pass (Phase 7) not yet run |
| 9.5 | Findings gathered before fixes | INFO | Page is in-progress; TODO block confirms this |
| 9.6 | Feedback routed | INFO | No routing evidence; not a current blocker |
| **CRITICAL PARSING FLAG** | — | CRITICAL | Lines 1–2 contain garbage characters (`glrw`, `pwrfs`) before the `---` frontmatter fence. These are not valid MDX. They will be rendered as plain text at the top of the page. This is a pre-frontmatter corruption — flagged under Category 9 (Process & Governance) as a file integrity issue. |

**Category 9 verdict: FAIL** — Fails 9.1, 9.3. Critical file integrity issue (garbage bytes on lines 1–2).

---

## Spelling/Typo Check

Visible text scanned:
- Line 377: "Feasibilits" — NOT PRESENT (was noted as a potential issue in learnings.md for index.md, not this file).
- "probabilistic" — correctly spelled.
- "amortisation" — correctly spelled (UK form).
- "Prometheus" — not used on this page (appears in business-case.mdx).
- "RTX" capitalisations — consistent.
- No typos found in body prose, headings, or table cells.

**One note:** Line 60 ends with "...see the Navigator." — capital N for Navigator is consistent with the way Livepeer capitalises named interfaces.

---

## Cross-Category Connections

```
Root Cause A: Missing frontmatter fields + invalid purpose value
Affects: 1.1 + 1.4 + 1.6 + 1.7 + 1.8 + 1.9 + 1.10 + 5.7
Fix: Add complexity, lifecycleStage, veracityStatus, industry, niche; correct purpose to `evaluate`.
All proposed values require human confirmation before applying.
```

```
Root Cause B: status: current + absent veracityStatus + TODO flags
Affects: 1.8 + 6.6 + 9.3
Fix: Set `status: draft` AND `veracityStatus: unverified`. Multiple unverified factual claims (gas costs, bandwidth, electricity) must be resolved before moving to `status: current`.
```

```
Root Cause C: Garbage characters on lines 1–2
Affects: 8.5 + 9.1 (file integrity)
Fix: Delete lines 1–2 (`glrw` and `pwrfs`) from the file. These characters predate the frontmatter block and will render as text.
```

```
Root Cause D: TODO block + inline TODOs in published content
Affects: 5.4 + 8.6 + 9.1
Fix: Resolve or move each TODO item. The planning comment block (lines 470–488) should move to _workspace/. The inline TODOs (lines 167, 191, 205, 249) should become REVIEW: flags once verification is in progress.
```

```
Root Cause E: Question-form headings
Affects: 3.1 + 3.7
Fix: F-10, F-11, F-12 — rename all three H3 viability question headings. CLAUDE.md provides canonical corrections.
```

---

## Blocking Decisions

None. All issues have clear fixes. No blocking decisions required.

---

## Verdict Summary

**Overall: NEEDS WORK**

**Checks that fail:** 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 2.2, 2.4, 3.1, 3.3, 3.7, 5.4, 5.7, 6.1, 6.4, 6.6, 6.8, 8.5, 8.6, 9.1, 9.3.

**22 checks fail.** The content is substantively strong — cost categories well-quantified, decision matrix clear, voice correct. Issues are: garbage bytes at top of file (CRITICAL), missing frontmatter fields, invalid purpose value, question-form headings, banned words/constructions, TODO blocks in body, and unverified factual claims.

Not a REWRITE. This is a fixable page.

---

## Prioritised Fix List

**CRITICAL**

**F-01** — Garbage characters on lines 1–2
Location: file lines 1–2 (`glrw` and `pwrfs` before the `---` frontmatter fence)
Fix: Delete both lines. The file should begin with `---` on line 1. This is a file corruption or accidental keystroke. Fix before any other change.

**F-02** — `purpose: evaluation` is invalid
Location: frontmatter line 29
Fix: Change to `purpose: evaluate`. Proposed: `purpose: evaluate` — confirm before applying.

**F-03** — `status: current` incoherent with unverified content
Location: frontmatter line 30
Fix: Change `status: current` to `status: draft`. Do not revert to `current` until all TODO-flagged claims are verified and all inline TODOs are resolved.

**F-04** — Add `veracityStatus: unverified`
Location: frontmatter (add after `status`)
Fix: Add `veracityStatus: unverified`. Required field per check 1.8.

**HIGH**

**F-05** — Add 5 missing required frontmatter fields
Location: frontmatter
Fix (confirm all values before applying):
- Proposed: `complexity: intermediate` — confirm before applying.
- Proposed: `lifecycleStage: evaluate` — confirm before applying.
- Proposed: `industry: [business, economics]` — confirm before applying.
- Proposed: `niche: [infrastructure, web3]` — confirm before applying.
- `veracityStatus: unverified` — also covered by F-04.

**F-06** — Rename: "What Orchestrators Earn"
Location: H2 heading (line 105)
Fix: Rename to "Revenue Streams". This correction is explicitly cited in CLAUDE.md: "BAD: 'What Orchestrators Earn' -> GOOD: 'Revenue Streams'".

**F-07** — Rename: "Three Viability Questions"
Location: H2 heading (line 270)
Fix: Rename to "Viability Check". This correction is explicitly cited in CLAUDE.md: "BAD: 'Three Viability Questions' -> GOOD: 'Viability Check'".

**F-08** — Rename H3 viability questions (no questions in headings)
Location: H3 headings at lines 275, 287, 298
Fix:
- "1. Is reward calling profitable?" → "Reward Call Threshold" (CLAUDE.md: "BAD: 'Is reward calling profitable?' -> GOOD: 'Reward Call Threshold'")
- "2. Can the node compete on pricing and capability?" → "Competitive Positioning Check"
- "3. Is the setup stable enough?" → "Uptime Threshold"

**F-09** — Rename: "Video vs AI: Starting Workload"
Location: H2 heading (line 382)
Fix: Rename to "Video vs AI" (CLAUDE.md: "BAD: 'Video vs AI: Starting Workload' -> GOOD: 'Video vs AI'"). Removes contrast-label issue only partially — "vs" remains but CLAUDE.md itself uses this exact form as the "GOOD" example, so it is acceptable per the authoritative source.

**MEDIUM**

**F-10** — Banned word: "significantly"
Location: line 149
Fix: "CPU transcoding is possible at **significantly** lower throughput." → "CPU transcoding is possible but at a fraction of GPU throughput."

**F-11** — Banned construction: `can compete` in value claim
Location: line 288
Fix: "A well-configured AI node with warm models loaded **can** compete from day one without active set membership." → "A well-configured AI node with warm models loaded **competes** from day one without active set membership."

**F-12** — Banned construction: `not recoverable` as primary statement
Location: line 300
Fix: "Missing reward rounds results in permanent LPT loss — that round's rewards are not recoverable." → "Missing reward rounds results in permanent LPT loss; that round's rewards are forfeited."

**F-13** — Em-dash in body prose
Location: line 300
Fix: Replace `—` with `;` — see F-12 (same sentence). The fix for F-12 resolves this also.

**F-14** — Banned construction: `When [condition]` / `if [condition]` in body prose
Location: line 304
Fix: "When sustained ~95%+ uptime is unrealistic, the pool worker path is more appropriate than solo Orchestrator operation." → "Setups unable to sustain ~95%+ uptime belong in the pool worker path, not solo Orchestrator operation."

**F-15** — Self-reference construction: "Use this page"
Location: line 60
Fix: "Use this page to choose that path." → Delete sentence. The page's purpose is already clear from line 58–60 context. Alternatively: "It separates costs, revenue streams, viability checks, and workload trade-offs so you can rule paths in or out before committing to setup." (Note: "so you can" is borderline; rewrite to: "Costs, revenue streams, viability checks, and workload trade-offs follow — each designed to rule paths in or out before setup commitment.")

**F-16** — REVIEW flag format inconsistency
Location: lines 167, 191, 205, 249
Fix: Convert TODO comments to REVIEW: format to match the `{/* REVIEW: [claim] — [source needed] */}` convention:
- Line 167: `{/* REVIEW: active-set size — confirm current number on explorer.livepeer.org/orchestrators before publishing */}`
- Line 191: `{/* REVIEW: Arbitrum gas cost ranges ($0.01-0.12 Reward(), $0.01-0.05 redemption, $5-15/month budget) — confirm against current Arbitrum gas data before publishing */}`
- Line 205: `{/* REVIEW: ABR ladder bandwidth (6 Mbps down, 5.6 Mbps up) — confirm against current go-livepeer rendition set */}`
- Line 249: `{/* REVIEW: electricity cost figures (£30-60/month, $35-70/month) — confirm against current UK/US residential rates */}`

**F-17** — TODO block in published content
Location: lines 34–48
Fix: Move verification checklist to `_workspace/` notes, or delete once all items are resolved.

**F-18** — Planning comment block in published content
Location: lines 470–488
Fix: The `/* PURPOSE: ... */` comment block at the bottom of the file contains draft planning notes. Move to `_workspace/` or delete. Comments in MDX files are not rendered but add file noise and may cause issues in some MDX parsers.

**INFO**

**F-19** — Inline TODO for "Video vs AI" date reference
Location: line 415: "as of early 2026"
Note: "as of early 2026" is a temporal claim that will become stale. Not a TODO flag yet, but flag for staleness: `{/* REVIEW: "as of early 2026" — update date reference each quarter */}`

**F-20** — "can grow faster" borderline construction
Location: line 174
BORDERLINE: "Service fees can grow faster, but only after the node proves it can stay available, price sensibly, and handle work well." This is describing a conditional trajectory. Human review recommended before flagging as a banned construction violation.
