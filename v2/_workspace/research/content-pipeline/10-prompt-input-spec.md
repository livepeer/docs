# 10 — Prompt Input Spec

**Status**: ✅ Locked
**Step**: 8 (Content Writing Pipeline)
**Purpose**: Defines the context block, reference files, phases, quality gates, and output format for each of the three pipeline prompts/skills. This is the contract Steps 16–18 build against.
**Related**: [08a-ia-per-tab.md](08a-ia-per-tab.md) | [../../../workspace/plan/active/CONTENT-WRITING/Prompts/voice-rules.md](../../../workspace/plan/active/CONTENT-WRITING/Prompts/voice-rules.md) | [../../../workspace/plan/active/CONTENT-WRITING/Frameworks/pagePurpose.md](../../../workspace/plan/active/CONTENT-WRITING/Frameworks/pagePurpose.md)

---

## How the Three Prompts Connect

```
Level 1 Prompt A (Design)
  Consumes: audience + personas + arriving question — no repo access
  Produces: [tab]-audience-design.md — ideal structure, jobs-to-be-done, journey map
  ⏸ human validation required
      ↓ run once per tab (skip if locked audience design already exists)
Level 1 Prompt B (Audit)
  Consumes: audience-design.md + docs.json
  Produces: tab-map.md — existing content measured against the designed ideal
      ↓
Level 2 Pass A (Content)
  Consumes: tab-map.md + page content
  Produces: reviewed/written/audited content — plain markdown, no MDX
      ↓
Level 2 Pass B (Layout)
  Consumes: Pass A approved content
  Produces: MDX-ready page — templated, component-wrapped, frontmatter complete
```

Each level pauses for human checkpoint before the next runs. No level runs without the preceding output locked.

---

## Level 1 — Tab Map

### Two Prompts, Not One

Level 1 is two separate prompts with different modes of thinking. They must not be conflated — loading the repo before the design is complete anchors the AI to what exists and prevents genuine first-principles analysis.

- **Prompt A (Design)** — no repo access. Reader situation → jobs-to-be-done → ideal section shape and journey map. Produces the canonical target the audit measures against.
- **Prompt B (Audit)** — repo access required. Existing content measured against the Prompt A output. Produces the tab-map.md that Level 2 consumes.

**When Prompt A is needed**: Once per tab, or when the audience design is revisited. If a tab already has a locked audience design file (e.g. `08a-ia-per-tab.md` for gateways), Prompt A has already run — go directly to Prompt B.

**When Prompt B is needed**: Every pipeline cycle.

---

### Prompt A — Design (no repo access)

#### Purpose

Produces the canonical audience design: what SHOULD exist for this audience from first principles. No repo access — the goal is to understand the reader's situation and needs independently of what currently exists.

#### Context Block

| Field | Type | Source | Required |
|---|---|---|---|
| `tab` | string | caller | ✅ |
| `audience` | audience token | caller | ✅ |
| `arriving_question` | string | caller | ✅ |
| `personas` | list of persona tokens | caller | ✅ |

#### Reference Files Loaded

| File | Why |
|---|---|
| `Frameworks/content-pipeline-framework.md` | Audience + persona definitions — used to ground who this person is |
| `Frameworks/pagePurpose.md` | Purpose vocabulary — used to name what each section accomplishes |
| `Frameworks/complexity.md` | lifecycleStage values — used to map journey stages |
| `Frameworks/industry.md` | Industry + niche tokens — used to ensure section names and content vocabulary use correct domain terminology for this audience's field |

#### Phases

1. **Reader situation** — who is this person? What just happened before they arrived? What do they need to figure out? (No repo. No existing structure. Just the human.)
2. **Jobs-to-be-done** — generate 5–7 jobs this audience has when visiting this tab. Format: "When [X], I want to [Y] so I can [Z]."
3. **Diverge** — generate 5–7 structurally different ways to organise content for these jobs. Do not evaluate during generation.
4. **Evaluate** — score each option: does it serve all identified jobs? Is the journey clear? Is each section shape coherent?
5. **Journey map** — produce a linear journey (discovery → competency stages with named milestones) + on-demand reference layer
6. **Section shape** — for each section: purpose, audience entry state (arrives knowing), audience exit state (leaves able to)

#### Quality Gates

- At least 5 distinct jobs-to-be-done before evaluation begins
- At least 5 structural options generated before any are evaluated
- Every section in the ideal structure has a stated purpose and a clear entry/exit audience state
- No page paths, folder names, or current content referenced — design is repo-agnostic

#### Output Format

File: `v2/_workspace/context-packs/[tab-slug]-audience-design.md`

```
# [Tab] — Audience Design

**Audience**: [token]
**Arriving question**: [string]
**Personas**: [list]
**Generated**: [date]
**Status**: DRAFT — awaiting human validation before Prompt B runs

## Jobs to be Done
| # | When... | I want to... | So I can... |

## Ideal Journey
[Linear: named milestones with lifecycleStage]
[On-demand: reference needs that don't follow a sequence]
[Cross-tab: graduation paths and entry points from other tabs]

## Section Shape
| Section | Purpose | Audience entry state | Audience exit state |

## Options Evaluated
[Condensed summary of 5–7 structural options + scores + winner rationale]
```

---

### Prompt B — Audit

#### Purpose

Measures existing content against the designed ideal from Prompt A. Produces the tab-map.md that all Level 2 operations consume.

Operates in two scopes:

- **Per-tab mode** (Phase 1.2–1.4): scans one tab; produces tab context + page classification table
- **Full-site mode** (Phase 1.1): scans all tabs; produces site-level audience map and graduation paths

#### Context Block (variables filled per run)

| Field | Type | Source | Required |
|---|---|---|---|
| `tab` | string | caller | ✅ |
| `mode` | `per-tab` \| `full-site` | caller | ✅ |
| `audience_design_path` | path to Prompt A output (or `08a-ia-per-tab.md`) | caller | ✅ per-tab |
| `audience` | audience token | audience design file | ✅ per-tab |
| `arriving_question` | string | audience design file | ✅ per-tab |
| `personas` | list of persona tokens | audience design file | ✅ per-tab |
| `section_groups` | ideal section list | audience design file | ✅ per-tab |
| `nav_json` | navigation entries for this tab | docs.json (read at runtime) | ✅ |

#### Reference Files Loaded

| File | Why |
|---|---|
| Prompt A output (or `08a-ia-per-tab.md`) | The designed ideal — section vocabulary, audience journey, per-page field combinations — the target the tab is measured against |
| `Frameworks/pageType.md` | 7 types + variants — used to classify each page |
| `Frameworks/pagePurpose.md` | 15 purposes — used to classify each page |
| `Frameworks/complexity.md` | lifecycleStage values — used to map pages to journey position |
| `Frameworks/content-pipeline-framework.md` | Audience + persona definitions — used to verify audience assignments |

#### Phases (per-tab mode)

1. **Load navigation** — read docs.json for this tab; build page list with paths
2. **Scan frontmatter** — read frontmatter for each page; flag missing fields
3. **Classify each page** — assign pageType, audience, purpose, lifecycleStage; apply verdict (aligned / wrong-type / missing-fields / misplaced / stale)
4. **Map to audience journey** — overlay page list against the ideal journey from the audience design file; identify where pages sit (linear: 1–3; on-demand: 4–6)
5. **Gap analysis** — compare actual structure against ideal; flag: missing pages, missing sections, misplaced content, merge candidates
6. **Cross-tab paths** — identify journey intersections with other tabs (per audience design file)

#### Quality Gates

- Every navigated page has a classification verdict
- Audience journey has a named entry, depth, and exit point
- Gap list has at least one recommended action per gap (add / merge / move / rewrite / remove)
- Section vocabulary matches canonical names from the audience design file (no non-standard names pass without a flag)

#### Output Format

File: `v2/_workspace/context-packs/[tab-slug]-tab-map.md`

```
# [Tab] — Tab Map

**Audience**: [token]
**Arriving question**: [string]
**Personas**: [list]
**Generated**: [date]

## Audience Journey
[Linear: positions 1–3 with section name + lifecycle stage]
[On-demand: positions 4–6]
[Cross-tab: destination + intersection reason]

## Section Inventory
| Section | Folder | pageType | lifecycleStage | Page count | Status |

## Page Classification Table
| Page | Path | pageType | audience | purpose | lifecycleStage | Verdict | Notes |

## Gap List
| Gap | Type | Priority | Recommended action |

## Merge Candidates
| Page A | Page B | Reason |
```

---

## Level 2 Pass A — Content

### Purpose

Reviews, audits, rewrites, or writes page content. The core content operation.

Operates in four modes, each mapping to a canonical pipeline phase:

| Mode | Canonical phase | Input | Output |
|---|---|---|---|
| `AUDIT` | Phase 3: Content Audit | Section group (all pages) | Classification table + priority ranking for the group |
| `WRITE` | Phase 4: Fill Gaps | Section brief + context | New page content, plain markdown |
| `REWRITE` | Phase 5: Review & Refine | Existing page + issues | Rewritten content, plain markdown |
| `REVIEW` | Phase 5: Review & Refine | Existing page | Verdict + issues list + targeted edits |

### Context Block (common — all modes)

| Field | Type | Source | Required |
|---|---|---|---|
| `mode` | `AUDIT` \| `WRITE` \| `REWRITE` \| `REVIEW` | caller | ✅ |
| `tab_map_path` | path | Level 1 output | ✅ |
| `section` | section name | tab map | ✅ |
| `audience` | audience token | tab map / frontmatter | ✅ |
| `purpose` | purpose token | frontmatter | ✅ REVIEW/REWRITE/AUDIT |
| `pageType` | pageType token | frontmatter | ✅ REVIEW/REWRITE |
| `lifecycleStage` | lifecycleStage token | frontmatter | ✅ |
| `prev_page` | path + title | tab map | recommended |
| `next_page` | path + title | tab map | recommended |

### Mode-Specific Inputs

**AUDIT mode** (operates on a section group, not a single page):
- `section_group_path` — folder path for the group (e.g., `v2/gateways/guides/payments-and-pricing/`)
- All page frontmatter within the group (read at runtime)
- Tab map loaded — expected pageType and lifecycleStage per subgroup from the audience design file

**WRITE mode** (no existing page):
- `section_brief` — structured brief containing:
  - Who arrives (audience, persona, arriving knowledge state)
  - What they leave able to do (one concrete outcome)
  - What they would do if this page didn't exist (frames the framing)
  - PREV_PAGE + NEXT_PAGE with one-sentence descriptions
  - Any source material / facts to work from

**REWRITE mode** (existing page that failed REVIEW):
- `page_path` — path to existing page
- `review_findings` — output from a prior REVIEW pass (issues list with priorities)

**REVIEW mode**:
- `page_path` — path to page to review

### Reference Files Loaded (all modes)

| File | Why |
|---|---|
| `Prompts/voice-rules.md` | Register, tone, do/don't, prohibited phrases for this page's audience |
| `Frameworks/pagePurpose.md` | Full definition for this page's purpose — process, information types, governance |
| `Frameworks/pageType.md` | Structural contract for this pageType — required sections, section order — used in structure check phase |
| `Frameworks/information-type.md` | Expected information types per purpose — what categories of information should be present |
| `Frameworks/complexity.md` | Assumed knowledge per lifecycleStage — used in audience fit check to verify content targets the right knowledge level |
| `Frameworks/content-pipeline-framework.md` | Audience + persona definitions — entry state, knowledge frame, domain — used in audience fit check |
| `Frameworks/veracity.md` | Veracity standards per information type — when to flag, how to flag |
| `Frameworks/veracity-library.md` | 45-source authoritative references — what to cite per claim type |
| `Frameworks/industry.md` | Industry + niche definitions — terminology register and vocabulary conventions |
| `Prompts/section-naming.md` | 6-step scoring rubric — headings scored in structure check phase; ≥20/25 required |

### Phases (REVIEW and REWRITE — per page)

1. **Pre-flight** — context block complete? frontmatter valid? required fields present? If not, halt and list what's missing.
2. **Audience fit** — does the page serve the right audience at the right lifecycle stage? Does the content assume the right knowledge level?
3. **Purpose check** — does the content deliver the stated purpose? Does the reader achieve the purpose by the end?
4. **Information type audit** — are the right categories of information present? Is each section the right information type for the purpose?
5. **Voice check** — correct register, terminology, and tone? Universal rules pass? Audience-specific rules pass? No prohibited phrases?
6. **Veracity check** — are factual, technical, and procedural claims verifiable? Flag unverifiable claims with `{/* REVIEW: [claim] — verify with: [source] */}`
7. **Structure check** — headings score ≥20/25? One paragraph, one job? Correct flow sequence for purpose? No dead-end sections?

**AUDIT mode phases**: run phases 1–4 across all pages in the group; aggregate into classification table + priority ranking. Voice and veracity checks run at spot-check level (3–5 pages), not every page.

**WRITE mode phases**: pre-flight → draft structure (headings + section outline only) → draft content per section (information and facts; no voice application yet) → voice pass (apply voice rules and register across all drafted sections) → veracity flag pass. Structure, content, and voice are separate operations — do not apply voice rules during the content drafting step.

### Quality Gates

- Pre-flight must pass before any content phase runs
- Every phase produces a verdict before the next phase starts
- REVIEW output: each finding has a priority (P0 breaking / P1 significant / P2 minor) and a specific fix
- WRITE/REWRITE output: plain markdown only — no MDX components, no frontmatter (that's Pass B)
- AUDIT output: every page in the group has a verdict; priority ranking is actionable (P0/P1/P2)
- All output: UK English; no banned words/constructions

### Output Format

**REVIEW**:
```
# Review: [page title]

**Verdict**: PASS | NEEDS WORK | REWRITE REQUIRED
**Audience**: [token] | **Purpose**: [token] | **Lifecycle**: [token]

## Issues
| # | Phase | Priority | Finding | Fix |
|---|---|---|---|---|

## Proposed edits
[Section-by-section proposed changes for NEEDS WORK verdict]
[Full rewrite brief for REWRITE REQUIRED verdict]
```

**WRITE / REWRITE**:
```
# [Page title — scored heading]

[Plain markdown content]
[Sections named to scoring rubric standard]
[{/* REVIEW: claim — verify with: source */} flags inline where claims are unverified]

---
## Frontmatter proposal
[All 10 fields as a YAML block — Pass B validates and applies]
```

**AUDIT**:
```
# Audit: [Section group name]

## Classification Table
| Page | pageType | audience | purpose | lifecycleStage | Verdict | Priority |

## Summary
[Classification distribution, gross gaps, merge candidates]

## Priority Actions
| Priority | Action | Pages affected |

## Merge Candidates
| Page A | Page B | Reason |
```

---

## Level 2 Pass B — Layout

### Purpose

Takes approved Pass A content (plain markdown) and applies the full visual and structural layer: template, components, section naming, frontmatter, MDX formatting, UK English final pass. Does not change content — that is Pass A's job.

### Context Block

| Field | Type | Source | Required |
|---|---|---|---|
| `pass_a_content_path` | path | Pass A output | ✅ |
| `pageType` | pageType token | Pass A frontmatter proposal | ✅ |
| `pageVariant` | variant token | Pass A frontmatter proposal | optional |
| `audience` | audience token | Pass A frontmatter proposal | ✅ |
| `purpose` | purpose token | Pass A frontmatter proposal | ✅ |
| `tab_map_path` | path | Level 1 output | ✅ (for PREV/NEXT links) |

### Reference Files Loaded

| File | Why |
|---|---|
| `Frameworks/pageType.md` | pageType structural rules — required sections, section order, forbidden patterns |
| `Frameworks/pagePurpose.md` | Purpose definitions — informs which components are appropriate per section; used in frontmatter validation |
| `Frameworks/information-type.md` | Information type definitions — used in component selection phase to classify each section before selecting component |
| Page template for this pageType | Required sections, section order, allowed components — **placeholder until Step 11** |
| `Prompts/section-naming.md` | 6-step scoring rubric — all headings scored; failing headings corrected |
| Component rules (from `component-layout-decisions.mdx`) | Which components are permitted per information type per pageType |
| `Prompts/voice-rules.md` | Final UK English pass + audience register verification |

### Phases

1. **Template selection** — pageType + pageVariant → select correct template; load required section list and order
2. **Structure validation** — does Pass A content match the template's required sections? Flag missing sections, wrong-order sections, forbidden sections
3. **Component selection** — per section, identify information type → select correct component from the permitted palette for this pageType; no forbidden components
4. **Section naming** — run all headings through `section-naming.md` scoring; any heading scoring <20/25 is flagged and a replacement proposed
5. **Frontmatter completion** — take Pass A frontmatter proposal; validate all 10 fields present and match locked enums; fill any missing fields
6. **MDX formatting** — wrap sections in correct component syntax; format code blocks; add required component props; insert PREV/NEXT page links from tab map
7. **UK English final pass** — scan for US spellings, banned constructions, passive value statements; correct inline

### Quality Gates

- Correct template applied for pageType + pageVariant
- All 10 frontmatter fields present and valid against locked enums
- All headings score ≥20/25
- No forbidden components in use; no required components missing
- MDX renders clean (no syntax errors)
- UK English throughout; no banned constructions

### Output Format

File: `v2/_workspace/context-packs/[group-slug]/rewrites/[page-slug]-rewrite.mdx`

```mdx
---
[All 10 frontmatter fields — validated]
---

[MDX content with correct components, heading names, PREV/NEXT links]
```

Alongside the MDX file, a brief change log:
```
## Changes from Pass A
- [Section]: [what was changed and why]
- Heading corrections: [original → corrected] (score: X/25 → Y/25)
- Components applied: [list]
- Frontmatter fields added/corrected: [list]
- REVIEW flags carried over: [count] — require human verification before apply
```

---

## ✅ CHECKPOINT PASSED

**Review checklist**:

- [x] Level 1 Prompt A (Design) — context block sufficient? Phases produce genuine first-principles output (not repo-anchored)?
- [x] Level 1 Prompt A output format — audience-design.md structure usable as Prompt B input?
- [x] Level 1 Prompt B (Audit) — context block fields correct? Modes (per-tab / full-site) correctly scoped?
- [x] Level 1 Prompt B output format — tab-map.md structure usable as Level 2 input?
- [x] Pass A modes — AUDIT / WRITE / REWRITE / REVIEW correctly scoped?
- [x] Pass A context block — all necessary fields present? Any over-specification?
- [x] Pass A WRITE mode — structure → content → voice separation correct? Phases sufficient?
- [x] Pass A output formats — clear and implementable?
- [x] Pass B context block — all necessary fields? Template placeholder acceptable for now?
- [x] Pass B phases — correct sequence? Any missing?
- [x] Pass B output format — MDX + change log sufficient?
- [x] Cross-prompt flow — Prompt A → Prompt B → Pass A → Pass B — each output feeds the next correctly?
- [x] Any fields that should be required but are marked optional, or vice versa?
