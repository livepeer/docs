---
name: v2-browser-sweep-runbook
description: >-
  Execute full v2 browser sweep against docs.json routes and analyze
  console/render failures. Use when: run full browser sweep for v2 pages,
  console errors across docs pages, validate all docs.json routes render.
metadata:
  version: "1.2"
  category: "audit"
  tier: "1"
primary_paths:
  - "operations/scripts/validators/content/structure/test-v2-pages.js"
  - ".github/workflows/test-v2-pages.yml"
  - "tools/v2-page-test-report.json"
  - "docs.json"
primary_commands:
  - "node operations/scripts/validators/content/structure/test-v2-pages.js"
  - "npm --prefix tools run test:v2-pages"
---

SKILL: V2 Browser Sweep Runbook

Goal
Find runtime rendering/console issues across all v2 pages using Puppeteer sweep scripts.

Constraints
- Do not bypass hooks (`--no-verify` or `-n`).
- Do not modify `v1/` content; it is frozen/immutable.
- Keep edits within requested scope and avoid protected root changes like `.allowlist` unless explicitly requested.
- Use only repository-backed commands and paths listed in this template.

Workflow
1. Ensure local mint server availability for sweep command.
2. Run full sweep over docs.json routes and capture report JSON.
3. Triage failed pages by navigation/error/request-failure signals.

Command examples
```bash
node operations/scripts/validators/content/structure/test-v2-pages.js
npm --prefix tools run test:v2-pages
```

Deliverable Format
- Browser sweep summary (passed/failed/total).
- Per-page failure details with suggested next checks.

Failure Modes / Fallback
- If server is unreachable, resolve local dev server state before retesting.
- If failures are environment-specific, note reproducibility conditions explicitly.

Validation Checklist
- [ ] Sweep command executes with generated JSON report.
- [ ] Failed pages are enumerated with errors.
- [ ] No unsafe bypass recommendations are present.
