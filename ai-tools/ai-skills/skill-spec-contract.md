# Skill Spec Contract

## Purpose

This document is the central documentation contract for governed skill artifacts under `ai-tools/ai-skills/`. It defines the canonical frontmatter schema, the validation rules enforced by `tests/unit/skill-docs.test.js`, and the single workflow maintainers must use when creating or editing skill files.

## Layer Map

| Layer | File | Purpose |
| --- | --- | --- |
| Canonical template | `ai-tools/ai-skills/templates/*.template.md` | Source-of-truth skill definitions used by sync and export tooling. |
| Local synced skill | `ai-tools/ai-skills/*/SKILL.md` | Governed checked-in skill artifacts used directly from this repository. |
| Documentation contract | `ai-tools/ai-skills/skill-spec-contract.md` | Canonical contract for required fields, validation rules, and invocation expectations. |
| Authoring skill | `ai-tools/ai-skills/skill-docs/SKILL.md` | Workflow guidance for creating or editing governed skill artifacts safely. |
| Enforcement suite | `tests/unit/skill-docs.test.js` | Automated validator that blocks incomplete or inconsistent governed skill artifacts. |

## Invocation

Load `ai-tools/ai-skills/skill-docs/SKILL.md` whenever a task creates a new governed skill, edits an existing governed skill, or changes the canonical template contract. Run `node tests/unit/skill-docs.test.js` before committing any governed skill or contract change.

## Canonical Field Contract

Governed skill artifacts are limited to two surfaces:

- `ai-tools/ai-skills/*/SKILL.md`
- `ai-tools/ai-skills/templates/*.template.md`

Required fields for every governed skill artifact:

| Field | Required | Rules |
| --- | --- | --- |
| `name` | Yes | Unique kebab-case identifier matching `^[a-z0-9][a-z0-9-]*$`. |
| `version` | Yes | Semver-like string matching `^[0-9]+\.[0-9]+(?:\.[0-9]+)?$`. |
| `description` | Yes | Plain-English description between 20 and 100 words. State what the skill does and when to use it. |
| `invoke_when` | Yes | Non-empty array of trigger phrases. Exact duplicate trigger sets across governed skills are warned. |
| `category` | Yes | One of: `audit`, `authoring`, `content-pipeline`, `governance`, `review-pipeline`, `meta`. See category taxonomy below. |

Category taxonomy:

| Value | Meaning | Skills |
| --- | --- | --- |
| `audit` | Read-only scan, measure, report | `script-footprint-and-usage-audit`, `docs-quality-and-freshness-audit`, `docs-coverage-and-route-integrity-audit`, `rubric-static-review` |
| `authoring` | Content creation and editing guidance | `page-authoring`, `docs-copy`, `product-thinking` |
| `content-pipeline` | Multi-pass page writing and review pipeline | `content-pipeline-pass-a`, `content-pipeline-pass-b`, `content-pipeline-tab-map` |
| `governance` | Enforce rules, apply standards, manage artifacts | `component-layout-governance`, `generated-mdx-banners-governance`, `style-and-language-homogenizer-en-gb`, `cleanup-quarantine-manager` |
| `review-pipeline` | Multi-step review and fix workflows | `docs-review-packet-generation`, `docs-review-fix-execution` |
| `meta` | Orchestration, packaging, skill self-governance | `repo-audit-orchestrator`, `cross-agent-packager`, `skill-docs` |

Optional operational fields (local skills + templates):

| Field | Required on | Rules |
| --- | --- | --- |
| `tier` | Optional on both | `1` = single-command skill; `2` = multi-step workflow skill. Use when the execution complexity is worth signalling. |

Template-only operational fields:

| Field | Applies To | Rules |
| --- | --- | --- |
| `primary_paths` | Templates only | Non-empty array of canonical repo paths used by the workflow. Not valid on local `SKILL.md` files. |
| `primary_commands` | Templates only | Non-empty array of repository-backed commands for the workflow. Not valid on local `SKILL.md` files. |

Cross-reference policy:

- Only repo-root or relative markdown paths under `ai-tools/ai-skills/` are treated as governed references.
- References must resolve to existing markdown files.
- A governed skill artifact must not reference itself.
- Circular references across governed skill artifacts are forbidden.
- Generic references such as root `README.md` are outside this contract unless they resolve under `ai-tools/ai-skills/`.

## Validation Rules

Blocking failures:

- Missing `name`, `version`, `description`, `invoke_when`, or `category`.
- Invalid `name` or `version` format.
- `description` under 20 words.
- Empty `invoke_when`.
- `category` value not in the allowed enum (`audit`, `authoring`, `content-pipeline`, `governance`, `review-pipeline`, `meta`).
- Missing required sections in this contract document.
- Governed reference path does not exist.
- Self-reference to the current governed skill artifact.
- Circular reference graph across governed skill artifacts.

Warnings:

- `description` over 100 words.
- File content changes in git diff without a matching `version:` diff.
- Exact duplicate `invoke_when` sets after normalized comparison.

## Authoring Notes

- Per-skill `README.md` files are intentionally out of scope for this contract.
- Sync and export tooling must preserve the canonical template content exactly, apart from generated `agents/openai.yaml` outputs.
- When the contract changes, update the templates, local skill artifacts, validator, and sync tests in the same change.
