# Content Pipeline

## Purpose & Aims

- Build a modular, repeatable content review and rewrite pipeline for Livepeer documentation
- Enable structured AI-human collaboration across all content operations: review, write, rewrite, layout
- Produce documentation that is audience-correct, purpose-clear, and voice-consistent — at scale

## Outcomes Expected

- Full Content Creation & Review Pipeline
  - Defined
  - Tested
  - Validated
  - Documented
  - Ready for Use

## Process to Complete

### Setup Phase

1. Draft PRD (aims, outcomes, project management) in [prd-canonical]()
2. Define [prd-canonical]() & folders -> [Folders](#working-folder-structure)
3. Define process & rules for co-working with AI-human in [prd-canonical]() -> [Co-Working Rules](#co-working-rules)
4. Draft base plan in [plan-canonical]()

- will be updated as details arise

### Planning Phase

1. Draft general plan phases needed in [plan-canonical]()
2. Define Needs / Frameworks per phase in [plan-canonical]()
3. Define outcomes of each phase in [plan-canonical]()
4. Add phase details (using 1-3 again for each) in in [plan-canonical]()

### Defining, Framworking & Ideation Phase

In folder /Research /Frameworks /Tasks or /Workspace

**Thinking needed:**

- Design
- Diverse
- Creative
- Research

**Approach**

- collaborative

1. Research Collation & usefulness tagging -> with index
2. Define the usage pipeline
3. Define phases & needs in detail. Use /tasks (write sumamry back to plan)
4. Create the foundations, definitions, frameworks, and subplans
5. Feed decision back up to full repo where needed

### Execution & Implementation

In /Tasks & updating status in [plan-canonical]()

- Enusure updating plan status on completiong
- phase detail implementations
- implement testing / pipelines / other needs

### Testing & Iteration

In /Testing

- Test the implementation
- Get feedback
- Refine
- Iterate

### Finalisation

- Document
-

## Project Management

### **Co-Working Rules**

- Always repeat understanding of a task back to user before implementing
- On task completion provide:
  - Notes on completion
  - Any flags / recommendations found when implementing
  - A bullet point plan status now update
  - A description of next task & any blockers.

### **Working Folder Structure**

Working directory: `workspace/plan/active/CONTENT-WRITING/`

**Root — canonical pages**

| File | Purpose |
|---|---|
| `prd-canonical.md` | This file — product requirements: aims, outcomes, process, project management |
| `plan-canonical.md` | 22-step execution plan, progress tracker, decision log, open questions |
| `index-canonical.md` | Governance index — locked enums, pending definitions, related resources; entry point for new sessions |
| `content-pipeline-canonical.md` | Framework decisions log — all agreed definitions, frontmatter schema, open decisions |
| `project-management.md` | Session notes, running flags, context for AI-human collaboration |

**Frameworks/ — framework definitions (what "good" means per dimension)**

| File | Purpose |
|---|---|
| `pageType.md` | 7 pageTypes + pageVariant rules + governance table (what pageType governs and does not govern) |
| `pagePurpose.md` | 15 purpose values — each with definition, process, information type, governing content rules |
| `information-type.md` | 9 information types — section-level, not frontmatter; purpose-to-type mapping; veracity standards per type |
| `veracity.md` | Veracity standards per information type + veracityStatus enum (verified/unverified/stale) |
| `veracity-library.md` | 45-source authoritative sources registry — what to cite per claim type |
| `industry.md` | 9 industry tokens + 8 niche tokens — governs voice register, terminology, naming |
| `complexity.md` | complexity (3 values) + lifecycleStage (7 values) — governs assumed knowledge + reader journey position |
| `frontmatter-taxonomy-update.md` | Schema migration tracking — old enum to new enum mapping |

**Prompts/ — AI prompt files, one per pipeline operation**

| File | Purpose |
|---|---|
| `level-1-tab-map.md` | Level 1: tab structural audit — scans tab, classifies pages, maps audience journey, gap analysis |
| `level-2-pass-a-content.md` | Level 2 Pass A: content review/write — 7 phases: pre-flight, audience fit, purpose, info type, voice, veracity, structure |
| `level-2-pass-b-layout.md` | Level 2 Pass B: layout/style — template selection, component placement, MDX, naming check |
| `section-naming.md` | Section naming rubric — scoring criteria, hard rules, per-pageType guidance |
| `voice-rules.md` | Voice rules per audience (7 audiences) — register, tone, do/don't, prohibited phrases |
| `prompt-research.md` | Research notes: how to prompt agents for ideation vs content creation |
| `docs-review-prompt-tiers.md` | Tiered review prompt reference (existing pre-pipeline prompts) |
| `docs-tab-context-ia-prompt-general.md` | General IA/context prompt for tab-level work |
| `community-tab-prompt-consolidated.md` | Community tab consolidated prompt |

**Research/ — input material: surveys, references, existing-skill analysis**

| File | Purpose |
|---|---|
| `research.md` | External references: Shtuka data, personas research, journey models, Livepeer sources |
| `page-templates-survey.md` | Survey of existing page templates — gap analysis and pipeline readiness verdict |
| `copy-skills-reference.md` | Existing docs-copy skills inventory (L0-L4) + audience coverage gap analysis |

**Skills/ — AI skill wrappers**

| File | Purpose |
|---|---|
| _(empty)_ | Phase 2 build target — skill wrappers for Level 1 and Level 2 prompts |

**Tasks/ — handoff tasks and subplans**

| File | Purpose |
|---|---|
| `handoff-resources-restructure.md` | Specific execution tasks for resources section restructuring |
| `page-type-migration.md` | Migration plan for legacy pageType enum values |

**Workspace/ — working documents, collation, drafts**

| File | Purpose |
|---|---|
| `collation.md` | Dated inventory of every repo resource with themes — input to framework design |

## Outcome Draft Pipeline

Three levels, sequential. Each level pauses for human checkpoint before the next runs.

```
Level 1 — Tab Map
  Input:  tab name + repo access
  Does:   scans tab structure, classifies every page, maps audience journey, identifies gaps
  Output: tab-map.md — structural context for all Level 2 operations on that tab
  ⏸ human checkpoint

Level 2 Pass A — Content Review / Write
  Input:  tab-map.md + page path + mode (REVIEW / WRITE / REWRITE)
  Does:   7 phases — pre-flight, audience fit, purpose check, info type audit,
          voice check, veracity check, structure check
  Output: content verdict (REVIEW) or written content (WRITE/REWRITE) — plain markdown, no MDX
  ⏸ human checkpoint

Level 2 Pass B — Layout / Style
  Input:  Pass A approved content
  Does:   applies pageType template, selects components, formats MDX, scores section names
  Output: MDX-ready page
  ⏸ human checkpoint

→ Apply to file
```

## Related Pages

| File | What it is |
|---|---|
| `index-canonical.md` | Governance index — start here for any new session |
| `plan-canonical.md` | Full execution plan |
| `content-pipeline-canonical.md` | Framework decisions log |
| `v2/_workspace/references/content-pipeline/` | Canonical framework definition files (01–09) |
| `docs-guide/frameworks/page-taxonomy-framework.mdx` | Repo source of truth — frontmatter schema |
