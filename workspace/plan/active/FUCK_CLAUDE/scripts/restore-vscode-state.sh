#!/bin/bash
# restore-vscode-state.sh — Restore VS Code state from backup
# CLOSE VS CODE BEFORE RUNNING. Extension holds state in memory and will overwrite.
set -euo pipefail

WSID="037ec7ad625e14c50d909078ee7849d3"
STATEDB="$HOME/Library/Application Support/Code/User/workspaceStorage/$WSID/state.vscdb"
GLOBALDB="$HOME/Library/Application Support/Code/User/globalStorage/state.vscdb"
BACKUP_DIR="$HOME/.claude/backups/vscode-state"

if [ ! -d "$BACKUP_DIR" ]; then
    echo "[ERROR] No backups found at $BACKUP_DIR"
    exit 1
fi

echo "=== Available workspace state backups ==="
ls -1t "$BACKUP_DIR"/state.vscdb.* 2>/dev/null | head -10 | while read f; do
    ts=$(basename "$f" | sed 's/state\.vscdb\.//')
    size=$(stat -f "%z" "$f" 2>/dev/null || echo "?")
    echo "  $ts  ($size bytes)"
done

echo ""

# Use most recent by default, or accept argument
if [ "${1:-}" != "" ]; then
    SELECTED="$BACKUP_DIR/state.vscdb.$1"
else
    SELECTED=$(ls -1t "$BACKUP_DIR"/state.vscdb.* 2>/dev/null | head -1)
fi

if [ ! -f "$SELECTED" ]; then
    echo "[ERROR] Backup not found: $SELECTED"
    echo "Usage: $0 [TIMESTAMP]  (e.g., $0 20260329-093000)"
    exit 1
fi

echo "Restoring from: $(basename "$SELECTED")"
echo ""

# Check if VS Code is running
if pgrep -x "Code" > /dev/null 2>&1; then
    echo "[WARNING] VS Code appears to be running."
    echo "The extension will overwrite this restore on next state flush."
    echo "Close VS Code first for a clean restore."
    read -p "Continue anyway? (y/N) " confirm
    if [ "$confirm" != "y" ] && [ "$confirm" != "Y" ]; then
        echo "Aborted."
        exit 0
    fi
fi

# Backup current state before overwriting
TIMESTAMP=$(date +%Y%m%d-%H%M%S)
cp "$STATEDB" "$BACKUP_DIR/state.vscdb.pre-restore-$TIMESTAMP"
echo "[OK] Current state backed up as pre-restore-$TIMESTAMP"

# Restore
cp "$SELECTED" "$STATEDB"
echo "[OK] Workspace state restored from $(basename "$SELECTED")"

# Also restore global state if matching backup exists
GLOBAL_SELECTED=$(echo "$SELECTED" | sed 's/state\.vscdb/global-state.vscdb/')
if [ -f "$GLOBAL_SELECTED" ]; then
    cp "$GLOBALDB" "$BACKUP_DIR/global-state.vscdb.pre-restore-$TIMESTAMP"
    cp "$GLOBAL_SELECTED" "$GLOBALDB"
    echo "[OK] Global state restored"
fi

echo ""
echo "[DONE] Open VS Code now. Sessions should appear in their backed-up state."
