# Canonical Consolidation Audit — 2026-04-07

> Phase 1 output. Read-only audit of every root folder's governance status.

## Root Folder Governance Status

| Folder | Files | Governance marker | Framework exists | Status |
|--------|-------|------------------|-----------------|--------|
| `.augment/` | 3 | NO | IDE adapter — governed by AGENTS.md | Ungoverned |
| `.cache/` | 0 | NO | Build artefact — no governance needed | Skip |
| `.claude/` | 43 | NO | AI config — governed by CLAUDE.md | Ungoverned |
| `.codex/` | 2 | NO | IDE adapter — governed by AGENTS.md | Ungoverned |
| `.cursor/` | 2 | NO | IDE adapter — governed by AGENTS.md | Ungoverned |
| `.githooks/` | 12 | NO | Hook enforcement — no published framework | Ungoverned |
| `.github/` | 174 | NO | Workflow framework exists (transitional) | Partial |
| `.mintlify/` | 1 | NO | Platform config — Mintlify constraints doc | Ungoverned |
| `.vscode/` | 11 | NO | IDE config — no published framework | Ungoverned |
| `.windsurf/` | 1 | NO | IDE adapter — governed by AGENTS.md | Ungoverned |
| `ai-tools/` | 318 | NO | AI-TOOLS-GOVERNANCE/structure.md (unpublished) | Partial |
| `api/` | 13 | NO | API reference — no published framework | Ungoverned |
| `docs-guide/` | 119 | NO | Self-governing (policies + frameworks live here) | Partial |
| `operations/` | 3858 | NO | Script framework (partially stale) | Partial |
| `snippets/` | 515 | NO | snippets/guide.mdx (in-place, current) | Partial |
| `tasks/` | 1 | NO | Unknown purpose — 1 file | Ungoverned |
| `tools/` | 25151 | NO | Node modules + dev tools — no framework | Ungoverned |
| `v1/` | 350 | NO | Legacy docs — no active framework | Ungoverned |
| `v2/` | 3026 | NO | Content writing pipeline (unpublished) | Partial |
| `workspace/` | 2778 | NO | Workspace lifecycle policy exists | Partial |

**Summary:** 0/20 folders have a governance marker. 7/20 have partial governance (framework exists but is buried). 13/20 are completely ungoverned from the outside.

## Frameworks to Promote

| Source | Target | Lines | Complexity |
|--------|--------|-------|-----------|
| `workspace/plan/active/SCRIPT-GOVERNANCE/script-framework.md` | `docs-guide/frameworks/script-framework.mdx` | 1368 | High — needs summary extraction |
| `workspace/plan/active/AI-TOOLS-GOVERNANCE/structure.md` | `docs-guide/frameworks/ai-tools-governance.mdx` | 264 | Low |
| `workspace/plan/active/REPO-STRUCTURE-GOV/folder-structure.md` | `docs-guide/frameworks/repo-structure.mdx` | 233 | Low |
| `workspace/plan/active/CONTENT-WRITING/plan-canonical.md` | `docs-guide/frameworks/content-writing.mdx` | 997 | High — needs summary extraction |
| `workspace/plan/active/DOCUMENTATION/Frameworks/doc-item-model.md` | `docs-guide/frameworks/doc-item-model.mdx` | 153 | Low |
| `.github/workspace/framework-canonical.md` | `docs-guide/frameworks/github-actions.mdx` | 367 | Medium |
| `workspace/thread-outputs/research/component-script-placement-reference.md` | `docs-guide/frameworks/file-placement.mdx` | 96 | Low |

## Standards to Consolidate

| Source | Target | Lines |
|--------|--------|-------|
| `workspace/plan/active/CONTENT-WRITING/Prompts/voice-rules.md` | `docs-guide/standards/voice-rules.mdx` | 316 |
| `v2/resources/documentation-guide/copy-style/authoring-standard.mdx` | `docs-guide/standards/authoring-standard.mdx` | ~200 |
| `docs-guide/canonical/frontmatter.md` | `docs-guide/standards/frontmatter.mdx` | 7 (stub) |

## Decision Registries to Index

7 separate files — see plan for full list. Need unified index at `docs-guide/decisions/registry.md`.
