# Livepeer Docs — Tab IA Design Prompt

**Run after the Site Prompt.** Requires the site ownership map from step 1.

One run per tab. Produces Part 2 of the tab's IA map — the canonical audience design that Prompt B audits against.

**No repo access during this prompt.** Design for the reader, not for the current structure.

---

## Context Block

Fill before running. Paste the site ownership map output from the Site Prompt where indicated.

```
TAB:               [tab name — e.g. LP Token, Developers, Community]
AUDIENCE:          [audience token — see framework below]
ARRIVING_QUESTION: [the single question this audience is trying to answer when they arrive]
PERSONAS:          [2–5 persona tokens ranked by arrival likelihood — see framework below]
EXISTING_RESEARCH: [paste confirmed pain points and arrival state findings — OR "none"]
```

**Site ownership map** (paste full output from Site Prompt here):

```
[paste site ownership map]
```

---

## Framework Reference

Canonical enums. Use these tokens exactly — no substitutions.

### Audience

| Token | Who | Primary question |
|---|---|---|
| `founder` | Evaluating Livepeer for their product/business | "Is Livepeer right for my product?" |
| `builder` | Building products using Livepeer APIs/SDKs/hosted gateways | "How do I add Livepeer to my app?" |
| `developer` | Building custom pipelines, BYOC, protocol extensions, tooling | "How do I build something on the network?" |
| `gateway` | Running gateway infrastructure, routing traffic | "How do I set up and run a gateway?" |
| `orchestrator` | Running GPU nodes, providing compute | "How do I set up, run, and earn with a node?" |
| `delegator` | Staking LPT tokens, participating in governance | "How do I stake and participate?" |
| `community` | Ecosystem participation — contributors, governance discourse, newcomers, researchers | "How do I get involved?" |

### Personas by audience

| Audience | Persona tokens |
|---|---|
| `orchestrator` | `operator`, `hobbyist`, `commercial`, `specialist`, `delegate` |
| `gateway` | `graduate`, `provider`, `architect`, `broadcaster`, `platform` |
| `developer` | `network`, `ai`, `tooling`, `core` |
| `builder` | `ai`, `video`, `realtime`, `agent`, `studio`, `daydream`, `frameworks`, `streamplace`, `embody` |
| `delegator` | `staker`, `strategist`, `voter`, `proposer` |
| `founder` | `technical`, `business`, `partner` |
| `community` | `ambassador`, `engager`, `explorer`, `researcher`, `internal` |

### Purpose (15 values)

| Token | What the reader gets |
|---|---|
| `orient` | Understands where they are and which path is theirs |
| `explain` | Understands how a mechanism or system works |
| `learn` | Acquires vocabulary and foundational concepts to proceed |
| `choose` | Makes a confident decision between known options |
| `evaluate` | Forms an informed judgment about viability or comparative value |
| `start` | Reaches a minimal working state quickly |
| `build` | Completes a full end-to-end implementation |
| `configure` | Sets up system options to match their requirements |
| `operate` | Manages a live system day-to-day |
| `troubleshoot` | Diagnoses and resolves a specific problem |
| `verify` | Confirms a system is set up correctly |
| `integrate` | Connects Livepeer with another system |
| `optimise` | Improves a running system on a specific metric |
| `reference` | Finds exact facts, parameters, or specifications |
| `update` | Knows what changed and what action is required |

### lifecycleStage (7 values)

| Token | Where the reader is |
|---|---|
| `discover` | First encounter — forming a picture of what Livepeer is |
| `evaluate` | Deciding whether to use Livepeer for their use case |
| `setup` | Getting something working for the first time |
| `build` | Actively implementing something specific |
| `operate` | Running something in production |
| `troubleshoot` | Diagnosing a specific problem |
| `optimise` | Improving something already working |

### pageType (7 values)

| Token | What it is |
|---|---|
| `navigation` | Routes the reader — portals, tab landings, section roots |
| `concept` | Explains a mechanism or system |
| `tutorial` | Learns by building |
| `guide` | Practical understanding of a system |
| `instruction` | Step-by-step task execution |
| `reference` | Structured lookup |
| `resource` | Curated collections and ecosystem material |

---

## Ownership Check

Before designing, read the site ownership map in the context block.

For every section proposed in Phase 6, verify:

> "Does another tab already own this content?"

If yes → replace the section with a pointer row. Note the owning tab. Do not duplicate content across tabs.

---

## Phase 1 — Reader Situation

Answer for the stated AUDIENCE + PERSONAS. No repo access. No current structure.

1. What just happened before they arrived? (What triggered this visit?)
2. What do they already know? What do they not know yet?
3. What specific question are they trying to answer? (Not a topic — a question.)
4. What does a successful visit look like? (Concrete outcome or action — not "understanding X".)
5. What are the most common wrong-path risks — misconceptions or misrouting at arrival?

If EXISTING_RESEARCH was provided, use it to sharpen answers 1, 2, and 5. Do not use it to anchor the structure.

---

## Phase 2 — Jobs to be Done

Generate 5–7 jobs this audience has when visiting this tab.

**Format**: "When [specific situation], I want to [action] so I can [concrete outcome]."

Rules:
- X is specific, not general: "I have 2 GPUs and no LPT stake" not "I have hardware"
- Y is an action, not a topic: "understand the difference between pool worker and solo operator"
- Z is a concrete outcome: "start the right setup path without wasting time on the wrong one"
- Jobs are first-principles — not derived from current nav labels or page titles
- Range: cover arrival jobs, operational jobs, and reference/return-visit jobs

**Gate**: Minimum 5 jobs before proceeding to Phase 3.

---

## Phase 3 — Structural Options (Diverge)

Generate 5–7 structurally different ways to organise content for the identified jobs.

Rules:
- Each option must be genuinely different — not just renamed sections
- Do not evaluate during generation — produce all options first
- Explore: linear journey vs hub-and-spoke; persona-first vs lifecycle-first; task-first vs concept-first; flat vs nested

For each option: name it and list 4–6 section headings.

**Gate**: Minimum 5 distinct structural options before proceeding to Phase 4.

---

## Phase 4 — Evaluate and Select

Score each option:

| Option | Serves all jobs? | Journey clarity | Section coherence | Cross-tab risk | Score (1–5) |
|---|---|---|---|---|---|

Select the strongest option. State in 2–3 sentences:
- Why it wins
- What it sacrifices
- Any elements from other options worth incorporating

---

## Phase 5 — Ideal Journey Map

**Linear** (discovery → competency — sequential, must be served in order):

| Position | Stage name | lifecycleStage | What the reader is doing |
|---|---|---|---|

**On-demand** (reference needs — not sequential, reader returns for these):

List 4–8 types of information the audience returns for repeatedly, outside the linear sequence.

**Cross-tab** (graduation paths and entry points):

| Direction | From/To | Why |
|---|---|---|

Use the site ownership map: which tabs send readers HERE, and which tabs does this tab graduate readers TO?

---

## Phase 6 — Section Shape

For each section in the selected structure:

| Section | Job it does | purpose | pageType | Audience entry state | Audience exit state | lifecycleStage |
|---|---|---|---|---|---|---|

Rules:
- Entry state: what the reader arrives knowing/having
- Exit state: what the reader can do or decide after this section
- `purpose` must be from the 15-value enum
- `pageType` must be from the 7-value enum
- `lifecycleStage` must be from the 7-value enum
- Every section serves a named job from Phase 2
- Cross-tab check: if another tab owns this content, replace with a pointer row

---

## Quality Gates

Verify before producing output:

- [ ] At least 5 jobs generated before Phase 3
- [ ] At least 5 structural options generated before Phase 4
- [ ] Winner selected with rationale — not defaulted to "most common structure"
- [ ] Every section has entry state, exit state, and a named job it serves
- [ ] All tokens are from canonical enums — no invented values
- [ ] No repo paths, folder names, or current page titles in the design
- [ ] Cross-tab check done — no content duplicated from another tab
- [ ] Arriving question is a specific question, not a topic area

---

## Output

Paste this directly into the tab's IA map as Part 2.

```markdown
## Part 2 — Audience Design

**Status**: DRAFT — awaiting checkpoint
**Generated**: [date]

### Arriving Question

> "[specific question]"

### Personas

| Rank | Persona | Arriving with | Wants to leave with |
|---|---|---|---|
| 1 | **[Name]** — [archetype description] | | |

### Jobs to be Done

| # | When... | I want to... | So I can... |
|---|---|---|---|

### Ideal Journey

**Linear**:
| Position | Stage name | lifecycleStage | What they're doing |
|---|---|---|---|

**On-demand**:
- [type 1]

**Cross-tab**:
| Direction | From/To | Why |
|---|---|---|

### Section Shape

| Section | Job | purpose | pageType | Entry state | Exit state | lifecycleStage |
|---|---|---|---|---|---|---|

### Structural Options Evaluated

[3–5 sentences: options considered, winner rationale, trade-offs accepted]
```

---

## ⏸ Checkpoint

Human validation required before Prompt B (audit) runs on this tab.

- [ ] Arriving question is specific — not a topic, an actual question?
- [ ] Personas are named archetypes with motivation — not role tokens?
- [ ] Jobs are first-principles — not derived from current nav structure?
- [ ] Every section has a job, entry state, and exit state?
- [ ] Cross-tab paths identified — no content duplicated from another tab?
- [ ] All enum values are canonical — no invented tokens?
