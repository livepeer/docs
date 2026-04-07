#!/bin/bash
#
# @script headless-batch
# @type dispatch
# @concern governance
# @niche pipelines
# @purpose Run Claude Code headless for safe batch operations
# @description Executes a prompt against files non-interactively with restricted tools. Use for bulk quality checks, changelog regeneration, stale reference scans, and other well-defined batch tasks.
# @mode execute
# @pipeline CLI → claude headless → restricted tools → output file
# @scope Any batch operation that is well-defined and repeatable
# @usage ./operations/scripts/dispatch/governance/headless-batch.sh --prompt "..." --tools "Read,Grep,Glob" --output report.md
# @policy No Write/Edit unless explicitly included in --tools

set -euo pipefail

PROMPT=""
TOOLS="Read,Grep,Glob"
OUTPUT=""
SCOPE=""

usage() {
  cat <<'USAGE'
Usage: headless-batch.sh [options]

Options:
  --prompt "..."     The prompt to execute (required)
  --tools "..."      Comma-separated allowed tools (default: Read,Grep,Glob)
  --output file      Write output to file (optional, prints to stdout if omitted)
  --scope "dir"      Limit to specific directory (optional)

Examples:
  # Quality check all solutions pages (read-only)
  ./headless-batch.sh \
    --prompt "Check all .mdx files in v2/solutions/ for broken imports, missing frontmatter, and TODO markers. Report issues with file paths and line numbers." \
    --tools "Read,Grep,Glob" \
    --output workspace/thread-outputs/build/solutions-quality-report.md

  # Regenerate changelogs for all products
  ./headless-batch.sh \
    --prompt "Run the changelog generator for each product in v2/solutions/*/changelog.mdx. Use the UPDATE block format v5. Edit TEMPLATE files only." \
    --tools "Read,Grep,Glob,Edit,Bash" \
    --output workspace/thread-outputs/build/changelog-run-report.md

  # Scan for stale references after migration
  ./headless-batch.sh \
    --prompt "Scan ALL file types (.mdx, .jsx, .json, .txt, sitemap, llms.txt) for references to the old path 'v2/solutions/livepeer-studio/docs/'. Report every stale reference with file and line number." \
    --tools "Read,Grep,Glob" \
    --output workspace/thread-outputs/build/stale-ref-scan.md
USAGE
  exit 1
}

while [[ $# -gt 0 ]]; do
  case "$1" in
    --prompt) PROMPT="$2"; shift 2 ;;
    --tools) TOOLS="$2"; shift 2 ;;
    --output) OUTPUT="$2"; shift 2 ;;
    --scope) SCOPE="$2"; shift 2 ;;
    *) echo "Unknown option: $1"; usage ;;
  esac
done

if [[ -z "$PROMPT" ]]; then
  echo "Error: --prompt is required"
  usage
fi

FULL_PROMPT="$PROMPT"
if [[ -n "$SCOPE" ]]; then
  FULL_PROMPT="Scope: only files in $SCOPE. $FULL_PROMPT"
fi

if [[ -n "$OUTPUT" ]]; then
  claude -p "$FULL_PROMPT" --allowedTools "$TOOLS" > "$OUTPUT" 2>&1
  echo "Output written to: $OUTPUT"
else
  claude -p "$FULL_PROMPT" --allowedTools "$TOOLS"
fi
