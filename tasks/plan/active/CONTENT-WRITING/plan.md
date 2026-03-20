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

### Step 6. Define domain + niche — what field the content belongs to

**Input**: User notes in `v2/_workspace/research/ai-coauthoring.md` (lines 53-61, 95-100) and `content-naming.md` (domain-anchor rule, lines 575-595).

The naming rubric already requires titles to use the domain's native terminology, but the domain isn't declared in frontmatter — the AI has to guess. Adding it explicitly tells the pipeline what terminology conventions to follow.

Two layers:
- **domain** (broad field): `finance`, `business`, `technical`, `economics`, `marketing`, `operations`, `governance`
- **niche** (specific context): `web3`, `AI`, `video`, `hardware`, `infrastructure`, `protocol`, `tokenomics`

Domain+niche governs: section naming (domain-anchor rule becomes enforceable), voice register, example selection, terminology conventions, information categorization.

- [ ] 🔄 Review the domain-anchor and conditional-precision rules in content-naming.md
  - ⏸ CHECKPOINT: human confirms these rules capture the intent
- [ ] 🔄 Define domain enum (~7-10 values)
  - ⏸ CHECKPOINT: human approves domain enum
- [ ] 🔄 Define niche — controlled enum or curated string? How granular?
  - ⏸ CHECKPOINT: human approves niche format + values
- [ ] 🔄 For each domain: define terminology conventions, register/formality level
  - ⏸ CHECKPOINT: human approves per-domain rules
- [ ] Test: apply domain+niche to 5 pilot pages — does it help produce better titles and voice?
  - ⏸ CHECKPOINT: human confirms test results

**Output**: Approved domain + niche enums/format + governance rules.

---

### Step 7. Define complexity + lifecycleStage

**Input**: Existing enums (3 complexity, 7 lifecycle) from `page-taxonomy-framework.mdx`.

- [ ] 🔄 Review existing enums — right for this repo?
  - ⏸ CHECKPOINT: human approves both enums
- [ ] 🔄 For each level: define concretely what changes (assumptions, depth, prerequisite knowledge)
  - ⏸ CHECKPOINT: human approves governance rules per level

**Output**: Approved complexity + lifecycleStage enums + governance rules.

---

### Step 8. Define how the fields combine — the generation contract

**Input**: Approved outputs from steps 2-7.

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

- [ ] Add `persona`, `domain`, `niche` fields to `page-taxonomy-framework.mdx` (per step 4 + 6 decisions)
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
| 5 | Define purpose enum + deep definitions | ✅ Done — 15 values, full definitions in pagePurpose.md, information-type.md baseline created |
| 5a | Define information type taxonomy | ▶ In progress — layer 1 done; layers 2 (category) + 4 (veracity) to define |
| 6 | Define domain + niche | ⬜ Not started |
| 7 | Define complexity + lifecycleStage | ⬜ Not started |
| 8 | Define generation contract (how fields combine) | ⬜ Not started |
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

---

## Open Questions

1. **Skill implementation**: Prompt-only vs script-backed? Decided per skill in steps 17-19.
2. **Golden example sourcing**: Existing pages good enough, or write from scratch? Decided in step 15.
3. **Checkpoint UX**: File-based or conversational? Decided in step 20.
4. **Context pack freshness**: Per-session? Weekly? On docs.json change? Decided in step 17.
5. ~~**Pages spanning audiences**~~: Resolved — persona model handles this.
6. **Domain niche granularity**: Is niche an enum or a free-text tag? Decided in step 6.
