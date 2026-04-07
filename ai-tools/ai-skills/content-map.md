# Content Map

- Generated: 2026-04-05T07:11:26.270Z
- Inventory: `ai-tools/ai-skills/inventory.json`
- Files catalogued: 31

## Canonical Runtime Governance

| Path | Status | Exists | Format | Purpose |
|---|---|---|---|---|
| `AGENTS.md` | active | yes | markdown | Defines the canonical repo-wide baseline for all supported coding agents. |
| `.github/copilot-instructions.md` | active | yes | markdown | Defines the thin GitHub Copilot adapter that points back to the canonical repo baseline. |
| `.claude/CLAUDE.md` | active | yes | markdown | Defines the thin Claude Code adapter for the canonical repo baseline. |
| `.cursor/rules/repo-governance.mdc` | active | yes | vendor-specific | Defines the thin Cursor adapter for the canonical repo baseline. |
| `.windsurf/rules/repo-governance.md` | active | yes | markdown | Defines the thin Windsurf adapter for the canonical repo baseline. |
| `.allowlist` | active | yes | text | Defines the machine-readable allowlist of governed repo-root entries. |
| `docs-guide/policies/agent-governance-framework.mdx` | active | yes | mdx | Documents the canonical supported-agent layout, taxonomy, and retirement policy. |
| `docs-guide/policies/root-allowlist-governance.mdx` | active | yes | mdx | Documents root-entry policy, allowlist authoring rules, and parser constraints. |
| `operations/scripts/validators/governance/check-agent-docs-freshness.js` | active | no | javascript | Validates the canonical agent runtime surfaces and governance docs for existence and freshness. |
| `.codex/README.md` | active | yes | markdown | Documents Codex task isolation, lock lifecycle, and local operational conventions. |
| `.codex/task-contract.yaml` | active | yes | yaml | Defines task-scope metadata and acceptance contracts for codex implementation branches. |
| `.github/AGENTS.md` | active | yes | markdown | Defines the Codex-specific task-layer extension that augments the canonical root AGENTS baseline. |

## Contributor and Localized Documentation

| Path | Status | Exists | Format | Purpose |
|---|---|---|---|---|
| `README.md` | active | yes | markdown | Provides high-level repo orientation and links to the canonical governance surfaces. |
| `docs-guide/contributing/agent-instructions.mdx` | active | yes | mdx | Provides contributor-facing agent workflow guidance and hook expectations. |
| `v2/cn/contribute/CONTRIBUTING/AGENT-INSTRUCTIONS.md` | active | no | markdown | Localized Chinese contributor guidance for the canonical agent workflow. |
| `v2/es/contribute/CONTRIBUTING/AGENT-INSTRUCTIONS.md` | active | no | markdown | Localized Spanish contributor guidance for the canonical agent workflow. |
| `v2/fr/contribute/CONTRIBUTING/AGENT-INSTRUCTIONS.md` | active | no | markdown | Localized French contributor guidance for the canonical agent workflow. |

## Agent Setup Guides

| Path | Status | Exists | Format | Purpose |
|---|---|---|---|---|
| `ai-tools/claude-code.mdx` | active | yes | mdx | Documents Claude Code setup against the canonical repo governance layout. |
| `ai-tools/cursor.mdx` | active | yes | mdx | Documents Cursor setup against the canonical repo governance layout. |
| `ai-tools/windsurf.mdx` | active | yes | mdx | Documents Windsurf setup against the canonical repo governance layout. |

## Generated Supplemental Outputs

| Path | Status | Exists | Format | Purpose |
|---|---|---|---|---|
| `ai-tools/agent-packs/README.md` | generated | yes | markdown | Explains the generated cross-agent audit packs and their shared pipeline stages. |
| `ai-tools/agent-packs/claude/CLAUDE.md` | generated | yes | markdown | Generated Claude-oriented audit pack emitted by the cross-agent packager. |
| `ai-tools/agent-packs/cursor/rules.md` | generated | yes | markdown | Generated Cursor-oriented audit pack emitted by the cross-agent packager. |
| `ai-tools/agent-packs/windsurf/rules.md` | generated | yes | markdown | Generated Windsurf-oriented audit pack emitted by the cross-agent packager. |
| `ai-tools/agent-packs/codex/skills-manifest.json` | generated | yes | json | Generated Codex skills manifest emitted by the cross-agent packager. |

## Source-Content Snapshots

| Path | Status | Exists | Format | Purpose |
|---|---|---|---|---|
| `ai-tools/ai-skills/source-content/contribute/CONTRIBUTING/AGENT-INSTRUCTIONS.md` | snapshot | yes | markdown | Stores the source-content snapshot for contributor agent instructions used by AI-skills inventories. |
| `ai-tools/ai-skills/source-content/v2/cn/contribute/CONTRIBUTING/AGENT-INSTRUCTIONS.md` | snapshot | yes | markdown | Stores the Chinese source-content snapshot for localized contributor agent instructions. |
| `ai-tools/ai-skills/source-content/v2/es/contribute/CONTRIBUTING/AGENT-INSTRUCTIONS.md` | snapshot | yes | markdown | Stores the Spanish source-content snapshot for localized contributor agent instructions. |
| `ai-tools/ai-skills/source-content/v2/fr/contribute/CONTRIBUTING/AGENT-INSTRUCTIONS.md` | snapshot | yes | markdown | Stores the French source-content snapshot for localized contributor agent instructions. |

## Retired Legacy Surfaces

| Path | Status | Exists | Format | Purpose |
|---|---|---|---|---|
| `ASSISTANT.md` | retired | no | markdown | Retired assistant contract merged into the canonical root AGENTS.md. |
| `.github/augment-instructions.md` | retired | yes | markdown | Retired Augment-specific instruction file removed from the supported agent matrix. |

These paths are tracked for migration and audit history only. They must not be recreated as active governance sources.

