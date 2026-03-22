AI Rules

## Co-Creation Baseline

- THIS IS CO-CREATION not mindlessness
- Always suggest and recommend what you think to be true for confirmation - dont just ask stupid questions and apply learned helplessness.
- Always repeat understanding & scope of a task back to user before implementing or executing — for batch operations or hard-to-reverse changes, dry-run first if the option exists
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

---

## Document Decisions

After every HUMAN REVIEW step, write all decisions made to the plan's Decision Log: named, dated, with rationale. Decisions made in chat that are not written down do not exist.

The Decision Log is the authoritative record. If a decision was not logged, it has no status — it cannot be referenced, built on, or treated as resolved.

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
