#!/usr/bin/env bash
# @script      check-no-ai-stash
# @type        validator
# @concern     governance
# @niche       codex
# @purpose     Block push if AI agent stash/temporary files (.ai-stash, .codex-tmp, .claude-tmp, *.bak from agent edits) are present in the working tree — prevents leaked working state from landing on the remote
# @description Scans the working tree (excluding .gitignore'd paths) for known AI agent temporary file patterns. Exits non-zero if any found, listing the offenders. Called by .githooks/pre-commit and .githooks/pre-push.
# @mode        check
# @pipeline    P1 (pre-commit), P2 (pre-push)
# @scope       working tree (excludes node_modules, x-archive, gitignored paths)
# @usage       bash operations/scripts/validators/ai/codex/check-no-ai-stash.sh [flags]
# @policy      Codex task-isolation standard; D-GOV-08 (prevention layer)
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
