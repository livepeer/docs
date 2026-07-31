---
name: pm
description: >-
  Proactive project management skill. Reads project state, surfaces bottlenecks, recommends
  priorities, identifies risks. Does not passively report status — actively analyses what's
  stuck, what's costing time, and what to do about it. Use at session start, when planning
  work, or when multiple threads need coordination.
metadata:
  version: "1.0"
  category: process
  status: "draft"
---

# SKILL: PM — Proactive Project Management

Project management is not status reporting. It is identifying what matters most, what's stuck, and what to do about it. The output is always a recommendation, not a dashboard.

---

## When to use

- Session start — understand where things stand before doing anything
- When multiple threads or plans need coordination
- When the user asks "what should I work on?" or "where are we?"
- When a blocking decision has been open and needs surfacing
- Periodically during long sessions to check alignment

## When NOT to use

- Mid-execution of a specific task (use `/thread` for drift detection)
- When the user has already stated what they want to work on

---

## Step 1: Read state

Read these files. If the main thread should stay responsive, delegate to a background agent using the `/agent-brief` template:

- **Context**: thread outcome + "gathering project state for PM analysis"
- **Task**: read all 4 state files + recent session log, return structured state summary
- **Scope**: the 4 files below + `.claude/CLAUDE.md` session log section
- **Quality contract**: all 6 points from agent-brief (verbatim)
- **Return format**: structured state dump grouped by: running agents, completed outputs, blocked items, gate status
- **Failure protocol**: if any state file is missing, return which ones and continue with what exists

Files to read:
1. `workspace/plan/active/_Project-Management_/project-state.md`
2. `workspace/plan/active/CONTENT-WRITING/decisions/tab-status.md`
3. `workspace/plan/active/CONTENT-WRITING/decisions/decision-registry.md`
4. `workspace/plan/active/CONTENT-WRITING/decisions/blocking-items.md`

Also scan for any recent session log entries in `.claude/CLAUDE.md`.

---

## Step 2: Analyse — do not just report

Structure the analysis as:

### What's moving
Active work, recent completions, progress since last session. One sentence per item. Only include things that meaningfully advanced.

### What's stuck
Blocked items. For each:
- What's blocked
- How long it's been blocked (use dates, not "a while")
- What it's costing — what downstream work can't start because of this
- Who can unblock it
- If a blocker is technical (build broke, config failed, test fails): recommend `/diagnose` to root-cause before re-attempting

### What I'd prioritise
Based on the dependency graph, what unblocks the most downstream work? Rank the top 3 actions by impact.

```
Priority 1: [action] — unblocks [what], blocked for [duration]
  Recommendation: [specific next step]

Priority 2: [action] — unblocks [what]
  Recommendation: [specific next step]

Priority 3: [action] — unblocks [what]
  Recommendation: [specific next step]
```

### Risks
Things that will become problems if not addressed soon. Not current blockers — future ones.

```
Risk: [what could go wrong]
Timeline: [when it becomes a problem]
Mitigation: [what to do now to prevent it]
```

---

## Step 3: Surface stale decisions

Any blocking item open longer than 2 days gets explicitly surfaced with a recommendation:

```
Stale decision: [item]
Open since: [date] ([N] days)
Blocking: [what downstream work]
My recommendation: [specific proposal with reasoning]
Your call: [the decision to make]
```

Do not present stale decisions as neutral. Take a position. The user can override, but they shouldn't have to do Claude's thinking for them.

---

## Step 4: After work completes

When any piece of work finishes during the session:

1. Update project-state.md
2. State what's unblocked: "[completed work] unblocks [specific next steps]"
3. Re-run the priority analysis: "Given this completion, I'd now prioritise [X] because [reason]"

---

## Step 5: Cross-thread awareness

If the user is working on multiple threads or plans:

- Identify dependencies between threads
- Flag when work on thread A is blocked by a decision in thread B
- Recommend whether to stay on current thread or switch

```
Thread [A] is blocked on [X] which lives in thread [B].
Options:
1. Switch to thread B, resolve X, come back — estimated [effort]
2. Continue thread A on non-blocked items — [list what can proceed]
3. Park thread A entirely — [impact of delay]

I'd recommend [N] because [reason].
```

---

## Step 6: Repo hygiene scan

Periodically (at session start or when `/pm` is invoked), scan for:

### Files in root that should be grouped
```
ls *.md *.mdx *.json (excluding known root files like docs.json, package.json, mint.json)
```
Flag any files that look like thread outputs, drafts, or working files dumped in root.

### Orphan outputs
Files in `workspace/` or `_workspace/` directories that:
- Are older than 7 days
- Have no references from other files (no imports, no links, no mentions in trackers)
- Don't appear in any active plan's file list

### Stale thread artefacts
Files created by prior sessions that were never cleaned up — partial outputs, abandoned drafts, temp files.

### Stale branches
```
git branch --list 'claude/*' --sort=-committerdate
```
Flag any `claude/*` branches that:
- Are older than 7 days and unmerged
- Have no corresponding entry in a finalisation report
- Were created by a session that produced a finalisation report saying "abandoned"

For each: recommend merge, keep, or delete with reasoning.

### Report format
```
Repo hygiene:
- [N] files in root that should be grouped → [recommended locations]
- [N] orphan outputs → [list with last-modified dates]
- [N] stale artefacts → [list with what they appear to be from]

Recommendation: [batch cleanup proposal or "clean — no action needed"]
```

Surface this in the Risks section of the PM report, not as a separate step. It's background awareness, not a primary task.

---

## Anti-patterns

1. **Status dump.** Listing state without analysis. If the user wanted a list, they'd read the files themselves.
2. **Passive voice on blockers.** "This is blocked" vs "This has been blocked for 4 days and is costing us [X]. I'd recommend [Y]." Always active, always with recommendation.
3. **Ignoring time.** Decisions that have been open for days are different from decisions opened today. Duration matters. Surface it.
4. **Recommending everything.** Top 3 priorities, not 15. If everything is priority 1, nothing is.
5. **Reporting without updating.** After any work completes, project-state.md must be updated. Stale state files are worse than no state file.

---

## Principles

1. **Recommend, don't report.** Every status update must include "and here's what I'd do about it."
2. **Time is data.** How long something has been blocked tells you how important it is to resolve. Use dates, not vague language.
3. **Dependency thinking.** The highest priority is always the thing that unblocks the most other things. Not the most interesting, not the most urgent-sounding — the one with the biggest downstream fan-out.
4. **The user's attention is the scarcest resource.** Don't waste it on low-impact items. Surface only what matters.
5. **State files are living documents.** Update them after every meaningful change. A state file that's 2 sessions old is actively misleading.

---

## Status: Draft — Testing in production

Known limitations updated after each real use.

### Known limitations
- Not yet tested on a real PM task

### Test log
| Date | Used on | Worked | Didn't | Changes |
|---|---|---|---|---|
