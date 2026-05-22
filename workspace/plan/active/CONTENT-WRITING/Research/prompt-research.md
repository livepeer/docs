# Prompt Research
## How to prompt agents for different types of outcomes

---

## The core problem with the tab map prompt

It is a **review prompt masquerading as a design prompt**. Scanning the repo first, pre-filling taxonomy enums, asking the AI to classify existing pages — that is all convergent, constraint-anchored thinking. You cannot do first-principles audience design when you have already loaded the existing structure. The AI will map to what exists, not to what should exist.

These are two fundamentally different prompt modes.

---

## Mode 1: Ideation / first-principles thinking

### What makes these prompts work

**Remove anchoring before generating.**
The single biggest killer of lateral thinking is showing the current state first. The AI anchors to it immediately and optimises around it instead of questioning it. For genuine first-principles work: no repo access until the thinking is done.

**Start from the reader's situation, not the system's structure.**
Not "here are our 7 pageTypes" — but "a developer just got their first GPU job to fail. What do they actually need right now?" The AI's job is to understand the human situation first, then figure out what content serves it.

**Jobs-to-be-done framing:**
> "When [X happens], this audience wants to [Y] so they can [Z]."

This prevents the AI from generating content that sounds right but does not serve a real need.

**Diverge before converging — and make it explicit:**
> "Generate 8 structurally different approaches to this before evaluating any of them. Do not evaluate during generation."

Without this instruction, the AI picks the first plausible answer and defends it.

**Extreme reference points force out of local optima:**
> "What would Stripe's docs do here? What would a well-funded B2B SaaS with 10 technical writers do? What would be cut if there were only 3 pages?"

These questions produce ideas the AI would not generate if you asked "what should go in this section?"

**Constrain the evaluator, not the generator.**
Let ideas come freely. Apply constraints (taxonomy, folder structure, governance rules) after good ideas exist — not as input to the generation.

---

## Mode 2: Content creation

### What makes these prompts work

**The brief must be exhaustively specific.**
Generic brief → generic content. The minimum viable content brief:
- Who specifically (not audience token — actual person, their situation, what they just did, what they want to do next)
- What they arrive knowing
- One concrete thing they leave able to do
- What they would do if this page did not exist (the alternative shapes the framing)

**Show voice, do not describe it.**
"Be concise and technical" produces nothing. Two exemplar sentences with annotations produces voice. Negative exemplars ("not like this → like this") are often more useful than positive ones.

**One job per prompt pass.**
Structure, content, and voice are three separate operations. A single prompt asking for all three produces a compromise that is mediocre at all three. The Pass A / Pass B split in the pipeline is correct — the mistake is asking Pass A to do too much in one go.

**Source material before writing.**
For factual content: load the sources, extract the claims, then write. Not "write about X" but "here are the facts about X, now write the page."

**Write the destination first.**
What does the reader do immediately after finishing this page? Knowing the exit shapes every sentence. This is why PREV\_PAGE and NEXT\_PAGE in the context block matter — but they need to be specific, not just page names.

---

## What this means for the tab map prompt

It needs to be **two separate prompts.**

### Prompt A — Design (no repo)

Reader situation → first-principles needs → jobs-to-be-done → section shape → journey map.

No repo access. No taxonomy pre-fills. Just reader and needs.

### Prompt B — Audit (repo required)

Given the designed journey from Prompt A: what exists, what is missing, what is misclassified, what should go.

This is what the current `level-1-tab-map.md` actually is — a good audit prompt. It is not a design prompt.

### Current state

✅ **Resolved in Step 8** — `v2/_workspace/references/content-pipeline/10-prompt-input-spec.md` now defines both prompts as separate Level 1 operations:

- **Level 1 Prompt A (Design)** — no repo access; reader situation → jobs-to-be-done → diverge 5–7 structures → evaluate → journey map → section shape. Outputs `[tab]-audience-design.md`. For tabs with a locked audience design file (e.g. `08a-ia-per-tab.md`), Prompt A has already run.
- **Level 1 Prompt B (Audit)** — consumes Prompt A output; scans repo; classifies pages against the designed ideal. Outputs `tab-map.md`.

The existing `level-1-tab-map.md` draft covers Prompt B. Prompt A is the build target at Step 16.

---

## Validated References

Prompts tested in production that gave good outcomes. Each is in `Prompts/Good prompt references/`.

---

### PHASE: PAGE CONTENT — IA Research & Page Definitions

**File**: `Good prompt references/PHASE: PAGE CONTENT.md`
**Validated for**: Level 1 Prompt A (Design) + Level 1 Prompt B (Audit) + Pass A WRITE mode

**Structure**: Pre-flight (site ownership map) → Phase 1 Research (first-principles analysis, external research, project context, information taxonomy) → Phase 2 Audience & Purpose → Phase 3 IA & Page Definitions → Gate (site ownership check, reduces page count 20–40%)

**Key patterns this validates:**

- **Site ownership map as pre-flight** — skim every tab before designing the target; content duplication is a structural failure, not a content gap, and is invisible without this map. Not currently in Level 1 Prompt B spec — **add at Step 16**.
- **Information taxonomy (divergent phase)** — full inventory of all information the audience might need, tagged by type / domain context / niche / skill level / delivery method, before any convergence. Currently missing from Prompt A spec — **add at Step 16**.
- **Page definition format** — Name (1–3 words) / Description / Introduction (value proposition first, specific named prohibitions) / Required sections with journey logic (what reader arrives knowing, leaves able to) / Review flags. Richer than current WRITE mode section_brief — **use as model at Step 16**.
- **Named persona archetypes** — "The Evaluating Delegator" not "delegator" — motivation built into the name. Confirms approach for Prompt A persona work.
- **Named voice prohibitions** — specific and enforceable ("no 'thriving community'") not generic ("avoid jargon"). Confirms voice-rules.md approach.

---

### Section Naming — Governing Concept Rubric

**File**: `Good prompt references/section-naming.md`
**Validated for**: Pass B naming check step (Step 16) + Pass A structural review

**What it validates**: The 6-step structure (Diagnose → Use metadata → Generate 12 → Score → Rank → Winner filter), all scoring dimensions, weak-label penalties, and winner filter questions are all incorporated into the locked `Prompts/section-naming.md`.

**Step 16 enrichment**: Step 2 (Use the metadata correctly) should be populated with full enum-level guidance from locked definitions — all 7 pageTypes, all 15 purposes, all 7 audiences — replacing the three generic placeholder examples currently there. See note in `Prompts/section-naming.md` header.

---

## Open: navigation variant rename + concept architecture variant

From the same review session — pending confirmation before execution:

**Navigation:**
- Rename variant `landing` → `map` (or similar — reflects audience decision tree, not a traditional landing page)
- `portal` = entry point, quick links to tab sections (this is the actual "landing")
- Some `overview` subtypes may overlap with `map` function — flagged, not yet changed

**Concept:**
- Add `architecture` variant for technical architecture layouts

Files that would change: `01-page-type-definitions.md`, `framework.md`, `08a-ia-per-tab.md`, `level-1-tab-map.md`, `level-2-pass-b-layout.md`
