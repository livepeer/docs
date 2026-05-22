#!/bin/bash
# patch-extension.sh — Apply buffer size fix to current active Claude Code extension
# Finds the current active version automatically. Creates backup before patching.
# Handles multiple buffer variables (v2.1.86 has 2 UUID-adjacent buffers).
set -euo pipefail

DRY_RUN="${1:-}"

# Find the most recent Claude Code extension
EXT_DIR=$(ls -1dt "$HOME/.vscode/extensions/anthropic.claude-code-"*"-darwin-arm64" 2>/dev/null | head -1)

if [ -z "$EXT_DIR" ]; then
    echo "[ERROR] No Claude Code extension found in ~/.vscode/extensions/"
    exit 1
fi

VERSION=$(basename "$EXT_DIR" | sed 's/anthropic.claude-code-//' | sed 's/-darwin-arm64//')
EXT_JS="$EXT_DIR/extension.js"

echo "=== Patch Claude Code Extension ==="
echo "Version: $VERSION"
echo "Path:    $EXT_JS"
echo ""

if [ ! -f "$EXT_JS" ]; then
    echo "[ERROR] extension.js not found"
    exit 1
fi

# Find ALL buffer variables next to UUID regexes
# Pattern: var VARNAME=65536,VARNAME2=/^[0-9a-f]{8}-
BUFFER_LINES=$(grep -n '=65536.*\[0-9a-f\]' "$EXT_JS" || true)

if [ -z "$BUFFER_LINES" ]; then
    echo "[INFO] No 65536 constants found next to UUID regexes."
    echo "Checking if already patched..."
    PATCHED=$(grep -c '=524288.*\[0-9a-f\]' "$EXT_JS" || true)
    if [ "$PATCHED" -gt 0 ]; then
        echo "[OK] Extension already patched ($PATCHED buffer(s) at 524288)"
        exit 0
    fi
    echo "[WARN] No buffer variables found. Extension structure may have changed."
    echo ""
    echo "All 65536 occurrences:"
    grep -n '=65536' "$EXT_JS" | while read line; do
        linenum=$(echo "$line" | cut -d: -f1)
        echo "  Line $linenum: $(echo "$line" | cut -d: -f2- | cut -c1-120)"
    done
    exit 1
fi

BUFFER_COUNT=$(echo "$BUFFER_LINES" | wc -l | tr -d ' ')
echo "Found $BUFFER_COUNT buffer variable(s) next to UUID regexes:"
echo "$BUFFER_LINES" | while read line; do
    linenum=$(echo "$line" | cut -d: -f1)
    # Extract variable name
    varname=$(echo "$line" | grep -o 'var [a-zA-Z$_]*=65536' | sed 's/var //' | sed 's/=65536//')
    echo "  Line $linenum: var $varname = 65536 (64KB)"
done
echo ""

if [ "$DRY_RUN" = "--dry-run" ]; then
    echo "[DRY RUN] Would:"
    echo "  1. Backup extension.js"
    echo "  2. Change $BUFFER_COUNT buffer(s) from 65536 (64KB) to 524288 (512KB)"
    echo ""
    echo "Run without --dry-run to apply."
    exit 0
fi

# Check VS Code
if pgrep -x "Code" > /dev/null 2>&1; then
    echo "[WARNING] VS Code is running. Restart required after patching."
fi

# Create backup
BACKUP="$EXT_JS.backup-$(date +%Y%m%d-%H%M%S)"
cp "$EXT_JS" "$BACKUP"
echo "[OK] Backup created: $(basename "$BACKUP")"

# Apply patch to each buffer line
PATCHED=0
echo "$BUFFER_LINES" | while read line; do
    linenum=$(echo "$line" | cut -d: -f1)
    sed -i '' "${linenum}s/=65536,/=524288,/" "$EXT_JS"
    verify=$(sed -n "${linenum}p" "$EXT_JS" | grep -c '524288' || true)
    if [ "$verify" -gt 0 ]; then
        varname=$(echo "$line" | grep -o 'var [a-zA-Z$_]*=65536' | sed 's/var //' | sed 's/=65536//')
        echo "[OK] Line $linenum: $varname patched 65536 -> 524288"
    else
        echo "[ERROR] Line $linenum: patch failed"
    fi
done

# Final verification
TOTAL_PATCHED=$(grep -c '=524288.*\[0-9a-f\]' "$EXT_JS" || true)
echo ""
echo "Verification: $TOTAL_PATCHED buffer(s) now at 524288 (512KB)"

if [ "$TOTAL_PATCHED" -eq "$BUFFER_COUNT" ]; then
    echo "[DONE] All buffers patched. Restart VS Code for changes to take effect."
else
    echo "[WARN] Expected $BUFFER_COUNT patches but found $TOTAL_PATCHED. Check manually."
fi

echo ""
echo "If anything breaks, restore with:"
echo "  cp '$BACKUP' '$EXT_JS'"
