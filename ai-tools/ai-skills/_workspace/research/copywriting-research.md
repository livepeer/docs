# Authoring Skill Research

Working note for a future full pass on `ai-tools/ai-skills/page-authoring/SKILL.md` and related authoring guidance.

Status:
- Research backlog only
- No skill changes applied from this note yet
- Focus: documentation authoring standards, copy standards, document-type routing, and review heuristics

## Rating Scale

- `Effort`
  - `S`: wording, examples, checklist, or section additions in `SKILL.md`
  - `M`: moderate structural rewrite of the skill, new templates, or significant section reshaping
  - `L`: validator/script work, cross-file alignment, or larger workflow changes
- `Impact`
  - `H`: likely to improve page quality across most authored pages
  - `M`: useful improvement for many pages, but not a primary quality lever
  - `L`: smaller or more situational improvement

## Source Review

| Source | Type | What to import | What not to import |
|---|---|---|---|
| `awesome-copilot` documentation writer (Diataxis summary via PRPM) | External skill summary | Stronger document-type routing and IA discipline | Do not treat the summary alone as a full source of detailed writing rules |
| Metabase `docs-review` + shared style guide | External review skill | Materiality test, heading clarity, anti-filler review mindset, practical style enforcement | Do not import any repo-specific tone that conflicts with Livepeer’s technical voice |
| Sentry `blog-writing-guide` | External writing skill | Strong openings, usefulness threshold, concrete trade-offs, sharper editorial self-review | Do not import blog-style voice, rhetorical flourish, or publication-style opinionated framing into product docs |
| Zocomputer `copywriting` | External writing skill | Pre-draft brief, audience framing, clarity over cleverness, strong specificity | Do not import conversion-optimised CTA patterns, urgency, or persuasion framing into docs |
| Diataxis | Documentation framework | Clear separation between tutorial, how-to, reference, and explanation | Do not treat it as sentence-level style guidance; it is a document-shape framework |
| Google Technical Writing | Technical writing framework | Audience awareness, short sentences, strong definitions, terminology discipline, self-editing | Do not import punctuation guidance that conflicts with current repo dash rules |
| Red Hat Modular Documentation | Product documentation framework | Reusable concept/procedure/reference modules, assembly thinking, reusable documentation structure | Do not copy AsciiDoc-specific mechanics directly into MDX guidance |
| Microsoft Writing Style Guide | Product/UI/procedure style framework | Procedural clarity, active voice, present tense, concise headings, step-writing discipline | Do not import Microsoft’s warm/conversational brand voice as a default docs tone |

## Official Sources Reviewed

- PRPM package summary for `awesome-copilot` documentation writer:
  - `https://prpm.dev/packages/awesome-copilot/copilot-documentation-writer`
  - Note: this confirmed the Diataxis positioning, but not the full underlying prompt body.
- Metabase docs-review skill:
  - `https://raw.githubusercontent.com/metabase/metabase/master/.claude/skills/docs-review/SKILL.md`
- Metabase shared style guide:
  - `https://raw.githubusercontent.com/metabase/metabase/master/.claude/skills/_shared/metabase-style-guide.md`
- Sentry blog-writing-guide:
  - `https://raw.githubusercontent.com/getsentry/skills/main/plugins/sentry-skills/skills/blog-writing-guide/SKILL.md`
- Zocomputer copywriting skill:
  - `https://raw.githubusercontent.com/zocomputer/skills/main/External/copywriting/SKILL.md`
- Diataxis:
  - `https://diataxis.fr/`
- Google Technical Writing:
  - `https://developers.google.com/tech-writing`
  - `https://developers.google.com/tech-writing/one/audience`
  - `https://developers.google.com/tech-writing/one/short-sentences`
  - `https://developers.google.com/tech-writing/one/words`
  - `https://developers.google.com/tech-writing/two/editing`
- Red Hat Modular Documentation:
  - `https://redhat-documentation.github.io/modular-docs/`
- Microsoft Writing Style Guide:
  - `https://learn.microsoft.com/en-us/style-guide/welcome/`
  - `https://learn.microsoft.com/en-us/style-guide/procedures-instructions/writing-step-by-step-instructions`
  - `https://learn.microsoft.com/en-us/style-guide/grammar/verbs`
  - `https://learn.microsoft.com/en-us/style-guide/word-choice/use-simple-words-concise-sentences`

## Current Gaps In The Local Authoring Skill

The current `page-authoring/SKILL.md` is already strong on:
- repo-specific MDX constraints
- frontmatter
- component usage
- Mermaid and divider conventions
- terminology and reviewer comment patterns

The main gaps are:
- document intent before drafting
- stronger separation between page types
- reusable modular patterns for concept/how-to/reference content
- sentence-level clarity and self-editing rules
- more explicit procedure-writing rules
- stronger anti-filler and anti-marketing language guidance
- stronger final review bar for usefulness
- a clear rule for positive definitions instead of definition by negation

## Recommended Upgrades

| ID | Recommendation | Effort | Impact | Main sources |
|---|---|---:|---:|---|
| R1 | Add a mandatory pre-draft brief: audience, page type, reader question, prerequisites, what this page excludes, and next action after reading | S | H | Zocomputer, Google Audience, Diataxis |
| R2 | Convert page-type guidance into a routing test with anti-mixing rules for tutorial, how-to, concept, and reference pages | M | H | Diataxis, Red Hat |
| R3 | Introduce modular section templates for concept, procedure, and reference sections so pages can be assembled from reusable blocks | M | H | Red Hat Modular Documentation |
| R4 | Strengthen the opening paragraph contract so the first 2-3 sentences state the problem, answer, scope, and handoff | S | H | Sentry, Google |
| R5 | Add sentence-level clarity rules: short sentences, active voice, strong verbs, explicit subjects, and self-edit checks | S | H | Google, Microsoft |
| R6 | Add explicit procedure-writing rules: one action per step, imperative voice, prerequisites, expected outcome, and step-count discipline | M | H | Microsoft, Red Hat |
| R7 | Add explicit reference-page rules: no persuasion, no narrative filler, use definitions, option tables, parameters, and exact values | S | M | Diataxis, Red Hat |
| R8 | Add a heading quality standard with weak/strong examples; headings should state the point, not just name a topic | S | M | Metabase, Microsoft |
| R9 | Add a banned filler and marketing-word list | S | M | Metabase, Sentry, Zocomputer |
| R10 | Add a positive-definition rule: define what something is first; only add a boundary sentence if needed | S | H | Google Words, internal need |
| R11 | Add a trade-offs and limitations rule for concept, architecture, and economics pages | S | H | Sentry, Diataxis |
| R12 | Add a final usefulness gate: would an operator bookmark, send, or act on this page? | S | H | Sentry, Metabase |
| R13 | Add terminology onboarding rules: define unfamiliar terms on first use or link to the glossary | S | M | Google Words, Microsoft |
| R14 | Add a reader-language-over-internal-jargon rule unless the protocol term is required | S | M | Google Audience, Microsoft |
| R15 | Add explicit non-goals: no conversion copy, no blog voice, no urgency language, no rhetorical questions in technical docs | S | M | Zocomputer, Sentry |

## Detailed Recommendations

### R1. Add A Mandatory Pre-Draft Brief

Add a short required planning block before page drafting begins:

- `pageType`
- `reader persona`
- `reader question`
- `what the page must help the reader do or understand`
- `what the page explicitly excludes`
- `required primary sources`
- `expected next action after this page`

Why:
- This reduces scope drift before writing starts.
- It brings the skill closer to Diataxis and Google’s audience-first framing.
- It creates a cleaner handoff into section planning.

Suggested effort:
- `S`

Suggested insertion point:
- before or inside the current page-types section

### R2. Turn Page Types Into A Routing Test

Current page types are useful, but still too descriptive. Upgrade them into decision rules:

- `Tutorial`: learning by doing, minimum viable path, one clear success condition
- `How-to`: task completion, operational outcome, assumes basic context
- `Concept`: explanation, system understanding, trade-offs, no long procedures
- `Reference`: exact details, values, flags, schemas, no motivational framing

Add anti-mix checks such as:
- tutorials should not contain long taxonomy sections
- concept pages should not contain numbered step sequences unless they are minimal examples
- reference pages should not open with persuasive or motivational copy
- how-to pages should not begin with long historical framing

Why:
- This is the most useful Diataxis improvement for the current skill.

Suggested effort:
- `M`

### R3. Add Modular Documentation Patterns

Adapt Red Hat’s concept/procedure/reference module model into MDX-friendly authoring rules:

- `Concept block`: what it is, how it works, why it matters, key boundaries
- `Procedure block`: prerequisites, steps, verification, next step
- `Reference block`: exact values, flags, compatibility notes, constraints

This does not need Red Hat’s AsciiDoc mechanics. It does need the reusable structure logic.

Why:
- It improves consistency across guides.
- It helps split large pages into clearer reusable sections.

Suggested effort:
- `M`

### R4. Strengthen The Intro Contract

Replace the current soft “narrative intro” guidance with a harder pattern:

1. sentence 1: what the page is about
2. sentence 2: what decision, task, or concept the page resolves
3. sentence 3: the key constraint, audience, or handoff

Optional:
- a short boundary sentence if readers commonly misread the topic

Why:
- Sentry’s strongest contribution is sharper intros with faster reader payoff.

Suggested effort:
- `S`

### R5. Add Sentence-Level Clarity Rules

Add a compact editing section with rules such as:

- prefer short sentences
- prefer active voice
- use strong verbs over vague verbs
- avoid stacked nouns and abstract filler
- replace ambiguous pronouns with explicit nouns when needed
- remove hedging that does not add truth

Add a self-edit pass:
- can any sentence lose 20% of its words without losing meaning?
- does each paragraph have one dominant point?
- does each sentence identify who or what performs the action?

Why:
- Google and Microsoft are both strong here, and the local skill is currently lighter on sentence mechanics.

Suggested effort:
- `S`

### R6. Add Procedure-Writing Discipline

For tutorial and how-to content, add rules:

- use imperative verbs
- one action per numbered step
- put location before action when required
- include prerequisites before steps, not buried mid-flow
- include verification after non-trivial procedures
- prefer seven steps or fewer before splitting a procedure
- use bullet format for single-step instructions if the page pattern requires consistency

Why:
- Microsoft’s procedures guidance is directly useful for Livepeer setup and operations pages.

Suggested effort:
- `M`

### R7. Add A Stronger Reference-Page Contract

Reference pages should:
- define the object
- list exact fields, flags, values, or behaviours
- show supported examples
- separate facts from guidance

Reference pages should not:
- sell the feature
- open with marketing claims
- narrate a long story before the data

Why:
- The current skill is better on concepts and guides than on pure reference discipline.

Suggested effort:
- `S`

### R8. Add Heading Quality Examples

Add explicit weak/strong heading examples:

- weak: `Overview`
- strong: `Routing Model`

- weak: `Important Notes`
- strong: `Failure Modes`

- weak: `Things To Consider`
- strong: `Cost Drivers`

Why:
- “keep headings concise” is not enough by itself.
- Metabase-style review discipline is strongest when there are concrete examples.

Suggested effort:
- `S`

### R9. Add A Banned Filler And Marketing List

Candidate list to ban or strongly discourage in technical docs:

- `simply`
- `just`
- `seamless`
- `robust`
- `powerful`
- `leverage`
- `unlock`
- `intuitive`
- `easy`
- `best-in-class`
- `in this guide, we will`

Rule:
- If the adjective does not add measurable meaning, remove it or replace it with a fact.

Suggested effort:
- `S`

### R10. Add A Positive-Definition Rule

Specific addition requested for the authoring guide.

Rule:
- Avoid defining a concept mainly by saying what it is not.
- Define positively first.
- Add a boundary sentence only if it prevents a known misreading.

Preferred pattern:
- broader class first
- then distinguishing characteristic
- then optional boundary sentence

Working formula:
- `X is [broader class] that [distinguishing function].`
- optional follow-up: `It does not [common misreading].`

Avoid:
- `BYOC is a routing and policy concern, not a model hosting concern.`

Prefer:
- `BYOC handles workload routing and policy across external compute.`
- `BYOC is the gateway layer for routing jobs and applying policy to external compute.`
- `BYOC controls workload routing, placement, and policy across operator-managed compute.`

If a contrast is still necessary:
- `BYOC defines routing and policy for external compute. It does not define model hosting.`

Why:
- Negative definitions are useful as a secondary boundary, but weak as the primary explanation.
- Positive definition improves clarity and leaves less cognitive work for readers.

Suggested effort:
- `S`

### R11. Require Trade-Offs And Limitations

For concept, architecture, economics, and setup-options pages, require at least one explicit section or paragraph covering:

- constraints
- trade-offs
- failure modes
- when not to use this pattern

Why:
- This pushes pages away from one-sided or overly polished explanations.
- Sentry’s guidance is particularly strong here.

Suggested effort:
- `S`

### R12. Add A Usefulness Gate

Add a final review question:

- Would a real operator bookmark this page, share it with a teammate, or act on it immediately?

If not, ask:
- is it too generic?
- is it duplicating another page?
- is it missing the decisive detail, example, or diagram?

Suggested effort:
- `S`

### R13. Add Terminology Onboarding Rules

When a term may be unfamiliar:
- define it on first use
- or link to a glossary definition
- or rewrite with reader-familiar language first, then introduce the precise term

Why:
- This fits Google’s terminology guidance and reduces glossary-only comprehension.

Suggested effort:
- `S`

### R14. Prefer Reader Language Over Internal Language

Rule:
- prefer the term readers already use unless a protocol-specific term is required for correctness
- if a precise protocol term is required, introduce it after the plain-language explanation

Why:
- This keeps pages technically correct without sounding internally optimised.

Suggested effort:
- `S`

### R15. Add Explicit Non-Goals

Document what the authoring skill is not trying to do:

- not blog writing
- not conversion copy
- not product marketing
- not launch-announcement tone
- not rhetorical-question-led thought leadership copy

Why:
- This prevents skill drift when importing good ideas from blog or copywriting sources.

Suggested effort:
- `S`

## Suggested New Sections For `page-authoring/SKILL.md`

Potential structure changes for the later full pass:

1. `Document Brief`
2. `Page Type Routing`
3. `Reusable Module Patterns`
4. `Openings`
5. `Procedure Writing`
6. `Reference Writing`
7. `Sentence-Level Clarity`
8. `Positive Definitions And Boundary Sentences`
9. `Review Gates`

## Notes On The Specific “Definition By Negation” Addition

Useful local terminology for the skill:

- `definition by negation`
- `qualifying copy`
- `scope-clarifying contrastive copy`
- `positive definition`
- `affirmative definition`

Recommended wording for the future skill:

- Define concepts positively first.
- Use contrast only as a secondary boundary, not as the primary definition.
- If you need contrast, use a two-sentence pattern: positive definition first, boundary sentence second.

Example pattern:

```md
Prefer:
X is [broader class] that [distinguishing function].

Optional boundary:
It does not [common misreading].
```

## Provisional Priorities

Highest-value low-effort items for the first future pass:

1. `R1` pre-draft brief
2. `R4` stronger intro contract
3. `R5` sentence-level clarity rules
4. `R9` banned filler/marketing list
5. `R10` positive-definition rule
6. `R12` usefulness gate

Highest-value medium-effort items for the second pass:

1. `R2` page-type routing test
2. `R3` modular section templates
3. `R6` procedure-writing discipline
