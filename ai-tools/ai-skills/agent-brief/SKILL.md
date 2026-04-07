---
name: agent-brief
description: >-
  Standard instruction template for spawned sub-agents. Defines the brief format every
  agent receives: thread context, scope, quality contract, return format, and failure
  protocol. Use when composing agent prompts in /research, /build, or any skill that
  delegates to background agents. Ensures agents self-validate, recommend rather than
  list, and return structured output the main thread can synthesise.
metadata:
  version: "1.0"
  category: process
  status: "draft"
---

# SKILL: Agent Brief — Standard Agent Instruction Template

Every spawned agent receives a brief built from this template. No ad-hoc prompts. The brief is the contract between the main thread and the agent.

---

## When to use

- Every time the main thread spawns a sub-agent (via `/research`, `/build`, `/dispatch`, or direct spawn)
- When composing the `prompt` parameter for the Agent tool

## When NOT to use

- For the main thread's own behaviour — that's governed by `/thread`, `/research`, `/design`, `/build`, `/iterate`, `/pm`

---

## The Brief Template

Every agent prompt must include these 6 sections, in this order. The main thread fills in the bracketed values.

```
## Context
Thread outcome: [one sentence — what the session is trying to achieve]
Your task serves this because: [one sentence — how this agent's work connects]

## Task
[Concrete description of what this agent must do. One paragraph max.]

## Scope
Read: [exact file paths or directory patterns]
Produce: [exact output path or return format]
Do NOT: [explicit boundaries — files not to touch, actions not to take]

## Quality contract
1. Read every assigned source completely — do not skim or sample
2. Self-validate before returning: check your output against the task description point by point
3. If you make a claim, cite the source (file path + line or section)
4. If you form an opinion, state your reasoning — never assert without explaining why
5. If you find something unexpected or contradictory, flag it explicitly — do not silently resolve it
6. Recommend an approach where relevant — "here's what I found" without "here's what I think it means" is incomplete

## Return format
[Specify the exact structure the main thread expects. Examples below.]

## File output
If this task produces a file, write to:
  Path: [exact path — never root, always grouped by concern]
  Convention: workspace/thread-outputs/{skill}/{topic}-{type}.md
Do NOT write files to repo root. Propose location with reasoning if no path is specified.

## Platform and style constraints
If this task involves MDX or JSX: read `docs-guide/canonical/collation-data/Mintlify/mintlify-repo-best-practices.md` first.
If this task involves component or script files: read `workspace/thread-outputs/research/component-script-placement-reference.md` first.
If this task involves writing or editing prose content: follow these rules from CLAUDE.md:
  - UK English: -ise, -our, -re endings
  - No em dashes — rewrite or use hyphens
  - No questions in headings or body
  - Banned words: effectively, essentially, basically, meaningful, significant, various, several, simply, obviously, clearly, just
  - Headings: name the thing, no questions, 3-6 words
  - Define domain terms at first use (pool worker, active set, probabilistic micropayments, etc.)
  - Full voice rules: `workspace/plan/active/CONTENT-WRITING/Prompts/voice-rules.md`
  - Full review standards and frontmatter requirements: `ai-tools/ai-skills/page-authoring/SKILL.md`
Do NOT suggest imports, patterns, or file placements that violate these references.

## Verification (if task modifies MDX or JSX)
After completing the task, verify changes render:
```bash
node operations/tests/integration/mdx-component-runtime-smoke.js --routes /v2/path/to/changed-page
```
If verification fails, include the error in your return. Do NOT report success without verifying.
For visual checks, start a scoped dev server in its OWN background process — never hijack an existing session:
`lpd dev --scoped --scope-prefix v2/relevant-path`

## Failure protocol
If any of these are true, STOP and return immediately with what's wrong:
- A required source file does not exist at the specified path
- The task depends on a prior output that is missing or empty
- The scope is ambiguous and could be interpreted multiple ways
- You cannot complete the task to the quality standard above
- You have attempted the same approach twice and it has failed both times

Return: DEPENDENCY FAILED: [what's missing or wrong]
Do NOT produce partial output. Do NOT guess. Do NOT retry the same approach. Return the failure clearly so the main thread can fix the dependency and re-run.
```

---

## Return Format Examples

The main thread chooses the format based on the skill invoking the agent.

### For `/research` agents — Findings Brief

```
## Findings: [topic]

### Answers
[Question 1]: [answer with source citation]
[Question 2]: [answer with source citation]

### Patterns
[Cross-source patterns, contradictions, gaps]

### Recommendation
[What this agent thinks the findings mean — with reasoning]

### Unexpected
[Anything found that wasn't asked for but matters]
```

### For `/build` agents — Build Report

```
## Build: [deliverable]

### What was built
[Description of output]

### Output location
[Exact path]

### Self-validation
[Criterion 1]: PASS/FAIL — [evidence]
[Criterion 2]: PASS/FAIL — [evidence]

### Issues
[Anything that doesn't meet criteria, or tech debt created]

### Recommendation
[What the main thread should know before accepting this output]
```

### For audit/review agents — Review Report

```
## Review: [what was reviewed]

### Pass (N items)
- [item]: [evidence it passes]

### Fail (N items)
- [item]: [what's wrong] — [suggested fix]

### Out of scope
[Items found that belong to a different thread/tab/phase]

### Recommendation
[Overall assessment + recommended next action]
```

---

## How the main thread uses this skill

When composing an agent spawn in `/research` or `/build`:

1. Fill in the template with specific values for this agent
2. Choose the return format that matches the invoking skill
3. Include the quality contract verbatim — do not abbreviate or paraphrase it
4. Add any task-specific instructions after the template sections

### Example: research agent for glossary scope investigation

```
## Context
Thread outcome: Resolve the 8 blocking decisions for orchestrators tab
Your task serves this because: BD8 (two-glossary scope gap) needs evidence before Alison can decide

## Task
Read both glossary files and determine: what terms are in each, what overlaps,
what's unique to each, and whether they serve different purposes or are duplicates.

## Scope
Read: v2/orchestrators/resources/glossary.mdx, v2/orchestrators/resources/compendium/glossary.mdx
Produce: return as Findings Brief (inline, not to file)
Do NOT: modify either file, read files outside these two paths

## Quality contract
[verbatim from template]

## Return format
Findings Brief (see template above)

## Failure protocol
[verbatim from template]
```

---

## Composing for parallel agents

When spawning multiple agents in a batch, each agent gets its own brief. The briefs share:
- Same **Context** section (thread outcome is the same for all)
- Same **Quality contract** (non-negotiable)
- Same **Failure protocol** (non-negotiable)

They differ in:
- **Task** (each agent has a different job)
- **Scope** (each agent reads different files)
- **Return format** (may vary if agents serve different purposes)

The main thread must be able to synthesise all agent returns into a single output. If the return formats are inconsistent, synthesis is harder. Use the same return format across a batch unless there's a good reason not to.

---

## Anti-patterns

1. **Ad-hoc prompts.** "Read these files and tell me what you find" without scope, quality contract, or return format. Produces inconsistent, unsynthesisable output.
2. **Missing failure protocol.** Agent encounters a missing file, guesses at content, produces confident-sounding garbage. The failure protocol prevents this.
3. **No thread connection.** Agent does good work that doesn't serve the session outcome. The Context section prevents this.
4. **Abbreviated quality contract.** "Do a good job" instead of the 6-point contract. The specific points exist because each one addresses a documented failure mode.
5. **No self-validation.** Agent returns output without checking it against the task. Main thread discovers errors during synthesis — too late, wastes the whole batch.

---

## Principles

1. **The brief is the contract.** If the brief doesn't specify it, the agent doesn't have to do it. If the brief does specify it, the agent must do it. Be explicit.
2. **Quality contract is non-negotiable.** Every agent gets all 6 points. No shortcuts. These exist because agents without them produce the failure patterns documented in ai-issues.md.
3. **Fail fast, fail clearly.** An agent that returns "DEPENDENCY FAILED" is more valuable than an agent that returns plausible-looking output built on a missing input.
4. **Structured returns enable synthesis.** The main thread must combine N agent outputs into one coherent brief. Consistent structure makes this possible. Ad-hoc structure makes it a guessing game.
5. **Context prevents drift.** An agent that knows the thread outcome can flag when its findings are tangential. An agent without context can't distinguish signal from noise.

---

## Status: Draft — Testing in production

Known limitations updated after each real use.

### Known limitations
- Not yet tested with real agent spawns

### Test log
| Date | Used on | Worked | Didn't | Changes |
|---|---|---|---|---|
