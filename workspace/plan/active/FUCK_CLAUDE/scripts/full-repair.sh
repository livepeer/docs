#!/bin/bash
# full-repair.sh — Complete VS Code Claude Code session repair
# Runs: backup -> recover dropped -> fix titles -> sort -> report
#
# Usage:
#   ./full-repair.sh              # Full repair (writes to state.vscdb)
#   ./full-repair.sh --dry-run    # Report only, no writes
#
# CLOSE VS CODE BEFORE RUNNING.
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
DRY_RUN="${1:-}"

echo "======================================"
echo "  VS Code Claude Code — Full Repair"
echo "======================================"
echo ""

# Check VS Code
if pgrep -x "Code" > /dev/null 2>&1; then
    echo "[WARNING] VS Code is running."
    echo "The extension holds state in memory and will overwrite database changes."
    echo "Close VS Code first for a clean repair."
    echo ""
    if [ "$DRY_RUN" != "--dry-run" ]; then
        read -p "Continue anyway? (y/N) " confirm
        if [ "$confirm" != "y" ] && [ "$confirm" != "Y" ]; then
            echo "Aborted."
            exit 0
        fi
    fi
fi

echo "--- Step 1: Backup current state ---"
"$SCRIPT_DIR/backup-vscode-state.sh"
echo ""

echo "--- Step 2: Recover dropped sessions ---"
"$SCRIPT_DIR/recover-dropped-sessions.sh" $DRY_RUN
echo ""

echo "--- Step 3: Fix broken titles ---"
"$SCRIPT_DIR/fix-titles.sh" $DRY_RUN
echo ""

echo "--- Step 4: Sort sessions by date ---"
"$SCRIPT_DIR/sort-sessions.sh" $DRY_RUN
echo ""

echo "======================================"
echo "  Repair complete"
echo "======================================"
echo ""
if [ "$DRY_RUN" = "--dry-run" ]; then
    echo "This was a dry run. No changes were made."
    echo "Run without --dry-run to apply all fixes."
else
    echo "All fixes applied. Open VS Code now."
    echo "If something is wrong, restore with:"
    echo "  $SCRIPT_DIR/restore-vscode-state.sh"
fi
