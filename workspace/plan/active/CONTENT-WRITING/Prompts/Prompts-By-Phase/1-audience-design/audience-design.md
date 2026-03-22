# Livepeer Docs — Tab IA Design Prompt
## Prompt A · Personas + Journeys + Ideal IA

**Your task**: Execute the phases below in order and produce the output document at the end. Do not revise or comment on these instructions. Do not summarise what you are about to do. Do not update the brief. Begin Phase 1 immediately and work through each phase until you reach the Output section, then produce the complete document.

**No repo access during this prompt.** Design for the reader, not for the current structure.

---

## Context Block

*Fill TAB and AUDIENCE before running. Everything else is fixed.*

```
TAB:       [e.g. LP Token | Orchestrators | Developers | Community | Gateways]
AUDIENCE:  [canonical token — see Audience Definitions below]
```

---

## Product Context (fixed)

**Product**: Livepeer — a decentralised AI and video compute network running on Arbitrum.

**What it does**: GPU operators connect hardware as orchestrators and earn fees processing AI inference and video transcoding jobs. Developers, app builders, and platforms access that compute via gateways. LPT token holders delegate stake to orchestrators and participate in on-chain governance.

**Docs site**: Mintlify, 9 tabs, UK English, organised by role. This is the second major version (v2) of the docs.

---

## Audience Definitions (locked — do not redefine)

| Token | Who they are | Primary tab |
|---|---|---|
| `founder` | Evaluating Livepeer for their product or business | Solutions |
| `builder` | Building products using Livepeer APIs, SDKs, or hosted gateways | Solutions / Developers |
| `developer` | Building custom pipelines, BYOC, protocol extensions, tooling | Developers |
| `gateway` | Running gateway infrastructure, routing jobs into the network | Gateways |
| `orchestrator` | Running GPU nodes, providing compute supply | Orchestrators |
| `delegator` | Staking LPT tokens, participating in governance | LP Token |
| `community` | Ecosystem participation — contributors, governance discourse, newcomers, researchers | Community |

Note: About serves all audiences at the `discover` lifecycle stage. A single audience token cannot fully describe About's primary audience.

---

## Site Ownership Map (fixed — use as cross-tab constraint)

| Tab | What it owns | Does NOT own |
|---|---|---|
| Home | Platform narrative; value proposition; audience routing | Any role-specific operational content |
| About | Protocol and network architecture; actor definitions; tokenomics; governance model; economics | Operational guides, product features, setup instructions |
| Solutions | Consumer and platform-builder products; Livepeer Studio product documentation | Infrastructure operation, gateway/orchestrator node setup, token governance |
| Developers | Custom AI pipeline and livestream application development; integration patterns; SDK/API reference; developer opportunities | Gateway business operation; orchestrator node management; token governance |
| Gateways | Gateway operator concepts, quickstart, setup, operational guides, business model content | Orchestrator node specifics; token governance; general developer tutorials |
| Orchestrators | Orchestrator concepts, quickstart, setup, guides, resources | Gateway business operation; token governance; developer SDK usage |
| LP Token | What LPT is; delegation mechanics; governance participation; treasury; staking and earning | Infrastructure operation; video/AI technical content; product documentation |
| Community | Community identity and contribution — guidelines, events, contribution paths, forums | Technical operation; protocol reference; product documentation |
| Resource HUB | Cross-cutting reference material — changelog, glossaries, documentation guide, reference indexes | Role-specific operational guidance; product documentation |

**Boundary rules:**

- **About ↔ role tabs**: About is the conceptual substrate. Role tabs may introduce concepts in context for their audience (introduce-and-link is correct — it is not duplication), but must not duplicate About's canonical explanations.
- **LP Token ↔ About**: About explains token economics conceptually (why LPT exists, how the tokenomic model works). LP Token explains how to participate (delegate, vote, earn). Conceptual tokenomics → About. Participation mechanics → LP Token.
- **LP Token ↔ Community**: Community owns governance discussion and forums. LP Token owns governance voting mechanics — how to read proposals, cast votes, track outcomes.
- **Gateways ↔ Orchestrators**: Orchestrators own compute supply. Gateways own job demand and routing. No content should live in both.
- **Developers ↔ Gateways**: Developers who build custom pipelines graduate to Gateways when they start running infrastructure. Gateways does not re-explain development concepts. Developers does not explain gateway business models.

---

## Framework Enums (canonical — use exactly in output)

### purpose (15 values)

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

| Token | Reader state |
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
| `navigation` | Routes the reader — portals, landings, section roots |
| `concept` | Explains a mechanism or system |
| `tutorial` | Learns by building |
| `guide` | Practical understanding of a system |
| `instruction` | Step-by-step task execution |
| `reference` | Structured lookup |
| `resource` | Curated collections and ecosystem material |

---

## Phase 1 — Persona Research

**No arriving question pre-filled. Derive it from first principles.**

For the `TAB` and `AUDIENCE` in the context block, answer:

1. What situation triggers a visit to this tab? What just happened before they arrived?
2. What do they know at arrival? What do they not know yet?
3. What single question most accurately captures what they need to answer? (This is the arriving question — specific, not a topic.)
4. What does a successful visit look like? A concrete action completed or decision made — not "understanding X."
5. What are the most common wrong-path risks — misconceptions or misrouting at arrival?

Then define personas. Each persona is a variant of the audience with a distinct arriving state and motivation:

| Rank | Persona name | Entry vector | Arriving with | Wants to leave with |
|---|---|---|---|---|

Rules:
- Rank by volume (most common first)
- Arriving state is specific — not a role label
- "Wants to leave with" is a concrete action or decision, not a topic
- Entry vector: where they came from immediately before arriving (homepage, search result, Discord/forum link, another tab's CTA, external article or referral)

**Self-identification check**: What label does this audience use to self-identify (e.g., "developer", "operator", "builder")? Does that label route cleanly to one persona, or could it describe 2–3 different personas with different needs and paths? If ambiguous: this tab requires a disambiguation or routing page as its first section. Flag it now — do not design it away.

**Entry blocker check**: For each persona, identify any hard-stop blockers — not pain points, but structural barriers that prevent activation entirely (e.g., requires on-chain funding before any testable action is possible). Hard-stop blockers affect section ORDER. If a blocker exists, the section that resolves it must come before the section that requires it.

**Gate**: Minimum 3 personas before Phase 2. If fewer than 3 are genuinely distinct, explain why.

---

## Phase 2A — Jobs to be Done

Generate 5–7 jobs this audience has when visiting this tab.

**Format**: "When [specific situation], I want to [action] so I can [concrete outcome]."

Rules:
- The situation is specific, not general
- The action is a real task, not a topic area
- The outcome is concrete and verifiable
- Jobs are first-principles — not derived from current nav labels or page titles
- Range: cover arrival jobs (new visitors), active-use jobs, reference/return-visit jobs, and any edge cases specific to this tab

**Gate**: Minimum 5 jobs before Phase 2B.

---

## Phase 2B — Ideal Journey

**Linear** (discovery → competency — sequential stages):

| Position | Stage name | lifecycleStage | What they're doing |
|---|---|---|---|

Rules:
- Stage names are descriptive phrases, not pageType labels
- lifecycleStage is from the canonical enum above
- Cover the full journey from first arrival to operating state

**On-demand** (information this audience returns for repeatedly, outside the linear sequence):

List 4–8 types. These are reference needs — specific facts or parameters the reader looks up after the linear journey is complete.

**Cross-tab** (graduation paths and entry routes):

| Direction | From / To | Why |
|---|---|---|

Use the site ownership map: which tabs route readers to this tab, and which tabs does this tab route readers to?

---

## Phase 2C — Ideal Section Structure

For each section the ideal experience requires, define:

| Section | Reader question | Job it serves | purpose | pageType | Entry state | Exit state | lifecycleStage |
|---|---|---|---|---|---|---|---|

Rules:
- Reader question: the specific question the reader arrives asking at this section ("Should I run an orchestrator?", "Which path is right for me?"). Order sections by natural question sequence — the answer to each section's question unlocks the next.
- Entry state: what the reader arrives knowing or having done
- Exit state: what the reader can do or has done — **never "understands X"**. Replace with: "has completed X", "has decided X", or "can do Y that requires this understanding". Abstract exit states are not measurable and will not be accepted.
- Every value in `purpose`, `pageType`, and `lifecycleStage` must be from the canonical enums above
- Every section serves a named job from Phase 2A
- **Cross-tab gate**: before placing any section, confirm which tab owns this content in the site ownership map. If another tab owns it, replace the row with: *[CROSS-TAB: content owned by {tab} — this section links, does not duplicate]*. This is not passive — check every row.
- Exception: the introduce-and-link pattern is correct — a section may briefly introduce a concept in context for this audience, then link to About for depth. This is not duplication.

**Gate**: Every section has an entry state, exit state (no "understands"), reader question, and a named job. All enum values are canonical.

---

## Phase 2D — Persona Path Validation

For each persona from Phase 1, trace their path through the section structure from Phase 2C:

| Persona | Enters at | Exits at | Blocked at | Gap |
|---|---|---|---|---|

Rules:
- "Enters at": the first section this persona would realistically use
- "Exits at": the last section they need before their goal is complete
- "Blocked at": any section where this persona lacks the prerequisite knowledge or context to proceed — what's missing?
- "Gap": a section that needs to exist but doesn't appear in Phase 2C

**Gate**: Every persona has a complete, unblocked path through the structure. Any gap identified here must be added to Phase 2C before the output is considered final.

---

## Quality Gates

Verify before producing output:

- [ ] Arriving question is specific — not a topic, an actual question the reader would ask?
- [ ] At least 3 distinct personas, each with a different arriving state and entry vector?
- [ ] Self-identification check done — ambiguous labels flagged, disambiguation page added if needed?
- [ ] Entry blockers identified — sections that resolve blockers placed before sections that require them?
- [ ] At least 5 jobs, first-principles, not derived from current nav structure?
- [ ] Every section has a reader question, job, entry state, and exit state?
- [ ] No exit state uses "understands" — all are concrete actions or decisions?
- [ ] Cross-tab gate applied to every section — no content duplicated from other tabs?
- [ ] Persona path validation complete — every persona has an unblocked path through the structure?
- [ ] All enum values are from the canonical lists — no invented tokens?

---

## Output

Produce this document in full. Do not truncate.

```markdown
# [TAB] — Audience Design

**Tab**: [TAB]
**Audience**: [AUDIENCE token]
**Generated**: [date]
**Status**: DRAFT — awaiting checkpoint

---

## Arriving Question

> "[derived question]"

---

## Personas

| Rank | Persona | Entry vector | Arriving with | Wants to leave with |
|---|---|---|---|---|

**Self-identification**: [label they use → disambiguation needed? yes/no]
**Entry blockers**: [any hard-stop barriers → which sections resolve them]

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

| Direction | From / To | Why |
|---|---|---|

---

## Ideal Section Structure

| Section | Reader question | Job | purpose | pageType | Entry state | Exit state | lifecycleStage |
|---|---|---|---|---|---|---|---|

---

## ⏸ Checkpoint

- [ ] Arriving question is specific — not a topic, an actual question?
- [ ] Personas described with motivation and entry vector — not just role labels?
- [ ] Self-identification check done — disambiguation page flagged if needed?
- [ ] Entry blockers identified and resolved by section order?
- [ ] Jobs are first-principles — not derived from current nav structure?
- [ ] Every section has a reader question, job, entry state, and exit state?
- [ ] No exit state uses "understands"?
- [ ] Cross-tab gate applied — no content duplicated from other tabs?
- [ ] Persona path validation done — every persona has an unblocked path?
- [ ] All enum values are canonical — no invented tokens?
```
