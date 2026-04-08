# AI-Skills Folder Structure — Canonical Reference

> **DEPRECATED as canonical location.** The published version lives at `docs-guide/frameworks/ai-tools-governance.mdx`. This file remains as the working draft. Edits here must be synced to the published version.

> Source of truth for the current AI-tools layout, the target canonical/adapters/generated architecture, and the migration rules that keep existing agent entrypoints working while logic is consolidated.

---

## Purpose

This document governs the AI capability system in the repo. It covers:

- the current operational layout under `ai-tools/`
- the target architecture for canonical skills, adapters, generated packs, and registry artifacts
- the shared taxonomy for classifying skills and related AI-governance artifacts
- the migration rules that prevent logic drift across Claude, Codex, Cursor, and Windsurf

The active root remains `ai-tools/` in this phase. A future move into `operations/` may be designed later, but it is not part of the current implementation wave.

---

## Current Active Root

`ai-tools/` remains the governed root for AI skills, rules, registry artifacts, and generated agent packs.

Current operational surfaces:

| Surface | Current path | Role |
|---|---|---|
| Canonical templates | `ai-tools/ai-skills/templates/` | Source-of-truth for portable skill definitions |
| Local skill roots | `ai-tools/ai-skills/*/SKILL.md` | Repo-consumed skill artifacts and local companion references |
| Generated exports | `ai-tools/agent-packs/**` | Generated packs, manifests, and portable skill exports |
| Registry | `ai-tools/registry/**` | Canonical inventory, schema, and coverage metadata |
| Governance docs | `ai-tools/ai-skills/skill-spec-contract.md`, `docs-guide/tooling/ai-tools.mdx` | Human-readable contract and governance guidance |
| Runtime adapters | `AGENTS.md`, `.claude/CLAUDE.md`, `.github/AGENTS.md`, `.cursor/rules/**`, `.windsurf/rules/**`, `.augment/rules/**` | Agent-facing entrypoints that must remain thin |

Transition rule:

- Do not treat the current directory names as the final architecture.
- Do treat the current files as operational surfaces that must keep working during migration.

---

## Target Architecture

This is the target model to document and map toward. It is not a mandatory physical move in this phase.

```text
ai-tools/
├── canonical/
│   ├── skills/
│   ├── references/
│   ├── dispatchers/
│   ├── governance/
│   └── packaging/
├── adapters/
│   ├── claude/
│   ├── codex/
│   ├── cursor/
│   └── windsurf/
├── generated/
│   ├── packs/
│   ├── manifests/
│   └── indexes/
└── registry/
```

Meaning:

| Target layer | What belongs there |
|---|---|
| `canonical/skills` | Atomic, reusable repo-governed skill logic |
| `canonical/references` | Shared references, companion documents, and reusable assets |
| `canonical/dispatchers` | Top-level workflow orchestrators that route atomic skills |
| `canonical/governance` | Contract docs, taxonomy docs, lifecycle rules, and policy documents |
| `canonical/packaging` | Packaging metadata that drives sync/export flows |
| `adapters/` | Thin agent-specific wrappers, registrations, prompts, or runtime glue |
| `generated/` | Generated packs, manifests, and indexes; never hand-edited |
| `registry/` | Canonical machine-readable inventory and governance coverage metadata |

Migration rule:

- Favour in-place documentation and aliasing first.
- Only move files physically when the consumer surface is known and compatibility is preserved.

---

## Classification Model

The skill system now uses a script-like taxonomy with AI-specific additions.

### Type

| Value | Meaning |
|---|---|
| `atomic` | One bounded capability; reusable building block |
| `dispatcher` | Routes or orchestrates a multi-step workflow using atomic skills |
| `adapter` | Agent-specific wrapper, registration, or runtime-facing shim |
| `governance` | Contract, packaging, inventory, validation, or policy surface |
| `reference` | Companion material consumed by skills or adapters but not executable logic |

### Concern

| Value | Meaning |
|---|---|
| `review` | Review packets, change review, contradiction checks, remediation guidance |
| `research` | Fact-finding, source verification, evidence gathering, claim mapping |
| `authoring` | Page writing, copy, structure, IA, and editing guidance |
| `repo-ops` | Repo cleanup, handover readiness, governance operations, inventories |
| `validation` | Gate checks, staged verification, browser/link/testing workflows |
| `migration` | Path moves, structural transitions, compatibility sweeps |
| `release` | Shipping, publish readiness, release validation, rollout support |
| `agent-runtime` | Agent-specific runtime, setup, sync, packager, adapter behaviour |

### Scope

| Value | Meaning |
|---|---|
| `repo` | Repo-governed artifact or workflow |
| `agent` | Agent-specific surface consumed in a repo context |
| `platform` | External tool, plugin, or platform-owned capability |
| `generated` | Generated output only |
| `personal-global` | User-local or machine-local surface outside repo governance |

### Status

| Value | Meaning |
|---|---|
| `active` | Current governed surface |
| `experimental` | Active but not yet locked |
| `generated` | Derived output; not hand-authored |
| `deprecated` | Still present for compatibility, slated for retirement |
| `retired` | Historical reference only |

### Layer

| Value | Meaning |
|---|---|
| `canonical` | Source-of-truth logic or policy |
| `adapter` | Consumer-facing wrapper pointing at canonical logic |
| `generated` | Derived output from canonical inputs |
| `global-platform` | External or user-local capability outside repo governance |
| `legacy` | Older surface kept only for transition or reference |

---

## Compatibility Mapping

`metadata.category` remains required on existing governed skills for compatibility with current tests, manifests, and exports. During migration, map the current category model to the new taxonomy rather than deleting it prematurely.

| Existing `metadata.category` | New default `type` | New default `concern` |
|---|---|---|
| `audit` | `atomic` | `research` |
| `authoring` | `atomic` | `authoring` |
| `content-pipeline` | `dispatcher` | `authoring` |
| `governance` | `governance` | `repo-ops` |
| `review-pipeline` | `dispatcher` | `review` |
| `meta` | `governance` or `dispatcher` | `agent-runtime` or `repo-ops` |
| `process` | `dispatcher` or `governance` | `repo-ops` or `agent-runtime` |

Rule:

- Keep `metadata.category` until generators, manifests, registry reports, and exports no longer depend on it.
- Prefer the new fields for architecture decisions, classification, and migration planning.

Legacy compatibility note:

- `metadata.status: draft` remains valid on older workflow skills during migration.
- New or rewritten skills should prefer `experimental` or `active`.

---

## Artifact Rules by Layer

### Canonical

- Canonical logic must exist exactly once.
- Templates and local repo skill bodies must not diverge semantically.
- Dispatcher definitions belong here, not in agent adapters.

### Adapter

- Adapters may exist many times.
- Adapters must not own unique workflow logic or policy.
- Adapters may add discovery wording, invocation syntax, or runtime-specific guidance only.

### Generated

- Generated outputs are never edited by hand.
- Generated manifests and exported packs must derive from canonical data.
- Drift between canonical and generated surfaces is a blocking quality issue.

### Global / Platform

- Global user-local skills, plugins, or platform-owned capabilities may be documented.
- They are not part of repo-governed canonical logic unless explicitly imported and governed.

---

## Dispatcher Model

Dispatcher skills are first-class governed artifacts.

Dispatcher rules:

- Dispatchers orchestrate; they do not own unique atomic logic.
- A dispatcher must declare ordered child capabilities, required inputs, validation gates, and output artifacts.
- Agent-specific execution differences belong in adapters, not in the canonical dispatcher.

### Phase 1 dispatcher family

| Dispatcher | Purpose | Current candidate inputs |
|---|---|---|
| `research-review-packet` | Gather evidence, contradictions, claim maps, and review packet outputs | `docs-source-verification`, `docs-impact-propagation`, `docs-change-review`, `docs-research-packet-generation` |
| `review-fix` | Turn review findings into scoped fixes with validation | `docs-review-packet-generation`, `docs-review-fix-execution`, `staged-test-suite-runner`, `precommit-failure-triage` |
| `handover-readiness` | Produce confidence signals for repo handoff | `rubric-static-review`, `structure-and-allowlist-guardrails`, `staged-test-suite-runner`, `docs-status-table-generation` |
| `page-ship` | Take a docs page from verified draft to shippable state | `page-content-research-review`, `docs-copy`, `docs-ia-route-placement`, `mintlify-authoring-style-compliance`, `v2-link-audit-runbook`, `v2-browser-sweep-runbook` |
| `repo-cleanup-handover` | Consolidate repo cleanup and handover outputs | `repo-audit-orchestrator`, `script-header-and-index-sync`, `structure-and-allowlist-guardrails`, `rubric-static-review` |

In this phase, these dispatcher families are governed targets and migration anchors even if every corresponding skill folder has not yet been carved out physically.

---

## Migration Rules

### Keep in place now

- `ai-tools/ai-skills/templates/**`
- `ai-tools/ai-skills/*/SKILL.md`
- `ai-tools/agent-packs/**`
- existing agent-native adapter files

### Introduce as architecture, not physical churn

- canonical/adapters/generated/registry separation
- dispatcher families
- script-like classification fields
- compatibility mapping from legacy category values

### Do not do in this phase

- move `ai-tools/` into `operations/`
- break `.claude/skills` discovery or other agent-native entrypoints
- hand-edit generated pack files as if they are canonical

### Alias policy

- Old entrypoints stay operational until their replacements are live and documented.
- Compatibility wrappers are acceptable during migration.
- Silent divergence is not acceptable.

---

## Validation Expectations

Any change to the governed skill system should keep these surfaces aligned:

- `workspace/plan/active/AI-TOOLS-GOVERNANCE/structure.md`
- `ai-tools/ai-skills/skill-spec-contract.md`
- `docs-guide/tooling/ai-tools.mdx`
- `operations/tests/unit/skill-docs.test.js`
- inventory or architecture audit documents that describe the active shape

Validation goal:

- the same repo-governed workflow should be discoverable from multiple agent adapters without duplicating canonical logic
