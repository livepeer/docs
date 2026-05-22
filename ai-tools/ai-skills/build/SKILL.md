---
name: build
description: >-
  Execute an approved architecture using agent-delegated work. Breaks the design into
  agent-scoped tasks, validates output against the design's test criteria, and keeps the
  main thread responsive. Only runs after a design doc or approved plan exists.
  Use when moving from agreed architecture to implementation.
metadata:
  version: "1.0"
  category: process
  status: "draft"
---

# SKILL: Build — Execute Approved Architecture

Build turns a design into artefacts. It does not design. If no architecture doc or approved plan exists, redirect to `/design` first.

---

## When to use

- After `/design` has produced an agreed architecture doc
- After an approved plan with clear scope and acceptance criteria exists
- When the user says "go build it"

## When NOT to use

- When no design exists — use `/design` first
- When more research is needed — use `/research` first
- When the scope is unclear — clarify before building

---

## Step 0: Branch isolation (when appropriate)

For multi-file builds or experimental work, propose a named branch:

```
This build touches [N] files across [scope]. Recommend working on branch:
  claude/{topic}  (e.g. claude/veracity-pass, claude/skill-build)

Benefits: isolation from main branch, atomic merge when done, easy rollback.
Confirm, or proceed on current branch?
```

**When to branch:**
- Build touches 5+ files
- Build is experimental or might need reverting
- Build spans multiple agent batches

**When NOT to branch:**
- Single-file changes
- Changes to workspace/plan files (these are working docs, not code)
- User explicitly wants to stay on current branch

Branch naming: always `claude/{descriptive-name}`. Never unnamed branches.

At build completion, the branch status goes into the `/thread` finalisation report.

---

## Step 1: Read the design and check the phase gate

Read the architecture doc or approved plan completely. Extract:

1. **What to build** — the deliverables
2. **Test criteria** — how each deliverable will be validated
3. **Constraints** — what the design explicitly rules out
4. **Dependencies** — what must exist before each piece can be built
5. **Phase checkpoints** — read `workspace/thread-outputs/sessions/phase-gate.jsonl` for this thread. If the previous phase has unverified checkpoints, do not start the next phase. Verify them first.

If any of these are missing or vague, flag it before proceeding:

```
The design doc is missing [X]. I need this before I can scope the build.
Options: [A] clarify now, or [B] go back to /design to fill the gap.
```

---

## Step 2: Propose the build plan

Break work into agent-scoped tasks. Each task must be:

- **Independent** — can run without waiting for other tasks (unless explicitly dependent)
- **Testable** — maps to one or more test criteria from the design
- **Scoped** — one agent, one deliverable, clear inputs and outputs

### Format
```
Build plan for: [design name]

Task 1: [deliverable]
  Agent scope: reads [inputs], produces [output path]
  Tests: criteria [N, N] from design
  Dependencies: [none / task N must complete first]

Task 2: [deliverable]
  Agent scope: reads [inputs], produces [output path]
  Tests: criteria [N, N] from design
  Dependencies: [none / task N must complete first]

...

Parallel batch: tasks [1, 2, 3] can run simultaneously
Sequential: task [4] depends on task [2] output

Waiting for go.
```

Wait for approval before spawning any agents.

---

## Step 3: Execute

On approval:

1. **Compose agent briefs using `/agent-brief` template.** Every agent receives:
   - **Context**: thread outcome + how this build task serves it
   - **Task**: the specific deliverable this agent produces
   - **Scope**: input files, output path, boundaries
   - **Quality contract**: all 6 points (verbatim)
   - **Return format**: Build Report (from agent-brief template)
   - **Failure protocol**: stop immediately if dependencies missing
2. Launch all independent agents in a single message (parallel)
3. Main thread stays free — report status, answer questions, take direction
4. As agents complete, read their output immediately
5. Do NOT auto-launch the next batch — report what completed and propose next batch

### Per-agent completion
```
Agent [N] complete: [deliverable]
  Output: [path]
  Self-validation: [from agent's Build Report]
  Test criteria [N]: [pass/fail — one sentence]
  Issues: [none / describe]
```

---

## Step 4: Validate against design

After all tasks complete, validate the full build against ALL test criteria from the design doc.

### Format
```
Build validation:

Criterion 1: [statement] — PASS/FAIL
  Evidence: [one sentence showing why]

Criterion 2: [statement] — PASS/FAIL
  Evidence: [one sentence showing why]

...

Overall: [N/M criteria pass]
```

If any criterion fails, do NOT silently accept it. Flag it:

```
Criterion [N] fails: [what's wrong]
Recommended fix: [concrete proposal]
```

---

## Step 5: Flag tech debt

During build, if you notice that the implementation creates problems the design didn't anticipate:

```
Tech debt flag: [what's happening]
Why it matters: [downstream impact]
Recommendation: [fix now / accept and note / redesign this piece]
```

Do not silently create tech debt. The whole point of design-before-build is to prevent this.

---

## Step 5b: File placement discipline

Before writing any file, propose the path with reasoning:

```
File: [proposed path]
Reasoning: [why this location — what concern it groups with]
```

Rules:
- **Never write to repo root** unless the file is a root-level config (docs.json, package.json, etc.)
- **Group by concern** — files that relate to the same thread/feature/phase go in the same directory
- **Components and scripts have canonical placement rules** — read `workspace/thread-outputs/research/component-script-placement-reference.md` before placing any component or script file. Placement is determined by what the component/script DOES, not what it's named.
- **Mintlify constraints** — read `docs-guide/canonical/collation-data/Mintlify/mintlify-repo-best-practices.md` before writing any MDX page or JSX component. Do not suggest imports, hooks, or patterns that don't work in Mintlify.
- **Use named conventions** for skill outputs:

```
workspace/thread-outputs/
  research/{topic}-brief.md
  design/{name}-architecture.md
  build/{name}-build-report.md
  iterate/{name}-review-report.md
```

If the proposed path is root or doesn't group logically, flag it:

```
This file would land in root. Recommended location: [path] because [reasoning].
Confirm or redirect.
```

---

## Step 5c: Render verification — mandatory for MDX/JSX changes

If this build touched any MDX page or JSX component, you MUST verify it renders before declaring done.

### Quick smoke test (single page or component)
```bash
# Run the MDX component runtime smoke test against the changed route(s)
node operations/tests/integration/mdx-component-runtime-smoke.js --routes /v2/path/to/changed-page
```

### Scoped dev server (for visual verification)
```bash
# Start in a SEPARATE terminal — do not hijack an existing dev server session
# Use run_in_background or a dedicated Bash call
lpd dev --scoped --scope-prefix v2/orchestrators
# Or scope to a specific tab
lpd dev --scoped --scope-tab Developers
```
**IMPORTANT:** Always start the dev server in its own background process. Never attach to or kill an existing Mint dev session the user may be running.

### What to check
1. **Page loads without console errors** — no ReferenceError, no "is not defined"
2. **Components render** — no blank sections, no missing content
3. **Imports resolve** — no "Cannot access" or module-not-found errors
4. **No visual breakage** — content appears where expected

### If verification fails
Do NOT declare done. Go to `/diagnose`:
1. Read the error message
2. Check against Mintlify constraints reference
3. Fix the root cause
4. Re-verify

```
Render verification:
  Route(s) tested: [paths]
  Method: [smoke test / scoped dev / both]
  Result: PASS / FAIL
  Errors: [none / list]
```

A build that changes MDX/JSX and skips render verification is NOT complete.

---

## Step 6: Handoff

After build + validation:

- If all criteria pass: "Build complete. Recommend `/iterate` for quality review."
- If some criteria fail with clear fixes: propose the fixes, wait for approval
- If criteria fail because the design was wrong: "This needs redesign. Recommend `/design` to revisit [specific piece]."

Update project-state.md with what was built and what it unblocks.

---

## Principles

1. **No build without design.** If the architecture doc doesn't exist, don't start. This prevents the tech-debt-through-premature-execution pattern.
2. **Test criteria are the contract.** Build succeeds when criteria pass. Not when files exist. Not when it "looks right."
3. **Flag, don't hide.** If something doesn't work or creates debt, surface it immediately. Hidden problems compound.
4. **Main thread stays free.** The user should never watch Claude read files. Agents read. Claude thinks, validates, and reports.
5. **Each agent is independently testable.** If an agent's output can't be validated on its own, the task isn't scoped tightly enough. Resplit.

---

## Status: Draft — Testing in production

Known limitations updated after each real use.

### Known limitations
- Not yet tested on a real build task

### Test log
| Date | Used on | Worked | Didn't | Changes |
|---|---|---|---|---|
