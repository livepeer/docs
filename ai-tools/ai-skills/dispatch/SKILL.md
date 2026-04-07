---
name: dispatch
description: >-
  Parallel agent batch coordinator. Proposes agent batches with scopes, spawns on approval,
  synthesises results into a single rollup. Built on /agent-brief for instruction quality.
  Use for batch audits, multi-directory scans, parallel quality checks, or any work that
  can be split into independent parallel agents.
metadata:
  version: "1.0"
  category: process
  status: "draft"
---

# SKILL: Dispatch — Parallel Agent Coordinator

Dispatch manages parallel agent batches. It proposes, the user approves, agents run in background, results get synthesised. The main thread stays free throughout.

---

## When to use

- Auditing multiple directories or files in parallel
- Running the same check across many pages
- Any task that can be split into independent, parallel subtasks
- When the user says "audit these", "check all of", "run across"

## When NOT to use

- Tasks with dependencies between subtasks (sequential, not parallel)
- Single-file operations (just do them directly)
- When you need to understand the full picture before acting (use `/research` first)

---

## Step 1: Define the batch

Propose the batch with:

```
Dispatch batch: [purpose]

Total agents: [N]
Scope per agent: [what each one reads/does]
Return format: [same format for all — from /agent-brief templates]

Agent 1: [name/label]
  Reads: [paths]
  Produces: [output or return]

Agent 2: [name/label]
  Reads: [paths]
  Produces: [output or return]

...

All agents are independent — launching in parallel.
Estimated: [N agents × scope description]

Waiting for go.
```

Wait for explicit approval. Do not launch on description alone.

---

## Step 2: Compose briefs

Every agent receives a full `/agent-brief`. All agents in the batch share:

- **Same Context** (thread outcome)
- **Same Quality contract** (all 6 points, verbatim)
- **Same Return format** (critical for synthesis)
- **Same Failure protocol**

They differ in:
- **Task** (each agent has a different scope)
- **Scope** (each reads different files)

Use the same return format across the entire batch. Inconsistent formats make synthesis impossible.

---

## Step 3: Launch

All agents launch in a **single message** — never sequentially unless one depends on another's output.

Main thread stays free. Report:

```
Dispatched [N] agents. Main thread is free — agents running in background.
```

---

## Step 4: Collect and validate

As agents return:

1. Read each agent's output immediately
2. Check against quality contract — did the agent self-validate? Are claims cited?
3. Flag any agents that returned DEPENDENCY FAILED
4. Flag any agents whose output doesn't match the expected return format

```
Agent [N] returned:
  Status: complete / dependency-failed / format-mismatch
  Key findings: [1-2 sentences]
  Issues: [none / describe]

[M/N] agents complete. [Waiting for remaining / All done.]
```

---

## Step 5: Synthesise into rollup

After all agents complete, synthesise — do not concatenate.

### Rollup structure

```
## Dispatch Rollup: [purpose]

### Summary
[3-5 sentences: what the batch found overall. Patterns, not per-agent repetition.]

### Cross-agent patterns
[Findings that appear across multiple agents. These are the signal.]

### Per-agent highlights
[Only notable items — not every finding from every agent. Just what matters.]

### Recommendation
[Based on the full picture: what to do next, what to prioritise, what to investigate further.]

### Failed agents
[Any that returned DEPENDENCY FAILED or format-mismatch, with what went wrong.]
```

Write the rollup to `workspace/thread-outputs/dispatch/{purpose}-rollup.md`.

---

## Step 6: Propose next action

Based on the rollup:

- If findings need decisions: "These [N] items need your call. Recommend addressing [top priority] first."
- If fixes are clear: "Recommend `/build` to execute these [N] fixes."
- If more investigation needed: "Recommend `/research` on [specific gap]."
- If design is needed: "The findings suggest [X] needs rethinking. Recommend `/design`."

---

## Anti-patterns

1. **Sequential agents.** If they're independent, launch them in parallel. Sequential dispatch defeats the purpose.
2. **Inconsistent return formats.** One agent returns a list, another returns prose, a third returns JSON. Synthesis becomes guesswork. Same format for the whole batch.
3. **No synthesis.** Pasting agent outputs together is not a rollup. Identify cross-agent patterns — that's where the insight is.
4. **Too many agents.** More than 8-10 agents in a batch makes synthesis unwieldy. Split into sub-batches if the scope is larger.
5. **Launching without approval.** Always propose the full batch and wait for go. The user may want to adjust scope, add agents, or reduce the batch.

---

## Principles

1. **Parallel by default.** The point of dispatch is speed through parallelism. If tasks aren't independent, use a different skill.
2. **Synthesis over concatenation.** The rollup must add value beyond what the raw agent outputs provide. Cross-agent patterns are the signal.
3. **Main thread stays free.** The user can talk, think, redirect while agents work. Never block the thread waiting for agents.
4. **Same format, every agent.** This is non-negotiable for synthesis. Pick one return format and use it for the whole batch.
5. **Agent-brief is the contract.** Every agent gets a full brief. No shortcuts, no ad-hoc prompts.

---

## Status: Draft — Testing in production

Known limitations updated after each real use.

### Known limitations
- Not yet tested on a real dispatch batch

### Test log
| Date | Used on | Worked | Didn't | Changes |
|---|---|---|---|---|
