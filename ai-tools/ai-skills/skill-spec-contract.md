# Skill Spec Contract

## Purpose

This document is the central documentation contract for governed skill artifacts under `ai-tools/ai-skills/`. It defines the canonical frontmatter schema, the validation rules enforced by `operations/tests/unit/skill-docs.test.js`, and the transition contract for moving from the older template/local/export model to the newer canonical/adapters/generated architecture.

This repo's skill schema is a conforming extension of the [agentskills.io open standard](https://agentskills.io/specification) (Linux Foundation / Agentic AI Foundation, December 2025). All standard fields are used as-is. Repo-specific scalar extensions remain inside the `metadata` map. Relationship fields that require lists are defined as optional top-level fields during migration.

## Layer Map

| Layer | File | Purpose |
| --- | --- | --- |
| Canonical template | `ai-tools/ai-skills/templates/*.template.md` | Source-of-truth skill definitions used by sync and export tooling. |
| Local synced skill | `ai-tools/ai-skills/*/SKILL.md` | Governed checked-in skill artifacts used directly from this repository. |
| Generated export | `ai-tools/agent-packs/skills/*/SKILL.md` | Generated portable export emitted from canonical inputs. |
| Documentation contract | `ai-tools/ai-skills/skill-spec-contract.md` | Canonical contract for required fields, validation rules, and migration expectations. |
| Architecture reference | `workspace/plan/active/AI-TOOLS-GOVERNANCE/structure.md` | Canonical architecture, taxonomy, and migration rules for the governed skill system. |
| Enforcement suite | `operations/tests/unit/skill-docs.test.js` | Automated validator that blocks incomplete or inconsistent governed skill artifacts. |

## Invocation

Load `ai-tools/ai-skills/skill-docs/SKILL.md` whenever a task creates a new governed skill, edits an existing governed skill, or changes the canonical template contract. Run `node operations/tests/unit/skill-docs.test.js` before committing any governed skill or contract change.

## Canonical Field Contract

Governed skill artifacts are currently limited to two authoring surfaces:

- `ai-tools/ai-skills/*/SKILL.md`
- `ai-tools/ai-skills/templates/*.template.md`

Generated exports under `ai-tools/agent-packs/skills/*/SKILL.md` are derived outputs, not authoring surfaces.

### Standard fields (agentskills.io base)

Required for every governed skill artifact:

| Field | Required | Rules |
| --- | --- | --- |
| `name` | Yes | Unique kebab-case identifier matching `^[a-z0-9][a-z0-9-]*$`. Must match parent directory name or template stem. |
| `description` | Yes | Plain-English description between 20 and 100 words. Must cover both what the skill does and when to use it. |
| `metadata` | Yes | YAML map of string keys to string values. The sole scalar extension point per the agentskills.io spec. |

Optional standard fields:

| Field | Required on | Rules |
| --- | --- | --- |
| `license` | Optional on both | License name or reference to a bundled license file. |
| `compatibility` | Optional on both | Max 500 chars. Only include if the skill has environment requirements. |
| `allowed-tools` | Optional on both | Space-delimited list of pre-approved tools. Experimental. |

### Repo scalar extensions (inside `metadata`)

All scalar repo-specific fields live inside the `metadata` map. Values must be strings.

| Key | Required on | Rules |
| --- | --- | --- |
| `metadata.version` | Required on both | Semver-like string matching `^[0-9]+\.[0-9]+(?:\.[0-9]+)?$`. Bump when frontmatter or skill body changes. |
| `metadata.category` | Required on both | Compatibility field for the current exported/catalogued system. One of: `audit`, `authoring`, `content-pipeline`, `governance`, `review-pipeline`, `meta`, `process`. |
| `metadata.tier` | Required on templates; optional on local skills | `"1"` = single-command skill; `"2"` = multi-step workflow skill. |
| `metadata.type` | Optional in migration | One of: `atomic`, `dispatcher`, `adapter`, `governance`, `reference`. |
| `metadata.concern` | Optional in migration | One of: `review`, `research`, `authoring`, `repo-ops`, `validation`, `migration`, `release`, `agent-runtime`. |
| `metadata.scope` | Optional in migration | One of: `repo`, `agent`, `platform`, `generated`, `personal-global`. |
| `metadata.status` | Optional in migration | One of: `active`, `experimental`, `generated`, `deprecated`, `retired`, `draft`. `draft` is a legacy compatibility value that should migrate toward `experimental` or `active`. |
| `metadata.layer` | Optional in migration | One of: `canonical`, `adapter`, `generated`, `global-platform`, `legacy`. |

Migration rule:

- Existing governed skills may omit the newer taxonomy keys until they are touched.
- New or substantially rewritten governed skills should add the newer taxonomy keys when practical.
- `metadata.category` stays required until the current generator/export stack no longer depends on it.

### Relationship fields (top-level)

These fields are optional during migration because they carry list semantics that do not fit cleanly into the `metadata` string-to-string map.

| Field | Required on | Rules |
| --- | --- | --- |
| `source_of_truth` | Optional on both | String or non-empty array of strings naming the canonical source path or surface. |
| `consumed_by` | Optional on both | Non-empty array of strings naming adapters, packs, or runtime consumers. |
| `dispatches` | Optional on both; expected on dispatcher skills | Non-empty array of atomic skill or workflow identifiers. |
| `aliases` | Optional on both | Non-empty array of compatibility names or legacy entrypoints. |

Dispatcher rule:

- If `metadata.type` is `dispatcher`, `dispatches` should be present and non-empty.

### Template-only top-level fields

These fields apply only to `templates/*.template.md` and are invalid on local `SKILL.md` files:

| Field | Required on | Rules |
| --- | --- | --- |
| `primary_paths` | Templates only | Non-empty array of canonical repo paths used by the workflow. |
| `primary_commands` | Templates only | Non-empty array of repository-backed commands for the workflow. |

### Compatibility mapping

`metadata.category` remains the compatibility bridge to the current skill/export system. Map it to the new taxonomy as follows:

| Existing `metadata.category` | New default `metadata.type` | New default `metadata.concern` |
| --- | --- | --- |
| `audit` | `atomic` | `research` |
| `authoring` | `atomic` | `authoring` |
| `content-pipeline` | `dispatcher` | `authoring` |
| `governance` | `governance` | `repo-ops` |
| `review-pipeline` | `dispatcher` | `review` |
| `meta` | `governance` or `dispatcher` | `agent-runtime` or `repo-ops` |
| `process` | `dispatcher` or `governance` | `repo-ops` or `agent-runtime` |

### Frontmatter examples

**Local SKILL.md (compatibility-only minimum):**

```yaml
---
name: my-skill
description: >-
  What this skill does and the problems it solves. Use when performing X,
  handling Y, or addressing Z in the repository.
metadata:
  version: "1.0"
  category: governance
---
```

**Local SKILL.md (migration-aware):**

```yaml
---
name: review-fix
description: >-
  Turn review findings into scoped fixes and validation steps. Use when review
  comments, audit findings, or editorial defects need a repeatable execution path.
metadata:
  version: "1.1"
  category: review-pipeline
  type: dispatcher
  concern: review
  scope: repo
  status: active
  layer: canonical
source_of_truth:
  - ai-tools/ai-skills/templates/NN-review-fix.template.md
consumed_by:
  - claude
  - codex
dispatches:
  - docs-review-packet-generation
  - docs-review-fix-execution
aliases:
  - review-fix-execution
---
```

**Template (all currently required operational fields):**

```yaml
---
name: my-skill
description: >-
  What this skill does and the problems it solves. Use when performing X,
  handling Y, or addressing Z in the repository.
metadata:
  version: "1.0"
  category: governance
  tier: "1"
  type: atomic
  concern: repo-ops
  scope: repo
  status: active
  layer: canonical
primary_paths:
  - "path/to/relevant/file"
primary_commands:
  - "node operations/scripts/validators/..."
---
```

### Cross-reference policy

- Only repo-root or relative markdown paths under `ai-tools/ai-skills/` are treated as governed references.
- References must resolve to existing markdown files.
- A governed skill artifact must not reference itself.
- Circular references across governed skill artifacts are forbidden.
- Generic references such as root `README.md` are outside this contract unless they resolve under `ai-tools/ai-skills/`.

## Validation Rules

Blocking failures:

- Missing `name`, `description`, or `metadata`.
- Invalid `name` format.
- `description` under 20 words.
- `metadata` is not a YAML map.
- Missing `metadata.version` or invalid version format.
- Missing `metadata.category` or value not in the allowed enum.
- `metadata.tier` present but not `"1"` or `"2"`.
- Template missing `metadata.tier`.
- Optional taxonomy fields present with invalid enum values.
- `dispatches` present but not a non-empty string array.
- `consumed_by` present but not a non-empty string array.
- `aliases` present but not a non-empty string array.
- `source_of_truth` present but not a string or non-empty string array.
- Dispatcher skill declares `metadata.type: dispatcher` without `dispatches`.
- Template missing `primary_paths` or `primary_commands`.
- Local skill has template-only field (`primary_paths` or `primary_commands`).
- Missing required sections in this contract document.
- Governed reference path does not exist.
- Self-reference to the current governed skill artifact.
- Circular reference graph across governed skill artifacts.

Warnings:

- `description` over 100 words.
- File content changes in git diff without a matching `version:` diff (inside `metadata:`).
- `dispatches` is present on a skill that does not declare `metadata.type: dispatcher`.

## Authoring Notes

- Sync and export tooling must preserve canonical logic exactly, apart from generated runtime wrappers or manifest files.
- When the contract changes, update the templates, local skill artifacts, validator, and sync/export tests in the same change where practical.
- `metadata` values must be strings. Use quoted strings for version (`"1.0"`) and tier (`"1"`, `"2"`).
- Canonical logic should exist once, agent wrappers may exist many times, and generated outputs must never become the de facto source of truth.
