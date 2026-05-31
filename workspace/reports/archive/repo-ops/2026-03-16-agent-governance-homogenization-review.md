# Agent Governance Homogenization Review

Date: `2026-03-16`

## Summary

This report reviews the current agent-facing rule surfaces in `docs-v2-dev` and recommends a single homogenized governance model for Task 3 migration work.

This is a report-first artifact. It does not authorize rewriting live runtime agent files in this scope.

## Surfaces Reviewed

- `.github/AGENTS.md`
- `.github/copilot-instructions.md`
- `.github/augment-instructions.md`
- `.cursorrules`
- `ASSISTANT.md`
- `contribute/CONTRIBUTING/AGENT-INSTRUCTIONS.md`
- `ai-tools/agent-packs/README.md`
- `ai-tools/agent-packs/claude/CLAUDE.md`
- `ai-tools/agent-packs/cursor/rules.md`
- `ai-tools/agent-packs/windsurf/rules.md`
- `tools/scripts/validators/governance/check-agent-docs-freshness.js`
- `docs-guide/policies/agent-governance-framework.mdx`
- `docs-guide/policies/root-allowlist-governance.mdx`

## Current-State Findings

### Duplication clusters

- `.github/AGENTS.md`, `.github/copilot-instructions.md`, `.github/augment-instructions.md`, `.cursorrules`, and `ASSISTANT.md` all repeat overlapping repo structure and safety guidance.
- `contribute/CONTRIBUTING/AGENT-INSTRUCTIONS.md` repeats the contributor-facing subset of the same policy family.
- `ai-tools/agent-packs/*` contain generated derivatives and should remain outputs, not canonical policy inputs.

### Legacy vs target surfaces

- Current legacy repo-wide surfaces: `.github/AGENTS.md`, `.cursorrules`, `ASSISTANT.md`, `.github/augment-instructions.md`
- Approved target runtime surfaces:
  - `AGENTS.md`
  - `.github/copilot-instructions.md`
  - `.claude/CLAUDE.md`
  - `.cursor/rules/*.mdc`
  - `.windsurf/rules/*.md`

### Governance conclusion

- The repo needs one shared baseline, one native adapter layer per supported agent family, and one shared knowledge set.
- Generated pack outputs should remain supplemental onboarding material.
- Canonical location and overlap rules are enforceable governance and therefore belong in `docs-guide/policies/`, not `docs-guide/frameworks/`.

## Recommended Homogenized Governance Model

### Must-have cross-agent baseline rules

These rules should live in the canonical repo-wide baseline and must not drift by agent:

- destructive git safety
- hook and validation policy
- root allowlist policy
- source-of-truth order
- `v1` freeze and legacy-content boundary
- branch and lock governance
- path-migration discipline

### Recommended shared rules

These rules should be shared across agents unless a native adapter requires different syntax:

- response and review hygiene
- component and style conventions
- route-placement heuristics
- change-propagation expectations
- generated-file handling
- contributor workflow norms

### Native-adapter-only rules

Native adapter files should contain only:

- tool-specific file format or metadata requirements
- minimal bootstrap instructions for that tool
- a pointer back to the shared repo baseline

Native adapters should not become separate copies of the full repo policy.

## Required Repo Knowledge for Every Agent

Every supported agent should be grounded in the same repo knowledge set:

- docs routing and navigation: `docs.json`
- repo orientation and maintainer workflow: `README.md`, `contribute/**`
- internal governance and architecture map: `docs-guide/**`
- current user-facing docs: `v2/**`
- hook and structure enforcement: `.githooks/pre-commit`, `.githooks/pre-push`
- root governance: `docs-guide/policies/root-allowlist-governance.mdx`
- agent governance: `docs-guide/policies/agent-governance-framework.mdx`
- validator enforcement: `tools/scripts/validators/governance/*`
- Codex operational governance: `.codex/*`, `tools/scripts/codex/*`

## Task 3 Migration Targets

Approved migration targets for the later rewrite pass:

| Legacy surface | Approved destination |
|---|---|
| `.github/AGENTS.md` | `AGENTS.md` baseline plus short adapter references where needed |
| `.cursorrules` | `.cursor/rules/*.mdc` |
| `ASSISTANT.md` | `AGENTS.md` baseline; optional future `.mintlify/ASSISTANT.md` only if Mintlify assistant is intentionally adopted |
| `.github/augment-instructions.md` | retire unless Augment is explicitly restored to the supported matrix |
| duplicated repo-policy blocks inside `.github/copilot-instructions.md` | reduce to Copilot-specific adapter content that references `AGENTS.md` |

## Prior Reports Incorporated

### Root entry re-review (`2026-03-16`)

Preserved findings:

- not everything currently discussed in `.allowlist` is required at repo root
- nested agent paths are not valid `.allowlist` entries because the root gate is root-only
- the repo still uses `ASSISTANT.md` and `.cursorrules`, but both remain move-or-retire candidates

### Agent root file decision set (`2026-03-16`)

Approved decision set carried into this review:

```text
USE:
AGENTS.md
.github/copilot-instructions.md
.claude/CLAUDE.md
.cursor/rules/
.windsurf/rules/
```

## Sources

### Repo evidence

- `.github/AGENTS.md`
- `.github/copilot-instructions.md`
- `.github/augment-instructions.md`
- `.cursorrules`
- `ASSISTANT.md`
- `contribute/CONTRIBUTING/AGENT-INSTRUCTIONS.md`
- `ai-tools/agent-packs/README.md`
- `ai-tools/agent-packs/claude/CLAUDE.md`
- `ai-tools/agent-packs/cursor/rules.md`
- `ai-tools/agent-packs/windsurf/rules.md`
- `tools/scripts/validators/governance/check-agent-docs-freshness.js`
- `docs-guide/policies/agent-governance-framework.mdx`
- `docs-guide/policies/root-allowlist-governance.mdx`

### Official external sources

- [OpenAI Codex: AGENTS.md](https://developers.openai.com/codex/guides/agents-md)
- [Claude Code memory and project instructions](https://code.claude.com/docs/en/memory)
- [Cursor rules for AI](https://docs.cursor.com/context/rules-for-ai)
- [Windsurf memories](https://docs.windsurf.com/plugins/cascade/memories)
- [Windsurf AGENTS.md](https://docs.windsurf.com/windsurf/cascade/agents-md)
- [GitHub Copilot custom instructions](https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/add-custom-instructions)
