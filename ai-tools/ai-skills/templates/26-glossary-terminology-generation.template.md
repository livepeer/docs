---
name: glossary-terminology-generation
version: "1.0"
description: >-
  Generate discovered terminology and glossary datasets from repository content signals. Use when tasks include update glossary terms, discover missing terminology in docs, regenerate terminology data files.
tier: 3
invoke_when:
  - "update glossary terms"
  - "discover missing terminology in docs"
  - "regenerate terminology data files"
primary_paths:
  - "tools/scripts/snippets/generate-data/scripts/terminology-search.js"
  - "tools/scripts/snippets/generate-data/scripts/generate-glossary.js"
  - "tools/scripts/snippets/generate-data/data"
  - "tasks/plan/23-glossary-maintenance.md"
primary_commands:
  - "node tools/scripts/snippets/generate-data/scripts/terminology-search.js"
  - "node tools/scripts/snippets/generate-data/scripts/generate-glossary.js"
---

SKILL: Glossary Terminology Generation

Goal
Maintain glossary data freshness using project scripts for terminology discovery and generation.

Constraints
- Do not bypass hooks (`--no-verify` or `-n`).
- Do not modify `v1/` content; it is frozen/immutable.
- Keep edits within requested scope and avoid protected root changes like `.allowlist` unless explicitly requested.
- Use only repository-backed commands and paths listed in this template.

Workflow
1. Run terminology search to collect candidate terms.
2. Generate glossary outputs from discovered inputs.
3. Review deltas for false positives or taxonomy drift.

Command examples
```bash
node tools/scripts/snippets/generate-data/scripts/terminology-search.js
node tools/scripts/snippets/generate-data/scripts/generate-glossary.js
```

Deliverable Format
- Updated discovered/glossary data artifacts.
- List of reviewed additions/removals requiring editorial follow-up.

Failure Modes / Fallback
- If generated output is empty, verify input corpus paths and filters.
- If noise is high, tighten term extraction heuristics before accepting output.

Validation Checklist
- [ ] Both discovery and glossary scripts complete successfully.
- [ ] Generated data files are coherent and non-empty when expected.
- [ ] No unrelated directories are modified.
