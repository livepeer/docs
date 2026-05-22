# 02 — Component-to-Information Mapping

**Source agents**: A (references), D (UX framework), E (gateways patterns)

---

## Component Selection Decision Tree

First match wins. Ask in this order:

1. Does it fetch or embed external data? → `integrators/` component
2. Is it part of the page skeleton, used once? → `scaffolding/` component
3. Does it render content in a specific visual format? → `displays/` component
4. Does it hold, group, or arrange other things? → `wrappers/` component
5. Is it a non-component config/theme object? → `config/`
6. Default → `elements/` component

---

## 13 Information Types → Components

### 1. Procedural Instruction
**What**: Ordered steps to accomplish a task
**Components**: `StyledSteps` + `StyledStep`, `CustomCodeBlock`, `Warning`/`Tip`
**Rules**:
- One action per step; two actions = two steps
- Every step has a visible result
- Prerequisites BEFORE step 1 (never inside steps)
- Action ≥ explanation; if 3 lines why / 1 line what, restructure

### 2. Multi-Dimensional Instruction
**What**: Same procedure varies across 2+ axes (OS, network mode, workload type)
**Components**: `Views` (wrapper) → `Tabs` → `Steps` (leaf)
**Nesting hierarchy** (fixed order):
```
Views (2+ dimensions — always outermost)
  └─ Tabs (1st variation axis)
      └─ Tabs (2nd variation axis — optional)
          └─ Steps (vary per tab)
```
**Rules**:
- Max 3 dimensions per page; 4+ = split into separate pages
- Steps NEVER inside Accordions
- Tabs NEVER inside Steps (reverse the hierarchy)
- If steps are identical across tabs, use single Steps block outside tabs

**When to use which selector**:
| Dimensions | Options | Pattern |
|---|---|---|
| 1 dim | 2-4 options | Tabs |
| 1 dim | 5+ options | Views (dropdown) |
| 2 dims | — | Views → Tabs |
| 3 dims | — | Views → Tabs → Tabs-in-steps |
| 4+ dims | — | Split into separate pages with shared Groups |

### 3. Configuration / Parameter Data
**What**: Flags, options, settings grouped by function
**Components**:
- Inline (≤5 flags): `AccordionGroup` + `ResponseFieldAccordion`
- Dedicated page (>5): `SearchTable` or `DynamicTable`
- Config files: `CustomCodeBlock` with filename
- API params: `ValueResponseField`, `CustomResponseField`
**Rules**:
- Grouped by function (not alphabetical)
- Searchable when >20 entries
- Inline in procedures = 5 flags maximum

### 4. Code Examples
**What**: Executable, copy-able code
**Components**:
- Single block: `CustomCodeBlock` (with `language`, `icon`, `filename`)
- Multiple languages: `CodeGroup`
- With output: `ComplexCodeBlock`
**Rules**:
- Every block has filename/label
- Language variants are parallel (not serial)
- >30 lines = collapsible
- Placeholders visually distinct

### 5. Comparison / Decision Data
**What**: Options to evaluate
**Components**:
- 3+ options with 3+ attributes: `DynamicTable` or `StyledTable`
- 2-3 routing choices: `CardGroup` + `Card`
- Narrative comparison: `Columns`
**Rules**:
- Equal visual weight across options
- Decision summary or recommendation after table
- No "vs" in headings

### 6. Conceptual Explanation
**What**: How something works, why it matters
**Components**: `ScrollableDiagram`, `Mermaid` (inline), `Note`/`Info`
**Rules**:
- Concrete before abstract
- Diagrams carry the load — no diagram = too abstract
- Layered: overview first, detail in Accordions

### 7. Supplementary Detail
**What**: Extra context that isn't essential to the main flow
**Components**:
- 1-2 sentences: `Tip`/`Note`/`Warning`
- Paragraph+: `Accordion`/`AccordionGroup`
- Separate concern: cross-page link
**Rules**:
- Main flow completable WITHOUT opening supplementary
- Supplementary NEVER contains Steps
- Progressive disclosure: callout < accordion < link

### 8. Status / Categorisation Labels
**What**: Visual classification markers
**Components**: `Badge` + `Icon`
**Standard colour assignments**:
| Colour | Meaning |
|---|---|
| blue | Video workload, Windows |
| purple | AI workload |
| green | Dual, go-livepeer, active, macOS |
| yellow | Linux, Siphon, experimental |
| surface | Generic, neutral |
| default | On-chain, Off-chain |

### 9. Reference Entries
**What**: Structured lookup data
**Components**: `SearchTable`, `DynamicTable`, `ResponseFieldAccordion`, `ValueResponseField`
**Rules**:
- Every entry uses same template
- Searchable when >20 entries
- Grouped by domain (not alphabetical)

### 10. Architecture / Flow Visualisation
**What**: System relationships, data flow
**Components**:
- Simple (3-7 nodes): `Mermaid` inline
- Complex: `ScrollableDiagram` (pannable, zoomable)
- Static: `Image`
**Rules**:
- Diagrams show relationships, not just boxes
- Zoomed out first, detail on demand
- Mermaid uses themed colours from `MermaidColours.jsx`

### 11. External / Embedded Content
**What**: Videos, dashboards, third-party widgets
**Components**: `YouTubeVideo`, `Video`, `TitledVideo`, `MarkdownEmbed`, `LinkedInEmbed`
**Rules**:
- Always provide fallback text
- Frame with purpose (why watch/read this)
- Wrap in `LazyLoad` for heavy embeds

### 12. Data-Bound Content
**What**: Content from pipelines (blog, forum, Discord, showcase)
**Components**: `BlogCard`/`CardBlogDataLayout`, `PostCard`/`ForumLatestLayout`, `DiscordAnnouncements`, `ShowcaseCards`
**Rules**:
- Bound to specific pipeline scripts
- Graceful degradation if pipeline fails
- Never hardcode — import from `snippets/data/`

### 13. Navigation / Routing
**What**: Direct readers to the right page
**Components**: `CardGroup` + `Card` (3-6 routes), `GotoCard`, `LinkArrow`, `DoubleIconLink`
**Rules**:
- Max 6 options per decision point
- Routing at natural decision points (after explanation, not before)
- Cards have icons consistent with icon-map registry

---

## Content Type × Page Type Matrix

★ = primary | ○ = sometimes | — = rarely | ✗ = never

| Content Type | navigation | concept | tutorial | guide | instruction | reference | resource |
|---|---|---|---|---|---|---|---|
| 1. Procedural | ✗ | ✗ | ★ | ○ | ★ | ✗ | ✗ |
| 2. Multi-Dim | ✗ | ✗ | ○ | ○ | ★ | ✗ | ✗ |
| 3. Config/Param | ✗ | — | ○ | ○ | ★ | ★ | ✗ |
| 4. Code | ✗ | — | ★ | ○ | ★ | ★ | ✗ |
| 5. Comparison | ✗ | ○ | ✗ | ★ | — | ★ | ○ |
| 6. Conceptual | ✗ | ★ | — | ★ | — | ✗ | — |
| 7. Supplementary | — | ○ | ○ | ○ | ○ | — | — |
| 8. Status/Labels | ○ | ○ | ○ | ○ | ○ | ○ | ○ |
| 9. Reference | ✗ | — | ✗ | — | — | ★ | ○ |
| 10. Architecture | ✗ | ★ | — | ○ | — | — | ✗ |
| 11. External | — | — | — | — | — | ✗ | ★ |
| 12. Data-Bound | — | ✗ | ✗ | ✗ | ✗ | — | ★ |
| 13. Navigation | ★ | — | — | — | — | — | ○ |

---

## Data Flow Pattern (Mintlify-Constrained)

```
snippets/data/*.jsx  ──import──►  page.mdx  ──render──►  Component
                                     ▲
snippets/components/*.jsx ──import──┘
```

**Critical constraints**:
- JSX cannot import JSX (Mintlify limitation)
- Components cannot import their own data
- MDX page is ALWAYS the orchestration point
- Data files use flat individual exports (no index objects)
- `.mdx` variables for prose interpolation; `.jsx` for complex objects/arrays

**Hardcoded data prohibition** (zero exceptions):
> Contract addresses, port numbers, pricing values, CLI flag defaults, and other structured data must be imported from their canonical data file, never hardcoded inline.
