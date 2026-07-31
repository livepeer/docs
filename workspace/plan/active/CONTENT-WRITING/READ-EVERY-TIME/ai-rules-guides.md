AI Rules

## Co-Creation Baseline

- THIS IS CO-CREATION not mindlessness
- Always suggest and recommend what you think to be true for confirmation - dont just ask stupid questions and apply learned helplessness.
- Always repeat understanding & scope of a task back to user before implementing or executing — for batch operations or hard-to-reverse changes, dry-run first if the option exists
- **Describing the next task is not approval to execute it.** State what comes next and wait. "Go" / "ok" / "proceed" is approval. Silence, a question, or "what's that?" is not. Never auto-proceed even when the next step feels obvious.
- On EACH STEP OF A PLAN - each task completion provide in inline chat:
  - Notes on completion
  - Any flags / recommendations found when implementing
  - A bullet point plan status now update
  - A description of next task & any blockers.

---

## Read Before Working

Before starting any DESIGN, EXECUTION, or HUMAN REVIEW step — read every document that step depends on. This includes: the design-canonical, the plan's Decision Log, all locked framework files, and any referenced specs.

**Never work from memory or assumptions.** If a document exists and is referenced, read it. If you claim something is undefined, unresolved, or unknown — first check the relevant source document. If you did not read it, you do not know.

This applies even if you believe you already know the content. Decisions evolve. A locked document is the truth; your recollection of a prior conversation is not.

This also applies to claims and fix directions. Before writing that X is stale, wrong, or should be replaced by Y — verify both sides empirically: confirm X exists where you say it does, confirm Y is the actual correct replacement, and confirm the direction is right. Getting the direction of a fix wrong creates more downstream work than the original problem. An unverified finding written into a plan or audit is not a finding — it is a liability.

### Before running any phase prompt

Every phase prompt has a `pack-guide.md` in its folder. **Read it before doing anything else.** The pack-guide defines:
- Pre-flight steps the human must complete before the prompt runs (terminology lock, persona source documentation, resource selection)
- Running order — which phases pause for human review and which continue
- Dos and Don'ts — failure modes the prompt is known to hit without them
- What good output looks like vs what bad output looks like

**The pre-flight steps are not optional.** Skipping them produces output that looks correct but is built on bad foundations — AI-generated personas without source grounding, jobs derived from current nav labels, terminology leaked from prior AI output. This contaminates every downstream phase.

Mandatory read order before running any phase prompt:
1. `pack-guide.md` for that phase — defines the full execution process
2. The prompt file itself — understand what it asks for before generating anything
3. The plan's Decision Log — check for decisions that affect this phase
4. Resources specified in `phase-resources.md` — load only what the pack-guide recommends for this run

---

## Document Decisions

After **every task** — not just HUMAN REVIEW steps — write any decisions, corrections, scope changes, or resolved questions to the plan's Decision Log: named, dated, with rationale. This includes:
- Corrections to prior design decisions made during review
- Naming changes and renames
- Scope changes (what's in/out of a task or phase)
- Approach changes (how something will be built or structured)
- Anything a future session would need to know to avoid re-asking or re-deciding

Decisions made in chat that are not written down do not exist. A decision not in the log has no status — it cannot be referenced, built on, or treated as resolved across context resets or handoffs.

**Before starting any new phase**, re-read the full Decision Log for that plan. Do not rely on memory or context summaries — the log is the record. This is how you avoid asking the human to re-decide things they have already decided.

**Implementation discoveries also belong in the plan.** When execution surfaces issues that are out of scope for the current task, add them as named, scoped items in the relevant future task — with the file/location, why it matters, and which task owns it. A flag mentioned only in the completion report does not survive context resets or handoffs.

---

## Findings Before Fixes

When doing any audit, scan, or review work — gather all findings first, then present them as a structured report, then get approval on scope, then execute. Do not fix things as you find them.

This keeps the human in control of what gets changed, prevents scope drift mid-task, and means the full picture is visible before any work begins. One finding fixed before the next is found is not an audit — it is uncontrolled iteration.

---

## Design-Canonical → Plan Relationship

Any system design produces two complementary documents — a design-canonical and a plan. They are NOT the same document and must not be conflated.

- **Design-canonical** — the structured system view: what the system is, its parts, ideal state per part, Steps (task base) per accordion, outputs.
- **Plan** — the execution reality built on top of it: takes the Steps from the design-canonical accordions and extends them with parallel run paths, handoff items, cross-plan dependencies, phase sequencing, and a decision log.

**The design-canonical feeds the plan. The plan extends it.** Never write execution steps only in one place. Never treat the plan as a replacement for the design-canonical or vice versa.

---

## Naming and Classification

Before proposing or confirming any name, enum value, file path, or classification — read the document where that thing was defined and locked. Do not derive names from general reasoning when a locked source exists.

If a taxonomy, enum, or naming convention has been locked in a framework file, that file is authoritative. Any claim that contradicts it is wrong until the source is checked and the discrepancy is explained.

**Conventions agreed in conversation must be written to the relevant canonical doc before the session ends.** A naming rule, classification scheme, or structural pattern that exists only in chat is not enforced, not discoverable, and will be applied inconsistently. Chat is not a governance record.

---

## Verify Pre-conditions Before Executing

If a plan, task, or step depends on a pre-condition being true — that pre-condition is the first task. Verify it explicitly before doing anything else. Do not assume it holds because it was written into the plan.

If verification contradicts the plan's assumption, correct the plan before proceeding. Do not execute steps built on a false premise and then fix the damage afterwards.

---

## Evaluate Plans Against Outcomes, Not Task Lists

Before starting execution of any plan, ask: if every task on this list is completed, does the stated outcome actually get achieved? A task list is not an outcome. Completing all tasks is not the same as solving the problem.

If the mapping from tasks to outcome is unclear, surface that before execution — not after. Restructure the plan around the outcome if needed.

---

## One-Shot Tools Have a Cleanup Step

Migration scripts, temporary analysis tools, and one-off utilities are not permanent artefacts. They exist to perform a single operation, not to live in the codebase. After execution and verification, delete them. Do not commit temporary tools as permanent additions.

---

## Map Upstream and Downstream Before Acting on Any Pipeline Component

**Added:** 2026-03-23
**Triggered by:** Task 15b.6 — `update-blog-data.yml` was disabled without first mapping what pages consume its output files, or confirming replacement pipelines were working end-to-end.

Before disabling, removing, renaming, or restructuring any script, workflow, or data file that is part of a pipeline:

1. **What does it write?** — identify every output file it produces.
2. **What reads those files?** — identify every MDX page, component, or downstream script that imports or depends on those outputs. These are live pages visible to users.
3. **What else writes to those same files?** — identify every other writer (n8n, GHA, script) targeting the same output paths.
4. **Is there a confirmed working replacement?** — verify the replacement actually runs, targets the correct branch, uses a working secret/key, and produces the same or better output format. Not just "it exists" — confirm it works.
5. **Only then act.**

If any of the above is unknown, resolve the unknowns before touching the pipeline — not after.

The full chain to trace:

```
Source API/CMS
  → fetch script
    → GHA workflow / n8n workflow       ← writer
      → snippets/automations/**/*.jsx   ← data file
        → v2/**/*.mdx import            ← page
          → live docs site              ← user-visible
```

Breaking any link silently removes content from live pages with no build error.

---

## Root Cause Fixes Only — Never Disable as a Workaround

**Added:** 2026-03-23
**Triggered by:** The instinct to disable `update-blog-data.yml` because it was broken, without fixing the root cause (missing working secret, wrong output format) or confirming a replacement covered the gap.

A broken thing that is disabled is not fixed — it is hidden. The problem remains; you have just removed visibility of it.

Rules:
- Never disable a workflow, script, or pipeline stage as a resolution. Disabling is only valid when a confirmed working replacement already covers the same output.
- Identify the root cause of the breakage. Common causes: wrong/missing secret, stale path, wrong branch, wrong output format, outdated API endpoint.
- Fix the root cause, or document exactly why the replacement makes this component permanently redundant (with evidence).
- If a workflow is genuinely superseded, document: what supersedes it, what files the replacement writes to, that those file paths are identical, and that the replacement is confirmed working — then mark it retired with that full explanation, not just disabled.

"It's broken so I turned it off" is not a fix. It is deferred work with hidden risk.
