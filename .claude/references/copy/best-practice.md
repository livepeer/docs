# Copy — Collated Best Practice

> Collated from repo research sources. Verified against canonical files.
> Sources: `copy-governance.md`, `banned-copy.md`, `copy-skills-reference.md`, `docs-philosophy-authoring.md`, `voice-rules.md`

---

## Voice Principles

**Source:** `_research-and-consolidated-notes/prompt-guides-guards-resources/copy-governance.md`

1. **Entity-led voice** — the subject is the system, node, user, or action — not the documentation
   - ✅ "The orchestrator submits a reward call each round."
   - ❌ "In this section, we explain how orchestrators submit reward calls."

2. **Exit state over topic** — headings and opening sentences name what the reader CAN DO after reading
   - ✅ "Choose an orchestrator based on reward cut, uptime, and ETH fee history."
   - ❌ "Orchestrator Selection Criteria"

3. **Precision over breadth** — state exactly what is true
   - ✅ "The unbonding period is 7 rounds (~7 days)."
   - ❌ "Unbonding typically takes several rounds, which may vary."

4. **No forward-looking uncertainty about shipped features**
   - ✅ "Governance proposals require a 33% quorum to pass."
   - ❌ "Governance proposals may require quorum depending on settings."

5. **UK English** — organise, colour, practise (verb), honour, recognised, favour, neighbour

---

## Banned Words (Zero Tolerance)

**Source:** `copy-governance.md` + `tools/lib/copy-governance/banned-words.txt`

| Word | Why |
|---|---|
| effectively | Vague qualifier |
| essentially | Vague qualifier |
| basically | Vague qualifier |
| meaningful | Undefined — be specific |
| significant | Undefined — use a number |
| real | Meaningless emphasis |
| various | Vague — list the things |
| several | Vague — list the things |
| obviously | Condescending |
| clearly | Condescending |

---

## Banned Phrases (Zero Tolerance)

**Source:** `copy-governance.md` + `tools/lib/copy-governance/banned-phrases.txt`

- "This section covers" — filler opening
- "Understanding X is essential" — reader decides what's essential
- "It is important to note" — if it's important, just say it
- "As mentioned above" — docs are non-linear
- "among other factors" / "and so on" / "etc." — list the items
- "low but not zero" — quantify or remove
- "can generate" / "may produce" — assert directly
- "This page [verb]" — start with content
- "what it takes" — state requirements directly

---

## Banned Constructions

**Source:** `copy-skills-reference.md` L4

- `not [X]` in value statements → rewrite as positive assertion
- `if [condition]` in body prose → resolve the condition (exception: code blocks, prereq lists)
- `[value statement] - if [condition]` → split into two sentences, value first
- `consistently` without a number → add threshold or rewrite
- `can/may [verb]` in value claims → assert directly or delete

---

## Per-Audience Voice Register

**Source:** `copy-governance.md`

| Audience | Register | In practice |
|---|---|---|
| orchestrator | Technical, operational, earnings-forward | CLI flags and config names directly. Lead with what they earn or configure. |
| gateway | Technical, operational | Same as orchestrator but focused on routing, pricing, capacity. |
| developer | Technical, API-forward | Code examples first. SDK method names as headings. |
| delegator | Financial, outcome-focused | Lead with earnings, risk, and decision criteria. |
| community | Welcoming, inclusive | Accessible language, no jargon without definition. |
| founder | Strategic, product-forward | Business case framing, market positioning. |
| general | Fact-led, neutral | No audience-specific framing. |

---

## Copy Skills (L0-L4 Framework)

**Source:** `CONTENT-WRITING/Research/copy-skills-reference.md`

### L0 — Value Proposition Gate
Before writing: answer 4 questions or stop.
1. **Operator outcome** — one sentence, no conditionals
2. **Featured path** — majority real-world model
3. **Reader's real alternative** — what they'd do instead
4. **Required belief** — what they need to believe to act

### L1 — Persona Routing
- Route by hardware + LPT + goal, never by named persona
- Majority path first, in full, not behind a Tab or collapsed state
- One routing sentence per profile, near top of page

### L2 — Page Sequence
Required order: outcome → featured path → variants → economics → decision aid → staged action → next link

### L3 — Paragraph Rules
- One paragraph, one job (label the job in 3 words)
- Lead sentence states the fact; remaining sentences extend it
- Final sentence: fact, number, or next step — never hedge or restatement
- Tables/diagrams stand alone — prose that restates them is deleted

### L4 — Copy Rules (Sentence Level)
Master test: "Does this sentence give the reader something they can act on, trust, or use to make a decision?"

---

## Description Fields

**Source:** `copy-skills-reference.md` L4 warning heuristics

- One-sentence outcome statement
- Open with reader outcome or fit — not "this page" or "overview of"
- Target ≤ 160 characters