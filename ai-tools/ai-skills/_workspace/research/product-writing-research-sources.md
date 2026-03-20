# Product Writing Research Sources

## Purpose

This report records the sources used to shape the product-writing skill package and separates:

- source-backed framework guidance
- public skill patterns
- local rules discovered during this chat

That separation matters because several bad lines generated during this review were **not** taken from the source material. They were local synthesis errors and should be documented as such.

## Source Stack

### 1. Diataxis

Source:

- [Diataxis](https://diataxis.fr/)
- [The map](https://diataxis.fr/the-map/)

What it contributed:

- page-type discipline
- tutorial / how-to / reference / explanation separation
- anti-mixing rules

What it did **not** contribute:

- prompt-style opening phrases
- sentence-level tone rules
- operator-economics wording

### 2. Google Technical Writing

Source:

- [Google Technical Writing](https://developers.google.com/tech-writing)
- [Audience](https://developers.google.com/tech-writing/one/audience)
- [Short sentences](https://developers.google.com/tech-writing/one/short-sentences)
- [Words](https://developers.google.com/tech-writing/one/words)
- [Editing](https://developers.google.com/tech-writing/two/editing)

What it contributed:

- write for the reader's actual question
- define terms clearly
- prefer direct wording
- cut filler
- edit hard

What it did **not** contribute:

- `Start with the hardware question`
- `Think about`
- `Ask whether`
- analogy-led operator intros

### 3. Microsoft Writing Style Guide

Source:

- [Microsoft Writing Style Guide](https://learn.microsoft.com/en-us/style-guide/welcome/)
- [Writing step-by-step instructions](https://learn.microsoft.com/en-us/style-guide/procedures-instructions/writing-step-by-step-instructions)
- [Verbs](https://learn.microsoft.com/en-us/style-guide/grammar/verbs)
- [Use simple words and concise sentences](https://learn.microsoft.com/en-us/style-guide/word-choice/use-simple-words-concise-sentences)

What it contributed:

- direct verbs
- concise wording
- procedural clarity
- reader-facing clarity

What it did **not** contribute:

- consumer-ish decision language
- chatty evaluator language
- soft qualifier-led openings

### 4. Red Hat Modular Documentation

Source:

- [Red Hat Modular Documentation](https://redhat-documentation.github.io/modular-docs/)

What it contributed:

- concept / procedure / reference separation
- reusable module logic

What it did **not** contribute:

- sentence-level operator copy patterns
- intro wording for business-case pages

### 5. DITA / OASIS

Source:

- [DITA](https://dita-lang.org/)

What it contributed:

- information typing and reuse as a systems concern

What it did **not** contribute:

- daily sentence writing patterns
- tone examples for this Livepeer use case

## Public Skill Examples

### Metabase docs-review

Source:

- [Metabase docs-review SKILL.md](https://raw.githubusercontent.com/metabase/metabase/master/.claude/skills/docs-review/SKILL.md)

Useful imports:

- practical doc critique
- anti-filler review stance
- clear editorial checks

Not imported:

- Metabase-specific tone or repo assumptions

### Metabase shared style guide

Source:

- [Metabase shared style guide](https://raw.githubusercontent.com/metabase/metabase/master/.claude/skills/_shared/metabase-style-guide.md)

Useful imports:

- concrete style heuristics
- anti-noise editing patterns

Not imported:

- company-specific phrasing

### Sentry blog-writing-guide

Source:

- [Sentry blog-writing-guide](https://raw.githubusercontent.com/getsentry/skills/main/plugins/sentry-skills/skills/blog-writing-guide/SKILL.md)

Useful imports:

- stronger openings
- usefulness threshold
- sharper editorial self-critique

Not imported:

- blog cadence
- thought-leadership tone
- rhetorical flourish

### Zocomputer copywriting

Source:

- [Zocomputer copywriting SKILL.md](https://raw.githubusercontent.com/zocomputer/skills/main/External/copywriting/SKILL.md)

Useful imports:

- audience framing
- pre-draft brief logic

Not imported:

- conversion style
- CTA logic
- persuasion framing

## Local Files Consulted

These are local context, not external source of truth:

- `ai-tools/ai-skills/page-authoring/SKILL.md`
- `ai-tools/ai-skills/copywriting-research.md`
- `v2/resources/documentation-guide/authoring-standard.mdx`
- `v2/resources/documentation-guide/style-guide.mdx`

## Explicit Non-Sources

The following lines or patterns were generated during this chat and should be treated as **mistakes to ban**, not as source-backed recommendations:

- `Start with the hardware question`
- `Model the node the same way you would any other unit of infrastructure`
- `then subtract`
- `not passive yield`
- any other prompt-like or coaching-style prose in published copy

## What The Sources Support

The combined sources support these conclusions:

- separate page intent from sentence writing
- separate sentence writing from editorial quality-gating
- write for the reader's concrete question
- remove filler and vague abstraction
- avoid mixing explanation, procedure, and reference modes

## What This Chat Added

This chat added local rules the sources did not state in these exact words:

- operator-economics pages need variable-first openings
- hardware-evaluation pages should not open with unexplained token terms
- qualifier-led openings are a major AI failure mode
- prompt scaffolding must be banned from published prose

## Conclusion

The report package should therefore combine:

- framework-backed structure
- public-skill-backed editorial patterns
- locally discovered bans based on the specific failures surfaced in this paragraph review
