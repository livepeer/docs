#!/bin/bash
# fix-title-overwrite.sh — Detect and fix last-prompt overwriting custom-title in JSONL sessions
# Designed to run every 2 minutes via launchd. Fixes the #32150 title eviction bug.
#
# What it does:
# 1. Scans all JSONL session files
# 2. Finds sessions where the LAST title-like entry is "last-prompt" (not "custom-title")
# 3. If a "custom-title" entry exists earlier in the file, re-appends it to the tail
# 4. Preserves file mtime to avoid destroying sidebar sort order
#
# Safe: only appends, never modifies existing content. Idempotent.
set -euo pipefail

SESSIONS_DIR="$HOME/.claude/projects/-Users-alisonhaire-Documents-Livepeer-Docs-v2-dev"
LOG="/tmp/claude-title-fix.log"
FIXED=0

if [ ! -d "$SESSIONS_DIR" ]; then
    exit 0
fi

for f in "$SESSIONS_DIR"/*.jsonl; do
    [ -f "$f" ] || continue

    # Get the last custom-title entry in the file
    CUSTOM_TITLE=$(grep '"custom-title"' "$f" 2>/dev/null | tail -1 || true)

    if [ -z "$CUSTOM_TITLE" ]; then
        # No custom title set — nothing to protect
        continue
    fi

    # Check if the last title-related entry is a last-prompt or ai-title (not custom-title)
    # We look at the last 4KB of the file (where the extension reads from)
    TAIL=$(tail -c 4096 "$f" 2>/dev/null || true)

    # If custom-title is already in the tail, it's fine
    if echo "$TAIL" | grep -q '"custom-title"'; then
        continue
    fi

    # Custom title exists but not in the tail — it's been pushed out. Re-append it.
    # Preserve mtime
    ORIG_MTIME=$(stat -f "%m" "$f" 2>/dev/null || stat -c "%Y" "$f" 2>/dev/null || true)

    echo "$CUSTOM_TITLE" >> "$f"

    # Restore mtime
    if [ -n "$ORIG_MTIME" ]; then
        touch -t "$(date -r "$ORIG_MTIME" "+%Y%m%d%H%M.%S" 2>/dev/null || true)" "$f" 2>/dev/null || true
    fi

    BASENAME=$(basename "$f")
    FIXED=$((FIXED + 1))
    echo "$(date -Iseconds) FIXED: $BASENAME — re-appended custom-title to tail" >> "$LOG"
done

if [ "$FIXED" -gt 0 ]; then
    echo "$(date -Iseconds) Run complete: $FIXED session(s) fixed" >> "$LOG"
fi
