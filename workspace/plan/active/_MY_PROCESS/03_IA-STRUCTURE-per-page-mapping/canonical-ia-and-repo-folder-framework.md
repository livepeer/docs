# Canonical IA and Repo Folder Framework

## Purpose and Authority

This document is the canonical working framework for section naming, route placement, and repo folder structure across `v2/**`.

It exists to make three things explicit:

1. The default IA model for operational tabs
2. The folder contract that must exist on disk when `docs.json` adopts a section pattern
3. The approved exception model for tabs that do not follow the full operational stack

### Authority order

When sources conflict, interpret this framework in the following order:

1. `docs.json` live structure
2. current `v2/**` folder reality
3. `docs-guide/policies/v2-folder-governance.mdx`
4. `workspace/plan/active/CONTENT-WRITING/Prompts/Previous Prompts Used/derive-ia/08a-ia-per-tab.md`
5. `v2/orchestrators/_workspace/canonical/Frameworks.mdx`
6. older design-spec and research notes under `docs-guide/_workspace/**` and `workspace/plan/**`

Where older framework drafts conflict with live approved restructures, live `docs.json` plus approved restructure intent wins.

## Default Tab Archetype

The default operational tab model is:

```text
v2/<tab>/
  portal.mdx
  navigator.mdx            optional when only one obvious path exists
  index.mdx                generated inventory page
  concepts/
  quickstart/              or get-started/ when approved alias is in use
  setup/                   or build/ when approved alias is in use
  guides/
  resources/
    <root flat files>
    knowledge-hub/
    compendium/
    reference/
  _workspace/
  _design/                 optional, only when intentionally used
```

### Reader logic

- The main persona path is served by `quickstart` plus `setup` or `build`
- Secondary personas, adjacent journeys, and deeper operating paths live in `guides`
- Lookup and discovery content lives in `resources`
- Mental models, architecture, and decision-enabling explanation live in `concepts`
- `index.mdx` is a generated section inventory, not the primary IA decision surface

### Default journey model

| Lane | Reader job | Default reader question |
| --- | --- | --- |
| `portal.mdx` | tab entry | Where am I and what is this tab for? |
| `navigator.mdx` | path selection | Which route matches my goal? |
| `concepts/` | orientation and evaluation | What is this, how does it work, and how should I think about it? |
| `quickstart/` | first success | How do I get to a working first outcome fast? |
| `setup/` or `build/` | full activation | How do I fully set this up or implement it properly? |
| `guides/` | secondary and operational journeys | How do I handle this real-world use case, decision, or advanced path? |
| `resources/` | lookup and discovery | What exact reference, directory, or external resource do I need right now? |

## Section Contracts

### Root files

| File | Contract |
| --- | --- |
| `portal.mdx` | Primary tab entry page with tab framing, value proposition, and major route cards |
| `navigator.mdx` | Route-disambiguation page used when a tab has multiple valid entry journeys, personas, or outcome paths |
| `index.mdx` | Generated index of routed pages for the section; not a planning, IA, or narrative page |

### `concepts/`

`concepts/` contains:

- mental models
- role definitions
- system architecture
- mechanics and economics
- terminology primers
- decision-enabling comparisons and orientation

`concepts/` must not contain:

- step-by-step setup procedures
- operational runbooks
- dense lookup tables that belong in reference
- FAQ or troubleshooting collections

### `quickstart/`

`quickstart/` is the shortest path to first success for the tab's main persona.

It should:

- optimise for time-to-first-success
- assume the reader wants a guided happy path
- link forward into `setup/`, `build/`, or `guides/` for the full path

It should not absorb every setup edge case, governance path, or secondary persona journey.

### `setup/`

`setup/` is the full installation and activation lane for infrastructure-oriented tabs.

It contains:

- requirements
- installation
- configuration
- activation and connection
- testing and verification
- monitor/operate handoff when setup requires it

### `build/`

`build/` is an approved alias for the full activation lane when the tab's primary job is composing workflows, integrations, SDK-driven implementations, or pipelines rather than installing node infrastructure.

Use `build/` only when that tab's primary activation job is implementation, not node setup.

### `guides/`

`guides/` contains all non-primary journeys and deeper reader jobs, including:

- governance
- treasury
- opportunities
- operations
- advanced practice
- tutorials
- strategic or operational decision support
- secondary persona paths

Guide groups should be organised by reader job, operating concern, or journey, not vague buckets such as "misc", "other", or "more".

### `resources/`

`resources/` is a fixed four-part container:

```text
resources/
  faq.mdx / glossary.mdx / other high-frequency flat lookup pages
  knowledge-hub/
  compendium/
  reference/
```

#### `resources/` root flat files

Use for only the highest-frequency lookup pages, typically:

- FAQ
- glossary
- closely related glossary variants when intentionally separate

Do not use the root of `resources/` as a flat dumping ground.

### `resources/knowledge-hub/`

For curated discovery and public ecosystem material:

- community guides
- external tools
- showcases
- reading lists
- help channels
- public ecosystem resources

This is discovery-oriented, not formal specification.

### `resources/compendium/`

For structured lookup collections that are not strict technical specifications:

- exchanges
- RPC lists
- dashboards
- directories
- ecosystem maps
- operator lists
- CLI collections where the user is browsing a catalogue rather than a formal spec

### `resources/reference/`

For strict technical or formal lookup content:

- APIs
- SDKs
- flags and config references
- contract addresses
- protocol parameters
- technical architecture specs
- technical system reference pages

## Repo Folder Rules

### Publishable lanes

Allowed publishable section-root files:

- `index.mdx`
- `portal.mdx`
- `navigator.mdx`

Publishable user-facing content must live only in the public section tree that is represented in `docs.json`.

### Non-publishable lanes

- `_workspace/` is the default non-publishable planning and working lane
- `/_design` may exist only when that tab intentionally uses it and the content is genuinely design/process material
- If a tab does not intentionally maintain `/_design`, use `_workspace/` instead

### Sync rule

`docs.json` and on-disk folders must match.

Any path migration must update in the same change:

- `docs.json`
- scoped navigation mirrors
- generated indexes and route inventories
- path-dependent scripts, tests, snippets, and reference maps

### Anti-patterns

The following are structural anti-patterns:

- flat resource dumps at `resources/`
- duplicate parallel trees such as `technical-references/` when `resources/reference/` is the canonical home
- planning notes at section root
- tutorials inside `resources/`
- mixed conceptual and procedural pages in the same folder without a clear lane
- public pages in `_workspace/`
- hidden structural drift where `docs.json` no longer matches the repo tree

## Approved Exception Matrix

This framework is a default standard with approved exceptions. Tabs may diverge only when the exception is explicit and justified.

| Tab | Classification | Approved structure | Notes |
| --- | --- | --- | --- |
| `About` | custom conceptual tab | `portal.mdx`, `navigator.mdx`, `concepts/`, `protocol/`, `network/`, optional `guides/`, `resources/` | No `quickstart/` or `setup/`; primary job is conceptual orientation, protocol understanding, and network explanation |
| `Developers` | operational tab with aliases | `portal.mdx`, `navigator.mdx`, `concepts/`, `get-started/`, `build/`, `guides/`, `resources/` | `get-started/` is the approved quickstart alias; `build/` is the approved full activation lane; opportunities live under `guides/` |
| `Gateways` | closest full-stack model | `portal.mdx`, `navigator.mdx`, `concepts/`, `quickstart/`, `setup/`, `guides/`, `resources/` | Primary reference implementation for the operational tab pattern |
| `Orchestrators` | full-stack model | `portal.mdx`, `navigator.mdx`, `concepts/`, `quickstart/`, `setup/`, `guides/`, `resources/` | Same canonical operational model as Gateways |
| `Delegators` | lighter operational tab | `portal.mdx`, optional `navigator.mdx`, `concepts/`, `delegation/`, `guides/`, `resources/` | `delegation/` is the approved main activation lane; governance and treasury live under `guides/` |
| `Community` | community-routing tab | custom community trees plus `resources/` | Not a full-stack operational tab; should still converge on resource subfolder rules where resources exist |
| `Solutions` | product-anchor tab | product-specific trees under the tab, not the default operational stack | Does not use the default tab vocabulary globally |
| `Resources Hub` | cross-cutting reference hub | cross-cutting concepts/reference/resource structure | Not governed by the full-stack tab pattern |

## Decision Tables

### Placement table

| If the page's job is... | It belongs in... |
| --- | --- |
| explain what something is, how it works, or why it matters | `concepts/` |
| get the main reader to first success fast | `quickstart/` or approved alias |
| complete full installation, activation, or implementation | `setup/` or approved `build/` alias |
| serve a secondary persona or non-primary journey | `guides/` |
| provide a community, ecosystem, or discovery collection | `resources/knowledge-hub/` |
| provide a browseable structured lookup collection | `resources/compendium/` |
| provide strict technical lookup or formal specification | `resources/reference/` |
| answer a high-frequency lookup question like FAQ or glossary | `resources/` root flat files |

### Naming table

| Canonical folder name | Approved alias | When alias is permitted |
| --- | --- | --- |
| `quickstart/` | `get-started/` | When the live tab already uses that naming and it is serving the quickstart job |
| `setup/` | none by default | Use for infrastructure-oriented full setup lanes |
| `setup/` activation lane | `build/` | When the tab's primary activation work is workflow or implementation building rather than infra setup |
| `concepts/` | none by default | Required for conceptual orientation unless the tab is an explicit exception |
| `guides/` | section-specific subgroups inside it | Group by reader job or journey, not by vague miscellaneous categories |
| `resources/knowledge-hub/` | none | Discovery-oriented resource collections only |
| `resources/compendium/` | none | Structured lookup collections only |
| `resources/reference/` | none | Technical or formal lookup only |

### Root-file table

| Situation | Root-file requirement |
| --- | --- |
| Tab has multiple valid reader journeys, personas, or entry paths | include `navigator.mdx` |
| Tab has one obvious path and no meaningful routing ambiguity | `portal.mdx` may be sufficient |
| Tab needs generated route inventory only | keep `index.mdx`, but do not use it as a narrative landing page |

## Every Tab Must Define

Each tab should have an explicit IA statement covering:

- primary audience
- primary activation path
- whether `navigator.mdx` is required
- approved aliases, if any
- whether it follows the default operational model or an approved exception
- what belongs in `concepts/`
- what belongs in `guides/`
- what belongs in each `resources/` subfolder

If a tab cannot answer those questions clearly, its IA is not yet canonical.

## Current Repo Interpretation

### Default standard

The current repo standard for operational tabs is:

- `portal.mdx`
- `navigator.mdx` when route choice exists
- `concepts/`
- one primary activation lane: `quickstart/` plus `setup/` or `build/`
- `guides/` for secondary and deeper journeys
- `resources/` with root flat pages plus `knowledge-hub/`, `compendium/`, and `reference/`

### Practical convergence rule

Use the default standard for all future restructures unless one of the approved exceptions already applies.

When a tab diverges:

1. document the exception
2. explain why it exists
3. ensure `docs.json` and repo folders match
4. avoid creating a second competing pattern

## Sources Used

- `docs.json`
- `docs-guide/policies/v2-folder-governance.mdx`
- `workspace/plan/active/CONTENT-WRITING/Prompts/Previous Prompts Used/derive-ia/08a-ia-per-tab.md`
- `v2/orchestrators/_workspace/canonical/Frameworks.mdx`
- `workspace/plan/active/_MY_PROCESS/03_IA-STRUCTURE-per-page-mapping/ALL-CURRENT-INFORMATION/RESEARCH/ia-structure-research.md`
- live section folder structures under `v2/about`, `v2/developers`, `v2/gateways`, `v2/orchestrators`, `v2/delegators`, `v2/community`, and `v2/resources`
