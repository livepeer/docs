#!/usr/bin/env bash
# @script            check-no-ai-stash
# @category          enforcer
# @purpose           governance:agent-governance
# @scope             tools/scripts, .githooks/pre-commit
# @owner             docs
# @needs             R-R27, R-R30
# @purpose-statement AI stash enforcer — blocks push if AI temporary/stash files are present in working tree
# @pipeline          P1, P2
# @usage             bash tools/scripts/check-no-ai-stash.sh [flags]
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

  # Only stashes tied to the current branch should block this worktree.
  if [[ -n "$branch" ]] && [[ "$line" == *"On ${branch}:"* ]]; then
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
