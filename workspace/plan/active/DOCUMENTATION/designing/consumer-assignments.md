---
title: Consumer Field — Proposed Assignments
status: draft — pending Phase 1 approval
created: 2026-03-22
---

# `consumer` Field — Proposed Assignments for All docs-guide Pages

> **Field name**: `consumer` (replaces proposed `audience` — avoids clash with v2/ content frontmatter)
> **Type**: array
> **Values**: `human` | `agent` | `automation`
> **Format**: YAML frontmatter (for `.mdx` and `.md` files); registry-only for `.json` files

Review notes below each section. Flag any row for discussion.

---

## `docs-guide/source-of-truth-guide.mdx` (root landing)

| File | Proposed `consumer` | Rationale | Flag? |
|---|---|---|---|
| `source-of-truth-guide.mdx` | `[human, agent]` | Agents use it for canonical path lookup; humans use it as nav. No automation consumes it directly. | — |

---

## `policies/`

| File | Proposed `consumer` | Rationale | Flag? |
|---|---|---|---|
| `source-of-truth-policy.mdx` | `[agent]` | Defines canonical path contracts — agents act on this. Humans read it but it's written for machine precision. | Review: some argue `[human, agent]` since humans do reference it |
| `agent-governance-framework.mdx` | `[agent]` | Pure agent instruction file. Agents are expected to follow rules here. | — |
| `skill-pipeline-map.mdx` | `[agent]` | Agent pipeline routing rules. | — |
| `generated-artifact-and-hook-governance.mdx` | `[human, agent]` | Hook rules affect both contributors (who trigger them) and agents (who must understand gate behaviour). | — |
| `quality-gates.mdx` | `[human, agent]` | Agents gate on this; humans need to understand gates before submitting work. | — |
| `v2-folder-governance.mdx` | `[human, agent]` | Agents check paths; humans author pages. Both need the contract. | — |
| `root-allowlist-governance.mdx` | `[human, agent]` | Agents check root; humans add new root entries. | — |
| `ownerless-governance.mdx` | `[human, agent]` | Framework that governs how surfaces are registered — both need to understand it. | — |
| `script-governance.mdx` | `[human, agent]` | Scripts affect both human workflows and agent automation paths. | — |
| `component-layout-decisions.mdx` | `[human]` | Design decisions for page authors. Agents don't make layout choices. | Review: could be `[human, agent]` if agents ever select layouts |
| `audit-system-overview.mdx` | `[human, agent]` | Agents run audits; humans interpret results and act on them. | — |
| `cleanup-quarantine-policy.mdx` | `[human, agent]` | Deletion/quarantine rules — both create and remove files. | — |
| `workspace-lifecycle-policy.mdx` | `[human, agent]` | Workspace TTL rules — both create workspace files. | — |
| `docs-guide-structure-policy.mdx` | `[human, agent]` | Folder and naming rules — both add docs-guide pages. | — |
| `infrastructure-principles.mdx` | `[human, agent]` | Foundational principles — both should understand repo infrastructure constraints. | **Review**: is this actually read by agents in practice, or just humans? Could be `[human]`. |
| `snippets-assets-policy.mdx` | `[human, agent]` | Asset reference rules — both add asset imports. | — |

---

## `frameworks/`

| File | Proposed `consumer` | Rationale | Flag? |
|---|---|---|---|
| `component-governance.mdx` | `[human, agent]` | Both work with components. Agents use it for classification; humans use it for authoring decisions. | — |
| `content-system.mdx` | `[human, agent]` | **Upgrading from previous `human` proposal.** Agents classify content by type and use the content system model — e.g. when running content pipeline passes. | **Was `human` — changed. Review.** |
| `page-taxonomy-framework.mdx` | `[human, agent]` | **Upgrading from previous `human` proposal.** Agents use pageType taxonomy when mapping, auditing, and generating page structure. Used explicitly in content pipeline skills. | **Was `human` — changed. Review.** |
| `research-skill-workflow.mdx` | `[human, agent]` | Research workflow used by both agent skills and human researchers. | — |

---

## `features/`

| File | Proposed `consumer` | Rationale | Flag? |
|---|---|---|---|
| `feature-map.mdx` | `[human, agent]` | Repo capabilities map — agents need it for system awareness; humans browse it for orientation. | — |
| `architecture-map.mdx` | `[human, agent]` | Architecture reference — both need to understand system layout. | — |
| `automations.mdx` | `[human, agent]` | Both trigger and maintain automations. | — |
| `data-integrations.mdx` | `[human, agent]` | Both work with data pipelines. | — |
| `ui-system.mdx` | `[human]` | Visual design reference for page authors. Agents don't make UI design decisions. | **Review**: could argue `[human, agent]` if agents ever select UI patterns |
| `visual-explainer-workflows.mdx` | `[human]` | Human-operated visual tools (Mermaid, diagrams). | — |
| `ai-features.mdx` | `[human, agent]` | AI feature overview — once populated. Both need to know what AI features exist in the repo. | Note: currently a stub. |

---

## `tooling/`

| File | Proposed `consumer` | Rationale | Flag? |
|---|---|---|---|
| `lpd-cli.mdx` | `[human, agent]` | Both invoke `lpd` commands. | — |
| `dev-tools.mdx` | `[human]` | Dev environment setup — human-only concern. | — |
| `ai-tools.mdx` | `[human, agent]` | Both need AI tooling reference. | — |
| `lpd-mdx-preview.mdx` | `[human]` | Local preview workflow — human-only. | — |
| `reference-maps/icon-map.mdx` | `[human]` | Visual icon reference for human authors. | — |

---

## `contributing/`

| File | Proposed `consumer` | Rationale | Flag? |
|---|---|---|---|
| `contributing.mdx` | `[human]` | Human contributor onboarding and workflow. | — |
| `mintlify.mdx` | `[human]` | Mintlify local setup — human-only. | — |

---

## `catalog/` (generated files)

| File | Proposed `consumer` | Rationale | Flag? |
|---|---|---|---|
| `scripts-catalog.mdx` | `[human, agent]` | Generated script inventory — agents use for awareness; humans browse. | — |
| `components-catalog.mdx` | `[human, agent]` | Generated component inventory — same. | — |
| `workflows-catalog.mdx` | `[human, agent]` | Generated workflow inventory — same. | — |
| `templates-catalog.mdx` | `[human, agent]` | Generated template inventory — same. | — |
| `pages-catalog.mdx` | `[human, agent]` | Generated pages inventory — same. | — |
| `ui-templates.mdx` | `[human]` | Author reference for template selection — human-browsed. | — |

---

## Non-mdx files (registry-only — no frontmatter)

These files are described in `documentation-catalog.mdx`, not via frontmatter.

| File | Proposed `consumer` | Notes |
|---|---|---|
| `component-registry.json` | `[automation]` | Read by generator scripts — pure data contract |
| `component-registry-schema.json` | `[automation]` | Schema definition — read by validators |
| `component-usage-map.json` | `[automation]` | Read by catalog generators |
| `docs-glossary.md` | `[human, agent]` | Internal terminology reference. `.md` → can use frontmatter but is not Mintlify-served. Format decision pending (see plan.md Q6). |

---

## Summary counts

| `consumer` value | Count |
|---|---|
| `[agent]` only | 3 |
| `[human]` only | 9 |
| `[human, agent]` | 26 |
| `[automation]` only | 3 (JSON, registry-only) |

---

## Open decisions flagged above

| Row | Question |
|---|---|
| `source-of-truth-policy.mdx` | `[agent]` or `[human, agent]`? |
| `component-layout-decisions.mdx` | `[human]` or `[human, agent]`? |
| `infrastructure-principles.mdx` | `[human, agent]` or `[human]`? |
| `content-system.mdx` | Changed from `human` → `[human, agent]` — confirm |
| `page-taxonomy-framework.mdx` | Changed from `human` → `[human, agent]` — confirm |
| `ui-system.mdx` | `[human]` or `[human, agent]`? |
