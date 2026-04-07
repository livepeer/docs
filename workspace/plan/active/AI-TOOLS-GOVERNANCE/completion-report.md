# AI Governance — Completion Report

**Session date:** 2026-03-22
**Commit:** `f50ddddb` — `chore(ai-tools): AI governance open items — Phases 1–4`
**Branch:** `docs-v2-dev`

---

## Summary

This report covers the completion of the AI-Tools Governance open items plan across Phases 1–4. All executable tasks are done. Five items remain deferred pending external decisions or framework dependencies. The overall AI governance layer is now structurally sound — paths are accurate, the skill system has full category coverage and enforcement, agent instructions are deduplicated, and AI-facing content (llms.txt, companions) is consistent.

---

## What Was Done

### Phase 1 — Path Accuracy Fixes

All three stale `tools/scripts/` references pointing to non-existent paths were corrected.

| Fix | File | Detail |
|---|---|---|
| Validator table paths | `AGENTS.md` | Three entries replaced with correct `operations/scripts/` paths; `validate-frontmatter.js` (doesn't exist) replaced with `lint-structure.js` |
| Registry script path | `ai-tools/README.md` | `tools/scripts/validators/…/validate-ai-tools-registry.js` → `operations/scripts/…` |
| Imported copilot instructions | `ai-tools/ai-rules/rules/imported/` | `copilot-instructions.md` archived to `ai-tools/ai-rules/_retired/`; empty directory removed |

**Impact:** Any agent or human running validators from AGENTS.md or ai-tools/README.md was getting "no such file" errors. Now all paths resolve.

---

### Phase 2 — AI Discoverability

| Task | Outcome |
|---|---|
| CDA-6: companion manifest CI check | Already wired in prior session — confirmed active in `.github/workflows/check-ai-companions.yml` |
| llms.txt duplicate URLs | 7 duplicate URLs removed from `llms.txt` |

**llms.txt duplicate root causes identified:**
- Gateway section (`gateway-setup` ×4, `configuration-flags` ×2) — stale entries from a previous docs.json state no longer in current nav
- Resource HUB placeholder groups (`livepeer-glossary` ×7, `core-concepts` ×2, `actors` ×2, `changelog` ×2, `migration-guide` ×2) — placeholder docs.json groups filled with `v2/resources/livepeer-glossary` across 6 stub nav sections

**Note:** The Resource HUB placeholder groups in `docs.json` (lines 3179–3256) are the root cause and have not been fixed. Those groups ("Developer References", "Orchestrator References", "LPT & Delegator References", "Community Resources", "Partner Resources", "Help Center") all contain `v2/resources/livepeer-glossary` as stub content. Fixing them requires a docs.json content decision (see Deferred Items). The llms.txt has been deduplicated against the current content but will regenerate stale on next run if docs.json is not fixed first.

---

### Phase 3 — ai-tools Navigation and Docs

| Task | Outcome |
|---|---|
| Agent setup guides in docs.json | Already present — `ai-tools/claude-code`, `ai-tools/cursor`, `ai-tools/windsurf` are at `docs.json:3335-3337` under Internal Hub → Tooling |
| AGENT-INSTRUCTIONS.md reduction | Reduced from 113 lines to 7-line pointer to AGENTS.md |

**Why AGENT-INSTRUCTIONS.md was safe to reduce:** The Codex task lifecycle commands it contained (`task-preflight.js`, `lock-release.js`, `create-codex-pr.js`) had stale `tools/scripts/` paths — they now live at `operations/scripts/`. The governance rules (hooks, no `--no-verify`, port 3000, deletions policy) are already in `AGENTS.md`. Codex-specific isolation rules are in `.github/AGENTS.md`.

---

### Phase 4 — ai-skills Structural Integrity

All sub-tasks were found already complete from prior sessions, with one gap discovered and fixed.

| Task | Status | Detail |
|---|---|---|
| 4.1: `category` field on all SKILL.md files | Pre-complete | All 19 local SKILL.md files already had `category:` |
| 4.2: `validateFolderStructure()` in test suite | Pre-complete | Three checks (loose-file guard, prefix uniqueness, template/pack parity) already in `operations/tests/unit/skill-docs.test.js:636-697` |
| 4.3: skill-docs/SKILL.md governance rules | Pre-complete | Version 1.2 with category constraint, retirement workflow, sequential prefix rule. Note: `invoke_when` was subsequently removed during agentskills.io alignment; replaced by `metadata:` block |
| 4.4: Regenerate agent-pack exports | Complete | `cross-agent-packager.js --agent-pack all` — 5 files regenerated |

**Gap found and fixed:** Three content-pipeline skills (`content-pipeline-pass-a`, `content-pipeline-pass-b`, `content-pipeline-tab-map`) had `category: content-pipeline` which was not in the 5-value enum. This caused 3 test failures. Fixed by adding `content-pipeline` as a 6th valid category in `skill-spec-contract.md` and `skill-docs.test.js`. The category was intentionally assigned — these skills implement a distinct multi-pass page writing pipeline.

---

## Verification Results

All checks pass as of commit `f50ddddb`:

| Check | Result |
|---|---|
| `node operations/tests/unit/skill-docs.test.js` | ✅ 62 targets, 0 errors |
| Duplicate URLs in llms.txt | ✅ 0 duplicates |
| Stale `tools/scripts/` paths in AGENTS.md, ai-tools/README.md | ✅ 0 remaining |
| `category:` field count across SKILL.md files | ✅ 19 / 19 |
| Template / agent-pack parity | ✅ 42 templates, 42 packs |
| `node operations/scripts/validators/governance/compliance/check-agent-docs-freshness.js --json` | ✅ No stale docs |

---

## Artifacts Produced / Modified

### New Files

| File | Description |
|---|---|
| `workspace/plan/active/AI-TOOLS-GOVERNANCE/plan.md` | Active governance plan — open items, phase status, verification sequence, deferred blockers |
| `workspace/plan/active/AI-TOOLS-GOVERNANCE/completion-report.md` | This document |

### Modified Files (this session)

| File | Description |
|---|---|
| `AGENTS.md` | Validator table corrected — three `tools/scripts/` paths fixed to `operations/scripts/`; `validate-frontmatter.js` replaced with `lint-structure.js` |
| `ai-tools/README.md` | Registry validator script path corrected from `tools/` to `operations/` |
| `ai-tools/ai-skills/skill-spec-contract.md` | Added `content-pipeline` as 6th category value; updated taxonomy table with content-pipeline skills |
| `contribute/CONTRIBUTING/AGENT-INSTRUCTIONS.md` | Reduced from 113 lines of stale Codex commands to a 7-line pointer to AGENTS.md and `.github/AGENTS.md` |
| `llms.txt` | Removed 7 duplicate URLs — stale gateway/changelog and Resource HUB placeholder entries |
| `operations/tests/unit/skill-docs.test.js` | Added `content-pipeline` to `VALID_CATEGORIES` enum to match existing skill data |
| `ai-tools/agent-packs/claude/CLAUDE.md` | Regenerated by cross-agent-packager — reflects current skill catalog |
| `ai-tools/agent-packs/cursor/rules.md` | Regenerated by cross-agent-packager |
| `ai-tools/agent-packs/windsurf/rules.md` | Regenerated by cross-agent-packager |
| `ai-tools/agent-packs/codex/skills-manifest.json` | Regenerated by cross-agent-packager |
| `ai-tools/agent-packs/README.md` | Regenerated by cross-agent-packager |

### Archived Files (git mv, no content loss)

| File | Destination | Reason |
|---|---|---|
| `ai-tools/ai-rules/rules/imported/copilot-instructions.md` | `ai-tools/ai-rules/_retired/imported-copilot-instructions.md` | Duplicate of `.github/copilot-instructions.md` — canonical copy is authoritative |

### Pre-existing Artifacts (confirmed current, no changes needed)

| File | Description |
|---|---|
| `ai-tools/ai-rules/best-practices.md` | Best-practice guide — scope discipline, ask vs proceed, ambiguity, findings comms, checkpointing |
| `ai-tools/ai-rules/ROLLBACK-GUIDE.md` | Emergency rollback reference — diagnose-first approach, safe git recovery commands |
| `ai-tools/ai-rules/HUMAN-OVERRIDE-POLICY.md` | Policy for human-authorized hook bypasses |
| `ai-tools/ai-rules/rules/git-safety.md` | Git safety rules for AI agents |
| `ai-tools/ai-rules/_retired/` | Four archived legacy files — UNIVERSAL-AI-PROTOCOL, AI_GUIDELINES, AI-ACCOUNTABILITY-CHECKLIST, REVIEW_TABLE |
| `.github/workflows/check-ai-companions.yml` | CI PR gate — validates glossary companion JSONs + companion manifest consistency |
| `.github/workflows/generate-ai-companions.yml` | CI auto-commit on push to main — generates glossary companion files |
| `docs-guide/catalog/ai-companion-manifest.json` | Registry of 13 AI companion data files with type, tier, and status metadata |
| `ai-tools/ai-skills/skill-docs/SKILL.md` | Governance skill (v1.2) — creates/updates skill artifacts safely with full category/retirement rules |
| `ai-tools/ai-skills/skill-spec-contract.md` | Central contract for governed skill frontmatter, validation rules, 6-value category taxonomy |
| `operations/tests/unit/skill-docs.test.js` | Enforcement suite — validates 62 governed skill artifacts across frontmatter, refs, cycles, structure |

---

## Deferred Items

These items are blocked by external decisions, missing infrastructure, or pending framework completion. None are blockers for current AI agent functionality.

### D1 — Resource HUB placeholder groups in docs.json

**What:** `docs.json` lines 3179–3256 (Resource HUB tab) contains 7 stub nav groups where real pages should be — "Developer References", "Orchestrator References", "LPT & Delegator References", "Community Resources", "Partner Resources", "Help Center", "Livepeer Concepts". Each uses `v2/resources/livepeer-glossary` as a placeholder page.

**Why deferred:** docs.json edits require user confirmation before commit (AGENTS.md governance rule). The fix requires either real content decisions for each group (what pages actually belong there) or removal of the stub groups entirely.

**Impact:** llms.txt will re-accumulate duplicates on next regeneration if not fixed first.

**Suggested fix:** Either populate each group with the correct pages, or remove the empty stubs with a `docs.json` commit confirmed by the user.

---

### D2 — llms.txt regeneration (generator dependency on `unified` package)

**What:** The llms.txt generator (`operations/scripts/generators/ai/llm/generate-llms-files.js`) fails locally because the ESM `unified` package is in `tools/node_modules/` but ESM module resolution doesn't check sibling-tree directories. Running `npm --prefix tools ci` installs it but doesn't fix the path resolution for ESM `import()`.

**Why deferred:** Works in CI (runs as `npm --prefix tools ci && node …` in same shell). Local developer invocation fails.

**Suggested fix:** Add a `package.json` at `operations/scripts/generators/ai/llm/` with `unified`, `remark-parse`, `remark-mdx`, `remark-stringify`, `unist-util-visit` as dependencies, or create a root-level `package.json` workspaces config.

---

### D3 — CDA-5: CoinGecko snapshot auto-generation

**What:** `snippets/data/snapshots/coingecko-livepeer.json` and `coingecko-arbitrum.json` are manually maintained stubs. A generator script would fetch live data from the CoinGecko API.

**Blocker:** Requires network access policy decision (external API call in CI), CoinGecko API key management, and cron/schedule infrastructure decision.

---

### D4 — CDA-7: Tier 2 component page template guidance

**What:** Template guidance for pages that use component-heavy layouts (Tier 2 in the companion discoverability model).

**Blocker:** Depends on the page template system being finalised. Currently tracked in plan2.md Task 3.2.

---

### D5 — Showcase-data.json AI companion

**What:** A structured data companion for the ShowcaseCards component, enabling AI agents to work with showcase content programmatically.

**Blocker:** Showcase content not finalised. No stable data to snapshot.

---

### D6 — Skill consolidation decisions

**What:** Two potential merges under discussion: `docs-quality-and-freshness-audit` + `docs-coverage-and-route-integrity-audit` → single comprehensive audit skill; `docs-review-packet-generation` + `docs-review-fix-execution` → single review-pipeline skill.

**Blocker:** Human decision gate — see plan2.md Task 3.2. Consolidation would reduce skill count from 19 to 17, simplify the agent-pack, and reduce cognitive load on agents choosing between them.

---

### D7 — `.github/AGENTS.md` stale content

**What:** `.github/AGENTS.md` still contains references to the fictional checkpoint branch system (`checkpoint/YYYY-MM-DD_HHMMSS` auto-commits) and uses `tools/scripts/` paths for structure rules. The Codex task lifecycle commands from `AGENT-INSTRUCTIONS.md` (now reduced to a pointer) were not migrated there because the paths were stale.

**Blocker:** This file is read by OpenAI Codex. Updating it is a low-risk edit but should be a separate focused commit. The Codex commands need to be verified at their current `operations/scripts/automations/ai/codex/` paths before being documented.

---

## Recommendations

### R1 — Fix docs.json Resource HUB stubs (unblock llms.txt)

The Resource HUB placeholder groups (D1) are the highest-priority item. They make llms.txt regeneration non-idempotent and degrade AI context quality. Resolve by either assigning real content or explicitly removing the stub groups in a user-confirmed docs.json commit.

---

### R2 — Add llms.txt to CI freshness gate

Once the generator's ESM dependency issue (D2) is resolved, add `generate-llms-files.js --check` to the existing `check-ai-companions.yml` workflow. This would catch llms.txt drift the same way the companion manifest is checked today. One additional step in an existing job.

---

### R3 — Update `.github/AGENTS.md` (Codex baseline)

`.github/AGENTS.md` is the file OpenAI Codex reads for Codex-specific rules. It still has:
- Fictional checkpoint branch system (lines 31-45)
- Outdated structure rules (`tools/scripts/` references, wrong directory map)
- Missing: the Codex task lifecycle commands (task-preflight, lock-release, create-codex-pr) with correct `operations/scripts/` paths

A focused rewrite of `.github/AGENTS.md` would complete the agent instruction cleanup and give Codex accurate operational guidance.

---

### R4 — ~~Add `content-pipeline` to `skill-docs/SKILL.md` invoke_when~~ RESOLVED

> **Resolved 2026-03-26.** The `invoke_when` field was removed during the agentskills.io alignment migration. All 61 governed skill files were migrated to the `metadata:` block standard; `invoke_when` no longer exists. The `content-pipeline` category is already present in `skill-docs/SKILL.md` v1.4 Constraints section. No action needed.

---

### R5 — ai-skills catalog auto-sync to category

The `ai-tools/ai-skills/catalog/skill-catalog.json` is a manually maintained index. Consider adding a generator step to the `cross-agent-packager` workflow that auto-derives the catalog from the SKILL.md frontmatter fields (including `category`). This would prevent catalog drift when new skills are added.

---

### R6 — Template/agent-pack parity check in CI

The `validateFolderStructure()` check (Check C) currently runs in `skill-docs.test.js` and is only triggered locally. Add `node operations/tests/unit/skill-docs.test.js` to the PR gates in `.github/workflows/` so template/pack parity is enforced on every PR. The test already exists — it just needs to be wired.

---

### R7 — Resolve plan2.md decision gates

`workspace/plan/active/AI-TOOLS-GOVERNANCE/plan2.md` has two items blocked on human decision:
- Task 3.1: `docs-guide/` restructure — affects how governance docs are organised and discovered
- Task 3.2: Skill consolidation — whether to merge overlapping skills

These are low-urgency but should be resolved before the skill count grows further (currently 19, growing with content-pipeline additions).
