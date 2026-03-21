# Prompt: Livepeer Docs — Tab Map
## Level 1 · Content Pipeline · Gateways or Orchestrators tab

---

## When to use this prompt

Use at the start of any content pipeline run for a full tab. It produces the **tab map** — a structural inventory of the tab's sections and pages, classified against the canonical section vocabulary, with gap analysis and audience journey.

The tab map is the required input to every Level 2 Pass A and Pass B operation. Do not run Level 2 on any page without a tab map for its parent tab.

---

## Context block

*Fill fields marked [FILL]. Fields marked [PRE-FILLED] are Livepeer constants — do not change them.*

```
TAB:               [FILL: gateways / orchestrators]
REPO_PATH:         /Users/alisonhaire/Documents/Livepeer/Docs-v2-dev
TAB_ROOT:          v2/[TAB]/
LIVE_DOCS_ACCESS:  [FILL: Livepeer_Docs MCP / not available]
OUTPUT_FILE:       v2/[TAB]/_workspace/tab-map.md
```

```
[PRE-FILLED: SECTION VOCABULARY — canonical 6-position structure]

Position 1  portal.mdx / navigator.mdx  pageType: navigation   Tab entry point + secondary routing
Position 2  concepts/                   pageType: concept      Orientation + architecture
Position 3  quickstart/                 pageType: instruction  pageVariant: quickstart — fastest path to first success
Position 4  setup/                      pageType: instruction  pageVariant: setup — full installation + config
Position 5  guides/                     pageType: guide        Practical understanding, operational phase
  Position 5a  guides/tutorials/        pageType: tutorial     Tab-specific tutorials
Position 6  resources/                  Container section only — two sub-sections:
  Position 6a  resources/reference/     pageType: reference    Structured lookup: specs, FAQ, glossary, troubleshooting
  Position 6b  resources/knowledge-hub/ pageType: resource     Curated external content: tools, directories, community

[PRE-FILLED: AUDIENCES PER TAB]

gateways:
  primary audience:  gateway
  arriving question: "How do I set up and run a gateway?"
  personas:          graduate, provider, architect, broadcaster, platform

orchestrators:
  primary audience:  orchestrator
  arriving question: "How do I set up, run, and earn with a node?"
  personas:          operator, hobbyist, commercial, specialist, delegate

[PRE-FILLED: TAXONOMY ENUMS]

pageType (7):     concept, tutorial, guide, instruction, navigation, reference, resource
pageVariant:      overview, specification, compendium, changelog, quickstart, setup, knowledge-hub
purpose (15):     orient, explain, learn, choose, evaluate, start, build, configure, operate,
                  troubleshoot, verify, integrate, optimise, reference, update
lifecycleStage:   discover, evaluate, setup, build, operate, troubleshoot, optimise
complexity:       beginner, intermediate, advanced
industry (9):     technical, finance, economics, business, marketing, governance, broadcast, AI, livepeer
niche (8):        web3, protocol, tokenomics, AI, video, streaming, hardware, infrastructure

[PRE-FILLED: FOLDER GOVERNANCE]

Publishable lanes: v2/[tab]/ (canonical sections only, per section vocabulary above)
                   v2/[tab]/x-deprecated/ (deprecated content, not navigated)
                   v2/[tab]/x-archived/ (archived content, not navigated)
Non-publishable:   v2/[tab]/_workspace/ (research, plans, workspace files — never navigated)
Stray files at tab root: any file at v2/[tab]/ that is not portal.mdx, navigator.mdx, index.mdx,
                          or a canonical section folder — must be moved to _workspace/ or appropriate section

[PRE-FILLED: VOICE]
UK English, technical register, peer-to-peer (not tutorial-style), no em-dashes, no hedging openers,
no "this page covers", no passive value statements
```

---

## Phase 1 — Scan the tab

*Do not write any output until all Phase 1 steps are complete.*

### 1.1 Read the tab root

List everything at `v2/[tab]/`. For each item, classify:

| Item | Type | Classification | Notes |
|---|---|---|---|

**Classification values:**
- `canonical` — matches section vocabulary position exactly
- `stray-file` — file at root that is not portal.mdx / navigator.mdx / index.mdx
- `divergence` — folder present but not in canonical vocabulary
- `missing` — canonical position not present

### 1.2 Read docs.json navigation for this tab

Find the tab's navigation group in `docs.json`. Extract every path.

Cross-reference against the file system:
- Paths in docs.json with no corresponding file on disk → **broken paths**
- Files on disk not referenced in docs.json → **orphaned files**

Output three tables:
1. Navigation inventory: Path · Nav group · File exists (yes/no)
2. Broken paths list
3. Orphaned files list

### 1.3 Classify every navigated page against the taxonomy

For each page currently in docs.json, read its frontmatter. Record:

| Page path | pageType | audience | purpose | lifecycleStage | veracityStatus | Classification |
|---|---|---|---|---|---|---|

**Classification values:**
- `aligned` — frontmatter matches canonical section vocabulary for its position
- `wrong-type` — pageType doesn't match the section it's in
- `missing-fields` — frontmatter incomplete (missing any required field)
- `misplaced` — content belongs in a different section
- `stale` — veracityStatus is `stale` or last-verified date is >6 months ago

---

## Phase 2 — Audience journey map

### 2.1 Linear journey (positions 1–3)

For the tab's primary audience, map the linear path from entry to activation:

| Step | Section/page | Reader arrives knowing | Reader leaves able to | Gap? |
|---|---|---|---|---|

A **gap** is a step where no page currently exists, or the existing page fails to deliver the stated outcome for the primary persona.

### 2.2 On-demand journey (positions 4–6)

| Section | Primary use case | Entry conditions | Gap? |
|---|---|---|---|

### 2.3 Cross-tab paths

Identify the 3–5 most common points where readers will leave this tab for another. For each:

| Journey moment | Destination tab | Cross-link exists? |
|---|---|---|

---

## Phase 3 — Gap analysis

**Missing pages** (canonical positions with no content):

| Position | What should be here | Priority |
|---|---|---|

Priority: P0 = blocks the linear journey | P1 = on-demand section incomplete | P2 = nice-to-have

**Misclassified pages** (wrong type, wrong section, or incomplete frontmatter):

| Page | Current state | Should be | Action |
|---|---|---|---|

**Content gaps** (pages that exist but fail to deliver their purpose):

| Page | Stated purpose | What's missing | Action |
|---|---|---|---|

---

## Phase 4 — Output: Tab map document

Write the tab map to `OUTPUT_FILE`. Include these sections in order:

1. **Tab overview** — one paragraph: primary audience, arriving question, tab's structural role
2. **Section inventory** — every section classified against vocabulary, page count, status
3. **Navigation structure** — mirror of the docs.json structure with pageType + classification annotations per page
4. **Audience journey** — linear + on-demand journey tables from Phase 2
5. **Gap analysis** — three gap tables from Phase 3
6. **Recommended actions** — ordered list of changes needed, each with:
   - Action type: `structural-change` / `frontmatter-fix` / `content-write` / `content-rewrite` / `file-move`
   - Scope: which file(s) affected
   - Priority: P0 / P1 / P2
   - Blocking: does this block any Level 2 operation?

---

## Quality gates

Before delivering the tab map:

- [ ] Every page in docs.json appears in the Phase 1.3 classification table
- [ ] Every file on disk is accounted for (navigated, orphaned, or stray)
- [ ] Every gap is typed (missing / misclassified / content-gap)
- [ ] No stray files remain at tab root (governance check)
- [ ] Recommended actions are priority-ordered
- [ ] Broken paths and orphaned files are both listed (even if empty)
- [ ] Output file written to `OUTPUT_FILE`

---

## Anti-patterns

- Do not derive the journey map from the current page structure. The journey is what the reader needs; the current structure is what exists. These are often different.
- Do not mark a page as `aligned` if its frontmatter is incomplete — missing fields are `missing-fields` regardless of content quality.
- Do not skip pages that lack frontmatter. No frontmatter = `missing-fields` classification.
- Do not create the recommended actions list before completing the gap analysis. Actions follow from gaps, not from assumptions.
