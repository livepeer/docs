---
name: thread
description: >-
  Session anchor with lifecycle pipeline. Two modes: (1) START — defines outcome, maps lifecycle
  phases (research → audit → design → implement → test → iterate → test → verify → document → cleanup),
  and creates task list. (2) STATUS — outputs current status snapshot mid-session.
  Orient, don't execute. Never re-anchor or restart tasks when a thread is already active.
metadata:
  version: "1.4"
  category: process
  status: "active"
---

# SKILL: Thread — Session Anchor

Every session has one outcome. This skill makes it visible, keeps it visible, and pulls back when work drifts from it.

---

## When to use

- Start of any working session
- When the conversation has drifted from its original goal
- When switching between tasks within a session
- When a new skill is invoked — thread runs underneath
- Mid-session to check status — `/thread` with no arguments always gives status first

## When NOT to use

- Quick one-off questions that don't need session tracking

---

## Step 0: Mode detection — run this first, every time

**Before doing anything else, detect which mode to enter.**

**STATUS mode** — if ANY of the following are true:
- `/thread` was invoked with no arguments
- The user says "status", "where are we", "what's happening", "context", "what have we done", or anything that reads as a check-in rather than a new objective
- A thread outcome was already defined earlier in this conversation

In STATUS mode, output a status snapshot immediately. Do not re-anchor. Do not redefine the outcome. Do not create a new TodoWrite list:

```
Thread status
─────────────────────────────
What this session is: [1-2 plain-English sentences describing the purpose of this session —
what problem we're solving, what we're building, why it matters.
Enough that someone who forgot could instantly reorient.]

Outcome: [the specific deliverable or decision this session is working toward]

Progress:
  ✅ [completed task — outcome phrasing, not action]
  ✅ [completed task]
  🔄 [in-progress task — where it's at]
  ⬜ [pending task]

Last action: [the most recent thing that was done, in one line]
Next: [the next concrete action, or what's blocking]
Backlog: [any deferred items, or "none"]
```

After outputting status, **stop**. Wait for the user to respond. Do not proceed into execution.

**START mode** — if this is the first `/thread` invocation in the conversation:
- The user may provide a clear outcome, a vague topic, a BL number, or nothing beyond `/thread [topic]`
- In all cases: proceed to Step 0.5 (flags), then Step 1 (auto-derive the outcome from context + message)
- Do not ask clarifying questions. Propose and start. The user redirects if needed.

**RECOVERY mode** — if the user's message looks like it was meant as a command but wasn't recognised (e.g. `/thead` instead of `/thread`, `/reserach` instead of `/research`):
1. Say: "That looks like a typo for `/[correct command]`. Your full message is preserved — processing it now."
2. Treat the rest of the message as the input to the correct command
3. Do NOT discard the message content. The user's brief is the priority, not the command routing.

---

## Step 0.5: Check flags

Read `workspace/thread-outputs/sessions/flags.jsonl`. Each line is a JSON object:
```json
{"thread":"About","flag":"3 pages missing meta descriptions","from":"SEO","priority":"low","date":"2026-03-30"}
```

Filter to flags matching this thread name. Present only relevant flags as quick questions:

```
Flags for [thread name]:
  1. [flag text] (from [source], [priority]) — address now? y/n
  2. [flag text] ...
```

If no flags match this thread: skip silently. If the user answers "n", leave the flag. If "y", add it to the task list.

### How to write flags (for any thread, any session)

Append a JSON line to `flags.jsonl`. No ceremony:
```js
{"thread":"Contracts","flag":"SearchTable monospaceColumns bug still open","from":"Cleanup","priority":"medium","date":"2026-03-30"}
```

When a flag is addressed, delete its line from flags.jsonl.

---

## Step 1: Define the outcome

### Auto-derive — always try this first

Do not ask the user to clarify. Instead, read and synthesise:

1. **The user's message** — extract the topic, even if vague ("contracts", "cleanup", "BL-013")
2. **Session state** — injected at session start by `session-state.js`. Includes active threads, tab gates, running agents, blocked decisions, backlog
3. **Backlog registry** — `workspace/plan/future/BACKLOG/registry.md`. If the user referenced a BL number, read the entry
4. **Recent session log** — last 5 entries from `workspace/thread-outputs/sessions/session-log.txt`. Shows what was recently done, what carried forward
5. **Flags** — already checked in Step 0.5
6. **CLAUDE.md active threads table** — shows what's in flight and what's blocked

From these sources, **propose the full thread anchor**:

```
Thread: [name]
Outcome: [concrete, testable, scoped deliverable — derived from user message + context]

Context I found:
  - [relevant backlog item / prior session / flag / blocker — 1 line each]
  - [...]

Lifecycle: [which phases this session covers, with reasoning]

Tasks:
  1. [first task]
  2. [second task]
  ...

Starting with [first task]. Adjust if this isn't what you meant.
```

Then **immediately start working** on the first task. The user will redirect if needed — that's faster than waiting for confirmation on a well-derived anchor.

If the user's message is completely unambiguous (e.g. "fix the broken link in glossary.mdx"), skip the context lookup and go straight to the outcome + tasks.

### Outcome quality bar

The outcome must be:
- **Concrete** — names the deliverable or decision, not a vague direction
- **Testable** — you can verify at the end whether it happened
- **Scoped** — one session's worth of work, not a project milestone

**Immediately after defining the outcome, create a TodoWrite task list.** This is mandatory — not optional. The task list must include the session outcome as the first item and break down the known tasks below it. Mark the first task `in_progress`. Update task status in real time as work proceeds. At session close, the TodoWrite list is the source of truth for what was attempted.

**Write the outcome to the scope checkpoint file.** After defining the outcome, run:
```bash
echo "{outcome text}" > /tmp/claude-thread-outcome-${CLAUDE_SESSION_ID:-default}.txt
```
This file is read by the `scope-checkpoint` hook to enforce drift detection mechanically. The hook injects a scope check every 8 edits, restating this outcome and asking you to confirm your current work serves it.

### Register in CLAUDE.md work streams table

After defining the outcome, update the "Active threads" table in `.claude/CLAUDE.md`:
- **New thread:** add a row (thread name, working on, status, date)
- **Continuing existing thread:** update the status column
- **Thread completed this session:** mark done

This is how parallel threads coordinate. Every `/thread` invocation keeps the table current.

### Explore before executing

The first actions in any session should be Read/Grep/Glob — understand the problem before touching files. No Write/Edit until you know what you're changing and why. The worst sessions happen when Claude jumps straight to editing.

### Test-driven when fixing bugs

When the outcome involves fixing something broken, write a failing test first (see `/diagnose` Step 3b). The fix is done when the test passes, not when you think it works.

---

## Step 1b: Map the lifecycle phases

Every non-trivial thread follows the same lifecycle. After defining the outcome, identify which phases apply and map the session's work to them. Not every session covers all phases — a session might only do research, or pick up at implement after a prior session's design was approved.

### The lifecycle

```
research → audit → design → implement → test → iterate → test → verify → document → cleanup
```

| # | Phase | Skill(s) | What happens | Outputs | Gate |
|---|---|---|---|---|---|
| 1 | **Research** | `/research` | Understand the landscape holistically. (1) Web search: best practices, standards, documentation approaches. (2) Repo search: existing gold standards, frameworks, patterns to align to, gaps, risks, unmaintainability. Both dimensions required | Reports in `workspace/thread-outputs/research/` — one per dimension (e.g. `{topic}-best-practices-report.md`, `{topic}-repo-analysis-report.md`) | Human reviews reports |
| 2 | **Audit** | `/dispatch` | Inventory what exists. Classify by repo taxonomy (type/concern). Trace upstream triggers and downstream dependencies/dependants. Map each item's pipeline (Mermaid). Identify: stale, legacy, broken, placeholder, duplicate. Flag consolidation candidates. Identify frail dependencies and risks | Audit report with classification table + pipeline maps (Mermaid). Working dir: relevant `_workspace/` folder | Human reviews audit |
| 3 | **Design** | `/design` | Co-design with human. Produce: (1) framework-canonical — governance aligned to repo taxonomy, enforcement tiers, error reporting with self-remediation. (2) Template — per-item page/doc with classification, pipeline diagram, dependencies, status. (3) Catalog index — visual overview by type × concern | Framework canonical + template + catalog structure | Human co-designs and approves |
| 4 | **Implement** | `/build` | Execute the design. Verify first instance before bulk. Follow approved template. Populate from audit data. Restructure folders per framework | Built artefacts. Folder structure matches framework | First instance verified before bulk |
| 5 | **Test** | `/build` Step 4 | Verify it works. Render checks, completeness cross-references (every source item has corresponding output), dependency validation (no broken references) | Test report | All checks pass |
| 6 | **Iterate** | `/iterate` | Human review cycle. Present visually (tables, trees, diagrams — not text walls). Receive feedback. Categorise: pass / fix → `/build` / redesign → `/design` / research → `/research` | Updated artefacts | Human approves |
| 7 | **Test** | `/build` Step 4 | Re-verify after iteration. Same checks as phase 5 | Updated test report | All checks pass |
| 8 | **Verify** | — | Production readiness. Universal checks + context-aware checks based on what was built. See **Verify phase detail** below | Verification report + future recommendations | Verify passes; issues route back to correct phase |
| 9 | **Document** | — | (1) Add gold-standard example to `.claude/references/`. (2) Update governance indexes. (3) Build self-documenting pipeline — automation keeping outputs in sync with source. Governance enforced | Reference exemplar, governance updates, automation pipeline | Documentation complete, pipeline runs |
| 10 | **Cleanup** | — | Archive deprecated/stale items. Remove unfinished placeholders. Execute approved consolidation merges. Streamline folder structure. Final audit: zero drift from framework | Clean repo state, no orphans, no drift | Final audit passes |

### Verify phase detail

Verify is not test (does it work?) or iterate (does the human approve?). Verify asks: **is this safe to ship to production and survive without a human watching it?**

**Universal checks** — always apply, regardless of what was built:

| Check | What it verifies |
|---|---|
| End-to-end pipeline | Full chain traced: trigger → script → data → output → consumer. No dead ends, no orphaned outputs |
| Framework alignment | Follows all applicable repo governance (script framework, component framework, naming conventions, Mintlify constraints) |
| Self-remediation | Survives ownerless operation. Error reporting exists. Failure self-heals or creates an issue. Cron/dispatch triggers work unattended. Recovery path documented |
| Risk mitigation | Failure modes identified and handled. What breaks if an API is down, a schema changes, a dependency is removed? Edge cases covered |
| Scalability | Works at 10x current scale. Composable, not brittle. Will it buckle at 50 more targets? |
| Hanging threads | No TODOs, temp workarounds, unresolved deferrals, stale references, debug logs, backup files |
| Data integrity | Source data matches rendered output. No stale values, no hardcoded overrides bypassing the pipeline |

**Context-aware checks** — layer on based on what was built:

| If the build produced... | Also verify... |
|---|---|
| MDX pages | UK English (-ise, -our, -re). No em dashes. All links resolve. Frontmatter complete. Voice matches audience. No questions in headings. Heading hierarchy valid |
| Scripts | JSDoc 11-tag header complete. Type/concern/niche placement correct. Exit codes (0/1/2). Error handling present. `@usage` example works |
| Components | 7-tag JSDoc. Mintlify constraints (no React imports, no hooks, no SSR). All consumers still render |
| Data pipelines | Source → output match verified. No stale values. No hardcoded overrides. Health checks exist. Pipeline recovers from upstream failure |
| GitHub Actions | Triggers fire. Secrets exist. Error reporting/issue creation works. Dry-run mode available. Concurrency groups set |
| Governance docs | Enforcement tiers defined. Self-heal paths exist and work. Examples match actual repo implementations |

**Output format:**

```
## Verification Report: [what was built]

### Universal checks
- [ ] End-to-end pipeline — [pass/fail + evidence]
- [ ] Framework alignment — [pass/fail + evidence]
- [ ] Self-remediation — [pass/fail + evidence]
- [ ] Risk mitigation — [pass/fail + evidence]
- [ ] Scalability — [pass/fail + evidence]
- [ ] Hanging threads — [pass/fail + evidence]
- [ ] Data integrity — [pass/fail + evidence]

### [Context] checks
- [ ] [check] — [pass/fail + evidence]
...

### Issues found
| Issue | Severity | Routes to | Recommendation |
|---|---|---|---|
| [description] | P0/P1/P2 | [phase to revisit] | [action] |

### Future recommendations
1. [Concrete, prioritised, actionable]
2. ...
```

**Gate:** Issues route back to the correct phase — implementation issue → `/build`, design flaw → `/design`, unknown → `/research`, needs human decision → present with recommendation. Verify must pass before document/cleanup.

### How to use

When defining the outcome, state which phases this session covers:

```
Outcome: [specific deliverable]

Lifecycle position:
  ✅ Research — done (prior session, reports at [path])
  ✅ Audit — done (prior session, audit at [path])
  🔄 Design — this session
  ⬜ Implement — after design approval
```

Each phase transition requires restating the outcome and getting confirmation (see Step 3). No phase starts without its gate being satisfied.

### Adapting to scope

- **Quick fix:** research → implement → test → done (skip audit/design/iterate/verify)
- **New system:** all 10 phases, possibly across multiple sessions
- **Audit-only session:** research → audit → present findings → done
- **Content work:** research → design (IA) → implement (write) → iterate (review) → test (render) → done
- **Data pipeline:** research → audit → design → implement → test → iterate → test → verify (data integrity critical) → document → cleanup
- **Governance/framework:** research → design → iterate → verify (self-remediation critical) → document → done

The lifecycle is a scaffold, not a straitjacket. State which phases apply and skip the rest explicitly with reasoning.

---

## Step 2: Trace every action

Before proposing any new action, state in one sentence how it connects to the outcome.

If the connection requires more than one sentence to explain, the action is probably drift.

### Format
```
This [action] serves the outcome because [one sentence].
```

If you cannot complete that sentence: flag it.

```
This doesn't trace back to [outcome]. Is this a scope change, or should we refocus?
```

---

## Step 3: Phase transitions

When shifting between lifecycle phases (research → audit → design → implement → test → iterate → test → verify → document → cleanup), restate the outcome and confirm:

```
Outcome: [restate]
Completed: [phase] — [what was produced]
Gate satisfied: [evidence — report exists, human approved, checks passed]
Starting: [next phase]
This moves us toward the outcome because: [one sentence]
```

Wait for confirmation before proceeding into the new phase. Never skip a gate.

---

## Step 3b: Backlog capture

When a new idea or tangent comes mid-task:

1. Log it immediately — TodoWrite with status `pending`, or append to a backlog file
2. Acknowledge it: "Logged: [idea]. Continuing with [current task]."
3. Return to the current task without delay

Do not chase the idea. Do not ignore it. Capture and continue.

At session end or natural pause, review the backlog: "These ideas came up during the session: [list]. Want to promote any to next actions?"

---

## Step 4: Drift detection

If 3+ actions have passed without the outcome being referenced, restate it unprompted:

```
Checking in — our outcome is: [restate]
Current work: [what we're doing now]
Connection: [how it serves the outcome]
```

If the connection is weak, say so. Recommend refocusing or explicitly expanding scope.

---

## Step 5: Session close — Finalisation report

At session end, produce a finalisation report following the completion-reports.md template at `workspace/plan/active/_Project-Management_/completion-reports.md`.

### Report structure

```markdown
## [Initiative Name] — [YYYY-MM-DD]

**Plans**: `path/to/plan.md`
**Scope**: One-line description of what this session covered.

### Summary
2-3 sentences. What problem was solved, what approach was taken, what state the repo is in now.

### Completed
Group by phase. Outcome-oriented bullets — not task checkboxes.

### Decisions Made
| Decision | Rationale |
|---|---|

### Deferred Items
| Item | Priority | Reason | Dependency |
|---|---|---|---|

### Dependencies & Downstream Effects
Things this work affects that other processes need to know about.

### Test / Validation State
| Check | Result | Notes |
|---|---|---|

### Recommendations
Numbered. Concrete next steps with what they unblock.

### Artifacts
| File | Type | Description |
|---|---|---|
```

### Outcome evaluation

State clearly:
- **Met** — the deliverable exists or the decision was made
- **Partially met** — state what was done and what remains
- **Not met** — state why (drift, blocker, scope change) and what the next session should pick up

### Where to write it

- Append to `workspace/plan/active/_Project-Management_/completion-reports.md`
- Also append a summary entry to the session log in `.claude/CLAUDE.md`
- If the session used a branch, include branch status in the report (merged / pending merge / abandoned)

### Branch cleanup at session end

If this session worked on a branch:
1. State the branch name and its status (complete / in-progress / abandoned)
2. If complete: recommend merge to main working branch
3. If in-progress: state what remains and where the next session picks up
4. If abandoned: recommend deletion with reasoning
5. Never leave a branch undocumented — the finalisation report is the record

---

## Step 6: Anti-loop discipline

If Claude has attempted the same approach twice and it has failed both times:

1. **STOP executing.** Do not try a third time.
2. State what was tried and why it failed (both times)
3. List the facts: error messages, file state, what changed between attempts
4. Propose a **different** approach based on root-cause analysis — not a retry
5. Wait for approval before trying again

If Claude cannot identify a different approach, say so: "I've tried [X] twice and it's not working. I don't have a clear alternative. Here's what I know — what's your read?"

This prevents the spiral pattern where Claude retries the same failing approach 10+ times.

---

## Principles

1. The outcome is the user's, not Claude's. If the user changes it mid-session, update it — don't resist.
2. Drift is not always bad. Sometimes the user discovers something more important. The skill's job is to make the shift explicit, not prevent it.
3. Keep it lightweight. One sentence to trace, one sentence to check. This skill should never dominate the conversation.
4. Propose, don't interrogate. When the user's intent is unclear, suggest what you think they mean — don't ask open-ended questions.

---

## Status: Draft — Testing in production

Known limitations updated after each real use.

### Known limitations
- Skill not yet followed by Claude in the session that built it (jumped ahead, drifted from outcome)
- Permission prompt rejections not handled gracefully (retried same approach 3 times)

### Test log
| Date | Used on | Worked | Didn't | Changes |
|---|---|---|---|---|
| 2026-03-25 | This build session | Outcome definition, task tracking concept | Anti-drift not followed, jumped to follow-up before finishing tasks | Added to known limitations |
| 2026-03-25 | This build session | — | Jumped to implementation on render verification (3 skill edits + CLAUDE.md) without confirming approach first | Confirms approval gate not being followed even by the session that wrote it |
| 2026-03-31 | BL-014 redesign | Auto-derive replaces interview pattern | — | v1.4: Step 1 now reads context (session state, backlog, logs, flags) and proposes full anchor. No questions. User redirects if wrong |
