# Copy Skills Reference
## Aggregated from `ai-tools/ai-skills/docs-copy/skills/`

**Purpose**: Research input for Step 9 (voice rules). Collects the full existing copy skill set in one file so pipeline prompts can reference the rules without loading 4 separate files.

**Source files:**
- `ai-tools/ai-skills/docs-copy/skills/copy-rules.md` — sentence-level rules (L4)
- `ai-tools/ai-skills/docs-copy/skills/structure-rules.md` — page structure rules (L2/L3)
- `ai-tools/ai-skills/docs-copy/skills/value-prop-check.md` — L0 value proposition gate
- `ai-tools/ai-skills/docs-copy/skills/persona-routing.md` — L1 persona routing rules

**Status of these files**: These skills were written for operator-facing gateway/orchestrator pages. They are the best existing source for the `gateway` and `orchestrator` audience voice. Other audience voices (developer, builder, delegator, community, founder) are not yet covered — those are defined in `Prompts/voice-rules.md`.

---

## L0 — Value Proposition Gate

*Load before writing any brief. If the four questions cannot be answered, stop.*

**Q1 — Operator outcome**: What does this product/feature/section do for the operator?
- One sentence. No `if`, `can`, `may`, `depends on`. States a kept outcome, not a mechanism.
- Fail: sentence contains a conditional → escalate to product owner.

**Q2 — Featured (majority) path**: Which operator is already succeeding with this, and what does their setup look like?
- Describes the majority real-world operating model — not an edge case or aspirational user.
- Fail: describes a minority or edge case → restructure around the actual majority.

**Q3 — Reader's real alternative**: What would the reader do instead?
- Specific. Names the alternative. Defines the competitive context.
- Fail: blank, vague, or "nothing" → product clarity problem, cannot write without it.

**Q4 — Required belief**: What does the reader need to believe to take the next step?
- One sentence, a belief not a mechanism. Specific to this page.
- Fail: describes a mechanism → rewrite as the belief that mechanism would produce.

---

## L1 — Persona Routing Rules

*Load for any page serving more than one operator profile.*

**Core rule**: Routing language uses hardware, LPT position, and goal — never named personas.
- ✅ "If you have a single GPU and limited LPT, start here."
- ❌ "Persona A operators should..."

**Routing placement**: Once, near the top of the page, after the operator outcome sentence, before the featured path section. Never in the middle of a section, after a decision aid, or in a `<Note>`.

**Routing language rules**:
- State the profile in functional terms: `Operators with 24 GB VRAM and no LPT` not `AI-focused operators`
- State what they get, not what they are: `Start here for the pool worker path` not `This is for pool workers`
- One sentence per profile maximum
- Do not route to a page that does not exist

**Majority path rule**: The majority real-world operator profile is described first, in full, without routing language. Routing directs minority profiles to variants or linked pages. The majority path is never behind a `<Tab>` or collapsed state.

---

## L2 — Page Sequence Rules

*Every evaluation or guide page follows this sequence. Deviations require justification.*

1. **Operator outcome** — value kept, one sentence, no conditionals
2. **Featured path** — majority real-world model, described in full
3. **Variants** — alternative paths with specific entry requirements
4. **Economics** — concrete figures, no hedging
5. **Decision aid** — complete, no empty cells, no REVIEW flags
6. **Staged action path** — numbered, zero to first outcome
7. **Next page link** — one link, correct next step for primary reader

**Banned sequences**:
- Cost or warning before value proposition
- Variant paths before the majority path is fully described
- Decision aid before economics section
- Any section that introduces a path without developing it or linking to a page that does

---

## L3 — Paragraph Rules

- **One paragraph, one job.** Label the job in three words — if you can't, split the paragraph.
- **Lead sentence states the fact.** Remaining sentences extend or evidence it.
- **Final sentence**: fact, number, or next step. Never a hedge, never a restatement, never a conditional.
- **Tables and diagrams stand alone.** Prose that restates a table row or diagram node is deleted. Two representations of identical data: remove one.
- **Action paths are numbered and imperative.** `1. [Command].` Not `1. You should [verb].`
- **High-value actions appear in body copy.** A URL or command that answers the primary question must be visible without interaction — not only inside an `<Accordion>`, `<Note>`, or Related Pages card.

**Decision tables, matrices, and flowcharts**:
- No empty cells. No placeholder text. No `{/* REVIEW: */}` flags in any cell.
- Every path in the decision aid has a corresponding section or link.
- Majority operator path is the first or most prominent path shown.

**`<Note>` rules**:
- Forward-pointing only. Allowed: "Orchestrator profiles change frequently — #orchestrators on Discord is the current source." Banned: "The landscape is evolving. We cannot guarantee accuracy."
- A section must not end with a `<Note>` that hedges the content that precedes it.

---

## L4 — Copy Rules (Sentence Level)

### The master test
Before any sentence ships: *Does this sentence give the reader something they can act on, trust, or use to make a decision, stated directly and in the right order for the page?* If not: rewrite or delete.

### Blocking rules

**Banned words** (no exceptions, do not soften):
`effectively, essentially, basically, meaningful, significant, real` (as intensifier), `various, several, obviously, clearly`

**Banned phrases**:
- "This section covers"
- "The reason is straightforward"
- "Understanding X is essential"
- "It is important to note"
- "As mentioned above"
- "among other factors"
- "and so on" / "etc."
- "low but not zero"
- "not just [X]"
- "rather than"
- "what it takes"
- "once [X] is stable"
- "it should be noted"
- "not preference"
- "depends on various factors"
- "can generate" / "may produce" in value claims

**Banned constructions**:
- `not [X]` in value statements → rewrite as positive assertion
- `if [condition]` in body prose → resolve the condition; exception: code blocks, prereq lists, exact config conditions
- `[value statement] - if [condition]` → split into two sentences, value first
- `This page [verb]` → delete, start with content
- `what it takes` → state requirements directly
- `consistently` without a number → add threshold or rewrite
- `can/may [verb]` in value claims → assert directly or delete

**REVIEW flags**: `{/* REVIEW: */}` flags must never appear in rendered content. Any unresolved REVIEW flag in a decision-critical position blocks merge.

### Warning-only heuristics (strong guidance, not absolute)

**Description field**: One-sentence outcome statement. Open with reader outcome or fit — not "this page" or "overview of". Target ≤ 160 chars.

**Opening order**: Lead with the most useful fact for the reader. For option/path/decision sections: outcome or fit before mechanism.

**First-use jargon**: Define coined terms, shorthand labels, unfamiliar abbreviations before they appear in headings, tables, or diagrams.

**Comparative framing**: Do not make comparison the entry point when the thing itself has not been defined. Avoid openings like "What changes from X", "Unlike X", "Compared to X".

### Manual sign-off items
- Whether the stated operator benefit is the right one
- Whether a term is canonically correct or needs SME confirmation
- Whether product/research truth justifies breaking the default opening order
- Whether the page actually helps the reader decide, not just passes sentence lint

---

## Gap analysis for Step 9

The existing copy skills cover `gateway` and `orchestrator` audiences well. Gaps:

| Audience | Status |
|---|---|
| `gateway` | ✅ Covered — L0–L4 skills calibrated for gateway/operator pages |
| `orchestrator` | ✅ Covered — same skills apply; hardware-specific extensions in voice-rules.md |
| `developer` | ⚠️ Not covered — voice-rules.md provides a draft; no L0–L4 extension yet |
| `builder` | ⚠️ Not covered — voice-rules.md draft only |
| `delegator` | ⚠️ Not covered — voice-rules.md draft only |
| `community` | ⚠️ Not covered — voice-rules.md draft only |
| `founder` | ⚠️ Not covered — voice-rules.md draft only |

The L0 value proposition gate applies universally across audiences with substitution:
- Replace "operator outcome" with the correct audience outcome (builder benefit / reader decision / founder ROI)
- The four questions remain valid; the framing changes per audience

The L1–L4 rules apply universally. The audience-specific extensions in voice-rules.md are additive.
