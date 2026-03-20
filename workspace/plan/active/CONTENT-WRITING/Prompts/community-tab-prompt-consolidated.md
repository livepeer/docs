# Prompt: Documentation Tab IA Research & Page Definitions
## For: Any documentation section requiring first-principles IA design

---

## Context block (fill before running)

```
DOCS PLATFORM:       [e.g. Mintlify / Docusaurus / GitBook]
REPO:                [e.g. github.com/org/docs, branch: docs-v2]
LIVE DOCS MCP:       [connected / not connected — name the tool if connected]
TAB/SECTION:         [e.g. Community]
DISCARD CURRENT IA:  [yes / no — if yes, do not read or reference existing pages in this section]
PROJECT FILES:       [list any relevant context files already in scope]
OUTPUT FORMAT:       [.md files — number and naming convention]
VOICE REFERENCE:     [e.g. peer-technical, UK English, no em-dashes, no questions in technical docs]
```

---

## Pre-flight: Read the full docs site first

**Before any research or writing, complete this step in full.**

Use the live docs connection (MCP tool or web fetch) to skim every tab in the v2 docs site except the target section. For each tab, capture in 3–5 sentences:
- What it contains (page types and topic scope)
- Who it serves (primary persona)
- What it explicitly owns (so the target section does not duplicate it)

Record this as a tab ownership map. This is the single most important input to the IA — content duplication across tabs is a structural failure, not a content gap.

**Tabs to skim for a Livepeer v2 engagement:** Home, About, Solutions, Developers, Gateways, Orchestrators, LP Token (ignore v1 — deprecated).

If live docs access is unavailable, use project files and search the docs MCP connector before proceeding.

---

## Phase 1 — Research

*Output: Doc 01 — Research*

### Step 1.1: First-principles section analysis

Answer from first principles — not from the current implementation:

**What is this section fundamentally for?**
Define the section's function as distinct from all other tabs. In a documentation site organised by role (build, operate, stake, govern), what does this section do that no other tab does? Name the three functions it must deliver (e.g. orient / activate / retain) and the failure mode if each is missing.

**What are the unique structural properties of this domain?**
What makes this section different from a typical SaaS product community page, OSS project docs, or a Web2 platform? For a DePIN/web3 network: participants have skin in the game, governance is binding, roles are fluid, information is perishable. Name the properties specific to this project.

### Step 1.2: External research

Search for and synthesise best practices from:
- OSS community documentation hubs (The Open Source Way, GitHub Open Source Guides, CNCF/Kubernetes community model)
- Decentralised network and DePIN community patterns (a16z crypto, DePIN Hub)
- Web3 design and onboarding principles
- Ecosystem hub design (how mature projects structure community vs technical docs)

Synthesise into: principles the section design should follow, with rationale.

### Step 1.3: Project-specific context

From project files and live docs:
- What community organisations exist? (e.g. Foundation, GovWorks, Live Pioneers, SPEs, Workstreams)
- What community surfaces exist? (Discord channels, Forum categories, Telegram, events)
- What funded participation pathways exist?
- What information is perishable (changes faster than a quarterly review)?
- What information already exists and is well-served in other tabs?

### Step 1.4: Information taxonomy

Produce a full inventory of all information the target audience needs or wants from this section.

For each item, record:
- **Type** (concept / fact / process / directory / reference / signal / narrative)
- **Industry context** (governance / finance / technical / community / marketing)
- **Niche** (web3 / AI / video / OSS / DePIN)
- **Skill level** (beginner / intermediate / advanced)
- **Delivery method** (short prose / table / step guide / card grid / embed / curated list)

This inventory is the divergent phase of diamond thinking. Capture everything — scope reduction happens in Phase 2.

---

## Phase 2 — Audience & Purpose Framework

*Output: Doc 02 — Audience & Purpose*

Answer each question with specificity. No generic answers. No "it depends." If an answer requires nuance, give the nuance.

**1. The purpose of this section**
One paragraph. What does this section do that no other tab does? Name the three functions (orient / activate / retain or equivalent). State what it is not (not a links dump, not a social media aggregator, etc.).

**2. The audience for this section**
Unlike role-specific tabs, community sections are legitimately multi-persona. Name every audience. State why "multi-persona" does not mean "undifferentiated" — each persona must be routed efficiently.

**3. Persona categories, ranked by likelihood of landing here**
Table: Rank · Persona name · Why they land on this section specifically. Minimum 5 personas. Use specific names (e.g. "The Active Delegator" not "token holder").

**4. Purpose of visit per persona**
For each persona:
- What questions do they arrive with?
- What do they want to achieve / discover / understand / do?
- What does success look like? (Name the concrete action or state, not "understand X")

**5. Why they want that outcome**
The motivational layer. What drives each persona? Economic alignment? Belonging? Influence? Competitive advantage? Due diligence? State the real motivation, not the surface request.

**6. The process to achieve their outcome**
For the top 2–3 personas: a numbered sequence of steps they take from arriving on the section to completing their goal. This is the journey map that drives section structure.

**7. Information needed per persona**
Map each persona's journey to the specific information items from the Phase 1 inventory. Reference items by ID. This produces the convergent phase of diamond thinking.

**8. Information categories by context**
Table: each information category from the inventory → its industry/domain context. This informs section grouping.

**9. Voice style by content type**
Table: content type → appropriate voice register. Name prohibited voice patterns for this section (e.g. no exclamation marks on factual content, no "thriving community" language, no passive descriptions).

**10. Delivery preferences by persona**
Table: persona → preferred delivery format → rationale. Surface the mismatch between what the information is and how each persona wants to receive it.

---

## Phase 3 — IA & Page Definitions (with full docs context)

*Output: Doc 03 — IA & Pages (first pass, without full docs site context)*
*Output: Doc 05 — IA & Pages (final, with full docs site context — supersedes Doc 03)*

**Critical gate before writing Doc 05:**
Re-read the tab ownership map from Phase 1. For every page proposed in Doc 03, verify:
- Is this content already owned by another tab?
- Does this page duplicate mechanics, processes, or reference content that is better maintained in its canonical location?
- If yes: replace the page with a cross-link and a one-sentence orientation. Do not duplicate.

This step typically reduces the page count by 20–40%. A page that duplicates another tab is a maintenance liability, not a content asset.

### Part 1: Navigation structure

Produce the final navigation tree as a code block:
```
Section name
├── [Page name]    pageType · voice
├── Sub-section
│   ├── [Page name]    pageType · voice
│   └── [Page name]    pageType · voice
```

Include below the tree:
- Total page count
- Handoff map: content NOT owned by this section → which tab owns it
- Staleness risk register: pages with volatile content → mitigation per page

### Part 2: IA groupings with tags

For each section and page, record:
- **Purpose tag** (one word: orient / activate / navigate / discover / answer / inform / reference)
- **pageType** (landing / concept / how-to / guide / reference / faq / tutorial)
- **Voice** (2–3 descriptors: e.g. concise + factual / narrative + invitational / scannable + direct)

### Part 3: Page definitions

For each page, in sequence:

**Name** [1–3 words, concept-derived, context-appropriate terminology]

**Description** [One sentence. Voice-appropriate. States what the page covers. Not "this page explains" — states the subject directly.]

**Introduction** [1–2 sentences. Value proposition forward. Outcome-focused. No qualifiers, no conditionals, no questions, no literal prose ("this page is", "three options for"), no tabloid, no superlatives. The reader should know after two sentences exactly what this page delivers and why it matters to them.]

**Required sections** [Named 1–3 words each]
For each section: 1–3 sentences covering:
- What the section delivers (the content)
- Why it belongs here (the value to the reader at this point in their journey)
- Where it routes (what the reader does after this section)

Sections must flow in narrative sequence — the reader's journey through the page should mirror their journey toward their goal. No orphan sections. No sections that could be moved to a different page without loss.

**Review flags** [If any content requires SME verification before publish, add: `{/* REVIEW: [claim] — owner: [name] */}`]

---

## Quality gates

Before delivering any output, verify:

**Doc 02 gates:**
- [ ] Every persona has a specific name (not "user" or "operator generally")
- [ ] Every success state is a concrete action, not "understand X"
- [ ] Voice prohibitions are explicit and non-generic
- [ ] Delivery preferences are matched to content type AND persona state

**Doc 03 / 05 gates:**
- [ ] No page duplicates content owned by another tab
- [ ] Every page answers one question (stated in the purpose tag)
- [ ] Every introduction passes the anti-pattern test (no barrier-first, no restatement of reader's question, no document self-description, no enthusiasm without information)
- [ ] Every section has a named handoff (where the reader goes next)
- [ ] Volatile content pages have a staleness mitigation strategy
- [ ] Total page count is justified — no pages that exist only to exist

---

## Anti-patterns to avoid

**In research:**
- Do not derive the framework from the current implementation. Start from first principles, then check against what exists.
- Do not treat "best practices" articles as authoritative without checking they apply to this specific domain (DePIN ≠ SaaS community ≠ OSS project).

**In audience analysis:**
- Do not conflate orientation needs with activation needs — they require different content types.
- Do not assume the technical persona is the primary audience for a community section.

**In IA design:**
- Do not build governance mechanics pages in a community section if a governance/token tab already owns them — link, don't duplicate.
- Do not build contribution guides in a community section if a developer/OSS tab already owns them — link, don't duplicate.
- Do not create pages for dynamic content (trending topics, live proposals, active events) as static MDX — point to live sources instead.
- Do not confuse "the community talks about X" with "the community tab should document X."

**In page definitions:**
- Do not open with cost, risk, or difficulty before establishing value.
- Do not restate the reader's question as the answer ("whether it makes sense depends on your situation").
- Do not describe the document ("this page covers...").
- Do not use enthusiasm without information ("Livepeer has a vibrant and growing ecosystem...").

---

## Recommended improvements on the original prompts

The two original prompts together work well. These additions would make the process more reliable:

**1. The tab ownership scan should be mandatory and first, not a correction step.**
The most expensive error in docs IA is building pages that duplicate another section. Running the live docs skim as Step 0 — before any research — prevents this structurally rather than requiring a corrective pass after Doc 03 is already written.

**2. Add an explicit "what this section does NOT own" statement to the pre-draft brief.**
Force the answer to: "What content might seem to belong here but is actually better maintained in another tab?" Document the handoff explicitly. This produces a leaner IA and creates the cross-link map automatically.

**3. Specify the staleness risk register upfront.**
For any section covering governance, programmes, personnel, or community organisations: identify before writing which content items change faster than a quarterly review cycle. Those items should never be documented as facts — they should be pointers to live sources. Building this register before writing prevents the most common community docs failure mode (accurate on publish day, misleading six weeks later).

**4. Name the voice prohibitions before writing, not after.**
The prohibition list (no "thriving community", no exclamation marks on factual content, no passive descriptions, no conditional gatekeeping) should be established in the audience framework and applied as a pre-publish check — not discovered during editing.

**5. Diamond thinking needs an explicit convergence trigger.**
The divergent inventory (48 information items in this engagement) is valuable but must have a clear convergence mechanism. The structured groupings by audience process serve this role — but the prompt should explicitly state: "After the inventory is complete, reduce to the minimum set of pages that covers the top 2–3 audience processes. Every item that doesn't serve a named process is cut or deferred."

**6. Page count is an output of the process, not an input.**
Do not set a target page count before the IA is designed. Let the scope discipline produce the count. In this engagement the count went from 20 (Doc 03) to 14 (Doc 05) through the tab ownership check — this reduction was correct and would have been larger if the skim had run first.

**7. Run the cross-link map as a deliverable, not an afterthought.**
The handoff map (which pages link out to which tabs, and why) is a first-class output. It validates scope discipline, creates navigation coherence, and makes maintenance ownership explicit. It should appear in the final IA document as a named section, not as a set of incidental links inside page definitions.
