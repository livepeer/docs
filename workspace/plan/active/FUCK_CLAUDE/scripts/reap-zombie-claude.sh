#!/bin/bash
# reap-zombie-claude.sh — Kill orphaned Claude Code processes
#
# The VS Code Claude extension spawns a new `claude` binary + 2 MCP node
# children for each sidebar session and never kills them when the session
# ends. Left unchecked, this eats all your RAM and buries you in swap.
#
# Logic:
#   1. List all `claude --output-format` processes
#   2. Skip the 3 newest by elapsed time (likely the active session)
#   3. Skip any with >1% current CPU (actively working)
#   4. Skip any younger than 5 minutes (still starting up)
#   5. Kill the rest + their orphaned MCP node children
#   6. Log what was killed
#
# Related root causes (CANONICAL-DIAGNOSTIC.md):
#   #1  sessions-index.json not written — extension can't track what's alive
#   #11 state.cache wiped on crash — extension loses track of running sessions
#
# Install via launchd: see com.alison.claude-reaper.plist
# Manual: bash reap-zombie-claude.sh [--dry-run]

set -euo pipefail

DRY_RUN=false
[[ "${1:-}" == "--dry-run" ]] && DRY_RUN=true

LOG_DIR="$HOME/.claude/logs"
mkdir -p "$LOG_DIR"
LOG_FILE="$LOG_DIR/reaper.log"

timestamp() { date '+%Y-%m-%d %H:%M:%S'; }
log() { echo "[$(timestamp)] $*" >> "$LOG_FILE"; }

# Convert macOS etime format (MM:SS, HH:MM:SS, D-HH:MM:SS) to seconds
etime_to_seconds() {
  local t="$1"
  local days=0 hours=0 mins=0 secs=0

  if [[ "$t" == *-* ]]; then
    days="${t%%-*}"
    t="${t#*-}"
  fi

  # Count colons to determine format
  local colons
  colons=$(echo "$t" | tr -cd ':' | wc -c | xargs)

  if [[ "$colons" -eq 2 ]]; then
    # HH:MM:SS
    IFS=: read -r hours mins secs <<< "$t"
  elif [[ "$colons" -eq 1 ]]; then
    # MM:SS
    IFS=: read -r mins secs <<< "$t"
  else
    secs="$t"
  fi

  # Strip leading zeros to prevent octal interpretation
  days=$((10#$days)) hours=$((10#$hours)) mins=$((10#$mins)) secs=$((10#$secs))
  echo $(( days*86400 + hours*3600 + mins*60 + secs ))
}

# Collect all claude --output-format processes: PID, %CPU, etime
PROCS=$(ps -eo pid,%cpu,etime,comm 2>/dev/null \
  | grep 'claude' \
  | grep -v grep) || true

# Filter to only claude --output-format processes by checking full args
FILTERED=""
while IFS= read -r line; do
  pid=$(echo "$line" | awk '{print $1}')
  full_args=$(ps -p "$pid" -o args= 2>/dev/null) || continue
  if echo "$full_args" | grep -q 'claude --output-format'; then
    FILTERED="${FILTERED}${line}
"
  fi
done <<< "$PROCS"

# Remove trailing newline
FILTERED=$(echo "$FILTERED" | sed '/^$/d')
TOTAL=$(echo "$FILTERED" | grep -c . 2>/dev/null || echo 0)

if [[ "$TOTAL" -le 3 ]]; then
  log "OK: only $TOTAL claude processes running — nothing to reap"
  exit 0
fi

# Sort by elapsed time ascending (newest first) — need to convert etime to seconds for sorting
SORTED=$(echo "$FILTERED" | while IFS= read -r line; do
  etime_str=$(echo "$line" | awk '{print $3}')
  secs=$(etime_to_seconds "$etime_str")
  echo "$secs $line"
done | sort -n)

# Keep the 3 newest (first 3 lines = lowest elapsed seconds)
KEEP_PIDS=$(echo "$SORTED" | head -3 | awk '{print $2}')

KILL_COUNT=0
SKIP_ACTIVE=0

echo "$SORTED" | tail -n +4 | while IFS= read -r line; do
  elapsed_secs=$(echo "$line" | awk '{print $1}')
  pid=$(echo "$line" | awk '{print $2}')
  cpu=$(echo "$line" | awk '{print $3}')

  # Skip if CPU > 1% (actively working)
  if awk "BEGIN {exit !($cpu > 1.0)}"; then
    SKIP_ACTIVE=$((SKIP_ACTIVE + 1))
    continue
  fi

  # Skip if less than 5 minutes old (300 seconds)
  if [[ "$elapsed_secs" -lt 300 ]]; then
    continue
  fi

  if $DRY_RUN; then
    echo "[DRY RUN] Would kill PID $pid (CPU: ${cpu}%, age: ${elapsed_secs}s)"
    log "DRY RUN: would kill PID $pid (CPU: ${cpu}%, age: ${elapsed_secs}s)"
  else
    kill "$pid" 2>/dev/null && log "Killed claude PID $pid (CPU: ${cpu}%, age: ${elapsed_secs}s)" || true
    KILL_COUNT=$((KILL_COUNT + 1))
  fi
done

# Clean up orphaned MCP node children
sleep 1
ORPHAN_COUNT=0
ORPHANS=$(ps aux 2>/dev/null \
  | grep -E 'claude-session-continuity-mcp|thedotmack.*mcp-server' \
  | grep -v grep \
  | awk '{print $2}') || true

if [[ -n "$ORPHANS" ]]; then
  for opid in $ORPHANS; do
    oppid=$(ps -p "$opid" -o ppid= 2>/dev/null | xargs) || continue
    # If parent is 1 (reparented to launchd) or parent is dead, it's an orphan
    if [[ "$oppid" == "1" ]] || ! ps -p "$oppid" > /dev/null 2>&1; then
      if $DRY_RUN; then
        echo "[DRY RUN] Would kill orphaned MCP node PID $opid (parent: $oppid)"
        log "DRY RUN: would kill orphaned MCP node PID $opid"
      else
        kill "$opid" 2>/dev/null && log "Killed orphaned MCP node PID $opid" || true
        ORPHAN_COUNT=$((ORPHAN_COUNT + 1))
      fi
    fi
  done
fi

REMAINING=$(ps aux 2>/dev/null | grep 'claude --output-format' | grep -v grep | wc -l | xargs)
log "Reap complete: killed $KILL_COUNT claude + $ORPHAN_COUNT MCP nodes. $REMAINING remain. Skipped $SKIP_ACTIVE active."
