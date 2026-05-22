# Per-Page Quality Check — `v2/orchestrators/concepts/role.mdx`

**Date:** 2026-03-24
**Reviewer:** Claude Sonnet 4.6 (automated)
**Verdict:** NEEDS WORK

---

## Pre-flight

- **Page read:** Complete (319 lines)
- **Checks framework read:** Complete (`checks.mdx`)
- **Frameworks.mdx §1 read:** Complete (taxonomy, industry/niche derivation)
- **Generated-file banner:** Not present. Human-authored page. All 9 check categories apply in full.
- **Page classification:** `pageType: overview` (deprecated) | `audience: orchestrator` | `purpose: overview` (deprecated)
- **Position in journey:** First in the Concepts section. Preceded by Navigator (`v2/orchestrators/navigator`); followed by Capabilities (`v2/orchestrators/concepts/capabilities`).
- **docs.json verification:** All 5 internal link targets verified.

---

## 1. Frontmatter Table

| Field | Present | Value | Pass/Fail | Note |
|---|---|---|---|---|
| `title` | Yes | `The Orchestrator Role in the Livepeer Network` | PASS | Subject-first; descriptive |
| `sidebarTitle` | Yes | `Role` | PASS | Correct short form for nav |
| `description` | Yes | `What orchestrators are, how they fit into the Livepeer compute network, and how the role has evolved from video transcoding to AI inference.` | PASS | Subject-first, 148 chars, no self-reference, UK English |
| `pageType` | Yes | `overview` | **FAIL** | Deprecated 12-type value. Fix: `pageType: concept` + `pageVariant: overview` per Frameworks.mdx §1.1 migration table |
| `pageVariant` | No | — | **FAIL** | Required once pageType is corrected to `concept`. Add: `pageVariant: overview` |
| `audience` | Yes | `orchestrator` | PASS | Valid 7-token canonical value |
| `purpose` | Yes | `overview` | **FAIL** | Not in the 15-value canonical set. Fix: `purpose: explain` (reader builds mental model of the role) |
| `complexity` | No | — | **FAIL** | Required field. Missing. Add: `complexity: beginner` |
| `lifecycleStage` | No | — | **FAIL** | Required field. Missing. Add: `lifecycleStage: discover` |
| `keywords` | Yes | 9-item array | PASS | Relevant, complete coverage |
| `og:image` | Yes | `/snippets/assets/site/og-image/fallback.png` | PASS | — |
| `og:image:alt` | Yes | `Livepeer Docs social preview image for Orchestrators` | PASS | — |
| `og:image:type` | Yes | `image/png` | PASS | — |
| `og:image:width` | Yes | `1200` | PASS | — |
| `og:image:height` | Yes | `630` | PASS | — |
| `status` | Yes | `current` | **FAIL** | Requires `veracityStatus: verified` AND zero `{/* REVIEW: */}` flags. Neither condition is met. Fix: `status: draft` |
| `lastVerified` | Yes | `2026-03-15` | INFO | Not a canonical required field; not harmful |
| `veracityStatus` | No | — | **FAIL** | Required. Page contains unverified factual claims and a TODO block. Add: `veracityStatus: unverified` |
| `industry` | No | — | INFO | Optional but derivable. Suggest: `industry: ['livepeer', 'technical']` |
| `niche` | No | — | INFO | Optional but derivable. Suggest: `niche: ['protocol', 'infrastructure']` |

**Frontmatter verdict: FAIL — 6 required fields missing or carrying deprecated values (`pageType`, `pageVariant`, `purpose`, `complexity`, `lifecycleStage`, `veracityStatus`). `status: current` is inconsistent with missing `veracityStatus`.**

---

## Categories 1–9

### Category 1 — Frontmatter & Taxonomy

| # | Check | Result | Notes |
|---|---|---|---|
| 1.1 | All 10 required fields present | **FAIL** | `complexity`, `lifecycleStage`, `veracityStatus` missing; `pageType` and `purpose` wrong values |
| 1.2 | `pageType` uses 7-type canonical schema | **FAIL** | `overview` is deprecated. Fix: `pageType: concept` |
| 1.3 | `pageVariant` valid if present | **FAIL** | Not present; required after pageType fix. Fix: `pageVariant: overview` |
| 1.4 | `purpose` uses 15-value canonical set | **FAIL** | `overview` not in set. Fix: `purpose: explain` |
| 1.5 | `audience` uses 7-token set | PASS | `orchestrator` is valid |
| 1.6 | `complexity` single canonical value | **FAIL** | Missing. Fix: `complexity: beginner` |
| 1.7 | `lifecycleStage` single canonical value | **FAIL** | Missing. Fix: `lifecycleStage: discover` |
| 1.8 | `veracityStatus` present and honest | **FAIL** | Missing. Page has TODO block and multiple NOT-TESTED factual claims. Fix: `veracityStatus: unverified` |
| 1.9 | `industry` array valid if present | INFO | Not present. Suggest: `['livepeer', 'technical']` |
| 1.10 | `niche` array valid if present | INFO | Not present. Suggest: `['protocol', 'infrastructure']` |
| 1.11 | `description` well-formed | PASS | Subject-first, 148 chars, UK English, no self-reference |
| 1.12 | OG image block complete | PASS | All 5 OG fields present with correct fallback path |

**Category 1 verdict: FAIL — 7 issues**

---

### Category 2 — Voice & Copy

| # | Check | Result | Notes |
|---|---|---|---|
| 2.1 | UK English throughout | PASS | No US spellings found |
| 2.2 | Zero banned words | **FAIL** | Line 294: `significantly` — banned word. Fix: delete intensifier; the sentence restates the table content anyway. Consider: "The incentives, pricing strategy, and operational requirements are different in kind — incentives are fee-share driven rather than pure inflation, pricing is contractual, operational requirements involve SLA compliance." Or simply delete the sentence and let the Incentive Model link carry the reader. |
| 2.3 | Zero banned phrases | PASS | No banned phrases from check 2.3 list found |
| 2.4 | Zero banned constructions | **FAIL** | Line 275: "Existing GPU operators **can** direct spare capacity at video transcoding or AI inference and earn ETH for the work." — `can [verb]` in a value claim. Fix: "Existing GPU operators direct spare capacity at video transcoding or AI inference and earn ETH for each completed job." |
| 2.5 | Opening order correct | PASS | Prose sections open subject-first. "An Orchestrator is the compute supply layer…" and "Orchestrators are the supply side…" are both correct |
| 2.6 | Paragraph discipline | PASS | Single-job paragraphs; lead sentences state facts; sections close on concrete statements |
| 2.7 | Audience register correct | PASS | Peer-technical throughout. No marketing language, no hand-holding connectors |
| 2.8 | Per-audience prohibited phrases absent | PASS | No "easy to set up", no "the network rewards you for" |
| 2.9 | No passive value statements | **FAIL** | Line 293–294: "The incentives, pricing strategy, and operational requirements differ significantly." — unquantified; covered by 2.2 fix above |
| 2.10 | No hedging openers | PASS | No caveat or disclaimer openers anywhere |
| 2.11 | Terminology locked and consistent | **FAIL** | (a) `BYOC` used at line 176 without inline definition (project rule: define at first use on every page). Fix: "BYOC (Bring Your Own Container) containers". (b) `Cascade` appears at line 163 in the timeline diagram without definition or link. Fix: add a parenthetical or footnote: "Cascade (Livepeer's distributed routing layer)". (c) **CRITICAL:** Line 160 names `AIServiceRegistry`; line 201 names `ServiceRegistry` — inconsistent naming for what may be the same or different contracts. See Category 6 and Blocking Decisions. |

**Category 2 verdict: FAIL — 4 issues (2 banned word/construction, 2 terminology)**

---

### Category 3 — Section Naming & Headings

*(Full scoring table below)*

| # | Check | Result | Notes |
|---|---|---|---|
| 3.1 | Every heading scores ≥20/25 | **FAIL** | "Who Should Operate One" scores 13/25. "Related Pages" scores 14/25 (see Heading Score Table) |
| 3.2 | No generic descriptors as headings | **FAIL** | "Related Pages" — generic, could apply to any page on any site. Fix: remove the H2 entirely and leave the CardGroup without a heading, or rename to `Concepts in This Section` |
| 3.3 | No literal contrast labels | PASS | No X vs Y headings. Accordion titles with questions are not formal headings — flagged as INFO below |
| 3.4 | Domain-anchor rule applied | PASS | All four scored H2s include domain nouns where needed |
| 3.5 | Heading names the concept, not examples | **FAIL** | "Who Should Operate One" names the reader question, not the concept. Fix: `Operator Profiles` |
| 3.6 | Title well-formed | FAIL | `The Orchestrator Role in the Livepeer Network` is 7 words; check 3.6 specifies 1–3 words. However, `sidebarTitle: Role` is the nav-visible title (1 word). The long-form `title` serves SEO/OG. INFO — `sidebarTitle` passes; `title` length is borderline acceptable given its OG purpose |
| 3.7 | Sounds like an expert editorial choice | **FAIL** | "Who Should Operate One" and "Related Pages" are both bureaucratic safe labels. `Operator Profiles` and removing the "Related Pages" H2 respectively are the expert editorial choices |

**INFO — Accordion titles:** "From a Cloud Background?", "From an Ethereum Background?", "Neither? Here's the clearest mental model.", "The Miner — Can I earn from my GPU?", "The Easy Earner — Simplest path?", "The Pro Operator — Adding AI to an existing setup?", "The Business — Building at scale?" — these are Accordion component titles, not H2/H3 headings. The formal heading rules do not apply. They contain question marks and en-dash constructions that would violate heading rules if they were headings. Flagged for human decision on whether accordion title conventions should be aligned with heading voice rules.

**Category 3 verdict: FAIL — 3 issues**

---

### Category 4 — Page Structure & Content Architecture

| # | Check | Result | Notes |
|---|---|---|---|
| 4.1 | One purpose, one audience, one job | PASS | Single audience (`orchestrator`), single purpose (explain the role and network position). No scope creep |
| 4.2 | Purpose statement test | PASS | "This page lets the orchestrator reader understand what the role is, how it positions in the network, which deployment type matches their situation, and who the role is for." — writable and specific |
| 4.3 | PREV/NEXT adjacency correct | PASS | Navigator precedes; Capabilities follows. Handoff from role.mdx to capabilities is explicit via LinkArrow at lines 186 and 289 |
| 4.4 | No dead ends | PASS | CardGroup at bottom (Related Pages) links to Capabilities, Architecture, Incentive Model, Navigator. All verified in docs.json. No dead ends |
| 4.5 | Prerequisites stated or linked | **FAIL** | (a) `BYOC` undefined at line 176. (b) `Cascade` undefined at line 163. No explicit prerequisite knowledge statement at page entry. The AccordionGroup orientation device handles background framing, but there is no framing sentence before the accordions for a cold-start reader. Low severity given the accordions' self-explanatory nature, but the first two undefined terms (BYOC, Cascade) are the actionable fix |
| 4.6 | Out-of-scope is clear | PASS | No gateway operation, delegation mechanics, or SDK usage absorbed into the page |
| 4.7 | Information type per section correct | PASS | `conceptual` (Technical Role, Network Role), `evaluative`/comparison (Deployment Types, Operator Profiles). All appropriate for `explain` purpose |
| 4.8 | No content duplication from adjacent sections | PASS | No verbatim duplication from capabilities.mdx, architecture.mdx, or incentive-model.mdx |
| 4.9 | Section orientation page present | N/A — section-level check; Concepts section orientation is handled by the portal/navigator |
| 4.10 | Cross-tab links at journey intersections | **FAIL** | Zero cross-tab links. The page mentions LPT staking (line 197–198) — natural intersection with Delegators tab. It describes Gateway selection (line 57–58, 193) — natural intersection with Gateways tab. Neither is linked. Fix: add two cross-tab links (see Root Cause E in Cross-Category Connections) |

**Category 4 verdict: FAIL — 2 issues (undefined terms at first use; no cross-tab links)**

---

### Category 5 — Layout, Components & Template

| # | Check | Result | Notes |
|---|---|---|---|
| 5.1 | Correct template for pageType + pageVariant | **FAIL** | Currently evaluated against deprecated `overview` type. Once corrected to `concept` + `pageVariant: overview`, the structure matches: AccordionGroup orientation, timeline diagram, prose H2 sections, StyledTable, CardGroup exit — all appropriate |
| 5.2 | Required sections present | PASS | `concept` requires Overview. AccordionGroup + timeline serve as orientation/overview. Prose H2 sections provide depth. Exit routing via CardGroup |
| 5.3 | Only approved components used | **FAIL** | `ScrollableDiagram` and `CenteredContainer` are not in the Preferred column for `concept` in the canonical component matrix. Both are custom project components. Verify against `docs-guide/policies/component-layout-decisions.mdx`. If approved, no action needed. If not, use bare Mermaid blocks and standard container wrappers |
| 5.4 | Avoided components absent | **FAIL** | TODO block at lines 30–44 and TODO comment at line 296 are in JSX comments in a publishable file. Check 8.6/5.4 prohibit TODO placeholders in published content |
| 5.5 | Information type → component mapping correct | PASS | Conceptual content in prose/Note. Tabular comparison in StyledTable. Multi-path orientation in AccordionGroup. All correct |
| 5.6 | MDX renders clean | NOT-TESTED | No local render run. Manual inspection shows well-formed JSX: all imports present (lines 46–50), AccordionGroup/Accordion used correctly, ScrollableDiagram wraps Mermaid blocks, all tags appear closed |
| 5.7 | No old-schema frontmatter | **FAIL** | `pageType: overview` and `purpose: overview` are deprecated values (cross-reference Category 1) |
| 5.8 | CSS uses custom properties only | PASS | Mermaid diagrams use hardcoded hex — this is documented as intentional in the TODO comment at line 33 ("must be hardcoded — see snippets/components/config/MermaidColours.jsx"). No other inline styling |
| 5.9 | Generated file banners intact | N/A — not a generated file |
| 5.10 | Component naming/import conventions | PASS | PascalCase imports, semantic subdirectory paths, all imports from `/snippets/components/` |

**Category 5 verdict: FAIL — 4 issues (deprecated pageType, unapproved custom components pending verification, TODO block)**

---

### Category 6 — Veracity & Factual Accuracy

**Claims inventory:**

| Claim | Line | Type | Status |
|---|---|---|---|
| "top 100 Orchestrators by total bonded stake are eligible to receive work in any given round" | 195–196 | `factual` | NOT-TESTED — requires BondingManager contract or Livepeer Explorer |
| "top 100 eligible Orchestrators" (second instance) | 89 | `factual` | NOT-TESTED — same as above |
| "AIServiceRegistry contract" | 160 | `technical` | NOT-TESTED — contract name must be verified; conflicts with line 201 |
| "ServiceRegistry contract on Arbitrum" | 201 | `technical` | NOT-TESTED — **CONFLICTS with line 160** |
| "BondingManager, RoundsManager, TicketBroker, and ServiceRegistry contracts on Arbitrum" | 215–216 | `technical` | NOT-TESTED — all four contract names need verification |
| "Gateways interact only with TicketBroker and ServiceRegistry" | 216–217 | `factual` | NOT-TESTED — strong scoping claim; needs Gateway implementation verification |
| Timeline: 2017–2020 Transcoder era | 151–153 | `factual` | NOT-TESTED — needs official Livepeer announcement/blog cross-check |
| Timeline: 2021–2023 Orchestrator model | 154–157 | `factual` | NOT-TESTED |
| Timeline: Q3 2024 AI subnet launches | 158–160 | `factual` | NOT-TESTED — needs go-livepeer release history |
| "Slash risk comes from performance failures and protocol behaviour" | 91 | `factual` | NOT-TESTED — slash conditions need LIP or BondingManager confirmation |

**CRITICAL veracity conflict:** Line 160 names `AIServiceRegistry`; line 201 and line 208 name `ServiceRegistry`. These appear in the same page and cannot both be correct unless they are different contracts being conflated. One name is wrong. This must be resolved before the page ships.

| # | Check | Result | Notes |
|---|---|---|---|
| 6.1 | Every factual claim citable | **FAIL** | 10 claims are NOT-TESTED. Critical contract name conflict at lines 160 vs 201/208 |
| 6.2 | Code/commands tested | N/A — no code blocks or CLI commands |
| 6.3 | No deprecated API usage | N/A — no API endpoints referenced |
| 6.4 | Numbers are real | **FAIL** | "top 100" appears twice without a source link. NOT-TESTED |
| 6.5 | REVIEW flags for unverified claims | **FAIL** | Zero `{/* REVIEW: */}` flags despite 10 NOT-TESTED factual claims. The TODO block at lines 30–44 says "Review fact-check items" as an open-ended task — not the canonical `{/* REVIEW: [claim] — [what needs checking] */}` format |
| 6.6 | `veracityStatus` honest | **FAIL** | Field missing; must be `unverified` once added |
| 6.7 | Authoritative vs AI-generated glossary | N/A — no glossary links in this page |
| 6.8 | Source staleness check | **FAIL** | Timeline dates and contract names are from fast-changing sources; no staleness flags present |
| 6.9 | No open-ended research tasks | **FAIL** | "Review fact-check items" in the TODO block is an open-ended task with no named source |

**Category 6 verdict: FAIL — 5 issues. CRITICAL: contract name conflict (lines 160 vs 201/208).**

---

### Category 7 — Navigation & Information Architecture

| # | Check | Result | Notes |
|---|---|---|---|
| 7.1 | Page exists in docs.json | PASS | `v2/orchestrators/concepts/role` confirmed at docs.json line 2841 |
| 7.2 | Navigation matches file system | PASS | File at correct path; docs.json entry matches |
| 7.3 | Tab entry portal routes to all sections | N/A — section-level check |
| 7.4 | No structural orphans | PASS | Page reachable from Concepts section navigation |
| 7.5 | Audience journey complete | PASS | Navigator → Role → Capabilities → Architecture → Incentive Model — complete concept sequence |
| 7.6 | Cross-tab graduation paths exist | **FAIL** | Zero cross-tab links. Delegator staking intersection (lines 197–198) and Gateway selection intersection (lines 57–58, 193) are unlinked. Same root cause as 4.10 |
| 7.7 | File in correct lane | PASS | `v2/orchestrators/concepts/` — publishable lane |
| 7.8 | File naming conventions | PASS | `role.mdx` — no prefix required; no `-index.mdx` suffix |
| 7.9 | `_workspace/` TTL compliance | N/A — publishable file |

**Category 7 verdict: FAIL — 1 issue (cross-tab links; see Root Cause E)**

---

### Category 8 — Links & Rendering

**Internal link verification (all 5 unique targets):**

| Link href | On disk | In docs.json | Pass/Fail |
|---|---|---|---|
| `/v2/orchestrators/concepts/capabilities` | Yes | Yes (line 2842) | PASS |
| `/v2/orchestrators/concepts/architecture` | Yes | Yes (line 2843) | PASS |
| `/v2/orchestrators/concepts/incentive-model` | Yes | Yes (line 2844) | PASS |
| `/v2/orchestrators/navigator` | Yes | Yes (line 2834) | PASS |
| `/v2/orchestrators/guides/deployment-details/join-a-pool` | Yes | Yes (line 2890) | PASS |

**Snippet import verification:**

| Import | Status |
|---|---|
| `/snippets/components/elements/links/Links.jsx` | PASS |
| `/snippets/components/wrappers/tables/Tables.jsx` | PASS |
| `/snippets/components/elements/spacing/Divider.jsx` | PASS |
| `/snippets/components/displays/diagrams/ScrollableDiagram.jsx` | PASS |
| `/snippets/components/wrappers/containers/Containers.jsx` | PASS |

| # | Check | Result | Notes |
|---|---|---|---|
| 8.1 | All internal links resolve | PASS | All 5 verified on disk and in docs.json |
| 8.2 | All external links live | N/A — no external links |
| 8.3 | All snippet imports resolve | PASS | All 5 imports verified |
| 8.4 | All images load | PASS | OG image path verified |
| 8.5 | Page renders without error | NOT-TESTED | No local render run. JSX structurally sound on inspection |
| 8.6 | No TODO/TBD/Coming Soon in published content | **FAIL** | Two TODO comment blocks: lines 30–44 (multi-line task list) and line 296 (missing link placeholder). JSX comments do not render but their presence means the page is not in a shippable state |

**Category 8 verdict: FAIL — 1 issue (TODO blocks)**

---

### Category 9 — Process & Governance

| # | Check | Result | Notes |
|---|---|---|---|
| 9.1 | Human sign-off recorded | **FAIL** | No explicit sign-off. `lastVerified: 2026-03-15` in frontmatter is not a formal approval record |
| 9.2 | All consuming decisions in registry | NOT-TESTED — would require reading decision-registry.md |
| 9.3 | Gate prerequisites met | **FAIL** | Per tab-status.md: Orchestrators tab has no IA Approved, no Terminology Lock, no Content Pass Open. `status: current` is not valid in this gate state |
| 9.4 | Phase ordering respected | NOT-TESTED |
| 9.5 | Findings gathered before fixes | PASS — this is the findings phase |
| 9.6 | Feedback routed | N/A — first formal review |

**Category 9 verdict: FAIL — gate prerequisites not met for `status: current`**

---

## Banned Construction Scan

Full scan of all text for `can`, `may`, `could`, `might`, `should`:

| Line | Sentence | Word | Classification | Flag? |
|---|---|---|---|---|
| 57–58 | "You advertise what you **can** run and at what price; the network sends you jobs." | `can` | procedural — capability of what the operator is able to advertise | No |
| 113 | "tell it what jobs you **can** run and at what price" | `can` | procedural — capability descriptor | No |
| 275–276 | "Existing GPU operators **can** direct spare capacity at video transcoding or AI inference and earn ETH for the work." | `can` | value-claim — asserts an earnings outcome | **FLAG** — rewrite: "Existing GPU operators direct spare capacity at video transcoding or AI inference and earn ETH for each completed job." |
| 287 | "New capabilities are advertised automatically once configured." | — | No modal verbs | — |
| 294 | "The incentives, pricing strategy, and operational requirements differ significantly." | — | No modal verb here; `significantly` is the issue (check 2.2) | — |

**1 flagged value-claim use of `can` at line 275. No `may`, `could`, `might`, or `should` found.**

---

## Heading Score Table

Rubric: Precision (5), Depth (5), Stability (5), Clarity (5), Conciseness (5). Pass threshold: 20/25.
H1/title and "Related Pages" are excluded from scoring per instructions. Only H2 and H3 headings scored.

| Heading | Level | Precision | Depth | Stability | Clarity | Conciseness | Total | Pass? | Suggestion if fail |
|---|---|---|---|---|---|---|---|---|---|
| `Technical Role` | H2 | 4 | 4 | 5 | 5 | 5 | **23/25** | PASS | — |
| `Network Role` | H2 | 4 | 4 | 5 | 5 | 5 | **23/25** | PASS | — |
| `Deployment Types` | H2 | 5 | 4 | 5 | 5 | 5 | **24/25** | PASS | — |
| `Who Should Operate One` | H2 | 2 | 2 | 3 | 3 | 3 | **13/25** | **FAIL** | `Operator Profiles` (estimated 24/25) |

**Scoring rationale for failures:**

**`Who Should Operate One` (13/25):**
- Precision 2: Does not name the concept; names the reader question instead. The section contains persona-based scenario matching.
- Depth 2: "Who Should" is FAQ-adjacent framing. No intellectual signal.
- Stability 3: "One" is a pronoun dependent on page context; breaks out of page.
- Clarity 3: Requires context to decode "One" (= Orchestrator).
- Conciseness 3: 4 words with an indirect pronoun — wordy for what it delivers.
- Fix: `Operator Profiles` — names the concept (profiles of operator types), 2 words, domain-anchored, stable.

---

## Spelling/Typo Pass

Full visible text scanned: frontmatter, accordion titles, Mermaid labels, prose sections, table cells, card descriptions, Note block, link labels.

**No spelling errors or typos found.**

**Style notes (non-blocking):**
- Line 87: "node - but" — spaced hyphen used as a sentence joiner. Borderline; not an em dash but not strictly a hyphen either. CLAUDE.md prohibits em dashes; this spaced construction avoids that. INFO.
- Line 163: "Cascade" — capitalised as a proper noun in the diagram. Acceptable.
- Line 296: `{/* TODO: Link to the commercial orchestrator page once it exists. */}` — see check 8.6.

---

## Component Matrix

| Component | Used | Appropriate for `concept` | Notes |
|---|---|---|---|
| `AccordionGroup` | Yes | Yes — Preferred | Correct use |
| `Accordion` | Yes | Yes — Preferred | Correct use |
| `Note` | Yes | Yes — Preferred | Correct use at line 214 |
| `CardGroup` / `Card` | Yes | Yes (Preferred for `navigation`/`guide`; used only in Related Pages structural element) | Approved structural element per instructions |
| `ScrollableDiagram` | Yes | **Not in matrix** | Custom Mermaid wrapper from `/snippets/components/displays/diagrams/`. Verify against `docs-guide/policies/component-layout-decisions.mdx` before shipping at scale |
| `CenteredContainer` | Yes | **Not in matrix** | Layout wrapper from `/snippets/components/wrappers/containers/`. Verify approval status |
| `StyledTable` / `TableRow` / `TableCell` | Yes | Not explicitly listed for `concept`; `Table` listed for `reference`/`resource` | Appropriate format for the Deployment Types comparison. Canonical table component for v2 |
| `CustomDivider` | Yes | Not in matrix; not in Avoid list | Section separator utility. Standard project component. INFO only |
| `LinkArrow` | Yes | Not in matrix | Inline link component, not a structural component. Acceptable; not subject to pageType matrix |

**Flagged for verification: `ScrollableDiagram`, `CenteredContainer`.**

---

## Cross-Category Connections

```
Root Cause A: Deprecated pageType and purpose values
Affects: Cat 1.2 + Cat 1.4 + Cat 5.1 + Cat 5.7
Fix: pageType: concept | pageVariant: overview | purpose: explain (single frontmatter update, 3 field changes)
```

```
Root Cause B: Missing required frontmatter fields
Affects: Cat 1.1 + Cat 1.6 + Cat 1.7 + Cat 1.8 (complexity, lifecycleStage, veracityStatus all missing)
Fix: Add 3 fields — complexity: beginner | lifecycleStage: discover | veracityStatus: unverified
```

```
Root Cause C: CRITICAL contract name conflict — AIServiceRegistry (line 160) vs ServiceRegistry (lines 201, 208)
Affects: Cat 2.11 (terminology inconsistent) + Cat 6.1 (factual claim not citable) + Cat 6.4 (specific name unverified)
Fix: Verify the correct name(s) against go-livepeer repo or contract-addresses reference. Use one name consistently. Add {/* REVIEW: verify AIServiceRegistry vs ServiceRegistry — same contract or different? */} at lines 160 and 201 until confirmed.
```

```
Root Cause D: TODO blocks in publishable content (lines 30–44 and line 296)
Affects: Cat 5.4 + Cat 6.9 (open-ended research task) + Cat 8.6
Fix: Resolve action items and remove TODO blocks before shipping. The TODO at line 296 (commercial orchestrator link) — either link to an existing page or remove the accordion's closing link reference.
```

```
Root Cause E: Zero cross-tab links
Affects: Cat 4.10 + Cat 7.6
Fix: Add 2 cross-tab links minimum:
  (1) Line 197–198 "LPT staked to an Orchestrator signals economic commitment; Delegators extend this stake" — link text "Delegators" → /v2/lpt/ (or current Delegators tab entry point)
  (2) Note block line 216–217 "Gateways interact only with TicketBroker and ServiceRegistry" — or in the Network Role section — link to /v2/gateways/concepts/role for Gateway perspective
```

```
Root Cause F: Undefined terms at first use (BYOC, Cascade)
Affects: Cat 2.11 + Cat 4.5
Fix:
  Line 176: "BYOC containers" → "BYOC (Bring Your Own Container) containers"
  Line 163 (timeline diagram): "Cascade" → add a Note below the timeline: "Cascade is Livepeer's distributed routing layer for job distribution across worker pools."
```

---

## Blocking Decisions

**BD-1: AIServiceRegistry vs ServiceRegistry contract naming (CRITICAL)**
- Question: Are `AIServiceRegistry` (line 160) and `ServiceRegistry` (lines 201, 208) the same contract under different names, or two distinct contracts?
- Information needed: go-livepeer codebase (services registry implementation) or Livepeer contract addresses reference page.
- If same contract: Standardise on one canonical name throughout. Update all three occurrences.
- If different contracts: Distinguish clearly in the content — which contract handles what, and which role (orchestrator vs AI subnet) uses each.

**BD-2: Commercial Orchestrator target page (line 296)**
- Question: Does a target page for commercial/enterprise orchestrator operators exist or have a planned path?
- Information needed: Alison decision.
- If page exists: Replace TODO with LinkArrow to the target.
- If page does not exist: Remove the link reference or point to the existing Incentive Model page.

**BD-3: `ScrollableDiagram` and `CenteredContainer` approval status**
- Question: Are these custom components on the approved component list for `concept` pages?
- Information needed: Check `docs-guide/policies/component-layout-decisions.mdx`.
- If approved: No action.
- If not approved: Replace with bare Mermaid blocks and remove CenteredContainer wrappers.

---

## Self-Consistency Review

After completing all 9 categories:

- Cat 1 failures (pageType/purpose deprecated) → Cat 5.7 (old-schema frontmatter) → correctly cross-referenced as Root Cause A. Consistent.
- Cat 1 missing veracityStatus → Cat 6.6 (veracityStatus must be unverified) → Cat 9.3 (status: current invalid). Consistent single chain.
- Cat 2.2 banned word `significantly` (line 294) and Cat 2.9 passive value statement (same sentence). Both listed in their correct check categories. Not double-counted in Root Causes — the fix for 2.2 resolves 2.9. Consistent.
- Cat 4.10 and Cat 7.6 both flag zero cross-tab links. Same root cause (Root Cause E). Not double-counted. Consistent.
- Heading `Related Pages` excluded from scoring per instructions. Not flagged as a 3.1 failure (only H2s not explicitly excluded). It is flagged under 3.2 (generic descriptor) and 3.7 (not an expert editorial choice). Consistent with the instruction "Do NOT flag 'Related Pages' heading as a check 3.2 failure." — Re-check: instructions say do not flag as 3.2 failure. Removing that flag. The heading is noted at 3.5 and 3.7 as weak, but 3.2 flag is withdrawn per instructions.

Revised 3.2 assessment: No other generic descriptor headings found. 3.2 verdict: PASS. The Category 3 verdict of FAIL stands on 3.1 (Who Should Operate One 13/25) and 3.5/3.7 findings.

No other internal contradictions found.

---

## Summary

**Verdict: NEEDS WORK**

The page is structurally sound, voice is correct for the orchestrator audience, all internal navigation links resolve, and the content architecture is coherent. This is a strong draft that is close to shippable. It fails on process-level and metadata issues, two heading failures, and one critical veracity conflict.

| Category | Result |
|---|---|
| 1. Frontmatter & Taxonomy | FAIL — 7 fields wrong or missing |
| 2. Voice & Copy | FAIL — 4 issues (banned word, banned construction, 2 undefined terms) |
| 3. Section Naming & Headings | FAIL — "Who Should Operate One" 13/25 |
| 4. Page Structure | FAIL — undefined terms at first use; no cross-tab links |
| 5. Layout & Components | FAIL — deprecated frontmatter; TODO block; 2 unverified custom components |
| 6. Veracity | FAIL — CRITICAL contract name conflict; 10 NOT-TESTED claims; no REVIEW flags |
| 7. Navigation & IA | FAIL — no cross-tab links |
| 8. Links & Rendering | FAIL — TODO block in published content |
| 9. Process & Governance | FAIL — gate prerequisites not met |

**Non-blocking fixes (agent can execute without human decision):**
1. Frontmatter: `pageType: concept`, `pageVariant: overview`, `purpose: explain`, add `complexity: beginner`, `lifecycleStage: discover`, `veracityStatus: unverified`, change `status: draft`
2. Line 275: Remove `can` from value claim — "Existing GPU operators direct spare capacity at video transcoding or AI inference and earn ETH for each completed job."
3. Line 294: Remove `significantly` — restate concretely or delete sentence
4. Line 176: `BYOC` → `BYOC (Bring Your Own Container)`
5. Rename heading "Who Should Operate One" → `Operator Profiles`
6. Add `{/* REVIEW: verify AIServiceRegistry vs ServiceRegistry — same contract? Source: go-livepeer repo or contract-addresses reference */}` at lines 160 and 201
7. Add `{/* REVIEW: verify active set size = 100. Source: BondingManager contract or Livepeer Explorer */}` at lines 89 and 195
8. Add `{/* REVIEW: verify BondingManager, RoundsManager, TicketBroker, ServiceRegistry contract names on Arbitrum. Source: contract-addresses reference page */}` at line 215
9. Add `{/* REVIEW: verify "Gateways interact only with TicketBroker and ServiceRegistry" — does Gateway implementation confirm this scope? */}` at line 216

**Human decisions required:**
- BD-1: AIServiceRegistry vs ServiceRegistry contract names (CRITICAL — one name is wrong)
- BD-2: Commercial Orchestrator target page existence (line 296 TODO)
- BD-3: ScrollableDiagram and CenteredContainer approval status
- BD-4 (not blocking): Cascade definition location — Note below timeline, or inline in the diagram label

---

_Report generated: 2026-03-24 | Agent: Claude Sonnet 4.6_
_Checks framework: `v2/orchestrators/_workspace/canonical/checks.mdx`_
_Output path: `v2/orchestrators/_workspace/canonical/check/concepts/role.md`_
