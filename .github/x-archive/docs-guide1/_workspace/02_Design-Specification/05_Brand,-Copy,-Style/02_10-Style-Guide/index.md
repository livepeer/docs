# **07. Documentation Style Guide (Rewrite)**

Technical formatting standards, Mintlify rules, CSS architecture, and development workflow for Livepeer docs contributors. This tells you HOW to format. The Brand & Copy Guide (06) tells you WHAT to write.

**Replaces:** `v2/resources/documentation-guide/style-guide.mdx` (1,102 lines, ~60% accurate per audit) **Status:** Rewrite — aligned with actual repo state on docs-v2

## **CSS Architecture**

### **The Three-Layer Framework**

| **Layer** | **Where** | **What Goes Here** | **What Doesn't** |
| --- | --- | --- | --- |
| 1. Global CSS (style.css, 444 lines) | Repo root | Theme variables, Mintlify overrides, frame mode, utility classes used 5+ times | Page-specific styles, component styles, one-offs |
| 2. JSX Components (snippets/components/) | Per-component | Self-contained styles using CSS variables | External CSS imports, hardcoded hex colours |
| 3. MDX Content (v2/**/*.mdx) | Per-page | Component usage only | Inline style={{}}, className=, hardcoded colours |

### **Colour System**

All theme colours are CSS Custom Properties in `style.css`. Never hardcode hex values.

| **Variable** | **Light** | **Dark** | **Usage** |
| --- | --- | --- | --- |
| --accent | #3CB540 (Jade Green) | #2b9a66 | Links, icons, interactive elements |
| --accent-dark | #18794E | #18794E | Step icons, emphasis |
| --hero-text | #181C18 | #E0E4E0 | Headings, titles |
| --text | #717571 | #A0A4A0 | Body text |
| --muted-text | #9ca3af | #6b7280 | Secondary text |
| --background | #ffffff | #0d0d0d | Page background |
| --card-background | #f9fafb | #1a1a1a | Cards, containers |
| --border | #e5e7eb | #333333 | Borders, dividers |

Theme switching is pure CSS — Mintlify adds `.dark` to `<html>` in dark mode. No JavaScript needed.

### **Using CSS Variables**

**In JSX components (inline):**

**In JSX components (style tag, for pseudo-classes/media queries):**

**In MDX: use component primitives, not inline styles.**

### **Deprecated: ThemeData**

`snippets/styles/themeStyles.jsx` is **deprecated**. Do not import `ThemeData` in new code. 20 MDX files and 2 JSX files still reference it — these are migration debt, not examples to follow.

## **Heading Conventions**

- **H1 (#):** Page title only. Set in frontmatter `title`, not in body. One per page.
- **H2 (##):** Major sections defined by page type (from 05a Page Taxonomy).
- **H3 (###):** Subsections within H2.
- **H4+ (####):** Rarely. If you need H4, consider splitting the page.

For **frame mode pages** only, use custom heading components:

Standard markdown headings on all other pages.

## **Code in Prose**

- **CLI flags:** backtick with dash: `--gateway`, `--maxPricePerUnit`
- **Commands:** backtick: `livepeer -gateway`, `docker-compose up`
- **File names:** backtick: `docker-compose.yml`, `docs.json`
- **Values:** backtick: `mainnet`, `true`, `8935`
- **Concepts in running text:** no backtick. "The gateway mode" not "the `gateway` mode"

## **Links**

- **Internal:** relative paths. `[Delegation Economics](../delegation/economics)`
- **External:** describe the destination. "The[ go-livepeer repository](https://github.com/livepeer/go-livepeer) on GitHub" — not "[Click here](https://claude.ai/chat/url)."
- **Cross-tab:** canonical page name. `[Core Mechanisms](/about/core-mechanisms)`

## **Numbers and Units**

- **ETH:** decimal — "0.1 ETH"
- **LPT:** plain — "100 LPT"
- **VRAM:** "32 GB VRAM"
- **Prices:** match go-livepeer terminology — "per pixel", "per unit"
- **Time estimates:** "~30 minutes" for estimates, "5 minutes" for tested procedures
- **Port numbers:** no thousands separator — "8935" not "8,935"

## **Mathematical Expressions (LaTeX)**

Mintlify supports LaTeX. Use dollar-sign delimiters only.

**Inline:** `$V_i = \\frac{B_i}{B_T}$` **Block:** `$$R_t = S_t \\cdot r_t$$`

**Do NOT use backslash delimiters** — `\\(` and `\\[` break MDX parsing.

Common syntax: `$\\frac{a}{b}$` (fractions), `$B_i$` (subscript), `$x^2$` (superscript), `$\\sum_{i=1}^{n}$` (summation).

## **Frontmatter Requirements**

Every publishable page requires:

See the Brand & Copy Guide (06) for what the `description` should SAY.

## **Badge Colour Assignments**

Consistent across the entire site. Same category = same colour always.

| **Category** | **Colour** | **Icon** |
| --- | --- | --- |
| Linux | yellow | linux |
| Windows | blue | windows |
| macOS | green | apple |
| Docker | blue | docker |
| AI pipeline | purple | — |
| Video pipeline | blue | — |
| Dual (AI + Video) | green | — |
| On-chain / Production | default | link |
| Off-chain / Local | default | floppy-disk |

## **Component Usage**

### **Mintlify Global Components (DO NOT import)**

These are available everywhere — importing them will cause errors:

`Card`, `CardGroup`, `Tabs`, `Tab`, `Steps`, `Step`, `Accordion`, `AccordionGroup`, `Columns`, `Badge`, `Tooltip`, `Expandable`, `Frame`, `Icon`, `CodeBlock`, `CodeGroup`, `Note`, `Warning`, `Info`, `Tip`, `Danger`, `Check`, `View`

**CRITICAL:** Global components cannot be stored in JavaScript variables — they must be used directly as JSX:

### **React Hooks**

React hooks (`useState`, `useEffect`, etc.) are available globally in Mintlify. Do not import React or hooks.

### **Custom Components — Prefer Over Plain Markdown**

For navigation, quotes, and enhanced displays, prefer custom components from `snippets/components/`:

| **Need** | **Use** | **Not** |
| --- | --- | --- |
| Navigation link | `<GotoLink>`, `<GotoCard>` | Plain [text](url) |
| Quote with attribution | `<Quote>`, `<FrameQuote>` | > blockquote |
| External link | `<DoubleIconLink>` | Plain markdown link |
| Tip with arrow | `<TipWithArrow>` | `<Tip>` |

Plain markdown links remain fine for inline references within prose.

### **Component Organisation**

Components live in `snippets/components/` organised by function:

| **Folder** | **Purpose** | **Count** |
| --- | --- | --- |
| primitives/ | Visual atoms: icons, text, callouts, links, buttons, dividers, a11y | 29 |
| layout/ | Spatial arrangement: containers, steps, tables, lists, carousels | 23 |
| display/ | Media, embeds, diagrams, frame-mode, cards, quote | Mixed — being reclassified |
| content/ | Code blocks, API response fields, external content, release version | 13 |
| integrations/ | CoinGecko exchange data | 1 |
| domain/ | Domain-specific: portal components, status callouts, gateway callouts | Mixed |

**Note:** The Component Classification First Principles document identifies a cleaner 6-group taxonomy (Primitives, Layout, Media, Content, Data, Page Structure). A refactor is planned but the current folder structure remains active.

## **Mintlify Gotchas**

### **Import Paths Must Be Absolute**

### **File Extensions Required**

### **JSX-to-JSX Imports Are Limited**

JSX files generally cannot import other JSX component files within Mintlify's build. The reliable pattern is: import everything in the MDX file, then use components and data together in that MDX scope.

**Exception:** Data files (`.jsx` exporting objects/arrays, not React components) can sometimes be imported into component files. Test before relying on this.

### **MDX Scope Inheritance**

When importing MDX files into other MDX files:

- ✅ Child MDX inherits parent scope for **props** passed to components
- ❌ Child MDX may NOT inherit parent scope for **direct JSX interpolation** (`{variable}`)
- ✅ Child MDX can import its own dependencies

### **JSX Comments Don't Prevent MDX Parsing**

### **Frame Mode**

`mode: frame` in frontmatter removes all default Mintlify styling. When using frame mode:

- Use custom heading components from `frameMode.jsx`
- All styling must be explicit
- Mintlify built-in components still work but lose default styles
- Use CSS variables + breakpoints for layout, not hardcoded values

## **Styling Rules Summary**

| **Rule** | **Scope** | **Status** | **Enforcement** |
| --- | --- | --- | --- |
| Use CSS Custom Properties for all colours | JSX + MDX | Active | style-guide.test.js → error |
| No ThemeData imports | All files | Active (warns on legacy) | style-guide.test.js → error; pre-commit → warn for known files |
| No hardcoded theme hex colours | All files | Active | style-guide.test.js → error |
| No inline style={{}} in MDX | MDX files | Active but 49 files violate | style-guide.test.js → error; pre-commit flags |
| No Tailwind className in MDX | MDX files | Active | style-guide.test.js → warning |
| Absolute import paths from /snippets/ | All files | Active | style-guide.test.js → error |
| UK English spelling | MDX files | Active | spelling.test.js + cspell.json |
| Frontmatter completeness | MDX files | Partial | quality.test.js — expanding with semantic rollout |

**Honest note on inline styles:** The "no inline styles in MDX" rule is the most widely violated. 49 English v2 files currently use `style={{}}`, including core pages like the gateway quickstart. The rule is correct in principle — component primitives should handle layout — but migration is incomplete. New content should use component primitives; existing violations will be cleaned up through the semantic rollout batches.

## **Test Infrastructure**

### **Running Tests**

Tests are run via Node scripts, not npm:

### **What Gets Checked**

| **Test Module** | **Checks** | **Severity** |
| --- | --- | --- |
| style-guide.test.js | ThemeData usage, hardcoded colours, inline styles in MDX, Tailwind classes, import paths | Errors (blocks) + warnings |
| mdx.test.js | Frontmatter validity, unclosed JSX, import syntax | Errors |
| mdx-guards.test.js | MDX scope issues, parsing edge cases | Errors |
| spelling.test.js | UK English via cspell + custom dictionary | Errors |
| quality.test.js | Image alt text, frontmatter completeness, link validity, SEO metadata | Errors + warnings |
| links-imports.test.js | Internal links resolve, imports exist | Errors |
| docs-navigation.test.js | Nav structure matches file structure | Errors |

### **Audit Scripts (Full-Scope Reports)**

For periodic audits beyond PR checks:

### **Integration Tests**

## **Pre-Commit Hooks**

### **Installation (required)**

### **What the Hook Does**

The pre-commit hook runs on staged files and checks:

| **Check** | **Behaviour** |
| --- | --- |
| ThemeData import | Warns on known legacy files, blocks on new usage |
| Hardcoded theme colours | Warns |
| File deletions (outside tasks/) | Blocks (requires --trailer "allow-deletions=true" override) |
| .allowlist edits | Blocks (requires --trailer "allowlist-edit=true" override) |
| Codex session on docs-v2 | Blocks |
| AI stash policy | Blocks |
| Syntax validation (MDX, JSON, shell, JS) | Blocks on errors |
| Browser validation | Runs if mint dev is active, skipped otherwise |

### **Human Overrides**

## **Git Workflow**

Never work directly on `docs-v2`, `main`, or another contributor's branch.

Branch naming: `docs-plan/XX-task-name` where XX is the task number.

## **File Organisation**

### **Content**

| **Location** | **Purpose** |
| --- | --- |
| v2/ | All v2 documentation pages (English + locale subdirs) |
| snippets/components/ | Reusable JSX components |
| snippets/data/ | Data files (code strings, flag definitions) |
| snippets/pages/ | Modular MDX content imported into main pages |
| snippets/assets/ | Images, logos, SVGs |
| snippets/automations/ | Pipeline data (blog, forum, Discord, YouTube) |

### **File Naming**

- **MDX/JSX files:** kebab-case — `my-component.mdx`
- **Component exports:** PascalCase — `MyComponent`
- **Data exports:** camelCase or UPPER_CASE — `CONFIG_FLAGS`, `dockerCode`

### **Component Change Policy**

Components in `snippets/components/` are shared across many pages. Before modifying:

1. Search for all pages that import the component
1. Assess impact of the change on each page
1. Test in both light and dark mode
1. Get review from component owner

Do not change component function signatures, remove exports, or alter component logic without explicit review. Creating new components is always safe.

## **Testing Checklist**

Before submitting:

- [ ] Renders correctly in dark mode
- [ ] Renders correctly in light mode
- [ ] All internal links resolve
- [ ] Code examples are tested and accurate
- [ ] Images have alt text
- [ ] Components use CSS variables (no hardcoded colours)
- [ ] No console errors in browser dev tools
- [ ] `node operations/tests/run-pr-checks.js --base-ref docs-v2` passes
- [ ] Frontmatter complete: title, description, pageType, audience, status, keywords

## **Reference Links**

- [Component Library](https://claude.ai/chat/component-library) — component reference pages
- [Snippets Inventory](https://claude.ai/chat/snippets-inventory) — all available snippets
- [Mintlify Repo Guide](/docs-guide/contributing/mintlify) — repo-safe Mintlify gotchas
- [Git Hooks Documentation](https://claude.ai/contribute/CONTRIBUTING/GIT-HOOKS.md) — pre-commit hook details
- [Brand & Copy Guide](https://claude.ai/chat/06-brand-copy-guide.md) — voice, tone, terminology
- `style.css` — global CSS Custom Properties
