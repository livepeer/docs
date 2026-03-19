Situation Assessment
The Google Doc is behind authentication — I can't fetch it. You'll need to either paste the content or export it as a file I can read.

What already exists in this repo (scattered across 35+ files):

Asset Location State
12 pageTypes + taxonomy page-taxonomy-framework.mdx Solid definitions
Page composition rules page-composition-framework.mdx Updated today, but template-level only
Layout contracts per pageType component-layout-decisions.mdx + JSON Machine-readable, enforced
Section naming rubric content-naming.md Comprehensive (6-step, scored)
Copy/voice rules copy-rules-SKILL.md Strong but operator-only
12+ page templates v2/templates/pages/ + snippets/templates/pages/ Two parallel sets — alignment unverified
Content system / IA model content-system.mdx Clean 3-layer model
Component registry component-registry.json (246KB) 113 components, classified
Content writing pipeline plan CONTENT-WRITING/plan.md Active, overlaps heavily with this work
Full resource collation CONTENT-WRITING/collation.md Dated inventory with gap analysis
Key problems the collation already identified:

Templates exist in two locations and may be misaligned
Page-composition-framework defines structure comments but not reusable section blocks
No "composable section" concept exists yet — sections are implicit in templates, not standalone
Voice rules cover operators only — not developers, delegators, community
No golden examples showing "what good looks like" per pageType
Process Plan: Page Template & Composable Section System
Relationship to CONTENT-WRITING plan
Your existing CONTENT-WRITING plan already covers the taxonomy definition phase (Steps 2-10). This work is a focused sub-project that sits between Steps 10 and 11 of that plan — it takes the defined framework and turns it into the concrete template + section system that the rewrite pipeline will use.

I'd recommend treating this as either:

Option A: A new task plan (CONTENT-WRITING/PAGE-TEMPLATES/) that feeds into the content pipeline
Option B: Expanding Steps 10-11 of the existing plan with the detail below
Your call on which — but the dependency is: taxonomy definitions (Steps 2-9) must be settled first, or at least stable enough to build on.

Phase 0: Collate & Consolidate (prerequisites)
Goal: Single source of truth for everything that governs page structure.

Step Task Input Output
0.1 Ingest Google Doc research The Google Doc you linked Extracted findings in a repo .md file
0.2 Reconcile the two template sets v2/templates/pages/ vs snippets/templates/pages/ Decision: which is canonical, retire the other
0.3 Audit current templates against composition framework All templates + page-composition-framework.mdx Gap report: which templates follow the framework, which don't
0.4 Extract implicit section patterns from existing pages Best 3-5 real pages per pageType Inventory of section patterns actually in use
Checkpoint: You review and approve the consolidated picture before any design begins.

Phase 1: Define Content Types & Section Taxonomy
Goal: Formally define what types of content/information exist, and what section patterns serve them.

Step Task Detail
1.1 Define information types What kinds of content appear in docs? (concept explanation, procedural steps, decision guidance, reference data, status/metadata, navigation/routing, code examples, warnings/prerequisites, etc.) Map each to the component types that render them.
1.2 Define section archetypes Reusable section patterns that compose into pages. Each archetype has: a purpose, a structure (components + order), naming rules, and content rules. Examples: "Prerequisites block", "Step sequence", "Decision matrix", "Concept explanation", "Related resources footer".
1.3 Map sections → information types Which section archetypes serve which information types? One section may serve multiple info types; one info type may appear in multiple section patterns.
1.4 Map sections → pageTypes Which section archetypes are required/optional/forbidden per pageType? This extends component-layout-decisions.mdx from component-level to section-level governance.
Checkpoint: You review and approve the information type + section archetype definitions.

Phase 2: Define Page Structure Rules
Goal: Formal rules governing how sections compose into pages.

Step Task Detail
2.1 Define the universal page skeleton Every page has: Header → Introduction → Body → Footer. Define what each zone requires and allows. (The composition framework already sketches this — formalize it.)
2.2 Define per-pageType composition rules For each of the 12 pageTypes: required sections (in order), optional sections, forbidden sections, max section count, major layout element limit (currently: 1 per page).
2.3 Define section ordering principles General rules: value-first, prerequisites before steps, concepts before implementation, outcomes before details. Per-audience modifiers (operators want "what do I run" first; developers want "how does it work" first).
2.4 Define section naming contract Formalize the content-naming rubric into rules that apply to section headings in templates: governing-concept labels, max 3 words, no questions, no numbers, scored against the 5-dimension rubric.
2.5 Reconcile with existing layout contracts Verify Phase 2 rules are consistent with component-layout-decisions.mdx and component-layout-profile.json. Update or extend those files as needed.
Checkpoint: You approve the page structure rules. This becomes the "page constitution" that all templates implement.

Phase 3: Build the Composable Sections
Goal: Create the actual reusable section building blocks.

Step Task Detail
3.1 Choose implementation format Options: (a) MDX snippets in snippets/templates/sections/, (b) documented patterns in a reference file, (c) JSX components, (d) hybrid. Decide based on how authors will actually use them.
3.2 Build core section blocks Create each section archetype from Phase 1.2. Each block includes: structure (MDX skeleton), content guidance (comments explaining what goes here), component slots, naming example.
3.3 Build section variants Some sections need audience-specific variants (e.g., prerequisites for operators vs developers). Create variants where the Phase 2 rules require them.
3.4 Test composability Take 3 different pageTypes, compose pages from section blocks only. Verify: no gaps, no conflicts, sections combine cleanly, result matches the page structure rules.
Checkpoint: You review the section library and composability test results.

Phase 4: Rebuild Page Templates
Goal: Replace current templates with compositions of the new section blocks.

Step Task Detail
4.1 Rebuild each pageType template Compose from section blocks. Each template becomes an ordered assembly of sections with per-pageType configuration.
4.2 Create golden examples For at least 4 pageTypes (how_to, overview, concept, reference): produce a fully realized example page that demonstrates the template used correctly.
4.3 Consolidate template locations One canonical location for templates. Retire the duplicate set.
4.4 Update machine-readable configs Update component-layout-profile.json to reflect the new section-level contracts.
4.5 Write the author-facing guide A single page explaining: how to pick a template, how to compose sections, how to name sections, with examples. This replaces the scattered guidance.
Checkpoint: You approve the rebuilt templates and golden examples.

Phase 5: Codify as Repo Standard
Goal: Make this the enforced standard, not just a guideline.

Step Task Detail
5.1 Update governance docs Update component-layout-decisions.mdx, page-taxonomy-framework.mdx, content-system.mdx to reference the new template/section system as canonical.
5.2 Add validation Extend component-layout-governance.js or create a new validator that checks pages against the section-level composition rules (not just component-level).
5.3 Update skills Ensure the content writing pipeline skills (context pack, page review, rewrite) reference the new templates and section library.
5.4 Retire old artifacts Remove or archive: duplicate template sets, superseded composition docs, any governance docs that contradict the new system.
5.5 Pilot on real pages Apply templates to 5-10 real pages across 2-3 pageTypes. Measure: does the template system produce consistent, good pages?
Checkpoint: You approve the standard + pilot results.

Dependencies & Sequencing

Google Doc ingest ──┐
├──► Phase 0 (collate) ──► Phase 1 (define) ──► Phase 2 (rules)
Template audit ─────┘ │
▼
CONTENT-WRITING Steps 2-9 ──────────────────────────────► Phase 2 also needs
(taxonomy definitions) approved taxonomy
│
▼
Phase 3 (build sections)
│
▼
Phase 4 (rebuild templates)
│
▼
Phase 5 (codify standard)
│
▼
CONTENT-WRITING Steps 11+
(pipeline uses the templates)
Open Questions for You
Google Doc: Can you export it as .md or .txt and drop it in the repo, or paste the key sections? I can't reach it through the sharing link.

Relationship to CONTENT-WRITING plan: Separate task plan, or expand the existing plan? The content-writing plan's Phase 1 (Steps 2-10) defines the taxonomy fields; this plan defines how those fields manifest as actual page structure. They're tightly coupled.

Template canonical location: v2/templates/pages/ vs snippets/templates/pages/ — do you already have a preference?

Composable section format: Are you thinking MDX snippet files that get imported, or documented patterns that authors copy-paste, or actual JSX components? This affects Phase 3 significantly.

Scope of "composable": Just section-level blocks (Prerequisites, Steps, Related Pages), or also sub-section patterns (code example + explanation pair, warning + workaround pair)?
