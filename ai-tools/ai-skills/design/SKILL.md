---
name: design
description: >-
  First-principles co-creation skill. Claude proposes architecture based on principles and
  best practice, user shapes it, they iterate together. No execution — pure thinking mode.
  Output is an architecture doc with problem statement, principles, structure, trade-offs,
  and test criteria. Use before building anything non-trivial.
metadata:
  version: "1.0"
  category: process
  status: "draft"
---

# SKILL: Design — First-Principles Co-Creation

Design is thinking, not building. No file edits. No code. No implementation details. The output is an architecture that is good enough to build from and test against.

---

## When to use

- Before building anything that will touch multiple files or create structure
- When the current approach has accumulated tech debt and needs rethinking
- When the user says "how should this work?" or "let's figure this out"
- After `/research` delivers a brief and the next step is to design a solution

## When NOT to use

- Quick fixes or single-file changes
- When a design already exists and just needs executing (use `/build`)
- When more research is needed before designing (use `/research`)

---

## Step 1: State the design problem

One sentence. What are we designing and why.

```
Design problem: [what needs to exist that doesn't, or what needs to change]
```

If the problem statement is vague, sharpen it before proceeding. A vague problem produces a vague design.

---

## Step 2: Propose principles

Before any structure, state the principles that will govern the design. These come from:

- **The project's own standards** — CLAUDE.md, Frameworks.mdx, voice-rules, locked decisions
- **Domain best practice** — information architecture, content strategy, documentation engineering, project management
- **First principles** — what must be true for this to work, regardless of what exists now

### Format
```
Principles:
1. [Principle] — because [reasoning]
2. [Principle] — because [reasoning]
...
```

3-7 principles. More than 7 means the problem needs splitting.

Challenge your own principles: "The risk with principle N is..." State the trade-off explicitly.

---

## Step 3: Propose structure

Based on the principles, propose how the thing should be organised. This is architecture, not implementation.

- **Components** — what are the parts?
- **Relationships** — how do they connect?
- **Flow** — what order do things happen in?
- **Boundaries** — what is in scope vs out?

Use whatever format fits: a list, a table, a hierarchy. No Mermaid diagrams unless the user asks.

---

## Step 4: Name the trade-offs

Every design makes trade-offs. Name them.

### Format
```
Trade-offs:
1. [What this design sacrifices] — acceptable because [reason]
2. [What this design sacrifices] — acceptable because [reason]
```

If a trade-off is not acceptable, the design needs changing before it ships. Flag it:

```
Open trade-off: [sacrifice]. I don't think this is acceptable because [reason].
Options: [A] or [B]. I'd recommend [X].
```

---

## Step 5: Define test criteria

How will we know if this design works? Concrete, verifiable criteria that `/build` and `/iterate` will test against.

### Format
```
Test criteria:
1. [Specific, verifiable statement] — tested by [method]
2. [Specific, verifiable statement] — tested by [method]
...
```

### Bad criteria
- "It should be good" — not verifiable
- "Users should find it useful" — not testable in this context
- "It follows best practice" — vague

### Good criteria
- "Every page traces to one sub-question of the tab's arriving question — tested by mapping each page to its question"
- "The skill produces a recommendation with reasoning, not a flat list — tested by running it on a real thread and checking output structure"
- "No blocking decision older than 3 days goes unmentioned in the /pm output — tested by comparing output to blocking-items.md"

---

## Step 6: Co-create

This is a conversation, not a presentation. After proposing:

- **Wait for the user to react.** They will push back, redirect, override.
- **Iterate the design in conversation.** Don't defend — adapt. But do explain trade-offs of changes.
- **Challenge when warranted.** If the user's direction contradicts a stated principle, say so: "That works, but it conflicts with principle N — [principle]. Are we dropping that principle, or should we find a way to reconcile?"
- **Don't cave without reasoning.** If Claude thinks the user's direction is a mistake, say: "I'd push back on this because [reason]. But it's your call."

---

## Step 7: Write the architecture doc

Once the design is agreed, write it to a file. Structure:

```markdown
# [Design Name]

## Problem
[One sentence]

## Principles
[Numbered list with reasoning]

## Architecture
[Structure, components, relationships, flow]

## Trade-offs
[What's sacrificed and why it's acceptable]

## Test criteria
[Numbered list with verification method]

## Decisions made
[Any decisions agreed during co-creation, with rationale]
```

## Research gates
[What must be investigated before building. Each gate is a question that must be answered with evidence, not assumptions.]
1. [Question] — answered by [method]

## Skills used
[Which skills each phase uses. Helps the user remember what's available.]
| Phase | Skills | Why |
|---|---|---|
| Research | `/research` | [what it investigates] |
| Build | `/build`, `/verify` | [what it builds and checks] |
| Review | `/iterate` | [what it validates] |

## Phase checkpoints
[For multi-phase plans: what gets verified at the end of each phase before the next one starts. Each checkpoint is a concrete check, not "review output."]
| Phase | Checkpoint | Verification method |
|---|---|---|
| Phase 1 | [what must be true] | [how to verify] |
```

This doc is the input to `/build`. It is the contract. Build must satisfy test criteria. Research gates must be answered before building starts. Phase checkpoints must pass before moving to the next phase. Iterate must test against all three.

### Write checkpoints to phase-gate.jsonl

After writing the architecture doc, append one JSON line per checkpoint to `workspace/thread-outputs/sessions/phase-gate.jsonl`:

```json
{"thread":"[thread name]","phase":1,"check":"[checkpoint description]","verified":false}
{"thread":"[thread name]","phase":2,"check":"[checkpoint description]","verified":false}
```

These feed the phase-gate hook. Once written, every Edit/Write in the repo will show unverified checkpoints until Claude marks them `"verified":true`. The hook fires on every edit — it's a persistent nag, not a one-time reminder.

---

## Principles

1. **Think from principles, not from what exists.** Existing structure may be wrong. Start from what should be true, then reconcile with reality.
2. **Challenge, don't comply.** The user wants a thinking partner, not a yes-machine. If something is a bad idea, say why.
3. **No implementation in design.** File paths, code snippets, and "here's how I'd build it" belong in `/build`. Design is about what and why, not how.
4. **Trade-offs are features, not failures.** Every design trades something. Naming the trade-off honestly is better than pretending it doesn't exist.
5. **Test criteria are the handshake.** If design and build agree on what "done" looks like, the iterate phase has something concrete to test against. Vague criteria produce vague builds.

---

## Status: Draft — Testing in production

Known limitations updated after each real use.

### Known limitations
- Not yet tested on a real design task

### Test log
| Date | Used on | Worked | Didn't | Changes |
|---|---|---|---|---|
