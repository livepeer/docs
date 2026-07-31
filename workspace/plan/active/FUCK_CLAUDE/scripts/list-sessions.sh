#!/bin/bash
# list-sessions.sh — List all Claude Code sessions with titles, sorted by date
# No VS Code dependency. Reads JSONL files directly.
PROJ="${1:-$HOME/.claude/projects/-Users-alisonhaire-Documents-Livepeer-Docs-v2-dev}"

for f in "$PROJ"/*.jsonl; do
  [ -f "$f" ] || continue
  id=$(basename "$f" .jsonl)
  size=$(($(stat -f "%z" "$f" 2>/dev/null) / 1024))
  mtime=$(stat -f "%Sm" -t "%Y-%m-%d %H:%M" "$f" 2>/dev/null)
  title=$(grep '"custom-title"' "$f" 2>/dev/null | tail -1 | python3 -c "import sys,json; d=json.loads(sys.stdin.read()); print(d.get('customTitle',''))" 2>/dev/null)
  if [ -z "$title" ]; then
    title=$(grep '"ai-title"' "$f" 2>/dev/null | tail -1 | python3 -c "import sys,json; d=json.loads(sys.stdin.read()); print(d.get('aiTitle',''))" 2>/dev/null)
  fi
  [ -z "$title" ] && title="(no title)"
  echo "$mtime | ${size}KB | $id | $title"
done | sort -r
