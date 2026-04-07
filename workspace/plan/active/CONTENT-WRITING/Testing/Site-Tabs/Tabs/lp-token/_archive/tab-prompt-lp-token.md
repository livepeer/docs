# Livepeer Docs — Tab IA Design Prompt
## LP Token

**Your task**: Execute the phases below in order and produce the output document at the end. Do not revise or comment on these instructions. Do not summarise what you are about to do. Begin Phase 1 immediately and work through each phase until you reach the Output section, then produce the complete document.

**No repo access during this prompt.** Design for the reader, not for the current structure.

---

## Context

```
TAB:               LP Token
AUDIENCE:          delegator
ARRIVING_QUESTION: "How do I stake my LPT and earn rewards without running infrastructure?"
PERSONAS:          staker (rank 1), strategist (rank 2), voter (rank 3), proposer (rank 4)
EXISTING_RESEARCH: none
```

**Persona definitions**:
- `staker` — first-time or casual LPT holder; wants to delegate and earn; not deeply engaged with protocol
- `strategist` — actively managing delegation; evaluating orchestrators; optimising yield; experienced with DeFi
- `voter` — evaluates and votes on governance proposals; needs to understand what is at stake before voting
- `proposer` — drafts LIPs, SPE proposals, or treasury requests; needs process knowledge and templates

---

## Site Ownership Map

Use this to check cross-tab boundaries. Every section you propose must survive: "Does another tab already own this?"

```
Tab        | What it owns                                                                                          | Does NOT own
-----------|-------------------------------------------------------------------------------------------------------|--------------------------------------------------------------
Home       | Platform narrative; value proposition; audience routing                                               | Any role-specific operational content
About      | Protocol and network architecture; actor definitions; tokenomics; governance model; economics          | Operational guides, product features, setup instructions
Solutions  | Consumer and platform-builder products; Livepeer Studio product documentation                          | Infrastructure operation, gateway/orchestrator setup, token governance
Developers | Custom AI pipeline and livestream application development; integration patterns; SDK/API reference      | Gateway business operation; orchestrator node management; token governance
Gateways   | Gateway operator concepts, quickstart, setup, operational guides, business model content                 | Orchestrator node specifics; token governance; developer tutorials
Orchestrators | Orchestrator concepts, quickstart, setup, guides, resources                                          | Gateway business operation; token governance; developer SDK usage
LP Token   | What LPT is; delegation mechanics; governance participation; treasury; staking and earning               | Infrastructure operation; video/AI technical content; product documentation
Community  | Community identity and contribution — guidelines, events, contribution paths, forums                    | Technical operation; protocol reference; product documentation
Resource HUB | Cross-cutting reference material — changelog, glossaries, documentation guide, reference indexes     | Role-specific operational guidance; product documentation
```

**Boundary rules relevant to LP Token**:
- **LP Token ↔ About**: About explains token economics conceptually (why LPT exists, how the tokenomic model works). LP Token explains how to participate (how to delegate, how to vote, how to earn). Conceptual tokenomics → About. Participation mechanics → LP Token.
- **LP Token ↔ Community**: Community owns governance discussion and forums. LP Token owns governance voting mechanics — how to read proposals, cast votes, track outcomes.
- **LP Token ↔ Orchestrators**: Orchestrators own setting reward/fee cut (operator config). LP Token owns reading/interpreting reward/fee cut as a delegator selection signal.

---

## Framework Reference

Canonical enums. Use these tokens exactly in your output.

### Purpose (15 values — what each section does for the reader)

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

### lifecycleStage (7 values — where the reader is in their journey)

| Token | Reader state |
|---|---|
| `discover` | First encounter — forming a picture of what Livepeer is |
| `evaluate` | Deciding whether to use Livepeer for their use case |
| `setup` | Getting something working for the first time |
| `build` | Actively implementing something specific |
| `operate` | Running something in production |
| `troubleshoot` | Diagnosing a specific problem |
| `optimise` | Improving something already working |

### pageType (7 values — structural type of each section)

| Token | What it is |
|---|---|
| `navigation` | Routes the reader — portals, landings, section roots |
| `concept` | Explains a mechanism or system |
| `tutorial` | Learns by building |
| `guide` | Practical understanding of a system |
| `instruction` | Step-by-step task execution |
| `reference` | Structured lookup |
| `resource` | Curated collections and ecosystem material |

---

## Phase 1 — Reader Situation

Answer for `delegator` audience with personas `staker`, `strategist`, `voter`, `proposer`. No repo access. No current structure.

1. What just happened before they arrived at this tab? What triggered the visit?
2. What do they already know at arrival? What do they not know yet?
3. What specific question are they trying to answer? (Not a topic — a question.)
4. What does a successful visit look like? (Concrete outcome or action — not "understanding X".)
5. What are the most common wrong-path risks — misconceptions or misrouting at arrival?

---

## Phase 2 — Jobs to be Done

Generate 5–7 jobs this audience has when visiting this tab.

**Format**: "When [specific situation], I want to [action] so I can [concrete outcome]."

Rules:
- X is specific, not general
- Y is an action, not a topic
- Z is a concrete, verifiable outcome
- Jobs are first-principles — not derived from current nav labels or page titles
- Range: cover arrival jobs, active delegation jobs, governance jobs, and reference/return-visit jobs

**Gate**: Minimum 5 jobs before proceeding to Phase 3.

---

## Phase 3 — Structural Options (Diverge)

Generate 5–7 structurally different ways to organise content for the identified jobs.

Rules:
- Each option must be genuinely different in structure — not just renamed sections
- Do not evaluate during generation — produce all options first
- Explore: action-first vs concept-first; persona-split vs unified; linear progression vs hub-and-spoke; shallow flat vs nested deep

For each option: give it a name and list 4–6 section headings.

**Gate**: Minimum 5 distinct structural options before proceeding to Phase 4.

---

## Phase 4 — Evaluate and Select

Score each option:

| Option | Serves all jobs? | Journey clarity | Section coherence | Cross-tab risk | Score (1–5) |
|---|---|---|---|---|---|

Select the strongest option. State in 2–3 sentences: why it wins, what it sacrifices, any elements from other options worth incorporating.

---

## Phase 5 — Ideal Journey Map

**Linear** (discovery → competency — sequential):

| Position | Stage name | lifecycleStage | What the reader is doing |
|---|---|---|---|

**On-demand** (reference needs — not sequential):

List 4–8 types of information this audience returns for repeatedly outside the linear sequence.

**Cross-tab** (graduation paths and entry points):

| Direction | From/To | Why |
|---|---|---|

Use the site ownership map: which tabs route readers to LP Token, and which tabs does LP Token route readers to?

---

## Phase 6 — Section Shape

For each section in the selected structure:

| Section | Job it does | purpose | pageType | Audience entry state | Audience exit state | lifecycleStage |
|---|---|---|---|---|---|---|

Rules:
- Entry state: what the reader arrives knowing or having
- Exit state: what the reader can do or decide after this section
- Every `purpose`, `pageType`, and `lifecycleStage` value must be from the canonical enums above
- Every section serves a named job from Phase 2
- Cross-tab check: if another tab owns this content, replace with a pointer row and note the owning tab

---

## Quality Gates

Verify before producing output:

- [ ] At least 5 jobs generated before Phase 3
- [ ] At least 5 structural options generated before Phase 4
- [ ] Winner selected with rationale
- [ ] Every section has entry state, exit state, and a named job
- [ ] All tokens are from canonical enums — no invented values
- [ ] No repo paths, folder names, or current page titles referenced
- [ ] Cross-tab check done — no content duplicated from About, Community, or Orchestrators

---

## Output

Produce this document in full. Do not truncate.

```markdown
# LP Token — Audience Design

**Audience**: delegator
**Personas**: staker, strategist, voter, proposer
**Generated**: [date]
**Status**: DRAFT — awaiting checkpoint

---

## Arriving Question

> "[specific question]"

---

## Personas

| Rank | Persona | Arriving with | Wants to leave with |
|---|---|---|---|

---

## Jobs to be Done

| # | When... | I want to... | So I can... |
|---|---|---|---|

---

## Ideal Journey

**Linear**:

| Position | Stage name | lifecycleStage | What they're doing |
|---|---|---|---|

**On-demand**:
- [type 1]
- [type 2]

**Cross-tab**:

| Direction | From/To | Why |
|---|---|---|

---

## Section Shape

| Section | Job | purpose | pageType | Entry state | Exit state | lifecycleStage |
|---|---|---|---|---|---|---|

---

## Structural Options Evaluated

[3–5 sentences: options considered, winner rationale, trade-offs accepted]

---

## ⏸ Checkpoint

- [ ] Arriving question is specific — not a topic, an actual question?
- [ ] Personas are described with motivation — not just role labels?
- [ ] Jobs are first-principles — not derived from current nav structure?
- [ ] Every section has a job, entry state, and exit state?
- [ ] Cross-tab paths identified — no content duplicated from About, Community, or Orchestrators?
- [ ] All enum values are canonical — no invented tokens?
```
