# Audit: `ai-tools/`

*Audited: 2026-03-20*

---

## Structure

```
ai-tools/
├── agent-packs/
│   ├── README.md
│   ├── claude/               IDE-specific rule packs
│   ├── cursor/
│   ├── windsurf/
│   └── skills/               45+ SKILL.md definitions
├── ai-rules/                 15 subdirs + governance docs
├── ai-skills/                25 skill implementations
│   ├── _workspace/           Research drafts (intentional)
│   ├── catalog/              execution-manifest.json, skill-catalog.json
│   ├── templates/            53 template files (numbered)
│   └── [25 individual skill dirs]
├── registry/                 inventory + schema
├── claude-code.mdx           Setup guide for Claude Code
├── cursor.mdx                Setup guide for Cursor
└── windsurf.mdx              Setup guide for Windsurf
```

---

## `agent-packs/skills/` — 45+ SKILL.md definitions

Active, well-populated. Notable skills include: `agentic-project-management-orchestrator`, `broken-links-advisory-triage`, `codex-task-isolation-standard`, `component-library-guided-authoring`, `docs-change-review`, `docs-copy`, `docs-ia-route-placement`, `docs-impact-propagation`, `docs-research-packet-generation`, `docs-source-verification`, `domain-pages-audit-runbook`, `glossary-terminology-generation`, `lpd-bootstrap-and-doctor`, `openapi-sync-and-api-doc-generation`, `release-version-workflow-maintenance`, `spell-check-cspell-maintenance`, `v2-link-audit-runbook`, `v2-pages-index-sync`.

**Status:** Active. AI-TOOLS-GOVERNANCE plan is currently fixing broken paths in these (created 2026-03-20). **Do not restructure until that plan completes.**

---

## `ai-rules/` — 15 Subdirs

Contains:
- `.AI-SAFEGUARDS.md` — empty
- `.augment/`, `.cursor/` — IDE-specific rule sets
- Core governance: `AI-ACCOUNTABILITY-CHECKLIST.md`, `AI_GUIDELINES.md`, `HUMAN-OVERRIDE-POLICY.md`, `REVIEW_TABLE.md`, `ROLLBACK-GUIDE.md`, `UNIVERSAL-AI-PROTOCOL.md`
- `tasks-directory-structure.mdc` — mirrors `tasks/README.md`
- `llms.txt.information.md`

**Issue:** `.AI-SAFEGUARDS.md` is empty. Either populate or delete.

**Duplication concern:** `tasks-directory-structure.mdc` mirrors `tasks/README.md`. If they diverge, there will be conflicts. Should there be a generated sync or a single source of truth?

---

## `ai-skills/templates/` — 53 Template Files

Numbered 01–42 with some having duplicate entries (e.g. multiple files starting with "32-"). Numeric prefix approach is prone to collisions when templates are added or reorganized.

**Issues:**
- Duplicate/colliding numeric prefixes (at least "32-" is duplicated)
- Some template files have companion `references/` subdirectories — naming is inconsistent
- 53 files for 42 slots implies ~11 orphan/duplicate entries

**Action:** Audit template numbering, remove duplicates, consider switching to named (not numbered) templates.

---

## `ai-skills/_workspace/`

Contains research drafts: copywriting research, product-writing research, legacy rubric. **Intentional workspace — keep.** No action needed.

---

## IDE Adapter Files

`claude-code.mdx`, `cursor.mdx`, `windsurf.mdx` — three files with identical structure (setup guides linking to AGENTS.md and canonical governance). Each is specific to one IDE.

**Consolidation opportunity:** The structure is identical across all three. Consider a shared template with IDE-specific include blocks, or at minimum ensure all three are updated in sync (currently they can drift independently).

---

## Summary

| Issue | Severity | Action |
|---|---|---|
| AI-TOOLS-GOVERNANCE plan active — path repairs in-flight | **BLOCKER** | Do not restructure `ai-tools/` until plan completes |
| `ai-rules/.AI-SAFEGUARDS.md` is empty | Low | Populate or delete |
| `tasks-directory-structure.mdc` duplicates `tasks/README.md` | Medium | Designate one as source of truth; consider generated sync |
| Template numbering collisions (53 files, 42 slots, "32-" duplicated) | Medium | After AI-TOOLS-GOVERNANCE: audit templates, remove dupes, consider named not numbered |
| IDE setup guides (`claude-code.mdx` etc.) can drift independently | Low | Add cross-link or shared source to keep in sync |
