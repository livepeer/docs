#!/bin/bash
# @script      remove-local-sync-hook
# @type        automation
# @concern     governance
# @niche       dev-tools
# @purpose     tooling:dev-tools
# @description Removes the managed local Notion post-commit hook when it is present.
# @mode        execute
# @pipeline    manual
# @scope       single-file
# @usage       bash tools/dev/integrations/notion/remove-local-sync-hook.sh [flags]
# @policy      bash, git
set -euo pipefail

MARKER="LIVEPEER_NOTION_LOCAL_SYNC_HOOK"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/../../../.." && pwd)"
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
