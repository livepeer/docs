# Canonical Content, Copy, and Review Framework

This is the canonical working guide for creating, reviewing, and governing reader-facing content in this repository. It collates the scattered source material used for copy, voice, naming, layout, taxonomy, and review into one operating document aligned to [my-process.mdx](./my-process.mdx).

Use this file for decisions. Use [index.md](./index.md) for the exhaustive source inventory.

## Purpose

This framework exists to:

- turn the repo's scattered authoring rules into one decision-complete operating guide
- distinguish hard rules from supporting references
- tell writers and reviewers which files to load for each stage of work
- keep authoring aligned to the repo's actual process instead of ad hoc prompt fragments

## Authority Order

When sources conflict, use this order:

1. `workspace/plan/active/_MY_PROCESS/my-process.mdx`
2. `v2/orchestrators/_workspace/canonical/Frameworks.mdx`
3. `workspace/plan/active/CONTENT-WRITING/Prompts/voice-rules.md`
4. `workspace/plan/active/CONTENT-WRITING/Prompts/section-naming.md`
5. `workspace/plan/active/CONTENT-WRITING/READ-EVERY-TIME/content-pipeline-canonical.md`
6. `docs-guide/canonical/collation-data/Mintlify/mintlify-repo-best-practices.md`
7. `docs-guide/frameworks/page-taxonomy-framework.mdx` and relevant `docs-guide/policies/**`
8. `.claude/references/**` as collated secondary references
9. Older prompt experiments, archived outputs, and testing folders under `workspace/plan/active/CONTENT-WRITING/Prompts/**`

Rule for conflicts: live canonical framework files and approved process documents win over archived prompts, historical drafts, and earlier prompt experiments.

## Operating Model

The repo's content workflow is phase-based. This document follows the same flow:

1. define context and audience
2. classify the page contract
3. write or review content against voice and purpose
4. verify factual claims
5. apply layout, components, frontmatter, and naming
6. perform final review and sign-off

That is the practical reading of [my-process.mdx](./my-process.mdx) plus the target-state pipeline in `workspace/plan/active/CONTENT-WRITING/READ-EVERY-TIME/content-pipeline-canonical.md`.

## Canonical Source Packs

These are the source packs to load by concern.

### 1. Process and checkpoints

Primary files:

- `workspace/plan/active/_MY_PROCESS/my-process.mdx`
- `workspace/plan/active/CONTENT-WRITING/READ-EVERY-TIME/content-pipeline-canonical.md`
- `v2/orchestrators/_workspace/canonical/process.mdx`
- `v2/orchestrators/_workspace/canonical/checks.mdx`

Use for:

- phase order
- checkpoint discipline
- deciding what artefact is needed before the next pass

### 2. Taxonomy and frontmatter contract

Primary files:

- `v2/orchestrators/_workspace/canonical/Frameworks.mdx`
- `workspace/plan/active/CONTENT-WRITING/Frameworks/pageType.md`
- `workspace/plan/active/CONTENT-WRITING/Frameworks/pagePurpose.md`
- `workspace/plan/active/CONTENT-WRITING/Frameworks/complexity.md`
- `workspace/plan/active/CONTENT-WRITING/Frameworks/information-type.md`
- `workspace/plan/active/CONTENT-WRITING/Frameworks/veracity.md`
- `workspace/plan/active/CONTENT-WRITING/Frameworks/veracity-library.md`
- `workspace/plan/active/CONTENT-WRITING/Frameworks/frontmatter-taxonomy-update.md`

Use for:

- `pageType`
- `pagePurpose`
- audience and persona tokens
- lifecycle stage and complexity
- veracity class
- section information type

Hard rule:

- all content pages must use locked taxonomy values from the canonical frameworks

### 3. Voice and copy governance

Primary files:

- `workspace/plan/active/CONTENT-WRITING/Prompts/voice-rules.md`
- `workspace/plan/active/CONTENT-WRITING/Prompts/Prompts-By-Phase/_research-and-consolidated-notes/prompt-guides-guards-resources/copy-governance.md`
- `.claude/references/copy/best-practice.md`

Supporting files:

- `v2/internal/docs-philosophy.mdx`
- `v2/resources/documentation-guide/authoring-standard.mdx`
- `workspace/plan/active/CONTENT-WRITING/Prompts/Prompts-By-Phase/_research-and-consolidated-notes/prompt-guides-guards-resources/docs-philosophy-authoring.md`

Use for:

- banned words and phrases
- audience-specific register
- sentence-level copy quality
- authoring principles

### 4. Naming and IA language

Primary files:

- `workspace/plan/active/CONTENT-WRITING/Prompts/section-naming.md`
- `.claude/references/ia-and-naming/best-practice.md`
- `workspace/plan/active/_MY_PROCESS/03_IA-STRUCTURE-per-page-mapping/canonical-ia-and-repo-folder-framework.md`

Use for:

- section and page naming
- conceptual layer selection
- navigation label quality
- folder and route naming

### 5. Layout, structure, and component use

Primary files:

- `.claude/references/layout/best-practice.md`
- `workspace/plan/active/CONTENT-WRITING/Prompts/Prompts-By-Phase/_research-and-consolidated-notes/prompt-guides-guards-resources/page-structure-rules.md`
- `docs-guide/canonical/collation-data/Mintlify/mintlify-repo-best-practices.md`
- `docs-guide/policies/page-composition-authoring-policy.mdx`
- `docs-guide/policies/component-layout-decisions.mdx`
- `docs-guide/frameworks/page-taxonomy-framework.mdx`
- `snippets/templates/pages/page-composition-framework.mdx`

Use for:

- page anatomy
- template selection
- allowed component patterns
- Mintlify constraints
- route-safe page composition

### 6. Prompt packs and historical prompt research

Primary files:

- `workspace/plan/active/CONTENT-WRITING/Prompts/Prompts-By-Phase/**`
- `workspace/plan/active/CONTENT-WRITING/Prompts/Good prompt references/**`
- `workspace/plan/active/CONTENT-WRITING/Prompts/Previous Prompts Used/**`

Use for:

- prompt assembly
- learning from historical prompt experiments
- phase-specific pack construction

Rule:

- these sources support execution, but they do not override the canonical rules above

## The Content Contract

Every page must have a clear contract before writing starts:

- one primary audience
- one primary job for the reader
- one page type
- one page purpose
- one lifecycle stage
- one complexity level
- one clear next step

If any of those are missing, the page is not ready for drafting or review.

## Section Contracts for Writing

### Navigation pages

Job:

- route the reader cleanly to the next page or path

What belongs:

- orientation
- route selection
- section map
- short guidance on which path fits which reader

What does not belong:

- deep explanation
- long procedural detail
- broad marketing copy

### Concept pages

Job:

- build a mental model

What belongs:

- mechanisms
- roles
- system relationships
- architecture
- economics
- decision-enabling comparisons

What does not belong:

- step-by-step setup
- long reference tables
- operational troubleshooting checklists

### Tutorial pages

Job:

- teach through a complete guided exercise

What belongs:

- end-to-end sequence
- prerequisite clarity
- expected outputs
- success checks

What does not belong:

- fragmented reference material
- unfocused theory blocks

### Guide pages

Job:

- help a reader achieve a specific outcome with opinionated direction

What belongs:

- decision criteria
- recommended approach
- trade-offs
- staged actions

What does not belong:

- encyclopaedic dumping
- abstract explanation with no recommendation

### Instruction pages

Job:

- tell the reader exactly what to do

What belongs:

- prerequisites
- ordered steps
- verification
- troubleshooting handoff if the procedure fails

What does not belong:

- long conceptual digressions
- unexplained branching

### Reference pages

Job:

- let a reader find an exact fact quickly

What belongs:

- precise values
- flags
- parameters
- API details
- contract addresses
- structured lookup collections

What does not belong:

- broad editorial narration
- generic framing paragraphs that delay lookup

### Resource pages

Job:

- help the reader discover useful material outside the strict spec surface

What belongs:

- curated links
- ecosystem directories
- showcases
- external learning material
- community help channels

What does not belong:

- formal specifications
- parameter tables that belong in reference

## Universal Copy Rules

These are hard rules, not preferences.

### Voice principles

- write in entity-led voice, not documentation-led voice
- lead with the reader's outcome or the system fact, not with "this page" framing
- prefer precision over breadth
- do not hedge shipped behaviour
- use UK English throughout

### Zero-tolerance banned words

- `effectively`
- `essentially`
- `basically`
- `meaningful`
- `significant`
- `real`
- `various`
- `several`
- `obviously`
- `clearly`

### Zero-tolerance banned phrases and habits

- `This section covers`
- `This page covers`
- `This page explains`
- `Understanding X is essential`
- `It is important to note`
- `As mentioned above`
- `among other factors`
- `and so on`
- `etc.`
- `what it takes`

### Sentence-level rules

- do not use negative value framing when a positive assertion is possible
- do not leave unresolved `if` branches in body prose unless the format is truly procedural or code-based
- do not use `can` or `may` for value claims that should be stated directly
- end paragraphs with a fact, a number, or a next step
- one paragraph should do one job

### Opening rules

- open with the outcome, fit, or key fact
- do not open with throat-clearing
- do not restate the title in prose
- do not explain what the page will explain

## Audience Voice Extensions

Use the universal rules first. Then apply the audience register.

### Gateway

- technical and operational
- lead with routing, pricing, performance, capacity, and operational consequences

### Orchestrator

- technical, operational, earnings-aware
- use config names and runtime behaviour directly
- lead with operational outcomes and reward implications where relevant

### Developer

- technical and implementation-led
- prefer concrete interfaces, APIs, methods, and integration consequences

### Builder

- product-building and workflow-oriented
- connect capability to product outcomes without drifting into founder messaging

### Delegator

- finance and governance aware
- lead with returns, risk, mechanisms, and decision criteria

### Community

- accessible and welcoming
- define specialist terms when first introduced
- avoid insider shorthand unless the audience is explicitly narrow

### Founder

- strategic and product-aware
- focus on business implications, viability, differentiation, and decision support

## Naming Rules

Naming is governed by the section naming rubric and the IA best-practice collation.

Hard rules:

- name the governing concept, not the visible examples
- prefer content descriptors over literal contrast labels
- title fit must reflect `pageType`, `pagePurpose`, and audience
- use the correct conceptual layer
- penalise generic umbrellas when a sharper label exists

Weak labels to avoid unless they are literally correct:

- `types`
- `profiles`
- `modes`
- `models`
- `overview`
- `guide`
- `basics`
- `essentials`
- `foundations`

Naming review test:

1. does the title name the real subject?
2. is it at the right conceptual level?
3. would it still work if the page expanded later?
4. does it sound natural in navigation?
5. does it fit the reader and purpose?

## Layout and Structure Rules

### Required page anatomy

Default anatomy:

1. header
2. introduction
3. body sections
4. related pages or next steps when appropriate

### Template rule

Choose the template from page type and variant, then keep the structure consistent with that template. Do not improvise page skeletons when a canonical template exists.

### Component rule

- global Mintlify components should not be imported when they are globally available
- shared repo components should use root-absolute imports
- page-local helper content can use local relative imports
- do not overload pages with repeated layout primitives when one is enough

### Structural anti-patterns

- tutorials buried inside resources
- reference pages written like essays
- concept pages dominated by procedures
- routing pages that also try to be deep concept pages
- mixed audience pages with no declared primary reader

## Review Workflow by Phase

Use this as the operating checklist.

### Phase 1: context and audience

Load:

- `my-process.mdx`
- audience-design prompt pack
- docs philosophy and authoring sources

Decide:

- who the reader is
- what job they need to complete
- where the page sits in the journey

### Phase 2: page contract and structure

Load:

- canonical frameworks
- section naming rubric
- IA framework

Decide:

- page type
- purpose
- section placement
- adjacent pages

### Phase 3: content draft or content review

Load:

- `voice-rules.md`
- copy governance sources
- page brief
- existing page if reviewing

Check:

- audience fit
- purpose fit
- information sufficiency
- paragraph discipline
- banned language

### Phase 4: veracity

Load:

- `veracity-library.md`
- `veracity.md`
- marked factual claims

Check:

- every material claim is confirmed, flagged, or removed
- unresolved uncertainty is explicit

### Phase 5: layout and MDX structure

Load:

- page structure rules
- Mintlify best practices
- component layout policy

Check:

- page anatomy
- component fit
- frontmatter completeness
- title and heading quality

### Phase 6: sign-off

Check:

- one audience, one job, one next step
- no unsupported claims
- no banned copy
- no template violations
- no unresolved structural ambiguity

## Do and Don't Summary

### Do

- classify the page before drafting
- lead with what the reader gets or needs to know
- use page-type-appropriate structure
- keep content aligned to one primary audience
- verify claims in trust order
- use the naming rubric instead of instinct alone

### Don't

- start pages with `this page` framing
- let a page serve multiple unrelated jobs
- mix concept, procedure, and reference content without a clear contract
- treat archived prompt experiments as canonical
- publish copy that contains vague qualifiers or unresolved uncertainty
- use resources as a dumping ground for content with no clear type

## File and Prompt Map by Job

### If you are writing a new page

Load first:

- `my-process.mdx`
- `Frameworks.mdx`
- `voice-rules.md`
- the relevant phase prompt pack
- page structure rules

### If you are reviewing an existing page

Load first:

- `my-process.mdx`
- `voice-rules.md`
- `copy-governance.md`
- `section-naming.md`
- the page's existing route and adjacent pages

### If you are fixing titles or labels

Load first:

- `section-naming.md`
- `.claude/references/ia-and-naming/best-practice.md`
- the relevant IA framework file

### If you are applying layout or page structure

Load first:

- `page-structure-rules.md`
- `.claude/references/layout/best-practice.md`
- Mintlify best practices

## Notes on Source Hygiene

- `.claude/references/**` is valuable because it collates and interprets repo rules, but it is still secondary to the locked canonical files.
- `workspace/plan/active/CONTENT-WRITING/Prompts/Previous Prompts Used/**` is reference material, not policy.
- `workspace/plan/active/CONTENT-WRITING/Prompts/prompt-do-dont-reference.md` currently has no active content and should not be loaded as an authority source.
- If this framework and a scattered prompt disagree, update the scattered prompt or record the conflict rather than silently picking whichever is easier.

## Maintenance Rule

When a new canonical content rule is established, update all three surfaces together:

1. the true source file
2. this framework
3. the root [index.md](./index.md) if a new source file or prompt family is introduced
