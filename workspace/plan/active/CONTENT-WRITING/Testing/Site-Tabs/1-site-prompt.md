# Livepeer Docs — Site IA Design Prompt

**Your task**: Execute the phases below in order and produce the output document at the end. Do not revise or comment on these instructions. Do not summarise what you are about to do. Do not update the brief. Begin Phase 1 immediately and work through each phase until you reach the Output section, then produce the complete document.

---

## What this produces

A site-level architecture document covering:
- What each tab owns (and what it must not own)
- Which audiences each tab serves
- How audiences move between tabs as they progress
- Duplication risks and ownership resolution rules
- Boundary rules for ambiguous cases

This is first-principles design. Do not try to reproduce the current structure — design for the reader.

---

## Product Context

**Product**: Livepeer — a decentralised AI and video compute network running on Arbitrum.

**What it does**: Anyone can connect GPU hardware to the network as an orchestrator and earn fees by processing AI inference and video transcoding jobs. Developers, app builders, and platforms access that compute via gateways. LPT token holders delegate stake to orchestrators and participate in governance.

**Docs site**: Mintlify, 9 tabs, UK English, organised by role. Tabs are the primary navigation layer.

**The 9 tabs**:
1. Home
2. About
3. Solutions
4. Developers
5. Gateways
6. Orchestrators
7. LP Token
8. Community
9. Resource HUB

---

## Framework Reference

### Audience tokens (canonical — use exactly)

| Token | Who they are | Primary tab |
|---|---|---|
| `founder` | Evaluating Livepeer for their product/business | Solutions |
| `builder` | Building products using Livepeer APIs/SDKs/hosted gateways | Solutions |
| `developer` | Building custom pipelines, BYOC, protocol extensions, tooling | Developers |
| `gateway` | Running gateway infrastructure, routing traffic | Gateways |
| `orchestrator` | Running GPU nodes, providing compute | Orchestrators |
| `delegator` | Staking LPT tokens, participating in governance | LP Token |
| `community` | Ecosystem participation — contributors, governance discourse, newcomers, researchers | Community |

### Demand-side graduation path

```
founder (evaluating) → builder (consuming via API) → developer (building on network) → gateway (running infra)
```

This is a confirmed real-world pattern. Design cross-tab journeys to support it.

---

## Phase 1 — Audience Analysis

For each audience token, answer:

1. **Arriving state**: What is this person doing before they arrive at Livepeer docs? What triggered the visit?
2. **Knowledge at arrival**: What do they know about Livepeer? What do they not know yet?
3. **Primary need**: What one question do they most need answered?
4. **Success state**: What does a successful docs visit look like for them? (Specific outcome — not "understanding X".)
5. **Failure mode**: What sends them away without getting what they needed?

Produce a table:

| Audience | Arriving state | Primary question | Success state | Failure mode |
|---|---|---|---|---|

---

## Phase 2 — Tab Purpose Mapping

For each of the 9 tabs, derive from first principles:

- **What it MUST own** — content that lives here and nowhere else. The tab fails if this is missing.
- **What it MUST NOT own** — content that belongs to another tab; including it here creates duplication.
- **Primary audience** — the audience this tab is primarily built for.
- **Secondary audiences** — audiences that visit but for whom the tab is not optimised.

Do not derive from the current structure. Ask: given the product, the audiences, and the graduation path — what is the correct division of content ownership?

Produce a table:

| Tab | Must own | Must not own | Primary audience | Secondary audiences |
|---|---|---|---|---|

---

## Phase 3 — Cross-Tab Graduation Paths

Map the full journey for each audience across tabs:

For each audience: where do they enter the docs? Which tab do they start in? Where do they go next as they progress? What triggers the move to the next tab?

Also identify:
- **Entry tabs**: where each audience first lands
- **Depth tabs**: where each audience spends most of their time
- **Exit paths**: where an audience leaves the docs to take action (deploy, join Discord, etc.)

Produce for each audience:
```
[Audience]: [Tab A] → [Tab B] → [Tab C]
Trigger A→B: [what causes the move]
Trigger B→C: [what causes the move]
```

---

## Phase 4 — Duplication Risk Register

Identify content topics that could plausibly appear in more than one tab.

For each risk:
- Name the topic
- List the tabs that might claim it
- State which tab owns it canonically and why
- State what the other tabs do instead (link, exclude, introduce-then-link)

Produce a table:

| Topic | Tabs at risk | Canonical owner | Resolution rule |
|---|---|---|---|

---

## Phase 5 — Boundary Rules

State the hard rules that resolve ambiguous ownership cases. These are the edge cases that will recur.

Format:
```
[Tab A] vs [Tab B]: [the ambiguous topic]
Rule: [Tab X] owns [specific scope]. [Tab Y] owns [specific scope]. The line is drawn at [specific criterion].
```

Cover at minimum:
- About ↔ each role tab (conceptual vs operational)
- Solutions ↔ Developers (API consumption vs network building)
- Gateways ↔ Developers (infra running vs custom pipeline building)
- Gateways ↔ Orchestrators (demand side vs supply side)
- LP Token ↔ About (participation mechanics vs conceptual economics)
- LP Token ↔ Community (voting vs governance discussion)
- Resource HUB ↔ all role tabs (reference aggregation vs role-specific reference)

---

## Quality Gates

Verify before producing output:

- [ ] Every tab has a clear "must own" that no other tab shares
- [ ] Every tab has a "must not own" — no tab owns everything
- [ ] The demand-side graduation path (founder → builder → developer → gateway) is supported by the tab structure
- [ ] Every duplication risk has a resolution rule that creates a clear winner
- [ ] Boundary rules are specific enough to resolve a real content placement dispute
- [ ] No tab is defined purely by what it excludes — each has a positive identity

---

## Output

Produce the site ownership map as a markdown document ready to paste into the Tab Prompt.

```markdown
# Livepeer Docs — Site Ownership Map

**Generated**: [date]
**Status**: DRAFT — awaiting checkpoint

---

## Ownership Map

| Tab | What it owns | Primary audience | Does NOT own |
|---|---|---|---|

---

## Graduation Paths

[Audience]: [Tab] → [Tab] → [Tab]
Trigger: [what causes each move]

---

## Boundary Rules

**[Tab A] ↔ [Tab B]**: [rule]

---

## Duplication Risk Register

| Topic | Canonical owner | Resolution |
|---|---|---|
```

---

## ⏸ Checkpoint

Before passing output to the Tab Prompt, verify:

- [ ] Every tab's ownership is distinct — no two tabs own the same thing?
- [ ] Graduation paths cover all 7 audience tokens?
- [ ] Boundary rules are specific enough to be enforced — not vague principles?
- [ ] Duplication risks are all resolved with a clear canonical owner?
