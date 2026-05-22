# LPD Dev Auto-Remediation — Architecture Design

> **Thread:** LPD Dev Remediation Pipeline
> **Date:** 2026-04-15
> **Phase:** Design (awaiting approval)
> **Depends on:** spelling-terminology-research.md

<CustomDivider />

## 1. Outcome

When a developer runs `lpd dev`, safe remediations run automatically:
- **On startup:** batch remediation of staged/changed files before the server launches
- **On file save:** file-watch layer runs scoped remediators on the saved file

No `--fix` flag needed. This is the default behaviour. A `--no-fix` flag opts out.

<CustomDivider />

## 2. Remediator safety classification

### Safe to auto-run (deterministic, reversible, no content loss)

| Remediator | Why safe | Scope |
|---|---|---|
| `remediate-em-dashes.js` | Character substitution only. No content change. Has `--verify` with per-file revert | v2 MDX prose zones |
| `remediate-us-spelling.js` | Word-for-word replacement. UK/US pairs are exhaustive. Has `--verify` | v2 MDX prose zones |
| `repair-spelling.js` | Only applies deterministic corrections (single-suggestion cspell fixes). Skips ambiguous | staged/files, prose zones |
| `repair-mdx-safe-markdown.js` | Fixes known-unsafe MDX patterns. Has `--verify` with per-file revert. Exports `run()` for programmatic use | staged/files/repo |
| `repair-page-links.js` | Deterministic path normalisation. No content change | explicit files |
| `repair-page-imports.js` | Only fixes proven-safe import failures. Leaves ambiguous unchanged | files/repo |
| `normalise-frontmatter-keys.js` | Key casing only (Title to title). Adds mechanical metadata. No content change | v2 MDX |
| `repair-term-capitalisation.js` (NEW) | Proper noun casing in prose zones. Context-aware skipping | v2 MDX |

### Requires human approval (non-deterministic, content-altering, or judgement-dependent)

| Remediator | Why needs human | When to run |
|---|---|---|
| `remediate-voice-violations.js` | Removes sentences — content loss risk | `lpd repair` only, with review |
| `generate-seo.js` | Generates new metadata — quality varies | `lpd repair` only |
| `assign-purpose-metadata.js` | Inferred classification — may be wrong | `lpd repair` only |
| `add-pagetype-mechanical.js` | Inferred classification | `lpd repair` only |
| `repair-component-styles.js` | Code restructuring | `lpd repair` only |
| `remediate-styles.js` | CSS token changes — visual impact | `lpd repair` only |

<CustomDivider />

## 3. Architecture

### 3a. New file: `tools/dev/remediation/auto-remediate.js`

Central dispatcher. Called by `lpd dev` and by the file-watch layer.

```
auto-remediate.js
  --mode startup | watch
  --files <csv>          (watch mode: the changed file)
  --staged               (startup mode: only staged files)
  --full                 (startup mode: all v2 files)
  --language en-gb|en-us (default: en-gb)
  --dry-run              (report only, do not write)
  --no-verify            (skip post-write verification)
  --json                 (structured output)
```

#### Startup mode flow

```
1. Collect target files (staged or full)
2. For each safe remediator in sequence:
   a. Run in --write mode on target files
   b. Run --verify
   c. If verify fails: revert that remediator's changes, log warning
   d. Collect results: { remediator, files, fixes[], reverted[] }
3. Print summary table
4. Exit 0 (remediation is advisory, never blocks dev server)
```

#### Watch mode flow

```
1. Receive changed file path
2. Debounce (300ms — prevents save-loop)
3. Check file is eligible (v2 MDX, not _workspace, not archived)
4. For each safe remediator:
   a. Run on single file in --write mode
   b. Run --verify on single file
   c. If verify fails: revert, log
5. Print one-line summary to console
```

#### Remediation chain order

Order matters — some remediators depend on others having run first:

```
1. normalise-frontmatter-keys.js   (frontmatter must be clean first)
2. repair-mdx-safe-markdown.js     (MDX structure must be valid)
3. repair-spelling.js              (spelling before capitalisation)
4. remediate-us-spelling.js        (UK/US normalisation)
5. remediate-em-dashes.js          (character cleanup)
6. repair-term-capitalisation.js   (proper noun casing — last, after spelling)
7. repair-page-links.js            (link normalisation)
8. repair-page-imports.js          (import fixes)
```

### 3b. Changes to `tools/lpd` — `cmd_dev()`

Add to `cmd_dev()`:

```bash
# New flags
local skip_remediation=0
local remediation_language="en-gb"

# In flag parsing:
--no-fix)
    skip_remediation=1
    ;;
--language)
    remediation_language="$2"
    shift
    ;;

# After test run, before server launch:
if [ "$skip_remediation" = "0" ]; then
    echo "Running auto-remediation on staged files..."
    node "$REPO_ROOT/tools/dev/remediation/auto-remediate.js" \
        --mode startup --staged --language "$remediation_language" || true
fi
```

### 3c. File-watch layer: `tools/dev/remediation/watch-remediate.js`

Separate process spawned by `mint-dev.sh` alongside the Mintlify server.

```javascript
// Watches v2/ for .mdx file changes
// Debounces at 300ms
// Calls auto-remediate.js --mode watch --files <changed-file>
// Ignores changes made by remediators (tracks mtime to prevent loops)
```

#### Loop prevention

Critical: remediators write to files, which triggers the watcher, which runs remediators again.

Strategy:
1. **Mtime tracking:** before running a remediator, record the file's mtime. After the remediator writes, record the new mtime. When the watcher fires, skip if the mtime matches the last remediator-written mtime
2. **Lock file:** `/tmp/lpd-remediation-lock-<pid>`. Watcher checks lock before running. Remediator acquires lock before writing, releases after
3. **Cooldown:** after remediation, ignore the next change event for that file (500ms window)

All three layers for defence in depth.

### 3d. Integration into `mint-dev.sh`

```bash
# After starting mint dev server:
if [ "$LPD_SKIP_REMEDIATION" != "1" ]; then
    node "$REPO_ROOT/tools/dev/remediation/watch-remediate.js" &
    WATCH_PID=$!
    trap "kill $WATCH_PID 2>/dev/null" EXIT
fi
```

<CustomDivider />

## 4. Structured output contract

Every remediator should return (or be wrapped to return) this structure:

```json
{
  "remediator": "remediate-em-dashes",
  "mode": "write",
  "language": "en-gb",
  "files": [
    {
      "path": "v2/about/index.mdx",
      "fixes": [
        { "rule": "em-dash-to-en-dash", "line": 42, "before": "—", "after": "–" }
      ],
      "verified": true
    }
  ],
  "summary": {
    "filesScanned": 12,
    "filesFixed": 3,
    "totalFixes": 7,
    "reverted": 0,
    "errors": 0
  }
}
```

For existing scripts that output text: wrap them with a thin adapter in `auto-remediate.js` that captures stdout and parses results. Over time, migrate scripts to export a programmatic `run()` function (like `repair-mdx-safe-markdown.js` already does).

<CustomDivider />

## 5. New `lpd repair` surfaces

To complement `lpd dev` auto-remediation, add these governed surfaces to `lpd repair`:

| Surface | Remediators | Safe for auto | Notes |
|---|---|---|---|
| `content-style` | em-dashes + US/UK spelling + term capitalisation | Yes | The most common warnings |
| `content-safety` | MDX-safe markdown + cspell spelling | Yes | Structural safety |
| `content-links` | page links + page imports | Yes | Path normalisation |
| `content-copy` | voice violations | No | Content removal risk |
| `content-metadata` | frontmatter keys + pageType + purpose | Partial | Keys yes, classification no |

Or a single meta-surface: `lpd repair --surface content-quality` that chains all safe remediators.

<CustomDivider />

## 6. New files to create

| File | Purpose |
|---|---|
| `tools/dev/remediation/auto-remediate.js` | Central remediation dispatcher |
| `tools/dev/remediation/watch-remediate.js` | File-watch layer for on-save remediation |
| `tools/config/quality/term-capitalisation.json` | Proper noun capitalisation rules data |
| `tools/config/quality/language-rules.json` | UK/US spelling pairs (single source of truth) |
| `operations/scripts/remediators/content/style/repair-term-capitalisation.js` | New capitalisation remediator |

### Files to modify

| File | Change |
|---|---|
| `tools/lpd` | Add `--no-fix` and `--language` flags to `cmd_dev()`. Add new `lpd repair` surfaces |
| `tools/dev/preview/mint-dev.sh` | Spawn watch-remediate.js alongside server |
| `operations/scripts/remediators/content/style/remediate-us-spelling.js` | Add `--language` flag, extract rules to shared data file |
| `operations/scripts/remediators/content/repair/repair-spelling.js` | Add `--language` flag |
| `operations/tests/unit/spelling.test.js` | Add `--language` flag |
| `operations/tests/config/spell-dict.json` | Add missing terms from research (Section 4 of terminology research) |
| `tools/config/quality/cspell.json` | Add missing flagWords for UK enforcement |

<CustomDivider />

## 7. Implementation phases

### Phase 1 — Foundation (this session if approved)

1. Create `tools/config/quality/language-rules.json` with all UK/US pairs
2. Create `tools/config/quality/term-capitalisation.json` with Tier 1-7 terms
3. Update `operations/tests/config/spell-dict.json` with missing terms
4. Add `--language` flag to `remediate-us-spelling.js`
5. Add `--language` flag to `repair-spelling.js`

### Phase 2 — Auto-remediation dispatcher

6. Create `tools/dev/remediation/auto-remediate.js`
7. Create `operations/scripts/remediators/content/style/repair-term-capitalisation.js`
8. Wire auto-remediate into `tools/lpd` `cmd_dev()` with `--no-fix` opt-out
9. Add new `lpd repair` surfaces

### Phase 3 — File-watch layer

10. Create `tools/dev/remediation/watch-remediate.js` with loop prevention
11. Wire into `tools/dev/preview/mint-dev.sh`
12. Test with real editing sessions

### Phase 4 — Structured output migration

13. Add `run()` exports to remaining remediators (em-dashes, US spelling, term capitalisation)
14. Replace text-parsing adapters in auto-remediate.js with direct API calls
15. Add `--json` flag to all remediators

<CustomDivider />

## 8. Decision points for human

1. **Approve the safe-auto classification** (Section 2) — any remediators to add or remove from auto?
2. **Approve `--no-fix` as opt-out** — default is auto-remediate on `lpd dev`
3. **Approve file-watch layer** — this is the biggest change; loop prevention design acceptable?
4. **Single meta-surface or separate surfaces** for `lpd repair`?
5. **Phase 1 scope** — proceed with foundation (data files + language flags) this session?
