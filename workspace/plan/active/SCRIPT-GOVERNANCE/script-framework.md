# Script Framework Specification

> **Canonical reference** for the Livepeer Docs script library.
> Extracted from governance plans, audit reports, enforced pre-commit hooks, scaffold templates, and production scripts.
>
> Each section is marked **ENFORCED** (must follow; violations block commits or fail CI) or **GUIDE** (recommended best practice; not gated).

---

## 1. Overview — GUIDE

The script library lives at `operations/scripts/` and contains ~120 operational scripts that audit, generate, validate, remediate, dispatch, and automate work across the Livepeer documentation repository.

Scripts are organised using a **three-tier taxonomy**: `<type>/<concern>/<niche>`. Every script has a standardised JSDoc header (11 tags), follows a consistent file layout, and is designed to be composable into pipelines.

Two non-type folders sit alongside the six type folders:

| Folder | Purpose |
|---|---|
| `config/` | Shared configuration, policy files, shared utility libraries |
| `x-archive/` | All superseded files via `git mv` - no deletions ever |
| `archive/` | Legacy archive (contains `deprecated/`, `fixtures/`, `legacy/` sub-folders). Decision D2 calls for consolidation with `x-archive/` into a single archive pattern - not yet executed |

### Shared libraries in `config/`

| Library | Purpose | Exports | Used by |
|---|---|---|---|
| `docs-path-sync.js` | Detects staged page moves, plans deterministic route rewrites, applies governed docs.json/path reference updates | `runDocsPathSync()` | `/propagate` skill, move-detect hook |
| `mdx-sanitise.js` | Sanitisation utilities for all scripts that write content consumed by MDX pages | `sanitiseForMdx`, `escapeForJsx`, `validateUrl`, `stripHtmlTags` | All `.github/scripts/fetch-*.js` and `generate-changelog.js` |

**Rule:** All scripts that write content consumed by MDX pages MUST import sanitisation functions from `operations/scripts/config/mdx-sanitise.js`. Do not create inline escape/sanitise functions in individual scripts.

The library is governed by three enforcement tiers:

| Tier | Gate type | Runs where |
|---|---|---|
| **Hard gate** | Blocks commit or merge | Pre-commit hook + required GitHub Actions status check |
| **Soft gate** | Warns in PR, does not block merge | GitHub Actions check (non-required) |
| **Self-heal** | No gate — auto-fixes on schedule | Cron workflow with auto-PR |

---

## 2. Taxonomy — Classification Rules — ENFORCED

### The three-tier model

Every script path follows this pattern:

```
operations/scripts/<type>/<concern>/<niche>/script-name.js
```

- **Type** (Layer 1) — what the script does
- **Concern** (Layer 2) — what domain the script is about
- **Niche** (Layer 3) — specific sub-concern within the domain

### Types (Layer 1)

| Type folder | Purpose | `@type` value | `@mode` values typically used |
|---|---|---|---|
| `audits/` | Read-only scan, measure, report. Never modifies source files. Produces reports, metrics, inventories. | `audit` | `read-only` |
| `generators/` | Produce new files from source-of-truth data. Creates artefacts (JSON, MDX, indexes, registries, sitemaps). | `generator` | `generate`, `write` |
| `validators/` | Enforce rules with a pass/fail gate. Reads files, checks conditions, exits 0 (pass) or non-zero (fail). | `validator` | `read-only` |
| `remediators/` | Bulk fix or repair existing files in place. Modifies source content to bring it into compliance. | `remediator` | `edit` |
| `dispatch/` | Dispatch work to other scripts or agents. Genuine orchestrators that spawn child processes and aggregate results. | `dispatch` | `execute` |
| `automations/` | Automated pipelines — translation, data fetching, transforms. End-to-end workflows that read external inputs and write outputs directly. | `automation` | `write`, `generate`, `execute` |

**Classification test**: If a script does not spawn other scripts, it is NOT a `dispatch`. If a script only scans and reports without modifying source, it is NOT a `remediator`. If a script edits existing files in place, it is NOT a `generator` (it is a `remediator`).

### Concerns (Layer 2 — homogeneous across all types)

Every type folder contains the same four concern sub-folders.

| Concern | What it covers |
|---|---|
| `content/` | Docs pages, copy, SEO, veracity, quality, reference, reconciliation |
| `components/` | Component library, registry, CSS, naming, documentation |
| `governance/` | Scripts about scripts, repo structure, agent docs, manifests, catalogs |
| `ai/` | AI-adjacent operations — LLM files, agent packaging, skills sync |

### Niches per type x concern (Layer 3)

#### audits/

| Concern | Niches |
|---|---|
| `content/` | `data/`, `quality/`, `reconciliation/`, `reference/`, `style/`, `veracity/` |
| `components/` | `documentation/`, `library/` |
| `governance/` | `scripts/`, `repo/`, `reports/` |
| `ai/` | (empty — reserved) |

#### generators/

| Concern | Niches |
|---|---|
| `content/` | `catalogs/`, `data/`, `seo/`, `reference/` |
| `components/` | `documentation/`, `library/` |
| `governance/` | `catalogs/`, `reports/`, `scaffold/` |
| `ai/` | `llm/` |

#### validators/

| Concern | Niches |
|---|---|
| `content/` | `copy/`, `structure/`, `grammar/`, `language-translation/`, `veracity/` |
| `components/` | `documentation/`, `library/` |
| `governance/` | `ai/`, `compliance/`, `pr/`, `repo/` |
| `ai/` | `codex/` |

#### remediators/

| Concern | Niches |
|---|---|
| `content/` | `repair/`, `style/`, `classification/`, `seo/` |
| `components/` | `library/` |
| `governance/` | `scaffold/`, `scripts/` |
| `ai/` | (empty — reserved) |

#### dispatch/

| Concern | Niches |
|---|---|
| `content/` | `veracity/` |
| `components/` | (empty — reserved) |
| `governance/` | `pipelines/`, `repo/` |
| `ai/` | `codex/`, `agents/` |

#### automations/

| Concern | Niches |
|---|---|
| `content/` | `language-translation/`, `data/` (with sub-niches `fetching/`, `transforms/`) |
| `components/` | (empty — reserved) |
| `governance/` | `pipelines/` |
| `ai/` | `agents/`, `codex/` |

### Decision tree — how to classify your script

```
1. Does the script SPAWN other scripts or coordinate a multi-script pipeline?
   YES → dispatch/
   NO  → continue

2. Does the script only READ files and produce reports/metrics without modifying source?
   YES → Does it enforce a pass/fail gate (exit 0/1)?
         YES → validators/
         NO  → audits/
   NO  → continue

3. Does the script CREATE new files from source-of-truth data?
   YES → generators/
   NO  → continue

4. Does the script MODIFY existing files in place to fix/repair them?
   YES → remediators/
   NO  → continue

5. Is the script an end-to-end automated workflow (translation, data fetching, transforms)?
   YES → automations/
   NO  → Re-evaluate — one of the above should apply.
```

For concern assignment:

```
- Operates on docs pages, MDX content, copy, SEO, frontmatter? → content/
- Operates on components, registry, CSS, naming? → components/
- Operates on scripts, repo structure, agent docs, catalogs? → governance/
- Operates on LLM files, agent packs, skills, Codex? → ai/
```

---

## 3. JSDoc Header Standard — ENFORCED

Every script MUST include a JSDoc header block (or hash-comment equivalent for `.sh`/`.py` files) with the 11 tags listed below. The pre-commit hook and CI validate header presence and tag correctness.

### Tag reference (in required order)

| # | Tag | Required | What it does | Allowed values / format |
|---|---|---|---|---|
| 1 | `@script` | Yes | Script identity | Filename without extension. Example: `lint-copy` |
| 2 | `@type` | Yes | Layer 1 — what the script does | `audit`, `generator`, `validator`, `remediator`, `dispatch`, `automation` |
| 3 | `@concern` | Yes | Layer 2 — what domain it is about | `content`, `components`, `governance`, `ai` |
| 4 | `@niche` | Yes | Layer 3 — specific sub-concern | `quality`, `veracity`, `copy`, `structure`, `grammar`, `library`, `documentation`, `compliance`, `pr`, `codex`, `agents`, `pipelines`, `seo`, `catalogs`, `reference`, `reconciliation`, `repair`, `style`, `classification`, `data`, `language-translation`, `llm`, `scaffold`, `reports`, `repo`, `scripts` |
| 5 | `@purpose` | Yes | Functional category — what job | Freeform namespaced string. Examples: `qa:content-quality`, `governance:agent-governance`, `governance:repo-health`, `governance:index-management`, `tooling:dev-tools` |
| 6 | `@description` | Yes | One-line human-readable description | Plain English sentence. No line breaks. |
| 7 | `@mode` | Yes | How the script affects the system | `read-only`, `write`, `edit`, `generate`, `execute` |
| 8 | `@pipeline` | Yes | Flow declaration — trigger, inputs, outputs, dependants | Arrow notation: `trigger → inputs → outputs [→ dependants]` |
| 9 | `@scope` | Yes | What files/directories it operates on | Comma-separated paths, patterns, or keywords (`staged`, `changed`, `full-repo`, `v2-content`, `single-file`) |
| 10 | `@usage` | Yes | CLI invocation example | Full command with flags. Example: `node operations/scripts/validators/content/copy/lint-copy.js [file or glob] [flags]` |
| 11 | `@policy` | If applicable | Governance/requirement traceability | Requirement IDs. Example: `E-R1, R-R11` |

### @mode values

| Value | Meaning | Used by |
|---|---|---|
| `read-only` | Inspects and reports only — no file changes | audits, validators |
| `write` | Creates new files | generators, automations |
| `edit` | Modifies existing files in place | remediators |
| `generate` | Produces artefacts (JSON, MDX, indexes, registries) | generators |
| `execute` | Runs external commands, dispatches work to other scripts/agents | dispatch |

### @pipeline format

Single-line flow declaration using arrow notation:

```
@pipeline   trigger → inputs → outputs [→ dependants]
```

Components:

- **trigger**: What invokes the script. Values: `pre-commit`, `pr-workflow`, `manual`, `cron:weekly`, `cron:monthly`, `post-merge`, pipeline identifiers like `P1`, `P3`, `P6`
- **inputs**: What data the script consumes. Examples: `staged .mdx files`, `docs.json, v2 frontmatter`, `full v2 tree`, `component-registry.json`
- **outputs**: What the script produces. Examples: `stdout:report`, `exit-code`, `docs-index.json`, `stdout:violations`, `governance-repair PR`
- **dependants** (optional): What downstream scripts consume this output. Examples: `→ scripts-catalog`, `→ generate-pages-index`

### @pipeline examples

```
@pipeline   pre-commit → staged .mdx files → stdout:report
@pipeline   manual → docs.json, v2 frontmatter → docs-index.json → scripts-catalog
@pipeline   cron:weekly → full v2 tree → governance-repair PR
@pipeline   pr-workflow → changed .mdx files → exit-code, stdout:violations
@pipeline   manual → component-registry.json → component-docs .mdx pages
```

### Removed tags (MUST NOT appear)

| Tag | Reason for removal |
|---|---|
| `@owner` | Ownerless governance — was always `docs` for every script |
| `@category` | Replaced by `@type` |
| `@dualmode` | Scripts should have one purpose |
| `@purpose-statement` | Renamed to `@description` |
| `@needs` | Renamed to `@policy` |
| `@domain` | Superseded by `@concern` |

### Example header (JavaScript)

```js
/**
 * @script      lint-copy
 * @type        validator
 * @concern     content
 * @niche       copy
 * @purpose     qa:content-quality
 * @description Enforce banned word and phrase rules on MDX content files.
 * @mode        read-only
 * @pipeline    pr-workflow → staged .mdx files → exit-code, stdout:violations
 * @scope       staged, changed, v2-content, single-file
 * @usage       node operations/scripts/validators/content/copy/lint-copy.js [file or glob] [flags]
 * @policy      E-R1, R-R11
 */
```

### Example header (shell/Python — hash-comment style)

```bash
# @script            pre-commit
# @type              dispatch
# @concern           governance
# @niche             pipelines
# @purpose           infrastructure:pipeline-orchestration
# @description       Pre-commit hook — hard gates only.
# @mode              execute
# @pipeline          P1 (commit, hook entry point)
# @scope             .githooks
# @usage             bash .githooks/pre-commit [flags]
# @policy            R-R29
```

---

## 4. Script Structure Standard — ENFORCED

### File layout order

Every script MUST follow this section order:

```
1. Shebang line          #!/usr/bin/env node (or bash, python3)
2. JSDoc header block    All 11 tags in order
3. 'use strict'          (JS only — recommended)
4. Requires/imports      const fs = require('fs'); etc.
5. Constants/config      REPO_ROOT, paths, thresholds, patterns — ALL in first ~30 lines after imports
6. Helper functions      Small, pure, focused utilities
7. Main function         The primary logic
8. Exports / execution   module.exports or main() call
```

### REPO_ROOT pattern — ENFORCED

Scripts MUST resolve the repository root using `process.cwd()`, never `__dirname` traversal up to root.

```js
// CORRECT
const REPO_ROOT = process.cwd();

// ALSO CORRECT (when a utility provides it)
const REPO_ROOT = getRepoRoot();

// WRONG — fragile, breaks if script moves
const REPO_ROOT = path.resolve(__dirname, '../../../../..');
```

Relative paths from `__dirname` are acceptable ONLY for reaching sibling files or shared libraries within the scripts tree (e.g., `require('../../../../lib/docs-index-utils')`).

### Config-at-top rule — ENFORCED

All paths, thresholds, constants, and configurable values MUST appear in the first ~30 lines after imports. No magic strings or numbers buried in function bodies.

```js
// CORRECT — config block at top
const REPO_ROOT = process.cwd();
const DOCS_JSON_PATH = path.join(REPO_ROOT, 'docs.json');
const OUTPUT_PATH = path.join(REPO_ROOT, 'docs-index.json');
const REPORT_PATH = path.join(REPO_ROOT, 'tasks', 'reports', 'docs-index', 'missing-frontmatter.md');
const BASE_URL = 'https://docs.livepeer.org';
const VERSION = 'docs-index.v1';

// WRONG — path buried in function body
function generateReport() {
  const output = path.join(process.cwd(), 'workspace/reports/docs-index/missing-frontmatter.md');
}
```

### No magic strings rule — ENFORCED

All repeated strings, regex patterns, file paths, and thresholds MUST be extracted into named constants at the top of the file.

### Single-purpose policy — ENFORCED

Each script SHOULD have ONE purpose. If a script has both `--check` and `--fix` modes, it blurs the validator/remediator boundary. Such scripts should either:

1. **Split** into a validator (read-only, exit code) and a remediator (fix mode) — preferred
2. **Document** the dual mode explicitly in `@pipeline` and `@description` if keeping both modes is intentional

Scripts that do 2+ unrelated things are harder to compose into pipelines and harder to test. The audit report identified ~44 multi-purpose scripts — these are flagged for future splitting.

### CLI argument parsing pattern — GUIDE

Use a consistent pattern for parsing CLI arguments:

```js
const args = process.argv.slice(2);

// Boolean flags
const dryRun = args.includes('--dry-run');
const staged = args.includes('--staged');
const check = args.includes('--check');

// Value flags
function argValue(name) {
  const idx = args.indexOf(name);
  if (idx === -1) return '';
  return args[idx + 1] || '';
}
const files = argValue('--files');
```

For dispatch scripts with more complex argument needs:

```js
function parseArgs(argv) {
  const args = {
    dryRun: false,
    autoCommit: false,
    reportOnly: false,
    strict: false,
    stagedOnly: false,
    files: [],
    full: false
  };

  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];
    if (token === '--dry-run') { args.dryRun = true; continue; }
    if (token === '--auto-commit') { args.autoCommit = true; continue; }
    if (token === '--staged') { args.stagedOnly = true; continue; }
    if (token === '--files' || token === '--file') {
      const raw = String(argv[index + 1] || '').trim();
      if (!raw) throw new Error('--files requires a comma-separated value.');
      args.files.push(...raw.split(',').map(p => p.trim()).filter(Boolean));
      index += 1;
      continue;
    }
  }
  return args;
}
```

### Exit code conventions — ENFORCED

| Exit code | Meaning | Used by |
|---|---|---|
| `0` | Success / pass / no violations | All scripts |
| `1` | Failure / violations found / gate failed | Validators, audits with `--strict` |
| `2` | Usage error (bad arguments, missing required flags) | All scripts |

```js
// Validator pattern
if (violations.length > 0) {
  console.error(`Found ${violations.length} violations.`);
  process.exit(1);
}
process.exit(0);

// Usage error pattern
if (!filePath) {
  usage();
  process.exit(2);
}
```

### Error handling pattern — GUIDE

```js
// Safe file reading
function readFileSafe(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch (_err) {
    return '';
  }
}

// Top-level error boundary
function main() {
  try {
    // ... script logic
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
}
```

### Console output conventions — GUIDE

| Function | When to use |
|---|---|
| `console.log()` | Normal output — reports, results, success messages. This is stdout. |
| `console.error()` | Errors and violations that indicate failure. This is stderr. |
| `console.warn()` | Non-blocking warnings that do not indicate failure. This is stderr. |

Validators MUST write violations to stderr (`console.error`) so that stdout remains clean for piping. Reports and machine-readable output go to stdout (`console.log`).

---

## 5. Best Practices — GUIDE

### Composability

Scripts should be pipeline-composable. A script's output should be consumable by another script's input. Prefer:

- JSON output for machine consumption (`--json` flag)
- Markdown output for human consumption (`--md` flag)
- Exit codes for pass/fail gating
- stdout for data, stderr for diagnostics

### Idempotency

Scripts SHOULD be safe to run twice. Running a generator twice should produce the same output. Running a remediator twice should not corrupt files. Running a validator twice should give the same result.

### --dry-run support

Any script that performs write operations SHOULD support a `--dry-run` flag that shows what would be changed without making changes.

```js
if (dryRun) {
  console.log(`[DRY RUN] Would write ${outputPath}`);
} else {
  fs.writeFileSync(outputPath, content, 'utf8');
  console.log(`Wrote ${outputPath}`);
}
```

### --staged support

Scripts that can run in pre-commit context SHOULD support a `--staged` flag that limits scope to git-staged files only.

```js
function getStagedFiles(pattern) {
  const { execSync } = require('child_process');
  const output = execSync('git diff --cached --name-only --diff-filter=ACMR', { encoding: 'utf8' });
  return output.split('\n').filter(f => f.match(pattern));
}
```

### JSON output for machine consumption

Scripts that produce reports SHOULD support `--json` for structured output:

```js
if (jsonMode) {
  console.log(JSON.stringify(results, null, 2));
} else {
  results.forEach(r => console.log(`${r.file}: ${r.message}`));
}
```

### Markdown output for human consumption

Scripts that produce reports SHOULD support `--md` for markdown-formatted output suitable for PR comments, docs-guide pages, or task reports.

### Usage/help output

Every script SHOULD print usage instructions when invoked with `--help` or with missing required arguments:

```js
function usage() {
  console.log(`Usage: node ${process.argv[1]} [file or glob] [flags]

Flags:
  --check       Check mode (read-only, exit code)
  --staged      Operate on git-staged files only
  --dry-run     Show what would change without writing
  --json        Output results as JSON
  --help        Show this help message
`);
}

if (args.includes('--help')) {
  usage();
  process.exit(0);
}
```

---

## 6. Governance Rules — ENFORCED

### Pre-commit hard gates

The pre-commit hook (`/.githooks/pre-commit`) enforces ONLY these five hard gates. Everything else runs in GitHub Actions on pull_request events.

| # | Gate | What it blocks | Bypass |
|---|---|---|---|
| 1 | **MDX syntax validation** | Broken pages that cannot be previewed | None |
| 2 | **docs.json schema/redirect integrity** | Broken navigation = broken site | None |
| 3 | **File deletion guard** | Accidental data loss. All deletions require human `--trailer "allow-deletions=true"` | Human override trailer only |
| 4 | **.allowlist / v1 freeze** | Security boundary. `.allowlist` edits require human `--trailer "allowlist-edit=true"`. `v1/` is frozen. | Human override trailer only |
| 5 | **Codex branch isolation** | AI safety gate. Codex sessions cannot commit to `docs-v2-dev` without explicit override. | `--trailer "allow-main-commit=true"` |

The pre-commit hook supports these environment bypass flags (use sparingly):

| Flag | Effect |
|---|---|
| `SKIP_STRUCTURE_CHECK=1` | Skip root directory structure checks |
| `SKIP_ALL=1` | Skip all checks (extreme caution) |

### Index/catalog policy — ENFORCED

Index and catalog regeneration scripts (`generate-docs-index`, `generate-pages-index`, `generate-component-registry`, `scripts-catalog`, etc.) MUST NEVER run in pre-commit. They run post-commit or post-PR only, via GitHub Actions workflows that auto-commit/push.

### Naming conventions — ENFORCED

| Rule | Examples |
|---|---|
| **UK English** for all script names and content | `task-finalise.js` not `task-finalize.js`, `colour` not `color` in descriptions |
| **Descriptive verb-noun** naming | `lint-copy.js`, `generate-docs-index.js`, `repair-spelling.js`, `audit-media-assets.js` |
| **Prefix matches type** | Validators: `check-*`, `lint-*`, `validate-*`, `enforce-*`, `verify-*`. Generators: `generate-*`. Remediators: `repair-*`, `sync-*`, `fix-*`. Audits: `audit-*`. Dispatch: descriptive (e.g., `governance-pipeline.js`, `task-finalise.js`). Automations: `translate-*`, `fetch-*`, `convert-*`. |
| **Lowercase-kebab-case** for all filenames | `generate-docs-index.js` not `generateDocsIndex.js` |

### x-archive policy — ENFORCED

- **No deletions ever.** All superseded files go to `x-archive/` via `git mv`.
- Archive one script at a time, only after its replacement is fully working, tested, and all downstream dependants have updated paths.
- `x-archive/` preserves git history through `git mv`.
- **Note:** A separate `archive/` folder also exists at the scripts root containing `deprecated/`, `fixtures/`, and `legacy/` sub-folders. Decision D2 calls for consolidation into a single archive pattern. Until D2 is executed, both `archive/` and `x-archive/` coexist. New archiving should use `x-archive/`.

### Branch discipline — ENFORCED

- Work on the assigned worktree only.
- Always sync with `docs-v2-dev` before starting work: `git fetch origin && git pull`.
- Every task follows: Sync → Do work → CHECKPOINT → Human approves → Merge.
- No task proceeds without human approval at the checkpoint.

### Deletion policy — ENFORCED

- Do not delete tracked files casually.
- File deletions require a human-owned commit with `--trailer "allow-deletions=true"`.
- Do not make the final `.allowlist` commit yourself — a human must commit `.allowlist` edits with `--trailer "allowlist-edit=true"`.

### Git safety — ENFORCED

- Install hooks before substantial work: `./.githooks/install.sh`
- Do not use `--no-verify` by default.
- Do not use `git reset --hard`, `git stash`, or `git push --force` unless a human explicitly directs it.

---

## 7. Pipeline Integration — GUIDE

### How dispatch scripts coordinate others

Dispatch scripts are genuine orchestrators. They use `child_process.spawnSync` (or `execSync`) to invoke other scripts, aggregate their results, and produce a combined report or take a combined action.

Pattern from `governance-pipeline.js`:

```js
const { spawnSync } = require('child_process');

// Stage 1: Audit
const auditResult = spawnSync('node', [AUDIT_SCRIPT_PATH, '--json'], { encoding: 'utf8' });

// Stage 2: Repair (conditional on audit findings)
if (needsRepair && !dryRun) {
  const repairResult = spawnSync('node', [REPAIR_SCRIPT_PATH, '--staged'], { encoding: 'utf8' });
}

// Stage 3: Verify (post-repair)
const verifyResult = spawnSync('node', [VERIFY_SCRIPT_PATH, '--strict'], { encoding: 'utf8' });

// Stage 4: Report
writeReport(auditResult, repairResult, verifyResult);

// Stage 5: Commit (if --auto-commit)
if (autoCommit) {
  spawnSync('git', ['commit', '-m', 'chore: governance self-heal']);
}
```

### How validators pair with remediators

Validators and remediators form natural pairs. The validator detects issues (read-only, exit code), and the remediator fixes them (edit mode).

Known pairs:

| Validator | Remediator |
|---|---|
| `check-mdx-safe-markdown.js` | `repair-mdx-safe-markdown.js` |
| `check-docs-path-sync.js` | `sync-docs-paths.js` |
| `check-grammar-en-gb.js` | (built-in `--fix` mode — candidate for split) |
| `check-proper-nouns.js` | (built-in `--fix` mode — candidate for split) |
| `lint-copy.js` / `lint-patterns.js` | (no repair counterpart — manual fix) |

### How generators feed into catalogs

Generators produce artefacts that other generators or audits consume downstream.

Content index pipeline:

```
generate-docs-index.js (core — most-called script)
  → generate-pages-index.js (produces section indexes)
    → generate-docs-guide-pages-index.js (produces catalog)
  → generate-ai-sitemap.js (produces sitemap-ai.xml)
  → generate-llms-files.js (produces llms.txt)
  All share: docs.json navigation parsing + MDX frontmatter reading
```

Component pipeline:

```
generate-component-registry.js (core)
  → scan-component-imports.js (produces usage map)
  → generate-component-docs.js (produces library pages)
  → generate-component-snippets.py (produces VS Code snippets)
  → generate-ui-templates.js (produces catalog + previews)
  → generate-docs-guide-components-index.js (produces catalog MDX)
  → repair-component-metadata.js (fixes JSDoc from registry)
```

Governance audit pipeline:

```
audit-script-categories.js (audit)
  → script-footprint-and-usage-audit.js (reads SCRIPT_AUDIT.json)
  → repo-audit-orchestrator.js (dispatch — spawns both + others)
```

Veracity research pipeline:

```
docs-fact-registry.js (validator)
  → docs-page-research.js (analysis engine)
    → docs-page-research-pr-report.js (PR wrapper)
    → docs-research-adjudication.js (ledger management)
  All orchestrated by: docs-research-packet.js (dispatch)
  Convenience wrapper: orchestrator-guides-research-review.js (dispatch)
```

### Pipeline flow notation examples

```
@pipeline   pre-commit → staged .mdx files → stdout:report
@pipeline   manual → docs.json, v2 frontmatter → docs-index.json → scripts-catalog
@pipeline   cron:weekly → full v2 tree → governance-repair PR
@pipeline   pr-workflow → changed .mdx files → exit-code, stdout:violations
@pipeline   manual → component-registry.json → component-docs .mdx pages
@pipeline   manual, P6 → full-repo → exit-code, repair-report.json → governance-pipeline
```

---

## 8. Script Template — GUIDE

### Validator template

```js
#!/usr/bin/env node
/**
 * @script      {script-name}
 * @type        validator
 * @concern     {content|components|governance|ai}
 * @niche       {niche-value}
 * @purpose     {namespace:category}
 * @description {One-line description of what this validator checks.}
 * @mode        read-only
 * @pipeline    {trigger} → {inputs} → {outputs}
 * @scope       {file-scope}
 * @usage       node operations/scripts/validators/{concern}/{niche}/{script-name}.js [flags]
 * @policy      {requirement-ids}
 */

'use strict';

// ── Requires ──────────────────────────────────────────────────
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// ── Configuration ─────────────────────────────────────────────
// All paths, thresholds, patterns, and constants go here.
const REPO_ROOT = process.cwd();
const TARGET_DIR = path.join(REPO_ROOT, 'v2');
const FILE_PATTERN = /\.mdx$/;
const MAX_ALLOWED = 0; // threshold for violations

// ── CLI Arguments ─────────────────────────────────────────────
const args = process.argv.slice(2);
const staged = args.includes('--staged');
const jsonMode = args.includes('--json');
const strict = args.includes('--strict');

// ── Usage ─────────────────────────────────────────────────────
function usage() {
  console.log(`Usage: node ${process.argv[1]} [flags]

Flags:
  --staged      Check only git-staged files
  --json        Output results as JSON
  --strict      Exit 1 on any violation (default: exit 1 only on blocking violations)
  --help        Show this help message
`);
}

if (args.includes('--help')) {
  usage();
  process.exit(0);
}

// ── Helpers ───────────────────────────────────────────────────
function getTargetFiles() {
  if (staged) {
    const output = execSync('git diff --cached --name-only --diff-filter=ACMR', { encoding: 'utf8' });
    return output.split('\n').filter(f => FILE_PATTERN.test(f));
  }
  // Full scan fallback
  return fs.readdirSync(TARGET_DIR, { recursive: true })
    .filter(f => FILE_PATTERN.test(f))
    .map(f => path.join(TARGET_DIR, f));
}

function checkFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const violations = [];
  // ... validation logic — push violations as { line, message, severity }
  return violations;
}

// ── Main ──────────────────────────────────────────────────────
function main() {
  const files = getTargetFiles();
  const allViolations = [];

  for (const file of files) {
    const violations = checkFile(file);
    if (violations.length > 0) {
      allViolations.push({ file, violations });
    }
  }

  // Output
  if (jsonMode) {
    console.log(JSON.stringify({ total: allViolations.length, results: allViolations }, null, 2));
  } else {
    for (const { file, violations } of allViolations) {
      for (const v of violations) {
        console.error(`${file}:${v.line} — ${v.message}`);
      }
    }
    if (allViolations.length > 0) {
      console.error(`\nFound violations in ${allViolations.length} file(s).`);
    } else {
      console.log('All checks passed.');
    }
  }

  // Exit code
  process.exit(allViolations.length > MAX_ALLOWED ? 1 : 0);
}

main();
```

### Generator template

```js
#!/usr/bin/env node
/**
 * @script      {script-name}
 * @type        generator
 * @concern     {content|components|governance|ai}
 * @niche       {niche-value}
 * @purpose     {namespace:category}
 * @description {One-line description of what this generator produces.}
 * @mode        generate
 * @pipeline    {trigger} → {inputs} → {outputs} [→ {dependants}]
 * @scope       {file-scope}
 * @usage       node operations/scripts/generators/{concern}/{niche}/{script-name}.js [flags]
 * @policy      {requirement-ids}
 */

'use strict';

// ── Requires ──────────────────────────────────────────────────
const fs = require('fs');
const path = require('path');

// ── Configuration ─────────────────────────────────────────────
const REPO_ROOT = process.cwd();
const INPUT_PATH = path.join(REPO_ROOT, '{input-file}');
const OUTPUT_PATH = path.join(REPO_ROOT, '{output-file}');
const VERSION = '{artefact-version-id}';

// ── CLI Arguments ─────────────────────────────────────────────
const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');
const check = args.includes('--check');

// ── Usage ─────────────────────────────────────────────────────
function usage() {
  console.log(`Usage: node ${process.argv[1]} [flags]

Flags:
  --check       Verify output is up to date without writing (exit 1 if stale)
  --dry-run     Show what would be generated without writing
  --help        Show this help message
`);
}

if (args.includes('--help')) {
  usage();
  process.exit(0);
}

// ── Helpers ───────────────────────────────────────────────────
function readInput() {
  const raw = fs.readFileSync(INPUT_PATH, 'utf8');
  return JSON.parse(raw);
}

function buildOutput(inputData) {
  // ... transformation logic
  return { version: VERSION, generated: new Date().toISOString(), data: inputData };
}

// ── Main ──────────────────────────────────────────────────────
function main() {
  const inputData = readInput();
  const output = buildOutput(inputData);
  const content = JSON.stringify(output, null, 2) + '\n';

  if (check) {
    const existing = fs.existsSync(OUTPUT_PATH) ? fs.readFileSync(OUTPUT_PATH, 'utf8') : '';
    if (existing !== content) {
      console.error(`Output is stale. Run without --check to regenerate.`);
      process.exit(1);
    }
    console.log('Output is up to date.');
    process.exit(0);
  }

  if (dryRun) {
    console.log(`[DRY RUN] Would write ${OUTPUT_PATH} (${content.length} bytes)`);
    process.exit(0);
  }

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, content, 'utf8');
  console.log(`Wrote ${OUTPUT_PATH}`);
}

main();
```

### Remediator template

```js
#!/usr/bin/env node
/**
 * @script      {script-name}
 * @type        remediator
 * @concern     {content|components|governance|ai}
 * @niche       {niche-value}
 * @purpose     {namespace:category}
 * @description {One-line description of what this remediator fixes.}
 * @mode        edit
 * @pipeline    {trigger} → {inputs} → {outputs}
 * @scope       {file-scope}
 * @usage       node operations/scripts/remediators/{concern}/{niche}/{script-name}.js [flags]
 * @policy      {requirement-ids}
 */

'use strict';

// ── Requires ──────────────────────────────────────────────────
const fs = require('fs');
const path = require('path');

// ── Configuration ─────────────────────────────────────────────
const REPO_ROOT = process.cwd();
const TARGET_DIR = path.join(REPO_ROOT, 'v2');
const FILE_PATTERN = /\.mdx$/;

// ── CLI Arguments ─────────────────────────────────────────────
const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');
const staged = args.includes('--staged');

// ── Usage ─────────────────────────────────────────────────────
function usage() {
  console.log(`Usage: node ${process.argv[1]} [flags]

Flags:
  --staged      Fix only git-staged files
  --dry-run     Show what would change without writing
  --help        Show this help message
`);
}

if (args.includes('--help')) {
  usage();
  process.exit(0);
}

// ── Helpers ───────────────────────────────────────────────────
function getTargetFiles() {
  if (staged) {
    const { execSync } = require('child_process');
    const output = execSync('git diff --cached --name-only --diff-filter=ACMR', { encoding: 'utf8' });
    return output.split('\n').filter(f => FILE_PATTERN.test(f));
  }
  return fs.readdirSync(TARGET_DIR, { recursive: true })
    .filter(f => FILE_PATTERN.test(f))
    .map(f => path.join(TARGET_DIR, f));
}

function repairFile(filePath) {
  const original = fs.readFileSync(filePath, 'utf8');
  let content = original;
  // ... repair logic — apply transformations to content
  if (content === original) return { changed: false };
  return { changed: true, content };
}

// ── Main ──────────────────────────────────────────────────────
function main() {
  const files = getTargetFiles();
  let fixedCount = 0;

  for (const file of files) {
    const result = repairFile(file);
    if (result.changed) {
      if (dryRun) {
        console.log(`[DRY RUN] Would fix: ${file}`);
      } else {
        fs.writeFileSync(file, result.content, 'utf8');
        console.log(`Fixed: ${file}`);
      }
      fixedCount += 1;
    }
  }

  console.log(`\n${dryRun ? 'Would fix' : 'Fixed'} ${fixedCount} file(s).`);
}

main();
```

### Audit template

```js
#!/usr/bin/env node
/**
 * @script      {script-name}
 * @type        audit
 * @concern     {content|components|governance|ai}
 * @niche       {niche-value}
 * @purpose     {namespace:category}
 * @description {One-line description of what this audit scans and reports.}
 * @mode        read-only
 * @pipeline    {trigger} → {inputs} → {outputs}
 * @scope       {file-scope}
 * @usage       node operations/scripts/audits/{concern}/{niche}/{script-name}.js [flags]
 * @policy      {requirement-ids}
 */

'use strict';

// ── Requires ──────────────────────────────────────────────────
const fs = require('fs');
const path = require('path');

// ── Configuration ─────────────────────────────────────────────
const REPO_ROOT = process.cwd();
const SCAN_DIR = path.join(REPO_ROOT, '{target-directory}');
const REPORT_DIR = path.join(REPO_ROOT, 'tasks', 'reports', '{report-subdirectory}');

// ── CLI Arguments ─────────────────────────────────────────────
const args = process.argv.slice(2);
const jsonMode = args.includes('--json');
const mdMode = args.includes('--md');

// ── Usage ─────────────────────────────────────────────────────
function usage() {
  console.log(`Usage: node ${process.argv[1]} [flags]

Flags:
  --json        Output results as JSON
  --md          Output results as Markdown
  --help        Show this help message
`);
}

if (args.includes('--help')) {
  usage();
  process.exit(0);
}

// ── Helpers ───────────────────────────────────────────────────
function scanFiles() {
  // ... discovery and analysis logic
  return []; // array of findings
}

function formatAsMarkdown(findings) {
  const lines = ['# Audit Report', '', `> Generated ${new Date().toISOString()}`, ''];
  // ... format findings as markdown table or list
  return lines.join('\n');
}

// ── Main ──────────────────────────────────────────────────────
function main() {
  const findings = scanFiles();

  if (jsonMode) {
    console.log(JSON.stringify({ total: findings.length, findings }, null, 2));
  } else if (mdMode) {
    console.log(formatAsMarkdown(findings));
  } else {
    // Default human-readable console output
    for (const f of findings) {
      console.log(`${f.file}: ${f.message}`);
    }
    console.log(`\nTotal findings: ${findings.length}`);
  }
}

main();
```

### Dispatch template

```js
#!/usr/bin/env node
/**
 * @script      {script-name}
 * @type        dispatch
 * @concern     {content|components|governance|ai}
 * @niche       {niche-value}
 * @purpose     {namespace:category}
 * @description {One-line description of the pipeline this dispatcher coordinates.}
 * @mode        execute
 * @pipeline    {trigger} → {inputs} → {outputs}
 * @scope       {file-scope}
 * @usage       node operations/scripts/dispatch/{concern}/{niche}/{script-name}.js [flags]
 * @policy      {requirement-ids}
 */

'use strict';

// ── Requires ──────────────────────────────────────────────────
const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

// ── Configuration ─────────────────────────────────────────────
const REPO_ROOT = process.cwd();

// Paths to child scripts (all relative to REPO_ROOT)
const STAGE_1_SCRIPT = 'operations/scripts/{type}/{concern}/{niche}/{audit-script}.js';
const STAGE_2_SCRIPT = 'operations/scripts/{type}/{concern}/{niche}/{repair-script}.js';
const STAGE_3_SCRIPT = 'operations/scripts/{type}/{concern}/{niche}/{verify-script}.js';

const REPORT_PATH = path.join(REPO_ROOT, 'tasks', 'reports', '{report-subdirectory}', '{report-file}');

// ── CLI Arguments ─────────────────────────────────────────────
const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');
const autoCommit = args.includes('--auto-commit');
const reportOnly = args.includes('--report-only');

// ── Usage ─────────────────────────────────────────────────────
function usage() {
  console.log(`Usage: node ${process.argv[1]} [flags]

Flags:
  --dry-run         Show what would happen without executing child scripts
  --auto-commit     Commit results automatically after successful pipeline run
  --report-only     Run audit stage only, skip repair
  --help            Show this help message
`);
}

if (args.includes('--help')) {
  usage();
  process.exit(0);
}

// ── Helpers ───────────────────────────────────────────────────
function runStage(label, scriptPath, extraArgs = []) {
  console.log(`\n── Stage: ${label} ──`);
  if (dryRun) {
    console.log(`[DRY RUN] Would run: node ${scriptPath} ${extraArgs.join(' ')}`);
    return { status: 0, stdout: '', stderr: '' };
  }
  const result = spawnSync('node', [scriptPath, ...extraArgs], {
    cwd: REPO_ROOT,
    encoding: 'utf8',
    stdio: ['inherit', 'pipe', 'pipe']
  });
  if (result.stdout) console.log(result.stdout);
  if (result.stderr) console.error(result.stderr);
  return result;
}

// ── Main ──────────────────────────────────────────────────────
function main() {
  console.log('Pipeline: {pipeline-name}');

  // Stage 1: Audit/analyse
  const auditResult = runStage('Audit', STAGE_1_SCRIPT, ['--json']);
  if (auditResult.status !== 0 && !reportOnly) {
    console.error('Audit failed — aborting pipeline.');
    process.exit(1);
  }

  if (reportOnly) {
    console.log('\n--report-only: stopping after audit stage.');
    process.exit(0);
  }

  // Stage 2: Repair/remediate
  const repairResult = runStage('Repair', STAGE_2_SCRIPT, ['--staged']);

  // Stage 3: Verify
  const verifyResult = runStage('Verify', STAGE_3_SCRIPT, ['--strict']);
  if (verifyResult.status !== 0) {
    console.error('Post-repair verification failed.');
    process.exit(1);
  }

  // Stage 4: Auto-commit (optional)
  if (autoCommit && !dryRun) {
    console.log('\n── Stage: Commit ──');
    spawnSync('git', ['add', '-A'], { cwd: REPO_ROOT });
    spawnSync('git', ['commit', '-m', 'chore: {pipeline-name} self-heal'], { cwd: REPO_ROOT });
    console.log('Committed.');
  }

  console.log('\nPipeline complete.');
}

main();
```

### Automation template

```js
#!/usr/bin/env node
/**
 * @script      {script-name}
 * @type        automation
 * @concern     {content|components|governance|ai}
 * @niche       {niche-value}
 * @purpose     {namespace:category}
 * @description {One-line description of the automated workflow.}
 * @mode        write
 * @pipeline    {trigger} → {inputs} → {outputs}
 * @scope       {file-scope}
 * @usage       node operations/scripts/automations/{concern}/{niche}/{script-name}.js [flags]
 * @policy      {requirement-ids}
 */

'use strict';

// ── Requires ──────────────────────────────────────────────────
const fs = require('fs');
const path = require('path');

// ── Configuration ─────────────────────────────────────────────
const REPO_ROOT = process.cwd();
const INPUT_SOURCE = '{external-api-url-or-file-path}';
const OUTPUT_DIR = path.join(REPO_ROOT, '{output-directory}');

// ── CLI Arguments ─────────────────────────────────────────────
const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');

// ── Usage ─────────────────────────────────────────────────────
function usage() {
  console.log(`Usage: node ${process.argv[1]} [flags]

Flags:
  --dry-run     Show what would be fetched/written without executing
  --help        Show this help message
`);
}

if (args.includes('--help')) {
  usage();
  process.exit(0);
}

// ── Helpers ───────────────────────────────────────────────────
async function fetchData() {
  // ... fetch from external source, transform data
  return {};
}

function writeOutput(data) {
  const outputPath = path.join(OUTPUT_DIR, '{output-file}');
  if (dryRun) {
    console.log(`[DRY RUN] Would write ${outputPath}`);
    return;
  }
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`Wrote ${outputPath}`);
}

// ── Main ──────────────────────────────────────────────────────
async function main() {
  const data = await fetchData();
  writeOutput(data);
  console.log('Automation complete.');
}

main().catch(err => {
  console.error(`Error: ${err.message}`);
  process.exit(1);
});
```

### Shell script template

```bash
#!/usr/bin/env bash
# @script            {script-name}
# @type              {audit|generator|validator|remediator|dispatch|automation}
# @concern           {content|components|governance|ai}
# @niche             {niche-value}
# @purpose           {namespace:category}
# @description       {One-line description.}
# @mode              {read-only|write|edit|generate|execute}
# @pipeline          {trigger} → {inputs} → {outputs}
# @scope             {file-scope}
# @usage             bash operations/scripts/{type}/{concern}/{niche}/{script-name}.sh [flags]
# @policy            {requirement-ids}

set -euo pipefail

# ── Configuration ─────────────────────────────────────────────
REPO_ROOT="$(pwd)"
TARGET_DIR="${REPO_ROOT}/{target}"
DRY_RUN=0

# ── Argument parsing ──────────────────────────────────────────
while [[ $# -gt 0 ]]; do
  case "$1" in
    --dry-run) DRY_RUN=1; shift ;;
    --help)
      echo "Usage: bash $0 [--dry-run] [--help]"
      exit 0
      ;;
    *) echo "Unknown flag: $1"; exit 2 ;;
  esac
done

# ── Helpers ───────────────────────────────────────────────────
log() { echo "[$(date -u +%Y-%m-%dT%H:%M:%SZ)] $*"; }
err() { echo "[ERROR] $*" >&2; }

# ── Main ──────────────────────────────────────────────────────
main() {
  log "Starting {script-name}..."
  # ... script logic
  log "Done."
}

main "$@"
```

---

## Appendix A — Governance tier assignments — GUIDE

These assignments define where each check runs. Pre-commit hard gates are ENFORCED; the rest are operational guidance.

### Hard gates (pre-commit — blocks commit)

- MDX syntax validation
- docs.json schema/redirect integrity
- File deletion guard
- .allowlist / v1 freeze
- Codex branch isolation

### Soft gates (GitHub Actions PR checks — warns, does not block merge)

- Copy linting (`lint-copy.js`, `lint-patterns.js`)
- Structure checks (`lint-structure.js`, `check-double-headers.js`, etc.)
- Grammar checks (`check-grammar-en-gb.js`, `check-proper-nouns.js`)
- Component governance (`component-layout-governance.js`, `check-component-css.js`)
- Agent docs freshness (`check-agent-docs-freshness.js`)
- PR template validation (`check-pr-template.js`)

### Self-heal (cron workflows — auto-fix + PR)

| Check | Schedule |
|---|---|
| Governance repair pipeline | Weekly (`repair-governance.yml`) |
| Content freshness audit | Weekly (`freshness-monitor.yml`) |
| Script metadata enforcement | Weekly |
| Grammar/spelling sweep | Weekly |
| Media asset audit | Monthly |
| Component docs regeneration | On component change (workflow trigger) |

---

## Appendix B — Quick reference card

```
TAXONOMY:    operations/scripts/<type>/<concern>/<niche>/script-name.js
TYPES:       audits | generators | validators | remediators | dispatch | automations
CONCERNS:    content | components | governance | ai
REPO_ROOT:   process.cwd()     (never __dirname traversal)
EXIT CODES:  0 = pass, 1 = fail, 2 = usage error
NAMING:      lowercase-kebab-case, UK English, verb-noun
ARCHIVE:     git mv to x-archive/ — never delete
HEADERS:     11 JSDoc tags in order — no @owner, @category, @dualmode, @needs, @domain
PRE-COMMIT:  5 hard gates only — MDX syntax, docs.json, deletions, allowlist, codex isolation
INDEXES:     NEVER in pre-commit — post-merge or post-PR workflows only
```
