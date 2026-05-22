# Per-Page Quality Check: `v2/orchestrators/concepts/capabilities.mdx`

**Date:** 2026-03-24
**Reviewer:** Claude Code (automated review pass)
**Verdict:** NEEDS WORK

**Generated-file-banner present:** No. Human-authored page rules apply in full.

---

## Frontmatter Table

| Field | Present | Value | Pass/Fail | Note |
|---|---|---|---|---|
| `title` | Yes | `'Orchestrator Capabilities'` | PASS | Clear, subject-first |
| `sidebarTitle` | Yes | `'Capabilities'` | PASS | Concise |
| `description` | Yes | `What Orchestrators can execute, the workload types they support across video and AI, how Gateways select them, and the boundaries of the Orchestrator role.` | PASS | 158 chars, subject-first, UK English, no self-reference |
| `pageType` | Yes | `'concept'` | PASS | Valid canonical value |
| `audience` | Yes | `'orchestrator'` | PASS | Valid canonical token |
| `purpose` | Yes | `'concept'` | FAIL | `concept` is a **deprecated alias** — must be `explain` (Frameworks.mdx §1.2) |
| `complexity` | No | — | FAIL | Missing required field. Derivable: suggest `intermediate` |
| `lifecycleStage` | No | — | FAIL | Missing required field. Derivable: suggest `evaluate` |
| `keywords` | Yes | 12-entry array | PASS | Relevant, no spammy terms |
| OG image block | Yes | All 5 OG fields present | PASS | Correct fallback path |
| `veracityStatus` | No | — | FAIL | Missing required field. Open REVIEW flag at line 172 + unverified model identifiers. Must be `unverified` |
| `status` | Yes | `'current'` | FAIL | `status: current` requires `veracityStatus: verified` AND zero REVIEW flags. Neither met. Change to `status: 'draft'` |
| `lastVerified` | Yes | `'2026-03-15'` | INFO | Date present but `veracityStatus` absent — date cannot be trusted without status field |
| `industry` | No | — | INFO | Not present. Derivable: suggest `["technical", "AI"]` |
| `niche` | No | — | INFO | Not present. Derivable: suggest `["infrastructure", "AI", "video"]` |
| `pageVariant` | No | — | PASS | Not required for `pageType: concept` with no variant needed |

**Summary of frontmatter failures:**
- CRITICAL: `purpose: 'concept'` — deprecated alias, must be `purpose: 'explain'`
- HIGH: `veracityStatus` missing
- HIGH: `status: current` invalid without `veracityStatus: verified`
- HIGH: `complexity` missing
- HIGH: `lifecycleStage` missing

---

## Category 1 — Frontmatter & Taxonomy — TESTED

| # | Check | Result | Note |
|---|---|---|---|
| 1.1 | All 10 required frontmatter fields present | FAIL | `complexity`, `lifecycleStage`, `veracityStatus` missing |
| 1.2 | `pageType` uses 7-type canonical schema | PASS | `concept` is valid |
| 1.3 | `pageVariant` valid if present | N/A | Not present; not required for concept without variant |
| 1.4 | `purpose` uses 15-value canonical set | FAIL | `'concept'` is deprecated alias; correct value is `'explain'` |
| 1.5 | `audience` uses 7-token set | PASS | `'orchestrator'` is valid |
| 1.6 | `complexity` single canonical value | FAIL | Field absent; suggest `intermediate` |
| 1.7 | `lifecycleStage` single canonical value | FAIL | Field absent; suggest `evaluate` |
| 1.8 | `veracityStatus` present and honest | FAIL | Field absent; page has unresolved REVIEW flag and unverified model identifiers |
| 1.9 | `industry` array valid if present | N/A | Not present. Suggested value: `["technical", "AI"]` |
| 1.10 | `niche` array valid if present | N/A | Not present. Suggested value: `["infrastructure", "AI", "video"]` |
| 1.11 | `description` well-formed | PASS | 158 chars, subject-first, no self-reference, UK English |
| 1.12 | OG image block complete | PASS | All 5 fields present |

---

## Category 2 — Voice & Copy — TESTED

| # | Check | Result | Note |
|---|---|---|---|
| 2.1 | UK English throughout | PASS | No US spellings detected |
| 2.2 | Zero banned words | PASS | None of the banned words found |
| 2.3 | Zero banned phrases | FAIL | See banned construction scan below — line 218 |
| 2.4 | Zero banned constructions | PASS | No `not [X]` value statements, no unresolved `if [condition]` in body prose |
| 2.5 | Opening order correct | PASS | Tip opens with fact about Orchestrator role; no self-reference or caveat |
| 2.6 | Paragraph discipline | PASS | Single-job paragraphs; lead sentences state facts |
| 2.7 | Audience register correct | PASS | Peer-technical register appropriate for `orchestrator` audience |
| 2.8 | Per-audience prohibited phrases absent | PASS | No `easy to set up`, no `the network rewards you for` found |
| 2.9 | No passive value statements | PASS | Claims are concrete and specific |
| 2.10 | No hedging openers | PASS | Tip opens with direct assertion |
| 2.11 | Terminology locked and consistent | PASS | BYOC, Cascade, active set, LPT used correctly |

---

## Banned Construction Scan — TESTED

Scanned: frontmatter description, headings, Tip, body prose, Note, table cells, card descriptions.

| Line | Text | Word | Classification | Flag? |
|---|---|---|---|---|
| 64–65 | `Which workloads a node accepts depends on its hardware, the pipelines and models it has loaded, and how it is configured.` | `depends on` | Conditional caveat — fully enumerated (hardware, pipelines, configuration) | No |
| 93 | `Yes (high VRAM; dedicated GPU strongly recommended)` | `recommended` | Procedural guidance in table cell | No |
| 99 | `Depends on container` | `Depends on` | Scoped to container type in table | No |
| 174 | `An Orchestrator can support any subset of pipelines and models.` | `can` | Describes system design scope, not a value claim | No |
| 218 | `Understanding Gateway selection is essential for Orchestrators that want to attract work.` | `essential` | **BANNED PHRASE** — "Understanding X is essential" (check 2.3) | **FLAG — HIGH** |
| 302–303 | `If you want to aggregate application demand and route work across multiple Orchestrators, that is the Gateway role.` | `If you want` | Boundary-setter at page edge; not body-prose conditional | No — acceptable |

**Confirmed flag:**

- **Line 218:** `"Understanding Gateway selection is essential for Orchestrators that want to attract work."` — banned phrase `"Understanding X is essential"`.
  - Fix: Delete line 218 entirely. Line 219 (`they apply a multi-factor ranking algorithm to every session`) is the correct opening sentence for this section and makes line 218 redundant.

---

## Category 3 — Section Naming & Headings — TESTED

### Heading Score Table

Scored: all H2s and H3s. H1 (`title`) excluded per instructions.

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total | Pass (>=20)? |
|---|---|---|---|---|---|---|---|
| **Workload Types** (H2) | 5 | 4 | 5 | 5 | 5 | 24/25 | PASS |
| **Supported AI Pipelines** (H2) | 4 | 4 | 5 | 4 | 4 | 21/25 | PASS |
| **How Capabilities Are Advertised** (H2) | 3 | 3 | 4 | 3 | 3 | 16/25 | FAIL |
| **On-chain registration** (H3) | 4 | 4 | 5 | 5 | 5 | 23/25 | PASS |
| **Capability negotiation** (H3) | 5 | 4 | 5 | 5 | 4 | 23/25 | PASS |
| **How Gateways Select Orchestrators** (H2) | 3 | 3 | 4 | 3 | 2 | 15/25 | FAIL |
| **Capability Boundaries** (H2) | 5 | 4 | 5 | 5 | 4 | 23/25 | PASS |
| **Related Pages** (H2) | 2 | 1 | 3 | 4 | 5 | 15/25 | FAIL |

**Failing headings — remediation:**

**"How Capabilities Are Advertised" (16/25)**
- Fails on: Precision (3) — verb phrase `how...are advertised` is mechanism-first not concept-first; Depth (3) — does not signal two mechanisms (registry + negotiation); Clarity (3) — requires reading the section to understand the split.
- Suggested replacement: `Capability Advertisement` — matches CustomDivider label already in use; names the concept directly; 25/25.

**"How Gateways Select Orchestrators" (15/25)**
- Fails on: Precision (3) — process framing rather than concept naming; Conciseness (2) — four words of scaffolding before the subject; Clarity (3) — verb phrase obscures that this is a ranking algorithm table.
- Suggested replacement: `Gateway Selection Factors` — names the content (ranked factors), survives content changes, interpretable out of context; estimated 21/25.

**"Related Pages" (15/25)**
- Fails check 3.2 — generic descriptor.
- Suggested fix: Remove the heading entirely. A `CardGroup` at the end of a concept page is self-describing and does not need a label.

| # | Check | Result | Note |
|---|---|---|---|
| 3.1 | Every heading scores >=20/25 | FAIL | 3 of 8 fail: How Capabilities Are Advertised (16), How Gateways Select Orchestrators (15), Related Pages (15) |
| 3.2 | No generic descriptors as headings | FAIL | `Related Pages` is a generic descriptor |
| 3.3 | No literal contrast labels | PASS | No X vs Y headings |
| 3.4 | Domain-anchor rule applied | PASS | Headings interpretable without page context |
| 3.5 | Heading names concept, not examples | PASS | No example-derived headings |
| 3.6 | Title well-formed | PASS | `Orchestrator Capabilities` — 2 words, concept-derived |
| 3.7 | Sounds like expert editorial choice | PARTIAL | `How Capabilities Are Advertised` and `How Gateways Select Orchestrators` are functional labels, not editorial choices |

---

## Category 4 — Page Structure & Content Architecture — TESTED

| # | Check | Result | Note |
|---|---|---|---|
| 4.1 | One purpose, one audience, one job | PASS | Single audience (orchestrator); single job: understand what workloads and capabilities an Orchestrator can expose |
| 4.2 | Purpose statement test | PASS | "This page lets the orchestrator understand what workloads they can run, how to advertise them, and what selection factors affect job flow." |
| 4.3 | PREV/NEXT adjacency correct | PASS | Follows `role`, precedes `architecture` in docs.json. Capabilities is logical bridge between role and internals |
| 4.4 | No dead ends | PASS | Four Related Pages cards provide clear next steps (two cards have broken links — see Cat 8) |
| 4.5 | Prerequisites stated or linked | INFO | No explicit prerequisites section. Content assumes familiarity with Orchestrator role — appropriate for a concept page following `role.mdx` in sequence |
| 4.6 | Out-of-scope is clear | PASS | Capability Boundaries section explicitly lists what Orchestrators do not handle |
| 4.7 | Information type per section correct | PASS | Conceptual, structural, technical, evaluative information types — all appropriate for `explain` purpose |
| 4.8 | No content duplication | INFO | Pipeline table overlaps with AI guides section at a different abstraction level — acceptable at concept-vs-guide level |
| 4.9 | Section orientation page present | N/A | Section-level check, not applicable to individual page |
| 4.10 | Cross-tab links at journey intersections | PASS | Link to `/v2/gateways/concepts/role` at line 303 is a correct cross-tab graduation path |

---

## Category 5 — Layout, Components & Template — TESTED

| # | Check | Result | Note |
|---|---|---|---|
| 5.1 | Correct template for pageType | PASS | `concept` template used: prose + tables + diagram + Related Pages cards |
| 5.2 | Required sections present | PASS | `concept` requires Overview — Tip block functions as overview; workload taxonomy follows immediately |
| 5.3 | Only approved components used | PASS | All components are in the preferred list for `concept` |
| 5.4 | Avoided components absent | FAIL | TODO JSX comment block present at lines 34–48 in publishable file. Renders invisible but violates check 5.4 |
| 5.5 | Information type to component mapping | PASS | Tabular reference data uses StyledTable; conceptual notes use Note/Tip; routing uses Card/CardGroup |
| 5.6 | MDX renders clean | PASS (NOT-TESTED live) | No broken JSX, unclosed tags, or import errors visible in source. NOT-TESTED against Mintlify dev server |
| 5.7 | No old-schema frontmatter | FAIL | `purpose: 'concept'` is deprecated alias — cross-reference Cat 1.4 |
| 5.8 | CSS uses custom properties only | PASS | `style={{margin: "0 0 -1rem 0"}}` and `style={{ width: '90%' }}` use unitised values, not hardcoded hex |
| 5.9 | Generated file banners intact | N/A | No generated-file-banner; human-authored page |
| 5.10 | Component naming/import conventions | PASS | PascalCase imports, correct subdirectory paths |

### Component Matrix

| Component | Used | Appropriate for `concept` | Notes |
|---|---|---|---|
| `CenteredContainer` | Yes | Yes | Wraps Tip for visual centering |
| `Tip` | Yes | Yes | Preferred for `concept` |
| `CustomDivider` | Yes | Yes | Section separators with label text |
| `StyledTable` + `TableRow` + `TableCell` | Yes | Yes | Tabular reference data |
| `Note` | Yes | Yes | Preferred for `concept` |
| `LinkArrow` | Yes | Yes | Inline cross-references |
| `ScrollableDiagram` | Imported, not used | N/A | Dead import at line 53 — not flagged per reporting rules |
| `BorderedBox` | Imported, not used | N/A | Dead import at line 54 — not flagged per reporting rules |
| Mermaid diagram | Yes | Yes | Flowchart for capability advertisement flow |
| `Card` + `CardGroup` | Yes | Yes | Related Pages section |

---

## Category 6 — Veracity & Factual Accuracy — TESTED (partial)

| # | Check | Result | Note |
|---|---|---|---|
| 6.1 | Every factual claim citable | FAIL | Model identifiers in pipeline table (lines 131–168) are specific version strings requiring source verification |
| 6.2 | Code/commands tested | NOT-TESTED | No CLI commands present. Mermaid diagram flow is structural (low risk) |
| 6.3 | No deprecated API usage | PARTIAL | `-aiServiceRegistry` flag (line 201) and `AIServiceRegistry` contract reference (line 202) require verification against current go-livepeer flag set |
| 6.4 | Numbers are real | PARTIAL | `Per segment (typically 2 seconds of video)` (line 80) — "typically" without a source is a mild veracity issue. NOT-TESTED against protocol specs |
| 6.5 | REVIEW flags for unverified claims | FAIL | Open REVIEW flag at line 172: `check go-livepeer AI runner for current list` — present but unresolved |
| 6.6 | `veracityStatus` honest | FAIL | Field missing entirely. Must be `unverified` given open REVIEW flag and unverified model identifiers |
| 6.7 | Authoritative vs AI-generated glossary | N/A | No glossary references on this page |
| 6.8 | Source staleness check | FAIL | 7 HuggingFace model identifiers are high staleness risk. All sourced from a fast-changing ecosystem |
| 6.9 | No open-ended research tasks | FAIL | Line 172 REVIEW: `check go-livepeer AI runner for current list` has no named source and no concrete next step |

**Veracity items requiring human resolution (see Blocking Decisions):**

1. Model identifiers — lines 131–168: 7 HuggingFace model identifiers. NOT-TESTED.
2. `-aiServiceRegistry` flag name — line 201: verify against current go-livepeer release. NOT-TESTED.
3. `AIServiceRegistry` contract name — line 202: verify current. NOT-TESTED.
4. Segment duration `typically 2 seconds` — line 80: verify against go-livepeer defaults. NOT-TESTED.
5. Pipeline list completeness — line 172 REVIEW: open research task.

---

## Category 7 — Navigation & Information Architecture — TESTED

| # | Check | Result | Note |
|---|---|---|---|
| 7.1 | Page exists in docs.json | PASS | `v2/orchestrators/concepts/capabilities` confirmed at docs.json line 2842 |
| 7.2 | Navigation matches file system | PASS | File exists at correct path |
| 7.3 | Tab entry portal routes to all sections | N/A | Section-level check; not applicable to individual page |
| 7.4 | No structural orphans | PASS | Page reachable via docs.json nav |
| 7.5 | Audience journey complete | PASS | Sequence: role > capabilities > architecture — logical progression |
| 7.6 | Cross-tab graduation paths exist | PASS | Link to `/v2/gateways/concepts/role` at line 303 |
| 7.7 | File in correct lane | PASS | Published content in `v2/orchestrators/`, not in `_workspace/` |
| 7.8 | File naming conventions | PASS | `capabilities.mdx` — no prefix required for concept page |
| 7.9 | `_workspace/` TTL compliance | N/A | Not a workspace file |

---

## Category 8 — Links & Rendering — TESTED

### Link verification table

| Link text | href in page | docs.json match | Pass/Fail |
|---|---|---|---|
| Orchestrator Architecture (Note, line 107) | `/v2/orchestrators/concepts/architecture` | Yes (docs.json line 2843) | PASS |
| Pricing Strategy (line 262) | `/v2/orchestrators/guides/payments-and-pricing/pricing-strategy` | NO — correct docs.json path is `v2/orchestrators/guides/config-and-optimisation/pricing-strategy` (docs.json line 2922) | FAIL |
| Gateway Role (line 303) | `/v2/gateways/concepts/role` | Yes (docs.json line 2579) | PASS |
| Orchestrator Role (Card, line 310) | `/v2/orchestrators/concepts/role` | Yes (docs.json line 2841) | PASS |
| Orchestrator Architecture (Card, line 313) | `/v2/orchestrators/concepts/architecture` | Yes (docs.json line 2843) | PASS |
| Incentive Model (Card, line 316) | `/v2/orchestrators/concepts/incentive-model` | Yes (docs.json line 2844) | PASS |
| Workloads and AI (Card, line 319) | `/v2/orchestrators/guides/workloads-and-ai/job-types` | NO — directory `workloads-and-ai` does not exist. Correct section is `ai-and-job-workloads`. No `job-types` page in docs.json. Closest match: `v2/orchestrators/guides/ai-and-job-workloads/workload-options` | FAIL |

**2 broken links confirmed:**

1. **Line 262:** `href="/v2/orchestrators/guides/payments-and-pricing/pricing-strategy"` — filesystem file exists at this path but NOT in docs.json. The docs.json entry for the Orchestrator pricing page is `v2/orchestrators/guides/config-and-optimisation/pricing-strategy`.
   - Fix: Change href to `/v2/orchestrators/guides/config-and-optimisation/pricing-strategy`

2. **Line 319:** `href="/v2/orchestrators/guides/workloads-and-ai/job-types"` — neither the directory `workloads-and-ai` nor the page `job-types` exists in docs.json or on the filesystem. The workloads section is `v2/orchestrators/guides/ai-and-job-workloads/`.
   - Fix: Change href to `/v2/orchestrators/guides/ai-and-job-workloads/workload-options`, update label to `Workload Options`

| # | Check | Result | Note |
|---|---|---|---|
| 8.1 | All internal links resolve | FAIL | 2 broken internal links (lines 262 and 319) |
| 8.2 | All external links live | N/A | No external links |
| 8.3 | All snippet imports resolve | PASS | All 5 imports reference existing snippet paths |
| 8.4 | All images load | PASS | OG image uses standard fallback path |
| 8.5 | Page renders without error | PASS (NOT-TESTED live) | No JSX errors visible in source |
| 8.6 | No TODO/TBD/Coming Soon in published content | FAIL | JSX comment block at lines 34–48 contains TODO items in publishable file. REVIEW flag at line 172 is an open placeholder |

---

## Category 9 — Process & Governance — TESTED

| # | Check | Result | Note |
|---|---|---|---|
| 9.1 | Human sign-off recorded | NOT-TESTED | Cannot verify from repo files alone |
| 9.2 | Consuming decisions in registry | NOT-TESTED | Cannot verify without reading full decision registry |
| 9.3 | Gate prerequisites met | FAIL | tab-status.md shows Orchestrators tab: IA approved = Draft only, Terminology = No, Content Pass = No. Page is in published path but gates are not passed |
| 9.4 | Phase ordering respected | NOT-TESTED | Cannot verify phase history from files alone |
| 9.5 | Findings gathered before fixes | N/A | This is the findings report |
| 9.6 | Feedback routed | N/A | Post-fix activity |

---

## Spelling/Typo Pass — TESTED

Scanned all visible text: title, sidebarTitle, description, headings, Tip text, all table cells (header and body), Note text, body prose, card titles and descriptions.

**No typos found.**

Notes:
- `deprioritise` (line 258) — correct UK English.
- Technical terms (NVENC, RTMP, VRAM, LPT, BYOC, Cascade) spelled consistently throughout.

---

## Cross-Category Connections

```
Root Cause A: Missing frontmatter fields (complexity, lifecycleStage, veracityStatus) + deprecated purpose alias
Affects: Cat 1.1, Cat 1.4, Cat 1.6, Cat 1.7, Cat 1.8, Cat 5.7, Cat 6.6
Fix (single pass):
  purpose: 'explain'
  complexity: 'intermediate'
  lifecycleStage: 'evaluate'
  veracityStatus: 'unverified'
  status: 'draft'
```

```
Root Cause B: Two broken internal links
Affects: Cat 8.1, Cat 4.4 (broken Card creates partial dead end for Workloads path)
Fix A (line 262): href → '/v2/orchestrators/guides/config-and-optimisation/pricing-strategy'
Fix B (line 319): href → '/v2/orchestrators/guides/ai-and-job-workloads/workload-options', label → 'Workload Options'
```

```
Root Cause C: Banned phrase at line 218
Affects: Cat 2.3
Fix: Delete line 218 entirely. Line 219 is the correct section opener.
```

```
Root Cause D: Three headings below 20/25 score
Affects: Cat 3.1, Cat 3.2, Cat 3.7
Fix:
  "How Capabilities Are Advertised" → "Capability Advertisement"
  "How Gateways Select Orchestrators" → "Gateway Selection Factors"
  "Related Pages" → remove heading (CardGroup is self-describing)
```

```
Root Cause E: TODO JSX comment block in publishable file (lines 34–48) + open REVIEW flag (line 172)
Affects: Cat 5.4, Cat 8.6
Fix: Remove entire {/* TODO: ... */} block at lines 34–48.
  REVIEW flag at line 172 stays until BD-1 is resolved by SME, then remove.
```

---

## Blocking Decisions

Findings requiring SME input or human decision before `veracityStatus: verified` can be set:

**BD-1 — Pipeline list completeness (line 172)**
- Open REVIEW flag: `Confirm pipeline list is complete and up-to-date with AI subnet — check go-livepeer AI runner for current list`
- Information needed: Current list of supported AI pipeline types from go-livepeer AI runner source or Livepeer AI documentation
- Impact: Table at lines 127–169 may be incomplete or contain deprecated pipeline names
- Action: SME to verify against go-livepeer AI runner pipeline registry. Named source required — "check go-livepeer AI runner" is not a concrete next step.

**BD-2 — Model identifier currency (lines 131–168)**
- 7 specific HuggingFace model identifiers listed as examples
- Information needed: Confirmed current example models per pipeline type from official Livepeer AI documentation or go-livepeer AI subnet README
- Impact: HIGH staleness risk — model identifiers become stale as newer versions release
- Action: SME to verify or replace with link to live model demand reference page at `/v2/orchestrators/guides/ai-and-job-workloads/model-demand-reference`

**BD-3 — `-aiServiceRegistry` CLI flag name (line 201)**
- Flag name used: `-aiServiceRegistry`
- Information needed: Confirm flag exists with this exact name in current go-livepeer release
- Impact: Operator following this page could use wrong flag name
- Action: Verify against go-livepeer CLI `--help` output or release notes

**BD-4 — Segment duration figure (line 80)**
- Claim: `typically 2 seconds of video`
- Information needed: Default segment duration from go-livepeer configuration or protocol specification
- Impact: MEDIUM — describes default behaviour; wrong value misleads operators
- Action: Verify against go-livepeer default configuration

---

## Self-Consistency Review

Checked for internal contradictions before finalising:

- Cat 8.1 broken link at line 262 and Cat 4.4 dead ends — consistent (broken link partially degrades but does not eliminate next-step options).
- Cat 2.3 banned phrase line 218 and Root Cause C — consistent; single entry, single fix.
- `veracityStatus` failure logged in Cat 1.8, Cat 6.6, and Root Cause A — three references, same root cause, consistent.
- Two dead imports (ScrollableDiagram, BorderedBox) noted in Component Matrix with "not flagged per reporting rules" — consistent with framework reporting rules (Dead imports section).
- `status: current` failure noted in Frontmatter Table only — not duplicated in category checks, consistent.
- Heading score maths verified: How Capabilities Are Advertised (3+3+4+3+3=16), How Gateways Select Orchestrators (3+3+4+3+2=15), Related Pages (2+1+3+4+5=15) — arithmetic correct.
- Line 218 appears in both Banned Construction Scan and Cat 2.3 — correctly cross-referenced, not double-logged.

No internal contradictions found.

---

## Prioritised Fix List

| Priority | Category | Finding | Exact fix |
|---|---|---|---|
| CRITICAL | Cat 1.4, 5.7 | `purpose: 'concept'` deprecated alias | Change to `purpose: 'explain'` |
| CRITICAL | Cat 8.1 | Broken link line 262 | Change href to `/v2/orchestrators/guides/config-and-optimisation/pricing-strategy` |
| CRITICAL | Cat 8.1 | Broken link line 319 | Change href to `/v2/orchestrators/guides/ai-and-job-workloads/workload-options`; change label to `Workload Options` |
| HIGH | Cat 1.1, 1.8, 6.6 | `veracityStatus` missing | Add `veracityStatus: 'unverified'` |
| HIGH | Cat 1.6 | `complexity` missing | Add `complexity: 'intermediate'` |
| HIGH | Cat 1.7 | `lifecycleStage` missing | Add `lifecycleStage: 'evaluate'` |
| HIGH | Cat 1.8 | `status: current` invalid | Change to `status: 'draft'` |
| HIGH | Cat 2.3 | Banned phrase line 218 | Delete line 218 entirely |
| HIGH | Cat 3.1 | Heading "How Capabilities Are Advertised" (16/25) | Rename to `Capability Advertisement` |
| HIGH | Cat 3.1 | Heading "How Gateways Select Orchestrators" (15/25) | Rename to `Gateway Selection Factors` |
| MEDIUM | Cat 3.2 | Heading "Related Pages" generic descriptor | Remove heading; let CardGroup stand without heading |
| MEDIUM | Cat 5.4, 8.6 | TODO JSX comment block lines 34–48 | Remove entire `{/* TODO: ... */}` block |
| INFO | Cat 1.9 | `industry` absent | Add `industry: ["technical", "AI"]` |
| INFO | Cat 1.10 | `niche` absent | Add `niche: ["infrastructure", "AI", "video"]` |

**Blocking decisions (SME input required before verified status):** BD-1, BD-2, BD-3, BD-4 above.
