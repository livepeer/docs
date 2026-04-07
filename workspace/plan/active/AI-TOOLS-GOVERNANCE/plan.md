# AI-Tools Governance — Active Plan

**Last updated:** 2026-03-22
**Branch:** `docs-v2-dev`
**Status:** Ongoing maintenance — core governance complete, 3 decision gates open

> This file consolidates the original Phases 1–9 plan, the open-items backlog (former `plan.md`), and `plan2.md` post-completion tasks. `plan2.md` is now a pointer to this file.

---

## What Is Complete

Everything below is done and committed. Not listed in the active work sections.

| Phase | Work |
|---|---|
| Phases 1–9 (original) | Full AI-tools governance buildout — registry, skill system, rules, agent instructions |
| Open-items Phase 1 | Path accuracy fixes — AGENTS.md validator paths, ai-tools/README.md script path, copilot-instructions archival |
| Open-items Phase 2 | AI discoverability — CDA-6 CI check confirmed, 7 llms.txt duplicate URLs removed |
| Open-items Phase 3 | ai-tools nav — setup guides confirmed in docs.json, AGENT-INSTRUCTIONS.md reduced to pointer |
| Open-items Phase 4 | ai-skills structural integrity — category fields on all 19 skills, validateFolderStructure() in test suite, skill-docs/SKILL.md updated, agent-packs regenerated |
| agentskills.io alignment | VS Code schema warnings resolved — all 61 governed skill files migrated to agentskills.io standard; invoke_when removed; metadata: block added; test suite rewritten |
| Registry sync | ai-tools-registry.json corrected — 4 stale artifact paths, 6 missing entries; 222 → 227 artifacts |
| Inventory regenerated | ai-tools-inventory.md regenerated at 227 artifacts (was stale at 215) |
| Safe cleanup | docs-guide/.DS_Store removed; docs.json.bak and openapi.yaml.backup already gone; .codex/locks-local/ already gone; source-of-truth.md stubs already gone |
| _workspace structure | api/, snippets/, tools/ _workspace subdirs populated: api=(spec-drafts, research, archive), snippets=(component-drafts, asset-staging, archive), tools=(experiments, archive) |
| structure.md | Updated — new schema fields, content-pipeline category added, correct test/script paths |

---

## Active Work — No Decision Needed

These are safe to execute without human approval.

### Fix completion-report.md R4 (obsolete)

**File:** `workspace/plan/active/AI-TOOLS-GOVERNANCE/completion-report.md`

R4 says: "Add `content-pipeline` to `skill-docs/SKILL.md` invoke_when." `invoke_when` no longer exists (removed in agentskills.io alignment). `content-pipeline` is already in skill-docs/SKILL.md v1.4 Constraints section. Strike R4 as resolved.

---

## Decision Gates

### Gate 3.1 — docs-guide/ restructure — DEFERRED

Decision: Defer. No execution until approved. Tracked in `REPO-STRUCTURE-GOV/` plan.

---

### Gate 3.2 — Skill consolidation — NEEDS DECISION

**Context:** Two pairs of skills were flagged as potential merge candidates.

**Pair A — Audit skills** (`category: audit`):

| Skill | What it does |
|---|---|
| `docs-quality-and-freshness-audit` | Finds TODO/TBD markers, thin content, freshness-risk text — *content readiness* |
| `docs-coverage-and-route-integrity-audit` | Finds missing nav routes, orphan files, legacy path refs — *navigation health* (script not yet implemented) |

**Recommendation: keep separate.** These address completely different problem domains. Quality/freshness is a content concern; route/coverage is a navigation concern. An agent auditing content freshness should not have to think about route integrity and vice versa.

**Pair B — Review pipeline skills** (`category: review-pipeline`):

| Skill | What it does |
|---|---|
| `docs-review-packet-generation` | Read-only: derives scope from nav, runs 3 analysis phases, builds tracker + reports |
| `docs-review-fix-execution` | Write: executes an existing approved packet, applies fixes, closes sections |

**Recommendation: keep separate.** These are explicitly sequential — generation always precedes execution with a human review/approval step in between. Merging them would create a single skill that would sometimes be read-only and sometimes edit pages, depending on a flag. The separation is load-bearing: it enforces the human gate.

**→ Decision needed:** Confirm keep separate, or override with merge instruction.

---

### Gate 3.3 — SOLUTIONS-SOCIAL-DATA — HANDLED IN SEPARATE THREAD

Active work is tracked in `workspace/plan/active/SOLUTIONS-SOCIAL-DATA/`. Not this thread's concern.

---

### Gate 3.4 — _workspace standardisation — DONE

Best-guess subdirectory structure applied (no approval wait per user instruction):

- `ai-tools/_workspace/` — already had `skill-research/`, `rule-drafts/`, `archive/` ✓
- `api/_workspace/` — added `spec-drafts/`, `research/`, `archive/`
- `snippets/_workspace/` — added `component-drafts/`, `asset-staging/`, `archive/`
- `tools/_workspace/` — added `experiments/`, `archive/`

All subdirs have `.gitkeep` so they track in git while empty.

---

## Low Priority / Health (plan2.md Phase 4)

Execute when convenient, no dependencies.

### Task 4.1 — Run audit pipeline end-to-end

```bash
node operations/scripts/audits/governance/repo/repo-audit-orchestrator.js --mode static --scope full
```

Document which catalog skills produce useful output and which are aspirational. Update `structure.md` with findings.

### Task 4.2 — snippets/assets/ cleanup

Safe item-by-item with individual checks (grep refs before each deletion):

1. Delete `snippets/assets/domain/02_COMMUNITY/hero-images/` (~20 MB, zero refs confirmed)
2. Delete unused `domain/00_HOME/` hero variants (13 files, zero refs)
3. Consolidate `snippets/assets/logo/` → `snippets/assets/logos/`
4. Remove `snippets/assets/favicon.png` root duplicate
5. Evaluate `snippets/assets/data/protocol-overview.html` (4.3 MB)
6. Delete typo files: `Hero_Telegran.png`, `Hero_Yotube.png`

### Task 4.3 — Script-governance cross-check

Confirm `SCRIPT-GOVERNANCE/plan.md` status — which tasks are complete, which remain open, whether Task 14 (`tools/scripts/` → `operations/`) is done. This gates REPO-STRUCTURE-GOV Phase 1.

---

## Deferred (external dependencies)

| Item | Blocker |
|---|---|
| docs.json Resource HUB stub fix | User confirmation required for docs.json commits; content decision on 7 stub nav groups |
| llms.txt regeneration (local) | ESM `unified` package not resolvable from `operations/scripts/`; works in CI |
| CDA-5: CoinGecko snapshot auto-gen | Network access policy + CI cron infrastructure |
| CDA-7: Tier 2 component page template | Page template system must be finalised first |
| Showcase-data.json AI companion | Showcase content not finalised |
| `.github/AGENTS.md` rewrite | Still has fictional checkpoint branch system + stale paths; low risk but needs separate focused commit + Codex command path verification |

---

## Verification

```bash
# Skill validator
node operations/tests/unit/skill-docs.test.js
# → ✅ 62 targets, 0 errors

# Registry
node operations/tests/unit/ai-tools-registry.test.js
# → ✅ 227 artifacts, 0 errors

# Freshness
node operations/scripts/validators/governance/compliance/check-agent-docs-freshness.js --json
# → ✅ 0 errors (agentskills-io-standard.md shows WARNING: no git history until committed)

# No stale tools/ paths in ai-tools governed areas
grep -rn "node tools/scripts/" ai-tools/ --include="*.md" --include="*.mdx" | grep -v "source-content\|_workspace\|agent-packs/skills"
# → empty
```
