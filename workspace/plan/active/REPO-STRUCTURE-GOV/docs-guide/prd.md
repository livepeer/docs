---
title: docs-guide/ PRD
status: active
owner: REPO-STRUCTURE-GOV
created: 2026-03-21
---

# docs-guide/ — Product Requirements

---

## Aims

`docs-guide/` is the internal operating manual for this repository.

It exists to answer four questions anyone working in this repo should be able to answer quickly:

1. **How does this repo work?** — what systems are in place, what's generated, what's manual
2. **What are the rules?** — what you must and must not do; what gates exist; what's protected
3. **What tools are available?** — CLI, dev tooling, AI tooling, authoring aids
4. **How do I contribute?** — how to work here safely and consistently

It is not public documentation. It is not a user guide. It is the source of truth for people and agents *building and maintaining* the repo.

---

## Audience

| Audience | Context | Frequency |
|----------|---------|-----------|
| **New contributors** | First time in the repo; need to understand where things are and how to work safely | One-time orientation, then occasional reference |
| **Docs team / maintainers** | Day-to-day authoring, governance decisions, policy updates | Daily |
| **AI agents** (Claude, Codex, Cursor, Windsurf) | Machine-read governance rules, path constraints, tool references, naming patterns | Every session |
| **Repo ops / engineers** | Understanding automation pipelines, script outputs, CI workflows, enforcement gates | As-needed when touching infra |

---

## Needs by Audience

### New contributors
- A single entry point that orients them to the repo without having to read code
- Clear "how to contribute" guidance — what the rules are, where not to tread
- A way to discover what tools exist and how to use them
- No dead ends — every link should lead somewhere real

### Docs team / maintainers
- Up-to-date inventory of all policies in one place, clearly separated from models/frameworks
- Clear governance on what's generated vs. hand-maintained and who owns what
- Tools and templates that make authoring faster
- A record of decisions so the same debate doesn't happen twice

### AI agents
- Machine-readable governance rules at known, stable paths
- Explicit constraints on what may be changed and what is protected
- Naming conventions and structural patterns to follow when generating new content
- No ambiguity between enforcement rules (policies) and guidance (frameworks)

### Repo ops / engineers
- Maps of what generates what and where output files live
- Enforcement points documented so they know what blocks commits and PRs
- Config file references in one place

---

## Success Criteria

- Any new contributor can orient themselves to the repo using `docs-guide/` alone, without asking anyone
- Any AI agent can read `docs-guide/policies/` and correctly infer what it may and may not do
- Every enforcement point in the repo is documented in one place
- No dead links, no stale nav entries, no 0-byte stubs
- Generated files are visibly distinct from hand-maintained files
- The section a page belongs in is unambiguous — there is only one right home for any given type of page

---

## Constraints

- **Not nav content** — `docs-guide/` pages are internal-only; they must not be surfaced to end users of the public docs site
- **Not a scratch pad** — working notes, drafts, and research belong in `_workspace/`, not in nav sections
- **Not a code repository** — no scripts, no executable files; these belong in `tools/` or `operations/`
- **Catalog section is generated-only** — `catalog/` must not contain hand-maintained pages (the `ai-tools.mdx` exception is being resolved)
- **Policies are enforced, not advisory** — if something is in `policies/` it must have an owner, a must/must-not statement, and an enforcement mechanism or explicit note that enforcement is pending
- **Frameworks are not policies** — if it doesn't have enforcement, it belongs in `frameworks/`, not `policies/`

---

## Canonical Folder Structure

Derived from the aims and audience needs above.

```
docs-guide/
│
├── source-of-truth-guide.mdx    ← section entry point and nav map (root; intentional exception)
├── docs-glossary.md              ← internal terminology reference (move to features/ — pending)
│
├── catalog/                      ← auto-generated outputs only; never edit manually
│   ├── components-catalog.mdx    ← generated: generate-docs-guide-components-index.js
│   ├── pages-catalog.mdx         ← generated: generate-docs-guide-pages-index.js
│   ├── scripts-catalog.mdx       ← generated: script-docs.test.js
│   ├── templates-catalog.mdx     ← generated: generate-docs-guide-indexes.js
│   ├── ui-templates.mdx          ← generated: generate-ui-templates.js
│   └── workflows-catalog.mdx     ← generated: generate-docs-guide-indexes.js
│
├── contributing/                 ← how to work in this repo safely and consistently
│   ├── contributing.mdx          ← main contributor guide (will absorb contribute/ root folder)
│   └── mintlify.mdx              ← Mintlify-specific development guide
│
├── features/                     ← what the repo can do; major systems and automation surfaces
│   ├── ai-features.mdx
│   ├── architecture-map.mdx
│   ├── automations.mdx
│   ├── data-integrations.mdx
│   ├── feature-map.mdx
│   ├── ui-system.mdx
│   └── visual-explainer-workflows.mdx
│
├── frameworks/                   ← decision models, structural guides, improvement workflows
│   │                               (how to think about something — no enforcement language)
│   ├── component-governance.mdx
│   ├── content-system.mdx
│   ├── page-taxonomy-framework.mdx
│   └── research-skill-workflow.mdx
│
├── policies/                     ← enforced rules with must/must-not + enforcement mechanism
│   ├── agent-governance-framework.mdx
│   ├── audit-system-overview.mdx
│   ├── cleanup-quarantine-policy.mdx
│   ├── component-layout-decisions.mdx
│   ├── docs-guide-structure-policy.mdx
│   ├── generated-artifact-and-hook-governance.mdx
│   ├── infrastructure-principles.mdx
│   ├── ownerless-governance.mdx
│   ├── quality-gates.mdx
│   ├── root-allowlist-governance.mdx
│   ├── script-governance.mdx
│   ├── skill-pipeline-map.mdx      ← candidate for move to features/ (not an enforced rule)
│   ├── snippets-assets-policy.mdx
│   ├── source-of-truth-policy.mdx
│   ├── v2-folder-governance.mdx
│   └── workspace-lifecycle-policy.mdx
│
├── repoOps/                      ← operational reference: configs, enforcement maps, secrets
│   ├── config/
│   │   └── repo-config-map.mdx
│   ├── maps/
│   │   └── enforcement-map.mdx
│   └── secrets/
│       └── solutions-secrets.mdx
│
├── tooling/                      ← tools that contributors use; CLI, dev tools, authoring aids
│   ├── reference-maps/
│   │   └── icon-map.mdx
│   ├── ai-tools.mdx
│   ├── content-brief-template.md
│   ├── dev-tools.mdx
│   ├── lpd-cli.mdx
│   ├── lpd-mdx-preview.mdx
│   ├── research-review-packet-plan-template.md
│   ├── research-to-implementation-plan-template.md
│   └── review-packet-plan-template.md
│
└── _workspace/                   ← internal design work, drafts, archive (not in nav)
    ├── archive/
    └── drafts/
```

**Root data files** (generated by scripts, live at docs-guide/ root for now):
- `component-registry.json`
- `component-registry-schema.json`
- `component-usage-map.json`

These are generated artifacts. Moving them requires updating the generator scripts. Deferred pending a decision on whether they should live here or in `snippets/data/`.

---

## Open Decisions

| Item | Decision needed | Impact |
|------|----------------|--------|
| `docs-glossary.md` | Move to `features/glossary.mdx`? Rename `.mdx`? Add to nav? | Low |
| `skill-pipeline-map.mdx` | In `policies/` (currently) or move to `features/`? Not an enforced rule. | Low |
| 3 JSON data files at root | Stay here or move to `snippets/data/`? Requires generator updates to move. | Medium |
| `contribute/` root folder merge | Absorb into `contributing/` here — decision locked, not yet executed | Medium |
| `tooling/` template audit | 3 overlapping templates — audit before removing any | Low |
