---
name: diagnose
description: >-
  Systematic debugging and root-cause analysis skill. Replaces guess-and-retry loops with
  evidence-based investigation. Reproduce, gather facts, hypothesise from evidence, test
  one thing at a time, fix the root cause. Use when something is broken, behaving unexpectedly,
  or when a fix attempt has failed twice.
metadata:
  version: "1.0"
  category: process
  status: "draft"
---

# SKILL: Diagnose — Systematic Debugging

Something is broken. Do not guess. Do not retry what already failed. Investigate systematically, fix the root cause, verify the fix.

---

## When to use

- Something is broken or behaving unexpectedly
- A fix attempt has failed — especially if it's failed twice (circuit breaker triggers this)
- An error message appears and the cause isn't immediately obvious
- Build output, render, or test is failing
- A component, page, or script doesn't work as expected

## When NOT to use

- The problem is obvious and the fix is a one-line change (just fix it)
- You're exploring or researching (use `/research`)
- You're reviewing quality (use `/iterate`)

---

## Step 1: Reproduce

Before anything else, confirm the problem exists and capture the exact symptoms.

```
Problem: [what's happening]
Expected: [what should happen]
Actual: [what actually happens]
Error: [exact error message, if any — copy verbatim, do not paraphrase]
Where: [file path, line number, URL, or command that triggers it]
```

If you can't reproduce it, say so: "I cannot reproduce this. Here's what I tried: [steps]. The result was [X], which looks correct."

Do NOT skip to fixing. Reproduction comes first.

---

## Step 2: Gather facts

Read the relevant files. Check the actual state. Do not assume.

Gather:
- **The code/file where the problem manifests** — read it
- **The error message** — what does it actually say? (not what you think it says)
- **What changed recently** — git log, recent edits, session log entries
- **Dependencies** — what does this file import/require? Do those exist?
- **Platform constraints** — is this a Mintlify limitation? A hook issue? Read the constraints reference if MDX/JSX is involved.

```
Facts gathered:
1. [fact — with source/evidence]
2. [fact — with source/evidence]
3. [fact — with source/evidence]
```

If investigating requires reading many files, delegate to a background agent using `/agent-brief`. Keep the main thread free.

---

## Step 3: Hypothesise from evidence

Based on the facts, list possible causes. Rank by likelihood. Each hypothesis must be grounded in a specific fact.

```
Hypotheses (ranked by likelihood):
1. [hypothesis] — based on [fact N]: [reasoning]
2. [hypothesis] — based on [fact N]: [reasoning]
3. [hypothesis] — based on [fact N]: [reasoning]
```

Rules:
- **Maximum 3 hypotheses.** If you have more, your facts are insufficient — gather more.
- **Each must cite a fact.** "It might be X" without evidence is guessing, not diagnosing.
- **Most likely first.** Don't bury the obvious under edge cases.

---

## Step 3b: Write a failing test first (TDD)

Before fixing anything, write a test that reproduces the failure. This is the single most effective way to prevent false confidence — the test either passes or it doesn't. No "I think it works."

```
Test: [what the test checks]
Expected: [FAIL — because the bug exists]
Actual: [confirm it fails]
```

The test can be:
- A smoke test command (`node operations/tests/integration/mdx-component-runtime-smoke.js --routes /v2/path`)
- A grep that should find zero results (`grep -r "stale-reference" .`)
- A script execution that should succeed but currently errors
- A manual render check via `lpd dev --scoped`

The fix is only done when this test passes. Not before.

---

## Step 3c: Parallel fix exploration (for complex bugs)

When the root cause is unclear or multiple approaches are viable, spawn parallel agents to explore different fix strategies simultaneously:

```
Agent 1: Fix hypothesis — [approach A]
Agent 2: Fix hypothesis — [approach B]
Agent 3: Fix hypothesis — [approach C]
```

Each agent:
- Gets the failing test from Step 3b
- Uses `/agent-brief` template (quality contract, scope, return format)
- Makes only targeted edits (never full file rewrites)
- Runs the test after each change
- Reports back: test passes or fails, with evidence

Pick the winning approach. Discard the others. This replaces the serial 5-7 retry loop that wastes time.

---

## Step 4: Test one hypothesis at a time

If not using parallel exploration (Step 3c), test sequentially. Pick the most likely hypothesis. Design the smallest possible test that confirms or eliminates it.

```
Testing hypothesis 1: [statement]
Test: [what I'll do — one specific action]
If confirmed: [what this means and what to fix]
If eliminated: [move to hypothesis 2]
```

Rules:
- **One change at a time.** Never test two hypotheses simultaneously.
- **Smallest possible change.** If you can confirm/eliminate by reading a file, don't edit one.
- **State the expected result before running the test.** If you don't know what to expect, your hypothesis isn't specific enough.

---

## Step 5: Fix the root cause

Once the cause is confirmed, fix it at the source. Not a workaround. Not a symptom patch.

```
Root cause: [what's actually wrong]
Fix: [what to change and why this addresses the root cause]
Location: [exact file and line]
```

Before applying the fix, check:
- Does this fix introduce new problems?
- Does it contradict any platform constraints (Mintlify, component governance)?
- Is it the simplest fix that fully resolves the issue?

---

## Step 6: Verify

After fixing:

1. **Re-reproduce** — run the same steps from Step 1. The problem should be gone.
2. **Check surroundings** — did the fix break anything adjacent?
3. **Run tests** if applicable (`node operations/tests/run-all.js`)

```
Verification:
- Original problem: [RESOLVED / still present]
- Side effects: [none found / describe]
- Tests: [pass / fail — details]
```

If the problem persists after the fix, go back to Step 3 — the root cause was wrong. Do NOT retry the same fix.

---

## Step 7: Document

If the diagnosis revealed something non-obvious:

```
Diagnosis note: [what was wrong and why it wasn't obvious]
Pattern: [is this likely to recur? What would prevent it?]
```

If it's a recurring pattern, recommend adding it to the relevant reference file (Mintlify constraints, component placement, etc.)

---

## The anti-loop rule

If you've tried the same approach twice and it's still broken:

1. **STOP.** Do not try a third time.
2. Go back to Step 2. Your facts are incomplete or your hypothesis was wrong.
3. Look for what you HAVEN'T checked, not what you've already looked at.
4. If stuck: "I've tested [X] and [Y], both failed. The evidence points to [Z] but I'm not confident. Here's what I know — what's your read?"

The circuit breaker hook enforces this mechanically. This skill explains what to do when it triggers.

---

## Common diagnosis patterns in this repo

### MDX/JSX not rendering
1. Check imports — absolute path? File extension included? Not importing a Mintlify global?
2. Read `docs-guide/canonical/collation-data/Mintlify/mintlify-repo-best-practices.md`
3. Check if the component file imports data from another JSX file (won't work — import in parent MDX instead). Cross-JSX component imports are fragile and officially unsupported.

### Component in wrong location
1. Check category — is it an element, wrapper, display, scaffolding, or integrator?
2. Read `workspace/thread-outputs/research/component-script-placement-reference.md`
3. The name doesn't determine the category — what the component DOES determines it

### Build/render errors after edit
1. Check for React/hook imports that shouldn't be there
2. Check for inline styles or hardcoded hex colours
3. Check for relative import paths
4. Run `npx mintlify dev` to see the actual error

### Script not working
1. Check the script path — `operations/scripts/` not `tools/scripts/`
2. Check JSDoc header — all 11 tags present?
3. Check if dependencies exist at the paths referenced

### Cross-tab or navigation issues
1. Check `docs.json` — is the page in the nav?
2. Check frontmatter — does it have required fields?
3. Check for cross-tab links pointing to pages that don't exist

---

## Anti-patterns

1. **Guess and retry.** Changing things until it works without understanding why. Produces fragile fixes that break again.
2. **Fixing symptoms.** Adding a workaround instead of fixing the root cause. Creates tech debt.
3. **Testing multiple things at once.** "I changed A, B, and C and now it works" — you don't know which one fixed it, and the other two may cause problems later.
4. **Skipping reproduction.** Fixing a problem you haven't confirmed exists. Wastes time and may introduce new bugs.
5. **Ignoring the error message.** The error message usually says what's wrong. Read it before theorising.

---

## Principles

1. **Evidence over intuition.** Every hypothesis must cite a fact. Every fix must address a confirmed cause.
2. **One change at a time.** Isolation is how you learn. Batch changes are how you create mystery bugs.
3. **Root cause, not symptom.** A workaround is not a fix. If you can't find the root cause, say so — don't paper over it.
4. **Read before changing.** Most debugging is reading, not writing. The fix is usually one line. Finding it is the work.
5. **The error message is your friend.** Read it. Completely. Before doing anything else.

---

## Status: Draft — Testing in production

Known limitations updated after each real use.

### Known limitations
- Not yet tested on a real debugging task

### Test log
| Date | Used on | Worked | Didn't | Changes |
|---|---|---|---|---|
