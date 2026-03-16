# Docs Copy Framework

This skill set packages the Livepeer copy and content governance framework into reusable skill files, reference lists, and invocation guidance for drafting, review, and diagnostic work across operator-facing docs.

## Start here

- Load `SKILL.md` first for the layer map and task-to-skill routing.
- Use `reference/invocation-guide.md` when you need the shortest path to the right skill combination.

## L0-L8 summary

| Layer | Name | When it runs |
|---|---|---|
| L0 | Value Proposition Definition | Before brief is written |
| L1 | Persona Path Mapping | Before brief is written |
| L2 | Content Sequence Rules | Before drafting |
| L3 | Paragraph Rules | During drafting |
| L4 | Sentence Banned List | During drafting and review |
| L5 | Publish Gate | Before merge |
| L6 | Iteration Diagnostic Loop | After first failed gate |
| L7 | Pattern Observer | After second failed gate or pattern recurrence |
| L8 | Repair Routing | Output of L7 |

## File index

| File | Layer | Purpose |
|---|---|---|
| `SKILL.md` | Index | Root loader for the framework and task routing |
| `README.md` | Index | Overview, layer summary, and file index |
| `skills/copy-rules.md` | L4 | Sentence-level banned words, phrases, and constructions |
| `skills/structure-rules.md` | L2-L3 | Page sequence, paragraph, decision-aid, and action-path rules |
| `skills/value-prop-check.md` | L0 | Pre-brief value proposition gate |
| `skills/persona-routing.md` | L1 | Functional routing rules for multi-profile pages |
| `skills/review-gate.md` | L5 | Publish gate checklist and escalation rules |
| `skills/iteration-diagnostic.md` | L6 | Failed-review diagnostic and repair routing |
| `skills/pattern-observer.md` | L7 | Cross-page recurrence interpretation and escalation |
| `skills/skill-docs.md` | Documentation | Required structure for skill-file authoring |
| `reference/banned-words.txt` | Reference | Exact banned word list used by copy governance |
| `reference/banned-phrases.txt` | Reference | Exact banned phrase list used by copy governance |
| `reference/invocation-guide.md` | Reference | Single-skill and multi-skill loading guide |

## Invocation guide

| Task | Load |
|---|---|
| Write a new brief | `skills/value-prop-check.md`, then `skills/persona-routing.md` |
| Draft or redraft a page | `skills/value-prop-check.md`, `skills/structure-rules.md`, `skills/copy-rules.md` |
| Review prose only | `skills/copy-rules.md` |
| Review structure only | `skills/structure-rules.md` |
| Run a pre-merge gate | `skills/review-gate.md` |
| Diagnose repeated review failures | `skills/iteration-diagnostic.md` |
| Interpret recurring patterns across pages | `skills/pattern-observer.md` |
| Create or edit a skill file | `skills/skill-docs.md` |
