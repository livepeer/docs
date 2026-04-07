# Page Classification Guide

> **One reading path.** This is the starting point for laying out any page in the Livepeer docs.
> Classify first, compose second, build third.

---

## Decision Tree: What Type of Page Is This?

Ask these questions in order. First match wins.

```
Is the page's job to ROUTE the reader to other pages?
  └─ YES → navigation
  └─ NO ↓

Is the page's job to EXPLAIN a mechanism, concept, or system?
  └─ YES → Does it orient the reader to a whole section (entry point)?
       └─ YES → concept (variant: overview)
       └─ NO → concept
  └─ NO ↓

Is the page's job to TEACH by building something step-by-step?
  └─ YES → Does the reader build a real artefact they keep?
       └─ YES → tutorial
       └─ NO (learning exercise only) → tutorial
  └─ NO ↓

Is the page's job to give PRACTICAL UNDERSTANDING of a system?
  └─ YES → Does it explain how a system works with practical guidance?
       └─ YES → guide
  └─ NO ↓

Is the page's job to get a TASK DONE (step-by-step execution)?
  └─ YES → Is it a first-time "zero to working" experience?
       └─ YES → instruction (variant: quickstart)
       └─ NO → Is it a configuration/setup procedure?
            └─ YES → instruction (variant: setup)
            └─ NO → instruction
  └─ NO ↓

Is the page's job to provide STRUCTURED LOOKUP data?
  └─ YES → Is it a specification (flags, API, contracts)?
       └─ YES → reference (variant: specification)
       └─ NO → Is it a collection (FAQ, glossary, troubleshooting)?
            └─ YES → reference (variant: compendium)
            └─ NO → Is it a changelog?
                 └─ YES → reference (variant: changelog)
                 └─ NO → reference
  └─ NO ↓

Is the page's job to present a CURATED COLLECTION (feeds, tools, links)?
  └─ YES → resource
  └─ NO → Re-read the content. One of the above applies.
```

### Ambiguous Cases

| Looks like... | But is actually... | Test |
|---|---|---|
| guide vs instruction | guide explains a system with practical tips; instruction gets a task done with numbered steps | Does it have a clear "you will have done X" outcome? → instruction. Does it explain how things work? → guide |
| concept vs guide | concept explains WHY/HOW a mechanism works; guide explains WHAT TO DO with practical understanding | Is the reader expected to act after reading? → guide. Just understand? → concept |
| tutorial vs instruction | tutorial teaches by building; instruction accomplishes a task | Is the primary goal learning or accomplishing? Learning → tutorial |
| concept (overview) vs navigation | overview explains and orients; navigation routes without explanation | Is there prose explaining the section? → concept/overview. Just cards/links? → navigation |
| reference vs resource | reference is structured lookup; resource is curated collection | Can the reader look up a specific entry? → reference. Is it a browsable collection? → resource |

---

## Page Type Cards

### navigation

**Purpose**: Route the reader — portals, landings, section roots
**Variants**: `portal` (frame-mode hero + card grid), `landing` (standard card-based routing)
**Target time**: <10 seconds
**Word range**: 50-150 words
**Audience**: Everyone arriving at a section entry point

#### Required sections
- Card grid or routing cards (the page IS the routing)

#### Forbidden
- Prose paragraphs
- Code blocks
- Step-by-step instructions
- Conceptual explanation
- `Coming Soon` or `TODO`

#### Component palette
| Component | Use |
|---|---|
| `HeroSectionContainer` + `Starfield` | Portal hero (frame mode) |
| `PortalHeroContent` | Hero title + subtitle |
| `PortalContentContainer` | Card grid wrapper |
| `PortalCardsHeader` + `BlinkingIcon` | Section header with animation |
| `Columns cols={3}` + `Card` | 6-9 routing cards |
| `CardGroup` + `Card` | Alternative card layout |
| `DisplayCard` | Audience-segment routing |

#### Do
- Lead with clear value proposition (one sentence)
- Use icons consistent with icon-map registry
- Ensure every card has a working destination
- Test that no card leads to a dead end

#### Don't
- Write prose between cards — if you need to explain, it's an overview, not a landing
- Use more than 9 cards — if you need more, the section needs restructuring
- Mix card styles on the same page
- Include "Coming Soon" cards — route to what exists or don't show the card

---

### concept

**Purpose**: Explain a mechanism, system, or idea
**Variants**: `overview` (section entry point that orients + explains)
**Target time**: 5-10 minutes
**Word range**: 500-2000 words
**Audience**: Reader who needs to understand how something works before acting

#### Required sections
- Introduction (value-led, decode jargon)
- At least one diagram or visual (Mermaid, ScrollableDiagram, or Image)
- Related Pages footer

#### Forbidden
- CLI commands or executable code blocks
- Step-by-step procedures (link to instruction/tutorial instead)
- `TODO` or `TBD` placeholders

#### Component palette
| Component | Use |
|---|---|
| `Quote` | Header CTA — anchor definition |
| `AccordionGroup` | Audience analogies (self-select by background) |
| `Mermaid` | Inline diagrams (3-7 nodes) |
| `ScrollableDiagram` | Complex architecture diagrams |
| `StyledTable` | Comparison matrices, type taxonomies |
| `DynamicTable` | Multi-attribute entity tables |
| `CustomDivider` | Section breaks (with `middleText` for semantic labels) |
| `Note` / `Tip` | Supplementary context |
| `CardGroup cols={2}` | Related Pages footer |

#### Do
- Open with analogy or definition, not history
- Use AccordionGroup at top to let readers self-select by background
- Lead every paragraph with a fact, end with a fact
- Use diagrams to carry conceptual load — no diagram means too abstract
- Quantify all claims ("14 orchestrators", not "several orchestrators")

#### Don't
- Include executable code — this page explains, it doesn't instruct
- Use the Accordion entry pattern for everything — it's for audience disambiguation only
- Write paragraphs longer than 5 sentences
- End sections with hedges ("costs may vary") — end with facts or next steps
- Use "we/our" — entity-led voice only

---

### tutorial

**Purpose**: Teach by building — the reader constructs something real
**Variants**: `overview` (tutorial section entry)
**Target time**: 10-30 minutes
**Word range**: 500-1500 words
**Audience**: Learner who wants to understand by doing

#### Required sections
- Goal statement (what you'll build + time estimate)
- Prerequisites
- Numbered steps with expected results
- Verification (test the built artefact)
- Next Steps footer

#### Forbidden
- Unexplained steps ("just run this" without saying why)
- Steps without visible results

#### Component palette
| Component | Use |
|---|---|
| `StyledSteps` + `StyledStep` | Numbered procedure |
| `CustomCodeBlock` | Code with filename, language, icon |
| `CodeGroup` | Multi-language variants |
| `Tabs` | Platform/language variants within steps |
| `Tip` / `Warning` | Guidance callouts |
| `Accordion` | Optional deep-dive within steps |
| `CardGroup` | Next Steps footer |

#### Do
- State the goal and time estimate in the first paragraph
- Show one action per step with a visible result
- Include the expected output after each step (what the reader should see)
- Use progressive disclosure — detail in Accordions, main flow stays clean
- End with verification that the built thing works

#### Don't
- Skip prerequisites — the reader shouldn't fail at step 3 because of an unmentioned dependency
- Combine multiple actions in one step
- Put steps inside Accordions (steps are primary flow)
- Assume the reader knows why a step matters — brief explanation per step
- End without verification — "it should work" is not verification

---

### guide

**Purpose**: Practical understanding of a system — how it works, what to consider, what to decide
**Variants**: `overview` (guide section entry)
**Target time**: 5-15 minutes
**Word range**: 500-2000 words
**Audience**: Reader who needs to make decisions or understand operational context

#### Required sections
- Introduction (system/problem statement)
- At least one section with structured data (table, diagram, or decision framework)
- Routing (Related Pages or Next Step CTA)

#### Forbidden
- `Coming Soon` or `PreviewCallout`
- `TODO` or `TBD` placeholders

#### Component palette
| Component | Use |
|---|---|
| `BorderedBox` | Scope framing callout |
| `StyledTable` | Requirements, comparison matrices |
| `DynamicTable` | Multi-attribute data |
| `Tabs` | Binary choices (off-chain/on-chain, deployment modes) |
| `Mermaid` | Architecture, decision flow |
| `Accordion` / `AccordionGroup` | Progressive disclosure of detail |
| `Card` | Next Step CTA |
| `CardGroup` | Related Pages footer |
| `CustomDivider` | Section breaks |

#### Do
- Frame the problem or system before diving into detail
- Use tables for any comparison with 3+ attributes
- Present the majority path first, alternatives after
- Include decision criteria — help the reader choose, don't just list options
- End with clear routing (next step or related pages)

#### Don't
- Turn it into an instruction page — guides explain systems, instructions execute tasks
- List options without a recommendation or decision framework
- Use vague qualifiers ("various options", "significant benefits")
- Write more than 5 H2 sections — if you need more, split the guide

---

### instruction

**Purpose**: Step-by-step task execution — get something done
**Variants**: `quickstart` (zero-to-working), `setup` (configuration procedure), `overview` (instruction section entry)
**Target time**: 5-15 minutes (quickstart: 10-30 minutes)
**Word range**: 300-1000 words (quickstart: 500-1500)
**Audience**: Reader who needs to accomplish a specific task

#### Required sections
- Prerequisites (before steps)
- Numbered steps
- Verification (confirm it worked)

#### Forbidden
- `Coming Soon` or `PreviewCallout`
- `TODO` or `TBD` placeholders
- Steps without visible results

#### Component palette
| Component | Use |
|---|---|
| `TipWithArrow` | Platform selector guidance |
| `WidthCard` | Version badge (data-imported) |
| `StyledSteps` + `StyledStep` | Numbered procedure |
| `CustomCodeBlock` | Commands with filename/language/icon |
| `Views` | Platform variants (Docker/Linux/Windows) — 2+ dimensions |
| `Tabs` | Mode variants (off-chain/on-chain) — 1 dimension |
| `Warning` / `Tip` | Critical guidance |
| `Accordion` | Optional detail (never containing steps) |
| `Columns cols={2}` + `Card` | Reference pages at end |

**Multi-dimensional layout rules**:
| Dimensions | Options | Pattern |
|---|---|---|
| 1 dim, 2-4 options | Tabs |  |
| 1 dim, 5+ options | Views (dropdown) |  |
| 2 dims | Views → Tabs |  |
| 3 dims | Views → Tabs → Tabs-in-steps |  |
| 4+ dims | Split into separate pages |  |

#### Do
- State what the reader will accomplish in the first sentence
- Put prerequisites BEFORE step 1 (never inside steps)
- One action per step — two actions = two steps
- Include verification commands with expected output
- Use Views for platform variants, Tabs for mode variants
- Import data from `snippets/data/` — never hardcode

#### Don't
- Put steps inside Accordions (Accordions are supplementary)
- Put Tabs inside Steps (reverse the hierarchy: Steps inside Tabs)
- Combine more than 3 dimensions on one page — split instead
- Skip verification — "it should work" is not verification
- Hardcode any data (contract addresses, ports, CLI defaults) — import from canonical source

---

### reference

**Purpose**: Structured lookup — find a specific piece of information quickly
**Variants**: `specification` (flags, API, contracts), `compendium` (FAQ, glossary, troubleshooting), `changelog` (release history), `overview` (reference section entry)
**Target time**: <1 minute per lookup (compendium: 1-5 minutes)
**Word range**: Varies (entries are short; pages can be long)
**Audience**: Reader who knows what they're looking for

#### Required sections
- Brief intro (what's documented, how to use the page)
- Structured data (table, accordion group, or search interface)

#### Forbidden
- `Coming Soon` or `PreviewCallout`
- `TODO` or `TBD` placeholders
- Narrative prose as primary content (reference is lookup, not reading)

#### Component palette

**specification**:
| Component | Use |
|---|---|
| `SearchTable` | Large datasets (>20 entries) with search |
| `DynamicTable` | Multi-attribute data |
| `ResponseFieldAccordion` | API parameter groups |
| `ValueResponseField` | Individual API parameters |
| `CustomCodeBlock` | Config file examples |
| `ParamField` | OpenAPI parameter documentation |

**compendium**:
| Component | Use |
|---|---|
| `AccordionGroup` | FAQ entries (question → answer) |
| `SearchTable` | Glossary with search |
| `Accordion` | Troubleshooting (Symptom → Cause → Fix → Verify) |

**changelog**:
| Component | Use |
|---|---|
| `Update` | Version entry block |
| `ScrollBox` | Long update content |
| `LazyLoad` | Heavy content sections |
| `CustomDivider` | Between updates |

#### Do
- Make every entry self-contained — reader shouldn't need to read other entries
- Group entries by domain/function (not alphabetical unless it's a glossary)
- Make searchable when >20 entries
- Use consistent template for every entry in the same collection
- Include a Tip at the top explaining how to use the page

#### Don't
- Write narrative prose — reference pages are for lookup, not reading
- Mix entry formats on the same page
- Include opinions or recommendations (reference is factual)
- Leave entries without definitions or values

---

### resource

**Purpose**: Curated collections — tools, feeds, links, embedded content
**Variants**: `overview` (resource section entry)
**Target time**: Browse-based (no target)
**Word range**: Varies
**Audience**: Reader exploring what's available

#### Required sections
- Introduction (what's collected, how it's organised)
- At least one categorised group

#### Forbidden
- Step-by-step instructions (link to instruction pages instead)

#### Component palette
| Component | Use |
|---|---|
| `SocialLinks` | Social media links bar |
| `YouTubeVideo` / `TitledVideo` | Video embeds |
| `BlogCard` / `CardBlogDataLayout` | Blog feed |
| `ForumLatestLayout` | Forum feed |
| `DiscordAnnouncements` | Discord feed |
| `ShowcaseCards` | Project gallery |
| `MarkdownEmbed` | External markdown content |
| `CardGroup` | Categorised link collections |
| `LazyLoad` | Heavy embedded content |

#### Do
- Organise by category, not chronologically (unless it's a feed)
- Frame each section with purpose — why the reader should care about this collection
- Use data-driven components where pipeline data exists
- Wrap heavy embeds in LazyLoad
- Provide fallback text for all external embeds

#### Don't
- Hardcode data that comes from a pipeline — import from `snippets/data/`
- Mix curated and auto-generated content without marking the difference
- Include instruction steps — link to the relevant instruction page

---

## Quick Reference

| pageType | Job | Time | Words | Must have | Must not have |
|---|---|---|---|---|---|
| navigation | Route | <10s | 50-150 | Routing cards | Prose, code |
| concept | Explain | 5-10min | 500-2000 | Diagram, Related Pages | CLI commands, procedures |
| tutorial | Teach by building | 10-30min | 500-1500 | Goal, Prerequisites, Steps, Verification | Unexplained steps |
| guide | Practical understanding | 5-15min | 500-2000 | Structured data, Routing | TODO/TBD |
| instruction | Get task done | 5-15min | 300-1000 | Prerequisites, Steps, Verification | Steps in Accordions |
| reference | Structured lookup | <1min/entry | Varies | Structured data, Intro | Narrative prose, TODO |
| resource | Curated collection | Browse | Varies | Categories, Intro | Step-by-step |
