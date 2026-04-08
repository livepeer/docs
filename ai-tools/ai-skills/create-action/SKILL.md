---
name: create-action
description: >-
  Scaffold a new governed GitHub Actions workflow with its backing script,
  correct naming, governance headers, actions-audit.json entry, and trigger
  self-documenting pipelines (action catalog pages, script catalog). Implements
  the dispatcher model (D-ACT-08) where workflows are thin shells calling
  governed scripts. Use when creating a new GitHub Actions workflow.
metadata:
  version: "1.0"
  category: authoring
  status: "active"
  dispatches:
    - create-script
---

# SKILL: Create Action — Governed GitHub Actions Workflow Scaffold

Scaffolds a workflow YAML (the dispatcher) and its backing script (the worker) as a governed pair. The dispatcher model (D-ACT-08) means the workflow handles WHEN/WHERE/WHO, the script handles WHAT/HOW. This skill creates both and wires them together.

---

## When to use

- Creating a new CI/CD workflow (PR check, post-merge generator, scheduled scan, etc.)
- Adding a new automated pipeline step
- Wrapping an existing script as a GitHub Actions workflow

## When NOT to use

- Editing an existing workflow (edit the YAML directly)
- Creating a script that does not need a workflow trigger (use `/create-script` directly)
- Creating a reusable workflow that calls other workflows (manual — complex orchestration)

---

## Architecture: The Dispatcher Model (D-ACT-08)

All workflow YAML files are dispatchers. They handle trigger, permissions, environment, and orchestration. The typed work lives in scripts.

| Layer | Role | Has type? |
|---|---|---|
| Workflow YAML | Dispatcher: trigger, permissions, environment, orchestration | No (all dispatchers) |
| Script | Does the work: integrates, generates, validates, audits, remediates | Yes (7-type taxonomy) |

**Consequence:** Creating an "action" always means creating TWO files — a workflow YAML and a backing script. This skill handles both.

---

## Inputs

The agent must provide ALL inputs before scaffolding begins.

### Workflow inputs

| Input | Required | Type | Validation |
|---|---|---|---|
| `type` | Yes | enum | One of 7: `integrator`, `generator`, `validator`, `audit`, `remediator`, `dispatch`, `interface` |
| `concern` | Yes | enum | One of 7: `copy`, `health`, `maintenance`, `discoverability`, `governance`, `brand`, `integrations` |
| `verb` | Yes | enum | One of 11: `update`, `generate`, `check`, `scan`, `repair`, `dispatch`, `label`, `index`, `intake`, `close`, `assign` |
| `name` | Yes | string | Descriptive kebab-case slug |
| `displayName` | Yes | string | Human-readable workflow name |
| `pipelineTag` | Yes | enum | One of: `P2`, `P3`, `P4`, `P5`, `P5-auto`, `P6`, `manual`, `event-driven` |
| `triggers` | Yes | array | GitHub Actions trigger events (see Pipeline Tag Reference) |
| `cronSchedule` | If schedule | string | Cron expression (e.g. `'0 6 * * 1'` for Monday 6am UTC) |
| `pathFilters` | No | array | Glob patterns for `paths:` trigger filter |
| `permissions` | Yes | object | GitHub token permissions (e.g. `{ contents: 'read', pull-requests: 'write' }`) |

### Backing script inputs

| Input | Required | Type | Passed to `/create-script` |
|---|---|---|---|
| `scriptName` | Yes | string | Script filename (kebab-case, verb-noun, prefix matches type) |
| `scriptNiche` | Yes | string | Niche folder under the concern |
| `scriptDescription` | Yes | string | One-line UK English description |
| `scriptPurpose` | Yes | string | Namespaced purpose string |
| `scriptScope` | Yes | string | Target paths/patterns |
| `scriptPolicy` | No | string | Governance requirement IDs |

The remaining script inputs (`type`, `concern`, `mode`, `pipeline`, `usage`) are derived automatically from the workflow inputs.

---

## Pipeline Tag Reference

| Tag | Trigger pattern | Auto-commit? | Typical type |
|---|---|---|---|
| **P2** | `pull_request` (required check) | No | `validator` |
| **P3** | `pull_request` (non-required) | No | `validator`, `audit` |
| **P4** | `push` to deploy branch | Yes | `generator` |
| **P5** | `schedule` (read-only) | No | `audit` |
| **P5-auto** | `schedule` + auto-commit | Yes | `integrator`, `generator` |
| **P6** | `schedule` + auto-fix + PR | Yes | `remediator` |
| **manual** | `workflow_dispatch` only | Varies | Any |
| **event-driven** | `repository_dispatch` / `issues` | No | `interface` |

---

## Pipeline Patterns (7 shapes)

| Pattern | Shape | When to use |
|---|---|---|
| **A: Integrate** | Fetch → diff → commit | External data (APIs, feeds, addresses) |
| **B: Generate** | Build from internal data → commit | Indexes, registries, sitemaps, catalogs |
| **C: Check** | Validate on PR → report pass/fail | Quality gates, compliance checks |
| **D: Scan, Report, Act** | Schedule → monitor → route response | Freshness, health, drift detection |
| **E: Repair** | Fix broken state → commit or PR | Metadata repair, spelling fix |
| **F: React** | Issue/PR event → triage, no file changes | Labelling, assignment, indexing |
| **G: Orchestrate** | Dispatch children → aggregate results | Multi-script pipelines |

---

## Step 0: Validate inputs

Before writing any file:

1. Derive workflow filename: `{type}-{concern}-{verb}-{name}.yml`
2. Check it does not already exist in `.github/workflows/`
3. Check it is not already in `.github/workspace/actions-library/actions-audit.json`
4. Check `type` is one of the 7 values
5. Check `concern` is one of the 7 values
6. Check `verb` is one of the 11 values
7. Check `pipelineTag` aligns with the type (see Pipeline Tag Reference)
8. If `type === 'generator'`, plan a verifier pair workflow
9. Validate all backing script inputs against `/create-script` rules

**HALT with clear error if any check fails.**

---

## Step 1: Invoke `/create-script` for the backing script

Pass these inputs to the `/create-script` skill:

| `/create-script` input | Value |
|---|---|
| `scriptName` | From workflow inputs |
| `type` | Same as workflow `type` |
| `concern` | Mapped: workflow concern → script concern (see Concern Mapping) |
| `niche` | From `scriptNiche` input |
| `purpose` | From `scriptPurpose` input |
| `description` | From `scriptDescription` input |
| `mode` | Derived from type (see `/create-script` Mode Alignment table) |
| `pipeline` | Derived: `{trigger} → {scope} → {outputs}` |
| `scope` | From `scriptScope` input |
| `usage` | Auto-derived: `node operations/scripts/{type}s/{concern}/{niche}/{scriptName}.js [--flags]` |
| `policy` | From `scriptPolicy` input |

### Concern mapping (workflow → script)

| Workflow concern | Script concern |
|---|---|
| `copy` | `content` |
| `health` | `content` |
| `maintenance` | `components` or `governance` (agent decides based on what the script does) |
| `discoverability` | `content` or `ai` |
| `governance` | `governance` |
| `brand` | `content` |
| `integrations` | `content` |

This step creates the governed script, runs `script-docs.test.js`, and updates the script catalog.

---

## Step 2: Scaffold the workflow YAML

**Path:** `.github/workflows/{type}-{concern}-{verb}-{name}.yml`

### Template

```yaml
# type: {type}
# concern: {concern}
# pipeline: {pipelineTag}
name: {displayName}

on:
  # -- Trigger block: varies by pipeline tag --
  # P2/P3: pull_request
  # P4: push to deploy branch
  # P5/P5-auto/P6: schedule
  # manual: workflow_dispatch
  # event-driven: repository_dispatch / issues

permissions:
  {permissions}

concurrency:
  group: {type}-{concern}-{verb}-{name}
  cancel-in-progress: {true for validators/audits, false for generators/integrators}

jobs:
  {verb}-{name}:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install dependencies
        run: npm ci --ignore-scripts

      - name: Run {scriptName}
        run: node {script-path} {flags}
```

### Trigger blocks by pipeline tag

**P2 (required PR check):**
```yaml
on:
  pull_request:
    branches: [docs-v2]
    paths: [{pathFilters}]
```

**P3 (advisory PR check):**
```yaml
on:
  pull_request:
    branches: [docs-v2]
    paths: [{pathFilters}]
```

**P4 (post-merge auto-commit):**
```yaml
on:
  push:
    branches: [docs-v2]
    paths: [{pathFilters}]
```
Add auto-commit step after the script run:
```yaml
      - name: Commit changes
        if: steps.run.outputs.changed == 'true'
        run: |
          git config user.name "github-actions[bot]"
          git config user.email "github-actions[bot]@users.noreply.github.com"
          git add -A
          git commit -m "chore({concern}): auto-{verb} {name}" || true
          git push
```

**P5 (scheduled read-only):**
```yaml
on:
  schedule:
    - cron: '{cronSchedule}'
  workflow_dispatch:
```

**P5-auto (scheduled with auto-commit):**
```yaml
on:
  schedule:
    - cron: '{cronSchedule}'
  workflow_dispatch:
```
Add auto-commit step (same as P4).

**P6 (scheduled auto-fix with PR):**
```yaml
on:
  schedule:
    - cron: '{cronSchedule}'
  workflow_dispatch:
```
Add PR creation step:
```yaml
      - name: Create repair PR
        if: steps.run.outputs.changed == 'true'
        uses: peter-evans/create-pull-request@v7
        with:
          branch: auto/{verb}-{name}
          title: "fix({concern}): auto-{verb} {name}"
          body: "Automated repair by {displayName} workflow."
```

**manual:**
```yaml
on:
  workflow_dispatch:
    inputs:
      dry_run:
        description: 'Dry run (no writes)'
        required: false
        default: 'true'
        type: boolean
```

**event-driven:**
```yaml
on:
  issues:
    types: [opened, edited, labeled]
  # or:
  repository_dispatch:
    types: [custom-event-name]
```

---

## Step 3: Scaffold verifier workflow (conditional)

**Only if `type === 'generator'`.** The generate/verify pairs rule (D-ACT framework) requires every generator to have a matching verifier.

**Verifier filename:** `validator-{concern}-check-{name}.yml`
**Verifier pipeline tag:** `P3` (advisory, or `P2` if hard gate requested)

```yaml
# type: validator
# concern: {concern}
# pipeline: P3
name: Verify {displayName}

on:
  pull_request:
    branches: [docs-v2]
    paths: [{pathFilters}]

permissions:
  contents: read

concurrency:
  group: validator-{concern}-check-{name}
  cancel-in-progress: true

jobs:
  check-{name}:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install dependencies
        run: npm ci --ignore-scripts

      - name: Check {name} freshness
        run: node {script-path} --check
```

The `--check` flag is already part of the backing script scaffold (generators include it by default via `/create-script`).

---

## Step 4: Update actions-audit.json

Add new entry to `.github/workspace/actions-library/actions-audit.json` in the `workflows` array:

```json
{
  "file": "{type}-{concern}-{verb}-{name}.yml",
  "name": "{displayName}",
  "type": "{type}",
  "concern": "{concern}",
  "pipeline_tag": "{pipelineTag}",
  "triggers": ["{trigger1}", "{trigger2}"],
  "scripts": ["operations/scripts/{type}s/{scriptConcern}/{niche}/{scriptName}.js"],
  "has_inline_script": false,
  "has_permissions": true,
  "has_concurrency": true,
  "has_auto_commit": {true if P4/P5-auto/P6, false otherwise},
  "status": "active"
}
```

If a verifier workflow was created in Step 3, add a second entry for it.

Update the `meta.workflow_count` to reflect the new total.

---

## Step 5: Run self-documenting pipelines

```bash
# Regenerate action catalog pages from updated audit data
node .github/workspace/actions-library/generate-action-pages.js
```

This generates:
- A per-action MDX page in `.github/workspace/actions-library/{type}s/{concern}/`
- An updated `catalog-index.mdx` with the full workflow inventory

---

## Step 6: YAML validation

Validate the generated YAML is syntactically correct:

```bash
node -e "const yaml = require('js-yaml'); const fs = require('fs'); yaml.load(fs.readFileSync('.github/workflows/{filename}', 'utf8')); console.log('YAML valid');"
```

If `js-yaml` is not available, use:

```bash
node -e "const fs = require('fs'); const content = fs.readFileSync('.github/workflows/{filename}', 'utf8'); if (!content.startsWith('# type:')) { console.error('Missing governance header'); process.exit(1); } console.log('Header present');"
```

---

## Step 7: Verify outputs

1. Confirm workflow file exists in `.github/workflows/`
2. Confirm backing script exists in `operations/scripts/`
3. Confirm entry in `actions-audit.json`
4. Confirm action library page generated in `.github/workspace/actions-library/`
5. Confirm backing script in `docs-guide/catalog/scripts-catalog.mdx`
6. If generator: confirm verifier workflow also exists and has its own audit entry

**Report to the user:**

```
Created workflow:  .github/workflows/{type}-{concern}-{verb}-{name}.yml
Created script:    operations/scripts/{type}s/{concern}/{niche}/{scriptName}.js
Verifier:          {.github/workflows/validator-{concern}-check-{name}.yml OR "N/A (not a generator)"}
Audit entry:       ✅ Added to actions-audit.json
Action library:    ✅ Page generated
Script catalog:    ✅ Updated
YAML validation:   ✅ Valid
```

---

## Reference files

| File | Purpose |
|---|---|
| `docs-guide/frameworks/github-actions.mdx` | Published canonical framework |
| `.github/workspace/framework-canonical.md` | Full specification |
| `.github/workspace/decisions-log.mdx` | 8 locked decisions (D-ACT-01 to D-ACT-08) |
| `.github/workspace/actions-library/actions-audit.json` | Source of truth for workflow metadata |
| `.github/workspace/actions-library/generate-action-pages.js` | Catalog page generator |
| `.github/workspace/actions-library/catalog-index.mdx` | Generated catalog index |
| `operations/governance/config/generated-artifacts.json` | Generated artifacts registry (update if workflow produces files) |
