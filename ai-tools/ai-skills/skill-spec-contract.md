# Skill Spec Contract

## Purpose

This document is the central documentation contract for governed skill artifacts under `ai-tools/ai-skills/`. It defines the canonical frontmatter schema, the validation rules enforced by `tests/unit/skill-docs.test.js`, and the single workflow maintainers must use when creating or editing skill files.

This repo's skill schema is a conforming extension of the [agentskills.io open standard](https://agentskills.io/specification) (Linux Foundation / Agentic AI Foundation, December 2025). All standard fields are used as-is. Repo-specific extensions are placed inside the `metadata` map as the spec prescribes. See `ai-tools/ai-skills/agentskills-io-standard.md` for the full base standard reference.

## Layer Map

| Layer | File | Purpose |
| --- | --- | --- |
| Canonical template | `ai-tools/ai-skills/templates/*.template.md` | Source-of-truth skill definitions used by sync and export tooling. |
| Local synced skill | `ai-tools/ai-skills/*/SKILL.md` | Governed checked-in skill artifacts used directly from this repository. |
| Documentation contract | `ai-tools/ai-skills/skill-spec-contract.md` | Canonical contract for required fields, validation rules, and invocation expectations. |
| Base standard reference | `ai-tools/ai-skills/agentskills-io-standard.md` | agentskills.io spec summary, tool compatibility table, and VS Code notes. |
| Authoring skill | `ai-tools/ai-skills/skill-docs/SKILL.md` | Workflow guidance for creating or editing governed skill artifacts safely. |
| Enforcement suite | `tests/unit/skill-docs.test.js` | Automated validator that blocks incomplete or inconsistent governed skill artifacts. |

## Invocation

Load `ai-tools/ai-skills/skill-docs/SKILL.md` whenever a task creates a new governed skill, edits an existing governed skill, or changes the canonical template contract. Run `node tests/unit/skill-docs.test.js` before committing any governed skill or contract change.

## Canonical Field Contract

Governed skill artifacts are limited to two surfaces:

- `ai-tools/ai-skills/*/SKILL.md`
- `ai-tools/ai-skills/templates/*.template.md`

### Standard fields (agentskills.io base)

Required for every governed skill artifact:

| Field | Required | Rules |
| --- | --- | --- |
| `name` | Yes | Unique kebab-case identifier matching `^[a-z0-9][a-z0-9-]*$`. Must match parent directory name. |
| `description` | Yes | Plain-English description between 20 and 100 words. **Must cover both what the skill does and when to use it.** End with a "Use when: ..." sentence that replaces the old `invoke_when` field. |
| `metadata` | Yes | YAML map of string keys to string values. The sole extension point per the agentskills.io spec. See repo extensions below. |

Optional standard fields:

| Field | Required on | Rules |
| --- | --- | --- |
| `license` | Optional on both | License name or reference to a bundled license file. |
| `compatibility` | Optional on both | Max 500 chars. Only include if the skill has specific environment requirements. |
| `allowed-tools` | Optional on both | Space-delimited list of pre-approved tools. Experimental. |

### Repo extensions (inside `metadata`)

All repo-specific fields live inside the `metadata` map. Values must be strings (the spec defines `metadata` as string-to-string).

| Key | Required on | Rules |
| --- | --- | --- |
| `metadata.version` | Required on both | Semver-like string matching `^[0-9]+\.[0-9]+(?:\.[0-9]+)?$`. Bump when frontmatter or skill body changes. |
| `metadata.category` | Required on both | One of: `audit`, `authoring`, `content-pipeline`, `governance`, `review-pipeline`, `meta`. See taxonomy below. |
| `metadata.tier` | Required on templates; optional on local skills | `"1"` = single-command skill; `"2"` = multi-step workflow skill. String value (not integer). |

Category taxonomy:

| Value | Meaning | Skills |
| --- | --- | --- |
| `audit` | Read-only scan, measure, report | `script-footprint-and-usage-audit`, `docs-quality-and-freshness-audit`, `docs-coverage-and-route-integrity-audit`, `rubric-static-review` |
| `authoring` | Content creation and editing guidance | `page-authoring`, `docs-copy`, `product-thinking` |
| `content-pipeline` | Multi-pass page writing and review pipeline | `content-pipeline-pass-a`, `content-pipeline-pass-b`, `content-pipeline-tab-map` |
| `governance` | Enforce rules, apply standards, manage artifacts | `component-layout-governance`, `generated-mdx-banners-governance`, `style-and-language-homogenizer-en-gb`, `cleanup-quarantine-manager` |
| `review-pipeline` | Multi-step review and fix workflows | `docs-review-packet-generation`, `docs-review-fix-execution` |
| `meta` | Orchestration, packaging, skill self-governance | `repo-audit-orchestrator`, `cross-agent-packager`, `skill-docs` |

### Template-only top-level fields

These fields apply only to `templates/*.template.md` and are invalid on local `SKILL.md` files:

| Field | Required on | Rules |
| --- | --- | --- |
| `primary_paths` | Templates only | Non-empty array of canonical repo paths used by the workflow. |
| `primary_commands` | Templates only | Non-empty array of repository-backed commands for the workflow. |

### Frontmatter example

**Local SKILL.md (minimum):**

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

**Local SKILL.md (with optional tier):**

```yaml
---
name: my-skill
description: >-
  What this skill does and the problems it solves. Use when performing X,
  handling Y, or addressing Z in the repository.
metadata:
  version: "1.1"
  category: review-pipeline
  tier: "2"
---
```

**Template (all required fields):**

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
primary_paths:
  - "path/to/relevant/file"
primary_commands:
  - "node operations/scripts/validators/..."
---
```

### Why `invoke_when` was removed

The agentskills.io standard uses `description` as the sole routing signal — it covers both what the skill does and when agents should activate it. Maintaining a separate `invoke_when` array alongside `description` was redundant and non-standard. The trigger phrases from the old `invoke_when` arrays are now incorporated into each skill's `description` field as "Use when: ..." language. This also eliminates VS Code schema validation warnings produced by the open standard's VS Code integration.

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
- Template missing `primary_paths` or `primary_commands`.
- Local skill has template-only field (`primary_paths` or `primary_commands`).
- Missing required sections in this contract document.
- Governed reference path does not exist.
- Self-reference to the current governed skill artifact.
- Circular reference graph across governed skill artifacts.

Warnings:

- `description` over 100 words.
- File content changes in git diff without a matching `version:` diff (inside `metadata:`).

## Authoring Notes

- Per-skill `README.md` files are intentionally out of scope for this contract.
- Sync and export tooling must preserve the canonical template content exactly, apart from generated `agents/openai.yaml` outputs.
- When the contract changes, update the templates, local skill artifacts, validator, and sync tests in the same change.
- `metadata` values must be strings. Use quoted strings for version (`"1.0"`) and tier (`"1"`, `"2"`).
