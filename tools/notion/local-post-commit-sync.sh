#!/bin/bash
# @script            local-post-commit-sync
# @category          orchestrator
# @purpose           tooling:dev-tools
# @scope             external
# @owner             docs
# @needs             bash, git, node, NOTION_LOCAL_SYNC_MODE(optional), NOTION_LOCAL_SYNC_STALE_TAB_NAME(optional), NOTION_LOCAL_SYNC_DISABLE(optional)
# @purpose-statement Detects docs.json or v2 content changes in the latest commit and runs the canonical Notion sync locally when enabled.
# @pipeline          manual
# @usage             bash tools/notion/local-post-commit-sync.sh [flags]

set -u

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"

if [ "${NOTION_LOCAL_SYNC_DISABLE:-0}" = "1" ]; then
  exit 0
fi

if ! command -v git >/dev/null 2>&1; then
  echo "[notion-sync] git not found; skipping."
  exit 0
fi

if ! command -v node >/dev/null 2>&1; then
  echo "[notion-sync] node not found; skipping."
  exit 0
fi

changed_files="$(git -C "$REPO_ROOT" diff-tree --no-commit-id --name-only -r HEAD 2>/dev/null || true)"

if ! echo "$changed_files" | grep -Eq '^(docs\.json|v2/.*\.(md|mdx))$'; then
  exit 0
fi

if [ ! -f "$SCRIPT_DIR/.env" ]; then
  echo "[notion-sync] tools/notion/.env not found; skipping."
  exit 0
fi

mode="${NOTION_LOCAL_SYNC_MODE:-write}"
stale_tab_name="${NOTION_LOCAL_SYNC_STALE_TAB_NAME:-Stale}"

if [ "$mode" != "write" ] && [ "$mode" != "dry-run" ]; then
  mode="write"
fi

cmd=(node "$SCRIPT_DIR/sync-v2-en-canonical.js")
if [ "$mode" = "write" ]; then
  cmd+=(--write)
else
  cmd+=(--dry-run)
fi
cmd+=(--stale-tab-name "$stale_tab_name")

echo "[notion-sync] Detected docs.json/v2 content change in last commit. Running mode=$mode..."

if ! (
  cd "$REPO_ROOT" &&
    "${cmd[@]}"
); then
  echo "[notion-sync] Sync failed. Commit is kept; rerun manually when ready."
  exit 0
fi

echo "[notion-sync] Completed."
exit 0
