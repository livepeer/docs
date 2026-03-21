# Page Templates Survey
## Input for Step 11 (Page Templates + Golden Examples)

**Purpose**: Inventory the existing page templates in `snippets/templates/pages/`, assess their completeness for pipeline use, and identify the gaps that block Pass B.

**Date surveyed**: 2026-03-21

---

## Template inventory

All templates are at `snippets/templates/pages/`.

| File | pageType | pageVariant | Completeness | Pipeline-ready? |
|---|---|---|---|---|
| `how-to-page.mdx` | `instruction` | default | Minimal scaffold — 4 sections, `<Steps>` example, one `<Card>` CTA | ⚠️ Usable but sparse |
| `overview-page.mdx` | `concept` | `overview` | Minimal — `<Quote>` header, 3 sections, `<CardGroup>` footer | ⚠️ Usable but sparse |
| `tutorial-page.mdx` | `tutorial` | default | Minimal — 5 sections, `<Steps>` example, `<CardGroup>` footer | ⚠️ Usable but sparse |
| `reference-page.mdx` | `reference` | `specification` | Minimal — `## Reference` section, inputs/output tables, example code | ⚠️ Usable but sparse |
| `faq-page.mdx` | `reference` | `compendium` | Not inspected — assumed similar to reference-page |
| `troubleshooting-page.mdx` | `reference` | `compendium` | Not inspected |
| `landing-frame-page.mdx` | `navigation` | `portal` or `landing` | Not inspected |
| `openapi-endpoint-page.mdx` | API endpoint | — | Special case — generated from OpenAPI spec |
| `glossary-tab-template.mdx` | `reference` | `compendium` | Glossary-specific |
| `glossary-consolidated-template.mdx` | `reference` | `compendium` | Glossary-specific |
| `page-composition-framework.mdx` | `reference` | `specification` | Component reference document — not a page template |

---

## What the templates define

Each current template defines:
- A frontmatter block with example values (not canonical — some use legacy field names)
- A section sequence (headings only)
- 1–2 component examples

What they **do not define**:
- When to use each section vs when to omit it
- Component decision rules (when `<Steps>` vs numbered list; when `<Note>` vs body copy)
- Audience-specific structural variations
- Section naming rules or heading examples
- Quality criteria for each section
- Frontmatter: some templates use `audience: developer` as a placeholder, not the actual value

---

## Gap assessment by template

### `how-to-page.mdx` (instruction)
**Covers**: Overview, Prerequisites, Steps, Validate, Next Steps
**Missing**:
- No guidance on when sections are optional (e.g. validate is not always needed)
- Steps component shown but no rule for when `<Steps>` vs code fence
- No variant for `quickstart` vs `setup` — these have different pacing and assumed knowledge
- Frontmatter incomplete: missing `lifecycleStage`, `complexity`, `industry`, `niche`, `veracityStatus`

### `overview-page.mdx` (concept / guide)
**Covers**: Overview, Key Ideas (Core model + Operational detail), Related Pages
**Missing**:
- Serves both `concept` and `guide` pageTypes but doesn't distinguish them
- "Key Ideas" is too generic — no guidance on what sections a concept page vs guide page needs
- No architecture/diagram slot
- No routing/decision section for guide pages
- Frontmatter incomplete: same gaps as how-to

### `tutorial-page.mdx` (tutorial)
**Covers**: Overview, What You'll Build, Prerequisites, Steps, Next Steps
**Missing**:
- No "What you built" or recap section (important for tutorial learning arc)
- No validation section
- No guidance on step granularity
- Frontmatter incomplete

### `reference-page.mdx` (reference / specification)
**Covers**: Reference section with Inputs table, Output table, Example, Related Pages
**Missing**:
- Only covers API/function specification variant
- No structure for CLI flags, config files, or parameter tables
- No compendium/FAQ variant (separate faq-page.mdx handles some of this)
- No changelog structure
- Frontmatter incomplete

---

## Pipeline readiness verdict

**Current templates are minimal scaffolds.** They provide a starting section sequence and one or two component examples. They are sufficient for Pass B to have a baseline structure to apply, but Pass B will frequently need to make component decisions not covered by the template.

**Three things needed for Step 11:**

1. **Template annotations** — add inline comments to each template explaining *when* each section applies, *when* it can be omitted, and *why* the sequence is what it is. This makes Pass B's template application deterministic rather than interpretive.

2. **Component decision tables** — embed the Pass B Phase 3 component rules into the relevant templates, or maintain them in a shared reference that Pass B loads. Currently, these rules exist only in `Prompts/level-2-pass-b-layout.md`.

3. **Frontmatter completion** — all templates need the complete taxonomy frontmatter schema (all 9 fields) with placeholder values and canonical enum documentation inline.

---

## Golden examples candidates (Step 11 Part B)

Golden examples are existing pages that can serve as annotated reference for each pageType. They need to:
- Have complete frontmatter
- Have a section structure that matches or closely approximates the template
- Use components correctly
- Pass the voice check (no blocked phrases)

**Candidates to evaluate** (to be confirmed by human — these are unverified):

| pageType | Candidate | Why |
|---|---|---|
| `instruction` | `v2/gateways/setup/` pages | Gateway setup pages have the most developed procedural structure |
| `concept` | `v2/orchestrators/concepts/` | Orchestrator concepts pages are relatively stable |
| `guide` | `v2/gateways/guides/payments-and-pricing/` | Has the richest existing frontmatter |
| `tutorial` | `v2/gateways/guides/tutorials/` | Tab-specific tutorials |
| `reference` | `v2/gateways/resources/technical/` | Technical reference pages are structured lookup content |

**What makes a good golden example:**
- The page doesn't just pass checks — it demonstrates the *why* behind structural decisions
- It has at least one non-obvious structural choice that can be annotated (e.g. "the decision aid comes before the action path because the reader needs to choose a path before taking steps")
- It serves a single purpose and that purpose is evident from the structure alone

**Annotation format for golden examples:**
Each golden example should be a copy of the page with inline comments explaining key decisions:
```mdx
{/* GOLDEN EXAMPLE ANNOTATION: This section uses <Steps> rather than a numbered list because
    each step has a command + explanation that benefits from the Step title as a visible marker.
    Rule: use <Steps> for any procedure where steps have distinct names the reader might
    scan for rather than read in sequence. */}
```

---

## Recommended Step 11 execution order

1. **Part A — Template completion** (blocking for Pass B):
   - Annotate all 5 primary templates with section guidance and component decision comments
   - Add complete taxonomy frontmatter to all templates
   - Create a `guide` variant of `overview-page.mdx` (concept and guide have different structures)

2. **Part B — Golden examples** (blocking for quality calibration, not for basic Pass B operation):
   - Human identifies 1 candidate per pageType from the list above
   - Run Pass A + Pass B on each candidate to assess current quality
   - Annotate the best-passing pages as golden examples
   - Store annotated versions in `workspace/plan/active/CONTENT-WRITING/Research/golden-examples/`
