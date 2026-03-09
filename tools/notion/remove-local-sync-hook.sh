#!/bin/bash
# @script            remove-local-sync-hook
# @category          utility
# @purpose           tooling:dev-tools
# @scope             single-file
# @owner             docs
# @needs             bash, git
# @purpose-statement Removes the managed local Notion post-commit hook when it is present.
# @pipeline          manual
# @usage             bash tools/notion/remove-local-sync-hook.sh [flags]

set -euo pipefail

MARKER="LIVEPEER_NOTION_LOCAL_SYNC_HOOK"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"
HOOKS_DIR="$(git -C "$REPO_ROOT" rev-parse --git-path hooks)"
HOOK_PATH="$HOOKS_DIR/post-commit"

if [ ! -f "$HOOK_PATH" ]; then
  echo "No post-commit hook found at $HOOK_PATH"
  exit 0
fi

if ! grep -q "$MARKER" "$HOOK_PATH"; then
  echo "Post-commit hook exists but is not the Notion local hook; leaving unchanged."
  exit 0
fi

rm -f "$HOOK_PATH"
echo "Removed local Notion post-commit hook:"
echo "  $HOOK_PATH"
echo ""
echo "If you want to restore a previous hook, check for:"
echo "  $HOOKS_DIR/post-commit.pre-notion-*"
