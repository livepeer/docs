#!/bin/bash
# backup-vscode-state.sh — Snapshot VS Code state database + model.cache export
# Run BEFORE opening VS Code, or on cron. Keeps last 48 backups.
set -euo pipefail

WSID="037ec7ad625e14c50d909078ee7849d3"
STATEDB="$HOME/Library/Application Support/Code/User/workspaceStorage/$WSID/state.vscdb"
GLOBALDB="$HOME/Library/Application Support/Code/User/globalStorage/state.vscdb"
BACKUP_DIR="$HOME/.claude/backups/vscode-state"
TIMESTAMP=$(date +%Y%m%d-%H%M%S)
MAX_BACKUPS=48

mkdir -p "$BACKUP_DIR"

# Snapshot workspace state.vscdb
if [ -f "$STATEDB" ]; then
    cp "$STATEDB" "$BACKUP_DIR/state.vscdb.$TIMESTAMP"
    echo "[OK] Workspace state.vscdb backed up"
else
    echo "[WARN] Workspace state.vscdb not found at: $STATEDB"
fi

# Snapshot global state.vscdb
if [ -f "$GLOBALDB" ]; then
    cp "$GLOBALDB" "$BACKUP_DIR/global-state.vscdb.$TIMESTAMP"
    echo "[OK] Global state.vscdb backed up"
fi

# Export model.cache as readable JSON
if [ -f "$STATEDB" ]; then
    sqlite3 "$STATEDB" "SELECT value FROM ItemTable WHERE key='agentSessions.model.cache';" \
        | python3 -m json.tool > "$BACKUP_DIR/model-cache.$TIMESTAMP.json" 2>/dev/null \
        && echo "[OK] model.cache exported to JSON" \
        || echo "[WARN] model.cache export failed"
fi

# Export state.cache as readable JSON
if [ -f "$STATEDB" ]; then
    sqlite3 "$STATEDB" "SELECT value FROM ItemTable WHERE key='agentSessions.state.cache';" \
        | python3 -m json.tool > "$BACKUP_DIR/state-cache.$TIMESTAMP.json" 2>/dev/null \
        && echo "[OK] state.cache exported to JSON" \
        || echo "[WARN] state.cache export failed"
fi

# Cleanup: keep only last MAX_BACKUPS of each type
for prefix in state.vscdb global-state.vscdb model-cache state-cache; do
    count=$(ls -1 "$BACKUP_DIR/$prefix."* 2>/dev/null | wc -l)
    if [ "$count" -gt "$MAX_BACKUPS" ]; then
        excess=$((count - MAX_BACKUPS))
        ls -1t "$BACKUP_DIR/$prefix."* | tail -n "$excess" | xargs rm -f
        echo "[CLEANUP] Removed $excess old $prefix backups"
    fi
done

echo "[DONE] Backup complete at $BACKUP_DIR/*.$TIMESTAMP"
echo "  Workspace DB: state.vscdb.$TIMESTAMP"
echo "  Global DB:    global-state.vscdb.$TIMESTAMP"
echo "  Model cache:  model-cache.$TIMESTAMP.json"
echo "  State cache:  state-cache.$TIMESTAMP.json"
