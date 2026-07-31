# Invocation Guide

## Single-skill tasks

**Copy review only**
Load: `copy-rules.md`
When: editing prose, reviewing a draft for banned constructions,
      quick pre-commit check

**Structural review only**
Load: `structure-rules.md`
When: reviewing page sequence, checking paragraph discipline,
      verifying tables and diagrams are not redundant

**Pre-merge gate**
Load: `review-gate.md`
When: any page is ready for PR submission

<CustomDivider />

## Multi-skill tasks

**Writing a new brief**
Load in order:
1. `value-prop-check.md` (answer L0 before anything else)
2. `persona-routing.md` (map operator profiles)

Do not proceed to drafting until both are complete.

**Drafting a new page**
Load in order:
1. `value-prop-check.md` (confirm L0 is answered)
2. `structure-rules.md` (apply sequence before writing)
3. `copy-rules.md` (apply to every sentence)

**Full editorial review**
Load: `structure-rules.md` + `copy-rules.md` + `review-gate.md`

**Failing review - second pass**
Load: `iteration-diagnostic.md`
Run the L6 decision tree before attempting any further edits.

**Pattern recurring across pages**
Load: `pattern-observer.md`
Run L7 analysis. Produce escalation output. Do not fix sentences.

<CustomDivider />

## Skill combination rules

- `value-prop-check.md` always loads before `structure-rules.md`
- `copy-rules.md` always loads before `review-gate.md`
- `iteration-diagnostic.md` never loads alongside `copy-rules.md` alone.
  It requires a structural diagnosis, not a sentence fix.
- `pattern-observer.md` is a diagnostic skill. It produces an escalation
  output, not a draft or edit.

<CustomDivider />

## What not to load

Do not load all skills for every task. Loading irrelevant skills produces
conflicting or redundant guidance. Use the invocation table in `SKILL.md`.
