# **Content Taxonomy & Semantic UI Display Framework**

How content DATA within pages is classified, and how it maps to semantic UI patterns and components for display. This is the guide for: "I have THIS kind of content — how do I structure and display it?"

**Depends on:** 05a (Page Taxonomy), Component Classification First Principles (6 groups), SOT-00 **Feeds into:** Page templates, content authoring guidelines, component usage governance, usefulness scoring

## **How This Document Works**

Three layers, bottom up:

1. **Content Data Types** (Part 1) — what kinds of information appear within pages
1. **Composition Patterns** (Part 4) — how data types combine in real pages
1. **Design Decision Framework** (Part 5) — step-by-step: "I have this content, how do I display it?"

The Component Classification (6 groups: Primitives, Layout, Media, Content, Data, Page Structure) tells you WHAT tools exist. This document tells you WHEN and HOW to use them.

## **Part 1: Content Data Types**

Every piece of content within a page is one of these types. A page typically contains multiple.

### **1. Procedural Instruction**

**What it is:** Ordered steps to complete a task. **Key challenge:** Keeping the reader on track without losing them in detail.

**Principles:**

- One action per step. Two actions = two steps.
- Every step has a visible result. No result? Say so.
- Prerequisites BEFORE step 1, not discovered mid-procedure.
- Action ≥ explanation. 3 lines of why and 1 of what? Restructure.
- Numbered, not bulleted. Steps are sequential.

**Progressive disclosure within steps:**

**Components:** `Steps`/`StyledSteps` (Layout), `CustomCodeBlock` (Content), `Warning`/`Tip` (Mintlify)

### **2. Multi-Dimensional Instruction**

**What it is:** Same procedure varies across 2+ independent axes. **Key challenge:** Combinatorial explosion. 3 × 2 × 3 = 18 paths on one page.

**Principles:**

- Hierarchy by variation impact. Most variation = top-level selector.
- Reader sees ONE path at a time.
- Shared content stays outside selectors.
- Maximum 3 dimensions per page. 4+ → split pages + shared Groups.

**The nesting hierarchy (fixed order):**

**Rules:**

- Views always wrap Tabs, never reverse
- Steps sit inside Tabs (because steps differ per tab value)
- If Steps identical across tabs → don't use tabs, single Steps block
- Accordions NEVER contain Steps (accordions = supplementary; steps = main flow)
- CodeBlocks and Tables are leaf nodes

**File architecture for complex pages:**

| **Layer** | **File type** | **Contains** | **Create when...** |
| --- | --- | --- | --- |
| Data | .jsx | Code strings, flag definitions | Same data in 2+ views |
| Views | .mdx | Complete procedure per variant | Content varies by primary dimension |
| Groups | .mdx | Reusable content blocks | Same block in 2+ views |
| Components | .jsx | Reusable UI elements | Same pattern in 2+ pages |

**When to use which selector:**

| **Dimensions** | **Pattern** |
| --- | --- |
| 1 dim, 2-4 options | Tabs |
| 1 dim, 5+ options | Views (dropdown) |
| 2 dims | Views → Tabs |
| 3 dims | Views → Tabs → Tabs-in-steps |
| 4+ dims | Split into separate pages with shared Groups |

### **3. Configuration / Parameter Data**

**What it is:** Flags, settings, options with structured attributes. **Key challenge:** 50 flags, reader needs 1. Density vs scannability.

**Principles:**

- Grouped by function, not alphabetical.
- Consistent entry format: name, type, default, required?, description.
- Searchable when >20 entries.
- Inline in procedures: only relevant flags. Quickstart = 5 flags. Reference = 50.

**Display patterns by context:**

| **Context** | **Component** | **Group** | **Why** |
| --- | --- | --- | --- |
| Within a tutorial step | AccordionGroup + ResponseFieldAccordion | Content | Don't interrupt flow |
| Dedicated reference page | SearchTable or DynamicTable | Layout | Lookup use case |
| Config file example | CustomCodeBlock with highlights | Content | Reader building a file |
| API endpoint docs | ValueResponseField, CustomResponseField | Content | Standard API format |

### **4. Code Examples**

**What it is:** Executable commands, snippets, configuration files. **Key challenge:** Must be exact, copy-able, contextualised.

**Principles:**

- Every code block has a filename or label.
- Language variants: parallel (CodeGroup), not serial.
- Highlight important lines in long blocks.
- Long code (>30 lines) is collapsible.
- Placeholders visually distinct.

| **Scenario** | **Component** | **Group** |
| --- | --- | --- |
| Single command | CustomCodeBlock | Content |
| Multiple languages | CodeGroup (Mintlify) | Built-in |
| Complex with annotations | CustomCodeBlock + highlight/expandable | Content |
| Code with output | ComplexCodeBlock | Content |

### **5. Comparison / Decision Data**

**What it is:** Options with tradeoffs side by side. **Key challenge:** Equal visual weight; clear differentiators without bias.

**Principles:**

- Tables for 3+ options with 3+ attributes.
- Equal visual weight. Use ✅/❌ markers.
- Decision summary after the table.
- Cards for 2-3 routing choices.

| **Scenario** | **Component** | **Group** |
| --- | --- | --- |
| 3+ options, 3+ attributes | DynamicTable | Layout |
| 2-3 routing choices | CardGroup + Card | Built-in |
| Narrative 2-option | Columns with prose | Built-in |

### **6. Conceptual Explanation**

**What it is:** How a mechanism or system works. **Key challenge:** Building understanding without losing the reader.

**Principles:**

- Concrete before abstract.
- Layer by layer. Simple → nuance → edge cases.
- Diagrams carry the load. No diagram = too abstract.
- Link out for "how to do it."

| **Need** | **Component** | **Group** |
| --- | --- | --- |
| System diagram | ScrollableDiagram | Media |
| Simple flow | Mermaid (inline) | Built-in |
| Key takeaway | Note / Info | Built-in |

### **7. Supplementary Detail**

**What it is:** Info that supports but shouldn't interrupt the main flow. **Key challenge:** Available when needed, invisible when not.

**Principles:**

- Main flow completable without opening supplementary content.
- Title tells you whether to open it.
- Supplementary is NEVER steps.

**Progressive disclosure ladder:**

| **Visibility** | **Pattern** | **When** |
| --- | --- | --- |
| Always visible, 1-2 sentences | Tip / Note / Warning | Critical context, safety |
| Click to see, 1 screen | Accordion / AccordionGroup | Useful detail, flag explanations |
| Navigate away | Cross-page link | Full reference, deep treatment |

### **8. Status / Categorisation Labels**

**What it is:** Tags, badges, indicators showing type, state, or compatibility. **Key challenge:** At-a-glance scanning.

**Consistent colour assignments:**

| **Category** | **Colour** | **Icon** |
| --- | --- | --- |
| Linux | yellow | linux |
| Windows | blue | windows |
| macOS | green | apple |
| Docker | blue | docker |
| AI pipeline | purple | — |
| Video pipeline | blue | — |
| Dual (AI + Video) | green | — |
| On-chain / Production | — | link |
| Off-chain / Local | — | floppy-disk |

**Components:** `Badge` + `Icon` (Mintlify built-ins)

### **9. Reference Entries**

**What it is:** Structured lookup records (API params, glossary terms, addresses). **Key challenge:** Finding one entry among hundreds.

**Principles:**

- Every entry follows the same template.
- Searchable when >20 entries. Non-negotiable.
- Grouped by domain, not alphabet. Alphabetical within groups.
- Example per entry when possible.

| **Scenario** | **Component** | **Group** |
| --- | --- | --- |
| Searchable table | SearchTable | Layout |
| Data-driven table | DynamicTable | Layout |
| API parameters | ResponseFieldAccordion, ValueResponseField | Content |
| Glossary | SearchTable or anchored list | Layout |

### **10. Architecture / Flow Visualisation**

**What it is:** System diagrams, data flows, process maps. **Key challenge:** Showing relationships, not just parts.

**Principles:**

- Diagrams show relationships.
- Zoomed out first, zoom in available.
- Every diagram box links to its docs page.

| **Complexity** | **Component** | **Group** |
| --- | --- | --- |
| Simple (3-7 nodes) | Mermaid | Built-in |
| Complex architecture | ScrollableDiagram | Media |
| Static diagram | Image | Primitives |

### **11. External / Embedded Content**

**What it is:** Videos, dashboards, widgets, third-party content. **Key challenge:** Performance, fallback, framing.

**Principles:**

- Always provide fallback context.
- Frame with purpose ("this video shows X").
- Lazy load.

| **Type** | **Component** | **Group** |
| --- | --- | --- |
| YouTube | YouTubeVideo | Media |
| Self-hosted video | Video | Media |
| Demo video with title | TitledVideo, ShowcaseVideo | Media |
| External markdown | MarkdownEmbed, ExternalContent | Media / Content |
| Social embeds | LinkedInEmbed, TwitterTimeline | Media |

### **12. Data-Bound Content**

**What it is:** Content from automation pipelines or live APIs. **Key challenge:** Component breaks if data schema changes. Pipeline dependency.

**This is Component Group E (Data).** Distinct from all others: bound to external data sources.

**Principles:**

- Know which pipeline script produces the data.
- Graceful degradation if pipeline fails.
- Freshness indicators.

| **Data Source** | **Component** | **Pipeline** |
| --- | --- | --- |
| Blog posts | BlogCard, CardBlogDataLayout | fetch-ghost-blog-data.js |
| Forum posts | PostCard, ForumLatestLayout | fetch-forum-data.js |
| Discord | DiscordAnnouncements | Discord fetch |
| YouTube | YouTubeVideoData | fetch-youtube-data.js |
| Events | LumaEvents | Luma API |
| Exchanges | CoinGeckoExchanges | Live API |
| Projects | ShowcaseCards | project-showcase-sync.js |

### **13. Navigation / Routing**

**What it is:** In-page links directing the reader onward. **Key challenge:** Clear destination without overwhelming.

**Principles:**

- Maximum 6 options at any decision point.
- Each option: destination + why you'd go.
- Routing at natural decision points (after explanation, not before).
- "Next" is always clear. Dead ends are failures.

| **Scenario** | **Component** | **Group** |
| --- | --- | --- |
| 3-6 goal-based routes | CardGroup + Card | Built-in |
| Single CTA | GotoCard, GotoLink | Primitives |
| Arrow link with description | LinkArrow | Primitives |
| External link | DoubleIconLink | Primitives |
| Tip-style navigation | TipWithArrow | Primitives |

## **Part 2: Content Type × Page Type Matrix**

| **Content Data Type** | **landing** | **overview** | **concept** | **tutorial** | **how_to** | **guide** | **reference** | **faq** | **trouble** |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1. Procedural | — | — | — | ★ | ★ | ○ | — | — | ○ |
| 2. Multi-dimensional | — | — | — | ★ | ★ | — | — | — | — |
| 3. Configuration | — | — | ○ | ○ | ★ | ○ | ★ | — | — |
| 4. Code examples | ✗ | ✗ | ○ | ★ | ★ | ○ | ★ | — | ○ |
| 5. Comparison/decision | ★ | ★ | ○ | — | — | ★ | ★ | — | — |
| 6. Conceptual | — | ★ | ★ | — | — | ★ | — | ○ | — |
| 7. Supplementary | — | — | ○ | ★ | ★ | ★ | ○ | — | ○ |
| 8. Status/labels | ○ | ○ | — | ○ | ○ | ○ | ★ | — | — |
| 9. Reference entries | — | — | — | — | — | — | ★ | ★ | ★ |
| 10. Architecture/flow | — | ○ | ★ | — | — | ○ | — | — | — |
| 11. External/embedded | — | ○ | — | — | — | ○ | ○ | — | — |
| 12. Data-bound | — | ○ | — | — | — | ○ | — | — | — |
| 13. Navigation/routing | ★ | ★ | ○ | ○ | ○ | ○ | — | ○ | ○ |

★ primary \| ○ sometimes \| — rarely \| ✗ never

## **Part 3: Component Group × Content Type Map**

| **Component Group** | **Content Types Served** |
| --- | --- |
| A. Primitives (29) | Navigation/routing, Status/labels, Supplementary (callouts) |
| B. Layout (23) | Procedural (steps), Configuration (tables), Comparison (tables), Reference entries |
| C. Media (12) | External/embedded, Architecture/flow |
| D. Content (13) | Code examples, Configuration (inline/API), Reference entries (API) |
| E. Data (13) | Data-bound content (all pipeline/API renders) |
| F. Page Structure (23) | Page-level only (portals, frame-mode). Not content data types. |

**Key insight:** Group F serves page TYPES, not content data types. Portal pages use F. Content within pages uses A-E.

## **Part 4: Composition Patterns**

### **Pattern A: Simple Tutorial**

### **Pattern B: Multi-Dimensional Quickstart**

### **Pattern C: Decision/Routing Page**

### **Pattern D: Concept Explainer**

### **Pattern E: Reference Page**

### **Pattern F: FAQ / Troubleshooting**

### **Pattern G: Data-Driven Ecosystem Page**

## **Part 5: Design Decision Framework**

### **"I have content. How do I display it?"**

1. **What TYPE of content?** → Match to 13 types above
1. **What PAGE TYPE is it on?** → Check matrix (Part 2). If ✗: content belongs elsewhere.
1. **Does content vary across dimensions?** → Count dims, pick selector pattern (Part 1, Type 2)
1. **Main flow or supplementary?** → Main = full visibility. Supplementary = progressive disclosure.
1. **Pick components.** → Group mapping (Part 3) → specific component tables (Part 1)

### **"I'm building a complex page. How?"**

1. Page type → section order from Page Taxonomy (05a)
1. Per section → inventory content data types needed
1. Per content type → display pattern from Part 1
1. If multi-dimensional → rank dims, assign UI levels, set up file architecture
1. Check composition patterns (Part 4) for template
1. Build: main flow first, supplementary last