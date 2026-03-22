# Section Naming Rubric

**Status**: ✅ Locked
**Purpose**: Prompt for scoring and selecting documentation section titles — governing-concept labels over literal/generic labels
**Use in pipeline**: Pass B (layout/style) — naming check step; also usable in Pass A structural review
**Related**: `Prompts/voice-rules.md` | `Frameworks/pageType.md` | `Frameworks/pagePurpose.md`

**Step 16 enrichment needed**: Step 2 (Use the metadata correctly) currently has three generic placeholder examples. At Step 16 (building Pass B), replace with full enum-level guidance drawn from locked definitions:
- All 7 pageTypes → naming style per type (e.g. `reference` → literal/findability; `concept` → governing concept; `instruction` → task-oriented; `navigation` → map language)
- All 15 purposes → title job per purpose (e.g. `explain` → concept labels; `choose` → decision-oriented; `reference` → exact findability; `orient` → map/overview language)
- All 7 audiences → terminology register per audience (e.g. `developer` → specialised technical; `delegator` → finance/governance register; `community` → accessible/narrative)
This turns the prompt from a standalone tool into a first-class pipeline component connected to the taxonomy.

---

## Quick Reference — Label Classes

| Class | What it does | Example |
|---|---|---|
| **Governing-concept label** | Names the concept those examples instantiate — ideal | `AI Runtime Profiles` |
| **Content descriptor** | Names what the section is actually about | `Inference Routing` |
| **Literal label** | Names the visible examples directly — penalise | `Batch vs Live Video` |
| **Comparator label** | Names the comparison, not the content — reject | `Operational Workload Differences` |
| **Generic descriptor** | Valid umbrella, too weak — penalise | `AI Workload Modes` |
| **Taxonomy mismatch** | Wrong conceptual category for the content — reject | calling runtime behaviour "architecture" |

**Core rule**: Do not name the examples. Name the concept those examples instantiate.

---

## Naming Prompt

You are naming a documentation section.

Your job is to find the **best final section title**, not the most obvious or first plausible one.

### Goal

Choose the title that most accurately names the **underlying content** of the section, at the **right conceptual level**, in a way that is:

- precise
- stable
- documentation-friendly
- interpretable in navigation
- better than a literal, generic, or surface-level label

The goal is **not** to mirror the examples in the section.
The goal is to name the **governing concept, purpose, or content focus** of the section.

---

### Inputs

Use the provided metadata as fixed inputs. Do **not** reinterpret or redefine them.

- **pageType** = structural form of the page
- **audience** = who the page is for
- **purpose** = why the page exists for the reader

Use them only to guide:

- title language
- title specificity
- terminology level
- framing
- editorial style

Do **not** treat pageType, audience, or purpose as candidate outputs.
They are constraints on naming.

---

### Step 1: Diagnose the section

State briefly:

- Reader question:
- Primary distinction or focus:
- Secondary distinction or focus:
- Correct conceptual layer:
- Surface labels to avoid:

Possible conceptual layers:

`subject` · `concept` · `category` · `role` · `process` · `method` · `path` · `decision` · `framework` · `policy` · `strategy` · `audience` · `use case` · `lifecycle` · `reference`

Choose the layer that best describes what the section is **actually about**, not just what words appear in it.

---

### Step 2: Use the metadata correctly

- **pageType** guides structural fit — `reference` can be more literal; `concept` should name the idea cleanly; `instruction` should sound task-oriented
- **purpose** guides the title's job — `explain` prefers concept labels; `choose` helps orient a decision; `reference` optimises for findability
- **audience** guides terminology — technical audiences support more specialised language; broader audiences need clearer plain-language titles

---

### Step 3: Generate candidates

Generate **12 candidate titles**.

Requirements:

- 1–4 words only
- concise and natural in docs navigation
- not verbose, not marketing language unless purpose clearly requires it
- not overly literal unless literal is truly best
- no awkward compounds, no vague filler words
- fit the provided pageType, purpose, and audience

---

### Step 4: Score each candidate

Score 1–5 on each dimension:

- **Precision** — does it match the real content or purpose?
- **Depth** — does it name the governing concept, not just the visible examples?
- **Stability** — would it still work if the section expands later?
- **Clarity** — would a reader correctly predict the section from the title?
- **Conciseness** — compact without becoming vague?

Total: **/25**

---

### Step 5: Apply ranking rules

**Core rules:**

- Strongly penalise literal contrast labels ("X vs Y") unless literal contrast is unquestionably clearest
- Penalise labels that describe difference or comparison rather than the content itself
- Penalise generic umbrella labels that do not capture the governing concept
- Penalise titles at the wrong conceptual layer
- Prefer titles that function as **content descriptors**
- Prefer governing-concept labels over example-level labels
- Prefer titles that describe the **actual thing the section is about**

**Weak-label penalties:**

- `types` — unless genuinely classifying categories
- `profiles` — unless genuinely describing stable groupings
- `modes` — unless genuinely describing distinct operational ways
- `models` — unless genuinely describing frameworks or formal approaches
- `overview` — unless no stronger content descriptor exists
- `guide` — unless the section is actually about guidance
- `basics`, `essentials`, `foundations` — unless explicitly introductory

**Semantic rules:**

- Use terms at their actual meaning
- If a term would sound misapplied to a knowledgeable reader, penalise it
- Prefer the field's correct native terminology for technical/niche content
- If a title applies equally to many unrelated topics, penalise it

**Domain-anchor rule:** Include the domain noun when needed to keep the title interpretable in isolation.

**Conditional precision rule:** If the section is about a process → prefer process-language; a decision → decision-language; a path → path/journey language; a role → role/audience language; a technical concept → the domain's correct native terminology.

---

### Step 6: Winner filter

Before choosing the winner, test the top candidates:

1. Does this name the real governing concept — not just the examples?
2. Is it a content descriptor, not a literal label?
3. Is it at the right conceptual layer?
4. Would it still work if more examples were added later?
5. Would a reader scanning navigation understand the subject area?
6. Is this term used at its correct meaning?
7. Does it fit the pageType?
8. Does it fit the purpose?
9. Does it fit the audience?
10. Does it sound like an expert editorial choice rather than a safe generic label?

If the answer is **no** to any of the above, do not rank it first.

---

### Output format

```
Reader question:
Primary distinction or focus:
Secondary distinction or focus:
Correct conceptual layer:
Surface labels to avoid:

12 candidate titles:
1. ...  2. ...  3. ...  4. ...  5. ...  6. ...  7. ...  8. ...  9. ...  10. ...  11. ...  12. ...

Scoring:
[Title] — Precision: X/5, Depth: X/5, Stability: X/5, Clarity: X/5, Conciseness: X/5, Total: X/25 — [1 sentence explanation]

Ranked list:
1. ... 2. ... [through 12]

Best title:
Why it wins:
Why weaker generic titles fail:
```

---

### Inputs (fill in when using)

**pageType**: [paste here]
**audience**: [paste here]
**purpose**: [paste here]
**Section description**: [paste here]
