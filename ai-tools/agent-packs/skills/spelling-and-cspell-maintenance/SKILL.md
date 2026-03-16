---
name: spelling-and-cspell-maintenance
version: "1.0"
description: >-
  Maintain spelling quality with repo dictionaries and staged spell checks. Use when tasks include spelling test failed, add accepted term to dictionary, fix cspell issues in docs.
tier: 1
invoke_when:
  - "spelling test failed"
  - "add accepted term to dictionary"
  - "fix cspell issues in docs"
primary_paths:
  - "tests/unit/spelling.test.js"
  - "tests/config/spell-dict.json"
  - "tools/config/cspell.json"
  - "tests/README.md"
primary_commands:
  - "node tests/unit/spelling.test.js --staged"
  - "npm --prefix tests run test:spell"
---

SKILL: Spelling and CSpell Maintenance

Goal
Keep docs spelling checks green while preserving intentional project terminology.

Constraints
- Do not bypass hooks (`--no-verify` or `-n`).
- Do not modify `v1/` content; it is frozen/immutable.
- Keep edits within requested scope and avoid protected root changes like `.allowlist` unless explicitly requested.
- Use only repository-backed commands and paths listed in this template.

Workflow
1. Run staged spelling checks and capture unknown terms.
2. Fix typos first; add true project terms to controlled dictionaries when needed.
3. Re-run spelling suite to confirm clean state.

Command examples
```bash
node tests/unit/spelling.test.js --staged
npm --prefix tests run test:spell
```

Deliverable Format
- Spelling fixes and dictionary adjustments list.
- Spell-check rerun result.

Failure Modes / Fallback
- If a term is uncertain, verify usage across repo before dictionary addition.
- Avoid broad dictionary additions that mask genuine mistakes.

Validation Checklist
- [ ] Spelling command executed after changes.
- [ ] Dictionary changes are minimal and justified.
- [ ] No unrelated structural changes included.
