# Exemplary Prompts

> Pointer + analysis. Do not copy files — emulate the patterns.
> Good prompts are structured, constrained, and produce consistent outputs. They are methodologies, not instructions.

---

### Section Naming Prompt (Gold Standard)

**File:** `workspace/plan/active/CONTENT-WRITING/Prompts/Good prompt references/section-naming.md`

**Why it's good:** A 6-step methodology with scoring rubric, ranking rules, winner filter, and structured output format. The core innovation: it defines 6 label types ranked worst→best (literal → comparator → generic → taxonomy mismatch → content descriptor → governing concept) and requires the prompt runner to score candidates against 5 axes before choosing. This prevents first-plausible-answer syndrome — the prompt demands iteration.

**Key patterns:**
- Step-by-step methodology (6 steps) — not "do this"
- Diagnosis before generation: "State the reader question, primary distinction, correct conceptual layer, surface labels to avoid" — forces thinking before naming
- 12 candidates required — prevents premature commitment
- 5-axis scoring: Precision, Depth, Stability, Clarity, Brevity — each /5, total /25
- Explicit ranking penalties: literal contrast, comparator labels, generic umbrellas, taxonomy mismatches, brittle numbering
- Winner filter: 10 explicit tests before choosing
- Semantic validation step: "Is this term being used at its correct meaning?"
- "What you like / what you do not like" section with named label types — teaches vocabulary for discussing naming quality
- Metadata as constraints (pageType, audience, purpose shape the title but are never the title)
- Structured output format — forces consistent, comparable results

**Watch out:** Very long prompt (~690 lines including examples and variants). The methodology is the reference — the length is because it includes two complete prompt versions (section-level and page-level). For new prompts, extract the pattern, not the length.

---

### Page Content / IA Research Prompt (Gold Standard)

**File:** `workspace/plan/active/CONTENT-WRITING/Prompts/Good prompt references/PHASE: PAGE CONTENT.md`

**Why it's good:** A complete IA design methodology with context block, pre-flight ownership map, 4-phase research process, and structured outputs. The pre-flight step is the key insight: before designing any tab's IA, map what every OTHER tab owns — because content duplication across tabs is a structural failure, and it's invisible without this map.

**Key patterns:**
- Context block with 12 required fields — forces the prompt runner to provide specific inputs, not vague descriptions
- Pre-flight ownership map: scan every other tab FIRST → table of "what it owns + implication for target tab"
- Four research phases: first-principles analysis → external research → project-specific context → information taxonomy
- First-principles before examples: "What is this section fundamentally for?" before "What do other sites do?"
- External research with synthesis: "4-6 design principles, each with a one-sentence rationale" — not a link dump
- Platform-agnostic: works for Mintlify, Docusaurus, GitBook — the methodology is structural, not tool-specific
- Named output files: "tab-01-research.md, tab-02-audience.md, tab-03-ia.md" — forces clean deliverables

**Watch out:** This prompt is designed for full tab-level IA design. For smaller scope (one section, one page), use the content placement prompt instead.

---

### Content Placement Prompt (Good — Scoped Variant)

**File:** `workspace/plan/active/CONTENT-WRITING/Prompts/Good prompt references/docs-content-placement-prompt.md`

**Why it's good:** Solves a specific, recurring problem: "Given a fixed IA, what information belongs in this section?" Not a design prompt — a placement prompt. Opens with the actual problem statement: "This is a placement and ownership problem, not a design problem." The 4-step process (ownership scan → audience job → content inventory → map to pages) prevents the common failure of dumping everything into the section being worked on.

**Key patterns:**
- Problem statement first: "The IA structure is set. The question is: what information belongs here?"
- Ownership scan: "For each other tab, what does it own that this tab should never duplicate?"
- Content boundary map: table of other tabs + what they own + implication for target tab
- Audience state check: "What state are they in when they arrive?" — prevents content that belongs earlier or later
- Content inventory with placement decision per item: "Belongs here / Link only / No" with reasoning
- "Belongs here = Yes" definition: "unique to this section's scope, no other tab owns it, reader needs it at this point"
- Delivery method column: prose / table / steps / list / embed — content format is part of the placement decision

**Watch out:** Requires the fixed IA structure as input. If the IA is not yet set, use the page content prompt instead.

---

## What makes a good prompt (patterns across all three)

1. **Context block with required fields** — forces specific inputs, prevents vague prompts
2. **Diagnosis before generation** — understand the problem before proposing solutions
3. **Multiple candidates required** — prevents first-plausible-answer lock-in
4. **Scoring rubric** — objective criteria, not subjective preference
5. **Explicit penalties** — names the failure modes and penalises them
6. **Structured output format** — consistent, comparable, reviewable results
7. **Problem statement** — what specific problem this prompt solves, stated in one sentence
8. **When to use / when NOT to use** — prevents misapplication
9. **Methodology, not instructions** — teaches thinking, not just doing