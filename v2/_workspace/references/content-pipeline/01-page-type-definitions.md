# 01 — pageType Definitions

**Status**: DRAFT — under interactive review
**Step**: 2 of 22 (Content Writing Pipeline)
**Source of truth for enums**: `docs-guide/frameworks/page-taxonomy-framework.mdx`

---

## Schema

```yaml
pageType:     # 7 primary types (enum-controlled)
pageVariant:  # optional refinement within the type (enum per pageType)
```

**pageType** = container. Determines structural format, UX pattern, success metric, template.
**pageVariant** = slice. Refines the container for a specific sub-function.

pageType does NOT govern: voice, terminology, depth, or content focus. Those are `audience`, `purpose`, and `domain`.

---

## 7 Primary Types

### 1. `navigation`

**Job**: Route the reader to the right place.
**UX pattern**: Scan and click — reader spends &lt;30 seconds, clicks through.
**Content**: Value proposition (1 sentence), navigation cards, optional shortcuts for returning users.
**Forbidden**: Long prose, steps, deep technical content.
**Success metric**: Click-through rate to child pages; low bounce.
**Component rules**: Cards required, max 1 major layout element.

| Variant | Covers |
|---|---|
| `portal` | Tab-level entry point with hero/starfield (e.g. gateways/portal.mdx, developers/portal.mdx) |
| `landing` | Section-level entry with cards and brief context (e.g. mission-control.mdx, get-started.mdx) |

---

### 2. `concept`

**Job**: Explain an idea, architecture, mechanism, or system so the reader understands it.
**UX pattern**: Read and understand — reader builds a mental model.
**Content**: What this is, how it works, why it matters, implications.
**Forbidden**: Step-by-step procedures, CLI commands, configuration instructions.
**Success metric**: Reader can explain the concept to someone else.
**Component rules**: Mermaid diagrams encouraged; no Steps component.

| Variant | Covers |
|---|---|
| `overview` | Entry/orientation page for a concept section — "here's the conceptual landscape" (e.g. about/livepeer-overview.mdx, about/livepeer-protocol/overview.mdx) |

---

### 3. `tutorial`

**Job**: Structured learning experience that teaches through building.
**UX pattern**: Follow along and learn — reader builds something while gaining understanding.
**Content**: What you'll build, prerequisites, steps, what you learned, next steps.
**Forbidden**: Assuming prior task completion without stating it.
**Success metric**: Reader has a working result AND understands why each step matters.
**Component rules**: Steps component required; numbered sequence; "you should see" validation points.

| Variant | Covers |
|---|---|
| `overview` | Entry page for a tutorial section — "here are the available tutorials" |

**Distinction from instruction**: Tutorial teaches (reader learns); instruction accomplishes (reader completes a task). Tutorial can take longer and explain more.

---

### 4. `guide`

**Job**: Help the reader understand and use a system, tool, or feature in practice. Not pure steps — more "here's how this works and how to use it well."
**UX pattern**: Read and apply — reader learns a topic and knows what to do about it.
**Content**: What this system is and what it's for, how it works in practice, how to use it effectively, what to watch out for, links to related instructions and references.
**Forbidden**: Pure step-by-step numbered procedures (that's `instruction`), raw parameter lists (that's `reference`).
**Success metric**: Reader understands the topic AND knows what to do about it.
**Component rules**: Max 1 major layout element (Steps OR Table, not both at top level). Diagrams, Accordions, Notes/Tips encouraged.

| Variant | Covers |
|---|---|
| `overview` | Entry/orientation page for a guide section — "here's what's in this area, choose your path" (e.g. setup-options.mdx, run-a-gateway.mdx, node-pipelines/guide.mdx) |

**Distinction from instruction**: Guide explains + advises; instruction is pure procedure. Guide says "here's how pricing works and how to think about it"; instruction says "run these commands to set your price."

**Examples**: monitoring guides, marketplace mechanics, economics, model curation, production patterns, clearinghouse architecture, orchestrator selection strategy.

---

### 5. `instruction`

**Job**: Step-by-step procedure to accomplish a specific task. Reader has the page open while doing the thing.
**UX pattern**: Follow and execute — reader runs commands alongside the page.
**Content**: What this achieves, prerequisites, steps, validation/verification.
**Forbidden**: Long conceptual explanation (link to a concept page instead).
**Success metric**: Reader completes the task successfully on first attempt.
**Component rules**: Steps component required; code blocks with copy; Warning callouts for destructive operations.

| Variant | Covers |
|---|---|
| `overview` | Entry/orientation page for an instruction section — "here's the setup flow" (e.g. orchestrators/setup/guide.mdx, gateways/setup/install/install-overview.mdx) |
| `quickstart` | Fastest path from zero to running. Minimal explanation, maximum speed. Target: <15 minutes. |
| `setup` | Initial installation, configuration, and activation procedures. Longer and more thorough than quickstart. |

**Distinction from guide**: Instruction is pure procedure (do this, then this). Guide includes explanation and context.
**Distinction from tutorial**: Instruction accomplishes a task; tutorial teaches through building. Quickstart optimizes for speed; tutorial optimizes for learning.

---

### 6. `reference`

**Job**: Structured lookup content. Reader arrives with a specific question and needs a specific answer.
**UX pattern**: Search and find — reader looks up a fact and leaves.
**Content**: Structured, scannable data (tables, field lists, accordions). Each entry is self-contained.
**Forbidden**: Long narrative prose; tutorials; opinions.
**Success metric**: Reader finds the exact value/syntax they need in <60 seconds.
**Component rules**: Tables, ResponseField, code blocks, Accordions. No Steps.

| Variant | Covers |
|---|---|
| `overview` | Entry page for a reference section — "here's what references are available" (e.g. API reference landing) |
| `specification` | API specs, CLI flags, config parameters, contract addresses, protocol specs, hardware requirements — structured technical data |
| `compendium` | Glossary terms, FAQ entries, troubleshooting (symptom→fix), community pool comparisons, exchange listings, ecosystem tool catalogs — contextual information and definitions |
| `changelog` | Chronological change records, release notes |

---

### 7. `resource`

**Job**: Curated collections, ecosystem material, external content, tools, community channels. Content you come to find/access/use — not to look up a specific fact.
**UX pattern**: Browse and discover — reader explores what's available.
**Content**: Curated links, directories, embeds, aggregated feeds, showcases, media kits.
**Forbidden**: Step-by-step instructions, deep conceptual explanation.
**Success metric**: Reader finds and accesses the resource they need.
**Component rules**: Cards, links, embeds, data-bound components.

| Variant | Covers |
|---|---|
| `overview` | Entry page for a resource section — "here's what resources are available" (e.g. resources-portal.mdx) |

**Examples**: community channel directories, tool listings, external guide collections, showcase galleries, video/blog aggregations, media kits, event calendars.

**Distinction from reference**: Reference is structured lookup (you know what you're looking for). Resource is curated discovery (you're browsing what's available).

---

## Variant Summary

| pageType | Variants |
|---|---|
| `navigation` | `portal`, `landing` |
| `concept` | `overview` |
| `tutorial` | `overview` |
| `guide` | `overview` |
| `instruction` | `overview`, `quickstart`, `setup` |
| `reference` | `overview`, `specification`, `compendium`, `changelog` |
| `resource` | `overview` |

`overview` = entry/orientation page for a section of this type. Available on all types except `navigation` (which is already pure routing by definition).

---

## Migration from old 12-type enum

| Old pageType | New pageType | New variant |
|---|---|---|
| `landing` | `navigation` | `portal` or `landing` |
| `overview` | depends on section — often `concept` overview, `guide` overview, or `instruction` overview | `overview` |
| `concept` | `concept` | (none) |
| `tutorial` | `tutorial` | (none) |
| `quickstart` | `instruction` | `quickstart` |
| `how_to` | `instruction` | `setup` or (none) |
| `guide` | `guide` | (none) — but many current "guides" are actually `instruction` |
| `reference` | `reference` | `specification` or `compendium` |
| `faq` | `reference` | `compendium` |
| `troubleshooting` | `reference` | `compendium` (or `guide` if it's a diagnostic walkthrough) |
| `glossary` | `reference` | `compendium` |
| `changelog` | `reference` | `changelog` |

---

## Open Questions

1. **Instruction variants**: Currently `quickstart`, `setup`, and (none). Are more needed based on the audit? Candidates: `migration`, `configuration`, `deployment`.
2. **Guide variants**: Currently only `overview`. Should `decision` be a variant for pages like setup-options.mdx and payment-guide.mdx? Or does `purpose: choose` handle it?
3. **Resource variants**: Currently only `overview`. Should there be sub-types like `library`, `directory`, `showcase`, `aggregation`?
