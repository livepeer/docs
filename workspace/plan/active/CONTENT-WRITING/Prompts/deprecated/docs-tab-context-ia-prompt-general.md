# Prompt: Documentation Tab — IA Research & Page Definitions
## General-purpose · Any docs site · Any tab or section

---

## Context block
*Fill every field before running. Vague answers here produce vague outputs.*

```
DOCS PLATFORM:        [Mintlify / Docusaurus / GitBook / ReadTheDocs / other]
REPO:                 [github.com/org/docs — branch if relevant]
LIVE DOCS ACCESS:     [connected MCP tool name / web fetch available / not available]
TARGET TAB/SECTION:   [the tab or section being designed]
PRODUCT TYPE:         [SaaS / OSS library / protocol / DePIN / API / platform / other]
PRODUCT DOMAIN:       [AI / video / finance / developer tools / infrastructure / other]
DISCARD CURRENT IA:   [yes — do not read existing pages in this section / no — use as input]
PROJECT FILES:        [list any context files already in scope, or "none"]
SITE STRUCTURE:       [how is the docs site organised — by role / by topic / by journey / hybrid]
OTHER TABS/SECTIONS:  [list all other top-level tabs or sections, comma-separated]
OUTPUT FILES:         [naming convention, e.g. tab-01-research.md, tab-02-audience.md, tab-03-ia.md]
VOICE REFERENCE:      [register, language, key constraints — e.g. peer-technical, UK English,
                       no questions in technical docs, no em-dashes, no hedging openers]
```

---

## Pre-flight: Site ownership map
*Complete before any research or writing. This is the most important step.*

Use the live docs connection to skim every tab or section in the site **except the target**. For each, capture in 3–5 sentences:

- What it contains (topic scope and page types)
- Who it primarily serves
- What it explicitly owns — the content that lives there and nowhere else

Record this as a **site ownership map**. It is the single most important input to the IA design. Content duplication across tabs is a structural failure, not a content gap — and it is invisible until you have this map.

If live docs access is unavailable, use available project files or web search to reconstruct it as best you can. State any gaps explicitly.

**Output of this step:** A table with one row per tab — Tab name · What it owns · Primary persona. Keep it brief. This is a map, not a summary.

---

## Phase 1 — Research
*Output: Doc 01 — Research*

### 1.1 First-principles section analysis

Answer from first principles. Do not derive these answers from the current implementation.

**What is this section fundamentally for?**
Every tab or section in a documentation site exists to serve one primary function that no other section serves. Name that function. In a site organised by role or topic, what does this section do that no other section does? Define the 2–3 jobs it must perform and the failure mode if each is absent.

**What are the structural properties of this content domain?**
What makes this section's content different from a typical product docs section? Consider: how perishable is the information (stable / seasonal / changes with every release / changes with community decisions)? Is the content authoritative (facts, specs) or curatorial (links, pointers, aggregations)? Is the audience homogeneous or multi-role? Does the content trigger action or build understanding?

### 1.2 External research

Identify the best comparable documentation examples for this type of section — not necessarily the same product domain, but the same structural type (e.g. "community hub in an OSS project", "reference section in a developer API", "getting started in a DePIN protocol"). Search for 3–5 examples.

For each: what does it do well? What does it do poorly? What principle does it demonstrate?

Synthesise into: 4–6 design principles the section should follow, each with a one-sentence rationale.

### 1.3 Project-specific context

From project files and live docs, extract:

- What entities, organisations, or programmes are specific to this product and relevant to this section?
- What surfaces (external tools, platforms, channels, dashboards) does this section need to point to?
- What information is perishable — changes faster than the docs review cycle?
- What information already exists in other sections and is well-served there?
- What is the strategic priority of this section relative to others? (Is it P0 for new user activation, or P2 maintenance?)

### 1.4 Information taxonomy

Produce a complete inventory of all information the target audience might need or want from this section. This is the **divergent phase** of the design. Capture everything — scope reduction happens in Phase 2.

For each item, record:

| ID | Information item | Type | Domain context | Niche | Skill level | Best delivery method |
|----|-----------------|------|---------------|-------|-------------|---------------------|

**Type options:** concept / fact / process / directory / reference / signal / narrative  
**Domain context options:** technical / governance / financial / community / marketing / operational  
**Niche:** the specific sub-domain this information belongs to (e.g. web3 / AI / video / OSS)  
**Skill level:** beginner / intermediate / advanced  
**Delivery method:** short prose / numbered steps / table / card grid / embed / curated list / diagram / code block

Aim for completeness, not elegance. Orphan items here become missing pages later.

---

## Phase 2 — Audience & Purpose Framework
*Output: Doc 02 — Audience & Purpose*

Answer each question with specificity. "It depends" is not an answer — give the answer with the nuance built in.

**1. The purpose of this section**
One paragraph. What does this section do that no other tab does? Name the primary functions. State explicitly what it is not (what it should never become — e.g. not a marketing page, not a duplicate of the role tab, not a links dump).

**2. The audience**
Who arrives on this section? Not "anyone interested in X" — name the actual reader types. Distinguish between primary audiences (the section is built for them) and secondary audiences (they arrive here but the section is not optimised for them). Note whether the audience is single-persona or legitimately multi-persona, and why.

**3. Persona categories, ranked by arrival likelihood**
Table: Rank · Persona name (specific, not generic) · Why they land on this section specifically — what sent them here.

Minimum 4 personas. Use named archetypes with motivation built into the name (e.g. "The Evaluating Delegator", "The First-Time Contributor", "The Governance Proposer") not role labels (e.g. not "developer" or "user").

**4. Purpose of visit per persona**
For each persona:
- What questions do they arrive with? (Specific questions, not topic areas)
- What do they want to achieve / discover / do?
- What does success look like? (A concrete action or state — not "understand X" or "learn about Y")

**5. Why they want that outcome**
The motivational layer underneath the surface request. What is the real driver? Economic alignment? Belonging? Reducing risk? Gaining influence? Completing a task they are stuck on? Validating a decision they have already made? State the actual motivation — it determines how content should be framed.

**6. The process to achieve their outcome**
For the top 2–3 personas: a numbered sequence of steps from arriving on the section to completing their goal. No more than 5–6 steps per persona. This journey map becomes the structural logic for the section groupings.

**7. Information needed per persona**
Map each persona's journey steps to specific items from the Phase 1 inventory. Reference items by ID. This is the **convergent phase** of the design — you are reducing 30–50 inventory items to the 10–20 that actually serve the top audience processes. Items that don't serve any named process are cut or deferred.

**8. Information categories by domain context**
Table: Information category → Domain context (technical / governance / financial / community / operational / marketing). This grouping informs how sections are named and sequenced.

**9. Voice register by content type**
Table: Content type → Appropriate voice. Then state explicit prohibitions — specific phrases or patterns that must not appear in this section. Generic prohibitions ("avoid jargon") are useless. Named prohibitions are enforceable (e.g. "no 'thriving community' or 'passionate contributors'", "no opening a page with a cost or risk statement", "no document self-description: 'this page covers...'").

**10. Delivery preferences by persona**
Table: Persona → Preferred format → Rationale. The rationale must explain why — what the persona's state of mind or time availability makes that format the right fit.

---

## Phase 3 — IA & Page Definitions
*Output: Doc 03 — IA & Pages (first pass)*
*Output: Doc 05 — IA & Pages (final — after site ownership check)*

### Critical gate between Doc 03 and Doc 05

After completing Doc 03, run this check for every proposed page:

1. Is this content already documented in another tab? If yes: replace the page with a pointer and a one-sentence orientation.
2. Does this page duplicate mechanics, processes, or reference content that another tab maintains? If yes: link, don't duplicate.
3. Is this content perishable enough that a static MDX page will be misleading within 3 months? If yes: replace with a pointer to the live source.

This check typically reduces the page count by 20–40%. Every page that survives is justified by the audience process map. Every page eliminated is a maintenance liability removed.

Record what was cut and why. That becomes the cross-link map and handoff documentation.

---

### Part 1: Navigation structure

```
[Section name]
├── [Page name]    pageType · voice
├── [Sub-section]
│   ├── [Page name]    pageType · voice
│   └── [Page name]    pageType · voice
```

Below the tree, state:
- Total page count and why that number is right (not too many, not too few)
- **Handoff map:** content this section does NOT own → which section/tab owns it
- **Staleness register:** pages with volatile content → mitigation strategy per page

---

### Part 2: IA groupings with tags

For every section and page:

| Page | Purpose tag | pageType | Voice |
|------|------------|----------|-------|

**Purpose tag options (one word):** orient / activate / navigate / discover / answer / inform / reference / route  
**pageType options:** landing / concept / how-to / guide / reference / faq / tutorial / overview  
**Voice:** 2–3 descriptors matching the register established in Phase 2

---

### Part 3: Page definitions

For each page, in the order they appear in the navigation:

---

**NAME** [1–3 words. Derived from the core concept, not from the UI label or internal project name. Use terminology the audience uses.]

**Description**  
One sentence. States the subject directly — what the page is about, not what it does or contains.  
❌ "This page explains the three ways to contribute to the ecosystem."  
✅ "Three contribution pathways for non-technical participants — governance, support, and translation."

**Introduction** [1–2 sentences]  
Value proposition first. Outcome-focused. The reader should know after two sentences what this page delivers and why it matters to them at this point in their journey.

Prohibited patterns — do not use:
- "This page covers / explains / walks you through..."
- "Whether you want to... or..., this page..."
- "Depending on your situation..."
- Questions as openers
- Cost, risk, or difficulty before value
- Superlatives or enthusiasm without information ("powerful", "amazing", "thriving")
- "There are [N] options for..."

**Required sections** [Named 1–3 words each]

For each section, 1–3 sentences covering:
- What the section delivers
- Why it belongs at this position in the page (journey logic — what the reader knows coming in, what they need here)
- Where it routes the reader next (the handoff — internal link or external surface)

Sections run in the order of the reader's journey. No section is a standalone — each receives from the section before it and hands off to the section after it or to another page.

**Review flags**  
`{/* REVIEW: [specific claim that requires SME verification] — owner: [named person or role] */}`  
One flag per unverifiable claim. Do not assert facts that cannot be verified against a named primary source.

---

## Quality gates

Run before delivering any document.

**Doc 02 (Audience & Purpose):**
- [ ] Every persona has a specific named archetype — no generic role labels
- [ ] Every success state is a concrete action — no "understand X"
- [ ] Voice prohibitions are specific and named — not generic "avoid jargon"
- [ ] Delivery preferences are matched to content type AND persona's state of mind

**Doc 03 / Doc 05 (IA & Pages):**
- [ ] No page duplicates content owned by another section
- [ ] Every page answers exactly one question — identifiable from its purpose tag
- [ ] Every introduction passes all prohibition checks
- [ ] Every section has a named handoff
- [ ] Volatile content has a staleness mitigation strategy
- [ ] Page count is justified — every page serves a named audience process
- [ ] Cross-link map exists as a named deliverable

---

## Anti-patterns

**In research:**
- Do not derive the IA from the current implementation. What exists is the starting point for comparison, not the answer.
- Do not apply analogies from a different structural type (SaaS ≠ OSS ≠ protocol ≠ DePIN). Name the specific domain and find examples within it.

**In audience analysis:**
- Do not conflate orientation needs with activation needs. They require different content types and different page structures.
- Do not assume the most technically sophisticated persona is the primary audience for every section.
- Do not name a persona after their job title. Name them after their motivation or state at arrival.

**In IA design:**
- Do not create pages for content better maintained elsewhere — link to the canonical source.
- Do not create static pages for inherently dynamic content (live status, active proposals, current events, personnel).
- Do not add pages to justify a section's existence. A section with 2 well-scoped pages is better than one with 6 bloated ones.
- Do not confuse "users talk about this topic" with "this section should document this topic."

**In page definitions:**
- Do not write the introduction before the section structure is finalised. The intro is the last thing written, not the first.
- Do not move to page definitions until the site ownership check (the gate between Doc 03 and Doc 05) is complete. Pages written before that check are built on an unstable foundation.
