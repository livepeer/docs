# Canonical Decisions Needed

> There is no approved canonical list. Files declare themselves "locked" or "canonical" but no human has approved a single source of truth for any concern. This document presents what exists per concern so you can decide.
>
> For each concern: here are ALL the files that touch it. Pick ONE as canonical. Everything else becomes reference, draft, or archive.

---

## HOW TO USE THIS DOCUMENT

For each concern below:
1. Read the file descriptions
2. Mark ONE file as **CANONICAL** (the approved source of truth)
3. Mark everything else as REFERENCE (useful but not authoritative) or SUPERSEDED (old version, ignore)
4. If no existing file is good enough, mark the concern as **NEEDS CREATION**

---

## CONCERN 1: Voice & Copy Rules

**Question: Where do writers go to know how to WRITE?**

| # | File | Size | What it contains | Self-declared status |
|---|---|---|---|---|
| A | `CONTENT-WRITING/Prompts/voice-rules.md` | 18KB | Per-audience voice extensions (7 audiences, 28-36 lines each). Banned words/phrases. UK English table. | Says "Locked" |
| B | `ai-tools/ai-skills/docs-copy/skills/copy-rules.md` | 5.6KB | Sentence-level rules (L4). Blocking rules, warning heuristics, manual sign-off. | Says "v1.1" |
| C | `v2/orchestrators/_workspace/canonical/Frameworks.mdx` | 40KB | EVERYTHING: voice rules, banned words, page structure, terminology checklist, component matrix. Master reference for orchestrators. | In `canonical/` folder |
| D | `tools/lib/copy-governance/banned-words.txt` | 96B | Machine-readable: 10 banned words | Used by lint-copy.js |
| E | `tools/lib/copy-governance/banned-phrases.txt` | 368B | Machine-readable: 21 banned phrases | Used by lint-copy.js |
| F | `v2/resources/documentation-guide/copy-style/authoring-guide.mdx` | 12.7KB | Published guide: frontmatter, voice per audience, component library | Published on docs site |
| G | `v2/resources/documentation-guide/copy-style/authoring-standard.mdx` | 8.6KB | Published standard for authoring | Published on docs site |
| H | `v2/resources/documentation-guide/copy-style/style-guide.mdx` | 36KB | Published style guide: CSS, Mintlify, components, formatting | Published on docs site |
| I | `docs-guide/_workspace/.../Brand-&-Copy-Guide/index.md` | 13KB | Brand voice, messaging, identity. Says "Active. Canonical." | In workspace (not published) |
| J | `docs-guide/_workspace/.../Style-Guide/index.md` | 13KB | Rewrite of H. Says "Replaces style-guide.mdx (~60% accurate)" | In workspace (not published) |
| K | `_MY_PROCESS/canonical-content-copy-and-review-framework.md` | 16KB | Collation of all the above into one operating guide | Created this session |
| L | `CONTENT-WRITING/Research/copy-skills-reference.md` | 9KB | Research aggregation of B + skills | Research only |

**YOUR DECISION:**
- [ ] Which file(s) are canonical for voice/copy rules?
- [ ] Are D+E (machine-readable ban lists) the enforcement truth? Do they match whatever you pick above?
- [ ] Is J (workspace style guide rewrite) the real style guide, or H (published version)?
- [ ] Does C (Frameworks.mdx) remain the master reference, or should voice rules live separately?

---

## CONCERN 2: Page Taxonomy & Classification

**Question: Where do writers go to know what TYPE of page they're building?**

| # | File | Size | What it contains | Self-declared status |
|---|---|---|---|---|
| A | `snippets/templates/page-classification.md` | Large | Decision tree: 7 pageTypes, first-match-wins logic, ambiguous cases, component palettes per type | In templates folder |
| B | `snippets/templates/section-patterns.md` | Large | 13 section archetypes, composition rules, ordering per pageType | In templates folder |
| C | `CONTENT-WRITING/Frameworks/pageType.md` | ? | 7 pageTypes with definitions. Decision 1 (2026-03-19): 12 to 7 | Says "Canonical" |
| D | `CONTENT-WRITING/Frameworks/pagePurpose.md` | ? | 15 purposes with definitions. Decision 2 (2026-03-20) | Says "Locked" |
| E | `tools/lib/docs/frontmatter-taxonomy.js` | Code | Enums in code: 7 pageTypes, 15 purposes, 7 audiences, deprecated aliases | Runtime enforcement |
| F | `docs-guide/frameworks/page-taxonomy-framework.mdx` | ? | Published framework. Still shows OLD 12-type schema | Published but outdated |
| G | `docs-guide/frameworks/page-composition-framework.mdx` | ? | Template stub with old enums | Draft |
| H | `docs-guide/_workspace/.../Page-Taxonomy/index.md` | ? | Design spec: 10 types (old schema) | Design research (outdated) |
| I | `v2/orchestrators/_workspace/canonical/Frameworks.mdx` | 40KB | Contains page structure rules + pageType definitions | Same file as Concern 1-C |

**YOUR DECISION:**
- [ ] Is A (page-classification.md in templates) the canonical classification guide?
- [ ] Is E (frontmatter-taxonomy.js) the canonical enum source in code?
- [ ] Is F (published page-taxonomy-framework.mdx) correct or does it need updating to match E?
- [ ] Are C+D (CONTENT-WRITING Frameworks) the canonical definitions, or has A superseded them?

---

## CONCERN 3: IA Structure & Section Vocabulary

**Question: Where do writers go to know how a TAB should be structured?**

| # | File | Size | What it contains | Self-declared status |
|---|---|---|---|---|
| A | `CONTENT-WRITING/Prompts/Previous Prompts Used/derive-ia/08a-ia-per-tab.md` | ? | 6-position structure, section vocabulary, per-tab journeys, field combinations | Says "Locked" |
| B | `_MY_PROCESS/03_IA-STRUCTURE-per-page-mapping/canonical-ia-and-repo-folder-framework.md` | 13KB | Authority hierarchy for IA decisions, folder contract, section contracts, resources sub-structure | Created this project |
| C | `docs-guide/policies/v2-folder-governance.mdx` | ? | Publishable vs non-publishable lanes, workspace contract, cleanup matrix | Published policy |
| D | `docs-guide/_workspace/.../IA-Structure-and-Purpose/index.md` | ? | 6-position structural pattern, journey stage mapping | Design research |
| E | `docs-guide/_workspace/.../IA-Journey-Derived-IA/index.md` | ? | Journey-first page derivation per persona | Design research (incomplete) |
| F | `docs-guide/_workspace/.../IA-Blueprint/index.md` | ? | Placeholder (1 line) | Stub |
| G | `_MY_PROCESS/03.../RESEARCH/recommended-ia-per-tab.md` | 20KB | Per-tab recommended IA with move recommendations | Created this session |

**YOUR DECISION:**
- [ ] Is A (08a-ia-per-tab.md) still the canonical section vocabulary, or has B superseded it?
- [ ] Is C (v2-folder-governance.mdx) the canonical folder policy?
- [ ] Are D/E/F (design specs) historical reference or still active design documents?
- [ ] What is the canonical resources/ sub-structure? (A says 2 sub-sections, B says 4, your verbal correction says 4)

---

## CONCERN 4: Process & Pipeline

**Question: Where does the pipeline definition live?**

| # | File | Size | What it contains | Self-declared status |
|---|---|---|---|---|
| A | `_MY_PROCESS/my-process.mdx` | 47KB | Full 9-phase pipeline + massive artifact inventory table | Original process |
| B | `CONTENT-WRITING/content-pipeline-canonical.md` | ? | "Automated content writing & review system" definition | Says "Canonical" |
| C | `CONTENT-WRITING/plan-canonical.md` | ? | 22-step execution plan with progress tracking | Says "Canonical" |
| D | `CONTENT-WRITING/prd-canonical.md` | ? | Product requirements for the pipeline | Says "Canonical" |
| E | `CONTENT-WRITING/framework-index-canonical.md` | ? | Master index of all framework decisions | Says "Canonical" |
| F | `v2/orchestrators/_workspace/canonical/process.mdx` | ? | 5-step page remediation process | In `canonical/` |
| G | `v2/orchestrators/_workspace/canonical/checks.mdx` | ? | 9-category quality checks (68+ checks) | In `canonical/` |
| H | `_MY_PROCESS/pipeline-diagnosis-and-recommendations.md` | 17KB | Diagnosis of why pipeline fails + recommendations | Created this session |
| I | `_MY_PROCESS/PIPELINE.md` (proposed) | - | Does not exist yet | Proposed |
| J | `_MY_PROCESS/00-08 RUNBOOK.md files` | 9 files | Phase-by-phase instructions | Created this session |

**YOUR DECISION:**
- [ ] Is A (my-process.mdx) still the process definition, or do the RUNBOOKs (J) replace it?
- [ ] Are B/C/D/E (CONTENT-WRITING *-canonical.md files) the pipeline authority, or is A?
- [ ] Are F/G (orchestrators canonical process/checks) the quality standard for ALL tabs, or just orchestrators?

---

## CONCERN 5: Terminology & Glossary

**Question: Where is the canonical terminology?**

| # | File | Size | What it contains | Self-declared status |
|---|---|---|---|---|
| A | `TERMINOLOGY-COLLATE/consolidated/glossary-a-m.md` | 118KB | Master glossary A-M | Generated 2026-03-21 |
| B | `TERMINOLOGY-COLLATE/consolidated/glossary-n-z.md` | 106KB | Master glossary N-Z | Generated 2026-03-21 |
| C | `TERMINOLOGY-COLLATE/consolidated/glossary-index.md` | 24KB | Master index | Updated 2026-03-31 |
| D | `TERMINOLOGY-COLLATE/per-tab/glossary-{tab}.md` (9 files) | 24-54KB each | Per-tab glossaries | Generated 2026-03-21 |
| E | `TERMINOLOGY-COLLATE/consolidated/veracity-sources.md` | 58KB | Source registry for all terminology | Generated 2026-03-21 |
| F | Per-tab input packs (`testing/Tabs/{tab}/input-pack/glossary-{tab}.md`) | Varies | Per-tab glossaries for audience design | Generated for prompts |
| G | Published glossaries (`v2/{tab}/resources/*/glossary.mdx`) | Varies | Live on docs site | Published |

**YOUR DECISION:**
- [ ] Are A+B+C (TERMINOLOGY-COLLATE consolidated) the canonical master glossary?
- [ ] Are D (per-tab glossaries) canonical for their respective tabs?
- [ ] What's the relationship between D (planning glossaries) and G (published glossaries)?
- [ ] Is E (veracity sources) the canonical source authority registry?

---

## CONCERN 6: Audience & Persona Definitions

**Question: Where is the canonical audience/persona definition?**

| # | File | Size | What it contains | Self-declared status |
|---|---|---|---|---|
| A | `tools/config/quality/usefulness-audience-normalization.json` | ? | 7 canonical audiences with synonyms, precedence, section defaults | Config file |
| B | `tools/lib/docs/frontmatter-taxonomy.js` | Code | CANONICAL_AUDIENCES array (7 values) | Code enforcement |
| C | `docs-guide/_workspace/.../Audience-&-Persona-Mapping/index.md` | ? | 8 personas by network function | Design spec |
| D | `docs-guide/_workspace/.../Personas-Journey-Alignment/index.md` | ? | Self-identification mapping, journey stages | Design spec |
| E | Per-tab canonical audience designs (`testing/Tabs/{tab}/collated/canonical-*.md`) | Varies | Per-tab audience design outputs from AI runs | Generated, collated |
| F | `_MY_PROCESS/00_AUDIENCE-JOURNEY/.../RESEARCH/{TAB}/index.md` (10 files) | Varies | Per-tab research with audience/persona/journey | Created this session |
| G | Per-tab process files (`_MY_PROCESS/00_AUDIENCE-JOURNEY/.../FULL-FILES/TABS/*.md`) | Varies | Per-tab audience analysis + gap reports | Working documents |
| H | `v2/internal/overview/personas.mdx` | ? | Developer persona + 5-stage journey | Published internal |

**YOUR DECISION:**
- [ ] Are A+B (config + code) the canonical audience TOKEN definitions?
- [ ] Are C+D (design specs) the canonical PERSONA definitions, or are they historical?
- [ ] Are E (AI-generated audience designs) canonical per-tab, or just research input?
- [ ] Are F (this session's research) the current working documents for persona work?

---

## CONCERN 7: Quality Gate & Verification

**Question: What defines "done" for a page?**

| # | File | Size | What it contains | Self-declared status |
|---|---|---|---|---|
| A | `v2/orchestrators/_workspace/canonical/checks.mdx` | ? | 9 categories, 68+ checks | In `canonical/` |
| B | `CONTENT-WRITING/Frameworks/veracity.md` | ? | veracityStatus field, 3 values, tied to information types | Says "Locked" |
| C | `CONTENT-WRITING/Frameworks/veracity-library.md` | ? | 45 sources catalogued for fact-checking | Says "Complete" |
| D | `_MY_PROCESS/tools/page-quality-gate.sh` | Script | 10-check PASS/FAIL per page | Created this session |
| E | `_MY_PROCESS/pipeline-diagnosis-and-recommendations.md` | 17KB | 12-point gold-standard test | Created this session |

**YOUR DECISION:**
- [ ] Is A (checks.mdx) the quality standard for all tabs, or just orchestrators?
- [ ] Is D (page-quality-gate.sh) a valid enforcement tool, or does it need to be aligned with A?
- [ ] Are B+C (veracity framework + library) the canonical veracity standard?

---

## CONCERN 8: Templates & Layout

**Question: Where do writers go to know how to STRUCTURE a page?**

| # | File | Size | What it contains | Self-declared status |
|---|---|---|---|---|
| A | `snippets/templates/page-classification.md` | Large | Decision tree + component palettes per pageType | In templates |
| B | `snippets/templates/section-patterns.md` | Large | 13 section archetypes, ordering per pageType | In templates |
| C | `snippets/templates/pages/gold-standard-templates/` | 7 files | One template per pageType (concept, guide, instruction, navigation, reference, resource, tutorial) | In templates |
| D | `snippets/templates/pages/gold-standard/` | 13 files | Composable section blocks (intro, prerequisites, steps, decision-matrix, etc.) | In templates |
| E | `_MY_PROCESS/EXEMPLARS/` | 4 files | Annotated real pages showing WHY they work | Created this session |
| F | `docs-guide/frameworks/page-composition-framework.mdx` | ? | Template stub | Draft |
| G | `snippets/templates/pages/page-composition-framework.mdx` | ? | Page composition guide | In templates |

**YOUR DECISION:**
- [ ] Are A+B+C+D (snippets/templates) the canonical template system?
- [ ] Are E (EXEMPLARS) useful alongside C+D, or redundant?
- [ ] Is F or G the canonical page composition guide, or neither?

---

## NEXT STEPS

After you make decisions on each concern:
1. I create the CANONICAL-REGISTRY.md with your approved selections
2. Everything not marked canonical gets classified as REFERENCE or ARCHIVE
3. We can then build the per-tab synthesis (everything-we-know.md) loading ONLY from canonical sources
4. The pipeline loads the registry at session start and knows exactly where to find everything
