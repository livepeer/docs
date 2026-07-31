---
name: style-and-language-homogenizer-en-gb
description: >-
  Enforce UK English usage and shared style conventions across English v2 docs so language drift is corrected before review and publication. Use when enforcing UK English across docs, normalising EN-GB style in v2 docs, or homogenising English docs language.
metadata:
  version: "1.2"
  category: governance
---

SKILL: Style and Language Homogenizer (EN-GB)

Goal
Standardize language and style quality in English v2 docs while excluding locale pages in phase 1.

Command
```bash
node operations/scripts/audits/content/style/style-and-language-homogenizer-en-gb.js --scope full
```

Outputs
- `workspace/reports/repo-ops/style-and-language-homogenizer-en-gb.md`
- `workspace/reports/repo-ops/style-and-language-homogenizer-en-gb.json`

Scope
- Include: `v2/**/*.mdx` English routes
- Exclude: `v2/es/**`, `v2/fr/**`, `v2/cn/**`, `v2/x-*/**`
