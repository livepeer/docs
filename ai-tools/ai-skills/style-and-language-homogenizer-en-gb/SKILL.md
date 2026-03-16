---
name: style-and-language-homogenizer-en-gb
version: "1.0"
description: >-
  Enforce UK English usage and shared style conventions across English v2 docs so language drift is corrected before review and publication.
invoke_when:
  - "enforce uk english across docs"
  - "normalize en-gb style in v2 docs"
  - "homogenize english docs language"
---

SKILL: Style and Language Homogenizer (EN-GB)

Goal
Standardize language and style quality in English v2 docs while excluding locale pages in phase 1.

Command
```bash
node tools/scripts/style-and-language-homogenizer-en-gb.js --scope full
```

Outputs
- `tasks/reports/repo-ops/style-and-language-homogenizer-en-gb.md`
- `tasks/reports/repo-ops/style-and-language-homogenizer-en-gb.json`

Scope
- Include: `v2/**/*.mdx` English routes
- Exclude: `v2/es/**`, `v2/fr/**`, `v2/cn/**`, `v2/x-*/**`
