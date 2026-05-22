# Technical Architecture Recommendation Plan

**Date:** 2026-03-23
**Author:** Architecture Agent (Claude Sonnet 4.6)
**Source audits:** `audits/master-audit.md`, `recommendations-pipeline.md`, `system-canonical-design/master.mdx`, `system-canonical-design/repo-structure.mdx`, `research-best-practices.md`
**Audience:** Implementation agent. Read this as a direct specification. Each section tells you what to build, what it reads, what it produces, where it wires in, and the core logic. No implementation decision is left open unless explicitly flagged.

---

## Status of the system entering this plan

The repo's documentation governance system is architecturally sound but incompletely wired. The core pattern (`--check` in PR gate, `--write` on push→main, `exit-if-no-diff`, `workflow_dispatch:`) exists and works correctly for 5 of 10 concern surfaces. The remaining 5 surfaces have generators, registries, or declared governance states that are not connected to CI. Two workflows compete on auto-commits to main. Two generators produce mixed-concern outputs with ambiguous triggers. Config files lack schemas. No CI validates whether declared governance states match actual wiring.

Everything described in this plan is wiring, validation, and refactoring — not new policy or new design.

---

## Section 1 — The 5 Missing Scripts

### Script 1: `validate-generated-artifacts.js`

**Output file path**
`operations/scripts/validators/governance/repo/validate-generated-artifacts.js`

**Inputs**
- `tools/config/generated-artifacts.json` — the config under validation
- Node.js `fs.existsSync()` — resolves each path against repo root (`process.cwd()`)

**What it checks**
For every artifact entry in `generated-artifacts.json`, validates that the following fields reference paths that exist on disk:
- `generator` — strip the leading `node ` and any trailing flags (` --write`, ` --check`, ` --fix`) to isolate the script path; call `fs.existsSync(path.join(REPO_ROOT, scriptPath))`
- `sources` — each non-glob entry (entries without `*` or `**`) must resolve; glob entries are skipped (not validated against fs)
- `validators` — each path must resolve
- `repair_commands` — strip `node ` and flags to isolate script paths; each must resolve; skip `lpd repair ...` entries (they are CLI aliases, not paths)

**Exit behavior**
- Exit 0 if all resolvable paths exist
- Exit 1 with a per-entry error list if any path does not resolve
- Output format: one line per failure: `[FAIL] artifact:<id> field:<field> path:<path> — not found`

**`@pipeline` annotation**
```js
/**
 * @script      validate-generated-artifacts
 * @type        validator
 * @concern     repo-structure
 * @niche       governance
 * @purpose     governance:config-validation
 * @pipeline    CI: check-docs-guide-catalogs.yml (PR gate), workflow_dispatch
 */
```

**CI wiring**
Add to `check-docs-guide-catalogs.yml` as the first step after `Install tooling dependencies`. It must run before any generator check steps — if artifact paths are broken, the check steps that follow will produce misleading errors.

Path filter: none required. This validator always runs; it has no file-change dependency. It is a structural integrity check on a config file.

**Core logic (pseudocode)**

```
REPO_ROOT = process.cwd()
config = JSON.parse(readFile('tools/config/generated-artifacts.json'))
failures = []

for each artifact in config.artifacts:
  // Validate generator path
  generatorPath = artifact.generator
    .replace(/^node\s+/, '')
    .replace(/\s+--\S+/g, '')
    .trim()
  if not generatorPath.startsWith('lpd '):
    if not fs.existsSync(join(REPO_ROOT, generatorPath)):
      failures.push({ id: artifact.path, field: 'generator', path: generatorPath })

  // Validate sources (non-glob only)
  for each src in artifact.sources:
    if not src.includes('*'):
      if not fs.existsSync(join(REPO_ROOT, src)):
        failures.push({ id: artifact.path, field: 'sources', path: src })

  // Validate validators
  for each v in (artifact.validators ?? []):
    if not fs.existsSync(join(REPO_ROOT, v)):
      failures.push({ id: artifact.path, field: 'validators', path: v })

  // Validate repair_commands
  for each cmd in (artifact.repair_commands ?? []):
    if cmd.startsWith('lpd '): continue
    scriptPath = cmd
      .replace(/^node\s+/, '')
      .replace(/\s+--\S+/g, '')
      .trim()
    if not fs.existsSync(join(REPO_ROOT, scriptPath)):
      failures.push({ id: artifact.path, field: 'repair_commands', path: scriptPath })

if failures.length > 0:
  for each f in failures: console.error(`[FAIL] artifact:${f.id} field:${f.field} path:${f.path} — not found`)
  process.exit(1)
else:
  console.log('[OK] All paths in generated-artifacts.json resolve.')
  process.exit(0)
```

---

### Script 2: `validate-governance-surfaces.js`

**Output file path**
`operations/scripts/validators/governance/repo/validate-governance-surfaces.js`

**Inputs**
- `tools/config/ownerless-governance-surfaces.json` — the config under validation
- `.github/workflows/*.yml` — all workflow files, read via `fs.readdirSync` + `fs.readFileSync`
- `.githooks/pre-commit` — read as text for hook reference checking

**What it checks**
For each of the 8 surface entries in `ownerless-governance-surfaces.json`, cross-reference declared `gate_layer` and `rollout_state` against actual wiring:

| Declared value | What must be true in repo |
|---|---|
| `gate_layer: pre-commit` | `.githooks/pre-commit` content must reference at least one script in the surface's `surface_globs` directories |
| `gate_layer: pr-changed` | At least one workflow in `.github/workflows/` must trigger on `pull_request:` and have a step that runs a script matching the surface's `canonical_sources` paths |
| `rollout_state: autofix` | At least one workflow in `.github/workflows/` must trigger on `push: branches: [main]` and have a step referencing a script in the surface's `canonical_sources` |
| `rollout_state: migrating` | No CI check — emit a warning only: `[WARN] surface:<id> rollout_state:migrating — not enforced` |
| `rollout_state: advisory` | No CI check — emit a warning only |

**Exit behavior**
- Exit 1 if any surface with `rollout_state: autofix` or `gate_layer: pr-changed` has no matching CI step
- Exit 0 with warnings if only `migrating` or `advisory` states are unimplemented
- Output format: one line per surface: `[OK|WARN|FAIL] surface:<id> gate:<gate_layer> rollout:<rollout_state> — <message>`

**`@pipeline` annotation**
```js
/**
 * @script      validate-governance-surfaces
 * @type        validator
 * @concern     repo-structure
 * @niche       governance
 * @purpose     governance:config-validation
 * @pipeline    CI: check-docs-guide-catalogs.yml (PR gate), workflow_dispatch
 */
```

**CI wiring**
Add to `check-docs-guide-catalogs.yml` immediately after `validate-generated-artifacts.js`. Path filter: none. Always runs — it validates the governance meta-model, not file content.

**Important:** Run this validator only after all other CI wiring described in Section 2 is complete. If wired before the missing check/write steps are added, it will immediately fail on the `ui-templates` and `script-governance` surfaces (which are declared `autofix` but have no autofix wiring yet). The correct sequence is: add CI steps (Section 2) → then wire this validator → then it exits 0.

**Core logic (pseudocode)**

```
REPO_ROOT = process.cwd()
surfaces = JSON.parse(readFile('tools/config/ownerless-governance-surfaces.json'))
workflows = readAllFiles('.github/workflows/*.yml')  // array of { name, content }
preCommit = readFile('.githooks/pre-commit')
failures = []
warnings = []

for each surface in surfaces:
  id = surface.id
  gateLayer = surface.gate_layer
  rolloutState = surface.rollout_state
  sourcePaths = surface.canonical_sources  // array of paths/globs

  if gateLayer == 'pre-commit':
    // Check that pre-commit references at least one path from surface_globs directories
    directories = surface.surface_globs.map(extractDirectory)
    anyReferenced = directories.some(dir => preCommit.includes(dir))
    if not anyReferenced:
      failures.push({ id, field: 'gate_layer', message: 'pre-commit does not reference surface directories' })

  if gateLayer == 'pr-changed':
    // Check that a PR-triggering workflow has a step referencing a canonical_source
    prWorkflows = workflows.filter(w => w.content.includes('pull_request:'))
    anyMatch = prWorkflows.some(w =>
      sourcePaths.some(src => {
        scriptName = path.basename(src)
        return w.content.includes(scriptName)
      })
    )
    if not anyMatch:
      failures.push({ id, field: 'gate_layer:pr-changed', message: 'no PR workflow step found for this surface' })

  if rolloutState == 'autofix':
    // Check that a push→main workflow has a step referencing a canonical_source
    pushWorkflows = workflows.filter(w =>
      w.content.includes('push:') && w.content.includes('- main')
    )
    anyMatch = pushWorkflows.some(w =>
      sourcePaths.some(src => {
        scriptName = path.basename(src)
        return w.content.includes(scriptName)
      })
    )
    if not anyMatch:
      failures.push({ id, field: 'rollout_state:autofix', message: 'no push→main autofix workflow found' })

  if rolloutState in ['migrating', 'advisory']:
    warnings.push({ id, rolloutState, message: 'not enforced — advisory/migrating state' })

print all warnings as [WARN] lines
print all failures as [FAIL] lines
if failures.length > 0: process.exit(1)
else: process.exit(0)
```

---

### Script 3: UI-Templates Dispatch Script

**Output file path**
`operations/scripts/dispatch/governance/pipelines/ui-templates-pipeline.js`

**Inputs**
- `snippets/templates/**` — page and block templates (source of truth)
- `docs-guide/config/component-registry.json` — component registry (source for component snippets)
- `generate-ui-templates-catalog.js` (after split — see Section 5) or current `generate-ui-templates.js` (before split)

**What it produces**
- Runs the full UI templates pipeline: validate inputs → generate catalog → generate snippets → commit if changed
- Callable locally as: `node operations/scripts/dispatch/governance/pipelines/ui-templates-pipeline.js --write`
- Callable from CI as a `workflow_dispatch:` trigger step

**`@pipeline` annotation**
```js
/**
 * @script      ui-templates-pipeline
 * @type        dispatch
 * @concern     ui-templates
 * @niche       governance
 * @purpose     governance:pipeline-dispatch
 * @pipeline    manual → snippets/templates/** → docs-guide/catalog/ui-templates.mdx + .vscode/*.code-snippets
 */
```

**CI wiring**
1. In `generate-docs-guide-catalogs.yml`: add a new step that calls `node operations/scripts/dispatch/governance/pipelines/ui-templates-pipeline.js --write` with path filter `snippets/templates/**`. Add its outputs to the git-diff check and commit step alongside the existing catalog outputs.
2. In `check-docs-guide-catalogs.yml`: add a step `node operations/scripts/generators/components/library/generate-ui-templates.js --check` (or post-split: `generate-ui-templates-catalog.js --check`).
3. After wiring: update `ownerless-governance-surfaces.json` entry `ui-templates.rollout_state` from `autofix` to `active` and `repair_commands` to reference this dispatcher.

**Core logic (pseudocode)**

```
#!/usr/bin/env node
// @type dispatch — orchestrates: validate → generate → commit-if-changed

const args = process.argv.slice(2)
const writeMode = args.includes('--write')
const checkMode = args.includes('--check')

// Step 1: Validate inputs exist
if not fs.existsSync('snippets/templates'): exit(1, 'snippets/templates not found')
if not fs.existsSync('docs-guide/config/component-registry.json'): exit(1, 'component-registry.json not found')

// Step 2: Run generator
const generatorPath = 'operations/scripts/generators/components/library/generate-ui-templates.js'
// (post-split: two separate generators)
const flag = writeMode ? '--write' : '--check'
const result = spawnSync('node', [generatorPath, flag], { stdio: 'inherit' })
if result.status !== 0: process.exit(result.status)

// Step 3: If --write and running in CI context, report changed files
if writeMode:
  changedFiles = [
    'docs-guide/catalog/ui-templates.mdx',
    '.vscode/templates.code-snippets',
    '.vscode/components.code-snippets'
  ]
  report changed files to stdout for CI git-diff step

process.exit(0)
```

---

### Script 4: Adapter Parity Validator

**Output file path**
`operations/scripts/validators/governance/ai/validate-adapter-parity.js`

**Inputs**
- `AGENTS.md` — baseline; section headers are the contract
- The 9 adapter files (all must be checked):
  1. `.claude/CLAUDE.md`
  2. `.cursor/rules/repo-governance.mdc`
  3. `.cursor/rules/no-deletions.mdc`
  4. `.windsurf/rules/repo-governance.md`
  5. `.augment/rules/repo-governance.md`
  6. `.augment/rules/git-safety.md`
  7. `.augment/rules/no-deletions.md`
  8. `.github/copilot-instructions.md`
  9. `.github/AGENTS.md`

**What it checks**
Extract all `## ` section headers from `AGENTS.md`. For each adapter file, check that each core section header from `AGENTS.md` is present (by heading text, case-insensitive, not requiring exact Markdown level). A missing section fails for that adapter.

**Scope note:** `.github/AGENTS.md` is a Codex-layer extension — it is expected to be additive, not a full mirror. Mark it as `extension_only: true` in the adapter list and only check that it does not contradict (contain explicit negations of) baseline safety rules, rather than requiring all sections.

**Exit behavior**
- Exit 1 if any non-extension adapter is missing a core section
- Exit 0 if all adapters have all core sections (extensions are advisory-only)
- Output format per adapter: `[OK|FAIL] adapter:<path> missing:<section_name>`

**`@pipeline` annotation**
```js
/**
 * @script      validate-adapter-parity
 * @type        validator
 * @concern     ai
 * @niche       governance
 * @purpose     governance:adapter-consistency
 * @pipeline    CI: check-ai-companions.yml (PR gate) — path filter: AGENTS.md, .claude/**, .cursor/**, .windsurf/**, .augment/**, .github/copilot-instructions.md, .github/AGENTS.md
 */
```

**CI wiring**
Add to `.github/workflows/check-ai-companions.yml` as a new step with path filter:
```yaml
paths:
  - 'AGENTS.md'
  - '.claude/**'
  - '.cursor/**'
  - '.windsurf/**'
  - '.augment/**'
  - '.github/copilot-instructions.md'
  - '.github/AGENTS.md'
```

Only run on PRs that change any of these files — adapter parity does not need to run on content-only PRs.

**Core logic (pseudocode)**

```
REPO_ROOT = process.cwd()

ADAPTERS = [
  { path: '.claude/CLAUDE.md', extension_only: false },
  { path: '.cursor/rules/repo-governance.mdc', extension_only: false },
  { path: '.cursor/rules/no-deletions.mdc', extension_only: false },
  { path: '.windsurf/rules/repo-governance.md', extension_only: false },
  { path: '.augment/rules/repo-governance.md', extension_only: false },
  { path: '.augment/rules/git-safety.md', extension_only: false },
  { path: '.augment/rules/no-deletions.md', extension_only: false },
  { path: '.github/copilot-instructions.md', extension_only: false },
  { path: '.github/AGENTS.md', extension_only: true },
]

// Extract baseline section headers from AGENTS.md
baseline = readFile('AGENTS.md')
baselineSections = baseline
  .split('\n')
  .filter(line => line.startsWith('## '))
  .map(line => line.replace(/^#+\s+/, '').trim().toLowerCase())

failures = []

for each adapter in ADAPTERS:
  if not fs.existsSync(join(REPO_ROOT, adapter.path)):
    failures.push({ adapter: adapter.path, issue: 'FILE_MISSING' })
    continue

  content = readFile(adapter.path).toLowerCase()

  if adapter.extension_only:
    // Only check for contradictions — look for explicit "do not" or "never" negating baseline rules
    // This is a heuristic check; emit warnings not failures
    continue

  for each section in baselineSections:
    if not content.includes(section):
      failures.push({ adapter: adapter.path, missing: section })

if failures.length > 0:
  for each f in failures: console.error(`[FAIL] adapter:${f.adapter} missing:${f.missing ?? 'FILE'}`)
  process.exit(1)
else:
  console.log('[OK] All adapters contain all baseline sections.')
  process.exit(0)
```

---

### Script 5: Frontmatter Staleness Warning Script

**Output file path**
`operations/scripts/validators/content/structure/check-frontmatter-staleness.js`

**Inputs**
- Changed MDX files in the PR — read via `GITHUB_EVENT_PATH` (GitHub Actions) or `--files` CLI flag (local)
- `tools/lib/frontmatter-taxonomy.js` — for valid field names and `ttlDays` tier mapping
- Frontmatter `lastVerified` and `ttlDays` fields in each changed file

**What it checks**
For each changed MDX file:
1. Parse frontmatter (extract YAML between `---` delimiters)
2. If `lastVerified` is present: compute `daysSince = today - lastVerified`
3. If `ttlDays` is present on the page: compare `daysSince > ttlDays`
4. If `ttlDays` is absent: apply default tier thresholds based on `pageType`:
   - `pageType: getting-started` | `pageType: concept` → default 30 days
   - `pageType: guide` | `pageType: how-to` → default 90 days
   - `pageType: reference` | `pageType: generated` → default 180 days
   - No `pageType` → default 90 days
5. If stale: emit warning (never fail). Stale means `daysSince > threshold`.

**Exit behavior**
- Always exits 0. This is a warning-only script — it must never block a PR.
- Output format: GitHub Actions `::warning` annotations so warnings appear in the PR UI without failing the check:
  ```
  ::warning file=v2/path/to/page.mdx::lastVerified is 127 days old (threshold: 90). Consider updating lastVerified if this page was reviewed.
  ```
- If `--json` flag: output a JSON array of stale pages for programmatic consumption

**`@pipeline` annotation**
```js
/**
 * @script      check-frontmatter-staleness
 * @type        validator
 * @concern     pages
 * @niche       frontmatter
 * @purpose     advisory:freshness-warning
 * @pipeline    CI: check-docs-guide-catalogs.yml (PR gate, warning-only) — path filter: v2/**/*.mdx
 */
```

**CI wiring**
Add to `check-docs-guide-catalogs.yml` as the last step (after all other checks). Use `continue-on-error: true` as an additional safety net, though the script itself always exits 0.

```yaml
- name: Check frontmatter staleness (warning only)
  continue-on-error: true
  run: |
    CHANGED_FILES=$(git diff --name-only origin/${{ github.base_ref }}...HEAD -- 'v2/**/*.mdx' 'docs-guide/**/*.mdx')
    if [ -n "$CHANGED_FILES" ]; then
      echo "$CHANGED_FILES" | tr '\n' ',' | xargs -I{} node operations/scripts/validators/content/structure/check-frontmatter-staleness.js --files {}
    fi
```

Path filter on the step: `v2/**/*.mdx` and `docs-guide/**/*.mdx`. If no MDX files are changed in the PR, skip entirely.

**Core logic (pseudocode)**

```
const today = new Date()
const DEFAULT_TTL = { 'getting-started': 30, concept: 30, guide: 90, 'how-to': 90, reference: 180, generated: 180 }
const files = getChangedFiles()  // from --files flag or GITHUB_EVENT_PATH

for each filePath in files:
  if not filePath.endsWith('.mdx'): continue
  content = readFile(filePath)
  fm = parseFrontmatter(content)  // extract YAML block

  if not fm.lastVerified: continue  // no lastVerified — skip, not an error

  lastVerified = new Date(fm.lastVerified)
  daysSince = Math.floor((today - lastVerified) / (1000 * 60 * 60 * 24))

  ttl = fm.ttlDays
    ?? DEFAULT_TTL[fm.pageType]
    ?? 90

  if daysSince > ttl:
    console.log(`::warning file=${filePath}::lastVerified is ${daysSince} days old (threshold: ${ttl}). Consider updating lastVerified if this page was reviewed.`)

process.exit(0)
```

---

## Section 2 — CI Workflow Changes

### Changes to `check-docs-guide-catalogs.yml`

Add the following steps in this exact order. Insert them after the existing "Verify pages catalog is current" step and before the end of the job. The existing steps are not modified.

```yaml
      - name: Validate generated-artifacts.json paths
        run: node operations/scripts/validators/governance/repo/validate-generated-artifacts.js

      - name: Check UI templates catalog is current
        run: node operations/scripts/generators/components/library/generate-ui-templates.js --check

      - name: Verify component docs index is current
        run: node operations/scripts/generators/governance/catalogs/generate-docs-guide-components-index.js --check

      - name: Validate governance surfaces match CI wiring
        run: node operations/scripts/validators/governance/repo/validate-governance-surfaces.js

      - name: Check frontmatter staleness (warning only)
        continue-on-error: true
        run: |
          CHANGED=$(git diff --name-only origin/${{ github.base_ref }}...HEAD -- 'v2/**/*.mdx' 'docs-guide/**/*.mdx' 2>/dev/null || true)
          if [ -n "$CHANGED" ]; then
            node operations/scripts/validators/content/structure/check-frontmatter-staleness.js --files "$(echo "$CHANGED" | tr '\n' ',')"
          fi
```

**Sequencing rationale:**
1. `validate-generated-artifacts.js` runs first — if artifact paths are broken, subsequent check steps that depend on the scripts listed in that config will produce misleading failures.
2. `generate-ui-templates.js --check` and `generate-docs-guide-components-index.js --check` run next — surface-level freshness checks.
3. `validate-governance-surfaces.js` runs after the surface checks — it verifies the meta-model, so it must run after the surfaces themselves have been checked.
4. Staleness warning runs last — it is advisory and must never cause other steps to not run.

**Prerequisite:** `validate-governance-surfaces.js` must not be added until the `generate-ui-templates.js --write` step is also added to `generate-docs-guide-catalogs.yml` (see below). Otherwise the governance validator will immediately fail on the `ui-templates` surface.

---

### Changes to `generate-docs-guide-catalogs.yml`

Add the following steps. Insert after "Generate pages catalog" and before "Check for changes".

```yaml
      - name: Generate UI templates catalog and snippets
        run: node operations/scripts/generators/components/library/generate-ui-templates.js --write
```

Extend the existing "Check for changes" step to include UI template outputs:

```yaml
      - name: Check for changes
        id: git-check
        run: |
          git diff --exit-code \
            docs-guide/catalog/workflows-catalog.mdx \
            docs-guide/catalog/templates-catalog.mdx \
            docs-guide/catalog/pages-catalog.mdx \
            docs-guide/catalog/ui-templates.mdx \
            .vscode/templates.code-snippets \
            .vscode/components.code-snippets \
          || echo "changed=true" >> $GITHUB_OUTPUT
```

Extend the "Commit and push if changed" step to stage the new outputs:

```yaml
      - name: Commit and push if changed
        if: steps.git-check.outputs.changed == 'true' || steps.git-check-component-docs.outputs.changed == 'true'
        run: |
          git config user.name "GitHub Actions Bot"
          git config user.email "actions@github.com"
          git add \
            docs-guide/catalog/workflows-catalog.mdx \
            docs-guide/catalog/templates-catalog.mdx \
            docs-guide/catalog/pages-catalog.mdx \
            docs-guide/catalog/ui-templates.mdx \
            .vscode/templates.code-snippets \
            .vscode/components.code-snippets \
            v2/
          git commit -m "chore(docs-guide): regenerate catalogs and component docs - $(date -u +"%Y-%m-%dT%H:%M:%SZ")"
          git push
```

**Path filter addition:** Add `snippets/templates/**` to the `generate-docs-guide-catalogs.yml` `on.push.paths` list so that a template change triggers UI template regeneration:

```yaml
on:
  push:
    branches:
      - main
    paths:
      - '.github/workflows/**'
      - '.github/ISSUE_TEMPLATE/**'
      - '.github/pull-request-template-v2.md'
      - '.github/pull_request_template.md'
      - 'docs.json'
      - 'v2/index.mdx'
      - 'snippets/templates/**'          # ADD THIS
      - 'snippets/components/**/*.jsx'   # ADD THIS — enables component snippets regeneration
```

---

### New step for `check-ai-companions.yml`

Add the adapter parity validator to the AI check workflow. This step only triggers on PRs that touch adapter files:

```yaml
      - name: Validate adapter parity with AGENTS.md baseline
        if: |
          contains(github.event.pull_request.changed_files_url, 'AGENTS.md') ||
          startsWith(github.event.pull_request.head.ref, 'adapter')
        run: node operations/scripts/validators/governance/ai/validate-adapter-parity.js
```

A more reliable implementation using git-diff for path filtering within the step:

```yaml
      - name: Validate adapter parity with AGENTS.md baseline
        run: |
          CHANGED=$(git diff --name-only origin/${{ github.base_ref }}...HEAD 2>/dev/null || true)
          ADAPTER_CHANGED=$(echo "$CHANGED" | grep -E '^(AGENTS\.md|\.claude/|\.cursor/|\.windsurf/|\.augment/|\.github/copilot-instructions\.md|\.github/AGENTS\.md)' || true)
          if [ -n "$ADAPTER_CHANGED" ]; then
            node operations/scripts/validators/governance/ai/validate-adapter-parity.js
          else
            echo "No adapter files changed — skipping parity check."
          fi
```

---

## Section 3 — Race Condition Fix

### The problem

`generate-component-registry.yml` triggers on `push: paths: snippets/components/**/*.jsx → main` and auto-commits `docs-guide/config/component-registry.json`.

`generate-docs-guide-catalogs.yml` triggers on `push: paths: [.github/workflows/**, docs.json, v2/index.mdx, ...] → main` and auto-commits `docs-guide/catalog/*.mdx` and `v2/`.

When a single push to main touches both a component JSX file and a docs.json/workflow file, both workflows start concurrently. Both check out the same HEAD commit, both make changes, both try to push. The second push fails with "rejected: non-fast-forward" or silently overwrites the first commit's changes.

### Recommended fix: Option A — Add component docs generation as a downstream step in `generate-component-registry.yml`

This is the correct architectural fix. Component docs (`v2/resources/documentation-guide/component-library/*.mdx`) are downstream of the registry — they must regenerate whenever the registry changes. Currently the connection is made implicitly via the competing push event. Make it explicit by running component docs generation as a step inside `generate-component-registry.yml`, after the registry is committed.

**Changes to `generate-component-registry.yml`:**

Add component docs regeneration step after the registry commit step:

```yaml
      - name: Regenerate component docs (downstream of registry)
        run: node operations/scripts/generators/components/documentation/generate-component-docs.js --write

      - name: Check for component docs changes
        id: git-check-component-docs
        run: |
          git diff --exit-code v2/resources/documentation-guide/component-library/ \
          || echo "changed=true" >> $GITHUB_OUTPUT

      - name: Commit component docs if changed
        if: steps.git-check-component-docs.outputs.changed == 'true'
        run: |
          git config user.name "GitHub Actions Bot"
          git config user.email "actions@github.com"
          git add v2/resources/documentation-guide/component-library/
          git commit -m "chore(components): regenerate component docs - $(date -u +"%Y-%m-%dT%H:%M:%SZ")"
          git push
```

**Remove the component docs generation step from `generate-docs-guide-catalogs.yml`:**

Remove these steps from `generate-docs-guide-catalogs.yml`:
- "Regenerate component docs pages" (`generate-component-docs.js --write`)
- "Check for component docs changes" (`git-check-component-docs`)
- The `v2/` portion of "Commit and push if changed"

Also remove `snippets/components/**/*.jsx` from the `generate-docs-guide-catalogs.yml` path filter after moving it to the registry workflow's domain.

**Why this is correct:**
- Component docs are derived from component source → registry → docs. The generation chain now matches the data flow chain.
- `generate-docs-guide-catalogs.yml` becomes responsible only for catalog MDX files (workflows, templates, pages, UI templates). Its commit scope is clearly bounded.
- `generate-component-registry.yml` becomes responsible for registry JSON + component docs MDX. Its commit scope is clearly bounded.
- The two workflows can never conflict because they now own disjoint output file sets.

**Alternative (Option B — `workflow_run:` trigger):**

If modifying `generate-component-registry.yml` is not feasible in the same sprint, use `workflow_run:` to make `generate-docs-guide-catalogs.yml` wait for the registry workflow to finish before running:

```yaml
on:
  workflow_run:
    workflows: ["Generate Component Registry"]
    types:
      - completed
  push:
    branches:
      - main
    paths:
      - '.github/workflows/**'
      - '.github/ISSUE_TEMPLATE/**'
      - '.github/pull-request-template-v2.md'
      - '.github/pull_request_template.md'
      - 'docs.json'
      - 'v2/index.mdx'
      - 'snippets/templates/**'
  workflow_dispatch:
```

This adds latency (the catalog workflow runs only after the registry workflow completes) but requires no logic changes. The downside is that `generate-docs-guide-catalogs.yml` will also trigger on component JSX changes via the `workflow_run:` event even when no catalog-relevant files changed, creating unnecessary runs.

**Recommendation: Use Option A.** Option B creates a hidden trigger dependency that is difficult to audit and will confuse contributors who see the catalogs workflow running after a component-only change. Option A is architecturally clean.

---

## Section 4 — Config Schemas

Place both schema files in `tools/config/` alongside the config files they validate.

### Schema 1: `generated-artifacts.schema.json`

Path: `tools/config/generated-artifacts.schema.json`

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "generated-artifacts.schema.json",
  "title": "Generated Artifacts Registry",
  "description": "Registry of all CI-managed generated artifacts: their generators, sources, validators, and repair commands.",
  "type": "object",
  "required": ["version", "artifacts"],
  "additionalProperties": false,
  "properties": {
    "version": {
      "type": "string",
      "pattern": "^generated-artifacts\\.v\\d+$",
      "description": "Schema version identifier. Format: generated-artifacts.v<N>."
    },
    "artifacts": {
      "type": "array",
      "description": "All governed generated artifacts.",
      "minItems": 1,
      "items": {
        "$ref": "#/definitions/artifact"
      }
    }
  },
  "definitions": {
    "artifact": {
      "type": "object",
      "required": ["path", "owner", "generator", "sources", "class", "commit_policy", "hook_policy", "ci_policy", "delta_strategy"],
      "additionalProperties": false,
      "properties": {
        "path": {
          "type": "string",
          "minLength": 1,
          "description": "Repo-relative path or glob of the generated artifact(s)."
        },
        "owner": {
          "type": "string",
          "enum": ["docs", "eng", "infra"],
          "description": "Team or role responsible for this artifact."
        },
        "generator": {
          "type": "string",
          "minLength": 1,
          "description": "Command to regenerate this artifact. Must start with 'node' or 'lpd' or describe a local-only process."
        },
        "sources": {
          "type": "array",
          "items": { "type": "string", "minLength": 1 },
          "minItems": 1,
          "description": "Source file paths or globs this artifact is derived from."
        },
        "class": {
          "type": "string",
          "enum": [
            "committed_authoritative",
            "committed_derived_scoped",
            "ephemeral_local"
          ],
          "description": "Artifact class: authoritative committed files, scoped derived committed files, or local-only ephemeral outputs."
        },
        "commit_policy": {
          "type": "string",
          "enum": ["required", "manual", "forbidden"],
          "description": "Whether the artifact must be, can be, or must not be committed."
        },
        "hook_policy": {
          "type": "string",
          "enum": ["check_only", "ignore"],
          "description": "Pre-commit hook behavior: validate only, or skip entirely."
        },
        "ci_policy": {
          "type": "string",
          "enum": ["enforce", "ignore"],
          "description": "Whether CI enforces freshness of this artifact."
        },
        "delta_strategy": {
          "type": "string",
          "enum": ["staged", "source_glob", "none"],
          "description": "How changes are detected: staged files, source glob changes, or not applicable."
        },
        "validators": {
          "type": "array",
          "items": { "type": "string", "minLength": 1 },
          "description": "Repo-relative paths to validator scripts for this artifact."
        },
        "repair_commands": {
          "type": "array",
          "items": { "type": "string", "minLength": 1 },
          "description": "Ordered list of commands to repair this artifact. First command should be the dispatcher or primary repair command."
        },
        "notes": {
          "type": "string",
          "description": "Human-readable notes about this artifact's governance decisions."
        }
      }
    }
  }
}
```

---

### Schema 2: `ownerless-governance-surfaces.schema.json`

Path: `tools/config/ownerless-governance-surfaces.schema.json`

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "ownerless-governance-surfaces.schema.json",
  "title": "Ownerless Governance Surfaces Registry",
  "description": "Registry of all CI-governed surfaces: their gate layers, rollout states, and repair commands. Validated by validate-governance-surfaces.js.",
  "type": "array",
  "minItems": 1,
  "items": {
    "$ref": "#/definitions/surface"
  },
  "definitions": {
    "surface": {
      "type": "object",
      "required": [
        "id",
        "surface_globs",
        "canonical_sources",
        "derived_outputs",
        "validators",
        "repair_commands",
        "gate_layer",
        "rollout_state",
        "network_dependent",
        "ownerless_ready"
      ],
      "additionalProperties": false,
      "properties": {
        "id": {
          "type": "string",
          "pattern": "^[a-z][a-z0-9-]*$",
          "description": "Unique kebab-case identifier for this surface. Must match the surface name used in repair_commands and CI steps."
        },
        "surface_globs": {
          "type": "array",
          "items": { "type": "string", "minLength": 1 },
          "minItems": 1,
          "description": "File path globs that define the boundary of this surface. Changes to any of these paths are governed by this surface's gate."
        },
        "canonical_sources": {
          "type": "array",
          "items": { "type": "string", "minLength": 1 },
          "minItems": 1,
          "description": "The authoritative source files for this surface. Generators read from these."
        },
        "derived_outputs": {
          "type": "array",
          "items": { "type": "string", "minLength": 1 },
          "description": "Files generated from canonical_sources. May be empty for surfaces with no generated outputs."
        },
        "validators": {
          "type": "array",
          "items": { "type": "string", "minLength": 1 },
          "description": "Repo-relative paths to validator scripts for this surface."
        },
        "repair_commands": {
          "type": "array",
          "items": { "type": "string", "minLength": 1 },
          "minItems": 1,
          "description": "Ordered commands to repair this surface. First entry should be the primary repair command (dispatcher or lpd alias)."
        },
        "gate_layer": {
          "type": "string",
          "enum": ["pre-commit", "pr-changed", "push-main", "manual"],
          "description": "The CI gate tier at which this surface is enforced."
        },
        "rollout_state": {
          "type": "string",
          "enum": ["active", "autofix", "migrating", "advisory", "planned"],
          "description": "Current rollout state. 'active': fully wired and enforced. 'autofix': auto-generates on push→main. 'migrating': in transition. 'advisory': warnings only, not enforced. 'planned': declared but not yet implemented."
        },
        "network_dependent": {
          "type": "boolean",
          "description": "Whether this surface's generation requires network access. If true, it cannot run in offline pre-commit contexts."
        },
        "ownerless_ready": {
          "type": "boolean",
          "description": "Whether this surface is ready for ownerless (agent-driven) maintenance. Requires: active rollout_state, all repair_commands tested, no network_dependent."
        }
      }
    }
  }
}
```

**Note on `rollout_state` enum:** The current config uses `autofix` for surfaces that auto-commit on push→main. The schema makes `active` the terminal state for a fully-wired surface, and `autofix` for surfaces wired to auto-commit but not yet fully validated. Update `ui-templates.rollout_state` from `autofix` to `active` after wiring is complete and `validate-governance-surfaces.js` exits 0 for that surface.

---

## Section 5 — Generator Split Plan

### Context

Two generators produce mixed-concern outputs:

1. `generate-docs-guide-indexes.js` → produces `workflows-catalog.mdx` AND `templates-catalog.mdx`. Trigger should differ: workflow changes trigger the workflows catalog; GitHub template changes trigger the templates catalog. Currently both are regenerated by any change to either.

2. `generate-ui-templates.js` → produces `ui-templates.mdx` (template catalog), `.vscode/templates.code-snippets` (template snippets), AND `.vscode/components.code-snippets` (component snippets). Template snippets and component snippets have different source paths and should have different triggers.

### Split 1: `generate-docs-guide-indexes.js` → two generators

**Target state:**
- `generate-workflows-catalog.js` → `docs-guide/catalog/workflows-catalog.mdx`
- `generate-github-templates-catalog.js` → `docs-guide/catalog/templates-catalog.mdx`

**Migration sequence (safe — no CI breakage at any step):**

Step 1 — Create `generate-workflows-catalog.js` at:
`operations/scripts/generators/governance/catalogs/generate-workflows-catalog.js`

Extract the workflows generation logic from `generate-docs-guide-indexes.js`. This new script reads `.github/workflows/*.yml`, produces `workflows-catalog.mdx`, and accepts `--write` / `--check` flags. The existing `generate-docs-guide-indexes.js` remains unchanged at this step.

Step 2 — Create `generate-github-templates-catalog.js` at:
`operations/scripts/generators/governance/catalogs/generate-github-templates-catalog.js`

Extract the templates generation logic. Reads `.github/ISSUE_TEMPLATE/**` and PR template files, produces `templates-catalog.mdx`.

Step 3 — Add both new scripts to CI in parallel with the existing combined script. In `check-docs-guide-catalogs.yml`, replace the "Verify workflows and templates catalogs are current" step with two steps:

```yaml
      - name: Verify workflows catalog is current
        run: node operations/scripts/generators/governance/catalogs/generate-workflows-catalog.js --check

      - name: Verify GitHub templates catalog is current
        run: node operations/scripts/generators/governance/catalogs/generate-github-templates-catalog.js --check
```

In `generate-docs-guide-catalogs.yml`, replace the "Generate workflows and templates catalogs" step with two steps:

```yaml
      - name: Generate workflows catalog
        run: node operations/scripts/generators/governance/catalogs/generate-workflows-catalog.js --write

      - name: Generate GitHub templates catalog
        run: node operations/scripts/generators/governance/catalogs/generate-github-templates-catalog.js --write
```

Update the path filters in `generate-docs-guide-catalogs.yml`:
- `.github/workflows/**` triggers the workflows catalog only
- `.github/ISSUE_TEMPLATE/**`, `.github/pull-request-template-v2.md`, `.github/pull_request_template.md` trigger the templates catalog only
- Both still exist in the shared `paths:` block but now map to separate generators

Step 4 — Run both new scripts against production and verify outputs are byte-identical to what the combined script produces. If identical: proceed. If not: fix the extracted logic until they match.

Step 5 — Remove `generate-docs-guide-indexes.js` from CI steps. Update `generated-artifacts.json` entries for `templates-catalog.mdx` and `workflows-catalog.mdx` to reference the new generator paths. Update `ownerless-governance-surfaces.json` `repair_commands` for `docs-guide-generated`.

Step 6 — After one complete CI cycle with the new scripts in production, remove `generate-docs-guide-indexes.js` or move it to `operations/scripts/archive/`. Do not delete it — it retains historical reference value.

---

### Split 2: `generate-ui-templates.js` → two generators

**Target state:**
- `generate-ui-templates-catalog.js` → `docs-guide/catalog/ui-templates.mdx` + `.vscode/templates.code-snippets`
  - Trigger: `snippets/templates/**`
- `generate-component-snippets.js` → `.vscode/components.code-snippets`
  - Trigger: `snippets/components/**/*.jsx` or `docs-guide/config/component-registry.json`

**Migration sequence:**

Step 1 — Create `generate-ui-templates-catalog.js` at:
`operations/scripts/generators/components/library/generate-ui-templates-catalog.js`

Extracts the template catalog and template snippets generation from `generate-ui-templates.js`. Accepts `--write` / `--check`. Reads `snippets/templates/**` and produces:
- `docs-guide/catalog/ui-templates.mdx`
- `.vscode/templates.code-snippets`

Step 2 — Create `generate-component-snippets.js` at:
`operations/scripts/generators/components/library/generate-component-snippets.js`

Extracts the component snippets generation. Reads `docs-guide/config/component-registry.json` and produces:
- `.vscode/components.code-snippets`

Step 3 — Add to CI in parallel with the existing combined script. Do not remove the existing script at this step.

In `check-docs-guide-catalogs.yml`, replace:
```yaml
      - name: Check UI templates catalog is current
        run: node operations/scripts/generators/components/library/generate-ui-templates.js --check
```
with:
```yaml
      - name: Check UI templates catalog is current
        run: node operations/scripts/generators/components/library/generate-ui-templates-catalog.js --check

      - name: Check component snippets are current
        run: node operations/scripts/generators/components/library/generate-component-snippets.js --check
```

In `generate-docs-guide-catalogs.yml`, replace the UI templates generation step with:
```yaml
      - name: Generate UI templates catalog and snippets
        run: node operations/scripts/generators/components/library/generate-ui-templates-catalog.js --write

      - name: Generate component snippets
        run: node operations/scripts/generators/components/library/generate-component-snippets.js --write
```

Step 4 — Verify output parity (same byte-identical check as Split 1, Step 4).

Step 5 — Remove `generate-ui-templates.js` from CI. Update `generated-artifacts.json`, `ownerless-governance-surfaces.json`, and the `ui-templates-pipeline.js` dispatcher to reference the two new scripts. Update path filters in `generate-docs-guide-catalogs.yml` to separate the two triggers:
- `snippets/templates/**` → triggers `generate-ui-templates-catalog.js --write`
- `snippets/components/**/*.jsx` → triggers `generate-component-snippets.js --write` (this also lives in `generate-component-registry.yml` — after the race condition fix, the component snippets step moves to the registry workflow)

Step 6 — After one CI cycle in production: archive `generate-ui-templates.js`.

---

## Implementation Sequence

This is the safe, dependency-respecting order. Do not reorder steps within a numbered block.

```
Block 1 — Data correctness (no dependencies; do first)
  1a. Fix stale banner path in generate-component-docs.js generator template
  1b. Fix stale paths in generated-artifacts.json (4+ entries: component-governance, docs-guide-generated, ai-tools-registry)
  1c. Fix ai-tools.mdx missing frontmatter opening delimiter
  1d. Fix dev-tools.mdx stale Tip callout

Block 2 — Write the 5 scripts (can be done in parallel; no mutual dependencies)
  2a. validate-generated-artifacts.js  (Section 1, Script 1)
  2b. validate-governance-surfaces.js  (Section 1, Script 2)
  2c. ui-templates-pipeline.js         (Section 1, Script 3)
  2d. validate-adapter-parity.js       (Section 1, Script 4)
  2e. check-frontmatter-staleness.js   (Section 1, Script 5)

Block 3 — Wire UI templates to CI (depends on 1b for correct paths, 2c for dispatcher)
  3a. Add generate-ui-templates.js --write to generate-docs-guide-catalogs.yml (Section 2)
  3b. Add snippets/templates/** path filter to generate-docs-guide-catalogs.yml (Section 2)
  3c. Add generate-ui-templates.js --check to check-docs-guide-catalogs.yml (Section 2)

Block 4 — Wire the other 3 missing check steps (depends on 1b for correct paths, 2a-2e written)
  4a. Add validate-generated-artifacts.js step to check-docs-guide-catalogs.yml (Section 2)
  4b. Add generate-docs-guide-components-index.js --check step (Section 2)
  4c. Add check-frontmatter-staleness.js step (Section 2)
  4d. Add validate-adapter-parity.js to check-ai-companions.yml (Section 2)

Block 5 — Race condition fix (depends on Block 3 complete — UI templates must be removed from the docs-guide workflow's component-docs scope)
  5a. Add component docs regeneration steps to generate-component-registry.yml (Section 3)
  5b. Remove component docs steps from generate-docs-guide-catalogs.yml (Section 3)

Block 6 — Wire validate-governance-surfaces.js (depends on Blocks 3–5; surfaces must be actually wired before the validator runs)
  6a. Add validate-governance-surfaces.js step to check-docs-guide-catalogs.yml (Section 2)

Block 7 — Config schemas (depends on 1b — schemas must match correct file structure; write after paths are fixed)
  7a. Write generated-artifacts.schema.json (Section 4)
  7b. Write ownerless-governance-surfaces.schema.json (Section 4)
  7c. Add validate-config-schemas.js step to check-docs-guide-catalogs.yml (use Ajv or equivalent)

Block 8 — Generator splits (depends on Block 3–5 complete; split only after the generators are CI-wired)
  8a. Split generate-docs-guide-indexes.js (Section 5, Split 1) — Steps 1–6
  8b. Split generate-ui-templates.js (Section 5, Split 2) — Steps 1–6

Block 9 — JSDoc and frontmatter taxonomy enforcement (independent; run after Block 4)
  9a. Add soft JSDoc completeness warning for touched scripts (recommendations-pipeline.md R7.2)
  9b. Add frontmatter-taxonomy.test.js --check-changed step for v2 MDX files (R7.1)
```

**Critical path:** 1b → 3a → 3b → 5a → 5b → 6a

All other blocks are parallelisable within their dependency constraints.

---

## Acceptance Criteria

When implementation is complete, the following commands must all exit 0:

```bash
node operations/scripts/validators/governance/repo/validate-generated-artifacts.js
node operations/scripts/validators/governance/repo/validate-governance-surfaces.js
node operations/scripts/validators/governance/ai/validate-adapter-parity.js
node operations/scripts/generators/components/library/generate-ui-templates.js --check
node operations/scripts/generators/governance/catalogs/generate-workflows-catalog.js --check
node operations/scripts/generators/governance/catalogs/generate-github-templates-catalog.js --check
node operations/scripts/generators/components/library/generate-ui-templates-catalog.js --check
node operations/scripts/generators/components/library/generate-component-snippets.js --check
```

And the following must be true:
- `check-docs-guide-catalogs.yml` runs all steps listed in Section 2 with no failures on a clean main branch
- `generate-component-registry.yml` includes component docs generation and commits them without competing with `generate-docs-guide-catalogs.yml`
- `tools/config/generated-artifacts.schema.json` and `tools/config/ownerless-governance-surfaces.schema.json` exist and validate their respective config files without errors
- Zero instances of `operations/scripts/generate-component-docs.js` (old path) in any generated file banner
- Zero instances of stale paths from Block 1 in `generated-artifacts.json`
