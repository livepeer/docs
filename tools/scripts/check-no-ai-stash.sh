#!/usr/bin/env bash
# @script check-no-ai-stash
# @summary Block commits when AI-tagged stash entries are present; enforce branch plus WIP checkpoint isolation.
# @owner docs
# @scope tools/scripts, .githooks/pre-commit
# @pipeline manual — diagnostic/investigation tool, run on-demand only
#
# @usage
#   bash tools/scripts/check-no-ai-stash.sh
#   bash tools/scripts/check-no-ai-stash.sh --branch docs-v2 --quiet
#
# @inputs
#   --branch <name> Optional branch name. Defaults to current git branch.
#   --quiet Emit only violating entries.
#
# @outputs
#   - Console diagnostics for violating stash entries.
#
# @exit-codes
#   0 = no violating AI stash entries detected
#   1 = violating AI stash entries detected
#
# @examples
#   bash tools/scripts/check-no-ai-stash.sh
#   bash tools/scripts/check-no-ai-stash.sh --quiet
#
# @notes
#   Policy: AI tasks must isolate work with branch plus WIP commits, never stash.

set -euo pipefail

branch=""
quiet=0

while [[ $# -gt 0 ]]; do
  case "$1" in
    --branch)
      branch="${2:-}"
      shift 2
      ;;
    --quiet)
      quiet=1
      shift
      ;;
    *)
      echo "Unknown argument: $1" >&2
      exit 1
      ;;
  esac
done

if [[ -z "$branch" ]]; then
  branch="$(git rev-parse --abbrev-ref HEAD 2>/dev/null || true)"
fi

stash_lines="$(git stash list --date=iso 2>/dev/null || true)"
if [[ -z "$stash_lines" ]]; then
  exit 0
fi

violations=()

while IFS= read -r line; do
  [[ -z "$line" ]] && continue

  # Direct marker used by previous AI stash workflows.
  if [[ "$line" == *"stash-non-codex"* ]]; then
    violations+=("$line")
    continue
  fi

  # Any stash created on codex/* branches is blocked by policy.
  if [[ "$line" == *"On codex/"* ]]; then
    violations+=("$line")
    continue
  fi

  # If currently on a codex branch, any stash tied to this branch is blocked.
  if [[ "$branch" == codex/* ]] && [[ "$line" == *"On ${branch}:"* ]]; then
    violations+=("$line")
    continue
  fi
done <<< "$stash_lines"

if [[ ${#violations[@]} -eq 0 ]]; then
  exit 0
fi

if [[ "$quiet" -eq 0 ]]; then
  echo "AI stash policy violation: stash-based isolation is forbidden."
  echo "Use branch + WIP commit checkpoints instead."
fi
for line in "${violations[@]}"; do
  echo "$line"
done

exit 1
