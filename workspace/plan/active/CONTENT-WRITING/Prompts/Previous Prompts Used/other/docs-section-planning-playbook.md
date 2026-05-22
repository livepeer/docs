# Docs Section Planning Playbook

Replicable process for taking any documentation section from unreviewed state to locked IA with content written and integrated. Derived from the orchestrator tab planning process.

---

## Overview

This playbook has 3 phases and 13 steps. Phases 1-2 are the core planning and content work. Phase 3 is polish and testing.

**Estimated time**: 2-4 sessions for Phase 1 (IA lock), 3-6 sessions for Phase 2 (content integration), variable for Phase 3.

**Human involvement**: Required at every decision point. AI proposes, human decides. No structural changes without human approval.

## Carry-Forward From Tranche Planning

When converting section review reports into an execution plan, use the raw machine outputs as the source of truth, not only the human-readable markdown summaries.

- For authoring/style planning, inspect `authoring-style-findings.json` alongside `02-authoring-style.md`.
- If the markdown summary collapses or omits page-level detail, derive tasks from the raw JSON and then deduplicate them into page-level action families.
- Do not turn repeated lint warnings into line-by-line task lists. Collapse them into one actionable task per page and fix family.
- Apply the same rule to future tranches so style work is not under-scoped when the summary report is incomplete.
- Add a repo git-hook or pre-commit run as the final execution step after targeted checks pass, so the handoff includes the same last-mile guard the branch will enforce.

---

## Prerequisites

Before starting, ensure you have:

- [ ] The section's tab in the scoped navigation config (`docs-gate-work.json`)
- [ ] Access to all existing pages in the section
- [ ] Access to any v1/legacy docs for the same topic
- [ ] Access to context data / research files (`_contextData/`)
- [ ] The product-thinking skill: `ai-tools/ai-skills/product-thinking/SKILL.md`
- [ ] The page-authoring skill: `ai-tools/ai-skills/page-authoring/SKILL.md`
- [ ] A glossary for the section (or plan to create one)

---

## Phase 1: IA Finalisation and Handoff Preparation

### Step 1: Deep Research and Context Gathering

**Who**: AI (with human providing domain corrections)
**Skills used**: Product Thinking (Step 7: Absence Detection - Interface Audit, Question Harvest)
**Time**: 1-2 hours

**Process**:
1. Read ALL existing pages in the section (line counts, frontmatter, content summaries)
2. Read ALL context data / research files for the section
3. Read equivalent sections in other tabs (e.g. gateway pricing-strategy informs orchestrator pricing-strategy)
4. Read v1/legacy docs for the same topic area
5. Read the glossary for terminology standards
6. Check community channels for recurring questions (Discord, Forum, FAQ page)
7. Map every CLI flag, config file, API endpoint, and dashboard field relevant to this section's users

**Output**: A knowledge base document summarising everything the section's users need to know, organised by operational concern (not by existing page structure).

**Human review loop**: Human validates the knowledge base against their domain understanding. Corrects misconceptions, adds missing context, flags speculative claims.

**Upgrade opportunity**: Automate the interface audit (Step 7 Method B) with a script that extracts flags from CLI reference pages and maps them to guide pages. Currently done manually.

---

### Step 2: Product Thinking Analysis

**Who**: AI proposes, human critiques and directs
**Skills used**: Product Thinking (all 9 steps)
**Time**: 2-3 hours

**Process** (follow the product-thinking skill step by step):

**Step 2a: Job Stories**
- Write 6-10 job stories using JTBD format: "When [situation], I want to [motivation], so I can [outcome]"
- Each with 3-6 acceptance criteria
- Cover the full lifecycle: evaluation, setup, operation, scaling, troubleshooting
- Do NOT use personas - use situations

**Step 2b: Opportunity Solution Tree**
- Define ONE desired outcome for the section
- Score 5-8 opportunities by Importance x (10 - Satisfaction)
- Generate 3+ solutions per top opportunity
- Solutions include: new page, restructured section, merged content, cross-reference, "do nothing"

**Step 2c: Assumption Mapping**
- Surface 10+ assumptions embedded in the current IA
- Categorise: Value, Usability, Viability, Feasibility
- Flag blind spots (beliefs so embedded they aren't stated)
- Any Confidence=Low + Risk=High = blocker

**Step 2d: Customer Journey Map**
- Map primary job story through 7 stages (Awareness → Evaluation → Decision → Setup → First Value → Optimisation → Scaling)
- Document: touchpoint, thinking, feeling, friction, opportunity per stage
- Identify critical moments: aha, churn trigger, advocacy trigger

**Step 2e: Value Propositions**
- One per primary job story
- Must be deliverable by an actual page
- If you can't write a clear value prop, the section has a purpose problem

**Step 2f: Section Review**
- Every page serves at least one job story?
- Every job story has at least one page?
- No duplicate coverage?

**Step 2g: Absence Detection**
- Walk the Week: simulate a full operational week for the primary user
- Interface Audit: map every flag/endpoint/config field to a documentation page
- Question Harvest: mine FAQ and troubleshooting for recurring unanswered questions

**Step 2h: Cross-Role Analysis**
- Identify adjacent roles that interact with this section's users
- Map overlaps and determine bridge content type (cross-ref, both-sides section, combined guide)

**Step 2i: Quickstart/Setup/Operations Separation**
- Verify the section correctly separates: verification (quickstart), technical setup, and business operations
- Document any asymmetries with other roles

**Output**: A product-thinking-review.md document with all 9 steps documented.

**Human review loop**: This is the most critical review point. Human must validate:
- Job stories match real user situations (not invented)
- Opportunity scores reflect actual pain (not assumed)
- Assumptions include real blind spots
- The journey map matches observed user behaviour

**Upgrade opportunity**: Run Steps 2a-2f first, present to human, get corrections, THEN run Steps 2g-2i. The absence detection methods (2g) work better after the human has corrected the initial analysis, because they build on validated job stories.

---

### Step 3: First-Principles Page Breakdown

**Who**: AI proposes, human validates and modifies
**Skills used**: Product Thinking (applied to IA design)
**Time**: 1-2 hours

**Process**:
1. Starting from zero (NOT from existing pages), list every page the section NEEDS based on:
   - Job stories (every job story needs at least one page)
   - Operational reality (what does the user actually DO day-to-day)
   - The product's value proposition (what is Livepeer's strategic priority)
2. For each page, document:
   - What it answers (from the user's perspective)
   - Why it's needed (what fails without it)
   - Which job stories it serves
3. Group pages into sections with a clear question per section
4. Define section order based on the user journey (not alphabetical, not organisational)

**Output**: Added to the product-thinking-review or a separate plan.md.

**Human review loop**: Human must validate:
- Are these the RIGHT pages (not just a reshuffling of existing pages)?
- Is the section order logical for the primary journey?
- Are there pages that should be merged (too granular) or split (too broad)?
- Is the naming user-centric (what the user thinks) not org-centric (how we organise)?

**Upgrade opportunity**: Present the page breakdown as a table with columns: Page | What it answers | Why needed | Job stories | sidebarTitle. The sidebarTitle column forces naming decisions early, which the orchestrator process deferred and had to revisit later.

---

### Step 4: Quickstart and Setup Path Design

**Who**: AI proposes, human validates with domain knowledge
**Skills used**: Product Thinking (Step 9: Quickstart/Setup/Operations Separation)
**Time**: 1 hour

**Process**:
1. Identify the fastest path to "does this technology work on my machine?" (quickstart)
2. Identify the complete path to "my system is production-ready" (setup)
3. Verify these are SEPARATE from "how do I earn/deliver value" (operations = guides)
4. Be HONEST about timelines and prerequisites
5. Verify claims are technically accurate:
   - Can you actually test locally without financial commitment?
   - What does the quickstart ACTUALLY prove?
   - What are the real prerequisites for production setup?

**Output**: Quickstart and setup sections added to the plan.

**Human review loop**: Human must validate technical claims. "Can you test AI locally?" requires confirmation, not assumption. The orchestrator process initially assumed pool joining was a quickstart (it's not - requires a social relationship taking days/weeks). Domain knowledge catches these.

**Upgrade opportunity**: Include a "constraint analysis" table listing every blocker to activation with time cost and whether it can be deferred. This was the most useful artefact in the orchestrator process for separating quickstart from setup.

---

### Step 5: Consolidate into Plan Document

**Who**: AI writes, human reviews
**Time**: 1 hour

**Process**:
1. Write a consolidated `plan.md` with:
   - Part 1: All learnings (decisions made, terminology, job stories, evidence gaps, opportunity scores)
   - Part 2: Complete IA (every page per section with purpose summaries)
   - Part 3: Current page analysis (every existing page mapped to the plan: keep/rename/split/merge/move/new)
   - Part 4: Gap analysis (pages to write, pages to update, structural changes)
   - Part 5: Migration plan (phased implementation order)
2. Write an `execution-plan.md` with:
   - Task allocation (what's handoff vs this thread)
   - Phase breakdown with steps
   - Critical rules (no deletions, git mv only, etc.)
   - Locked IA tables with columns: Current path | Target path | Change | sidebarTitle | Flags

**Human review loop**: Human reviews the FULL IA table (all pages, all sections) and approves or modifies:
- Every filename
- Every sidebarTitle
- Every section assignment
- Every flagged decision

This is the "lock the IA" step. After this, structural decisions are fixed and only content changes happen.

**Upgrade opportunity**: Include the IA table with a 5th column for "Flags/Notes" from the start. The orchestrator process added this column late after multiple review rounds. Having it from the beginning captures deferred decisions cleanly.

---

### Step 6: Write Restructuring Handoff

**Who**: AI writes, human approves before execution
**Time**: 30 minutes

**Process**:
1. Write a `handoff-restructure.md` containing:
   - Branch and repo context
   - Every `git mv` command (renames, moves, deprecated moves)
   - Directory creation commands
   - Frontmatter updates for renamed files (sidebarTitle, title)
   - Stub page creation for every NEW page (with frontmatter + TODO + PURPOSE + page structure outline)
   - Exact nav JSON for the entire tab
   - Validation checklist (JSON valid, all paths resolve, no duplicates, no deprecated in active nav)
   - Explicit "what NOT to do" list
2. Critical rules:
   - NO deletions - only `git mv` to x-deprecated
   - NO content changes except frontmatter on renames
   - NO changes to other tabs

**Human review loop**: Human reviews the handoff before handing to an agent. This is a "measure twice, cut once" step.

**Upgrade opportunity**: Generate the validation script as executable code, not just a checklist. The orchestrator process had multiple JSON syntax errors that manual validation missed.

---

### Step 7: Write Content Writing Handoff

**Who**: AI writes
**Time**: 1 hour

**Process**:
1. Write a `handoff-content-writing.md` with a brief per page:
   - Target file path
   - Section and sidebarTitle
   - Job stories served
   - Content sources: specific file paths to read (not vague references)
   - "Must cover" checklist
   - Acceptance criteria
   - Standards references (authoring skill, style guide, glossary, icon map, frontmatter schema, component requirements)
2. Include a content extraction map for any pages being split
3. Include a list of existing pages needing updates (not rewrites)

**Human review loop**: Human validates content sources are correct and sufficient.

**Upgrade opportunity**: Create a `content-reference-pack/` folder with copies of all source files organised by category (v1 sources, deprecated content, context research, equivalent pages from other tabs, pages to extract from, standards). This was added late in the orchestrator process but was essential for agent handoffs that don't have full repo access.

---

### Step 8: Create Content Packs for Handoff

**Who**: AI executes
**Time**: 30 minutes

**Process**:
1. Create `_plans-and-research/content-reference-pack/` with ALL source files needed for content writing, organised:
   - `v1-sources/` - legacy docs
   - `deprecated-content/` - deprecated files with reusable content
   - `context-research/` - research briefs and planning docs
   - `[other-tab]-mirrors/` - equivalent pages from other tabs
   - `extract-from/` - current pages with content to extract
   - `standards/` - glossary, authoring skill, plans
2. Create `_plans-and-research/pages-to-write-pack/` with copies of all stub pages
3. For tutorials or other specialised content: create a separate pack with a `PROMPT.md` containing per-page writing briefs

**Output**: Self-contained packs that an agent can use without full repo access.

---

### Step 9: Execute Restructuring

**Who**: Agent (in worktree) or AI in main thread
**Time**: 30-60 minutes

**Process**:
1. Execute the restructuring handoff (Step 6 output)
2. Run all validation checks
3. Fix any issues
4. Human verifies nav renders correctly

---

### Step 10: Execute Content Writing

**Who**: Agent(s) in worktree(s)
**Time**: 2-6 hours depending on page count

**Process**:
1. Hand off content packs to writing agents
2. Agents produce completed .mdx files
3. Files delivered as zip or PR
4. Extract and replace stubs with completed content
5. Verify file sizes (content, not stubs)

**Human review loop**: Human reviews delivered content for accuracy before integration. Domain-specific claims, flag values, and command syntax need human verification.

---

## Phase 2: Content Integration and Review

### Step 11: Section-by-Section Human Review

**Who**: Human leads, AI assists with changes
**Time**: 1-3 hours per section (varies by page count)

**Process per section**:
1. AI does initial sweep for style/UX issues across all pages in the section:
   - Em dashes, markdown tables, missing imports, missing CustomDivider
   - Missing icons on accordions/tabs, code blocks without icon attribute
   - Non-entity voice ("your" instead of "the")
   - Missing Related Pages section
   - sidebarTitle matches the execution plan
2. Review section coherency: do the pages work together as a group?
3. Human opens each page in IDE

**Process per page**:
1. AI recommends fixes (style, components, voice, structural gaps)
2. Human reviews layout and content in IDE
3. Human directs specific changes
4. AI implements approved changes only
5. Verify cross-references resolve

**Section order**: Follow navigation order (first section to last). This ensures earlier pages are stable before later pages reference them.

**After all sections reviewed**: Write/rewrite the section's navigator/landing page, since it routes to now-finalised content.

**Upgrade opportunity**: Create a per-page review checklist that can be tracked:
```
- [ ] sidebarTitle matches plan
- [ ] Opening CustomDivider present
- [ ] No em dashes
- [ ] All tables are StyledTable
- [ ] All code blocks have icon + filename
- [ ] All accordions/tabs have icons
- [ ] Entity-led voice throughout
- [ ] Related Pages section with CardGroup
- [ ] Cross-references resolve
- [ ] PURPOSE comment is current
```

---

### Step 12: Integrate New Content Pages

**Who**: AI integrates, human reviews
**Time**: 30 minutes per batch

**Process**:
1. Extract delivered content from zips/PRs
2. Replace stubs with completed content
3. Verify file sizes (not stubs)
4. Review content against PURPOSE comment and acceptance criteria
5. Human reviews for accuracy and style
6. Confirm pages are in nav
7. Verify cross-references bidirectional

---

## Phase 3: Polish and Testing

### Step 13: Standards Testing

**Who**: AI runs, human reviews results
**Time**: 1-2 hours

**Process**:
- Run page-authoring skill compliance on all pages
- Verify frontmatter schema (all required fields, description 50-160 chars, keywords[0]=livepeer)
- Check UK spelling, no em dashes, entity-led voice
- Verify all REVIEW flags are addressed or explicitly deferred with rationale
- Apply information verification framework (when available)
- Apply copywriting framework for prose quality
- Run the repo git-hook or pre-commit flow after the targeted checks pass and treat that as the final validation gate for the tranche

### Step 14: Cross-Tab Verification

**Who**: AI checks, human validates
**Time**: 1 hour

**Process**:
- Verify all cross-tab references resolve (links to other tabs)
- Verify bidirectional cross-references
- Check glossary consistency across tabs
- Verify no terminology conflicts

### Step 15: Cleanup

**Who**: AI executes with human approval
**Time**: 30 minutes
**MUST BE LAST** - after all content is finalised

**Process**:
- Move all x-deprecated files to permanent archive or delete
- Remove dep- prefixed files
- Clean empty directories
- Final nav validation
- Final broken link check

---

## Artefacts Produced

| Artefact | Created in | Purpose |
|----------|-----------|---------|
| `product-thinking-review.md` | Step 2 | Full product analysis (job stories, OST, assumptions, journey, gaps) |
| `plan.md` | Step 5 | Consolidated plan (learnings, IA, page analysis, gaps, migration) |
| `execution-plan.md` | Step 5 | Execution tracking (task allocation, phases, locked IA tables, flags) |
| `handoff-restructure.md` | Step 6 | Agent instructions for file/nav restructuring |
| `handoff-content-writing.md` | Step 7 | Agent instructions for content writing per page |
| `content-reference-pack/` | Step 8 | All source files needed for content writing |
| `pages-to-write-pack/` | Step 8 | Copies of all stub pages |
| `[specialised]-writing-pack/` | Step 8 | Per-content-type packs (e.g. tutorials) with PROMPT.md |
| `glossary.mdx` | Step 1 or pre-existing | Terminology reference for the section |

---

## Key Learnings from Orchestrator Process

### What worked well
1. **Product thinking before IA design** - job stories and opportunity scoring prevented structure-first thinking
2. **First-principles page breakdown** - designing from "what's needed" not "what exists" found 13 missing pages
3. **Quickstart/Setup/Operations separation** - prevented conflating "try it" with "run it" with "earn from it"
4. **Content reference packs** - self-contained packs enabled agent handoffs without full repo access
5. **Execution plan with flags** - deferred decisions (⚠️ flags) prevented blocking on unresolved questions

### What needed improvement
1. **Naming decisions deferred too long** - adding sidebarTitle column from the start would have saved 2 review rounds
2. **Absence detection came from human, not AI** - every content gap was identified by human questions ("where's the guide for running AI service?"), not by the AI's analysis. The Walk the Week method was designed but not executed.
3. **Batch-ai-setup split was deferred when it should have been Phase 1** - creating stubs early was the right fix but the initial plan missed this dependency
4. **Multiple restructuring agents ran sequentially, conflicting** - file renames happened in multiple sessions causing confusion about current vs target names
5. **No automated validation** - JSON syntax errors and broken nav references were caught manually, not by scripts

### Critical rules (apply to every section)
1. **NO DELETIONS** until Phase 3 Step 15. Only `git mv` to x-deprecated.
2. **The plan is the source of truth** for naming. Don't deviate without human approval.
3. **Setup does not equal earning/value.** Separate technical readiness from business outcomes.
4. **Every page must serve a job story.** If it doesn't, it shouldn't exist.
5. **Cross-references must be bidirectional.** If A links to B, B links to A.
6. **Stubs must have PURPOSE + structure outline + metadata.** Not just frontmatter and "This page is a stub."
7. **Human reviews layout in IDE.** AI recommends, human directs changes.

---

## Recommended Process Upgrades for Future Sections

1. **Run absence detection (Walk the Week) as a formal step, not ad hoc.** The orchestrator process found all content gaps from human questions, not from structured analysis. The skill has the method - use it.

2. **Include sidebarTitle in the first-principles breakdown from the start.** Every page table should have 5 columns from Step 3: Page | What it answers | Why needed | Job stories | sidebarTitle.

3. **Generate validation scripts, not checklists.** A Python script that extracts all nav paths and verifies file existence catches errors that manual checking misses.

4. **Single restructuring pass.** Do NOT run multiple restructuring agents across sessions. One handoff, one execution, one validation. Multiple passes cause state confusion.

5. **Create the glossary FIRST** (before Step 2). Terminology decisions affect every subsequent step. The orchestrator glossary was written mid-process and required retroactive terminology fixes across pages.

6. **Separate "what pages exist" from "what pages are needed" explicitly.** The orchestrator process initially mixed these, which anchored the analysis to existing pages instead of user needs. Step 3 (first-principles breakdown) was added to fix this - keep it as a distinct step.

7. **Time-box human review loops.** Each human review point should have a clear scope ("review these 4 pages for naming only" not "review everything"). Open-ended reviews expand scope.
