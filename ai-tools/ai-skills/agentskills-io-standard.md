# Agent Skills Open Standard — Reference

**Standard:** agentskills.io (Linux Foundation / Agentic AI Foundation)
**Published:** December 2025
**Source:** https://agentskills.io/specification

This document is the canonical reference for the open cross-vendor Agent Skills standard that this repo's `SKILL.md` files must align with. All major AI coding tools (Claude Code, GitHub Copilot, OpenAI Codex, Cline, Gemini CLI, Devin) adopted this standard in December 2025. VS Code validates any file named `SKILL.md` against this schema — misalignment produces IDE warnings.

---

## Directory Structure

A skill is a directory containing at minimum a `SKILL.md` file:

```
skill-name/
├── SKILL.md          # Required: metadata + instructions
├── scripts/          # Optional: executable code
├── references/       # Optional: documentation
├── assets/           # Optional: templates, resources
└── ...               # Any additional files or directories
```

---

## Frontmatter Schema

### Required fields

| Field | Type | Constraints |
|---|---|---|
| `name` | string | Max 64 chars. Lowercase letters, numbers, hyphens only. Must not start or end with hyphen. Must not contain `--`. Must match parent directory name. Cannot contain XML tags. Cannot contain the words `anthropic` or `claude`. |
| `description` | string | Max 1024 chars. Non-empty. **Dual-purpose field** — describes what the skill does AND when to use it. Both are loaded at agent startup and drive routing decisions. Include specific keywords for reliable agent activation. |

### Optional fields

| Field | Type | Constraints |
|---|---|---|
| `license` | string | License name or reference to a bundled license file. Keep short. |
| `compatibility` | string | Max 500 chars. Only include if the skill has specific environment requirements. Examples: `Designed for Claude Code`, `Requires git, docker, jq`. Most skills omit this. |
| `metadata` | map | **The sole extension point.** A flat map of string keys to string values. Use for any properties not defined by this spec. Key names should be reasonably unique to avoid conflicts. |
| `allowed-tools` | string | Space-delimited list of pre-approved tools. **Experimental** — support varies by tool. Example: `Bash(git:*) Bash(jq:*) Read`. |

---

## The `metadata` Extension Map

`metadata` is how this spec is extended. It is:

- A **flat** key-to-value map
- Values are **strings only** — no nested objects, no arrays
- Keys can be anything reasonably unique to the authoring organisation
- Example:

```yaml
metadata:
  author: example-org
  version: "1.0"
  category: governance
  tier: "2"
```

> There is no provision for arbitrary top-level frontmatter keys beyond the six fields above. `metadata` is the only sanctioned extension point.

---

## Minimal and Full Examples

**Minimal (valid):**

```yaml
---
name: skill-name
description: What this skill does and when to use it.
---
```

**With all optional fields:**

```yaml
---
name: pdf-processing
description: >-
  Extracts PDF text, fills forms, and merges files. Use when handling
  any PDF document operation — extraction, form filling, or merging.
license: Apache-2.0
compatibility: Requires poppler-utils. Designed for Claude Code.
metadata:
  author: example-org
  version: "1.0"
  category: tooling
  tier: "1"
allowed-tools: Bash(pdftotext:*) Bash(pdfunite:*)
---
```

---

## Key Design Decisions in the Standard

### `description` is dual-purpose

There is no separate `triggers`, `invoke_when`, `activate_when`, or `when` field. The `description` field controls both:
1. What the skill does (human understanding)
2. When agents activate it (routing signal)

Both `name` and `description` are loaded at agent startup (~100 tokens combined) and inform routing decisions across all compliant tools.

**Implication:** Description must include both what the skill does and the conditions/tasks that should trigger it. A description that only states "what" without "when" is incomplete per the standard.

### `version` is inside `metadata`, not top-level

Version tracking is a common need but is not a first-class spec field. It goes inside `metadata:` as a string value. Top-level `version:` is not a defined field and will trigger validation warnings in any tool that enforces the schema.

### Arrays are not supported in `metadata`

The `metadata` map is strictly string-to-string. Array values cannot go in `metadata` without serialisation (e.g., comma-separated string). Any array-shaped extension field either needs to be serialised into a string or kept as a non-standard top-level field (which tools are likely to ignore but may still warn on).

---

## Tools That Enforce This Standard

| Tool | Scope | Notes |
|---|---|---|
| Claude Code CLI | `.claude/skills/<n>/SKILL.md` | Path-scoped discovery only |
| GitHub Copilot | `.github/skills/<n>/SKILL.md` | Path-scoped discovery only |
| OpenAI Codex | `.codex/skills/<n>/SKILL.md`, `.agents/skills/<n>/SKILL.md` | Path-scoped |
| Cline | `.cline/skills/<n>/SKILL.md` | Path-scoped |
| Gemini CLI | `.gemini/skills/<n>/SKILL.md`, `.agents/skills/<n>/SKILL.md` | Path-scoped |
| Devin Terminal | `.agents/skills/<n>/SKILL.md` | Path-scoped |
| VS Code | Any file named `SKILL.md` in the workspace | **Not path-scoped** — validates on filename alone |

**The VS Code validator is the only tool that scans for `SKILL.md` across the entire workspace regardless of path.** All other tools only discover SKILL.md files within their own `skills/` subdirectory. Our files at `ai-tools/ai-skills/*/SKILL.md` will never be invoked by any external tool, but will always be validated by VS Code.

---

## Repo Alignment Notes

See `ai-tools/ai-skills/skill-spec-contract.md` for this repo's governed skill schema, which extends this standard.

The repo's extensions to this standard are documented in `skill-spec-contract.md` under the `metadata` fields section.
