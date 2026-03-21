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

### Step 6. Define industry + niche — what field the content belongs to ✅ LOCKED

**Input**: User notes in `v2/_workspace/research/ai-coauthoring.md` and `content-naming.md` (domain-anchor rule).

Two layers:
- **industry** (broad field, array max 2, first dominates): 9 tokens — `technical`, `finance`, `economics`, `business`, `marketing`, `governance`, `broadcast`, `AI`, `livepeer`
- **niche** (specific context, array): 8 tokens — `web3`, `protocol`, `tokenomics`, `AI`, `video`, `streaming`, `hardware`, `infrastructure`

Industry+niche governs: section naming (domain-anchor rule becomes enforceable), voice register, example selection, terminology conventions.

- [x] 🔄 Field renamed `domain` → `industry` — confirmed by user
- [x] 🔄 Array format confirmed — ordered, max 2, first dominates
- [x] 🔄 9 industry tokens defined with native terms + reference sources
- [x] 🔄 8 niche tokens defined
- [x] ⏸ CHECKPOINT: industry.md locked ✅

**Output**: [Frameworks/industry.md](Frameworks/industry.md) — ✅ Locked

---

### Step 7. Define complexity + lifecycleStage

**Input**: Existing enums (3 complexity, 7 lifecycle) from `page-taxonomy-framework.mdx`.

- [ ] 🔄 Review existing enums — right for this repo?
  - ⏸ CHECKPOINT: human approves both enums
- [ ] 🔄 For each level: define concretely what changes (assumptions, depth, prerequisite knowledge)
  - ⏸ CHECKPOINT: human approves governance rules per level

**Output**: Approved complexity + lifecycleStage enums + governance rules.

---

### Step 8a. Define IA per tab — section structure, audience journey, page groups ✅ LOCKED

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

**Output**: [08a-ia-per-tab.md](../../../v2/_workspace/references/content-pipeline/08a-ia-per-tab.md) — ✅ Locked. Section vocabulary, audience journeys for gateways + orchestrators, guide subgroup IA, per-page field combinations. All open questions resolved. Resources reorganisation deferred to Step 21.

**Cross-references (folder map review, 2026-03-21)**:
- `catalog/` in the published folder map validates `knowledge-hub` naming logic — curated external content directories are already a recognised pattern
- `v2-folder-governance.mdx` is a required input for 8a-1 (section vocabulary lock) — the publishable subtree contract defines what section names are permitted
- `_workspace/` being absent from the published map is correct — IA framework files are working documents, not routed pages

---

### Step 8. Define prompt input spec — what each pipeline prompt needs in its context block

**Input**: Approved outputs from steps 2–8a.

Not a static decision matrix. The framework fields (pageType, audience, persona, purpose, industry, niche, complexity, lifecycleStage) are only useful if we know which fields each pipeline prompt type actually needs in its context block, and in what form. This step defines that.

For each pipeline prompt type (Level 1 tab map, Level 2 Pass A content, Level 2 Pass B layout):
- What fields from the framework go in its context block?
- What does the context block look like (structure, required vs optional fields)?
- What phases does the prompt run?
- What quality gates apply before delivery?
- What is the output format?

This spec is the contract that Steps 16–19 build against.

- [ ] 🔄 For each prompt type: define context block fields, phases, quality gates, output format
  - ⏸ CHECKPOINT: human approves spec per prompt type
- [ ] 🔄 Test spec against 2 real pages from pilot group — does filling the context block produce useful guidance?
  - ⏸ CHECKPOINT: human confirms spec is workable

**Output**: Approved prompt input spec — the contract for Phase 2 prompt/skill builds.

---

### Step 9. Define voice rules per audience ✅ LOCKED

**Input**: Existing `copy-rules-SKILL.md` (operator-focused), approved audience definitions from step 3.

Voice rules feed two places: the context block for Level 2 Pass A prompts (what register, terminology, don'ts apply) and the Pass A review criteria (what to flag when reviewing existing content).

- [x] 🔄 For each audience: define section opening order, acceptable terminology, tone, don'ts
- [x] 🔄 Identify where current copy rules need extending vs where they already cover all audiences
- [x] 🔄 Draft extended voice rules for audiences not yet covered (developer, delegator, community, etc.)
- [x] 🔄 4 open questions resolved (register distinctions, sub-variants, positive exemplars, founder split)
- [x] ⏸ CHECKPOINT: voice-rules.md locked ✅

**Output**: [Prompts/voice-rules.md](Prompts/voice-rules.md) — ✅ Locked. 7 audiences defined; universal rules + per-audience register, tone, do/don't, prohibited phrases; community section has positive exemplars.

---

### Step 10. Formalise naming rules as a pipeline prompt ✅ LOCKED (testing pending)

**Input**: `v2/_workspace/research/content-naming.md` — existing draft naming prompt (already working). `page-composition-framework.mdx` naming examples.

- [x] Move `v2/_workspace/research/content-naming.md` → `workspace/plan/active/CONTENT-WRITING/Prompts/section-naming.md`
- [x] 🔄 Consolidate two prompt versions into one canonical prompt with context block (pageType + audience + purpose inputs)
- [x] ⏸ CHECKPOINT: section-naming.md locked ✅
- [ ] 🔄 Test on 5 real section titles across different pageTypes — scores match human judgment?
  - ⏸ CHECKPOINT: human confirms — deferred to pilot phase (Step 21)

**Output**: [Prompts/section-naming.md](Prompts/section-naming.md) — ✅ Locked. Canonical 6-step scoring prompt with quick-reference label taxonomy; 1–4 word rule, governing-concept over literal labels, 10-question winner filter.

---

### Step 11. Page templates + golden examples — the Pass B foundation

**Input**: `page-composition-framework.mdx`, existing templates in `snippets/templates/pages/`, `component-layout-decisions.mdx`, pilot group pages.

This step has two parts and is currently a real gap. Currently bare bones. Must be solid before Pass B (layout/style) is built.

**Part A — Page templates per pageType**

For each of the 7 pageTypes: define the structural contract Pass B applies:
- Required sections (names, order)
- Allowed components per section
- Forbidden patterns

Check existing templates and composition framework against this — flag conflicts, resolve with human.

- [ ] 🔄 For each pageType: define required sections, section order, allowed components, forbidden patterns
  - ⏸ CHECKPOINT: human approves structure contract per pageType
- [ ] 🔄 Audit existing templates + composition framework against the contract — flag conflicts
  - ⏸ CHECKPOINT: human resolves conflicts

**Part B — Golden examples per pageType**

Identify 1–2 genuinely good existing pages per pageType in the pilot group. "Good" means: correct on both content (right audience, right purpose, right journey) AND layout (right template applied, right components, correct naming). These become the target the pipeline produces toward.

- [ ] 🔄 Candidate list per pageType — pages that might be golden examples
  - ⏸ CHECKPOINT: human selects or rejects each
- [ ] 🔄 For each selected page: annotate why it works (what makes it the right model)
  - ⏸ CHECKPOINT: human approves annotation
- [ ] Place annotated examples in `v2/_workspace/references/content-pipeline/golden-examples/`

**Output**: Per-pageType structural contracts + annotated golden examples. Both feed Pass B.

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

### Step 16. Build Level 1 — Site + Tab map prompt

**Approach**: Prompt-based (extends the `/Prompts/` Tier 1/2 model that already works).

**Input**: context block filled with: tab name, audience, section groups (from 8a), framework enums.
**Output**: per-tab context document — audience, journey, section groups, page inventory with frontmatter.
**Used as**: input to Level 2 prompts for any page in that tab.

- [ ] 🔄 Define context block fields and output format for the tab map prompt
  - ⏸ CHECKPOINT: human approves format
- [ ] Build the prompt (following the phased structure of existing `/Prompts/` files)
  - ⏸ CHECKPOINT: human reviews prompt
- [ ] Run on gateways tab — generate tab map document
  - ⏸ CHECKPOINT: human reviews output quality
- [ ] Run on orchestrators tab
  - ⏸ CHECKPOINT: human reviews
- [ ] Iterate until output is accurate and reusable by a fresh AI session

---

### Step 17. Build Level 2 Pass A — Content review/write

**Approach**: Prompt first, then decide if a skill wrapper adds value. Try both; keep what works.

Most content is already written. The primary use is **review**: does existing content match the journey, audience, and purpose? The secondary use is **write/rewrite** where it doesn't.

**Input**: tab map (from Level 1) + section context + existing page (review mode) or section brief (write mode).
**Does**: reviews or writes content section by section — correct audience? correct purpose? right information per section? tags information type per section. Applies voice + terminology rules.
**Output**: content verdict + section-by-section proposed content with headings (naming rules applied at header level only).

Two paths, same prompt framework:
- **Review path** — reads existing page, flags what fails journey/purpose/audience/voice, proposes edits only where needed
- **Write path** — writes from scratch from tab map + section brief

- [ ] 🔄 Define context block, phases, quality gates for Pass A (per prompt input spec, Step 8)
  - ⏸ CHECKPOINT: human approves
- [ ] Build prompt version first
  - ⏸ CHECKPOINT: human reviews
- [ ] Test review path on 3 pilot pages — how many findings are accurate? how much is over-flagged?
  - ⏸ CHECKPOINT: human scores quality
- [ ] Test write path on 1 page from scratch
  - ⏸ CHECKPOINT: human reviews output
- [ ] 🔄 Decide: does a skill wrapper improve output over the prompt alone?
  - ⏸ CHECKPOINT: human decides
- [ ] Build skill wrapper if decided
  - ⏸ CHECKPOINT: human reviews

---

### Step 18. Build Level 2 Pass B — Layout and style

**Approach**: Skill (structured, consistent application of template rules and naming).

Runs after Pass A content is approved. Takes content output and applies structural formatting: pageType template, component selection, MDX formatting, section naming scored against naming prompt.

**Input**: Pass A approved content output.
**Does**: applies pageType template, selects components, formats MDX, scores and corrects section names.
**Output**: MDX-ready page.

- [ ] 🔄 Define skill contract (inputs, outputs, rules applied, failure modes)
  - ⏸ CHECKPOINT: human approves
- [ ] Build the skill (uses: page templates from Step 11, naming prompt from Step 10, component rules)
  - ⏸ CHECKPOINT: human reviews implementation
- [ ] Test on 3 pilot pages post Pass A
  - ⏸ CHECKPOINT: human reviews MDX output — correct template applied? naming correct? components appropriate?
- [ ] Iterate until output is consistently correct

---

### Step 19. Integrate veracity check into Pass A

The veracity framework (veracity.md + 45-source library) is complete but not connected to the review/write workflow. This step adds the veracity check as a phase inside Pass A.

**What it adds to Pass A**: when reviewing or writing a factual or procedural section, the agent checks the claim against the sources library, flags unverifiable claims with `{/* REVIEW: claim — verify with: source */}`, and sets `veracityStatus` in frontmatter.

- [ ] 🔄 Define where in Pass A the veracity check runs (which section types trigger it, what the output looks like)
  - ⏸ CHECKPOINT: human approves
- [ ] Integrate into Pass A prompt/skill
  - ⏸ CHECKPOINT: human reviews
- [ ] Test on 2 pages with known factual claims — are flags accurate and actionable?
  - ⏸ CHECKPOINT: human confirms

---

## Phase 3: Run the Pipeline

### Step 20. Wire the two paths

Document and test the end-to-end flow for both paths. No new build — just the runbook and a verified test run.

**Review path**: Level 1 tab map → ⏸ → Level 2 Pass A review → ⏸ human edits/approves → Level 2 Pass B layout → ⏸ → apply to file.

**Write path**: Level 1 tab map + section brief → ⏸ → Level 2 Pass A write → ⏸ human edits/approves → Level 2 Pass B layout → ⏸ → apply to file.

- [ ] 🔄 Write runbook documenting both paths with checkpoint positions
  - ⏸ CHECKPOINT: human approves runbook
- [ ] Test review path end-to-end on 1 pilot page
  - ⏸ CHECKPOINT: human reviews result and checkpoint UX
- [ ] Test write path end-to-end on 1 pilot page
  - ⏸ CHECKPOINT: human reviews result

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
| 8 | Define prompt input spec (what each pipeline prompt needs) | ⬜ Not started |
| 9 | Define voice rules per audience | 🔄 DRAFT — voice-rules.md exists in Prompts/; built ahead of sequence; awaiting framework lock + checkpoint |
| 10 | Formalise naming rules as pipeline prompt (move + consolidate content-naming.md) | 🔄 PARTIAL — section-naming.md moved to Prompts/; consolidation of two prompt versions pending |
| 11 | Page templates per pageType + golden examples (Part A + B) | ⬜ Not started |

### Phase 2: Build the Pipeline

| Step | Task | Status |
|---|---|---|
| 12 | Schema migration (implement definitions in code) | ⬜ Not started |
| 13 | Audit existing references against new definitions | ⬜ Not started |
| 14 | Create per-audience don'ts | ⬜ Not started |
| 15 | Golden examples per pageType (identify + annotate) | ⬜ Not started |
| 16 | Build Level 1 — Site + Tab map prompt | 🔄 DRAFT — level-1-tab-map.md exists in Prompts/; built ahead of sequence; revision required after Steps 8-15 |
| 17 | Build Level 2 Pass A — Content review/write (prompt → decide on skill) | 🔄 DRAFT — level-2-pass-a-content.md exists in Prompts/; built ahead of sequence |
| 18 | Build Level 2 Pass B — Layout/style skill | 🔄 DRAFT — level-2-pass-b-layout.md exists in Prompts/; built ahead of sequence |
| 19 | Integrate veracity check into Pass A | ⬜ Not started — veracity framework complete (veracity.md, veracity-library.md); integration pending |

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
Step 12 (schema migration) ──► Step 13 (audit refs) ──► Step 14 (don'ts) ──► Step 15 (golden examples)
     │
     ▼
Step 16 (Level 1 tab map prompt)
     │
     ▼
Step 17 (Level 2 Pass A content prompt/skill) ──► Step 18 (Level 2 Pass B layout skill)
     │                                                        │
     └──────────────── Step 19 (veracity check) ─────────────┘
                       integrated into Pass A
     │
     ▼
Step 20 (wire both paths + runbook) ──► Step 21 (pilot) ──► Step 22 (scale)
```

- Steps 2-11 are fully sequential and blocking.
- Steps 12-15 can partially overlap but depend on the framework.
- Step 16 (tab map) must complete before Steps 17-18 (page work).
- Steps 17 and 18 are sequential (Pass A content before Pass B layout).
- Step 19 (veracity) integrates into Step 17 — runs in parallel with Pass A build.
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
