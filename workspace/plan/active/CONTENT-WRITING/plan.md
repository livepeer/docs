# Content Writing Pipeline — Execution Plan

**Status**: Active
**Branch**: `docs-v2-dev`
**Created**: 2026-03-19
**Research**: See [research.md](research.md) for architecture rationale and existing asset map.
**Collation**: See [collation.md](collation.md) for dated inventory of every repo resource with themes.

---

## Scope

Build a modular, testable page-review and rewrite pipeline. Three phases:

1. **Define** — agree on the framework (what "good" means)
2. **Build** — create skills + reference bundles that implement the framework
3. **Run** — pilot, measure, iterate, scale

**Pilot group**: `gateways/guides` — richest existing context (5 personas, recent review packets).

---

## Workflow Protocol

Every task follows two rules:

1. **⏸ CHECKPOINT** — Every task pauses for human review. Nothing proceeds without explicit approval.
2. **🔄 INTERACTIVE** — Any task involving definition, categorization, or judgment is co-authored. AI drafts, human refines, nothing is final until human says so.

---

## Steps

### Step 1. Collation & Theme Extraction ✅ DONE

Inventory every repo resource related to this pipeline, dated, with themes extracted.

- [x] Inventory all resources (research, personas, copy rules, taxonomy, layouts, style, policies, templates, skills, scripts, libraries, reports)
- [x] Date every file
- [x] Extract themes per file and category
- [x] Identify what's solid / broken / missing
- ⏸ CHECKPOINT: human reviews [collation.md](collation.md)

---

## Phase 1: Define the Framework

Everything in this phase is 🔄 INTERACTIVE. These steps define what "good" means. No code, no skills — just agreed definitions that become the contract for everything downstream.

### Step 2. Define pageType — what forms exist and what each governs

**Input**: Existing 12 pageTypes from `page-taxonomy-framework.mdx`, real pages in pilot group.

- [ ] 🔄 Review existing 12 types against real pages — right? Missing? Redundant?
  - ⏸ CHECKPOINT: human approves final pageType enum
- [ ] 🔄 For each pageType: define what structural format it requires, what layout it allows, what success looks like
  - ⏸ CHECKPOINT: human approves governance rules per pageType
- [ ] 🔄 Define the pageType → template mapping (which template in `snippets/templates/pages/` serves which type)
  - ⏸ CHECKPOINT: human approves mapping

**Output**: Approved pageType enum + governance rules + template mapping.

---

### Step 3. Define audience — who reads these docs

**Input**: Existing 9 audiences from `page-taxonomy-framework.mdx`, site tabs/groups.

- [ ] 🔄 Review existing audiences against real site sections — right? Missing? Redundant?
  - ⏸ CHECKPOINT: human approves final audience enum
- [ ] 🔄 For each audience: define terminology level, assumed knowledge, voice, framing
  - ⏸ CHECKPOINT: human approves governance rules per audience
- [ ] 🔄 Map audiences to site tabs/groups (which audiences land where)
  - ⏸ CHECKPOINT: human approves audience → tab/group mapping

**Output**: Approved audience enum + governance rules + site mapping.

---

### Step 4. Define persona — narrow slices within each audience

**Input**: Existing persona research (`v2/gateways/personas.md`, `v2/internal/overview/personas.mdx`).

- [ ] 🔄 For each audience: draft persona variants from existing research + identify gaps
  - ⏸ CHECKPOINT: human approves persona list per audience
- [ ] 🔄 For each persona: define assumed goals, maturity, blockers, example types, next steps
  - ⏸ CHECKPOINT: human approves persona definitions
- [ ] 🔄 Decide format: controlled enum per audience, or curated string field?
  - ⏸ CHECKPOINT: human approves persona format decision

**Output**: Approved persona options per audience + definitions + format decision.

---

### Step 5. Define purpose — what job each page does for the reader

**Input**: Existing 15 purposes from `page-taxonomy-framework.mdx`.

- [ ] 🔄 Review existing purposes — right? Overlapping? Missing?
  - ⏸ CHECKPOINT: human approves final purpose enum
- [ ] 🔄 For each purpose: define what content outcome it produces, what the reader can do after
  - ⏸ CHECKPOINT: human approves governance rules per purpose

**Output**: Approved purpose enum + governance rules.

---

### Step 6. Define industry + niche — what field the content belongs to ✅ DRAFT

**Input**: User notes in `v2/_workspace/research/ai-coauthoring.md` and `content-naming.md` (domain-anchor rule).

Two layers:
- **industry** (broad field, array max 2, first dominates): 9 tokens — `technical`, `finance`, `economics`, `business`, `marketing`, `governance`, `broadcast`, `AI`, `livepeer`
- **niche** (specific context, array): 8 tokens — `web3`, `protocol`, `tokenomics`, `AI`, `video`, `streaming`, `hardware`, `infrastructure`

Industry+niche governs: section naming (domain-anchor rule becomes enforceable), voice register, example selection, terminology conventions.

- [x] 🔄 Field renamed `domain` → `industry` — confirmed by user
- [x] 🔄 Array format confirmed — ordered, max 2, first dominates
- [x] 🔄 9 industry tokens defined with native terms + reference sources
- [x] 🔄 8 niche tokens defined
- [ ] ⏸ CHECKPOINT: human locks industry.md

**Output**: [industry.md](industry.md) — DRAFT, pending lock

---

### Step 7. Define complexity + lifecycleStage

**Input**: Existing enums (3 complexity, 7 lifecycle) from `page-taxonomy-framework.mdx`.

- [ ] 🔄 Review existing enums — right for this repo?
  - ⏸ CHECKPOINT: human approves both enums
- [ ] 🔄 For each level: define concretely what changes (assumptions, depth, prerequisite knowledge)
  - ⏸ CHECKPOINT: human approves governance rules per level

**Output**: Approved complexity + lifecycleStage enums + governance rules.

---

### Step 8a. Define IA per tab — section structure, audience journey, page groups

**Input**:
- `docs.json` (actual nav structure)
- `docs-guide/policies/v2-folder-governance.mdx` — canonical v2/ folder lane definitions: what's publishable, what belongs in `_workspace/`, legacy naming rules. **Required before locking section vocabulary.**
- `docs-guide/_workspace/02_Design-Specification/03_IA-Framework/01_03-IA-Structure-and-Purpose/index.md` — 6-position structural pattern (landing → concepts → quickstart → setup/how_to → guides → reference/resources), per-tab purpose skeletons, purpose × journey stage matrices
- Tab research files: `v2/orchestrators/_workspace/research/orchestrator-tab-review-v3.md`, gateways structure
- Audience → tab mapping from Step 3

Every tab has a specific audience, purpose, and internal IA. The pipeline needs to know what sections and page groups exist within each tab, what the reader journey is through that tab, and how pages relate to each other. Without this, the context pack skill has no structural context for a page — it only knows the page itself, not what section it belongs to or what comes before/after.

**Subplan — 6 tasks:**

**8a-1. Lock standard section vocabulary**
- Derive canonical section names per pageType from the 6-position IA pattern + v2-folder-governance.mdx publishable subtree contract
- Standard vocabulary (draft): `concepts/` | `guides/` | `setup/` (or `how-to/`) | `reference/` | `resources/` — confirm against actual tab structures
- Lock: what section names are canonical, what aliases are acceptable, what names are prohibited
- ⏸ CHECKPOINT: human approves section vocabulary

**8a-2. Flag folder divergence**
- Inventory actual v2/ tab folders against the canonical model
- Flag: missing sections, non-standard names, legacy buckets still in publishable tree
- Separate publishable-tree gaps (content missing) from workspace-lane violations (wrong folder type)
- ⏸ CHECKPOINT: human reviews divergence report

**8a-3. Site ownership map**
- For each tab: identify primary owner (Foundation, core team, SPE, community, etc.)
- Relevant for: who approves content in that tab, whose voice rules apply, what veracity standard applies
- ⏸ CHECKPOINT: human approves ownership map

**8a-4. Primary audience + reader journey per tab**
- For each tab: primary audience (from Step 3) + arriving question + linear journey (entry → depth → exit)
- Cross-tab journeys: `founder → builder → developer → gateway` graduation path, delegator entry points
- ⏸ CHECKPOINT: human approves per-tab audience + journey

**8a-5. IA per section (within each tab)**
- For each tab's section groups: expected page types, expected page count, section purpose, how sections relate
- Pipeline scope first: gateways + orchestrators only — other tabs are post-pipeline
- ⏸ CHECKPOINT: human approves per-section IA for gateways and orchestrators

**8a-6. Per-page definitions**
- For each page group in gateways/guides + orchestrators: expected pageType, expected audience, expected purpose
- This becomes the context pack's structural context layer
- ⏸ CHECKPOINT: human approves per-page definitions

**Output**: Approved per-tab IA — section vocabulary, audience journey, page group definitions. Input to generation contract and context pack skill.

**Cross-references (folder map review, 2026-03-21)**:
- `catalog/` in the published folder map validates `knowledge-hub` naming logic — curated external content directories are already a recognised pattern
- `v2-folder-governance.mdx` is a required input for 8a-1 (section vocabulary lock) — the publishable subtree contract defines what section names are permitted
- `_workspace/` being absent from the published map is correct — IA framework files are working documents, not routed pages

---

### Step 8. Define how the fields combine — the generation contract

**Input**: Approved outputs from steps 2-8a.

This is the core of the framework: how do pageType + audience + persona + purpose + domain + niche + complexity + lifecycleStage combine to determine page structure, section naming, voice, component selection, CTA style?

- [ ] 🔄 Build a decision matrix / lookup table showing how field combinations drive output
  - ⏸ CHECKPOINT: human reviews matrix structure
- [ ] 🔄 Test the matrix against 5 real pages from the pilot group — does it produce the right answer for each?
  - ⏸ CHECKPOINT: human confirms matrix gives correct guidance for real pages
- [ ] 🔄 Revise until the matrix is reliable
  - ⏸ CHECKPOINT: human gives final approval on the generation contract

**Output**: Approved generation contract (the master reference for all skills).

---

### Step 8. Define voice rules per audience

**Input**: Existing `copy-rules-SKILL.md` (operator-focused), approved audience definitions from step 3.

- [ ] 🔄 For each audience: define section opening order, acceptable terminology, tone, don'ts
  - ⏸ CHECKPOINT: human approves voice rules per audience
- [ ] 🔄 Identify where current copy rules need extending vs where they already cover all audiences
  - ⏸ CHECKPOINT: human approves gap analysis
- [ ] 🔄 Draft extended voice rules for audiences not yet covered (developer, delegator, community, etc.)
  - ⏸ CHECKPOINT: human approves new voice rules

**Output**: Approved voice rules per audience.

---

### Step 10. Define section naming rules

**Input**: Existing `content-naming.md` rubric, `page-composition-framework.mdx` naming examples.

- [ ] 🔄 Review rubric — complete? Does it work for all pageTypes?
  - ⏸ CHECKPOINT: human confirms rubric is sound
- [ ] 🔄 Test on 5 real section titles across different pageTypes — do scores match human judgment?
  - ⏸ CHECKPOINT: human confirms scores align
- [ ] 🔄 Revise rubric if needed
  - ⏸ CHECKPOINT: human approves final naming rubric

**Output**: Approved section naming rubric.

---

### Step 11. Define page structure rules per pageType

**Input**: Existing `page-composition-framework.mdx`, existing templates in `snippets/templates/pages/`, `component-layout-decisions.mdx`.

- [ ] 🔄 For each pageType: define required sections, section order, allowed components
  - ⏸ CHECKPOINT: human approves structure rules per pageType
- [ ] 🔄 Verify alignment between composition framework, templates, and layout decisions — flag conflicts
  - ⏸ CHECKPOINT: human resolves any conflicts
- [ ] 🔄 Update templates to match approved structure rules where they diverge
  - ⏸ CHECKPOINT: human approves template updates

**Output**: Approved page structure rules per pageType + aligned templates.

---

## Phase 2: Build the Pipeline

Framework is defined. Now implement it.

### Step 12. Schema migration — implement the agreed definitions in code

- [ ] Add `persona`, `industry`, `niche` fields to `page-taxonomy-framework.mdx` (per step 4 + 6 decisions)
  - ⏸ CHECKPOINT: human reviews framework file
- [ ] Update `tools/lib/frontmatter-taxonomy.js` to validate all fields against approved enums
  - ⏸ CHECKPOINT: human reviews validator
- [ ] Update VS Code snippets (`dev-tools.mdx`, `.vscode/mintlify.code-snippets`)
  - ⏸ CHECKPOINT: human reviews snippets
- [ ] 🔄 Backfill frontmatter on pilot group pages — AI proposes, human confirms each page
  - ⏸ CHECKPOINT: human approves each page's metadata
- [ ] Verify `mintlify dev` renders clean
  - ⏸ CHECKPOINT: human confirms

---

### Step 13. Audit existing references against the new definitions

- [ ] Check 6 core reference files against the approved framework (steps 2-11) — do they match?
  - ⏸ CHECKPOINT: human reviews findings
- [ ] 🔄 Fix stale/contradictory/incomplete content
  - ⏸ CHECKPOINT: human approves each fix
- [ ] Re-test: apply references to 2 gateway guide pages — guidance is clear and correct?
  - ⏸ CHECKPOINT: human confirms

---

### Step 14. Create per-audience don'ts

Extract from approved voice rules (step 9) into standalone files.

- [ ] 🔄 Draft `donts-gateway-operator.md`
  - ⏸ CHECKPOINT: human approves
- [ ] 🔄 Draft `donts-developer.md`
  - ⏸ CHECKPOINT: human approves
- [ ] 🔄 Draft `donts-orchestrator.md`
  - ⏸ CHECKPOINT: human approves
- [ ] Validate each against 2 real pages
  - ⏸ CHECKPOINT: human confirms

---

### Step 15. Create golden examples

- [ ] 🔄 Identify which pageTypes exist in pilot group
  - ⏸ CHECKPOINT: human approves list
- [ ] 🔄 For each pageType: select best existing page or write fresh
  - ⏸ CHECKPOINT: human approves selection
- [ ] Create/refine and place in `v2/_workspace/references/golden-examples/{pageType}.mdx`
  - ⏸ CHECKPOINT: human reviews each — does it represent "what good looks like" per the framework?
- [ ] Validate against all approved rules (copy, naming, layout, structure)
  - ⏸ CHECKPOINT: human confirms

---

### Step 16. Create condensed reference bundles per skill

Each skill gets a `references/` directory with only the rules it needs, extracted from the framework.

- [ ] 🔄 Draft references for Context Pack skill (source-of-truth boundaries, persona format, journey stages, gap criteria)
  - ⏸ CHECKPOINT: human approves
- [ ] 🔄 Draft references for Page Review skill (copy rules condensed, naming rubric condensed, taxonomy enums, layout contract)
  - ⏸ CHECKPOINT: human approves
- [ ] 🔄 Draft references for Rewrite skill (template selection guide, component usage condensed, voice examples)
  - ⏸ CHECKPOINT: human approves
- [ ] Test: fresh AI session with ONLY SKILL.md + references/ — can it produce correct output?
  - ⏸ CHECKPOINT: human reviews test results

---

### Step 17. Build Context Pack skill (Layer 1)

- [ ] 🔄 Define output format (sections, structure, detail level)
  - ⏸ CHECKPOINT: human approves format
- [ ] 🔄 Define skill contract (SKILL.md: inputs, outputs, workflow, failure modes, validation)
  - ⏸ CHECKPOINT: human approves contract
- [ ] 🔄 Choose approach: prompt-only vs script-backed
  - ⏸ CHECKPOINT: human decides
- [ ] Build the skill
  - ⏸ CHECKPOINT: human reviews implementation
- [ ] Generate context pack for `gateways/guides`
  - ⏸ CHECKPOINT: human reviews output
- [ ] Test: completeness (all sections present), accuracy (human scores 1-5 per section), reusability (fresh AI can interpret it)
  - ⏸ CHECKPOINT: human confirms test results
- [ ] Iterate until human scores >= 4/5 on all sections
  - ⏸ CHECKPOINT: human gives final approval

---

### Step 18. Build Page Review skill (Layer 2)

- [ ] 🔄 Define review brief format (8 assessment sections, findings structure, priority)
  - ⏸ CHECKPOINT: human approves format
- [ ] 🔄 Define assessment criteria (thresholds, severity, what's acceptable vs flaggable)
  - ⏸ CHECKPOINT: human approves criteria
- [ ] Build the skill (replaces: docs-change-review, docs-copy, mintlify-authoring-style-compliance, page-content-research-review)
  - ⏸ CHECKPOINT: human reviews implementation
- [ ] 🔄 Test precision (>=90%): run on 5 pages, human marks each finding true/false positive
  - ⏸ CHECKPOINT: human confirms score
- [ ] 🔄 Test recall (>=80%): human reviews same pages independently, compare
  - ⏸ CHECKPOINT: human confirms score
- [ ] Test comparison: compare to existing gateway review packets
  - ⏸ CHECKPOINT: human reviews
- [ ] Test actionability: can a fresh AI rewrite a page using only the brief?
  - ⏸ CHECKPOINT: human reviews
- [ ] Iterate until precision >= 90%, recall >= 80%
  - ⏸ CHECKPOINT: human gives final approval

---

### Step 19. Build Rewrite skill (Layer 3)

- [ ] 🔄 Define rewrite boundaries (what can change, what's preserved, brief-to-rewrite relationship)
  - ⏸ CHECKPOINT: human approves boundaries
- [ ] 🔄 Define diff summary format (changes keyed to brief findings)
  - ⏸ CHECKPOINT: human approves format
- [ ] Build the skill
  - ⏸ CHECKPOINT: human reviews implementation
- [ ] Test brief coverage: every brief item addressed in rewrite
  - ⏸ CHECKPOINT: human reviews
- [ ] Test automated gates: zero banned words, valid frontmatter, naming scores >= 20/25, MDX renders, layout compliant, no broken links
  - ⏸ CHECKPOINT: human reviews
- [ ] 🔄 Test human quality: accuracy, voice, journey, readability, no regressions
  - ⏸ CHECKPOINT: human confirms scores
- [ ] 🔄 Test before/after: score original vs rewrite on all 8 dimensions
  - ⏸ CHECKPOINT: human confirms improvement
- [ ] Iterate until all tests pass
  - ⏸ CHECKPOINT: human gives final approval

---

## Phase 3: Run the Pipeline

### Step 20. Wire the pipeline

- [ ] 🔄 Choose orchestration approach (manual invocation / meta-skill / script-backed)
  - ⏸ CHECKPOINT: human decides
- [ ] Build sequential flow: context pack → review → rewrite → validate (with checkpoints between layers)
  - ⏸ CHECKPOINT: human reviews implementation
- [ ] Test end-to-end on 1 page
  - ⏸ CHECKPOINT: human reviews result + checkpoint UX

---

### Step 21. Pilot on gateways/guides

- [ ] Generate context pack for the group
  - ⏸ CHECKPOINT: human approves
- [ ] Run page review on all pages
  - ⏸ CHECKPOINT: human reviews + approves/edits each brief
- [ ] Run rewrite on all approved pages
  - ⏸ CHECKPOINT: human reviews each rewrite — accept, reject, or edit
- [ ] Run automated validation on all rewrites
  - ⏸ CHECKPOINT: human reviews
- [ ] Measure: precision, recall, rewrite quality, acceptance rate, time per page
  - ⏸ CHECKPOINT: human reviews metrics
- [ ] 🔄 Diagnose weakest layer, agree on fixes
  - ⏸ CHECKPOINT: human approves fix plan before scaling

---

### Step 22. Scale beyond pilot

- [ ] 🔄 Choose next groups (AI proposes order based on readiness, human decides)
  - ⏸ CHECKPOINT: human approves group order
- [ ] 🔄 Create persona research for groups that lack it
  - ⏸ CHECKPOINT: human approves per group
- [ ] Create context packs for each group
  - ⏸ CHECKPOINT: human approves each
- [ ] Add batch mode + progress tracking + resume capability
  - ⏸ CHECKPOINT: human reviews
- [ ] 🔄 Retire old skills once pipeline fully covers them
  - ⏸ CHECKPOINT: human confirms each retirement

---

## Progress Tracker

Update this section as each step completes. Current step is marked with ▶.

### Phase 1: Define the Framework

| Step | Task | Status |
|---|---|---|
| 1 | Collation & theme extraction | ✅ Done |
| 2 | Define pageType enum + governance | ✅ Done — 7 types + pageVariant |
| 3 | Define audience enum + governance | ✅ Done — 7 audiences (was 10, consolidated) |
| 4 | Define persona per audience | ✅ Done — all 7 audiences have personas |
| 5 | Define purpose enum + deep definitions | ✅ Done — pagePurpose.md |
| 5a | Information type taxonomy (layer 1 — purpose fit) | ✅ Done — information-type.md |
| 5b | Information category (layer 2 — format/layout) | ⏳ Deferred to Phase 2 — layout decisions happen during pipeline build |
| 5c | Veracity framework + sources registry | ✅ Framework done — veracity.md. Sources library complete — veracity-library.md (45 entries). Priority table complete — TERMINOLOGY-COLLATE/consolidated/veracity-sources.md |
| 5d | Governance index | ✅ Done — index.md |
| 6 | Define industry + niche (layer 3 — voice/terminology) | ✅ Done — industry.md (9 industry tokens + 8 niche tokens, locked) |
| 7 | Define complexity + lifecycleStage | ✅ Done — complexity.md |
| ▶ 8a | Define IA per tab — section structure, audience journey, page groups | 🔄 DRAFT — 08a-ia-per-tab.md, awaiting checkpoint |
| 8 | Define generation contract (how all fields combine) | ⬜ Not started |
| 9 | Define voice rules per audience | ⬜ Not started |
| 10 | Define section naming rules | ⬜ Not started |
| 11 | Define page structure rules per pageType | ⬜ Not started |

### Phase 2: Build the Pipeline

| Step | Task | Status |
|---|---|---|
| 12 | Schema migration (implement definitions in code) | ⬜ Not started |
| 13 | Audit existing references against new definitions | ⬜ Not started |
| 14 | Create per-audience don'ts | ⬜ Not started |
| 15 | Create golden examples per pageType | ⬜ Not started |
| 16 | Create condensed reference bundles per skill | ⬜ Not started |
| 17 | Build Context Pack skill (Layer 1) | ⬜ Not started |
| 18 | Build Page Review skill (Layer 2) | ⬜ Not started |
| 19 | Build Rewrite skill (Layer 3) | ⬜ Not started |

### Phase 3: Run the Pipeline

| Step | Task | Status |
|---|---|---|
| 20 | Wire the pipeline (orchestration + runbook) | ⬜ Not started |
| 21 | Pilot on gateways/guides | ⬜ Not started |
| 22 | Scale beyond pilot | ⬜ Not started |

---

## Execution Order

```
Step 1 (collation) ✅
     │
     ▼
Steps 2-11 (define framework) ──── all 🔄 INTERACTIVE, sequential ────►
     │
     ▼
Step 12 (schema migration) ──► Step 13 (audit refs) ──► Steps 14-16 (don'ts, golden examples, ref bundles)
     │
     ▼
Step 17 (context pack skill) ──► Step 18 (page review skill) ──► Step 19 (rewrite skill)
     │
     ▼
Step 20 (wire) ──► Step 21 (pilot) ──► Step 22 (scale)
```

- Steps 2-11 are fully sequential and blocking — the framework must be agreed before anything is built.
- Steps 12-16 can partially overlap but each depends on the framework.
- Steps 17-19 are sequential (each layer needs the previous layer's output for testing).
- Steps 20-22 are sequential.

---

## Decision Log

| Date | Decision | Rationale |
|---|---|---|
| 2026-03-19 | Pilot group: gateways/guides | Richest existing persona research + recent review packets for comparison |
| 2026-03-19 | Add `persona` to frontmatter schema | audience alone too broad; persona alone explodes schema. Optional, derived, audience-scoped. |
| 2026-03-19 | Add `domain` + `niche` to frontmatter schema | Naming rubric requires domain-native terminology but domain wasn't declared — AI had to guess. Now enforceable. Also governs voice register and example selection. |
| 2026-03-19 | All tasks checkpointed + interactive markers | Every task gets human review. Definitions are co-authored. |
| 2026-03-19 | Insert framework definition phase (steps 2-11) | Can't build good skills without first agreeing what each field means, what its enums are, and how they combine. |
| 2026-03-20 | Information type is section-level, not page-level | A single page contains multiple sections with different information types. Agent identifies type per section at runtime, applies the appropriate veracity standard per section. `veracityStatus` stays page-level (rolls up from worst-case section). |
| 2026-03-20 | Information type is NOT a frontmatter field | Derived at runtime from purpose → information type mapping. Not tagged in content. Writers never set it. See information-type.md. |
| 2026-03-20 | `veracityStatus` is the only new frontmatter field from the information layer | `verified` / `unverified` / `stale`. Everything else (information type, veracity standard, sources) is pipeline reference material loaded at runtime. |
| 2026-03-20 | Purpose → information type mapping defines permitted types per purpose | Not every section matches — it defines what types are expected/allowed. A build page will have narrative intro, factual prereqs, procedural steps, technical code. All are valid because build permits procedural + technical. |

---

## Cross-Plan Flags

### ⚠️ AI Discoverability: client-side components require companion `.json` files
**Raised**: 2026-03-21 during glossary/SearchTable design discussion.

Any page authored using `SearchTable`, `ShowcaseCards`, or `CardCarousel` renders data **client-side only**. The content is invisible to AI agents, crawlers, and LLM training pipelines. This is a write-time obligation on every page that uses these components.

**Rule for writers/agents building any page using these components:**
- `SearchTable` on a page → write a companion `[page-slug]-data.json` alongside the MDX containing the full unfiltered data array
- `ShowcaseCards` on a page → write a companion `[page-slug]-data.json` with the full items array
- Link the companion file from the page (visible `<Note>` block recommended)

The automation to auto-generate companion files from MDX props is tracked in: [`tasks/plan/active/AI-DISCOVERABILITY/plan.md`](../AI-DISCOVERABILITY/plan.md) — Task CDA-4 (manual) / CDA-5 (automated).

Until CDA-5 is complete, this is a **manual write-time step** and must be noted in any page template or skill that uses these components.

---

## Open Questions

1. **Skill implementation**: Prompt-only vs script-backed? Decided per skill in steps 17-19.
2. **Golden example sourcing**: Existing pages good enough, or write from scratch? Decided in step 15.
3. **Checkpoint UX**: File-based or conversational? Decided in step 20.
4. **Context pack freshness**: Per-session? Weekly? On docs.json change? Decided in step 17.
5. ~~**Pages spanning audiences**~~: Resolved — persona model handles this.
6. ~~**Domain niche granularity**~~: Resolved — both `industry` and `niche` are enums. Locked in industry.md.
