# Consolidation Recommendation: Bring Everything Together

> The problem: ~25,000+ files of research, frameworks, design specs, audits, prompts, and working documents are scattered across 26 plan folders, docs-guide, ai-skills, per-tab workspaces, and templates. The same information exists in 3-5 locations at different stages of refinement. No single session can load enough context to produce coherent design.

---

## THE PRINCIPLE

Every page in the docs must be the **definitive, complete, canonical answer** to its question. When someone on Discord asks "how does inflation work?" there should be ONE page that fully answers it. When an AI agent searches "Livepeer staking mechanics" it should find ONE canonical source.

The pipeline must produce THAT, not folder structures.

To produce that, the pipeline needs ONE place where ALL the information about each tab is gathered, structured, and accessible. Not 26 folders. Not scattered workspaces. One place.

---

## RECOMMENDATION: Single Source of Truth per Tab

### Structure

```
workspace/plan/active/_MY_PROCESS/
├── PIPELINE.md                      The pipeline itself (replaces my-process.mdx)
│                                    - What the pipeline does
│                                    - How to run it
│                                    - What "done" means (every page is comprehensive canonical answer)
│
├── CANON/                           ALL canonical rules in ONE place
│   ├── voice-rules.md               THE voice rules (one copy, one location)
│   ├── page-classification.md       THE page type decision tree
│   ├── section-patterns.md          THE section composition rules
│   ├── ia-framework.md              THE IA structure rules
│   ├── frontmatter-taxonomy.md      THE frontmatter schema
│   ├── terminology-lock.md          THE locked terminology
│   └── quality-gate.md              THE quality standard (what "done" means)
│
├── EXEMPLARS/                       Gold-standard pages (already built)
│
├── TABS/                            ALL research + design + content PER TAB
│   ├── ABOUT/
│   │   ├── 00-design.md             Content design (territory + personas + journeys + IA)
│   │   ├── 01-research.md           ALL research consolidated (v1 content, external sources, Discord/GitHub signals)
│   │   ├── 02-page-inventory.md     Current pages: what exists, what state, what quality
│   │   ├── 03-questions.md          THE QUESTIONS this tab must definitively answer
│   │   ├── 04-briefs/               Page briefs for Claude Web
│   │   ├── 05-feedback.md           What we learned processing this tab
│   │   └── 06-pipeline-report.md    Quality gate results
│   ├── ORCHESTRATORS/
│   │   └── (same structure)
│   ├── GATEWAYS/
│   ├── DEVELOPERS/
│   ├── DELEGATORS/
│   ├── HOME/
│   ├── COMMUNITY/
│   ├── SOLUTIONS/
│   └── RESOURCES/
│
├── tools/                           Quality gate script (already built)
│   └── page-quality-gate.sh
│
└── ARCHIVE/                         Everything that was consolidated FROM
    └── (pointers to original locations, not copies)
```

### What goes WHERE

**CANON/ consolidates from:**
- `workspace/plan/active/CONTENT-WRITING/Prompts/voice-rules.md`
- `workspace/plan/active/CONTENT-WRITING/Frameworks/*.md` (7 files)
- `workspace/plan/active/CONTENT-WRITING/READ-EVERY-TIME/*.md` (14 files)
- `snippets/templates/page-classification.md`
- `snippets/templates/section-patterns.md`
- `v2/orchestrators/_workspace/canonical/Frameworks.mdx`
- `v2/orchestrators/_workspace/canonical/checks.mdx`
- `workspace/plan/active/_MY_PROCESS/03_IA-STRUCTURE-per-page-mapping/canonical-ia-and-repo-folder-framework.md`
- `workspace/plan/active/_MY_PROCESS/canonical-content-copy-and-review-framework.md`
- `docs-guide/frameworks/*.mdx` (6 files)
- `docs-guide/policies/*.mdx`

NOT copies. These become THE canonical location. Old locations get a one-line pointer: "Moved to _MY_PROCESS/CANON/voice-rules.md"

**TABS/{TAB}/ consolidates from (per tab):**
- `workspace/plan/active/CONTENT-WRITING/context-packs/{tab}-*.md` (5-9 files per tab)
- `workspace/plan/active/CONTENT-WRITING/collated/{tab}/*.md` (6-11 files per tab)
- `workspace/plan/active/CONTENT-WRITING/Prompts/Prompts-By-Phase/1-audience-design/testing/Tabs/{tab}/` (entire tree)
- `v2/{tab}/_workspace/` (research, plans, canonical, reviews)
- `workspace/plan/active/_MY_PROCESS/00_AUDIENCE-JOURNEY/ALL-CURRENT-INFORMATION/RESEARCH/{TAB}/`
- `workspace/plan/active/CONTENTI-PIPLEINE/` (for orchestrators)
- `workspace/plan/active/ORCHESTRATOR-CONTENT-WRITING/` (for gateways)

---

## THE KEY FILE: 03-questions.md

This is the file the pipeline currently does NOT produce and MUST produce.

For each tab, `03-questions.md` lists EVERY QUESTION the tab must definitively answer. Each question maps to exactly one page. Each page must FULLY answer its question.

**Example for About tab:**

```markdown
# About Tab: Questions This Tab Must Definitively Answer

## concepts/
Q1: "What is Livepeer?"
→ concepts/livepeer-overview.mdx
→ MUST FULLY ANSWER: What it is, who it's for, what the ecosystem includes, why it matters
→ CANONICAL: When someone asks "what is Livepeer?" on Discord, link THIS page

Q2: "How does the whole Livepeer system fit together?"
→ concepts/mental-model.mdx
→ MUST FULLY ANSWER: 10-layer stack, all 3 zones, all actors, all dynamics
→ CANONICAL: When someone asks "how does Livepeer work at a high level?" link THIS page

Q3: "What are the core building blocks?"
→ concepts/core-concepts.mdx
→ MUST FULLY ANSWER: Protocol/network/platform split, actors, compute types, economics glance, governance glance
→ CANONICAL: When someone asks "explain the Livepeer architecture" link THIS page

## network/
Q4: "What IS the Livepeer network and how is it different from the protocol?"
→ network/overview.mdx
→ MUST FULLY ANSWER: Execution layer definition, protocol boundary, what the network does and doesn't do

Q5: "Who are the actors and what does each one do?"
→ network/actors.mdx
→ MUST FULLY ANSWER: ALL actors (orchestrators, gateways, delegators, builders, end users)
   in ONE flat page with tabs/accordions for each role's detail. NOT sub-pages.
   Each role: what they do, how they earn, what they need, how they relate to others.
→ CANONICAL: When someone asks "what do orchestrators/gateways/delegators do?" link THIS page

Q6: "How does a compute job flow from request to result?"
→ network/job-lifecycle.mdx
→ MUST FULLY ANSWER: Complete state machine, both video and AI paths, payment settlement
→ CANONICAL: When someone asks "how does a job work on Livepeer?" link THIS page

... (continue for every page)

## protocol/
Q10: "How does money flow through the Livepeer ecosystem?"
→ protocol/economics.mdx
→ MUST FULLY ANSWER: ETH fees AND LPT inflation, who earns each, the 89:1 ratio reality,
   sustainability trajectory, all governance-controlled parameters with verify-live links
→ CANONICAL: When someone asks "how does Livepeer economics work?" or "what's the inflation model?"
   link THIS page

... (continue for every page)
```

**The test for every page**: "If someone on Discord asks this question, does this page COMPLETELY answer it without them needing to click to another page?"

If no: the page is incomplete. Fix the page, not the IA.

---

## HOW TO ACTUALLY DO THIS

### Phase 1: Consolidate CANON/ (1 session)

Read every canonical/framework file in the repo. Identify which version is most current. Create ONE copy in CANON/. Add pointers at old locations.

This gives every future session ONE place to load rules from.

### Phase 2: Create TABS/{TAB}/03-questions.md for each tab (1 session per tab)

For each tab, ask: "What questions must this tab definitively answer?"

Sources:
- Discord channel archives (real questions people actually ask)
- GitHub issues (real problems people actually have)
- Forum threads (real discussions people actually have)
- The existing page inventory (what pages exist, what they currently answer)
- The persona research (who needs what)

Output: A numbered list of questions, each mapped to exactly one page.

### Phase 3: Evaluate every existing page against its question (1 session per tab)

For each page, ask: "Does this page COMPLETELY answer its question?"

Use the quality gate + human reading. Rate each page:
- COMPLETE: Fully answers the question. Canonical. Linkable.
- PARTIAL: Answers some of it. Needs expansion.
- WRONG QUESTION: The page exists but answers the wrong question. Needs rewrite.
- MISSING: The question has no page. Needs writing.

### Phase 4: Fix pages (Claude Web for writing, Claude Code for gate)

For each PARTIAL/WRONG/MISSING page, produce a Claude Web brief that says:
- THE QUESTION this page answers
- WHAT the reader must know COMPLETELY after reading this page
- The sources to use
- The layout pattern (flat, comprehensive, tabs/accordions for depth)
- The voice register
- The quality gate it must pass

### Phase 5: Validate

Run the quality gate. Then the REAL test: for each question in 03-questions.md, can you link that ONE page on Discord and know the person will get a complete answer?

---

## WHAT CHANGES ABOUT THE PIPELINE

The pipeline stops being about:
- Folder structure
- Frontmatter contracts
- Persona journey mapping
- IA positions

The pipeline starts being about:
- What questions must the docs answer?
- Does each page completely answer its question?
- Can someone link this page on Discord and know it's the definitive answer?

The quality gate stays. The voice rules stay. The templates stay. The exemplars stay.

What changes: the DESIGN step stops producing IA trees and starts producing QUESTION LISTS. The question list IS the IA. Each question = one page. Each page = one complete answer.

---

## ESTIMATED EFFORT

| Phase | Scope | Effort |
|---|---|---|
| 1. Consolidate CANON/ | All canonical files | 1 session (3-4 hours) |
| 2. Questions per tab | 9 tabs | 1 session per tab (9 sessions) |
| 3. Evaluate pages | ~200 pages across all tabs | 1 session per tab (9 sessions) |
| 4. Fix pages | Varies per tab | Ongoing (Claude Web writes, Claude Code gates) |
| 5. Validate | Per tab | Integrated into Phase 4 |

About tab is the pilot. It's the most researched, most recently restructured, and has the most existing content to evaluate.
