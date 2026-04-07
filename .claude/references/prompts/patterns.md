# Prompts — Patterns

> Extracted rules linked to repo context. Apply these when writing any prompt.

---

## Pattern 1: Context block with required fields

Every prompt starts with a context block that forces specific inputs. Vague inputs produce vague outputs.

```markdown
## Context block
DOCS PLATFORM:        [Mintlify / Docusaurus / other]
TARGET TAB/SECTION:   [the tab being designed]
AUDIENCE:             [primary persona(s)]
VOICE REFERENCE:      [register, language, constraints]
```

**Linked to:** `prompts/exemplars.md` → Page Content / IA Research Prompt

---

## Pattern 2: Diagnosis before generation

Understand the problem before proposing solutions. State:
- Reader question
- Primary distinction
- Correct conceptual layer
- Surface labels to avoid

**Linked to:** `prompts/exemplars.md` → Section Naming Prompt

---

## Pattern 3: Multiple candidates required

Generate 12+ candidates. Prevents first-plausible-answer lock-in.

**Linked to:** `prompts/exemplars.md` → Section Naming Prompt

---

## Pattern 4: Scoring rubric

Objective criteria, not subjective preference. Score on 3-5 axes, total out of a fixed number.

Example: Precision /5, Depth /5, Stability /5, Clarity /5, Brevity /5 = /25

**Linked to:** `CONTENT-WRITING/Prompts/Good prompt references/section-naming.md`

---

## Pattern 5: Explicit penalties

Name the failure modes and penalise them. Not "prefer good titles" — "penalise literal contrast labels, comparators, generic umbrellas, taxonomy mismatches".

**Linked to:** `CONTENT-WRITING/Prompts/Good prompt references/section-naming.md`

---

## Pattern 6: Structured output format

Force consistent, comparable, reviewable results. The output format is part of the prompt.

```markdown
## Output
Best title:
Why it wins:
Why weaker alternatives fail:
```

**Linked to:** `prompts/exemplars.md` → all three prompts

---

## Pattern 7: Problem statement

What specific problem does this prompt solve? One sentence. If you can't state it, the prompt is too vague.

**Linked to:** `prompts/exemplars.md` → Content Placement Prompt ("This is a placement problem, not a design problem")

---

## Pattern 8: When to use / when NOT to use

Prevents misapplication. Every prompt needs both.

**Linked to:** All skills in `ai-tools/ai-skills/`

---

## Pattern 9: Methodology, not instructions

Teach thinking, not just doing. A good prompt changes how the runner approaches the problem, not just what they output.

**Linked to:** `prompts/exemplars.md` → "what makes a good prompt" section

---

## Quick checklist (apply to every prompt)

- [ ] Context block with required fields
- [ ] Problem statement in one sentence
- [ ] Diagnosis step before generation
- [ ] Multiple candidates required (not first-answer)
- [ ] Scoring rubric with objective criteria
- [ ] Explicit penalties for failure modes
- [ ] Structured output format
- [ ] When to use / when NOT to use