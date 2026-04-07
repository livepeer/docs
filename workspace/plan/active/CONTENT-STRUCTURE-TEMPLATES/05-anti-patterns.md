# 05 — Anti-Patterns & Constraints

**Source agents**: A (references), B (live pages), C (templates), D (UX framework), E (gateways patterns)

---

## Mintlify Platform Constraints

These are architectural — cannot be worked around.

| # | Constraint | Impact | Workaround |
|---|---|---|---|
| M1 | JSX cannot import JSX | Components can't compose internally | MDX page is always orchestration point |
| M2 | `.mdx` variable interpolation unreliable in children | `{var}` in imported MDX may not resolve | Re-import in child, or pass as props |
| M3 | Duplicate imports from same source = error | Child re-importing parent's binding crashes | Only import once in the scope chain |
| M4 | No React imports | `useState`, `useEffect` etc. are global hooks only | Use Mintlify's implicit hook availability |
| M5 | `function` keyword exports don't work | Named function declarations break | Arrow function syntax only |
| M6 | Global components can't be stored in variables | `const MyCard = <Card>` fails | Use global components inline only |
| M7 | Code blocks can't interpolate `{variables}` | Dynamic values in code blocks impossible | Use data file + CustomCodeBlock component |
| M8 | Single `style.css` loaded globally | No per-page or per-component CSS files | CSS Custom Properties + inline styles |
| M9 | Frame mode strips global component styles | Styled components lose formatting in frame mode | Use explicit frame-mode heading components |
| M10 | `/snippets/` files never render as pages | Files outside `/snippets/` may render unintentionally | Add to `.mintignore` for non-page MDX outside snippets |

---

## Repo-Enforced Forbidden Patterns

These are policy — enforced by scripts, hooks, or governance.

### Per-pageType forbidden content

| pageType | Forbidden |
|---|---|
| navigation | Prose, code blocks, explanation, steps |
| concept | CLI commands, step-by-step procedures |
| overview | Code blocks, CLI commands, step-by-step |
| tutorial | — (most permissive) |
| guide | — (most permissive) |
| instruction | `Coming Soon`, `PreviewCallout`, `TODO`, `TBD` |
| reference | `Coming Soon`, `PreviewCallout`, `TODO`, `TBD` |

### Structural anti-patterns

| # | Anti-pattern | Why it's wrong | What to do instead |
|---|---|---|---|
| S1 | Steps inside Accordions | Steps are primary flow; Accordions are supplementary | Put steps in main flow, detail in Accordions |
| S2 | Tabs inside Steps | Violates nesting hierarchy | Reverse: Steps inside Tabs |
| S3 | Multi-action steps | Reader loses track | One action per step; two actions = two steps |
| S4 | Orphaned bullet lists | No context, no scannable structure | Intro paragraph + table or card grid instead |
| S5 | Auto-generated index as user page | Navigation indices are system artefacts | Create a real portal/landing page instead |
| S6 | Prose-heavy code sections | Action < explanation is wrong ratio | If 3 lines why / 1 line what, restructure |
| S7 | Forward/backward references | Docs are navigated non-linearly | Use `[Link](/page)` — never "as mentioned above" |
| S8 | Hardcoded data in MDX | Single-source-of-truth violation | Import from `snippets/data/` — zero exceptions |
| S9 | Inline styles with hardcoded colours | Breaks dark mode, violates CSS architecture | Use CSS Custom Properties only |
| S10 | Embedded JSX in data files | Data files should be pure data | Use a `tone` field; let the component render |
| S11 | Duplicate template sets | Two versions drift apart | One canonical location (`snippets/templates/pages/`) |
| S12 | Page-centric voice | "This page covers..." or "In this guide, we show..." | Entity-led: start with the system, action, or user |

### Copy anti-patterns

| # | Anti-pattern | Example | Fix |
|---|---|---|---|
| C1 | Vague qualifiers | "significant reduction", "various options" | Quantify: "80% lower", "4 options" |
| C2 | Define by negation | "This is not a centralised system" | State what IS true: "Livepeer is decentralised" |
| C3 | Hedge endings | "costs may vary significantly" | End with fact/number: "gas costs range 0.001-0.003 ETH" |
| C4 | "We/our" | "We recommend..." | "The recommended approach..." or second person |
| C5 | Banned words | simply, just, easily, leverage, utilise, in order to, please note, best-in-class, seamless, cutting-edge | Delete or replace with concrete statement |
| C6 | Questions in headings | "How Does Staking Work?" | "Staking Mechanics" (governing-concept label) |
| C7 | Numbers in headings | "Three Setup Paths" | "Deployment Types" |
| C8 | Comparators in headings | "Orchestrators vs Gateways" | "Node Role Comparison" |
| C9 | Generic descriptors | "Overview", "Introduction", "Basics" | Use only as variant markers, never as primary heading |

### Naming anti-patterns

| # | Anti-pattern | Example | Fix |
|---|---|---|---|
| N1 | Literal labels | "Docker and Linux" | "Installation Methods" (governing concept) |
| N2 | Question-frame words | "What Is", "How To", "When To" | Drop the question frame |
| N3 | Sentences as headings | "Learn how to configure your node" | "Node Configuration" |
| N4 | First person | "What You Earn" | "Reward Model" |
| N5 | Negation | "What You Don't Need" | "Minimum Requirements" |

---

## Quality Checks Framework

From `checks.mdx` — 9 categories, ~60 checks. Key categories for page structure:

### Category 4: Page Structure & Content Architecture (11 checks)

| # | Check | Severity |
|---|---|---|
| 4.1 | Page serves single purpose (one pageType, one audience) | Error |
| 4.2 | Every section heading scores ≥20/25 on naming rubric | Warning |
| 4.3 | Journey handoffs present — reader knows where to go next | Error |
| 4.4 | No dead ends — every page has footer routing | Warning |
| 4.5 | Required sections present for pageType | Error |
| 4.6 | Forbidden content absent for pageType | Error |
| 4.7 | Section ordering follows reader journey progression | Warning |
| 4.8 | Max one major layout element unless nested | Warning |
| 4.9 | Code blocks have filename, language, icon | Warning |
| 4.10 | Tabs and Accordions have icon props | Warning |
| 4.11 | No hardcoded data — import from canonical source | Error |

### Category 5: Layout, Components & Template (5 checks)

| # | Check | Severity |
|---|---|---|
| 5.1 | Components match approved matrix for pageType | Error |
| 5.2 | Import paths use correct convention (root-absolute for shared, relative for local) | Warning |
| 5.3 | Import sections organised with category comments | Info |
| 5.4 | CustomDivider used for section breaks (not bare `---`) | Info |
| 5.5 | Badge colours follow standard palette | Warning |

---

## Verification Log Pattern

For technical content pages, include a verification log in JSX comments:

```jsx
{/*
VERIFICATION LOG — [date]
Sources: [authority sources used]

Corrections:
1. [specific change with source and commit SHA]
2. [specific change]
*/}
```

This is standard for any page containing contract addresses, CLI flags, API endpoints, or technical claims.
