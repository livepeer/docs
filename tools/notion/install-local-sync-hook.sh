#!/bin/bash
# @script            install-local-sync-hook
# @category          utility
# @purpose           tooling:dev-tools
# @scope             single-file
# @owner             docs
# @needs             bash, git
# @purpose-statement Installs the managed local post-commit hook that invokes the Notion sync runner and preserves any prior hook as a backup.
# @pipeline          manual
# @usage             bash tools/notion/install-local-sync-hook.sh [flags]

set -euo pipefail

MARKER="LIVEPEER_NOTION_LOCAL_SYNC_HOOK"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"
HOOKS_DIR="$(git -C "$REPO_ROOT" rev-parse --git-path hooks)"
HOOK_PATH="$HOOKS_DIR/post-commit"
RUNNER="$SCRIPT_DIR/local-post-commit-sync.sh"

mkdir -p "$HOOKS_DIR"

if [ ! -f "$RUNNER" ]; then
  echo "Notion sync runner not found at $RUNNER"
  exit 1
fi

chmod +x "$RUNNER"

backup_hook=""
if [ -f "$HOOK_PATH" ] && ! grep -q "$MARKER" "$HOOK_PATH"; then
  timestamp="$(date -u +%Y%m%d-%H%M%SZ)"
  backup_hook="$HOOKS_DIR/post-commit.pre-notion-$timestamp"
  cp "$HOOK_PATH" "$backup_hook"
  chmod +x "$backup_hook" || true
  echo "Backed up existing post-commit hook to:"
  echo "  $backup_hook"
fi

cat >"$HOOK_PATH" <<EOF
#!/bin/bash
# $MARKER
set -u

REPO_ROOT="\$(git rev-parse --show-toplevel 2>/dev/null || pwd)"
RUNNER="\$REPO_ROOT/tools/notion/local-post-commit-sync.sh"
PREVIOUS_HOOK="${backup_hook}"

if [ -n "\$PREVIOUS_HOOK" ] && [ -x "\$PREVIOUS_HOOK" ]; then
  "\$PREVIOUS_HOOK" "\$@" || true
fi

if [ -x "\$RUNNER" ]; then
  "\$RUNNER" "\$@" || true
else
  bash "\$RUNNER" "\$@" || true
fi

exit 0
EOF

chmod +x "$HOOK_PATH"

echo "Installed local post-commit Notion sync hook:"
echo "  $HOOK_PATH"
echo ""
echo "Defaults:"
echo "  NOTION_LOCAL_SYNC_MODE=write"
echo "  NOTION_LOCAL_SYNC_STALE_TAB_NAME=Stale"
echo ""
echo "Optional env vars:"
echo "  export NOTION_LOCAL_SYNC_MODE=dry-run"
echo "  export NOTION_LOCAL_SYNC_STALE_TAB_NAME='Stale'"
echo "  export NOTION_LOCAL_SYNC_DISABLE=1"
