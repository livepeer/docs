# 03 — Section Patterns & Composition Rules

**Source agents**: A (references), C (templates), D (UX framework), E (gateways patterns)

---

## Composition Principles

1. **Content lives with its page** unless one of 3 reasons exists:
   - **Shared**: 2+ pages in different sections need the same content
   - **External**: produced by pipeline (not authored)
   - **Derived**: generated deterministically by script

2. **One shared library** — all shared content → `snippets/` with structure by WHAT IT IS

3. **One decision determines location**:
   - Does any other page need this? NO → lives with page | YES → lives in `snippets/`
   - What is it? Rendering logic → `components/` | Authored prose → `content/` | Structured data → `data/` | Static files → `assets/`

4. **Local-to-shared promotion**: Content starts local. Move to shared only when a concrete second consumer appears. "Might be useful elsewhere" is not a reason.

---

## File Architecture for Complex Pages

| Layer | File type | Contains | Create when |
|---|---|---|---|
| Data | `.jsx` | Code strings, flag definitions, config constants | Same data appears in 2+ views |
| Views | `.mdx` | Complete procedure per variant (Docker, Linux, Windows) | Content varies by primary dimension |
| Groups | `.mdx` | Reusable content blocks shared across views | Same block appears in 2+ views |
| Components | `.jsx` | Reusable UI elements (callouts, warnings) | Same pattern appears in 2+ pages |

**Naming conventions**:
| Location | Pattern | Example |
|---|---|---|
| Page-local `views/` | `{dim1Value}{Dim2Value}Tab.mdx` | `dockerOffChainTab.mdx` |
| Page-local `groups/` | `{value}Support.mdx` | `dockerSupport.mdx` |
| Page-local `data/` | `{what-it-contains}.jsx` | `flags.jsx` |
| `snippets/content/shared/` | `{what-it-is}.mdx` | `eth-account-setup.mdx` |
| `snippets/content/{section}/` | `{what-it-is}.mdx` | `protocol-overview.mdx` |

**Mintlify scope inheritance**:
| Pattern | Works? |
|---|---|
| Parent imports data, child uses as props | ✅ |
| Parent imports component, child uses directly | ✅ |
| Parent imports variable, child interpolates `{var}` | ⚠️ Unreliable |
| Child imports something parent doesn't have | ✅ |
| Child re-imports same binding parent already has | ❌ Error |

---

## Section Archetypes (Phase 1 — Section-Level)

### 1. Header CTA
**Purpose**: Immediate orientation or action at page top
**Variants**: Quote (definition), Tip (guidance), Card (route), CodeBlock (start), AccordionGroup (self-select)
**When**: Optional on all pageTypes; recommended for concept (Quote), instruction (Tip/Code), navigation (Card)

### 2. Introduction
**Purpose**: Value-led opening — what you will have, not what Livepeer is
**Structure**: 1-3 paragraphs. First sentence immediately useful. Decode jargon.
**When**: Required on all pageTypes except navigation (which opens with hero/cards)

### 3. Prerequisites
**Purpose**: What the reader needs before starting
**Structure**: Bulleted list or `StyledTable` with columns: Requirement | Why | How to get it
**When**: Required on instruction, tutorial. Optional on guide.
**Rules**: Always BEFORE steps. Never inside steps or accordions.

### 4. Step Sequence
**Purpose**: Ordered actions to accomplish a task
**Structure**: `StyledSteps` with `StyledStep` children. Each step: title + 1-3 sentences + code/verification
**When**: Primary on instruction, tutorial. Sometimes in guide.
**Rules**: One action per step. Every step has visible result. Progressive disclosure via Accordion inside steps for optional depth.

### 5. Decision Matrix
**Purpose**: Help reader choose between options
**Structure**: `DynamicTable` or `StyledTable` (3+ options) or `CardGroup` (2-3 routing choices)
**When**: Primary on guide. Sometimes in concept, reference.
**Rules**: Equal visual weight. Recommendation after table. No "vs" in headings.

### 6. Concept Explanation
**Purpose**: Explain how something works
**Structure**: Prose paragraph + `Mermaid` or `ScrollableDiagram` + optional `Note`
**When**: Primary on concept, overview. Sometimes in guide.
**Rules**: Concrete before abstract. Diagram required for any mechanism explanation. Layered: overview first, detail in Accordions.

### 7. Configuration Reference
**Purpose**: Structured lookup of flags, options, parameters
**Structure**: `SearchTable` or `DynamicTable` grouped by function. `ResponseFieldAccordion` for inline.
**When**: Primary on reference. Sometimes in instruction, guide.
**Rules**: Searchable when >20 entries. Grouped by function (not alphabetical).

### 8. Comparison Table
**Purpose**: Side-by-side evaluation
**Structure**: `StyledTable` with `variant="bordered"`. Three-column: Axis | Options | What it decides
**When**: concept (deployment types), guide (setup options), reference (feature comparison)

### 9. Verification Checklist
**Purpose**: Confirm something works after setup/configuration
**Structure**: `StyledSteps` with test commands + expected output, or numbered list with pass/fail
**When**: Required on instruction (setup). Recommended on tutorial.
**Rules**: Every check has expected output. Commands are copy-able.

### 10. Accordion Group
**Purpose**: Progressive disclosure for multiple related items
**Structure**: `AccordionGroup` with `Accordion` children (each has `icon` prop)
**Variants**:
- Audience self-select: "From a Cloud Background?" / "From Ethereum?"
- FAQ: Symptom → Cause → Fix → Verify
- Detail expansion: Optional depth without cluttering main flow
**When**: concept (analogies), reference/compendium (FAQ, troubleshooting), guide (optional detail)

### 11. Multi-View Layout
**Purpose**: Same content structure across 2+ platform/mode variants
**Structure**: Views (outer) → Tabs (inner) → Steps (leaf)
**When**: instruction/quickstart with platform variants (Docker/Linux/Windows × On-chain/Off-chain)
**Rules**: Max 3 dimensions. 4+ = split pages. Steps never inside Accordions.

### 12. Related Pages Footer
**Purpose**: Route to next logical steps or related content
**Structure**: `CardGroup cols={2}` with `Card` children (title, icon, href, horizontal, arrow)
**When**: All pageTypes except navigation (which routes via card grid in body)
**Rules**: 2-3 cards max. One-sentence descriptions (≤10 words).

### 13. Next Step CTA
**Purpose**: Direct to the single next action in a sequence
**Structure**: Single `Card` with arrow, icon, and guidance text
**When**: Sequential pages (prepare → install → configure → connect)
**Rules**: One card only. Clear action verb in title.

---

## Section Naming Rules

**6-step methodology** (from naming rubric):

1. **Diagnose** — What is the reader's question? What is the primary distinction? What conceptual layer?
2. **Generate** — 12 candidate titles
3. **Score** — 5 axes, /5 each:
   - Precision: Does the label name exactly this content?
   - Depth: Does it signal the conceptual layer?
   - Stability: Will it remain accurate if content evolves?
   - Clarity: Does a first-time reader understand the scope?
   - Brevity: 1-3 words?
4. **Rank** — Apply penalties: literal labels (-3), comparators (-2), generics (-1), taxonomy mismatches (-2)
5. **Filter** — 10 tests: no questions, no numbers, no comparators, no sentences, no negation, no first person, no question-frame words, governing-concept only
6. **Output** — Winner + rationale

**Examples**:
| Bad | Good | Why |
|---|---|---|
| "Three Setup Paths" | Deployment Types | Governing concept, not count |
| "How Pools Work" | Pool Mechanics | No questions |
| "What You Earn" | Reward Model | No first person |
| "Overview" | (use sparingly) | Generic — acceptable only as variant marker |

---

## Icon Consistency

All icons MUST come from the semantic icon registry (`snippets/data/reference-maps/icon-map.jsx`).

**Per-pageType defaults**:
| pageType | Icon | Rationale |
|---|---|---|
| quickstart | bolt | Speed cue |
| tutorial | graduation-cap | Learning |
| reference | book | Lookup |
| guide | compass | Navigation/strategy |

**Component-icon compatibility**: The icon-map specifies which icons work with which container types (Card, Tab, Accordion, Step). Consult before assigning.
