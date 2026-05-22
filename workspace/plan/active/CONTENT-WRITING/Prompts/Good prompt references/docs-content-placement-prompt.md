# Prompt: Content Placement Within a Fixed IA
## For: Docs sites with established tab/section structure

---

## The actual problem

The IA structure is set. The question is:

> Given this section's fixed position in the site, **what information belongs here** — and for every candidate item, **does it live here or somewhere else?**

This is a placement and ownership problem, not a design problem. The output is not a new IA — it is a content map: what goes where, what cross-links to where, and what stays out entirely.

---

## Context block

```
DOCS PLATFORM:       [Mintlify / Docusaurus / other]
REPO:                [github.com/org/docs — branch]
LIVE DOCS ACCESS:    [MCP tool name / not available]
TARGET TAB:          [the tab being filled]
TARGET SECTION:      [the specific section within that tab, if scoping to one]
FIXED STRUCTURE:     [paste the nav tree or describe the section groupings]
OTHER TABS:          [comma-separated list of all other tabs]
AUDIENCE:            [the primary persona(s) for this tab — named specifically]
VOICE:               [register and key constraints]
```

---

## Step 1 — Ownership scan (10 minutes max)

For each other tab in the site, answer one question in one sentence:

> What does [Tab X] explicitly own that this tab should never duplicate?

This produces a **content boundary map** — a short table the rest of the process references.

| Other tab | What it owns | Implication for target tab |
|-----------|-------------|---------------------------|
| [Tab A] | [owned content] | [this tab should link / omit / reference] |

Stop when the table is complete. Do not read entire tabs — read portal pages and section headers only.

---

## Step 2 — Audience job at this section

For the primary audience of this tab, state in 2–3 sentences:

- What state are they in when they arrive at **this specific section**?
- What do they need to leave with? (One concrete action or understanding — not "learn about X")
- What do they already know from earlier sections in this tab?

This prevents content that belongs earlier in the tab (already covered) or later (not yet needed).

---

## Step 3 — Content inventory for this section

List every information item a reader at this section's position in the journey would want or need.

For each item:

| ID | Item | Belongs here? | If not here — where? | Delivery method |
|----|------|--------------|---------------------|----------------|
| 01 | [information item] | Yes / No / Link only | [tab/section if not here] | [prose / table / steps / list / embed] |

**Belongs here = Yes** when: the information is unique to this section's scope, no other tab owns it, and the reader needs it at this point in their journey.

**Belongs here = Link only** when: the information exists in another tab, is better maintained there, but the reader needs a pointer from this section to find it.

**Belongs here = No** when: the information belongs in another tab and this section should not surface it at all — adding it would create scope confusion.

Do this for every candidate item before writing a word of content. The inventory IS the content plan.

---

## Step 4 — Map items to fixed pages

Take the items marked "Yes" or "Link only" from Step 3. Assign each to a specific page in the fixed structure.

| Item ID | Information item | Assigned page | Position in page | Note |
|---------|-----------------|--------------|-----------------|------|
| 01 | [item] | [page name] | [section name within page] | [any constraint] |

If an item cannot be assigned to any existing page, flag it:
- **Gap:** content the audience needs that has no home in the current structure → either a new page is justified, or it folds into an adjacent page
- **Orphan:** content that seemed needed but on reflection belongs in another tab

---

## Step 5 — Page definitions (for pages that need writing or updating)

Only for pages where Step 4 produced a content assignment. Skip pages that are already complete.

For each page:

**Name** [1–3 words — concept-derived, uses audience's terminology]

**Description**  
One sentence. States the subject. Not "this page explains..." — states it directly.

**Introduction** [1–2 sentences]  
Value-proposition first. Outcome-focused. No: conditionals, questions, self-reference ("this page"), superlatives, cost/risk before value, enthusiasm without information.

**Sections** [named 1–3 words each, in journey order]  
For each section: what it delivers · why at this position · where it hands off next.

**Review flags**  
`{/* REVIEW: [claim] — owner: [name] */}` for anything unverifiable at time of writing.

---

## Step 6 — Cross-link map

Two tables. First-class deliverable — not optional.

**Inbound:** what routes INTO this section from elsewhere in the site
| Source tab/page | What it sends here | Why |

**Outbound:** what this section sends OUT to the rest of the site
| This page/section | Sends to | Reason |

This map validates scope: if a section has no inbound routes, it may not be discoverable. If it has no outbound routes, it may be a dead end.

---

## Quality gates

- [ ] Every "Yes" item in the inventory is assigned to a specific page and section
- [ ] Every "Link only" item has a named destination
- [ ] Every "No" item has a stated reason
- [ ] No page duplicates content from another tab
- [ ] Every page introduction passes: no conditionals, no self-reference, value first
- [ ] Every section has a named handoff
- [ ] Volatile content (changes faster than quarterly) points to a live source, not static text
- [ ] Cross-link map exists with both inbound and outbound populated

---

## What this prompt does NOT produce

- A new navigation structure (the structure is fixed)
- A persona analysis from scratch (the audience is known)
- External research synthesis (unless a specific content item requires it)
- A rationale for whether the section should exist (that decision is already made)

If any of those are needed, they are separate upstream tasks — not part of this prompt.

---

## When to use which prompt

| Situation | Prompt to use |
|-----------|--------------|
| Tab structure unknown — design from scratch | Full IA prompt (5-document pipeline) |
| Tab structure set — need to fill a section | **This prompt** |
| One existing page needs improvement | Tier 3 single-page prompt |
| One existing page needs auditing | Tier 3 audit prompt |
| Section scope feels wrong despite fixed structure | Full IA prompt — the structure may not be as fixed as it appears |
