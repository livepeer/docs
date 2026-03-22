# AI Governance — Open Items Plan

**Status:** Active — consolidates all open AI governance items post Phase 1–8 completion

---

## Context

Phases 1–8 of the AI-Tools Governance plan are complete. This plan captures all remaining open items across five concern areas: path accuracy, AI discoverability, ai-tools navigation/docs, ai-skills structural integrity, and agent instructions cleanup. Items are ordered by dependency — earlier tasks unblock later ones.

**Already done:**
- `ai-tools/README.md` — exists ✓
- `ai-tools/registry/README.md` — exists ✓
- `ai-tools/ai-rules/_retired/` — three legacy files archived ✓
- `ai-tools/ai-rules/best-practices.md` — created ✓
- `AGENTS.md` best-practices extensions — done ✓
- Phase 1 path accuracy fixes — done ✓
- Phase 2.1 CI wire for check-companion-manifest — done ✓

---

## Phase 1 — Path Accuracy Fixes ✅

### Task 1.1 — Fix AGENTS.md validator table paths ✅

**File:** `AGENTS.md`

Replaced three stale `tools/scripts/` entries with correct `operations/scripts/` paths:
- `validate-frontmatter.js` → `lint-structure.js` (correct validator for routing/nav)
- `check-agent-docs-freshness.js` path prefix corrected
- `generate-docs-guide-indexes.js` path prefix corrected

### Task 1.2 — Fix ai-tools/README.md registry script path ✅

**File:** `ai-tools/README.md`

Changed `node tools/scripts/validators/governance/compliance/validate-ai-tools-registry.js`
to `node operations/scripts/validators/governance/compliance/validate-ai-tools-registry.js`

### Task 1.3 — Archive ai-rules/rules/imported/ ✅

`ai-tools/ai-rules/rules/imported/copilot-instructions.md` archived to `ai-tools/ai-rules/_retired/imported-copilot-instructions.md`.
Empty `rules/imported/` directory removed.

---

## Phase 2 — AI Discoverability Deferred Items

### Task 2.1 — Wire CDA-6: companion manifest CI check ✅

**File created:** `.github/workflows/check-ai-companion-manifest.yml`
**Script:** `operations/scripts/validators/governance/ai/check-companion-manifest.js`

### Task 2.2 — Fix llms.txt duplicate URLs

**Status:** Pending

Run generator with `--check` to identify 7 duplicate URLs:
```bash
node operations/scripts/generators/content/catalogs/generate-llms-files.js --check
```
Fix at source (MDX pages with identical titles or listed twice in `docs.json`), then regenerate.

---

## Phase 3 — ai-tools Navigation and Docs

### Task 3.1 — Add agent setup guides to docs.json nav

**Status:** Pending

Files `ai-tools/claude-code.mdx`, `ai-tools/cursor.mdx`, `ai-tools/windsurf.mdx` exist but are not in `docs.json` navigation.
Check `docs.json` for existing `ai-tools` or `tooling` nav group. If found, add entries there.
Verify: `lpd test --staged` passes.

### Task 3.2 — Reduce AGENT-INSTRUCTIONS.md to a pointer

**Status:** Pending

**File:** `contribute/CONTRIBUTING/AGENT-INSTRUCTIONS.md`

Per `docs-guide/policies/agent-governance-framework.mdx`: reduce to a link to AGENTS.md.

Replace full content with:
```markdown
# Agent Instructions

The canonical agent baseline is [`AGENTS.md`](../../AGENTS.md) at repo root.

For Codex-specific task isolation rules (branch naming, task contract, locks):
see `.github/AGENTS.md` (read alongside root `AGENTS.md` via directory-walk).

For override policy: `ai-tools/ai-rules/HUMAN-OVERRIDE-POLICY.md`.
```

---

## Phase 4 — ai-skills Structural Integrity (Phase 7 completion)

### Task 4.1 — Add `category` field to all 16 local SKILL.md files

**Status:** Pending

Category taxonomy:

| Value | Skills |
|---|---|
| `audit` | `script-footprint-and-usage-audit`, `docs-quality-and-freshness-audit`, `docs-coverage-and-route-integrity-audit`, `rubric-static-review` |
| `authoring` | `page-authoring`, `docs-copy`, `product-thinking` |
| `governance` | `component-layout-governance`, `generated-mdx-banners-governance`, `style-and-language-homogenizer-en-gb`, `cleanup-quarantine-manager` |
| `review-pipeline` | `docs-review-packet-generation`, `docs-review-fix-execution` |
| `meta` | `repo-audit-orchestrator`, `cross-agent-packager`, `skill-docs` |

Add `category: <value>` after `version` in each file's frontmatter. Bump `version` (e.g. `"1.0"` → `"1.1"`).

Also update `ai-tools/ai-skills/skill-spec-contract.md`:
- Add `category` to required fields table
- Add the 5 allowed values as an enum
- Move `tier` from "template-only" to "Optional fields (local + template)"

### Task 4.2 — Add structural enforcement to skill-docs.test.js

**Status:** Pending

**File:** `tests/unit/skill-docs.test.js`

Add three new checks in a `validateFolderStructure()` function:

- **Check A — Root loose-file guard:** Fail if any `.md`/`.json` found at `ai-tools/ai-skills/` root except `content-map.md`, `inventory.json`, `skill-spec-contract.md`
- **Check B — Template prefix uniqueness:** Fail if any numeric prefix appears more than once
- **Check C — Template/agent-pack parity:** Fail if template count ≠ agent-pack skill count

### Task 4.3 — Update skill-docs/SKILL.md

**Status:** Pending

Add to Constraints section:
- `category` field is required (enum: audit, authoring, governance, review-pipeline, meta)
- `tier` is optional on local skills
- Retired skills go to `_workspace/retired/` via `git mv`, never deleted
- Template prefix must be sequential

Update `invoke_when` to include "add category to an existing skill" and "retire a skill".
Bump version to `"1.1"`.

### Task 4.4 — Regenerate all agent-pack exports

**Status:** Pending

After Tasks 4.1–4.3:
```bash
node tools/scripts/automations/ai/agents/cross-agent-packager.js --agent-pack all
```

---

## Phase 5 — Deferred (needs decision or dependency)

| Item | Blocker |
|---|---|
| CDA-5: auto-generation script for CoinGecko snapshots | Needs network access + cron infrastructure decision |
| CDA-7: template guidance for Tier 2 component pages | Depends on page template system being finalized |
| Showcase-data.json companion | Showcase content not finalised |
| Skill consolidation (docs-quality + docs-coverage, review-packet + review-fix) | Human decision gate — see plan2.md Task 3.2 |
| `docs-guide/` restructure | Human decision gate — see plan2.md Task 3.1 |

---

## Verification Sequence

Run in order after all phases complete:

```bash
# 1. Path accuracy
node operations/scripts/validators/governance/compliance/check-agent-docs-freshness.js --json

# 2. Skill validator
node tests/unit/skill-docs.test.js

# 3. No stale tools/ paths in ai-tools/
grep -rn "node tools/scripts/" ai-tools/README.md AGENTS.md

# 4. category field count
grep -r "^category:" ai-tools/ai-skills/*/SKILL.md | wc -l
# → 16

# 5. Template/agent-pack parity
ls ai-tools/ai-skills/templates/*.template.md | wc -l
ls -d ai-tools/agent-packs/skills/*/ | wc -l
# → equal
```
