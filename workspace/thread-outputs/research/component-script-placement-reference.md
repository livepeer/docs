# File Placement Reference

> **DEPRECATED as canonical location.** The published version lives at `docs-guide/frameworks/file-placement.mdx`. This file remains for reference only.

> Claude MUST read this before writing any component or script file.
> Source: derived from plan/active/COMPONENT-GOVERNANCE, SCRIPT-GOVERNANCE, REPO-STRUCTURE-GOV (2026-03-25)

---

## Components — `snippets/components/`

### Categories (ask these questions in order)

| Question | If yes → | Folder |
|---|---|---|
| Is it a single visual atom — no children, no fetching, no arrangement? | **element** | `elements/` |
| Does it hold, group, or spatially arrange other components? | **wrapper** | `wrappers/` |
| Does it take content and present it in a formatted way? | **display** | `displays/` |
| Is it part of the page's outer structure, typically used once? | **scaffolding** | `scaffolding/` |
| Does it fetch, embed, or bind to external/third-party data? | **integrator** | `integrators/` |
| Is it a non-component config/theme object? | **config** | `config/` |

### Sub-niches by category

**elements:** a11y, buttons, callouts, icons, images, links, math, social, spacing, text
**wrappers:** accordions, cards, containers, grids, lists, steps, tables
**displays:** code, diagrams, quotes, response-fields, video
**scaffolding:** frame-mode, heroes, portals
**integrators:** blog, embeds, feeds, video-data

### Placement path
```
snippets/components/<category>/<subniche>/ComponentName.jsx
```

### Common mistakes

| Wrong | Right | Why |
|---|---|---|
| BadgeWrapper → `elements/` | BadgeWrapper → `wrappers/` | "Wrapper" = arranges/groups. Category is determined by what the component DOES, not what it's named after. |
| New component → closest-sounding folder | Read the 6 questions above | Pattern-matching on name produces wrong placement. Use the decision questions. |
| Component in repo root | Never | All components go in `snippets/components/<category>/<subniche>/` |

### Required JSDoc header (7 tags)
```
@component, @type, @subniche, @status, @description, @accepts, @dataSource (if integrator)
```

---

## Scripts — `operations/scripts/`

### Types (Layer 1)

| Type | Folder | What it does |
|---|---|---|
| **audit** | `audits/` | Read-only scan, measure, report |
| **generator** | `generators/` | Produce new files from source data |
| **validator** | `validators/` | Enforce rules with pass/fail gate |
| **remediator** | `remediators/` | Bulk fix or repair existing files |
| **dispatch** | `dispatch/` | Dispatch work to other scripts or agents |
| **automation** | `automations/` | Automated pipelines — translation, data fetching, transforms |

### Concerns (Layer 2)

| Concern | Folder | What it covers |
|---|---|---|
| **content** | `content/` | Docs pages, copy, SEO, veracity, quality |
| **components** | `components/` | Component library, registry, CSS, naming |
| **governance** | `governance/` | Scripts about scripts, repo structure, agent docs |
| **ai** | `ai/` | LLM files, agent packaging, skills sync |

### Placement path
```
operations/scripts/<type>/<concern>/<niche>/<script-name>.js
```

### Required JSDoc header (11 tags, strict order)
```
@script, @type, @concern, @niche, @purpose, @description, @mode, @pipeline, @scope, @usage, @policy
```

---

## Before writing ANY file

1. Determine the category using the decision questions (components) or type+concern (scripts)
2. Check the target folder exists — `ls` the directory
3. If unsure, state: "This component does [X]. That makes it a [category] because [reasoning]. Placing at [path]. Confirm?"
4. Never place files based on name pattern-matching. Always reason from what the component/script DOES.

---

## Canonical sources (read for full detail)

- Components: `workspace/plan/active/COMPONENT-GOVERNANCE/component-framework-canonical.md`
- Scripts: `workspace/plan/active/SCRIPT-GOVERNANCE/script-framework.md`
- Repo structure: `workspace/plan/active/REPO-STRUCTURE-GOV/folder-structure.md`
