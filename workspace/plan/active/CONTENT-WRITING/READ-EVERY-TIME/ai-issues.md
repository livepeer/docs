# AI Operational Issues — Project Management Rules

> Written 2026-03-23. These are systemic issues identified during content pipeline execution. Every AI session working on this project must read this file before starting.

---

## Issue 1 — No Project State Model

**Problem**: No live record of what agents are running, what has returned, what is queued, what is blocked. State is reconstructed from scratch each response — incorrectly.

**Fix**: Maintain `project-state.md` in this directory. Read it at the start of every response. Update it after every agent batch. Format: running agents (ID + purpose + what it unblocks), completed (output path + what it unblocked), queued (task + blocker), blocked (task + missing dependency).

---

## Issue 2 — Agents Spawn Without Dependency Validation

**Problem**: Agents are spawned before their required inputs exist. They run against missing or incomplete data, produce garbage output, and waste cost.

**Fix**: Every agent prompt must include a `DEPENDENCY CHECK` block at the top listing required input files with exact paths. The agent confirms each file exists before proceeding. If any dependency is missing: return immediately with `DEPENDENCY FAILED: [file] not found at [path]`. No work done. Human notified.

---

## Issue 3 — Instructions Not Fully Read Before Acting

**Problem**: User instructions are partially processed. An instruction like "spawn 2 agents per tab for v1 and v2" results in only v2 agents being spawned. The instruction was understood but not acted on completely.

**Fix**: Before any spawn batch, extract every instruction from the user's message as a numbered list. Confirm each one maps to a concrete queued action. If anything is unaddressed, fix it before spawning.

---

## Issue 4 — Main Thread Used for Low-Value Work

**Problem**: File edits, plan restructures, analysis, and other agent-suitable work happens in the main conversation thread. This wastes the human's time and blocks high-value review work.

**Fix**: Hard rule — if it can be written to a file by an agent, it goes to an agent. Main thread = human decisions, checkpoints, and status reports only. Nothing else.

---

## Issue 5 — Spawn Sequencing Not Tied to Dependency Graph

**Problem**: Agents are spawned based on "what comes next in the plan" rather than "what prerequisites are actually met." Results in agents running against missing inputs.

**Fix**: Every spawn explicitly states: "Dependency: [X] ✅ confirmed at [path]" before proceeding. If dependency not met: task goes into queue with blocker named. Does not spawn.

---

## Issue 6 — Confirm-Before-Spawn Rule Not Followed

**Problem**: Agents are spawned without explicit human confirmation, especially for consequential or multi-agent batches.

**Fix**: Before every spawn batch, one message: list what agents will run, what each does in one sentence, what dependencies are met. Wait for explicit go. Exception only when human has explicitly pre-approved the batch by name.

---

## Issue 7 — No Explicit Handoff Between Agent Outputs and Next Steps

**Problem**: When agents complete, their outputs are acknowledged and then sit unused. Nothing chains to the next step automatically. Outputs are not routed to the agents or phases that need them.

**Fix**: Every agent completion: read output summary → state what it unblocks → queue the next step explicitly → report to human. If the next step requires human review, present it immediately. If it can proceed automatically (dependency met, no human decision needed), queue the next agent and confirm before spawning.

---

## Enforcement

These rules apply to every AI session on this project without exception. If an agent is about to violate any of these rules, it must stop and report rather than proceed.

The human should not need to re-state these rules. If they do, it means this file was not read.
