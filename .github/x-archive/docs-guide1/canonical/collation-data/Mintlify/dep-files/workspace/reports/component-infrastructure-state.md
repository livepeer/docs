# Component Infrastructure State — Verification Report

Generated: 2026-03-09 17:52:06 AEDT  
Branch: `docs/20260309-component-state-report` at commit `4ff7da36`

## Summary

| Check | Status | Notes |
|-------|--------|-------|
| 1. Folder structure | ⚠️ | Expected category directories exist, but `_archive/`, `data/`, and `page-structure/` do not have `examples/` subdirectories |
| 2. File inventory | ✅ | 40 JSX files across 5 active categories; the supplied uppercase grep matched 15 camelCase filenames, but the naming validator reports no violations |
| 3. JSDoc coverage | ⚠️ | Literal grep output reports `112 / 82`, which overcounts tags vs exports; supplemental validator reports 0 findings |
| 4. Existing scripts | ⚠️ | 5 scripts exist and all have headers; `audit-component-usage.js --help` runs the audit instead of printing usage |
| 5. Script callers | ⚠️ | 2 wired, 3 unwired |
| 6. Pre-commit hook | ⚠️ | No direct component scripts in the verification block; naming checks only run indirectly via `tests/run-all.js` |
| 7. CI workflow | ⚠️ | No dedicated `component-enforcement` job; naming is enforced only indirectly through PR changed-file checks |
| 8. Phase 2a generator | ❌ | `tools/scripts/generate-component-governance-remediation-reports.js` is missing |
| 9. Shared library | ❌ | `tools/lib/component-governance-utils.js` is missing |
| 10. Registry + docs | ⚠️ | Registry/usage JSON artifacts are missing; 32 published component-library pages still use legacy category pages |
| 11. Style tokens | ❌ | 0 `lp-color` matches and 0 `--lp-*` tokens |
| 12. Legacy imports | ⚠️ | 1 remaining legacy import file under `display`; 0 for `integrations` and `domain` |

## Detailed Findings

### 1. Folder Structure

Raw command output:

```text
$ ls -d snippets/components/*/
snippets/components/_archive/
snippets/components/content/
snippets/components/data/
snippets/components/layout/
snippets/components/page-structure/
snippets/components/primitives/

$ ls -d snippets/components/*/examples/ 2>/dev/null
snippets/components/content/examples/
snippets/components/layout/examples/
snippets/components/primitives/examples/

$ ls -d snippets/components/display/ snippets/components/integrations/ snippets/components/domain/ 2>/dev/null
(no stdout; command exited 1 with stderr redirected to /dev/null)
```

Observed state:

- Existing directories: `_archive/`, `content/`, `data/`, `layout/`, `page-structure/`, `primitives/`
- Missing expected directories: none
- Unexpected directories: none
- Missing `examples/` directories: `_archive/examples/`, `data/examples/`, `page-structure/examples/`
- Legacy directories `display/`, `integrations/`, and `domain/` do not exist on `origin/docs-v2`

### 2. Component File Inventory

Per-category counts:

```text
primitives:       11 files
layout:       13 files
content:        8 files
data:        5 files
page-structure:        3 files
```

Total JSX files across active categories: **40**

<details>
<summary>Full JSX inventory</summary>

```text
snippets/components//content/code.jsx
snippets/components//content/externalContent.jsx
snippets/components//content/math.jsx
snippets/components//content/quote.jsx
snippets/components//content/release.jsx
snippets/components//content/responseField.jsx
snippets/components//content/video.jsx
snippets/components//content/zoomableDiagram.jsx
snippets/components//data/coingecko.jsx
snippets/components//data/data.jsx
snippets/components//data/embed.jsx
snippets/components//data/showcaseCards.jsx
snippets/components//data/videoData.jsx
snippets/components//layout/cardCarousel.jsx
snippets/components//layout/cards.jsx
snippets/components//layout/containers.jsx
snippets/components//layout/customCards.jsx
snippets/components//layout/layout.jsx
snippets/components//layout/listSteps.jsx
snippets/components//layout/lists.jsx
snippets/components//layout/quadGrid.jsx
snippets/components//layout/searchTable.jsx
snippets/components//layout/steps.jsx
snippets/components//layout/table.jsx
snippets/components//layout/tables.jsx
snippets/components//layout/text.jsx
snippets/components//page-structure/frameMode.jsx
snippets/components//page-structure/heroGif.jsx
snippets/components//page-structure/portals.jsx
snippets/components//primitives/a11y.jsx
snippets/components//primitives/buttons.jsx
snippets/components//primitives/customCardTitle.jsx
snippets/components//primitives/divider.jsx
snippets/components//primitives/icons.jsx
snippets/components//primitives/image.jsx
snippets/components//primitives/links.jsx
snippets/components//primitives/previewCallouts.jsx
snippets/components//primitives/socialLinks.jsx
snippets/components//primitives/spacer.jsx
snippets/components//primitives/text.jsx
```

</details>

Literal naming check output:

```text
$ find snippets/components/ -name '*.jsx' -not -path '*_archive*' | grep -E '[A-Z]' || echo "All camelCase"
snippets/components//layout/listSteps.jsx
snippets/components//layout/quadGrid.jsx
snippets/components//layout/searchTable.jsx
snippets/components//layout/customCards.jsx
snippets/components//layout/cardCarousel.jsx
snippets/components//content/zoomableDiagram.jsx
snippets/components//content/responseField.jsx
snippets/components//content/externalContent.jsx
snippets/components//primitives/socialLinks.jsx
snippets/components//primitives/previewCallouts.jsx
snippets/components//primitives/customCardTitle.jsx
snippets/components//page-structure/heroGif.jsx
snippets/components//page-structure/frameMode.jsx
snippets/components//data/showcaseCards.jsx
snippets/components//data/videoData.jsx
```

Supplemental validator result:

```text
$ node tools/scripts/validators/components/check-naming-conventions.js
No component naming violations found (strict-camel).
```

Notes:

- The supplied grep command is inverted relative to its comment: it matches filenames containing uppercase characters, which is expected for camelCase files.
- Under the repo’s current validator, there are **no naming violations**.

### 3. JSDoc Coverage

Literal coverage output:

```text
primitives: 27 / 17 exports have @component JSDoc
layout: 27 / 29 exports have @component JSDoc
content: 23 / 18 exports have @component JSDoc
data: 15 / 17 exports have @component JSDoc
page-structure: 20 / 1 exports have @component JSDoc
```

Literal spot-check output:

```text
=== snippets/components/primitives/icons.jsx ===
59
(14 = complete)
=== snippets/components/layout/containers.jsx ===
89
(14 = complete)
=== snippets/components/content/math.jsx ===
28
(14 = complete)
=== snippets/components/data/embed.jsx ===
43
(14 = complete)
=== snippets/components/page-structure/portals.jsx ===
147
(14 = complete)
```

Supplemental validator result:

```text
$ node tools/scripts/validators/components/check-component-docs.js --path snippets/components
No findings.

Summary:
  [4.9] 0 finding(s)
  [4.10] 0 finding(s)
  [4.11] 0 finding(s)
  Total 0 finding(s)
Rule 4.11: skipped (no --base-ref provided)
```

Notes:

- The supplied grep coverage command is not a reliable export-to-JSDoc ratio on this branch; it counts `@component` tag lines, so it can exceed the export total.
- The supplied spot-check command is also not a true “14 fields” assertion; it counts all matching governance tag lines in the file, not just the first export block.
- Supplemental validator evidence indicates **no exports are missing JSDoc entirely** under the current component-docs rules.

### 4. Existing Component Scripts

| Script | Exists | Lines | Header | What it actually checks | Runtime result |
|-------|--------|-------|--------|--------------------------|----------------|
| `tools/scripts/validators/components/check-component-css.js` | Yes | 949 | Yes | Advisory CSS governance validator for `snippets/components`; flags `ThemeData`, hardcoded color literals, non-token color values, and inline styles; supports optional `--fix` | `--help` prints usage successfully |
| `tools/scripts/validators/components/check-component-docs.js` | Yes | 850 | Yes | Advisory docs validator for rules 4.9, 4.10, and 4.11: JSDoc coverage, prop docs, and docs-entry coverage for new components | `--help` prints usage successfully; direct scan returned 0 findings |
| `tools/scripts/validators/components/check-naming-conventions.js` | Yes | 600 | Yes | Active naming validator for strict camelCase filenames and PascalCase exports; supports `migration` and `strict-camel` modes | `--help` prints usage successfully; default run returned no violations |
| `tools/scripts/enforcers/pr/check-component-immutability.js` | Yes | 270 | Yes | PR diff enforcer that compares `snippets/components/**` changes to `docs-v2`, distinguishes new files from modified existing files, and checks for a `component-change-approved` label in PR context | `--help` prints usage successfully |
| `tools/scripts/audit-component-usage.js` | Yes | 308 | Yes | Manual audit script that inventories exported components, published component-library imports, and V2 page usage, then writes `tasks/reports/repo-ops/component-usage-audit.json` | `--help` has no handler; it executed the audit and printed JSON instead |

Observed help output:

```text
$ node tools/scripts/validators/components/check-component-css.js --help
Usage: node tools/scripts/validators/components/check-component-css.js [--path snippets/components/] [--fix]

$ node tools/scripts/validators/components/check-component-docs.js --help
Usage: node tools/scripts/validators/components/check-component-docs.js [options]

Options:
  --path <dir>        Component root to scan (default: snippets/components)
  --base-ref <ref>    Base ref for added-component docs-entry checks

$ node tools/scripts/validators/components/check-naming-conventions.js --help
Usage: node tools/scripts/validators/components/check-naming-conventions.js [--path snippets/components] [--files path[,path...]] [--mode migration|strict-camel]

$ node tools/scripts/enforcers/pr/check-component-immutability.js --help
Usage: node tools/scripts/enforcers/pr/check-component-immutability.js [--base-ref docs-v2]

$ node tools/scripts/audit-component-usage.js --help
{
  "summary": {
    "totalComponents": 115,
    "inComponentLibrary": 84,
    "commentedOutInLibrary": 56,
```

### 5. Script Callers

Caller evidence:

```text
check-component-css
  tools/scripts//validators/components/check-component-css.js:3
  tools/scripts//validators/components/check-component-css.js:12
  tools/scripts//validators/components/check-component-css.js:30
  tools/scripts//validators/components/check-component-css.js:31
  tools/scripts//validators/components/check-component-css.js:32
  tools/scripts//validators/components/check-component-css.js:230

check-component-docs
  tools/scripts//validators/components/check-component-docs.js:3
  tools/scripts//validators/components/check-component-docs.js:12
  tools/scripts//validators/components/check-component-docs.js:13
  tools/scripts//validators/components/check-component-docs.js:29
  tools/scripts//validators/components/check-component-docs.js:30
  tools/scripts//validators/components/check-component-docs.js:62

check-naming-conventions
  tests//run-all.js:36
  tests//run-pr-checks.js:28
  tools/scripts//validators/components/check-naming-conventions.js:3
  tools/scripts//validators/components/check-naming-conventions.js:11
  tools/scripts//validators/components/check-naming-conventions.js:47

check-component-immutability
  tools/scripts//enforcers/pr/check-component-immutability.js:3
  tools/scripts//enforcers/pr/check-component-immutability.js:11
  tools/scripts//enforcers/pr/check-component-immutability.js:85

audit-component-usage
  .github//workflows/content-health.yml:22
  tools/scripts//audit-component-usage.js:2
  tools/scripts//audit-component-usage.js:10
  tools/scripts//audit-tasks-folders.js:708
```

Classification:

| Script | Caller(s) | Wired? |
|-------|-----------|--------|
| `check-component-css.js` | Self references only | Orphaned |
| `check-component-docs.js` | Self references only | Orphaned |
| `check-naming-conventions.js` | `tests/run-all.js`, `tests/run-pr-checks.js` | Wired |
| `check-component-immutability.js` | Self references only | Orphaned |
| `audit-component-usage.js` | `.github/workflows/content-health.yml` weekly workflow; listed in `tools/scripts/audit-tasks-folders.js` | Wired |

Summary: **2 wired, 3 orphaned**

### 6. Pre-commit Hook

Analysis:

- Hook file length: **961 lines**
- Bypass flags present: `SKIP_STRUCTURE_CHECK`, `SKIP_STYLE_CHECK`, `SKIP_VERIFICATION`, `SKIP_TESTS`, `SKIP_WCAG_AUDIT`, `SKIP_ALL`
- Flow control model: starts with `VIOLATIONS=0`, accumulates failures, has early `exit 1` paths for hard blocks (codex-on-`docs-v2`, deletions, `.allowlist`, `v1/` changes), and ends with `exit 0` only when `VIOLATIONS=0`
- Existing component checks in hook:
  - No direct `check-component-css.js`, `check-component-docs.js`, or `check-component-immutability.js` call in the `SKIP_VERIFICATION` block
  - Component naming is enforced indirectly through `tests/run-all.js --staged --skip-browser`, which imports `check-naming-conventions.js`
- Best insertion point for future direct component checks:
  - Immediately after the `SKIP_VERIFICATION` banner block and before `run_node_check()` / the staged test suite section
  - Current boundary on this branch is between the `if [ "$SKIP_VERIFICATION" = "1" ] ... fi` block and the `run_node_check()` function

Relevant integration lines:

```text
.githooks/pre-commit:822 if [ "$SKIP_VERIFICATION" = "1" ]; then
.githooks/pre-commit:849 if [ "$SKIP_TESTS" = "1" ]; then
.githooks/pre-commit:902 tests/run-all.js --staged --skip-browser
tests/run-all.js:36 const componentNamingTests = require('../tools/scripts/validators/components/check-naming-conventions');
tests/run-all.js:67 const componentNamingResult = componentNamingTests.run();
tests/run-pr-checks.js:28 const componentNamingTests = require('../tools/scripts/validators/components/check-naming-conventions');
tests/run-pr-checks.js:211 const result = componentNamingTests.run({ files });
```

<details>
<summary>Full <code>.githooks/pre-commit</code> contents</summary>

~~~bash
#!/bin/bash
# @script            pre-commit
# @category          orchestrator
# @purpose           infrastructure:pipeline-orchestration
# @scope             .githooks
# @owner             docs
# @needs             R-R29
# @purpose-statement Pre-commit hook orchestrator — runs structural checks, unit tests, codex validation, and docs-index freshness check before allowing commit
# @pipeline          P1 (commit, hook entry point)
# @usage             bash .githooks/pre-commit [flags]
# Pre-commit hook to enforce style guide compliance
# Checks for common violations before allowing commits
#
# To install this hook, run:
#   cp .githooks/pre-commit .git/hooks/pre-commit
#   chmod +x .git/hooks/pre-commit
#
# Bypass flags (use sparingly):
#   SKIP_STRUCTURE_CHECK=1 - Skip root directory and snippets structure checks
#   SKIP_STYLE_CHECK=1     - Skip style guide compliance checks
#   SKIP_VERIFICATION=1    - Skip verification scripts
#   SKIP_TESTS=1           - Skip test suite
#   SKIP_WCAG_AUDIT=1      - Skip staged WCAG browser audit while keeping other staged checks enabled
#   SKIP_ALL=1             - Skip all checks (use with extreme caution)
#
# Human-only override flags:
#   --trailer "allowlist-edit=true" - Allow editing .allowlist file (HUMANS ONLY - AIs must never use this)
#   ALLOWLIST_EDIT=1                - Legacy fallback for automation contexts
#   --trailer "allow-deletions=true"      - Allow file deletions (HUMANS ONLY - AIs must never use this)
#   ALLOW_DELETIONS=1                      - Legacy fallback for automation contexts

STYLE_GUIDE_PATH="v2/pages/07_resources/documentation-guide/style-guide.mdx"
VIOLATIONS=0
WARNINGS=()

# Colors for output
RED='\033[0;31m'
YELLOW='\033[1;33m'
GREEN='\033[0;32m'
NC='\033[0m' # No Color

# Check for bypass flags
SKIP_STRUCTURE_CHECK=${SKIP_STRUCTURE_CHECK:-0}
SKIP_STYLE_CHECK=${SKIP_STYLE_CHECK:-0}
SKIP_VERIFICATION=${SKIP_VERIFICATION:-0}
SKIP_TESTS=${SKIP_TESTS:-0}
SKIP_WCAG_AUDIT=${SKIP_WCAG_AUDIT:-0}
SKIP_ALL=${SKIP_ALL:-0}
ALLOW_DELETIONS=${ALLOW_DELETIONS:-0}
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD 2>/dev/null || echo "")

# Freeze staged files snapshot to avoid hook-induced staging changes.
STAGED_FILES_SNAPSHOT=$(git diff --cached --name-only --diff-filter=ACMR 2>/dev/null || true)
STAGED_FILES_SNAPSHOT_ALL=$(git diff --cached --name-only --diff-filter=ACMRD 2>/dev/null || true)
STAGED_FILES_SNAPSHOT_ADDED=$(git diff --cached --name-only --diff-filter=A 2>/dev/null || true)
STAGED_FILES_SNAPSHOT_DELETED=$(git diff --cached --name-only --diff-filter=D 2>/dev/null || true)
export LPD_STAGED_FILES_SNAPSHOT="$STAGED_FILES_SNAPSHOT"

get_staged_docs_pages() {
    if ! command -v node &>/dev/null || [ ! -f "tests/utils/file-walker.js" ]; then
        return 0
    fi

    node -e "const path = require('path'); const { getStagedDocsPageFiles } = require('./tests/utils/file-walker'); const root = process.cwd(); const files = getStagedDocsPageFiles(root).map((filePath) => path.relative(root, filePath).split(path.sep).join('/')); process.stdout.write(files.join('\n'));"
}

STAGED_DOCS_PAGES=$(get_staged_docs_pages)
STAGED_DOCS_PAGES_CSV=$(printf "%s" "$STAGED_DOCS_PAGES" | paste -sd, -)
# pre-commit hooks do not receive commit args directly. Detect trailer usage
# from the parent git commit command.
PARENT_GIT_CMD=$(ps -o command= -p "$PPID" 2>/dev/null || true)

has_human_override_trailer() {
    local trailer_key="$1"
    case "$PARENT_GIT_CMD" in
        *"--trailer ${trailer_key}"*|*"--trailer=${trailer_key}"*|*"--trailer \"${trailer_key}"*|*"--trailer '${trailer_key}"*)
            return 0
            ;;
    esac
    return 1
}

staged_added_lines_match() {
    local file="$1"
    local pattern="$2"

    git diff --cached --unified=0 -- "$file" 2>/dev/null | grep -Eq "^\+[^+].*(${pattern})"
}

get_contract_allowed_generated() {
    local contract_path=".codex/task-contract.yaml"
    if [ ! -f "$contract_path" ]; then
        return 0
    fi

    awk '
        /^allowed_generated:[[:space:]]*$/ { in_block = 1; next }
        in_block && /^[^[:space:]-]/ { in_block = 0 }
        in_block && /^[[:space:]]*-[[:space:]]*/ {
            line = $0
            sub(/^[[:space:]]*-[[:space:]]*/, "", line)
            print line
        }
    ' "$contract_path"
}

path_in_allowed_generated() {
    local target="$1"
    local entry=""

    while IFS= read -r entry; do
        [ -z "$entry" ] && continue
        if [ "$target" = "$entry" ]; then
            return 0
        fi
        case "$entry" in
            */)
                if [[ "$target" == "$entry"* ]]; then
                    return 0
                fi
                ;;
            *)
                if [[ "$target" == "$entry/"* ]]; then
                    return 0
                fi
                ;;
        esac
    done < <(get_contract_allowed_generated)

    return 1
}

is_repo_generated_untrack_allowlisted() {
    local file="$1"

    case "$file" in
        docs-index.json|llms-full.txt|tools/scripts/snippets/generate-data/data/discovered-terms.json|tools/scripts/snippets/generate-data/data/glossary-terms.json)
            return 0
            ;;
    esac

    return 1
}

is_allowed_generated_untrack() {
    local file="$1"

    if [ ! -e "$file" ]; then
        return 1
    fi

    if ! git check-ignore -q -- "$file"; then
        return 1
    fi

    if is_repo_generated_untrack_allowlisted "$file"; then
        return 0
    fi

    if [[ "$CURRENT_BRANCH" == codex/* ]] && path_in_allowed_generated "$file"; then
        return 0
    fi

    return 1
}

head_blob_for_path() {
    local file="$1"
    git rev-parse "HEAD:${file}" 2>/dev/null || true
}

has_surviving_index_blob_match() {
    local blob="$1"
    local deleted_file="$2"
    local matches=""

    matches=$(git ls-files -s | awk -v blob="$blob" '$2 == blob { print $4 }')
    while IFS= read -r match; do
        if [[ -n "$match" && "$match" != "$deleted_file" ]]; then
            return 0
        fi
    done <<< "$matches"

    return 1
}

is_safe_duplicate_deletion() {
    local file="$1"
    local head_blob=""

    head_blob=$(head_blob_for_path "$file")
    if [[ -z "$head_blob" ]]; then
        return 1
    fi

    has_surviving_index_blob_match "$head_blob" "$file"
}

partition_deleted_files() {
    local deleted_list="$1"
    ALLOWED_GENERATED_DELETIONS=""
    SAFE_DUPLICATE_DELETIONS=""
    BLOCKED_DELETED_FILES=""

    while IFS= read -r file; do
        [ -z "$file" ] && continue

        if is_allowed_generated_untrack "$file"; then
            ALLOWED_GENERATED_DELETIONS="${ALLOWED_GENERATED_DELETIONS}${file}"$'\n'
        elif is_safe_duplicate_deletion "$file"; then
            SAFE_DUPLICATE_DELETIONS="${SAFE_DUPLICATE_DELETIONS}${file}"$'\n'
        else
            BLOCKED_DELETED_FILES="${BLOCKED_DELETED_FILES}${file}"$'\n'
        fi
    done <<< "$deleted_list"
}

is_codex_session() {
    if [[ "${CODEX_SHELL:-0}" == "1" ]]; then
        return 0
    fi

    if [[ -n "${CODEX_THREAD_ID:-}" ]]; then
        return 0
    fi

    if [[ "${CODEX_CI:-0}" == "1" ]]; then
        return 0
    fi

    if [[ -n "${CODEX_INTERNAL_ORIGINATOR_OVERRIDE:-}" ]]; then
        return 0
    fi

    return 1
}

allow_docs_v2_commit_override() {
    if [[ "${ALLOW_MAIN_COMMIT:-0}" == "1" ]]; then
        return 0
    fi

    if has_human_override_trailer "allow-main-commit=true"; then
        return 0
    fi

    return 1
}

enforce_docs_v2_codex_isolation() {
    if [[ "$CURRENT_BRANCH" != "docs-v2" ]]; then
        return 0
    fi

    if ! is_codex_session; then
        return 0
    fi

    if allow_docs_v2_commit_override; then
        echo -e "${YELLOW}⚠️  docs-v2 commit override detected (human-authorized).${NC}"
        return 0
    fi

    echo -e "${RED}╔═══════════════════════════════════════════════════════════════╗${NC}"
    echo -e "${RED}║  ❌ COMMIT BLOCKED: CODEX SESSION ON docs-v2                 ║${NC}"
    echo -e "${RED}╚═══════════════════════════════════════════════════════════════╝${NC}"
    echo ""
    echo -e "${YELLOW}Do not stash/reset. Preserve current staged+unstaged edits by branching in-place:${NC}"
    echo "  git switch -c codex/<issue-id>-<slug>"
    echo "  # if branch exists already: git switch codex/<issue-id>-<slug>"
    echo ""
    echo -e "${YELLOW}Then initialize contract + lock:${NC}"
    echo "  node tools/scripts/codex/task-preflight.js --task <issue-id> --slug <slug> --scope \"<path1,path2>\""
    echo ""
    echo -e "${YELLOW}Human override (explicit chat instruction required):${NC}"
    echo "  ALLOW_MAIN_COMMIT=1 git commit -m \"...\" --trailer \"allow-main-commit=true\""
    echo ""
    return 1
}

run_codex_task_contract_check() {
    if [[ "$CURRENT_BRANCH" != codex/* ]]; then
        return 0
    fi

    echo -e "${YELLOW}🔍 Validating codex task contract...${NC}"
    if node tools/scripts/validate-codex-task-contract.js --branch "$CURRENT_BRANCH" --validate-contract-only --quiet; then
        echo -e "${GREEN}✓ Codex task contract check passed${NC}"
        return 0
    fi

    VIOLATIONS=$((VIOLATIONS + 1))
    WARNINGS+=("❌ Codex task contract validation failed")
    echo -e "${RED}❌ Codex task contract validation failed${NC}"
    return 1
}

run_codex_lock_check() {
    if [[ "$CURRENT_BRANCH" != codex/* ]]; then
        return 0
    fi

    local script_path="tools/scripts/codex/validate-locks.js"
    if [ ! -f "$script_path" ]; then
        WARNINGS+=("❌ Missing codex lock validator: $script_path")
        VIOLATIONS=$((VIOLATIONS + 1))
        echo -e "${RED}❌ Missing codex lock validator: $script_path${NC}"
        return 1
    fi

    echo -e "${YELLOW}🔍 Validating codex local lock ownership...${NC}"
    if node "$script_path" --branch "$CURRENT_BRANCH" --staged --quiet; then
        echo -e "${GREEN}✓ Codex local lock check passed${NC}"
        return 0
    fi

    WARNINGS+=("❌ Codex local lock validation failed")
    VIOLATIONS=$((VIOLATIONS + 1))
    echo -e "${RED}❌ Codex local lock validation failed${NC}"
    return 1
}

run_ai_stash_policy_check() {
    local script_path="tools/scripts/check-no-ai-stash.sh"
    if [ ! -x "$script_path" ]; then
        WARNINGS+=("❌ Missing executable guard script: $script_path")
        VIOLATIONS=$((VIOLATIONS + 1))
        echo -e "${RED}❌ Missing executable guard script: $script_path${NC}"
        return 1
    fi

    echo -e "${YELLOW}🔍 Enforcing AI stash policy...${NC}"
    if bash "$script_path" --quiet; then
        echo -e "${GREEN}✓ AI stash policy check passed${NC}"
        return 0
    fi

    VIOLATIONS=$((VIOLATIONS + 1))
    WARNINGS+=("❌ AI stash policy violation: stash-based isolation detected")
    echo -e "${RED}❌ AI stash policy violation: stash-based isolation detected${NC}"
    echo -e "${YELLOW}   Required workflow: branch + WIP commit checkpoints (no git stash).${NC}"
    return 1
}

should_enforce_ai_stash_policy() {
    if [[ "$CURRENT_BRANCH" == codex/* ]]; then
        return 0
    fi

    return 1
}

allow_manifest_migrate_asset_deletions() {
    local deleted_files="$1"
    local manifest_path="tasks/reports/media-audit/media-audit-manifest.json"

    if [[ "$CURRENT_BRANCH" != codex/* ]]; then
        return 1
    fi

    if [[ -z "$deleted_files" ]] || [[ ! -f "$manifest_path" ]]; then
        return 1
    fi

    DELETED_FILES_INPUT="$deleted_files" node - <<'NODE'
const fs = require('fs');

const deletedFiles = String(process.env.DELETED_FILES_INPUT || '')
  .split('\n')
  .map((entry) => entry.trim())
  .filter(Boolean);

if (deletedFiles.length === 0) {
  process.exit(1);
}

let manifest;
try {
  manifest = JSON.parse(fs.readFileSync('tasks/reports/media-audit/media-audit-manifest.json', 'utf8'));
} catch (_error) {
  process.exit(1);
}

const assets = Array.isArray(manifest && manifest.assets) ? manifest.assets : [];
const allowed = new Set(
  assets
    .filter((asset) => asset && typeof asset.migration_target === 'string' && asset.migration_target.startsWith('migrate_'))
    .map((asset) => String(asset.path || '').trim())
    .filter(Boolean)
);

process.exit(deletedFiles.every((filePath) => allowed.has(filePath)) ? 0 : 1);
NODE
}

if [ "$SKIP_ALL" = "1" ]; then
    echo -e "${YELLOW}⚠️  WARNING: All pre-commit checks bypassed (SKIP_ALL=1)${NC}"
    echo -e "${YELLOW}   This should only be used in emergencies.${NC}"
    exit 0
fi

if ! enforce_docs_v2_codex_isolation; then
    exit 1
fi

if [[ "$CURRENT_BRANCH" == "docs-v2" ]]; then
    echo -e "${YELLOW}⚠️  You are committing on docs-v2. Recommended path for agent tasks is an isolated codex/<issue-id>-<slug> branch/worktree.${NC}"
fi

run_codex_task_contract_check
run_codex_lock_check
if should_enforce_ai_stash_policy; then
    run_ai_stash_policy_check
fi

# Check for file deletions (BLOCKED - requires human override)
# NOTE: Deletions in tasks/ are allowed (AI-only working directory)
ALL_DELETED_FILES=$(git diff --cached --name-only --diff-filter=D || true)
DELETED_FILES_INPUT=$(echo "$ALL_DELETED_FILES" | grep -v '^tasks/' || true)
ALLOWED_LINK_MAP_DELETIONS=$(echo "$DELETED_FILES_INPUT" | grep -E '^snippets/data/[^/]+/hrefs\.jsx$' || true)
REMAINING_DELETED_FILES=$(echo "$DELETED_FILES_INPUT" | grep -Ev '^snippets/data/[^/]+/hrefs\.jsx$' || true)
partition_deleted_files "$REMAINING_DELETED_FILES"
if [ -n "$ALLOWED_LINK_MAP_DELETIONS" ]; then
    ALLOWED_GENERATED_DELETIONS="${ALLOWED_LINK_MAP_DELETIONS}"$'\n'"${ALLOWED_GENERATED_DELETIONS}"
fi
DELETED_FILES=$(printf '%s' "$BLOCKED_DELETED_FILES")

if [ -n "$ALLOWED_GENERATED_DELETIONS" ]; then
    echo -e "${GREEN}✓ Allowed generated file untracking detected:${NC}"
    echo "$ALLOWED_GENERATED_DELETIONS" | sed '/^$/d; s/^/  • /'
    echo ""
fi
if [ -n "$SAFE_DUPLICATE_DELETIONS" ]; then
    echo -e "${YELLOW}ℹ️  Allowing duplicate-content deletions with surviving canonical files:${NC}"
    echo "$SAFE_DUPLICATE_DELETIONS" | sed '/^$/d; s/^/  • /'
    echo ""
fi
ALLOWED_MANIFEST_DELETIONS=""

if [ -n "$DELETED_FILES" ]; then
    if [ -n "$ALLOWED_GENERATED_DELETIONS" ]; then
        echo -e "${YELLOW}ℹ️  Allowing exempt generated deletions:${NC}"
        echo "$ALLOWED_GENERATED_DELETIONS" | sed '/^$/d; s/^/  ↺ /'
        echo ""
    fi

    if [ -n "$BLOCKED_DELETED_FILES" ] && allow_manifest_migrate_asset_deletions "$BLOCKED_DELETED_FILES"; then
        ALLOWED_MANIFEST_DELETIONS="$BLOCKED_DELETED_FILES"
        BLOCKED_DELETED_FILES=""
        DELETED_FILES=""
    fi

    if [ -n "$ALLOWED_MANIFEST_DELETIONS" ]; then
        echo -e "${YELLOW}ℹ️  Allowing manifest-approved media asset deletions:${NC}"
        echo "$ALLOWED_MANIFEST_DELETIONS" | sed '/^$/d; s/^/  ↺ /'
        echo ""
    fi

    if [ "$ALLOW_DELETIONS" != "1" ] && has_human_override_trailer "allow-deletions"; then
        ALLOW_DELETIONS=1
    fi

    if [ -n "$BLOCKED_DELETED_FILES" ] && [ "$ALLOW_DELETIONS" != "1" ]; then
        VIOLATIONS=$((VIOLATIONS + 1))
        echo -e "${RED}╔═══════════════════════════════════════════════════════════════╗${NC}"
        echo -e "${RED}║  ❌ FILE DELETIONS DETECTED - COMMIT BLOCKED                 ║${NC}"
        echo -e "${RED}╚═══════════════════════════════════════════════════════════════╝${NC}"
        echo ""
        echo -e "${RED}🚫 DELETIONS ARE NOT ALLOWED${NC}"
        echo ""
        echo "The following files are being deleted:"
        echo "$BLOCKED_DELETED_FILES" | sed '/^$/d; s/^/  ❌ /'
        echo ""
        if [ -n "$(echo "$ALL_DELETED_FILES" | grep '^tasks/')" ]; then
            echo -e "${GREEN}ℹ️  Note: Deletions in tasks/ are allowed (AI-only working directory)${NC}"
            echo ""
        fi
        if [ -n "$ALLOWED_GENERATED_DELETIONS" ]; then
            echo -e "${GREEN}ℹ️  Generated link maps and approved generated outputs are exempt from this block when safely regenerated or untracked.${NC}"
            echo ""
        fi
        if [ -n "$ALLOWED_MANIFEST_DELETIONS" ]; then
            echo -e "${GREEN}ℹ️  Manifest-approved migrate_* asset deletions are exempt from this block on codex branches.${NC}"
            echo ""
        fi
        echo -e "${YELLOW}📋 INSTRUCTIONS FOR AI AGENTS:${NC}"
        echo ""
        echo -e "${YELLOW}  ⚠️  DO NOT DELETE FILES - DETERMINE CORRECT LOCATION INSTEAD${NC}"
        echo ""
        echo "  1. READ THE FILES to understand their content and purpose"
        echo "  2. CHECK THE MIGRATION PLAN: tasks/plan/migration-plan.md"
        echo "  3. CHECK THE README: README.md (source of truth for structure)"
        echo "  4. CHECK THE ALLOWLIST: .allowlist (allowed root files)"
        echo "  5. DETERMINE CORRECT LOCATION based on file content and structure rules"
        echo "  6. MOVE files to correct location using 'git mv' (NOT delete+add)"
        echo ""
        echo -e "${YELLOW}📋 CORRECT LOCATIONS (per migration plan):${NC}"
        echo "  - Config files → tools/config/ (EXCEPT .prettierrc.yaml → ROOT)"
        echo "  - .prettierrc.yaml → ROOT (Prettier convention)"
        echo "  - .speakeasy/ → tools/config/.speakeasy/ (Speakeasy API docs tool config)"
        echo "  - AI rules → tools/ai-rules/"
        echo "  - Scripts → tools/scripts/ (organized by purpose)"
        echo "  - Planning docs → tasks/plan/"
        echo "  - Reports → tasks/reports/"
        echo "  - API specs → api/"
        echo "  - Contribution docs → contribute/"
        echo "  - Assets → snippets/assets/site/"
        echo ""
        echo -e "${YELLOW}📋 FOR HUMANS:${NC}"
        echo "  1. If you need to move files, use 'git mv' instead of delete+add"
        echo "  2. If files should be removed, unstage them: 'git restore --staged <file>'"
        echo "  3. If this deletion is intentional and necessary:"
        echo "     - Document WHY in the commit message"
        echo "     - Verify files are backed up"
        echo "     - Use: git commit -m \"your message\" --trailer \"allow-deletions=true\""
        echo "       (legacy fallback: ALLOW_DELETIONS=1 git commit)"
        echo ""
        echo -e "${RED}⚠️  HUMAN OVERRIDE: Use --trailer \"allow-deletions=true\" to allow deletions${NC}"
        echo -e "${RED}   (AIs must NEVER use this flag - deletions are dangerous!)${NC}"
        echo ""
    elif [ -n "$BLOCKED_DELETED_FILES" ]; then
        echo -e "${YELLOW}⚠️  WARNING: File deletions allowed (human override detected)${NC}"
        echo -e "${YELLOW}   Make sure deletions are intentional and files are backed up!${NC}"
    fi
fi

# Check for .allowlist file changes (BLOCKED for AIs, requires human override)
WHITELIST_CHANGES=$(git diff --cached --name-only | grep -E '^\.allowlist$|^\.allowlist ' || true)
if [ -n "$WHITELIST_CHANGES" ]; then
    ALLOWLIST_EDIT=${ALLOWLIST_EDIT:-0}

    if [ "$ALLOWLIST_EDIT" != "1" ]; then
        if has_human_override_trailer "allowlist-edit"; then
            ALLOWLIST_EDIT=1
        fi
    fi

    if [ "$ALLOWLIST_EDIT" != "1" ]; then
        VIOLATIONS=$((VIOLATIONS + 1))
        echo -e "${RED}╔═══════════════════════════════════════════════════════════════╗${NC}"
        echo -e "${RED}║  .allowlist FILE CHANGES BLOCKED                              ║${NC}"
        echo -e "${RED}╚═══════════════════════════════════════════════════════════════╝${NC}"
        echo ""
        echo -e "${RED}Attempted changes to .allowlist:${NC}"
        echo -e "${RED}  ❌ .allowlist${NC}"
        echo ""
        echo -e "${YELLOW}⚠️  CRITICAL: .allowlist file is protected.${NC}"
        echo -e "${YELLOW}   The .allowlist file contains the rule:${NC}"
        echo -e "${YELLOW}   'IF YOU ARE AN AI YOU ARE ABSOLUTELY NOT ALLOWED TO EDIT THIS FILE.'${NC}"
        echo ""
        echo -e "${YELLOW}To allow editing .allowlist (HUMANS ONLY):${NC}"
        echo -e "${YELLOW}  git commit -m \"your message\" --trailer \"allowlist-edit=true\"${NC}"
        echo -e "${YELLOW}  (legacy fallback: ALLOWLIST_EDIT=1 git commit -m \"your message\")${NC}"
        echo ""
        echo -e "${RED}Commit blocked. Only humans may edit .allowlist with explicit override.${NC}"
        echo ""
        exit 1
    else
        echo -e "${YELLOW}⚠️  WARNING: .allowlist edit allowed (human override detected)${NC}"
        echo -e "${YELLOW}   This flag should ONLY be used by humans, never by AI agents.${NC}"
    fi
fi

# Check for docs.json /redirect route changes (BLOCKED)
DOCS_JSON_REDIRECT_DIFF=$(git diff --cached --unified=0 -- docs.json | grep -E '^[+-][^+-].*/redirect' || true)
if [ -n "$DOCS_JSON_REDIRECT_DIFF" ]; then
    VIOLATIONS=$((VIOLATIONS + 1))
    echo -e "${RED}╔═══════════════════════════════════════════════════════════════╗${NC}"
    echo -e "${RED}║  docs.json /redirect CHANGES BLOCKED                         ║${NC}"
    echo -e "${RED}╚═══════════════════════════════════════════════════════════════╝${NC}"
    echo ""
    echo -e "${RED}The staged docs.json diff includes '/redirect' entries:${NC}"
    echo "$DOCS_JSON_REDIRECT_DIFF" | sed 's/^/  ❌ /'
    echo ""
    echo -e "${YELLOW}Remove '/redirect' lines from docs.json changes before committing.${NC}"
    echo ""
    WARNINGS+=("❌ docs.json includes blocked '/redirect' diff lines")
fi

# Check root directory structure against allowlist
if [ "$SKIP_STRUCTURE_CHECK" = "1" ]; then
    echo -e "${YELLOW}⚠️  Structure checks bypassed (SKIP_STRUCTURE_CHECK=1)${NC}"
else
    echo -e "${YELLOW}🔍 Checking root directory structure...${NC}"

    if [ ! -f ".allowlist" ]; then
        echo -e "${YELLOW}⚠️  .allowlist file not found, skipping root structure check${NC}"
    else
    # Read allowlist (skip comments and empty lines)
    ALLOWLIST=$(grep -v '^#' .allowlist | grep -v '^$' | tr '\n' '|' | sed 's/|$//')
    if [[ "$CURRENT_BRANCH" == codex/* ]]; then
        ALLOWLIST="${ALLOWLIST}|.codex"
    fi
    
    if [ -z "$ALLOWLIST" ]; then
        echo -e "${YELLOW}⚠️  .allowlist is empty, skipping root structure check${NC}"
    else
        # Check for new root files (not in allowlist)
        NEW_ROOT_FILES=$(git diff --cached --name-only --diff-filter=A | grep -E '^[^/]+$' | grep -vE "^($ALLOWLIST)$" || true)
        
        # Check for new root directories (not in allowlist)
        NEW_ROOT_DIRS=$(git diff --cached --name-only --diff-filter=A | grep -E '^[^/]+/' | cut -d'/' -f1 | sort -u | grep -vE "^($ALLOWLIST)$" || true)
        
        if [ -n "$NEW_ROOT_FILES" ] || [ -n "$NEW_ROOT_DIRS" ]; then
            VIOLATIONS=$((VIOLATIONS + 1))
            echo -e "${RED}╔═══════════════════════════════════════════════════════════════╗${NC}"
            echo -e "${RED}║  UNAUTHORIZED ROOT FILES/DIRECTORIES DETECTED               ║${NC}"
            echo -e "${RED}╚═══════════════════════════════════════════════════════════════╝${NC}"
            echo ""
            
            if [ -n "$NEW_ROOT_FILES" ]; then
                echo -e "${RED}Unauthorized root files:${NC}"
                while IFS= read -r file; do
                    if [ -n "$file" ]; then
                        echo -e "${RED}  ❌ $file${NC}"
                        WARNINGS+=("❌ Unauthorized root file: $file")
                    fi
                done < <(echo "$NEW_ROOT_FILES")
                echo ""
            fi
            
            if [ -n "$NEW_ROOT_DIRS" ]; then
                echo -e "${RED}Unauthorized root directories:${NC}"
                while IFS= read -r dir; do
                    if [ -n "$dir" ]; then
                        echo -e "${RED}  ❌ $dir/${NC}"
                        WARNINGS+=("❌ Unauthorized root directory: $dir/")
                    fi
                done < <(echo "$NEW_ROOT_DIRS")
                echo ""
            fi
            
            echo -e "${YELLOW}Allowed root files/directories are listed in .allowlist${NC}"
            echo -e "${YELLOW}See contribute/STRUCTURE.md for repository structure rules${NC}"
            echo ""
        else
            echo -e "${GREEN}✓ Root directory structure check passed${NC}"
        fi
    fi
    fi
fi

# Check snippets directory structure
if [ "$SKIP_STRUCTURE_CHECK" = "1" ]; then
    echo -e "${YELLOW}⚠️  Snippets structure checks bypassed${NC}"
else
    echo ""
    echo -e "${YELLOW}🔍 Checking snippets directory structure...${NC}"

    STAGED_SNIPPETS=$(git diff --cached --name-only --diff-filter=A | grep '^snippets/')

    if [ -n "$STAGED_SNIPPETS" ]; then
    # Check for scripts in snippets/
    SNIPPETS_SCRIPTS=$(echo "$STAGED_SNIPPETS" | grep '^snippets/scripts/')
    if [ -n "$SNIPPETS_SCRIPTS" ]; then
        VIOLATIONS=$((VIOLATIONS + 1))
        echo -e "${RED}❌ Scripts cannot be in snippets/. Move to tools/scripts/${NC}"
        echo "$SNIPPETS_SCRIPTS" | while read -r file; do
            WARNINGS+=("❌ $file: Scripts must be in tools/scripts/, not snippets/")
        done
    fi
    
    # Check for wiki/docs in snippets/
    SNIPPETS_WIKI=$(echo "$STAGED_SNIPPETS" | grep '^snippets/snippetsWiki/')
    if [ -n "$SNIPPETS_WIKI" ]; then
        VIOLATIONS=$((VIOLATIONS + 1))
        echo -e "${RED}❌ Wiki/docs cannot be in snippets/. Move to tools/wiki/${NC}"
        echo "$SNIPPETS_WIKI" | while read -r file; do
            WARNINGS+=("❌ $file: Wiki must be in tools/wiki/, not snippets/")
        done
    fi
    
    # Check for styles in snippets/
    SNIPPETS_STYLES=$(echo "$STAGED_SNIPPETS" | grep '^snippets/styles/')
    if [ -n "$SNIPPETS_STYLES" ]; then
        VIOLATIONS=$((VIOLATIONS + 1))
        echo -e "${RED}❌ Styles cannot be in snippets/. Use root style.css only${NC}"
        echo "$SNIPPETS_STYLES" | while read -r file; do
            WARNINGS+=("❌ $file: Styles must use root style.css, not snippets/styles/")
        done
    fi
    fi
fi

# Check for changes to v1/ (frozen)
if [ "$SKIP_STRUCTURE_CHECK" = "1" ]; then
    echo -e "${YELLOW}⚠️  v1/ frozen check bypassed${NC}"
else
    echo ""
    echo -e "${YELLOW}🔍 Checking v1/ directory (frozen)...${NC}"

    V1_CHANGES=$(git diff --cached --name-only | grep '^v1/')
    if [ -n "$V1_CHANGES" ]; then
        VIOLATIONS=$((VIOLATIONS + 1))
        echo -e "${RED}╔═══════════════════════════════════════════════════════════════╗${NC}"
        echo -e "${RED}║  v1/ IS FROZEN - NO CHANGES ALLOWED                        ║${NC}"
        echo -e "${RED}╚═══════════════════════════════════════════════════════════════╝${NC}"
        echo ""
        echo -e "${RED}Attempted changes to v1/:${NC}"
        echo "$V1_CHANGES" | while read -r file; do
            echo -e "${RED}  ❌ $file${NC}"
            WARNINGS+=("❌ $file: v1/ is FROZEN - no changes allowed")
        done
        echo ""
        echo -e "${RED}Commit blocked. v1/ is immutable and cannot be modified.${NC}"
        echo ""
        exit 1
    else
        echo -e "${GREEN}✓ v1/ directory check passed (no changes detected)${NC}"
    fi
fi

# Check style guide compliance
if [ "$SKIP_STYLE_CHECK" = "1" ]; then
    echo -e "${YELLOW}⚠️  Style guide checks bypassed (SKIP_STYLE_CHECK=1)${NC}"
else
    echo ""
    echo -e "${YELLOW}🔍 Checking style guide compliance...${NC}"

    # Get list of staged docs pages from docs.json (excluding style-guide.mdx, which documents anti-patterns).
    if [ -n "$STAGED_DOCS_PAGES" ]; then
        STAGED_FILES=$(echo "$STAGED_DOCS_PAGES" | grep -E '\.mdx$' | grep -v "style-guide" || true)
    else
        STAGED_FILES=""
    fi

    if [ -z "$STAGED_FILES" ]; then
        echo -e "${GREEN}✓ No staged docs.json pages, skipping style checks${NC}"
    else

        # Check 1: ThemeData import/usage (DEPRECATED)
        echo "Checking for ThemeData usage (deprecated)..."
        for file in $STAGED_FILES; do
    if [ -f "$file" ]; then
        # Skip if it's the style guide itself (it documents ThemeData as deprecated)
        if [[ "$file" == *"style-guide.mdx" ]]; then
            continue
        fi
        # Warn-only for known legacy ThemeData files (not yet migrated)
        if [[ "$file" == *"automations-workflows.mdx" || "$file" == *"contribute-to-the-docs.mdx" ]]; then
            if grep -q "ThemeData\|themeStyles\.jsx" "$file" 2>/dev/null; then
                echo -e "${YELLOW}⚠ $file: Still uses deprecated ThemeData (warn-only)${NC}"
            fi
            continue
        fi
        if staged_added_lines_match "$file" "ThemeData|themeStyles\\.jsx"; then
            WARNINGS+=("❌ $file: Uses deprecated ThemeData - use CSS Custom Properties instead")
            VIOLATIONS=$((VIOLATIONS + 1))
        fi
        fi
    done

    # Check 2: Hardcoded hex colors that should use CSS variables
    echo "Checking for hardcoded colors..."
    for file in $STAGED_FILES; do
    if [ -f "$file" ]; then
        # Skip style guide (it documents colors in tables)
        if echo "$file" | grep -q "style-guide.mdx"; then
            continue
        fi
        # Project exception: media-kit currently contains approved hardcoded color tokens.
        if [[ "$file" == "v2/resources/media-kit.mdx" ]]; then
            continue
        fi
        # Check for common Livepeer colors hardcoded (should use CSS vars)
        # Exclude markdown tables and code examples
        if grep -E "(#3CB540|#2b9a66|#18794E|#181C18|#E0E4E0|#717571|#A0A4A0)" "$file" 2>/dev/null | grep -v "var(--" | grep -v "CSS Custom Properties" | grep -v "style-guide" | grep -v "Color System" | grep -v "Light Mode\|Dark Mode" | grep -v '^|' | grep -v '^```' > /dev/null; then
            WARNINGS+=("⚠️  $file: Contains hardcoded theme colors - use CSS Custom Properties (var(--accent), etc.)")
            VIOLATIONS=$((VIOLATIONS + 1))
        fi
        fi
    done

    # Check 3: Relative imports (should be absolute from root)
    echo "Checking for relative imports..."
    for file in $STAGED_FILES; do
    if [ -f "$file" ]; then
        # Skip style guide (it documents relative imports as examples of what NOT to do)
        if [[ "$file" == *"style-guide"* ]]; then
            continue
        fi
        if grep -E "from ['\"].*\.\./.*['\"]" "$file" 2>/dev/null | grep -v "node_modules" | grep -v "\.\./\.\./\.\." | grep -v "examples/" > /dev/null; then
            WARNINGS+=("⚠️  $file: Uses relative imports - use absolute paths from root (/snippets/...)")
            VIOLATIONS=$((VIOLATIONS + 1))
        fi
        fi
    done

    # Check 4: Import from @mintlify/components (should not import, they're global)
    echo "Checking for @mintlify/components imports..."
    for file in $STAGED_FILES; do
    if [ -f "$file" ]; then
        # Skip style guide (it documents this as a "don't do this" example)
        if [[ "$file" == *"style-guide.mdx" ]]; then
            continue
        fi
        if grep -q "from ['\"]@mintlify/components['\"]" "$file" 2>/dev/null; then
            WARNINGS+=("⚠️  $file: Imports from @mintlify/components - these are global, no import needed")
            VIOLATIONS=$((VIOLATIONS + 1))
        fi
        fi
    done

    # Check 5: React imports (hooks are global in Mintlify)
    echo "Checking for unnecessary React imports..."
    for file in $STAGED_FILES; do
    if [ -f "$file" ]; then
        # Skip style guide (it documents this as a "don't do this" example)
        if [[ "$file" == *"style-guide.mdx" ]]; then
            continue
        fi
        if grep -E "import.*\{.*useState|useEffect|useMemo|useCallback.*\}.*from ['\"]react['\"]" "$file" 2>/dev/null; then
            WARNINGS+=("⚠️  $file: Imports React hooks - hooks are global in Mintlify, no import needed")
            VIOLATIONS=$((VIOLATIONS + 1))
        fi
    fi
    done
    fi
fi

# Run verification scripts (legacy path disabled for faster staged-only hooks)
if [ "$SKIP_VERIFICATION" = "1" ]; then
    echo -e "${YELLOW}⚠️  Verification scripts bypassed (SKIP_VERIFICATION=1)${NC}"
else
    echo ""
    echo -e "${YELLOW}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo -e "${YELLOW}Skipping legacy verify.sh in pre-commit (staged-only fast mode).${NC}"
    echo -e "${YELLOW}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
fi

run_node_check() {
    local label="$1"
    local failure_message="$2"
    shift 2

    echo -e "${YELLOW}${label}${NC}"
    if node "$@" 2>&1; then
        echo -e "${GREEN}✓ ${label} passed${NC}"
        return 0
    fi

    VIOLATIONS=$((VIOLATIONS + 1))
    WARNINGS+=("${failure_message}")
    echo -e "${RED}❌ ${label} failed${NC}"
    return 1
}

# Run test suite (fast mode for pre-commit)
if [ "$SKIP_TESTS" = "1" ]; then
    echo -e "${YELLOW}⚠️  Test suite bypassed (SKIP_TESTS=1)${NC}"
else
    echo ""
    echo -e "${YELLOW}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo -e "${YELLOW}Running test suite (staged files only)...${NC}"
    if [ -f "tests/run-all.js" ] && command -v node &>/dev/null; then
        if [ -d "tools/node_modules" ]; then
            export NODE_PATH="$(pwd)/tools/node_modules:${NODE_PATH:-}"
        elif [ -d "tests/node_modules" ]; then
            export NODE_PATH="$(pwd)/tests/node_modules:${NODE_PATH:-}"
        else
            echo -e "${YELLOW}⚠️  Dependencies not installed. Run 'cd tools && npm install' or 'cd tests && npm install' to enable tests${NC}"
        fi

        if [ -f "tests/unit/script-docs.test.js" ]; then
            run_node_check \
              "Running script documentation enforcement (staged additions)..." \
              "❌ Script documentation enforcement failed - missing required script header template" \
              tests/unit/script-docs.test.js --staged --write --stage --autofill
        fi

        if [ -f "tools/scripts/generate-pages-index.js" ]; then
            run_node_check \
              "Running v2/pages index generation (staged changes)..." \
              "❌ v2/pages index generation failed - fix index sync issues" \
              tools/scripts/generate-pages-index.js --staged --write --stage
        fi

        if [ -f "tools/scripts/generate-docs-index.js" ]; then
            if echo "$STAGED_FILES_SNAPSHOT_ALL" | grep -Eq '^(docs\.json|v1/|v2/|snippets/)'; then
                echo -e "${YELLOW}Checking docs-index sync...${NC}"
                if node tools/scripts/generate-docs-index.js --check >/dev/null 2>&1; then
                    echo -e "${GREEN}✓ docs-index.json is up to date${NC}"
                else
                    echo -e "${YELLOW}docs-index.json out of date, regenerating...${NC}"
                    if node tools/scripts/generate-docs-index.js --write 2>&1; then
                        git add docs-index.json
                        echo -e "${GREEN}✓ docs-index.json regenerated and staged${NC}"
                    else
                        VIOLATIONS=$((VIOLATIONS + 1))
                        WARNINGS+=("❌ docs-index generation failed - run node tools/scripts/generate-docs-index.js --write")
                        echo -e "${RED}❌ docs-index generation failed${NC}"
                    fi
                fi
            else
                echo -e "${GREEN}✓ No docs/nav changes staged, skipping docs-index sync${NC}"
            fi
        fi

        run_node_check \
          "Running core staged test suite..." \
          "❌ Core staged test suite failed - see output above" \
          tests/run-all.js --staged --skip-browser

        if [ -n "$STAGED_DOCS_PAGES" ]; then
            if [ -f "tests/integration/v2-link-audit.js" ]; then
                run_node_check \
                  "Running staged V2 link audit..." \
                  "❌ Staged V2 link audit failed - see /tmp/livepeer-link-audit-precommit.md" \
                  tests/integration/v2-link-audit.js --staged --strict --strict-roots-only --report /tmp/livepeer-link-audit-precommit.md
            fi

            if [ "$SKIP_WCAG_AUDIT" = "1" ]; then
                echo -e "${YELLOW}⚠️  Staged V2 WCAG accessibility audit bypassed (SKIP_WCAG_AUDIT=1)${NC}"
            elif [ -f "tests/integration/v2-wcag-audit.js" ]; then
                run_node_check \
                  "Running staged V2 WCAG accessibility audit..." \
                  "❌ Staged V2 WCAG accessibility audit failed - see /tmp/livepeer-wcag-audit-precommit.md" \
                  tests/integration/v2-wcag-audit.js --files "$STAGED_DOCS_PAGES_CSV" --fix --stage --max-pages 10 --fail-impact serious --report /tmp/livepeer-wcag-audit-precommit.md --report-json /tmp/livepeer-wcag-audit-precommit.json
            fi
        else
            echo -e "${GREEN}✓ No staged docs pages, skipping link audit and WCAG audit${NC}"
        fi
    else
        echo -e "${YELLOW}⚠️  Test suite not available, skipping...${NC}"
    fi
    echo -e "${YELLOW}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
fi

# Report results
echo ""
if [ $VIOLATIONS -eq 0 ]; then
    echo -e "${GREEN}✓ Style guide compliance check passed!${NC}"
    exit 0
else
    echo -e "${RED}╔═══════════════════════════════════════════════════════════════╗${NC}"
    echo -e "${RED}║  STYLE GUIDE VIOLATIONS DETECTED - COMMIT BLOCKED           ║${NC}"
    echo -e "${RED}╚═══════════════════════════════════════════════════════════════╝${NC}"
    echo ""
    echo -e "${YELLOW}Found $VIOLATIONS violation(s):${NC}"
    echo ""
    for warning in "${WARNINGS[@]}"; do
        echo -e "${RED}$warning${NC}"
    done
    echo ""
    echo -e "${YELLOW}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo -e "${YELLOW}📖 MANDATORY: Read the Style Guide before committing:${NC}"
    echo -e "${YELLOW}   $STYLE_GUIDE_PATH${NC}"
    echo ""
    echo -e "${YELLOW}Key Rules:${NC}"
    echo -e "  • Use CSS Custom Properties: var(--accent), var(--text), etc."
    echo -e "  • NEVER use ThemeData from themeStyles.jsx (deprecated)"
    echo -e "  • NEVER hardcode hex colors that should adapt to theme"
    echo -e "  • Use absolute imports: /snippets/components/..."
    echo -e "  • Mintlify components are global (no imports needed)"
    echo -e "  • React hooks are global (no imports needed)"
    echo ""
    echo -e "${YELLOW}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo -e "${RED}Commit blocked. Fix violations and try again.${NC}"
    echo ""
    exit 1
fi
~~~

</details>

### 7. CI Workflow

Relevant `test-suite.yml` excerpt:

```yaml
name: Docs CI - Content Quality Suite

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main
      - docs-v2

jobs:
  test-suite:
    name: content-quality-suite
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Fetch pull request base ref
        if: github.event_name == 'pull_request'
        run: git fetch --no-tags --depth=1 origin ${{ github.base_ref }}

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: "22"

      - name: Install dependencies (tools)
        working-directory: tools
        run: npm install

      - name: Run PR Changed-File Checks
        id: pr-checks
        if: github.event_name == 'pull_request'
        continue-on-error: true
        env:
          GITHUB_BASE_REF: ${{ github.base_ref }}
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        run: npm --prefix tests run test:pr

      - name: Run Docs-Guide SoT Check (Advisory)
        id: docs-guide-sot
        continue-on-error: true
        run: npm --prefix tests run test:docs-guide

      - name: Run Browser Tests (All Pages)
        id: browser-test
        continue-on-error: true
        working-directory: tools
        env:
          MINT_BASE_URL: http://localhost:3000
        run: |
          echo "Testing ALL pages from docs.json navigation..."
          npm run test:browser
```

Analysis:

- There is **no** `component-enforcement` job or section.
- `test-suite.yml` does **not** reference `check-component-css.js`, `check-component-docs.js`, or `check-component-immutability.js` directly.
- Component naming is enforced only indirectly through `npm --prefix tests run test:pr` → `tests/run-pr-checks.js` → `check-naming-conventions.js`.
- Because there are no direct component-script references in this workflow, there are no direct component-script paths to validate here for post-migration structure.

### 8. Phase 2a Generator

Raw command output:

```text
$ ls -la tools/scripts/generate-component-governance-remediation-reports.js 2>/dev/null && echo "EXISTS" || echo "MISSING"
$ wc -l tools/scripts/generate-component-governance-remediation-reports.js 2>/dev/null
MISSING
```

Assessment:

- `tools/scripts/generate-component-governance-remediation-reports.js` is **missing** on `origin/docs-v2`.
- No extraction functions could be inspected because the file does not exist.
- Current state: **unavailable**, not modular or monolithic.

### 9. Shared Library

Raw command output:

```text
$ ls -la tools/lib/component-governance-utils.js 2>/dev/null && echo "EXISTS" || echo "MISSING"
$ ls -la tools/lib/component*.js 2>/dev/null
MISSING

$ ls tools/lib/ 2>/dev/null
docs-index-utils.js
docs-usefulness
generated-file-banners.js
```

Assessment:

- `tools/lib/component-governance-utils.js` does **not** exist.
- No other `tools/lib/component*.js` helper exists.
- `tools/lib/` currently contains:
  - `docs-index-utils.js`
  - `docs-usefulness/`
  - `generated-file-banners.js`

### 10. Registry and Published Docs

Raw command output:

```text
$ ls -la docs-guide/component-registry.json 2>/dev/null && echo "EXISTS" || echo "MISSING"
MISSING

$ ls -la docs-guide/component-usage-map.json 2>/dev/null && echo "EXISTS" || echo "MISSING"
MISSING
```

Published component-library directory (`v2/resources/documentation-guide/component-library/`):

```text
component-library.mdx
content.mdx
display.mdx
domain.mdx
integrations.mdx
layout.mdx
overview.mdx
primitives.mdx
```

<details>
<summary>All published component-library pages</summary>

```text
v2//cn/resources/documentation-guide/component-library/component-library.mdx
v2//cn/resources/documentation-guide/component-library/content.mdx
v2//cn/resources/documentation-guide/component-library/display.mdx
v2//cn/resources/documentation-guide/component-library/domain.mdx
v2//cn/resources/documentation-guide/component-library/integrations.mdx
v2//cn/resources/documentation-guide/component-library/layout.mdx
v2//cn/resources/documentation-guide/component-library/overview.mdx
v2//cn/resources/documentation-guide/component-library/primitives.mdx
v2//es/resources/documentation-guide/component-library/component-library.mdx
v2//es/resources/documentation-guide/component-library/content.mdx
v2//es/resources/documentation-guide/component-library/display.mdx
v2//es/resources/documentation-guide/component-library/domain.mdx
v2//es/resources/documentation-guide/component-library/integrations.mdx
v2//es/resources/documentation-guide/component-library/layout.mdx
v2//es/resources/documentation-guide/component-library/overview.mdx
v2//es/resources/documentation-guide/component-library/primitives.mdx
v2//fr/resources/documentation-guide/component-library/component-library.mdx
v2//fr/resources/documentation-guide/component-library/content.mdx
v2//fr/resources/documentation-guide/component-library/display.mdx
v2//fr/resources/documentation-guide/component-library/domain.mdx
v2//fr/resources/documentation-guide/component-library/integrations.mdx
v2//fr/resources/documentation-guide/component-library/layout.mdx
v2//fr/resources/documentation-guide/component-library/overview.mdx
v2//fr/resources/documentation-guide/component-library/primitives.mdx
v2//resources/documentation-guide/component-library/component-library.mdx
v2//resources/documentation-guide/component-library/content.mdx
v2//resources/documentation-guide/component-library/display.mdx
v2//resources/documentation-guide/component-library/domain.mdx
v2//resources/documentation-guide/component-library/integrations.mdx
v2//resources/documentation-guide/component-library/layout.mdx
v2//resources/documentation-guide/component-library/overview.mdx
v2//resources/documentation-guide/component-library/primitives.mdx
```

</details>

Assessment:

- `docs-guide/component-registry.json` is missing.
- `docs-guide/component-usage-map.json` is missing.
- Base locale publishes **8** component-library pages.
- Locale variants publish **24** more pages (`es`, `fr`, `cn`), for **32** total published pages.
- Published docs still use legacy category pages `display`, `domain`, and `integrations`; there are no published `data.mdx` or `page-structure.mdx` pages.

### 11. Style Tokens

Raw command output:

```text
$ grep -c "lp-color" style.css
0

$ grep "lp-color" style.css
(no matches; command exited 1)

$ grep -o -- '--lp-[A-Za-z0-9-]*' style.css | sort -u
(no output)
```

Assessment:

- `style.css` contains **0** `lp-color` matches.
- `style.css` contains **0** `--lp-*` tokens.

### 12. Legacy Import Paths

Raw command output:

```text
$ grep -rc "snippets/components/display/" v2/ snippets/ --include="*.mdx" 2>/dev/null | awk -F: '$2>0'
v2//resources/documentation-guide/style-guide.mdx:1

$ grep -rc "snippets/components/integrations/" v2/ snippets/ --include="*.mdx" 2>/dev/null | awk -F: '$2>0'
(no matches)

$ grep -rc "snippets/components/domain/" v2/ snippets/ --include="*.mdx" 2>/dev/null | awk -F: '$2>0'
(no matches)
```

Remaining legacy import file list:

```text
v2/resources/documentation-guide/style-guide.mdx
```

Assessment:

- Remaining legacy import files: **1**
- Remaining legacy import matches: **1**
- Remaining `display` imports: 1 file / 1 match
- Remaining `integrations` imports: 0 files / 0 matches
- Remaining `domain` imports: 0 files / 0 matches

## Phase 3 Readiness Assessment

Based on the above:

- [ ] Folder structure matches D7 target
- [ ] JSDoc backfill is complete (all exports have 14 fields)
- [x] Existing component scripts identified with actual paths and wiring
- [x] Pre-commit hook integration point identified
- [x] CI integration point identified
- [ ] Phase 2a generator available for utility extraction
- [ ] No legacy import paths remain
- [ ] --lp-* tokens present in style.css

### Blockers (if any)

- `tools/scripts/generate-component-governance-remediation-reports.js` is missing, so Phase 3 cannot extract shared logic from it on this branch.
- `tools/lib/component-governance-utils.js` is missing, so no shared component-governance utility layer exists yet.
- `docs-guide/component-registry.json` and `docs-guide/component-usage-map.json` are missing.
- Published component-library docs are still organized around `display`, `domain`, and `integrations` rather than `data` and `page-structure`.
- `style.css` contains no `lp-color` or `--lp-*` tokens.
- One legacy `snippets/components/display/` import remains in `v2/resources/documentation-guide/style-guide.mdx`.
- `_archive/`, `data/`, and `page-structure/` are missing `examples/` subdirectories.

### Corrections to Phase 3 Brief (if any)

- On `origin/docs-v2`, the component folder migration has already landed: active directories are `_archive`, `content`, `data`, `layout`, `page-structure`, and `primitives`, and legacy `display`, `integrations`, and `domain` directories are absent.
- The brief’s “each category should have an `examples/` subdirectory” expectation is not yet true for `_archive`, `data`, or `page-structure`.
- The supplied naming grep is inverted relative to its comment. It matches camelCase filenames containing uppercase characters; the current validator passes in `strict-camel` mode.
- The supplied JSDoc grep does not measure “exports with 14-field JSDoc” accurately; it counts matching tag lines and can exceed the number of exports.
- `tools/scripts/generate-component-governance-remediation-reports.js` is not present on this branch, so Phase 3 cannot rely on it for utility extraction without first restoring or replacing it.
- `tools/lib/component-governance-utils.js` does not exist.
- Published component-library docs have not been updated to the new category model; they still publish `display`, `domain`, and `integrations` pages, with no `data` or `page-structure` pages.
- `style.css` contains no `lp-color` or `--lp-*` tokens.
- One legacy `display` import remains in `v2/resources/documentation-guide/style-guide.mdx`.
