# Composable Templates — Research Brief

> **Task**: T19 research input
> **Generated**: 2026-03-21
> **Sources**: 10 framework files + 17 page templates (see Sources table)

---

## Sources Used

| Source | Type | Date | Relevance | Summary |
|---|---|---|---|---|
| `tasks/plan/active/CONTENT-WRITING/information-type.md` | Framework definition | 2026-03-19 (DRAFT) | 5/5 | 9 information types, purpose→type mapping, veracity standards |
| `tasks/plan/active/CONTENT-WRITING/pagePurpose.md` | Framework definition | 2026-03-20 | 5/5 | 15 intent-based purpose values with structure rules, voice register, required component types |
| `tasks/plan/active/CONTENT-WRITING/framework.md` | Decision log | 2026-03-20 | 5/5 | Master framework summary; locked enums; all dimensions |
| `tasks/plan/active/CONTENT-WRITING/index.md` | Governance index | 2026-03-19 | 5/5 | Entry point; all locked/pending decisions |
| `docs-guide/_workspace/02_Design-Specification/04_UX-Framework-&-Taxonomy/03_08-Composable-Content-Guide/index.md` | Design spec | 2026-03-19 | 5/5 | 3-layer content architecture; lifecycle model; naming rules; scope inheritance |
| `docs-guide/_workspace/02_Design-Specification/03_IA-Framework/01_03-IA-Structure-and-Purpose/index.md` | Framework definition | 2026-03-20 | 5/5 | 6 purpose types for v2; per-tab journey matrices; section structure rules |
| `ai-tools/ai-skills/page-authoring/SKILL.md` | AI skill / authoring guidance | 2026-03-18 (v1.2) | 4/5 | Page skeleton rules; CustomDivider usage; component defaults; pre-writing process |
| `v2/orchestrators/_workspace/plans/tutorial-writing-pack/reference/page-authoring-SKILL.md` | AI skill (context-specific) | 2026-03-18 (v1.0) | 4/5 | Operator-audience hard rules; UX patterns; component usage; 4-page concept model |
| `tasks/plan/active/CONTENT-WRITING/collation.md` | Inventory / scratchpad | 2026-03-19 | 4/5 | Dated repo resource inventory; identifies gaps in copy rules, personas, rewrite skills |
| `v2/templates/pages/` (all 17 templates) | Templates | 2026-03-19 | 5/5 | All existing page templates — source for repeating section patterns |
| `docs-guide/frameworks/component-governance.mdx` | Framework doc (live) | 2026-03-21 | 4/5 | Current component governance state; deferred items flagged; `component-layout-decisions.mdx` deferred |
| `workspace/plan/active/COMPONENT-GOVERNANCE/component-framework-canonical.md` | Taxonomy reference | 2026-03-21 | 3/5 | Component folder taxonomy; composables entry as TBD stub |

---

## Key Finding 1 — Candidate Composables from Templates

Frequency analysis across all 17 templates identified 14 composable candidates. Top priority (by cross-template frequency):

| Composable | Appears In | Type | Proposed Filename |
|---|---|---|---|
| Related Resources / Navigation cards | 12+ templates | Parameterised | `related-resources-section.mdx` |
| Accordion content (FAQ/glossary/troubleshooting) | 4+ templates | Parameterised | `accordion-content-section.mdx` |
| Overview / Introduction block | 6 templates | Parameterised | `overview-intro-section.mdx` |
| Steps / Instructions section | 3 templates | Parameterised | `steps-section.mdx` |
| Prerequisites section | 3 templates | Parameterised | `prerequisites-section.mdx` |
| Validation / Verify section | 2 templates | Parameterised | `validation-section.mdx` |
| Frame-mode Hero section | 2 templates | Parameterised | `frame-mode-hero-section.mdx` |
| Frame-mode Portal content wrapper | 2 templates | Parameterised | `frame-mode-portal-content.mdx` |
| Glossary search tip | 2 templates | Static/minor | `glossary-search-tip.mdx` |
| Quote / Hero value prop | 2 templates | Parameterised | `hero-quote-section.mdx` |
| OpenAPI reference block | 1 template | Parameterised | `openapi-reference-section.mdx` |
| Changelog entry | 1 template | Parameterised | `changelog-entry.mdx` |
| Governance / framework reference | 1 template | Parameterised | `governance-reference-section.mdx` |
| Key concepts section | 1 template | Parameterised | `key-concepts-section.mdx` |

**Frontmatter boilerplate** — appears in all 17 templates but is YAML, not MDX; handle as schema docs, not a composable.

---

## Key Finding 2 — Composable Architecture (from Design Spec)

Three-layer content architecture from `Composable-Content-Guide/index.md`:

**Layer 1 — Data** (`snippets/data/`): Structured data consumed by components
**Layer 2 — Components** (`snippets/components/`): JSX components (governance done)
**Layer 3 — MDX** (`snippets/composables/`): Authored content blocks (THIS task)

**Lifecycle rule:** Content starts local, moves to `snippets/` only when a concrete second consumer appears. Never pre-emptively promote.

**Naming rule:** Names describe WHAT the content IS, not where it's used. Pattern: `{what-it-is}.mdx`.

**Scope inheritance:** Parent MDX imports all shared dependencies; child imports only child-specific ones.

---

## Key Finding 3 — Purpose → Component Mapping (from Content Framework)

The framework defines hard component requirements per purpose value. These directly govern composable section design:

| Purpose | Required Component Signature | Composable Implication |
|---|---|---|
| `orient` | CardGroup + Card | `related-resources-section.mdx` is essentially an `orient` block |
| `start` | Steps + CodeBlock | `steps-section.mdx` maps to `start` and `build` purposes |
| `build` | Steps + CodeBlock + Decision branches | `steps-section.mdx` with `hasBranches` flag |
| `configure` | Parameter table | No composable — too specific; use `StyledTable` directly |
| `troubleshoot` | Diagnostic if/then tree | `accordion-content-section.mdx` with `type="troubleshooting"` |
| `reference` | Scannable table/accordion | `accordion-content-section.mdx` with `type="glossary"` or `type="faq"` |
| `learn` | Definition structure | `accordion-content-section.mdx` with `type="glossary"` |

**Mandatory page structure (ALL pages):**
1. `<CustomDivider />` — always first after imports
2. Optional media (video/hero/callout) above intro prose
3. Intro prose (no divider before first H2)
4. Major sections (H2, no question marks, no numbers)
5. `<CustomDivider middleText="Label" />` between sections
6. Related Pages section (CardGroup, 3–6 cards) + divider before it

---

## Key Finding 4 — Platform Constraint: MDX-Only Composables

From `component-governance.mdx` Decision D4: **No inter-component JSX composition** (Mintlify constraint — JSX files cannot cross-import other JSX files).

**This means composables MUST be `.mdx` files, not `.jsx` files.** The `snippets/composables/` folder is the correct location. MDX files can import JSX components freely. Named component patterns as JSX are impossible.

---

## Key Finding 5 — Unimplemented Governance Ideas Relevant to Composables

From the old framework documents (zip + live doc review):

**`@contentAffinity` — NOT DONE (explicitly deferred to CONTENT-STRUCTURE Phase 5.1)**
> Tag declaring which page types a component is appropriate for. E.g., `@contentAffinity tutorial, guide, reference`. This would power a "what components should I use on a `build` page?" lookup. Was field #6 in the aspirational 14-field schema. Blocked on finalised Page Taxonomy (now available).

**Pattern library / composable pattern tier — NOT DONE**
> The original three-tier model (`primitive` / `composite` / `pattern`) was pruned to a flat taxonomy. The `pattern` tier was supposed to represent portable page-section patterns. This is what `snippets/composables/` should now implement as MDX.

**`component-layout-decisions.mdx` update — DEFERRED (explicit note in framework)**
> The policy document mapping page types to component choices needs updating now that the full purpose/information-type framework is locked. Currently maps against Mintlify globals only, not custom components. Unblocked by T10 completion.

**Mintlify style overrides registry — NOT DONE**
> Framework Section 3.6 calls for a registry of every `style.css` override with justification + review date. Currently no registry exists.

---

## Key Finding 6 — Gaps Not Yet Documented

Things the framework implies but hasn't resolved (from research across all sources):

1. **Section ordering rules per purpose** — framework says what types go on a purpose page, not in what ORDER
2. **Component selection algorithm** — guidance by purpose/type exists but is not a decision tree; relies on human judgment
3. **Cross-purpose section reuse** — can a section written for `choose` be composed into an `evaluate` page? No explicit rule
4. **Persona variants in page structure** — persona affects voice but not which sections appear; that relationship is undocumented
5. **Developer/community voice registers** — only operator voice is extensively documented; other audiences are sketchy
6. **Audience journey checkpoints** — which pages MUST a developer visit in sequence vs. which are optional/branching? Not mapped

---

## Recommended Composable Build Order (Priority-Ranked)

Based on cross-template frequency, purpose-mapping alignment, and author value:

### Tier 1 — Build first (high frequency, immediately useful)
1. `related-resources-section.mdx` — appears 12+ times; every page needs it
2. `steps-section.mdx` — appears 3 times; `start`/`build`/`instruction` pages depend on it
3. `prerequisites-section.mdx` — appears 3 times; pairs with every procedural page
4. `accordion-content-section.mdx` — appears 4+ times; unifies FAQ/glossary/troubleshooting patterns

### Tier 2 — Build with content framework (purpose-aligned)
5. `overview-intro-section.mdx` — 6 templates; standardises the intro block across all page types
6. `validation-section.mdx` — 2 templates; pairs with every `start`/`build` page

### Tier 3 — Build when needed (specialised)
7. `frame-mode-hero-section.mdx` — portal/landing pages only; build when portal content is authored
8. `frame-mode-portal-content.mdx` — same context
9. `glossary-search-tip.mdx` — glossary pages only; near-static, low effort
10. `hero-quote-section.mdx` — overview pages; low effort

### Defer (single-template, highly specific)
- `openapi-reference-section.mdx`, `changelog-entry.mdx`, `governance-reference-section.mdx`, `key-concepts-section.mdx`

---

## Documentation Requirements (T19 sub-task)

Based on research, composables need documentation in:

1. **`snippets/composables/README.md`** — what composables are, how to use, naming convention, when to promote local→composable
2. **`docs-guide/frameworks/component-governance.mdx`** — add composables section (MDX layer of the 3-layer architecture)
3. **`docs-guide/catalog/`** — composables catalog (analogous to components catalog); can be generated
4. **`workspace/plan/active/COMPONENT-GOVERNANCE/component-framework-canonical.md`** — composables folder tree entry (now fully populated)
5. **Per-composable JSDoc header** — each `.mdx` composable needs a governance comment: name, purpose, page types it serves, props/variables

