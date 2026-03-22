# Level 1 — Prompt A: Tab Audience Design

**Status**: ✅ Ready
**Step**: 16 (Content Writing Pipeline)
**Purpose**: Produces the canonical audience design for one tab — what SHOULD exist from first principles, independent of what currently exists. This is Part 2 of the tab's IA map and the target that Prompt B measures existing content against.

**No repo access during this prompt.** The goal is to design for the reader, not to reproduce the current structure.

---

## Context Block

Fill before running. These are the only tab-specific inputs needed.

```
TAB:               [tab name — e.g. Orchestrators, LP Token, Developers]
AUDIENCE:          [one audience token — see enum below]
ARRIVING_QUESTION: [the single question this audience is trying to answer when they arrive]
PERSONAS:          [2–5 persona tokens ranked by arrival likelihood — see enum below]
EXISTING_RESEARCH: [paste key findings from Part 1 research — OR "none"]
SITE_OWNERSHIP:    [paste contents of site-map.md — required]
```

**EXISTING_RESEARCH rule**: If provided, read as design input only — to understand confirmed pain points and arrival states. Do not anchor section structure to what currently exists. The goal is the ideal, not the actual.

---

## Framework Reference

These enums are canonical. All output must use these tokens exactly — no substitutions.

### Audience

| Token | Who | Arriving question |
|---|---|---|
| `founder` | Evaluating Livepeer for their product/business | "Is Livepeer right for my product?" |
| `builder` | Building products using Livepeer APIs/SDKs/hosted gateways | "How do I add Livepeer to my app?" |
| `developer` | Building custom pipelines, BYOC, protocol extensions, tooling | "How do I build something on the network?" |
| `gateway` | Running gateway infrastructure, routing traffic | "How do I set up and run a gateway?" |
| `orchestrator` | Running GPU nodes, providing compute | "How do I set up, run, and earn with a node?" |
| `delegator` | Staking LPT tokens | "How do I stake and participate?" |
| `community` | Ecosystem participation — contributors, governance, newcomers, researchers | "How do I get involved?" |

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

### Purpose (15 values — label what each section does for the reader)

| Token | What the reader gets |
|---|---|
| `orient` | Understands where they are and which path is theirs |
| `explain` | Understands how a mechanism or system works |
| `learn` | Acquires vocabulary and foundational concepts needed to proceed |
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

### lifecycleStage (7 values — where the reader is in their overall journey)

| Token | Reader state |
|---|---|
| `discover` | First encounter — forming a picture of what Livepeer is |
| `evaluate` | Deciding whether to use Livepeer for their use case |
| `setup` | Getting something working for the first time |
| `build` | Actively implementing something specific |
| `operate` | Running something in production |
| `troubleshoot` | Diagnosing a specific problem |
| `optimise` | Improving something already working |

### pageType (7 values — label the structural type of each section)

| Token | What it is |
|---|---|
| `navigation` | Routes the reader — portals, tab landings, section roots |
| `concept` | Explains a mechanism or system |
| `tutorial` | Learns by building |
| `guide` | Practical understanding of a system |
| `instruction` | Step-by-step task execution |
| `reference` | Structured lookup |
| `resource` | Curated collections and ecosystem material |

### Industry (governs terminology register and voice)

`technical` · `finance` · `economics` · `business` · `marketing` · `governance` · `broadcast` · `AI` · `livepeer`

---

## Site Ownership Check

Before designing, read the SITE_OWNERSHIP map provided in the context block.

For every section proposed in Phase 6, apply this test:

> "Does another tab already own this content?"

If yes: the section becomes a pointer with a one-sentence orientation and a cross-tab link — not a content section. Duplication across tabs is a structural failure, not a content gap.

---

## Phase 1 — Reader Situation

Answer for the stated AUDIENCE + PERSONAS. No repo access. No current structure.

1. What just happened before they arrived at this tab? (What triggered the visit — what were they doing or reading immediately before?)
2. What do they already know at arrival? What do they not know yet?
3. What are they trying to figure out? (A specific question, not a topic area.)
4. What would make this visit a success? (A concrete outcome or action they can take — not "understanding X".)
5. What are the most common wrong-path risks — misconceptions or misrouting that sends them somewhere unhelpful?

Record answers. Proceed to Phase 2.

---

## Phase 2 — Jobs to be Done

Generate 5–7 jobs this audience has when visiting this tab.

**Format**: "When [X], I want to [Y] so I can [Z]."

Rules:
- X is a specific situation, not a generalisation ("I have 2 GPUs and no LPT" not "I have hardware")
- Y is an action ("understand the difference between pool worker and solo operator") not a topic ("understand pools")
- Z is a concrete outcome ("start the right setup path without wasting time on the wrong one")
- Jobs must be first-principles — do not derive them from current nav labels or page titles
- Cover the full range: arrival/orientation jobs, operational jobs, reference/return-visit jobs

**Gate**: Do not proceed to Phase 3 until at least 5 distinct jobs are written.

---

## Phase 3 — Structural Options (Diverge)

Generate 5–7 structurally different ways to organise content for the identified jobs.

Rules:
- Each option must be genuinely different in structure — not just renamed sections
- Do not evaluate during generation — produce all options before assessing any
- Consider structural variations: linear journey vs hub-and-spoke; persona-first vs lifecycle-stage-first; task-first vs concept-first; flat vs nested sections; broad shallow vs narrow deep

For each option: give it a name and list 4–6 section headings.

**Gate**: Do not proceed to Phase 4 until at least 5 distinct structural options are written.

---

## Phase 4 — Evaluate and Select

Score each option:

| Option name | Serves all 5+ jobs? | Journey clarity | Section coherence | Cross-tab risk | Winner? |
|---|---|---|---|---|---|

Select the strongest option. State in 2–3 sentences why it wins and what it sacrifices.

Note any elements from other options worth incorporating into the winner.

---

## Phase 5 — Ideal Journey Map

**Linear** (discovery → competency — must be served in sequence):

| Position | Stage name | lifecycleStage | What the reader is doing at this stage |
|---|---|---|---|

**On-demand** (reference needs — not sequential, reader returns for these):

List 4–8 types of information this audience will return for repeatedly, outside the linear sequence.

**Cross-tab** (graduation paths and entry points):

| Direction | From/To | Why — what sends them there or brings them here |
|---|---|---|

Use the site ownership map to identify: which tabs route readers TO this tab, and which tabs this tab graduates readers TO.

---

## Phase 6 — Section Shape

For each section in the selected structure:

| Section | Job it does | purpose | pageType | Audience entry state | Audience exit state | lifecycleStage |
|---|---|---|---|---|---|---|

Rules:
- Every section must have a clear entry state (arrives knowing...) and exit state (leaves able to...)
- `purpose` must be from the 15-value canonical enum
- `pageType` must be from the 7-value canonical enum
- `lifecycleStage` must be from the 7-value canonical enum
- No section can be justified by "we need this content somewhere" — every section serves a named job from Phase 2
- Cross-tab check applied: if a section's content is owned by another tab, replace with a pointer row and note the owning tab

---

## Quality Gates

Verify before producing output:

- [ ] Reader situation answered — 5 specific questions, not generalisations
- [ ] At least 5 distinct jobs-to-be-done written before Phase 3 began
- [ ] At least 5 structurally different options generated before any were evaluated
- [ ] Winner selected with rationale — not default to "most common structure"
- [ ] Every section has a stated purpose, entry state, and exit state
- [ ] All `purpose` tokens are from the canonical 15-value enum
- [ ] All `lifecycleStage` tokens are from the canonical 7-value enum
- [ ] No repo paths, folder names, or current page titles referenced in the design
- [ ] Cross-tab ownership checked — no section duplicates another tab's owned content
- [ ] Arriving question is a specific question, not a topic

---

## Output

Produce the following. This becomes Part 2 of `v2/_workspace/context-packs/[tab-slug]-ia-map.md`.

```markdown
## Part 2 — Audience Design

**Status**: DRAFT — awaiting checkpoint before Prompt B runs
**Generated**: [date]

### Arriving Question

> "[The single question this audience is trying to answer]"

### Personas

Named archetypes with motivation built in — not role tokens. Ranked by arrival likelihood.

| Rank | Persona | Arriving with | Wants to leave with |
|---|---|---|---|
| 1 | **[Name]** — [one-sentence archetype description] | [what they arrive knowing/having] | [what success looks like] |

### Jobs to be Done

| # | When... | I want to... | So I can... |
|---|---|---|---|

### Ideal Journey

**Linear** (discovery → competency — served in sequence):

| Position | Stage name | lifecycleStage | What they're doing |
|---|---|---|---|

**On-demand** (reference needs — not sequential):

- [type 1]
- [type 2]

**Cross-tab** (graduation paths and entry points):

| Direction | From/To | Why |
|---|---|---|
| → | [this tab] → [other tab] | [reason] |
| ← | [other tab] → [this tab] | [reason] |

### Section Shape

| Section | Job | purpose | pageType | Audience entry state | Audience exit state | lifecycleStage |
|---|---|---|---|---|---|---|

### Structural Options Evaluated

[3–5 sentences: options considered, why winner was selected, what it sacrifices]
```

---

## ⏸ Checkpoint (human validation required before Prompt B runs)

- [ ] Arriving question is specific — not a topic area, an actual question?
- [ ] Personas are named archetypes with motivation — not role tokens?
- [ ] Jobs-to-be-done are first-principles — not derived from current nav structure?
- [ ] Section shape serves the identified jobs — every section has a job?
- [ ] Cross-tab paths correctly identified — no content duplicated from another tab?
- [ ] All enum values match canonical framework — no invented tokens?
