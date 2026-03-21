# Automated Content Writing & Review System

**Status**: Active — pipeline in build; this document describes the target state
**Branch**: `docs-v2-dev`
**Framework**: [Frameworks/content-pipeline-framework.md](Frameworks/content-pipeline-framework.md)
**Execution plan**: [plan-canonical.md](plan-canonical.md)

---

OUTCOME DOCUMENT

---

## Context

**Purpose**: Documentation for the Livepeer ecosystem

- Educate — help readers understand and operate the protocol
- Inform — accurate, verifiable, up-to-date information
- Canonical source of truth — one authoritative place per topic

**Philosophy**

- Ownerless contribution — any contributor can improve any page within the framework
- AI-first — AI drafts, structures, and reviews; humans decide and verify
- Future-proofed — framework-driven so the system improves as definitions improve

---

## Core Issues in AI-Co-Creation of Content

- Copy veracity — AI generates plausible but incorrect information without source grounding
- Terminology and voice — AI defaults to generic language; misses audience-specific register and domain terminology
- Content not meeting user needs — pages written to a structure, not to a reader job or outcome
- Taxonomy and IA unstructured — no shared classification means no consistent journey or navigation experience for the audience
- Layout and style not homogenous — each page looks and feels different; no template enforcement

---

## Aim

A repeatable, auditable process for AI-human collaborative documentation that:

- Produces content correct for its audience, clear on its purpose, voice-consistent, and veracity-tracked
- Operates at every level — site, tab, section, page — with consistent standards
- Scales from a pilot (gateways, orchestrators) to the full site without rebuilding
- Keeps the human as the decision-maker at every approval point

---

## Concerns Separation

Content quality is multi-dimensional. A single pass cannot evaluate all of it — each dimension requires its own framework, criteria, and pass.

### Content concerns

What the page says and whether it serves the reader:

- **Context** — is the page positioned correctly? Does the reader have what they need to use it?
- **Quality** — is the information complete, correct, and sufficient for the stated purpose?
- **Terminology** — does it use the right vocabulary for the audience and domain?
- **Usefulness** — can the reader actually do the thing the page is for?
- **Voice** — is the register, tone, and language right for this specific audience?
- **Veracity** — are factual, technical, and procedural claims verified against authoritative sources?

### UX concerns

How the page presents and navigates:

- **Layout** — correct template applied; sections in the right order and with the right components
- **Style** — headings score correctly; no banned constructions; UK English throughout
- **Homogenous structure** — every page of the same type looks and behaves the same way

---

## Definition of Good

What "good" means at each level of the documentation hierarchy. Each level has three measurable dimensions: usefulness, content, and UX.

### Site

**Aims**: Consistent taxonomy across all tabs; every page framework-aligned; no structural orphans; navigation matches file system.

**Usefulness metrics**:
- Audience journey complete for every primary audience segment — entry, depth, exit
- All audiences have a clear path in and out
- Cross-tab links exist at every audience journey intersection

**Content metrics**:
- 0 pages with missing-fields classification
- 0 pages with wrong-type classification
- All factual claims veracity-tracked across the full site
- No unresolved stale content in very-high veracity sections

**UX metrics**:
- All navigated pages use pageType-correct templates
- All headings score ≥20/25 across the site
- No component rule violations
- docs.json navigation fully matches file system — 0 broken paths, 0 orphaned files

---

### Tab

**Aims**: Complete audience journey from entry to activation; all canonical section positions present; cross-tab links at journey intersection points.

**Usefulness metrics**:
- Primary audience journey complete — entry → depth → exit — with no missing steps
- On-demand sections (guides, reference, resources) exist for every major post-activation need
- At least 3 cross-tab links at points where audience journeys intersect

**Content metrics**:
- All pages classified correctly for this tab's audience and lifecycle stage
- No pages in the wrong section
- No stale or unverified content in very-high veracity sections (setup, config, reference)

**UX metrics**:
- Tab entry portal correctly routes to all sections
- All sections have an orientation page
- No dead-end pages — every page has a clear next step

---

### Section

**Aims**: All pages serve the same audience at the right lifecycle stage; sequence builds on itself; section has an orientation page that correctly routes.

**Usefulness metrics**:
- Reader can complete the section's primary task without leaving the section for missing prerequisites
- No knowledge gaps between adjacent pages

**Content metrics**:
- All pages have correct pageType for their section position
- No content duplicated from adjacent sections
- All factual claims veracity-tracked within the section

**UX metrics**:
- Section orientation page present and correctly routes to all subsections
- All pages have passing heading names
- Components appropriate for each page's pageType — no forbidden components in use

---

### Page

**Aims**: One purpose, one audience, one job the reader achieves before the end.

**Usefulness metrics**:
- Reader achieves the stated purpose without needing additional context from outside the page
- PREV_PAGE and NEXT_PAGE adjacency is correct — no knowledge gaps in either direction
- All prerequisite knowledge is either stated or linked

**Content metrics**:
- Voice correct for audience — register, terminology, no banned words or constructions
- Factual, technical, and procedural claims verified or explicitly flagged
- UK English throughout; no passive value statements; no hedging openers

**UX metrics**:
- Correct template applied for pageType + pageVariant
- All 10 frontmatter fields present and correct
- All heading names score ≥20/25
- Component use appropriate — no forbidden components, no missing required components

---

## Solutioning

The pipeline solves the Core Issues through a sequence of phases, each narrowing scope and building on the previous phase's output. No phase runs without the preceding phase's artefacts.

**Cascade**: Full site → Tab → Section → Page

**Approach**: AI drafts; human approves at each phase boundary. Every phase produces artefacts that feed the next.

**Phases**:

| Phase | Job | Output |
|---|---|---|
| 1 — Define Context | Understand the landscape at every level | Context documents (site → tab → section → page) |
| 2 — Frameworks & Definitions | Lock the standards every page is measured against | Locked framework files |
| 3 — Content Audit | Inventory what exists; classify against framework | Audit report per tab |
| 4 — Fill Gaps | Write missing content | Draft pages for gap positions |
| 5 — Review & Refine | Review content against framework; fix what doesn't pass | Revised content per page |
| 6 — UX & Layout | Apply template, components, naming, frontmatter | MDX-ready pages |

---

## Process

How to run the pipeline per session:

1. Load the relevant phase artefacts (context docs, framework files, audit report)
2. Run the phase prompt / skill for the current scope (site / tab / section / page)
3. Produce the phase output
4. Human reviews output at the phase checkpoint
5. Human approves, edits, or rejects — nothing advances without approval
6. On approval: artefact is locked and available as input to the next phase
7. Repeat for the next scope level or next phase

---

## Risks

- **Overdefining or overweighting** — framework becomes so detailed it's unusable; AI ignores it or produces generic compliance
- **Not separating concerns well** — content, voice, taxonomy, UX, and style evaluated together; each suffers
- **Phase skipping** — running Phase 5 without Phase 3 audit means refining content that should be restructured first
- **Framework drift** — definitions evolve after pipeline runs; earlier outputs become inconsistent with current standards
- **Human checkpoint fatigue** — too many checkpoints at too fine a granularity; approvals become rubber stamps

---

# Pipeline

Each phase produces context needs for the next. Each phase has a purpose, outcome, and artefacts. No phase runs without the preceding artefacts locked.

---

## Phase 1: Define Context

Define the landscape at every scope level before any content or framework work begins. The output of each sub-phase feeds the next sub-phase.

---

### 1.1 Full Site

#### Purpose & Aims

Understand the full documentation site: what it is, who it serves, what success looks like at the site level.

#### Definition of Full Site Success

See [Definition of Good → Site](#site).

#### Scope

Full site — all tabs, all audiences, all navigation.

#### Outcomes

- Clear understanding of the site's purpose and audiences
- Audience segment map — who uses the site, what they need, how they graduate between tabs

#### Needs

- Context overview of the full Livepeer ecosystem
- Audience overview and categorisation
- Success metric per audience segment
- Audience journey and needs mapping
- Overall content style, brand, and feel
- Overall navigation and IA needs

#### Artefacts & Status

| Artefact | Description | Status |
|---|---|---|
| Full site context document | Compressed summary of site purpose, audiences, and content landscape | [draft / locked] |
| Audience segments document | Audience segments, success metric per segment, graduation paths | [draft / locked] |
| Full site IA / navigation | IA by audience segment — locked before Phase 2 begins | [draft / locked] |

#### Useful Research / Frameworks

- [complete] Audience definitions — `Frameworks/` (framework files)
- [complete] Best practice documentation research — `Research/research.md`

#### References / Resources

- Livepeer ecosystem documentation
- Shtuka data geography research

---

### 1.2 Tab Level

Scope narrowed from full site to individual tabs. Governed by the full site context from 1.1.

#### Purpose & Aims

Understand each tab's audience, arriving question, and reader journey. Define what the tab needs to deliver for its primary audience from entry to depth.

#### Scope

Each tab individually — gateways, orchestrators, developers, delegators, community.

#### Outcomes

- Per-tab audience journey map (entry → depth → exit)
- Cross-tab journey intersections identified

#### Needs

- Full site context from 1.1
- Audience definitions from framework
- IA per tab framework (`08a-ia-per-tab.md`)
- Existing docs.json navigation per tab

#### Artefacts & Status

| Artefact | Description | Status |
|---|---|---|
| Tab context document | Per-tab: audience, arriving question, journey, canonical sections | [draft / locked] per tab |
| Tab map | Structural audit of each tab — section inventory, page classification, gaps | [draft / locked] per tab |

---

### 1.3 Section Level

Scope narrowed from tab to individual sections. Governed by tab context from 1.2.

#### Purpose & Aims

Understand each section within a tab: what it's for, who it serves, what lifecycle stage it occupies, how it connects to adjacent sections.

#### Scope

Each canonical section within a tab (concepts, quickstart, setup, guides, reference, resources).

#### Outcomes

- Section context per section: purpose, audience, lifecycle stage, adjacency
- Section sequence validated against audience journey

#### Needs

- Tab map from 1.2
- Section vocabulary from IA framework
- pageType definitions from framework

#### Artefacts & Status

| Artefact | Description | Status |
|---|---|---|
| Section context | Embedded in tab map — per section: purpose, audience, lifecycle stage, adjacency | [draft / locked] per tab |

---

### 1.4 Page Mapping

Scope narrowed from section to individual pages. Governed by section context from 1.3.

#### Purpose & Aims

Classify every page against the taxonomy; identify missing pages, misclassified pages, and content gaps.

#### Scope

Every navigated page across all tabs in scope.

#### Outcomes

- Full page inventory with taxonomy classification (pageType, audience, purpose, lifecycle stage)
- Gap list: missing pages, wrong-type pages, content that fails its purpose

#### Needs

- Section context from 1.3
- All locked taxonomy enums from framework
- Current page frontmatter (read at scan time)

#### Artefacts & Status

| Artefact | Description | Status |
|---|---|---|
| Page classification table | Per page: pageType, audience, purpose, lifecycle stage, classification (aligned / wrong-type / missing-fields / misplaced / stale) | [draft / locked] per tab |

---

## Phase 2: Frameworks & Definitions

Lock the standards every page is measured against before any content work begins. Framework must be locked before Phase 3 runs.

Per scope level (site → tab → section → page):

- Audience journey structure — how pages relate to each other within a journey
- Content information mapping — what information types appear at each lifecycle stage
- Audience definitions — who the content is for per tab, per section
- Copy voice — per-audience register, tone, terminology, don'ts
- Copy guide — universal do's and don'ts (banned words, banned constructions, opening rules)

#### Outcomes

- Pages have a brief context understanding of their place in the content landscape
- Pages have a clear frontmatter taxonomy — all 10 fields defined and validated
- Pages have a concise orientation statement — what this page is, who it is for, what the reader leaves with

#### Needs

| Framework file | Status |
|---|---|
| `Frameworks/pageType.md` | ✅ Locked |
| `Frameworks/pagePurpose.md` | ✅ Locked |
| `Frameworks/information-type.md` | ✅ Locked |
| `Frameworks/veracity.md` + `veracity-library.md` | ✅ Locked |
| `Frameworks/complexity.md` | ✅ Locked |
| `Frameworks/industry.md` | ✅ Locked |
| `Prompts/voice-rules.md` | ✅ Locked |
| `Prompts/section-naming.md` | ✅ Locked |
| `v2/_workspace/references/content-pipeline/08a-ia-per-tab.md` | ✅ Locked |
| Page templates per pageType | ⬜ Not started — Step 11 |

---

## Phase 3: Content Audit

Inventory what exists across the site. Evaluate it against the locked framework. Produce an actionable audit before any content is written or rewritten.

- What content exists?
- What is usable as-is?
- What quality is it against the framework?
- What can merge with adjacent content?
- What is missing entirely?
- How should existing content be restructured for the audience journey?

### 3.1 Full Site

High-level audit: tab count, page count, classification distribution, gross gaps.

### 3.2 Tabs

Per-tab audit: section inventory, page count per section, classification per page, gap list.

### 3.3 Sections

Per-section audit: pages classified, sequence correct, orientation page present, no content duplicated from adjacent sections.

### 3.4 Pages

Per-page audit: frontmatter complete, pageType correct, audience correct, purpose deliverable, voice pass/fail, veracity status.

#### Outcomes

- Full site audit report — classification distribution, gap list, priority ranking
- Per-tab audit — page inventory with classification and recommended action per page
- Merge candidates — pages that overlap and should be consolidated
- Priority order for Phase 4 and Phase 5 work

---

## Phase 4: Fill Gaps

Write missing content identified in the Phase 3 audit. Drafts only — content goes to staging, not the repo.

- Write basic structure first — headings, purpose statement, section outline
- Draft content section by section — plain markdown, no MDX
- Do not refine voice or layout in this phase — that is Phase 5 and Phase 6

#### Needs

- Context documents from Phase 1
- Locked framework from Phase 2
- Gap list and priority order from Phase 3 audit
- Understanding of generic layout items per information type (for section structure)

#### Outcomes

- Draft pages for all P0 and P1 gap positions
- Staged in `v2/_workspace/context-packs/` — not applied to the repo

---

## Phase 5: Review & Refine Content

Review every page (existing and Phase 4 drafts) against the framework. Fix what does not pass.

### 5.1 Review & Tag

Review each page for:

- Purpose match — does the page deliver on its stated purpose?
- Content veracity — are factual, technical, and procedural claims verifiable?
- Terminology fit — does it use the right vocabulary for audience and domain?
- Voice fit — is the register and tone correct for this audience?
- Layout journey fit — is the content in the right structural position in the reader's journey?
- Voice discipline — no banned words, no wandering prose, no passive value statements
- Flow — not repetitive; clear progression from section to section

#### Outcomes

- Per-page verdict: PASS / NEEDS WORK / REWRITE REQUIRED
- Issues list per page: priority-ordered, with specific fixes

### 5.2 Refine

Apply the Phase 5.1 findings:

**Content**:
- Tighten prose — one paragraph, one job
- Update incorrect or unverified items; add REVIEW flags for unresolved claims
- Refine voice — correct register, correct terminology, no violations
- Ensure naming practices met — headings score ≥20/25

**Structure**:
- Fits the journey type (pageType template)
- Delivers information in the correct flow sequence for the stated purpose
- Achieves the process and outcome the reader needs

---

## Phase 6: UX & Layout

Apply visual structure and MDX formatting to reviewed and approved content. Does not change content — that is Phase 5's job.

### Review

- Information type → correct component selection
- Template compliance per pageType
- Heading naming scores
- Frontmatter completeness

### Refine

- Apply correct pageType template — required sections, correct order
- Select components per section per the pageType component palette
- Score and correct all headings (≥20/25)
- Write complete frontmatter — all 10 schema fields
- Validate MDX renders clean; UK English throughout

#### Artefacts

- MDX-ready page per reviewed/written page
- Staged in `v2/_workspace/context-packs/[group]/rewrites/` — not applied until human approves

---

## Pipeline Prompts & Skills

Implementation detail for each phase lives in:

| File | Phase |
|---|---|
| `Prompts/level-1-tab-map.md` | Phase 1.2–1.4 (tab → page context and classification) |
| `Prompts/level-2-pass-a-content.md` | Phase 5.1–5.2 (review and refine content) |
| `Prompts/level-2-pass-b-layout.md` | Phase 6 (UX and layout) |
| `Prompts/voice-rules.md` | Phase 2 input; Phase 5 review criteria |
| `Prompts/section-naming.md` | Phase 6 naming check |
| `Skills/` | Phase 2 automation — schema validation, frontmatter checks |

