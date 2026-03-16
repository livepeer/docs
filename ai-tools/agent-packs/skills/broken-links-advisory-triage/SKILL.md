---
name: broken-links-advisory-triage
version: "1.0"
description: >-
  Triage advisory broken-links workflow output and convert findings into actionable fix queues. Use when tasks include broken-links workflow reported issues, advisory link cleanup planning, mintlify broken-links triage.
tier: 2
invoke_when:
  - "broken-links workflow reported issues"
  - "advisory link cleanup planning"
  - "mintlify broken-links triage"
primary_paths:
  - ".github/workflows/broken-links.yml"
  - "tasks/reports/LINK_FIX_QUEUE.md"
  - "tasks/reports/navigation-links/LINK_TEST_REPORT.md"
  - "tests/integration/v2-link-audit.js"
primary_commands:
  - "npx mintlify broken-links"
  - "node tests/integration/v2-link-audit.js --full --strict --report tasks/reports/navigation-links/LINK_TEST_REPORT.md"
---

SKILL: Broken Links Advisory Triage

Goal
Use advisory broken-link scans to prioritize cleanup without treating current workflow as blocking.

Constraints
- Do not bypass hooks (`--no-verify` or `-n`).
- Do not modify `v1/` content; it is frozen/immutable.
- Keep edits within requested scope and avoid protected root changes like `.allowlist` unless explicitly requested.
- Use only repository-backed commands and paths listed in this template.

Workflow
1. Run advisory scan and collect broken-link candidates.
2. Cross-check with strict internal link audit for actionable blockers.
3. Create prioritized fix queue by severity/impact.

Command examples
```bash
npx mintlify broken-links
node tests/integration/v2-link-audit.js --full --strict --report tasks/reports/navigation-links/LINK_TEST_REPORT.md
```

Deliverable Format
- Advisory findings grouped into fix-now vs backlog buckets.
- Validated internal-blocker subset from strict audit.

Failure Modes / Fallback
- If advisory output is noisy, narrow to changed domains first.
- Treat external transient failures separately from internal route breakages.

Validation Checklist
- [ ] Both advisory and strict-audit data points are considered.
- [ ] Output is actionable and prioritized.
- [ ] No claim that advisory workflow is currently blocking.
