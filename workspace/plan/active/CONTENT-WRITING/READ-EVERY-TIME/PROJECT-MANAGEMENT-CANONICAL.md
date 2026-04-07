# Content Writing Pipeline — Project Management Canonical

> **Authoritative as of**: 2026-03-23
> **Status**: Active — this document governs all sessions working on the Content Writing Pipeline
> **Purpose**: Replaces all conversation about process. Everything needed to run this project correctly is in this file. If it is not here, it does not govern.

---

## Part 1 — Session Start Protocol

**This protocol is mandatory. No exceptions. No skipping steps.**

### 1.1 Files to Read at Session Start (in this exact order)

1. `workspace/plan/active/CONTENT-WRITING/READ-EVERY-TIME/PROJECT-MANAGEMENT-CANONICAL.md` — this file
2. `workspace/plan/active/CONTENT-WRITING/READ-EVERY-TIME/project-state.md` — current running agents, completed outputs, queued tasks, blocked items
3. `workspace/plan/active/CONTENT-WRITING/READ-EVERY-TIME/plan-canonical.md` — full execution plan, phase definitions, dependency graph
4. `workspace/plan/active/CONTENT-WRITING/READ-EVERY-TIME/decision-registry.md` — all locked structural decisions
5. `workspace/plan/active/CONTENT-WRITING/READ-EVERY-TIME/ai-rules-guides.md` — agent behaviour rules
6. `workspace/plan/active/CONTENT-WRITING/READ-EVERY-TIME/ai-issues.md` — systemic issues to avoid repeating

Read every one of these files in full before doing anything else. Do not work from memory. Do not assume content is unchanged from a prior session. Decisions evolve — the file is the truth, your recollection is not.

### 1.2 What to Confirm Before Taking Any Action

After reading the six files above, confirm and state the following to the human before doing any work:

1. **What agents are currently running** — agent ID, purpose, what each unblocks (from project-state.md)
2. **What outputs are available** — completed context-pack files and what they unblock (from project-state.md)
3. **What is queued** — tasks waiting on dependencies, and what those dependencies are
4. **What is blocked** — tasks blocked on human decisions, and what each decision gates
5. **What phase is active per tab** — current gate status from tab-status.md
6. **What locked decisions apply** — any decision-registry.md entries relevant to work currently in scope

If any of the six session-start files is missing or cannot be read, report: `SESSION START FAILED: [filename] not found at [path]`. Stop. Do not proceed.

### 1.3 How to Report Status to Human

At session start, deliver a status report in this format — no prose, no preamble:

```
SESSION START — [date]

RUNNING AGENTS
- [Agent ID] — [purpose] — unblocks: [what]

COMPLETED (available now)
- [output path] — [what it unblocks]

QUEUED
- [task] — waiting on: [dependency] — tab: [tab]

BLOCKED (human decision needed)
- [decision] — tab: [tab] — blocks: [what]

ACTIVE PHASE PER TAB
- Orchestrators: [current phase / gate status]
- Gateways: [current phase / gate status]
- Developers: [current phase / gate status]
- About: [current phase / gate status]
- Delegators: [current phase / gate status]

RECOMMENDED NEXT ACTION: [one sentence — what the human should decide or approve]
```

Present this before any other output. Wait for the human's response before acting.

---

## Part 2 — Agent Rules

**Every agent working on this project must follow all rules in this section. These rules are not suggestions.**

### 2.1 Dependency Validation is the Agent's Own Responsibility

Agents derive their own dependency list from `plan-canonical.md`. They do NOT trust the prompt author's stated dependency list — the prompt author may be wrong or working from stale context. Every agent:

1. Reads `plan-canonical.md` to identify the correct inputs for its phase
2. Checks every required input file exists at the exact path stated in the plan
3. Confirms existence before doing any work

If any required file does not exist at its exact path, the agent returns immediately:

```
DEPENDENCY FAILED: [filename] not found at [path]
```

No work is done. No partial output is produced. The human is notified. Stop.

### 2.2 Dependency Check Block

Every agent prompt must include a `DEPENDENCY CHECK` block at the top listing required input files with exact paths. The agent confirms each file exists before proceeding. If any dependency fails, the agent returns the failure message above and stops.

### 2.3 Parallel Agent Launch Rule

All agents approved to run in a batch are launched in ONE message. Never sequentially. Sequential spawning wastes the human's time and creates ordering problems not reflected in project-state.md.

Exception: if Agent B's input is the output of Agent A, Agent B waits for Agent A to complete and return output. This is a real dependency — it is not sequential spawning by preference.

### 2.4 No Spawn Without Explicit Human Confirmation

No agent may be spawned without explicit human confirmation stated in the thread. Before every spawn batch, present one line per agent:

```
Agent: [name / purpose]
Reads: [input files — exact paths]
Produces: [output path]
Can run now because: [dependency confirmed at path]
```

Wait for explicit go. "Go" / "ok" / "proceed" is approval. Silence, a question, or "what's that?" is not approval. Never auto-proceed even when the next step feels obvious.

Exception: if the human has explicitly named the batch and said "run all" or "go ahead" as confirmation of a previously proposed batch.

### 2.5 Main Thread is Human-Only

The main conversation thread is for human decisions and checkpoints only. No file work, no analysis, no writing happens in the main thread. If a task can be done by an agent writing to a file, it goes to an agent.

Hard rule: if it can be written to a file by an agent, it goes to an agent. Anything in the main thread is a decision presented to the human or a status report from an agent's output.

### 2.6 Read Before Working

Before doing any design, execution, or review work — read every document that step depends on. This includes: `plan-canonical.md`, the Decision Log, all locked framework files, and any referenced specs.

Never work from memory or assumptions. If a document exists and is referenced, read it. A locked document is the truth; your recollection of a prior conversation is not.

Before running any phase prompt — read the `pack-guide.md` for that phase first. The pack-guide defines pre-flight steps, running order, known failure modes, and what good output looks like. The pre-flight steps are not optional.

### 2.7 Verify Pre-conditions Before Executing

If a plan step depends on a pre-condition being true — that pre-condition is the first task. Verify it explicitly before doing anything else. If verification contradicts the plan's assumption, correct the plan before proceeding. Do not execute steps built on a false premise.

### 2.8 Instructions Must Be Fully Read Before Acting

Before any spawn batch, extract every instruction from the human's message as a numbered list. Confirm each one maps to a concrete queued action. If anything is unaddressed, resolve it before spawning. Partial processing of instructions is a failure mode.

### 2.9 Findings Before Fixes

When doing any audit, scan, or review — gather all findings first, then present as a structured report, then get approval on scope, then execute. Never fix as you find. One finding fixed before the next is found is not an audit — it is uncontrolled iteration.

### 2.10 Document All Decisions

After every task — write any decisions, corrections, scope changes, or resolved questions to `decision-registry.md`: named, dated, with rationale. Decisions made in chat that are not written to the registry do not exist. They cannot be referenced, built on, or treated as resolved across context resets or handoffs.

### 2.11 Map Upstream and Downstream Before Touching Any Pipeline Component

Before disabling, removing, renaming, or restructuring any script, workflow, or data file:

1. What does it write? — identify every output file it produces
2. What reads those files? — every MDX page, component, or downstream script that depends on those outputs
3. What else writes to the same files? — all other writers targeting the same output paths
4. Is there a confirmed working replacement? — verify it actually runs, targets the correct branch, uses working credentials, and produces the correct output format

If any of the above is unknown, resolve the unknowns before touching the pipeline. Breaking a link silently removes content from live pages with no build error.

### 2.12 Root Cause Fixes Only

Never disable a workflow, script, or pipeline stage as a resolution. Disabling is valid only when a confirmed working replacement already covers the same output. A broken thing that is disabled is not fixed — it is hidden.

### 2.13 Validate Every Action With a Canonical Quote

Before executing any action — spawning an agent, writing a file, making a recommendation, or proposing a next step — state which canonical file authorises it and quote the exact text that justifies it.

Format:
```
ACTION: [what you are about to do]
AUTHORITY: [canonical file path]
QUOTE: "[exact text from that file that authorises this action]"
```

Canonical files for this purpose: `plan-canonical.md` · `PROJECT-MANAGEMENT-CANONICAL.md` · `design-canonical.mdx` · `decision-registry.md` · `ai-rules-guides.md` · `Frameworks/` files · phase `pack-guide.md` files.

If no canonical file authorises the action, do not take it. State: "No canonical authority found for this action" and stop.

This rule applies to: Claude Code in the main thread AND all spawned agents. No exceptions.

---

## Part 3 — Project Coordination Rules

### 3.1 project-state.md is Updated After Every Agent Batch

After every agent batch completes — before any other action — update `project-state.md`. The update must include:
- Move completed agents from RUNNING to COMPLETED with their output path
- State what the completion unblocks
- Move newly unblocked tasks from QUEUED to ready-to-propose
- Move newly blocking items into BLOCKED with the human decision required

No subsequent action (including proposing the next spawn batch) happens until project-state.md reflects the current actual state.

### 3.2 Agent Completion Protocol

Every time an agent returns:

1. Read the agent's output
2. Update `project-state.md` (see 3.1)
3. State what the completion unblocks — explicitly, in one sentence per unblocked task
4. If the next step requires human review, present the relevant output for review immediately
5. If the next step can proceed automatically (dependency met, no human decision needed), propose the next agent batch per the confirm-before-spawn rule (Section 2.4) — do not auto-launch

### 3.3 Confirm-Before-Spawn Report Format

One message, before any spawn:

```
PROPOSED SPAWN BATCH — [phase / purpose]

Agent 1: [name]
  Purpose: [one sentence]
  Reads: [file paths]
  Produces: [output path]
  Dependency confirmed: [file at path] ✅

Agent 2: [name]
  ...

Waiting for go.
```

Wait for explicit approval before launching.

### 3.4 No Work Without Explicit Human Approval

No work proceeds without the human's explicit approval for that specific action. This applies to:
- Agent spawns
- File writes or edits
- Docs.json changes
- Any reconsolidation action (file moves, merges, drops)

Describing the next task is not approval to execute it. State what comes next and wait.

---

## Part 4 — Tab Priority Order

**Confirmed by human 2026-03-23. This order governs all sequencing decisions.**

1. Orchestrators
2. Gateways
3. Developers
4. About
5. Delegators

Tabs are reviewed and locked one at a time in priority order. Human reviews IA for priority 1 tab first. Once locked, agents run for that tab. Priority 2 does not unlock until priority 1 IA is locked.

Within a tab, phases are sequential. Cross-tab phases (Phase 12) require all tabs to have completed their upstream phases.

---

## Part 5 — Per-Tab Flow (the Only Correct Sequence)

**This is the only correct execution sequence for each tab. No step may be skipped. No step may proceed without its stated dependencies.**

For each tab, in priority order (Orchestrators → Gateways → Developers → About → Delegators):

### Step 1 — IA Review (Human)
**Who**: Human
**Dependency**: Phase 1 canonical collation output exists for this tab at `Prompts/Prompts-By-Phase/1-audience-design/testing/Tabs/[tab]/collated/canonical-[tab]-audience-design.md`
**Action**: Human reviews IA output one section at a time in chat — not all at once. Human reviews each section, raises questions, confirms before moving to next.
**Unblocks**: Step 2

### Step 2 — Phase 1b Persona Iteration Check (Agent)
**Who**: Agent
**Dependency**: Step 1 complete AND raw v1+v2 inventory pack exists at `context-packs/[tab]-research-pack.md`
**Action**: Agent reads raw inventory pack + current canonical IA. Flags content patterns not covered by existing personas.
**Output**: Either confirms IA is sufficient, or lists content patterns and audience segments implied by existing content that have no section.
**Unblocks**: Step 3 (human decision on flags)

### Step 3 — Human Iteration Decision
**Who**: Human
**Dependency**: Step 2 output reviewed
**Action**: For each flag, human decides: (a) existing persona covers it — no change; (b) add persona to IA — triggers audience design iteration run → updated IA → back to Step 2; (c) deprioritise — no change
**Unblocks**: Step 4 (when all flags resolved)

### Step 4 — Human Locks IA (Gate)
**Who**: Human — explicit sign-off required
**Dependency**: All Step 3 decisions resolved and documented in `decision-registry.md`
**Action**: Human explicitly states "IA locked for [tab]" — this is the IA Approved gate on the Tab Status Board
**Unblocks**: Steps 5 and 6 (can run in parallel after lock)

### Step 5 — Retroactive Check B Validation (Agent, if not yet done)
**Who**: Agent
**Dependency**: IA locked (Step 4)
**Action**: Single agent runs Check B review against Phase 1 canonical output — verifies correct linear/on-demand section positioning
**Output**: `Prompts/Prompts-By-Phase/1-audience-design/testing/Tabs/[tab]/validation-check.md`
**Note**: Gateways and Orchestrators have already passed Check B validation.
**Unblocks**: Phase 2 (Content Scan) for this tab

### Step 6 — Deep Glossary Research Pass (Agent, Claude Web)
**Who**: Agent
**Dependency**: IA locked (Step 4)
**Action**: Reads all glossary terms from the locked IA, cross-checks against veracity sources, returns a canonical terminology file with verified definitions and unresolved ambiguities
**Output**: `context-packs/terminology-draft-[tab].md`
**Unblocks**: Step 8 (human checkpoint)

### Step 7 — Phase 2: Content Scan (Agent)
**Who**: Agent
**Dependency**: Check B validation passed (Step 5) AND `content-scan.md` prompt approved and in production
**Action**: Reads `docs.json` + all `.mdx` under `v2/[tab]/`. Produces per-page inventory.
**Output**: `context-packs/[tab]-content-scan.md`
**Unblocks**: Step 9 (human checkpoint) → Phase 3

### Step 8 — Human Checkpoint: Research Pack + Terminology
**Who**: Human
**Dependency**: Step 6 output available
**Action**: Human reviews terminology draft, resolves ambiguities, confirms canonical terms
**Unblocks**: Phase 3.5 (Terminology Lock)

### Step 9 — Human Checkpoint: Content Scan
**Who**: Human
**Dependency**: Step 7 output available
**Action**: Human reviews content scan output + review agent findings. Approves before Phase 3 runs.
**Unblocks**: Phase 3 (IA Audit / Structure Audit)

### Step 10 — Phase 2.5: IA-Mapped Research Pack (Agent)
**Who**: Agent
**Dependency**: IA locked (Step 4) — this pack is built from scratch using approved IA as primary structure, NOT from raw inventory
**Action**: Maps existing v1+v2 content against approved IA sections. One section per approved IA section.
**Output**: `context-packs/[tab]-research-pack-v2.md`
**Note**: The raw inventory packs (`[tab]-research-pack.md`) are secondary tier reference only — NOT the final research packs.
**Unblocks**: Human review per section before content writing begins

### Step 11 — Phase 3: IA Audit / Structure Audit (Agent)
**Who**: Agent
**Dependency**: Content scan approved (Step 9) AND `context-packs/[tab]-content-scan.md` exists
**Action**: Maps ideal sections against actual content. Produces gap analysis, orphan analysis, P0/P1/P2 work order.
**Output**: `v2/[tab]/_workspace/tab-map.md`
**Unblocks**: Step 12 (human checkpoint + persona journey smoke-test)

### Step 12 — Human Approves Tab Map + Persona Journey Smoke-Test (Gate)
**Who**: Human
**Dependency**: Step 11 output available AND persona journey smoke-test completed
**Persona journey smoke-test** (required, ~20 min per persona): For each primary persona, trace the linear journey through the tab-map and confirm: (1) first page answers the persona's arriving question; (2) each page in the linear sequence explicitly hands off to the next; (3) no required job-to-be-done is only in on-demand positions (4–6). Failing personas block approval.
**Action**: Human approves tab-map — this is the **Structure Approved gate** on the Tab Status Board
**Unblocks**: Phase 3.5 (Terminology Lock) and Phase 4 (Content Audit)

### Step 13 — Phase 3.5: Terminology Lock
**Who**: Human + Agent
**Dependency**: Tab map approved (Step 12) AND all BLOCKING items from `blocking-items.md` resolved
**Action**: Resolve all blocking items. Lock terminology in `v2/[tab]/resources/glossary.mdx`. Run section titles through naming rubric (≥20/25).
**Note**: `resources/glossary.mdx` is human-made and authoritative. `resources/compendium/glossary.mdx` is AI-generated and unverified — review it against the human version before trusting anything in it.
**Unblocks**: Phase 6 (Content Pass) for this tab — **Terminology Locked gate** on Tab Status Board

### Step 14 — Phase 4: Content Audit (Agent, AUDIT mode)
**Who**: Agent
**Dependency**: Tab map exists (Step 11 output)
**Action**: Reviews every existing page per section group. Per page: KEEP / MOVE / MERGE / SPLIT / REWRITE / DROP with rationale. Produces reconsolidation plan.
**Output**: `context-packs/[tab]/[group]-audit.md`
**Unblocks**: Step 15 (human approval of reconsolidation plan)

### Step 15 — Human Approves Reconsolidation Plan (Gate — hard stop)
**Who**: Human — explicit sign-off required on every move, merge, and drop
**Dependency**: Step 14 output reviewed
**Action**: Human reviews and explicitly approves every AUDIT decision before any file move executes. Once approved, moves are non-negotiable.
**Unblocks**: Phase 4.5 (Reconsolidation execution)

### Step 16 — Phase 4.5: Reconsolidation (Agent)
**Who**: Agent
**Dependency**: Reconsolidation plan approved (Step 15)
**Action**: Execute approved plan — `docs.json` changes drafted, human confirms, file moves executed, stub files created at old paths, link validation run, content scan re-run to reflect new paths.
**Pipeline mapping required before any file move**: confirm what the file serves, what reads it, what else writes to it, what the replacement is.
**Unblocks**: Phase 6 (Content Pass) — **Content Pass Open gate** requires this complete plus all Phase 6 hard dependencies met

### Step 17 — Phase 6: Content Pass (WRITE/REVIEW/REWRITE)
**Who**: Agent
**Dependency — ALL must be true before Phase 6 starts for this tab**:
- Tab map exists and approved (`v2/[tab]/_workspace/tab-map.md`)
- Voice rules confirmed for tab's audience
- Canonical audience design approved
- Terminology locked (Phase 3.5 complete)
- Section naming rubric loaded
- AUDIT mode exists in `content-pass.md`
- Feedback routing map exists (`decisions/feedback-routing-map.md`) — **Content Pass Open gate**
**Action**: Per page — AUDIT decision → if WRITE/REWRITE, run WRITE mode with approved brief. Human approves every page brief before writing begins. Human reviews every WRITE output before it moves to Phase 8.
**Process**: Section by section, per the approved IA map. Full tab is not done as a batch.
**Unblocks**: Phase 8 (Naming Audit) per page

### Step 18 — Phase 8: Naming Audit (Agent, before Phase 7)
**Who**: Agent
**Dependency**: Phase 6 content approved for this page
**Note**: Phase 8 runs BEFORE Phase 7 (Veracity). Naming changes after veracity markers are placed orphan the markers.
**Action**: Score every section heading against naming rubric (minimum 20/25). Headings scoring <20 must be revised.
**Unblocks**: Phase 7 (Veracity Pass) for this page

### Step 19 — Phase 7: Veracity Pass + Glossary Update Loop
**Who**: Agent
**Dependency**: Phase 8 (naming) complete for this page AND `veracity-pass.md` approved and in production
**Action**: (1) Flag unverifiable claims, place REVIEW markers, set `veracityStatus` in frontmatter; (2) Feed verified terminology back to `v2/[tab]/resources/glossary.mdx`
**Note**: Write only to `resources/glossary.mdx` (human-authored, authoritative). Never write to `resources/compendium/glossary.mdx`.
**Unblocks**: Human review of veracity markers → Phase 10 (Layout Pass) when all markers cleared

### Step 20 — Phase 10: Layout Pass
**Who**: Agent
**Dependency**: Phase 6 + Phase 8 + Phase 7 all complete and human-approved for this page
**Action**: Apply templates, components, frontmatter, naming, UK English, render validation.
**Unblocks**: Phase 11 (Universal Pages) — deferred until first tab is 70%+ through Phase 6

---

## Part 6 — What Agents Must Never Do

These are hard prohibitions. An agent about to do any of the following must stop and report rather than proceed.

1. **Spawn based on "what comes next in the plan" without confirming dependencies exist.** Every dependency must be confirmed as present at its exact path before spawning.

2. **Trust the prompt author's dependency list over plan-canonical.md.** The agent derives its own dependency list from the plan. The prompt author may be wrong.

3. **Work in the main thread.** File edits, analysis, writing — all go to agents. Main thread = human decisions and checkpoints only.

4. **Proceed if a required file does not exist.** Return `DEPENDENCY FAILED` and stop.

5. **Skip the session start protocol.** All six session-start files must be read before any work begins.

6. **Fix things as they are found during an audit.** Gather all findings, present as a structured report, get scope approval, then execute.

7. **Auto-proceed when the next step feels obvious.** Describe the next task. Wait for go.

8. **Move, remove, or disable any pipeline component without mapping upstream and downstream first.** No silent removals. No workarounds disguised as fixes.

9. **Write to `resources/compendium/glossary.mdx` as if it is authoritative.** It is AI-generated and unverified. The authoritative file is `resources/glossary.mdx`.

10. **Treat a decision not in `decision-registry.md` as locked.** Decisions made in chat that are not in the registry do not exist. They cannot be built on.

11. **Spawn more than one agent batch per message when the second batch depends on the first completing.** Wait for real dependencies to resolve.

12. **Write decisions, naming conventions, or classifications only in chat.** All such artefacts must be written to the relevant canonical file before the session ends or context resets.

---

## Part 7 — Human Decision Gates

These are open decisions that cannot be resolved by agents. They must be decided by the human authority and recorded in `decision-registry.md` before the phases that depend on them can run.

**No phase may consume a decision that is not in the decision-registry.md.**

| Decision | Tab | Blocks | Status |
|---|---|---|---|
| Rewards placement — before or after operator selection? | Delegators | Phase 3 | Open |
| S6 split — real-time / custom compute: split into two sections or keep merged? | Developers | Phase 3 | Open |
| Tab structure: Delegators, About, Developers reorganisation scope | All 3 | Phase 2+ | Open |
| About multi-audience model — how is audience documented in frontmatter for a multi-audience tab? | About | Phase 6+ | Open |
| v1 vs v2 canonical path — confirm `v2/[tab]/` is the canonical source for all Phase 2+ work | All tabs | Phase 3 | Open |
| NaaP full terminology lock — style guide confirmation | Gateways | Terminology lock (Phase 3.5) | Open |
| Glossary authority per tab — confirm `resources/glossary.mdx` is human-authoritative vs `resources/compendium/glossary.mdx` | All tabs | Phase 3.5 | Open |
| Confirm / record NaaP, BYOC, LIP-92 verification status | All tabs | Phase 3.5 | Open |
| Phase 12 trigger — run once (all 5 tabs complete) or incrementally (minimum 3 tabs)? | All tabs | Phase 12 | Open |
| Named decision authority + reversal condition for each BLOCKING structural decision | All tabs | Phase 3 | Open |
| Human review + lock IA — Orchestrators (Priority 1) | Orchestrators | Phase 1b + all downstream | Open |
| Human review + lock IA — Gateways (Priority 2) | Gateways | Phase 1b + all downstream | Open |

**Decision authority rule**: Every structural decision in `decision-registry.md` must record: named decision authority (who has the right to decide), information required before deciding, and a reversal condition. Without reversal conditions, a structural decision reversed after Phase 3 requires rebuilding the tab-map, reconsolidation plan, all page briefs, and all affected content.

---

## Part 8 — Current Completed Outputs

These files exist and are available as inputs. Agents may treat them as confirmed at these paths.

### Context-Pack Files (Completed)

| File | Contents | What it unblocks |
|---|---|---|
| `context-packs/orchestrators-ia-prereq.md` | Folder tree + nav tree + discrepancies | Human IA review (Orchestrators) |
| `context-packs/gateways-ia-prereq.md` | Folder tree + nav tree + discrepancies | Human IA review (Gateways) |
| `context-packs/developers-ia-prereq.md` | Folder tree + nav tree + discrepancies | Human IA review (Developers) |
| `context-packs/about-ia-prereq.md` | Folder tree + nav tree + discrepancies | Human IA review (About) |
| `context-packs/delegators-ia-prereq.md` | Folder tree + nav tree + discrepancies | Human IA review (Delegators) |
| `context-packs/gateways-full-content.md` | 536 files, 3.67MB, all v2 Gateways content | Phase 1b persona emergence (Gateways) — waiting on v1 |

### Phase 1 — Check B Validation (Completed)

| Tab | Status |
|---|---|
| Gateways | Check B validated and approved |
| Orchestrators | Check B validated and approved |

### PM Infrastructure Files (Completed)

| File | Purpose |
|---|---|
| `decisions/decision-registry.md` | Authoritative record of all locked structural decisions |
| `decisions/blocking-items.md` | Runtime blocking item tracker |
| `decisions/tab-status.md` | Per-tab gate tracking board |
| `decisions/feedback-routing-map.md` | Correction → definition file routing |
| `decisions/cross-tab-journeys.md` | Cross-tab graduation paths and CTAs |
| `prompt-testing-protocol.md` | Simplified protocol: 1 review agent + 3 test runs |

### Prompt Infrastructure (Completed — Awaiting Test/Approval)

| File | Status |
|---|---|
| `Prompts/Prompts-By-Phase/2-content-scan/content-scan.md` | Built + tested on Gateways (pilot complete) |
| `Prompts/Prompts-By-Phase/3-content-pass/content-pass.md` | AUDIT mode built; false warning removed; awaiting test |
| `Prompts/Prompts-By-Phase/7-veracity-pass/veracity-pass.md` | Built, DRAFT — awaiting 1 review agent + 3 test runs + human approval |
| `Prompts/Prompts-By-Phase/7-veracity-pass/pack-guide.md` | Built |

### Frameworks (Locked)

| File | Status |
|---|---|
| `Frameworks/veracity.md` | Locked 2026-03-23 |
| `Frameworks/veracity-library.md` | Complete — 45 sources |

### Raw Inventory Packs (Secondary Tier — Not Final Research Packs)

These exist and are available as secondary reference only. Do NOT use as the final IA-mapped research packs. Phase 2.5 builds the final packs from scratch after IA is locked.

| File | Tab | Notes |
|---|---|---|
| `context-packs/gateways-research-pack.md` | Gateways | Raw inventory — secondary reference only |
| `context-packs/orchestrators-research-pack.md` | Orchestrators | Raw inventory — secondary reference only |
| `context-packs/developers-research-pack.md` | Developers | Raw inventory — secondary reference only |
| `context-packs/about-research-pack.md` | About | Raw inventory — secondary reference only |
| `context-packs/delegators-research-pack.md` | Delegators | Raw inventory — secondary reference only |

---

## Part 9 — Decision Registry Summary

One locked structural decision exists as of 2026-03-23. No phase may build on a decision not in this registry.

| ID | Decision | Tab(s) | Date |
|---|---|---|---|
| D-NAV-01 | `pageType: navigation` disambiguation page is a locked cross-tab pattern — one file per tab, shared entry point for all paths, all downstream sections reference it | All tabs with multiple setup paths (Orchestrators confirmed; apply to Gateways, Developers, and any other multi-path tab) | 2026-03-23 |

**D-NAV-01 full statement**: The S1 section on each multi-path tab is a single shared navigation file (e.g. "Which path is mine?") — not duplicated per persona, not treated as an instruction page. Any agent producing Phase 2.5 packs or Phase 6 briefs for a multi-path tab must apply this pattern without re-confirmation. This decision holds as long as `pageType: navigation` remains a canonical page type.

Full entry: see `decisions/decision-registry.md`.

---

## Part 10 — Currently Running Agents

As of the last project-state.md update (2026-03-23):

| Agent ID | Purpose | Output path | Waiting on |
|---|---|---|---|
| a735b8249f782fe94 | Orchestrators v2 full content read | `context-packs/orchestrators-full-content.md` | In flight |
| a39bdf3f9b89f4ad2 | Developers v2 full content read | `context-packs/developers-full-content.md` | In flight |
| a042f8dd8ad90c491 | About v2 full content read | `context-packs/about-full-content.md` | In flight |
| aa3cbbf9120f25e16 | Delegators v2 full content read | `context-packs/delegators-full-content.md` | In flight |
| a598531df4d8fc98a | Orchestrators v1 full content read | `context-packs/orchestrators-v1-content.md` | In flight |
| a09fc49d79c3fe577 | Gateways v1 full content read | `context-packs/gateways-v1-content.md` | In flight |
| a2d89c404dfa8e9b9 | Developers v1 full content read | `context-packs/developers-v1-content.md` | In flight |
| a508a62e906465ea7 | About v1 full content read | `context-packs/about-v1-content.md` | In flight |
| a3c404cb3c76ae374 | Delegators v1 full content read | `context-packs/delegators-v1-content.md` | In flight |

These agents unblock Phase 1b persona emergence per tab, which requires both v1 and v2 full content complete. Check `project-state.md` for current status — this file reflects state at time of writing, not live state.

---

## Revision Policy

This document is updated when:
- A new systemic process rule is established
- A structural decision changes how the per-tab flow operates
- A new human decision gate is identified
- The session start protocol changes

Updates are made by an agent at the human's direction. The human must approve the update. The date at the top of this file is updated on every revision.

Do not update this file to reflect agent completion status or running agent lists — those live in `project-state.md`.
