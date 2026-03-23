> Archived 2026-03-23. Superseded by `audits/master-audit.md`. See `workspace/plan/active/DOCUMENTATION/audits/master-audit.md` for current version.

---

---
title: Documentation Governance — Audit
status: active
owner: DOCUMENTATION
created: 2026-03-21
---

# Documentation Audit

> **Summary table first, then full detail.**
> Tasks 2, 3, 4, and 5 are all captured here.

---

## Summary

### Documentation Audit — Findings Summary

#### The Core Problem

Documentation for this repo lives across 13+ locations with no unified ownership model, no per-page audience tagging (human vs. agent), no sync pipeline between internal canonical docs and their public/agent surfaces, and no validators for hand-maintained governance files.

### Critical Issues Found

🔴 Structural fragmentation

- contribute/CONTRIBUTING/ and docs-guide/contributing/ are both live simultaneously — two active contributor guide locations
- 13 documentation locations with no index connecting them
- docs-guide/ serves both humans and agents but has no per-page audience tags

🔴 Duplicate/conflicting content

- v2/internal/docs-philosophy.mdx is an exact duplicate of v2/internal/overview/docs-philosophy.mdx
- Three glossary files (docs-guide/docs-glossary.md, v2/resources/livepeer-glossary.mdx, v2/resources/resources/compendium/glossary.mdx) with overlapping scope and no declared boundaries
- AI features documented in 3 separate files (ai-features.mdx stub, ai-tools.mdx, v2/resources/.../ai-features.mdx) with no designated canonical
- source-of-truth-policy.mdx references docs-guide/overview.mdx as a required file — that file doesn't exist (it's source-of-truth-guide.mdx)

🔴 Generator staleness

- components-catalog.mdx has stale generator banner path and shows undefined categories — not re-run since component restructure merged
- After SCRIPT-GOVERNANCE Task 14 (operations/ move), ALL catalog generator banners will need simultaneous updates

🔴 Secrets/env docs gap

- .env.example is well-maintained but completely invisible — no link from docs-guide
- AGENTS.md
- or any contributing guide. Not in the ownerless governance manifest.

🟠 No validators for hand-maintained docs

- All docs-guide/policies/, frameworks/, features/ pages are hand-maintained with zero freshness enforcement. Only catalog files have CI validators.
- 5 AI adapter files (Claude, Cursor, Windsurf, Augment, Copilot) can diverge from AGENTS.md silently — no sync validator.

[... original content truncated at archival — see audits/master-audit.md for current synthesis]
