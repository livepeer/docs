# Phase 01: Research & Gap Analysis

> Human role: **APPROVE** tab map
> Automated: Content scan, structure audit, gap classification

---

## Inputs required

- Approved persona definitions from Phase 00
- Current `docs.json` navigation structure
- Current `v2/{tab}/` file structure on disk

## Process

### Step 1: Run content scan

**Tool**: `content-scan.md` prompt
**Location**: `workspace/plan/active/CONTENT-WRITING/Prompts/Prompts-By-Phase/2-content-scan/content-scan.md`

This inventories every page in the tab:
- File path, size, frontmatter fields
- Published status (in docs.json or orphaned)
- Draft quality assessment

### Step 2: Run structure audit

**Tool**: `structure-audit.md` prompt
**Location**: `workspace/plan/active/CONTENT-WRITING/Prompts/Prompts-By-Phase/2-structure-audit/structure-audit.md`
**Pre-read**: `workspace/plan/active/CONTENT-WRITING/Prompts/Prompts-By-Phase/2-structure-audit/pack-guide.md`

This classifies every page: KEEP / MOVE / MERGE / SPLIT / REWRITE / DROP

### Step 3: Generate tab map

**Tool**: `content-pipeline-tab-map` skill
**Location**: `ai-tools/ai-skills/content-pipeline-tab-map/SKILL.md`

Produces tab-map with:
- Page hierarchy mapped to canonical positions
- Predecessor/successor links
- Persona path validation
- P0/P1/P2 gap classification

### Step 4: Review tab map (HUMAN)

- [ ] Every canonical section has at least one page assigned
- [ ] No orphan pages without a home
- [ ] Persona paths are unblocked (trace each persona through the structure)
- [ ] Gap priorities (P0/P1/P2) make sense

## Output

- Content scan report (stored in `CONTENT-WRITING/context-packs/{tab}-content-scan.md`)
- Tab map with gap analysis
- Page disposition list (KEEP/MOVE/MERGE/SPLIT/REWRITE/DROP per page)

## Gate condition

- [ ] Tab map exists and is human-approved
- [ ] All pages classified with a disposition
- [ ] P0 gaps identified and documented

## What blocks next phase

Phase 02 cannot start without approved tab map.
Phase 03 cannot start without approved tab map.
