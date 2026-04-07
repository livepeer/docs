# Page Layout & Composition Framework — Architecture

**Created**: 2026-04-07
**Thread**: CONTENT-STRUCTURE-TEMPLATES
**Status**: Approved for build

---

## Problem

The repo has 35+ files of scattered page structure rules, 39 fragmented templates, and zero composable section blocks — so neither AI agents nor human authors can consistently lay out a page to gold-standard quality. We need a single operational framework that takes a page classification and produces a correctly structured, component-mapped, standards-compliant page layout.

---

## Principles

1. **One reading path, not thirty-five.** An author or agent reads ONE document to know what to build. Deep detail in linked references, not inline. — *Scattered rules are the same as no rules.*
2. **Classify first, compose second.** Every page starts with "what type?" → "what sections?" → "what components?" The framework enforces this sequence. — *Jumping to components produces inconsistent pages.*
3. **Composable over monolithic.** Section blocks are standalone MDX patterns that snap together. Templates are compositions of blocks, not bespoke structures. — *39 monolithic templates with slight variations can't scale.*
4. **Gold standard as specification.** Each pageType has at least one annotated real page that IS the spec. Rules derived from exemplars. — *Authors learn from examples, not rule documents.*
5. **Mintlify-native.** Everything works within platform constraints. No workarounds that break on update. — *Clever hacks become tomorrow's bugs.*
6. **Machine-readable where enforcement exists.** Rules that validators check have JSON. Rules that only humans check stay in prose. — *Unenforced rules are suggestions.*
7. **Additive, not destructive.** New system lives alongside existing templates. Nothing deleted. Existing templates stay where they are and continue to work. — *Some are in active use; breaking them is unacceptable.*

---

## Architecture

### Three layers, four deliverables

**Layer 1: CLASSIFY** — `snippets/templates/page-classification.md`
- Decision tree: "What type of page is this?" → one of 7 canonical pageTypes
- Per-type card: purpose, target time, word range, required sections, forbidden patterns, component palette, dos/don'ts
- Ambiguous-case guidance (e.g., "is this a guide or an instruction?")
- Sources: pageType.md, checks.mdx, component-layout-profile.json, 01-page-anatomy.md

**Layer 2: COMPOSE** — `snippets/templates/section-patterns.md` + `snippets/templates/pages/gold-standard/*.mdx`
- 13 section archetypes (from research 03-section-patterns.md)
- Each archetype as an MDX file in `pages/gold-standard/`: skeleton + content guidance + component slots + when to use / when not
- Naming rules per archetype
- Archetype reference doc linking to all blocks

**Layer 3: BUILD** — `snippets/templates/pages/gold-standard-templates/{type}-template.mdx`
- One template per canonical pageType (7 total)
- Each template = ordered composition of blocks with frontmatter pre-filled
- Comments explaining what goes in each zone
- Does NOT import blocks at runtime — references them as patterns

**Layer 4: VALIDATE** — `snippets/templates/supporting/page-layout-prompt.md`
- Agent prompt: classify → compose → build → validate
- Inputs: pageType, audience, content inventory
- Validation checklist from checks.mdx categories 4-5
- Output spec: what a correctly laid-out page looks like

### File tree

```
snippets/templates/
├── page-classification.md                  # NEW — Layer 1
├── section-patterns.md                     # NEW — Layer 2 reference
├── pages/
│   ├── page-composition-framework.mdx      # EXISTING — untouched
│   ├── blocks/                             # EXISTING — untouched
│   │   ├── comparison-matrix.mdx           #   existing
│   │   ├── comparison-table.mdx            #   existing
│   │   ├── related-pages-cards.mdx         #   existing
│   │   └── related-pages-cta.mdx           #   existing
│   ├── gold-standard/                      # NEW — composable section blocks
│   │   ├── header-cta.mdx
│   │   ├── introduction.mdx
│   │   ├── prerequisites.mdx
│   │   ├── step-sequence.mdx
│   │   ├── decision-matrix.mdx
│   │   ├── concept-explanation.mdx
│   │   ├── config-reference.mdx
│   │   ├── comparison-table.mdx
│   │   ├── verification-checklist.mdx
│   │   ├── accordion-group.mdx
│   │   ├── multi-view-layout.mdx
│   │   ├── related-pages-footer.mdx
│   │   └── next-step-cta.mdx
│   ├── gold-standard-templates/            # NEW — 7 primary templates
│   │   ├── navigation-template.mdx
│   │   ├── concept-template.mdx
│   │   ├── tutorial-template.mdx
│   │   ├── guide-template.mdx
│   │   ├── instruction-template.mdx
│   │   ├── reference-template.mdx
│   │   └── resource-template.mdx
│   ├── tutorial-and-guides/                # EXISTING — untouched
│   ├── concepts-overviews/                 # EXISTING — untouched
│   ├── resources/                          # EXISTING — untouched
│   ├── landing-and-navigation/             # EXISTING — untouched
│   ├── setup-and-code-layouts/             # EXISTING — untouched
│   ├── domain-pages/                       # EXISTING — untouched
│   ├── repo-documentation/                 # EXISTING — untouched
│   ├── data-imports/                       # EXISTING — untouched
│   ├── canonical/                          # EXISTING — untouched
│   └── docs-guide/                         # EXISTING — untouched
└── supporting/                             # NEW
    └── page-layout-prompt.md
```

### Relationships

```
page-classification.md ──defines──► which template to use
                                         │
section-patterns.md ──defines──► which blocks compose the template
                                         │
pages/gold-standard/*.mdx ──referenced by──► pages/gold-standard-templates/*.mdx
                                         │
supporting/page-layout-prompt.md ──orchestrates──► all three layers
```

### Scope boundary

**IN scope:**
- page-classification.md (Layer 1)
- section-patterns.md (Layer 2 reference)
- 13 composable blocks in pages/gold-standard/ (Layer 2 blocks)
- 7 primary templates in pages/gold-standard-templates/ (Layer 3)
- page-layout-prompt.md (Layer 4)

**OUT of scope:**
- Sub-section patterns (Phase 2 — D2)
- VS Code tooling (future)
- Validator updates / component-layout-profile.json migration (separate task)
- Deleting or modifying any existing template
- Golden example annotations (separate follow-up — needs real pages)

---

## Trade-offs

1. **7 templates, not 14+ (dropping variant-specific files)** — Variants (quickstart, setup, portal, specification, compendium, changelog) are handled by block composition guidance within templates, not separate files. *Acceptable because variants differ in which blocks they include, not fundamental structure.*

2. **Blocks are reference patterns, not runtime imports** — Authors copy block structure into pages; blocks aren't literally imported at runtime. *Acceptable because Mintlify's constraints make runtime block composition fragile, and copy-from-reference is standard practice.*

3. **No machine-readable section rules initially** — Section contracts stay in prose. JSON enforcement stays at component level. *Acceptable because section validation needs tooling that doesn't exist yet.*

4. **New and old templates coexist** — The 39 existing templates remain alongside the 7 new gold-standard templates. *Acceptable because existing templates are in use. Over time, new ones become the default and old ones are retired naturally.*

---

## Decisions made

| # | Decision | Rationale |
|---|---|---|
| D1 | Template location: `snippets/templates/` | Already where composition framework lives; in snippets import path; not publishable |
| D2 | Composable scope: section-level first, sub-section Phase 2 | Pragmatic — main blocks first |
| D3 | PageType enum: 7 canonical from CONTENT-WRITING/Frameworks | CONTENT-WRITING holds the truth |
| D4 | Framework home: `snippets/templates/` initially, `docs-guide/` later | Start where templates live |
| D5 | Existing templates untouched | Some are in active use — additive only |
| D6 | New blocks in `pages/gold-standard/`, new templates in `pages/gold-standard-templates/` | Clean separation from existing |
| D7 | Old templates marked deprecated over time, not deleted | Natural transition, not forced migration |

---

## Research gates

1. **Do any existing pages currently import from `snippets/templates/pages/blocks/`?** — answered by grep for import paths referencing that directory. If yes, new blocks must not conflict.
2. **Does `gold-standard` as a folder name conflict with any existing convention?** — answered by checking naming patterns in the repo.
3. **Are there any .mintignore entries needed for the new folders?** — answered by checking Mintlify rendering behaviour for files in `snippets/templates/`.

---

## Test criteria

1. **An AI agent given only page-classification.md and a content brief can correctly identify the pageType** — tested by classifying 10 real pages through the decision tree
2. **Every section archetype in section-patterns.md maps to at least one block in pages/gold-standard/** — tested by cross-referencing
3. **Each of the 7 templates, when filled, passes checks.mdx categories 4-5** — tested by creating one sample page per template
4. **The page-layout-prompt.md produces a page matching gold-standard H2 flow** — tested on 3 pageTypes
5. **No template references a component path that doesn't exist** — tested by grep against file tree
6. **Each of 13 blocks contains: MDX skeleton, component slots, content guidance, when-to-use/when-not** — tested by reading each
7. **An author can pick a template and produce a structurally correct page within 30 minutes** — tested by walkthrough

---

## Skills used

| Phase | Skills | What it does |
|---|---|---|
| Research | `/research` | Gathered 5-agent findings into 6 research files |
| Design | `/design` | This architecture doc |
| Build | `/build` | Creates the 4 deliverables |
| Review | `/iterate` | Tests against criteria, validates structure |
| Dispatch | `/dispatch` | Parallel block creation (13 blocks) |

---

## Phase checkpoints

| Phase | Checkpoint | Verification method |
|---|---|---|
| Phase 1: Classification | page-classification.md covers all 7 types with decision tree + per-type card | Read file, confirm all 7 types present with required fields |
| Phase 1: Classification | Decision tree correctly classifies 10 sample pages | Run 10 real pages through tree, check accuracy |
| Phase 2: Blocks | All 13 blocks exist in pages/gold-standard/ with 4 required elements each | List directory + read each file |
| Phase 2: Blocks | section-patterns.md links to all 13 blocks | Cross-reference |
| Phase 3: Templates | All 7 templates exist in pages/gold-standard-templates/ | List directory |
| Phase 3: Templates | Each template composes from blocks correctly | Compare template sections to block definitions |
| Phase 3: Templates | No import paths reference non-existent files | Grep + verify |
| Phase 4: Prompt | page-layout-prompt.md produces correct output for 3 pageTypes | Run prompt, compare to gold standard |
| Phase 4: Prompt | Validation checklist covers checks.mdx categories 4-5 | Cross-reference |

---

## Build order

1. **Phase 1** — page-classification.md (Layer 1)
2. **Phase 2** — section-patterns.md + 13 blocks in pages/gold-standard/ (Layer 2)
3. **Phase 3** — 7 templates in pages/gold-standard-templates/ (Layer 3)
4. **Phase 4** — page-layout-prompt.md (Layer 4)

Each phase has a checkpoint with you before the next starts.
