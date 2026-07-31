---
name: create-script
description: >-
  Scaffold a new governed operational script with 11-tag JSDoc header, correct
  type/concern/niche folder placement, standard file layout, CLI argument
  parsing, and trigger self-documenting pipelines (script catalog, governance
  map). Use when creating a new script in the operations/scripts tree.
metadata:
  version: "1.0"
  category: authoring
  status: "active"
---

# SKILL: Create Script — Governed Operations Script Scaffold

Scaffolds a new script that is governance-compliant from the first line. Validates inputs against the three-tier taxonomy, writes the file with the enforced layout, updates the catalog, and runs header validation — so the agent never has to read the 52KB framework spec.

---

## When to use

- Creating a new audit, generator, validator, remediator, dispatch, integrator, or interface script
- Adding a new pipeline step, governance check, or data processing script
- Wrapping an external API call or data feed as a governed integrator

## When NOT to use

- Editing an existing script (edit the file directly)
- Creating a GitHub Actions workflow (use `/create-action` — it calls this skill internally for the backing script)
- Creating a shared library/utility (those go in `operations/scripts/config/` or `tools/lib/`, different pattern)

---

## Inputs

The agent must provide ALL inputs before scaffolding begins. Collect them all, validate, then scaffold.

| Input | Required | Type | Validation |
|---|---|---|---|
| `scriptName` | Yes | kebab-case string | UK English spelling, verb-noun pattern, prefix must match type (see Naming table) |
| `type` | Yes | enum | One of: `audit`, `generator`, `validator`, `remediator`, `dispatch`, `integrator`, `interface` |
| `concern` | Yes | enum | One of: `content`, `components`, `governance`, `ai` (legacy), `copy`, `health`, `maintenance`, `discoverability`, `brand`, `integrations` |
| `niche` | Yes | string | Must match an existing niche for the type×concern combination (see Niche Reference), or propose a new one with justification |
| `purpose` | Yes | string | Namespaced: `qa:content-quality`, `infrastructure:pipeline-orchestration`, `governance:index-management`, etc. |
| `description` | Yes | string | UK English, one line, no line breaks |
| `mode` | Yes | enum | One of: `read-only`, `write`, `edit`, `generate`, `execute` — must align with type (see Mode Alignment) |
| `pipeline` | Yes | string | Flow notation: `trigger → inputs → outputs [→ dependants]` |
| `scope` | Yes | string | Target paths/patterns: `staged`, `changed`, `full-repo`, `v2-content`, `single-file`, or specific paths |
| `usage` | Yes | string | Full CLI invocation example |
| `policy` | No | string | Governance requirement IDs (e.g. `E-R12, E-R14`) or `—` |

---

## Naming Convention (ENFORCED)

| Type | Required prefix | Examples |
|---|---|---|
| `validator` | `check-`, `lint-`, `validate-`, `enforce-`, `verify-` | `check-component-health.js`, `validate-codex-task-contract.js` |
| `generator` | `generate-` | `generate-component-registry.js`, `generate-docs-index.js` |
| `remediator` | `repair-`, `sync-`, `fix-` | `repair-spelling.js`, `sync-mintlify-canonical-consumers.js` |
| `audit` | `audit-`, `scan-`, `measure-` | `audit-v2-usefulness.js`, `scan-component-imports.js` |
| `dispatch` | Descriptive (no prefix) | `governance-pipeline.js`, `page-integrity-dispatch.js` |
| `integrator` | `translate-`, `fetch-`, `convert-`, `update-` | `fetch-discord-feed.js`, `update-contract-addresses.js` |
| `interface` | Descriptive | `issue-auto-label.js`, `pr-close-handler.js` |

**All filenames:** lowercase-kebab-case, UK English (`-ise`, `-our`, `-re`).

---

## Mode-to-Type Alignment (ENFORCED)

| Type | Expected mode | Why |
|---|---|---|
| `audit` | `read-only` | Scans and reports, never modifies source |
| `validator` | `read-only` | Checks conditions, exits 0 or 1 |
| `generator` | `generate` or `write` | Produces new files from source-of-truth |
| `remediator` | `edit` | Modifies existing files in place |
| `dispatch` | `execute` | Orchestrates child processes |
| `integrator` | `write`, `generate`, or `execute` | Pulls external data, transforms, writes |
| `interface` | `execute` | Reacts to external events |

---

## Niche Reference (by type × concern)

### audits/

| Concern | Niches |
|---|---|
| `content/` | `data/`, `quality/`, `reconciliation/`, `reference/`, `style/`, `veracity/` |
| `components/` | `documentation/`, `library/` |
| `governance/` | `scripts/`, `repo/`, `reports/` |

### generators/

| Concern | Niches |
|---|---|
| `content/` | `catalogs/`, `data/`, `seo/`, `reference/` |
| `components/` | `documentation/`, `library/` |
| `governance/` | `catalogs/`, `reports/`, `scaffold/`, `root/`, `repo/` |
| `ai/` | `llm/` |

### validators/

| Concern | Niches |
|---|---|
| `content/` | `copy/`, `structure/`, `grammar/`, `language-translation/`, `veracity/` |
| `components/` | `documentation/`, `library/` |
| `governance/` | `ai/`, `compliance/`, `pr/`, `repo/` |

### remediators/

| Concern | Niches |
|---|---|
| `content/` | `repair/`, `style/`, `classification/`, `seo/` |
| `components/` | `library/` |
| `governance/` | `scaffold/`, `scripts/` |

### dispatch/

| Concern | Niches |
|---|---|
| `content/` | `veracity/`, `health/`, `data/` |
| `governance/` | `pipelines/`, `repo/` |
| `ai/` | `codex/`, `agents/` |

### integrators/

| Concern | Niches |
|---|---|
| `content/` | social feeds, changelog, contract data |
| `governance/` | metadata sync |
| `ai/` | external AI data |

### interfaces/

| Concern | Niches |
|---|---|
| `governance/` | issue/PR lifecycle |

---

## Step 0: Validate inputs

Before writing any file:

1. Check `scriptName` is kebab-case: `/^[a-z][a-z0-9-]+$/`
2. Check verb prefix matches type (Naming table above)
3. Check UK English spelling (no `-ize`, `-ization`)
4. Check `mode` aligns with `type` (Mode Alignment table)
5. Derive full path: `operations/scripts/{type}s/{concern}/{niche}/{scriptName}.js`
   - Note: type folder is **pluralised** (`audit` → `audits/`, `generator` → `generators/`, etc.)
6. Check path does not already exist
7. Check niche is valid for type×concern (Niche Reference above) or justified as new

**HALT with clear error if any check fails.**

---

## Step 1: Create niche directory if needed

If `operations/scripts/{type}s/{concern}/{niche}/` does not exist, create it.

---

## Step 2: Scaffold the script file

**Path:** `operations/scripts/{type}s/{concern}/{niche}/{scriptName}.js`

### File layout (ENFORCED — 8 sections in this exact order)

```javascript
#!/usr/bin/env node
/**
 * @script      {scriptName}
 * @type        {type}
 * @concern     {concern}
 * @niche       {niche}
 * @purpose     {purpose}
 * @description {description}
 * @mode        {mode}
 * @pipeline    {pipeline}
 * @scope       {scope}
 * @usage       {usage}
 * @policy      {policy}
 */

'use strict';

const fs = require('fs');
const path = require('path');

// ---------------------------------------------------------------------------
// Config — all paths, thresholds, constants in the first ~30 lines after imports
// ---------------------------------------------------------------------------

const REPO_ROOT = process.cwd();

// ---------------------------------------------------------------------------
// CLI argument parsing
// ---------------------------------------------------------------------------

const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');
const jsonOutput = args.includes('--json');
const mdOutput = args.includes('--md');
const helpFlag = args.includes('--help') || args.includes('-h');

function argValue(name) {
  const idx = args.indexOf(name);
  return idx === -1 ? '' : (args[idx + 1] || '');
}

// ---------------------------------------------------------------------------
// Help
// ---------------------------------------------------------------------------

function usage() {
  console.log(
    [
      'Usage: {usage}',
      '',
      'Options:',
      '  --dry-run   Preview changes without writing',
      '  --json      Output as JSON',
      '  --md        Output as Markdown',
      '  --help, -h  Show this help message'
    ].join('\n')
  );
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

// TODO: Add helper functions

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

function main() {
  if (helpFlag) {
    usage();
    process.exit(0);
  }

  // TODO: Implement main logic

  process.exit(0);
}

// ---------------------------------------------------------------------------
// Entry point
// ---------------------------------------------------------------------------

if (require.main === module) {
  main();
}

module.exports = { main };
```

### Type-specific additions to the scaffold

**For generators:**
- Add `--check` flag (verify output is current, exit 0 if fresh, 1 if stale)
- Add `--write` flag (actually write the output file)
- Default (no flags) = dry-run to stdout

**For validators:**
- Exit 1 on violations found, 0 on pass, 2 on usage error
- Structured report: count violations, list each with file + line + message

**For remediators:**
- `--dry-run` shows what would change without writing
- `--staged` limits scope to git-staged files only

**For dispatch:**
- Use `child_process.spawnSync` or `execSync` to call child scripts
- Aggregate results from all children
- Exit with worst child exit code

### Hard constraints

1. **`REPO_ROOT = process.cwd()`** — NEVER `path.resolve(__dirname, '../../../../..')`. Fragile, breaks if script moves.
2. **Config at top** — all paths, thresholds, constants in the first ~30 lines after imports. No magic strings buried in functions.
3. **Exit codes** — 0=success, 1=failure/violations, 2=usage error (bad arguments, missing required flags).
4. **UK English** — filenames and descriptions (`finalise`, `colour`, `behaviour`, not `finalize`, `color`, `behavior`).
5. **No placeholder tags** — `script-docs.test.js` rejects `<...>`, `todo`, `tbd`, `fill`, `n/a`, `none` in JSDoc values.

---

## Step 3: Run validators

```bash
node operations/tests/unit/script-docs.test.js
```

Must exit 0. If it fails, read the error — it will tell you exactly which tag is missing or malformed.

---

## Step 4: Run self-documenting pipelines

```bash
# Regenerate the script catalog from JSDoc headers
node operations/tests/unit/script-docs.test.js --write --rebuild-indexes

# Update the governance map
node operations/scripts/generators/governance/repo/generate-governance-map.js --write
```

---

## Step 5: Update tier manifest (conditional)

If the script has a pipeline tag of P1-P6 (not `manual`), check whether `tools/config/script-governance.json` needs a new entry for the script's enforcement tier.

---

## Step 6: Verify outputs

1. Confirm script appears in `docs-guide/catalog/scripts-catalog.mdx`
2. Confirm `script-docs.test.js` passes (exit 0)
3. Run the script with `--help` — confirm it prints usage and exits 0

**Report to the user:**

```
Created: operations/scripts/{type}s/{concern}/{niche}/{scriptName}.js
Catalog: ✅ Updated in scripts-catalog.mdx
Headers: ✅ script-docs.test.js passes
Help:    ✅ --help exits 0
```

---

## Reference files

| File | Purpose |
|---|---|
| `workspace/plan/active/SCRIPT-GOVERNANCE/script-framework.md` | Full framework specification (52KB) |
| `docs-guide/frameworks/script-framework.mdx` | Published summary |
| `operations/scripts/config/mdx-sanitise.js` | Shared sanitisation utils — MUST import if writing MDX content |
| `tools/config/script-governance.json` | Tier manifest (enforcement levels) |
| `docs-guide/catalog/scripts-catalog.mdx` | Auto-generated script catalog |
| `workspace/reports/repo-ops/GOVERNANCE_MAP_LATEST.json` | Auto-generated governance map |
