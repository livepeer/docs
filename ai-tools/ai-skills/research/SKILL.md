---
name: research
description: >-
  Agent-delegated investigation with synthesis and recommendation. Spawns background agents
  to gather information while keeping the main thread responsive. Returns a brief with
  findings, analysis, and recommended approach — never a flat list. Use when you need to
  understand something before deciding or building.
metadata:
  version: "1.0"
  category: process
  status: "draft"
---

# SKILL: Research — Investigate and Recommend

Research is not listing. It is reading, synthesising, identifying patterns, and recommending an approach. The output is a brief that a decision-maker can act on, not a dump of what was found.

---

## When to use

- Before any design or build phase — understand the landscape first
- When a blocking decision needs evidence gathered
- When exploring a new area of the codebase or project
- When the user says "I need to understand X"

## When NOT to use

- When the user already knows what they want and just needs it built
- For quick lookups that don't need synthesis (use Grep/Glob directly)

---

## Step 1: Scope the research

Before reading anything, propose:

1. **Questions to answer** — what specifically do we need to know? (3-7 questions, concrete)
2. **Sources to read** — which files, directories, or external references? (exact paths where possible)
3. **Agent plan** — how many agents, what each reads, what each returns

### Format
```
Research scope for: [topic]

Questions:
1. [specific question]
2. [specific question]
...

Sources:
- [path] — answers questions [N, N]
- [path] — answers questions [N, N]

Agent plan:
- Agent 1: reads [X], returns [Y]
- Agent 2: reads [X], returns [Y]

Waiting for go.
```

Wait for approval before spawning.

---

## Step 2: Delegate to agents

On approval, spawn all agents in a single message (parallel, not sequential — unless one depends on another's output).

Agents run in background. Main thread stays free — the user can talk, think, redirect.

**Every agent receives a brief built from `/agent-brief`.** No ad-hoc prompts. Specifically:

- **Context**: thread outcome + how this agent's task serves it
- **Task**: the specific question(s) this agent answers
- **Scope**: exact files to read, what to produce, what not to touch
- **Quality contract**: all 6 points from the agent-brief template (verbatim, not abbreviated)
- **Return format**: Findings Brief (from agent-brief template)
- **Failure protocol**: stop and return immediately if dependencies are missing

Use the same return format across all agents in the batch to enable synthesis in Step 3.

---

## Step 3: Synthesise into a brief

When all agents return, synthesise into a single research brief. Not a concatenation of agent outputs — a synthesis.

### Brief structure

```
## Research Brief: [topic]

### What I found
[Structured findings grouped by theme, not by source file.
Cross-reference between sources. Flag contradictions.]

### What I think it means
[Patterns, gaps, risks, connections.
Bring external knowledge — best practices from content strategy,
information architecture, project management, docs architecture.
State principles that apply.]

### What I'd recommend
[Concrete recommendation with reasoning.
"Based on [finding] and [principle], I'd recommend [approach] because [reason]."
If multiple valid approaches exist, rank them with trade-offs.]

### What needs your decision
[Items where the research doesn't resolve the question.
For each: state what we know, what we don't, and what the options are.
Recommend one, but flag it as your call.]
```

---

## Step 4: Handoff

After delivering the brief:
- If building something: recommend moving to `/design`
- If a decision is needed: present it clearly with recommendation
- If more research needed: propose the follow-up scope

Never hand off without a recommendation. "Here's what I found" without "here's what I think we should do" is incomplete.

---

## Principles

1. **Synthesise, don't summarise.** A summary restates what each source says. A synthesis identifies what the sources mean together.
2. **Bring external knowledge.** Claude has expertise in content strategy, IA, docs architecture, project management. Use it. "Best practice in [field] suggests..." is valuable input, not overstepping.
3. **Recommend with confidence.** The user wants Claude's opinion, not a menu of options with no guidance. Recommend one approach. Explain why. Flag the trade-off.
4. **Flag what's missing.** Good research identifies what it couldn't find as clearly as what it did find. Unknown unknowns are the biggest risk.
5. **Main thread stays free.** The user should never wait for Claude to finish reading. Agents do the reading. Claude does the thinking.

---

## Status: Draft — Testing in production

Known limitations updated after each real use.

### Known limitations
- Not yet tested on a real research task

### Test log
| Date | Used on | Worked | Didn't | Changes |
|---|---|---|---|---|
